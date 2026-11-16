/* Extra pages: statement lab, analyst toolkit, sectors & business models, Saudi directory, full career ladders. */
(() => {
  const { P, T, tm, tmE, fmt, sgn, ARW, ar, sec, head, bars, byId, $, $$, S } = FM;
  const pct = (x, d = 1) => (x == null || !isFinite(x)) ? '—' : fmt(x * 100, d) + '%';
  const xx = (x, d = 1) => (x == null || !isFinite(x)) ? '—' : fmt(x, d) + 'x';
  const dd = x => (x == null || !isFinite(x)) ? '—' : fmt(x, 0);
  const num = n => n == null ? '' : (Math.abs(n) < 100 && n % 1 !== 0 ? fmt(n, 2) : (n < 0 ? '(' + fmt(-n) + ')' : fmt(n)));
  const avg = a => (a[0] + a[1]) / 2;

  SOURCES.unshift(
    ['Almarai Annual Report 2025 — audited consolidated financial statements', 'https://annualreport.almarai.com/financial-statements/consolidated-statement-of-profit-or-loss/'],
    ['Apple Inc. — Form 10-K, fiscal 2025 (Item 8)', 'https://s2.q4cdn.com/470004039/files/doc_earnings/2025/q4/filing/10K-Q4-2025-as-filed.pdf'],
    ['Al Rajhi Bank — Integrated Annual Report 2025, consolidated statement of income', 'https://www.alrajhibank.com.sa/ir25/financial_statements/consolidated_statement_of_income.html'],
    ['خريطة القطاع المالي السعودي — عبدالله أكرم، فسيلة المالية (دليل المستخدم)', '#directory']
  );

  /* ---------- ladders ---------- */
  FM.ladderFull = id => { const L = LADDERS[id]; return `<div class="lad">${L.l.map((r, i) => `<div style="--i:${i}"><span class="n">${i + 1}</span><b>${tm(r[0])}</b><span class="badge">${r[1]} ${T(['سنة', 'yrs'])}</span>${T(r[2]) ? `<small>${T(r[2])}</small>` : ''}</div>`).join('')}</div>`; };

  /* ---------- statement lab ---------- */
  let labId = 'almarai', labTab = 'is';
  const ratiosOf = c => {
    const k = c.k;
    if (c.kind === 'bank') {
      const opex = k.opex;
      return [
        ['Cost of funds ÷ gross income', pct(k.cof[0] / k.gfi[0]), pct(k.cof[1] / k.gfi[1]), ['كم يأكل التمويل من الدخل الإجمالي.', 'How much of gross income funding consumes.']],
        ['Net financing margin (on avg assets)', pct(k.nfi[0] / avg(k.ta), 2), '—', ['تقريب لهامش صافي الربح NPM محسوب على متوسط إجمالي الأصول.', 'A proxy for the net profit margin, on average total assets.']],
        ['Fee income share', pct(k.fee[0] / k.toi[0]), pct(k.fee[1] / k.toi[1]), ['دخل الرسوم من إجمالي دخل العمليات.', 'Fees as a share of total operating income.']],
        ['Cost-to-income (excl. impairment)', pct(opex[0] / k.toi[0]), pct(opex[1] / k.toi[1]), ['المصاريف التشغيلية بدون المخصصات ÷ دخل العمليات.', 'Operating costs excluding provisions ÷ operating income.']],
        ['Cost of risk', pct(k.imp[0] / avg(k.fin), 2), '—', ['المخصص ÷ متوسط التمويل.', 'Impairment ÷ average financing.']],
        ['Zakat rate', pct(k.zak[0] / k.pbz[0]), pct(k.zak[1] / k.pbz[1]), ['الزكاة ÷ الربح قبل الزكاة.', 'Zakat ÷ pre-zakat profit.']],
        ['ROE (on avg total equity)', pct(k.ni[0] / avg(k.eq)), '—', ['أقل من المعلن 23.4% لأن المقام هنا يشمل الصكوك الدائمة.', 'Below the reported 23.4% because the denominator here includes perpetual sukuk.']],
        ['ROA', pct(k.ni[0] / avg(k.ta), 2), '—', ['صافي الدخل ÷ متوسط الأصول. فوق 2% ممتاز لبنك.', 'Net income ÷ average assets. Above 2% is excellent for a bank.']],
        ['Leverage (assets ÷ equity)', xx(k.ta[0] / k.eq[0]), xx(k.ta[1] / k.eq[1]), ['كل ريال حقوق ملكية يحمل هذا القدر من الأصول.', 'Assets carried by each riyal of equity.']],
        ['Financing ÷ deposits (simple)', pct(k.fin[0] / k.dep[0]), pct(k.fin[1] / k.dep[1]), ['فوق 100%: التمويل أكبر من الودائع.', 'Above 100%: financing exceeds deposits.']],
        ['Financing ÷ total assets', pct(k.fin[0] / k.ta[0]), pct(k.fin[1] / k.ta[1]), ['', '']],
        ['Financing growth / deposit growth', pct(k.fin[0] / k.fin[1] - 1) + ' / ' + pct(k.dep[0] / k.dep[1] - 1), '—', ['التمويل ينمو أسرع من الودائع.', 'Financing is growing faster than deposits.']]
      ];
    }
    const eb = [k.op[0] + k.da[0], k.op[1] + k.da[1]], nd = [k.debt[0] - k.cash[0] - k.sec[0], k.debt[1] - k.cash[1] - k.sec[1]], fcf = [k.cfo[0] - k.capex[0], k.cfo[1] - k.capex[1]];
    const d = i => [k.recv[i] / k.rev[i] * 365, k.inv[i] / k.cogs[i] * 365, k.ap[i] / k.cogs[i] * 365];
    const d0 = d(0), d1 = d(1);
    return [
      ['Gross margin', pct(k.gp[0] / k.rev[0]), pct(k.gp[1] / k.rev[1]), ['', '']],
      ['Operating margin', pct(k.op[0] / k.rev[0]), pct(k.op[1] / k.rev[1]), ['', '']],
      ['EBITDA margin (computed)', pct(eb[0] / k.rev[0]), pct(eb[1] / k.rev[1]), ['الربح التشغيلي + الإهلاك والإطفاء من قائمة التدفقات.', 'Operating profit + depreciation and amortisation from the cash flow statement.']],
      ['Net margin', pct(k.ni[0] / k.rev[0]), pct(k.ni[1] / k.rev[1]), ['', '']],
      ['ROE', pct(k.ni[0] / avg(k.eq)), '—', ['صافي الربح ÷ متوسط حقوق الملكية.', 'Net income ÷ average equity.']],
      ['ROA', pct(k.ni[0] / avg(k.ta)), '—', ['', '']],
      ['Asset turnover', xx(k.rev[0] / avg(k.ta), 2), '—', ['مبيعات لكل وحدة أصول.', 'Sales per unit of assets.']],
      ['Leverage (assets ÷ equity)', xx(k.ta[0] / k.eq[0], 2), xx(k.ta[1] / k.eq[1], 2), ['', '']],
      ['Current ratio', xx(k.ca[0] / k.cl[0], 2), xx(k.ca[1] / k.cl[1], 2), ['', '']],
      ['Net debt (excl. leases)', fmt(nd[0]), fmt(nd[1]), ['الدين ناقص النقد والأوراق المالية. السالب يعني نقداً صافياً.', 'Debt less cash and securities. Negative means net cash.']],
      ['Net debt ÷ EBITDA', nd[0] > 0 ? xx(nd[0] / eb[0], 2) : T(['نقد صافٍ', 'Net cash']), nd[1] > 0 ? xx(nd[1] / eb[1], 2) : T(['نقد صافٍ', 'Net cash']), ['قد يختلف عن رقم الشركة لاختلاف تعريف EBITDA والدين.', 'May differ from the company’s figure because definitions of EBITDA and debt vary.']],
      ['Interest coverage (EBIT ÷ finance cost)', k.fin[0] ? xx(k.op[0] / k.fin[0]) : '—', k.fin[1] ? xx(k.op[1] / k.fin[1]) : '—', ['', '']],
      ['DSO / DIO / DPO (days)', `${dd(d0[0])} / ${dd(d0[1])} / ${dd(d0[2])}`, `${dd(d1[0])} / ${dd(d1[1])} / ${dd(d1[2])}`, ['أيام التحصيل / المخزون / السداد.', 'Collection / inventory / payable days.']],
      ['Cash conversion cycle (days)', dd(d0[0] + d0[1] - d0[2]), dd(d1[0] + d1[1] - d1[2]), ['السالب يعني أن الموردين يموّلون النشاط.', 'Negative means suppliers fund the business.']],
      ['CapEx ÷ revenue', pct(k.capex[0] / k.rev[0]), pct(k.capex[1] / k.rev[1]), ['كثافة رأس المال.', 'Capital intensity.']],
      ['D&A ÷ revenue', pct(k.da[0] / k.rev[0]), pct(k.da[1] / k.rev[1]), ['', '']],
      ['Operating cash ÷ net income', xx(k.cfo[0] / k.ni[0], 2), xx(k.cfo[1] / k.ni[1], 2), ['جودة الأرباح: هل تتحول إلى نقد؟', 'Earnings quality: does profit turn into cash?']],
      ['Free cash flow (CFO − CapEx)', fmt(fcf[0]), fmt(fcf[1]), ['', '']],
      ['Shareholder payout ÷ net income', pct((k.div[0] + k.bb[0]) / k.ni[0], 0), pct((k.div[1] + k.bb[1]) / k.ni[1], 0), ['التوزيعات وإعادة الشراء.', 'Dividends plus buybacks.']],
      ['Effective tax / zakat rate', pct(k.tax[0] / k.pbt[0]), pct(k.tax[1] / k.pbt[1]), ['', '']]
    ];
  };
  const stTable = (c, rows, base) => `<div class="scroll"><table style="min-width:540px"><thead><tr><th>${T(c.unit)}</th><th class="n">2025</th><th class="n">2024</th><th class="n">Δ</th>${base ? `<th class="n">${T(['% من الأساس', '% of base'])}</th>` : ''}</tr></thead><tbody>${rows.map(r => {
    if (r[3] === 'h') return `<tr class="hd"><td colspan="${base ? 5 : 4}">${tm(r[0])}</td></tr>`;
    const [l, a, b, lv, note] = r, ch = (a != null && b && a * b > 0) ? (a / b - 1) * 100 : null, big = Math.abs(a) >= 100;
    return `<tr class="${lv === 2 ? 'tot' : lv === 1 ? 'sub' : ''}"><td>${tm(l)}${note ? `<small>${T(note)}</small>` : ''}</td><td class="n"><b>${num(a)}</b></td><td class="n">${num(b)}</td><td class="n ${ch > 0 ? 'pos' : ch < 0 ? 'neg' : ''}">${ch == null || !isFinite(ch) || Math.abs(ch) > 999 ? '—' : sgn(ch) + '%'}</td>${base ? `<td class="n">${big && a != null ? fmt(Math.abs(a) / base * 100, 1) + '%' : ''}</td>` : ''}</tr>`;
  }).join('')}</tbody></table></div>`;
  const cmp3 = () => {
    const [b, a, p] = ['rajhi', 'almarai', 'apple'].map(i => LAB.find(c => c.id === i)), na = `<span class="note">${T(['لا ينطبق', 'n/a'])}</span>`;
    const corp = (c, f) => f(c.k), rows = [
      [T(['"الإيراد" الذي تبدأ به القائمة', 'The “revenue” line the statement starts with']), T(['صافي دخل التمويل', 'Net financing income']), T(['مبيعات منتجات', 'Product sales']), T(['مبيعات منتجات وخدمات', 'Product and service sales'])],
      ['Gross margin', na, corp(a, k => pct(k.gp[0] / k.rev[0])), corp(p, k => pct(k.gp[0] / k.rev[0]))],
      ['Net margin', pct(b.k.ni[0] / b.k.toi[0]), corp(a, k => pct(k.ni[0] / k.rev[0])), corp(p, k => pct(k.ni[0] / k.rev[0]))],
      ['ROA', pct(b.k.ni[0] / avg(b.k.ta), 2), corp(a, k => pct(k.ni[0] / avg(k.ta))), corp(p, k => pct(k.ni[0] / avg(k.ta)))],
      ['Leverage (assets ÷ equity)', xx(b.k.ta[0] / b.k.eq[0]), corp(a, k => xx(k.ta[0] / k.eq[0])), corp(p, k => xx(k.ta[0] / k.eq[0]))],
      ['ROE', pct(b.k.ni[0] / avg(b.k.eq)), corp(a, k => pct(k.ni[0] / avg(k.eq))), corp(p, k => pct(k.ni[0] / avg(k.eq)))],
      ['Asset turnover', xx(b.k.toi[0] / avg(b.k.ta), 2), corp(a, k => xx(k.rev[0] / avg(k.ta), 2)), corp(p, k => xx(k.rev[0] / avg(k.ta), 2))],
      ['CapEx ÷ revenue', na, corp(a, k => pct(k.capex[0] / k.rev[0])), corp(p, k => pct(k.capex[0] / k.rev[0]))],
      ['Inventory days', na, corp(a, k => dd(k.inv[0] / k.cogs[0] * 365)), corp(p, k => dd(k.inv[0] / k.cogs[0] * 365))],
      ['Operating cash ÷ net income', na, corp(a, k => xx(k.cfo[0] / k.ni[0], 2)), corp(p, k => xx(k.cfo[0] / k.ni[0], 2))],
      [T(['المضاعف المناسب للتقييم', 'The fitting valuation multiple']), 'P/B · P/E', 'EV/EBITDA · P/E', 'P/E · FCF Yield'],
      [T(['أهم ما تراقبه', 'What to watch most']), T(['جودة التمويل وتكلفة الودائع', 'Financing quality and deposit cost']), T(['تكلفة المدخلات والعائد على التوسعات', 'Input costs and return on expansion']), T(['نمو الخدمات ودورة iPhone', 'Services growth and the iPhone cycle'])]
    ];
    return `<div class="scroll"><table><thead><tr><th>FY2025</th>${[b, a, p].map(c => `<th data-cat="${c.cat}" style="color:var(--acc)">${T(c.name)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr><td><b class="en">${r[0]}</b></td><td class="n">${r[1]}</td><td class="n">${r[2]}</td><td class="n">${r[3]}</td></tr>`).join('')}</tbody></table></div>
    <div class="grid g3">${[
      [['ثلاث طرق مختلفة لصنع ROE', 'Three different ways to build ROE'], ['الراجحي: عائد أصول 2.5% فقط مضروب في رافعة 7 مرات. المراعي: هامش 11% ودوران أصول 0.58 ورافعة أقل من 2. Apple: هامش 27%، ورقمها يتضخم لأن إعادة الشراء صغّرت حقوق الملكية.', 'Al Rajhi: a return on assets of just 2.5% times 7x leverage. Almarai: an 11% margin, asset turnover of 0.58 and under 2x leverage. Apple: a 27% margin, with the figure inflated because buybacks shrank equity.']],
      [['كثافة رأس المال تحدد كل شيء', 'Capital intensity shapes everything'], ['المراعي تنفق نحو ربع إيراداتها على الأصول، و Apple 3%. لهذا نقد Apple يذهب للمساهمين ونقد المراعي يذهب للمزارع والمصانع.', 'Almarai spends about a quarter of revenue on assets; Apple spends 3%. So Apple’s cash goes to shareholders and Almarai’s to farms and plants.']],
      [['لا تقارن نسبة بين قطاعين', 'Do not compare a ratio across sectors'], ['رافعة 7 مرات طبيعية لبنك وخطيرة لمصنع. نسبة جارية 0.9 قوة عند Apple وضعف عند غيرها. قارن الشركة بمثيلاتها وبتاريخها.', 'Leverage of 7x is normal for a bank and dangerous for a manufacturer. A current ratio of 0.9 is strength at Apple and weakness elsewhere. Compare a company with its peers and its own history.']]
    ].map(([t, d]) => `<div class="card soft"><h3>${T(t)}</h3><p>${T(d)}</p></div>`).join('')}</div>`;
  };
  P.lab = () => `
    ${head(T(['ثلاث شركات · قوائم كاملة · السنة المالية 2025', 'Three companies · full statements · fiscal 2025']), T(['مختبر قراءة القوائم', 'Statement reading lab']), T(['بنك، ومصنع أغذية، وشركة تقنية: ثلاثة نماذج لا يشبه أحدها الآخر. القوائم كما نُشرت، مع ملاحظة تحت كل سطر مهم تشرح ماذا يعني وماذا تسأل عنه.', 'A bank, a food manufacturer and a technology company: three models with nothing in common. The statements as published, with a note under each key line on what it means and what to ask.']))}
    <div class="chips">${LAB.map(c => `<button type="button" class="chip" data-cat="${c.cat}" data-act="lab-c" data-id="${c.id}" aria-pressed="${c.id === labId}">${T(c.name)} <span class="tr" style="direction:inherit">· ${T(c.tag).split(' · ')[0]}</span></button>`).join('')}</div>
    <div id="lab-out"></div>
    ${sec(T(['الثلاث جنباً إلى جنب', 'The three side by side']), '', cmp3())}
    <div class="cta"><a class="btn pri" href="#toolkit">${T(['أدوات المحلل وقائمة الفحص', 'Analyst toolkit and checklist'])}</a><a class="btn" href="#statements">${T(['راجع أساسيات القوائم الثلاث', 'Review the three-statement basics'])}</a></div>`;
  const labRender = () => {
    const c = LAB.find(q => q.id === labId), tabs = [['is', 'Income Statement|قائمة الدخل'], ['bs', 'Balance Sheet|الميزانية'], ['cf', 'Cash Flow|التدفقات النقدية'], ['ra', 'Ratios|النسب المحسوبة'], ['how', 'How to read it|كيف تقرؤها']];
    let body;
    if (labTab === 'is') body = stTable(c, c.is, c.kind === 'bank' ? c.k.toi[0] : c.k.rev[0]) + `<p class="note">${T(['عمود "% من الأساس": كل بند كنسبة من ', 'The “% of base” column shows each line as a share of '])}${c.kind === 'bank' ? tm('Total operating income|إجمالي دخل العمليات') : tm('Revenue|الإيرادات')}. ${T(['هذا اسمه Common-size Analysis.', 'This is common-size analysis.'])}</p>`;
    else if (labTab === 'bs') body = stTable(c, c.bs, c.k.ta[0]) + `<p class="note">${T(['كل بند كنسبة من إجمالي الأصول.', 'Each line as a share of total assets.'])}${c.kind === 'bank' ? ' ' + T(['البنود المكتوب أمامها "مشتق" حسبناها من الإجماليات لأن تفصيلها لم يكن متاحاً للقراءة.', 'Lines marked derived were computed from the totals because their breakdown could not be read.']) : ''}</p>`;
    else if (labTab === 'cf') body = c.cf ? stTable(c, c.cf, 0) : `<div class="killer" style="border-color:var(--gold);background:color-mix(in srgb,var(--gold) 10%,var(--surface))">${T(c.cfNote)}</div>`;
    else if (labTab === 'ra') body = `<div class="grid g4">${c.reported.map(([k, v]) => `<div class="stat"><b>${v}</b><span>${k} · ${T(['معلن', 'reported'])}</span></div>`).join('')}</div><div class="scroll"><table><thead><tr><th>${T(['نسبة محسوبة من القوائم', 'Ratio computed from the statements'])}</th><th class="n">2025</th><th class="n">2024</th></tr></thead><tbody>${ratiosOf(c).map(r => `<tr><td><b class="en">${r[0]}</b>${T(r[3]) ? `<small>${T(r[3])}</small>` : ''}</td><td class="n"><b>${r[1]}</b></td><td class="n">${r[2]}</td></tr>`).join('')}</tbody></table></div><p class="note">${T(['النسب محسوبة آلياً من الأرقام المعروضة. نسب المتوسطات (ROE, ROA) تظهر لسنة 2025 فقط لأن أرصدة 2023 غير معروضة.', 'Ratios are computed from the figures shown. Average-based ratios (ROE, ROA) appear for 2025 only because 2023 balances are not shown.'])}</p>`;
    else body = `<div class="steps">${c.steps.map(s => `<div class="step"><small style="color:var(--fg);font-size:.95rem">${T(s)}</small></div>`).join('')}</div>`;
    $('#lab-out').innerHTML = `<section data-cat="${c.cat}"><div class="card acc"><div class="sec-h"><h2 style="color:var(--acc)">${T(c.name)}</h2><p>${T(c.tag)} · ${T(c.fy)}</p></div><p>${T(c.why)}</p></div>
      <div class="chips">${tabs.map(([k, t]) => `<button type="button" class="chip" data-act="lab-t" data-k="${k}" aria-pressed="${k === labTab}">${tm(t)}</button>`).join('')}</div>${body}
      <p class="note">${T(['المصدر', 'Source'])}: <span class="en" style="font-weight:400">${c.src}</span></p></section>`;
    $$('[data-act="lab-c"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === labId));
  };
  FM.after.lab = labRender;
  FM.acts['lab-c'] = b => { labId = b.dataset.id; labRender(); };
  FM.acts['lab-t'] = b => { labTab = b.dataset.k; labRender(); };

  /* ---------- analyst toolkit ---------- */
  P.toolkit = () => { const k = TOOLKIT; return `
    ${head(T(['ما يعرفه المحلل ولا يُدرَّس في المحاضرة', 'What analysts know that lectures skip']), T(['أدوات المحلل المالي', 'The analyst’s toolkit']), T(['بأي ترتيب تقرأ التقرير السنوي، ما العلامات التي تنبهك، كيف تقرأ صفحة السهم، وما المنصات التي يعمل عليها المحترفون.', 'The order in which to read an annual report, the warning signs, how to read a stock page, and the platforms professionals work on.']))}
    ${sec(T(['ترتيب قراءة التقرير السنوي', 'The order for reading an annual report']), '', `<div class="steps">${k.order.map(([t, d]) => `<div class="step"><b>${tm(t)}</b><small>${T(d)}</small></div>`).join('')}</div>`)}
    ${sec(T(['علامات التحذير', 'Warning signs']), ar() ? 'Red Flags' : '', `<div class="grid g3" style="--acc:var(--danger)">${k.flags.map(f => `<div class="kpi"><b style="font-family:inherit;font-size:1rem;direction:inherit">${ar() ? f[0] : f[1]}</b><small>${T(f[2])}</small></div>`).join('')}</div>`)}
    ${sec(T(['ورقة النسب المالية', 'The ratio cheat sheet']), '', k.ratios.map(g => `<div class="card"><h3>${tm(g.g)}</h3><div class="scroll"><table><tbody>${g.r.map(r => `<tr><td><b class="en">${r[0]}</b></td><td><span class="formula" style="display:inline-block;padding:4px 8px">${r[1]}</span></td><td>${T(r[2])}</td></tr>`).join('')}</tbody></table></div></div>`).join(''))}
    ${sec(T(['كيف تقرأ صفحة السهم', 'How to read a stock page']), '', `<div class="grid g3" style="--acc:var(--blue)">${k.quote.map(([t, d]) => `<div class="kpi"><span>${tm(t)}</span><small>${T(d)}</small></div>`).join('')}</div>`)}
    ${sec(T(['أساسيات السوق السعودي', 'Saudi market basics']), '', `<div class="card"><ul class="clean">${k.saudi.map(x => `<li>${T(x)}</li>`).join('')}</ul></div>`)}
    ${sec(T(['المنصات والأدوات', 'Platforms and tools']), T(['من Bloomberg إلى المصادر المجانية', 'From Bloomberg to free sources']), k.platforms.map((g, i) => `<div class="card" style="--acc:var(--${['magenta', 'emerald', 'gold'][i]})"><h3 style="color:var(--acc)">${T(g.g)}</h3><div class="grid g2">${g.l.map(([n, d]) => `<div class="kpi"><b>${n}</b><small>${T(d)}</small></div>`).join('')}</div></div>`).join(''))}
    ${sec(T(['روتين موسم النتائج', 'The earnings season routine']), '', `<div class="steps">${k.routine.map(r => `<div class="step"><small style="color:var(--fg);font-size:.95rem">${T(r)}</small></div>`).join('')}</div>`)}
    <div class="cta"><a class="btn pri" href="#lab">${T(['طبّق على قوائم حقيقية', 'Apply it to real statements'])}</a></div>`; };

  /* ---------- sectors & business models ---------- */
  P.sectors = () => `
    ${head(T(['17 قطاعاً · 20 نموذج عمل', '17 sectors · 20 business models']), T(['القطاعات ونماذج العمل', 'Sectors & business models']), T(['قبل أن تحلل شركة اسأل سؤالين: في أي قطاع تعمل، وبأي نموذج تربح؟ القطاع يحدد المؤشرات التي تتابعها، والنموذج يحدد شكل القوائم المالية.', 'Before analysing a company ask two things: which sector is it in, and by which model does it earn? The sector sets the metrics you follow, and the model sets the shape of the statements.']))}
    <input class="inp" id="sx-q" type="search" style="direction:inherit;font-family:inherit" placeholder="${T(['ابحث عن قطاع أو شركة أو نموذج…', 'Search a sector, company or model…'])}" aria-label="Search">
    <div id="sx-out"></div>`;
  const sxRender = () => {
    const q = ($('#sx-q').value || '').trim().toLowerCase(), hit = o => !q || JSON.stringify(o).toLowerCase().includes(q);
    const s = SECTORS.filter(hit), b = BMODELS.filter(hit);
    $('#sx-out').innerHTML = (s.length ? sec(T(['قطاعات السوق', 'Market sectors']), T(['بتصنيف تداول السعودية (GICS)', 'By Saudi Exchange classification (GICS)']), `<div class="grid g2">${s.map(x => `<div class="card" style="--acc:var(--${x.c})"><h3 style="color:var(--acc)">${tm(x.t)}</h3><p>${T(x.how)}</p><p class="note"><b>${T(['المؤشرات', 'Metrics'])}:</b> <span class="en" style="font-weight:400">${x.kpi}</span></p><p><b>${T(['في السعودية', 'In Saudi Arabia'])}:</b> ${x.sa}</p><p><b>${T(['عالمياً', 'Globally'])}:</b> <span class="en" style="font-weight:400">${x.gl}</span></p></div>`).join('')}</div>`) : '') +
      (b.length ? sec(T(['نماذج العمل وأشهر شركاتها', 'Business models and their best-known companies']), ar() ? 'Business Models' : '', `<div class="grid g3">${b.map((x, i) => `<div class="card" style="--acc:var(--${['emerald', 'gold', 'blue', 'magenta', 'coral', 'cyan'][i % 6]})"><h3 style="color:var(--acc)">${tm(x.t)}</h3><p>${T(x.how)}</p><p class="note"><b>${T(['يُقاس بـ', 'Measured by'])}:</b> <span class="en" style="font-weight:400">${x.m}</span></p><p class="note"><b>${T(['الخطر', 'Risk'])}:</b> ${T(x.risk)}</p><p><span class="en">${x.gl}</span></p><p>${x.sa}</p></div>`).join('')}</div>`) : '') +
      (!s.length && !b.length ? `<p class="note">${T(['لا توجد نتائج. جرّب كلمة أخرى.', 'No matches. Try another word.'])}</p>` : '');
  };
  FM.after.sectors = sxRender;

  /* ---------- Saudi directory ---------- */
  P.directory = () => `
    ${head(T(['من يعمل ماذا في السعودية', 'Who does what in Saudi Arabia']), T(['دليل القطاع المالي السعودي', 'Saudi financial sector directory']), T(DIRECTORY.multi))}
    <input class="inp" id="dir-q" type="search" style="direction:inherit;font-family:inherit" placeholder="${T(['ابحث عن جهة أو نشاط…', 'Search an entity or activity…'])}" aria-label="Search directory">
    <div id="dir-out"></div>
    <p class="note">${T(DIRECTORY.credit)}</p>`;
  const dirRender = () => {
    const q = ($('#dir-q').value || '').trim().toLowerCase();
    const out = DIRECTORY.groups.map(g => { const l = g.l.filter(e => !q || e.join(' ').toLowerCase().includes(q)); return l.length ? `<section data-cat="${g.cat}"><div class="sec-h"><h2 style="color:var(--acc)">${T(g.t)}</h2>${g.inst ? `<a class="chip" href="#i-${g.inst}">${T(['كيف يعمل هذا النوع؟', 'How does this type work?'])} ${ARW()}</a>` : ''}</div><div class="grid g3">${l.map(e => `<div class="kpi"><b style="font-family:inherit;direction:inherit;font-size:1rem">${ar() ? e[0] : e[1]}</b>${ar() && e[0] !== e[1] ? `<span class="en" style="font-size:.8rem;font-weight:500;color:var(--mute);text-align:start">${e[1]}</span>` : ''}<small>${ar() ? e[2] : e[3]}</small></div>`).join('')}</div></section>` : ''; }).join('');
    $('#dir-out').innerHTML = out || `<p class="note">${T(['لا توجد نتائج. جرّب كلمة أخرى.', 'No matches. Try another word.'])}</p>`;
  };
  FM.after.directory = dirRender;
  FM.inputs.push(e => { if (e.target.id === 'sx-q') sxRender(); else if (e.target.id === 'dir-q') dirRender(); });

  /* ---------- careers (full) ---------- */
  let ladK = 'corp', qaTag = 'all';
  const TR = { consult: 'consult', funds: 'am', corpfin: 'corp', ibc: 'ib', bankc: 'bank', riskc: 'risk' };
  const tcard = t => `<div class="card" data-cat="${t.cat}" style="border-color:color-mix(in srgb,var(--acc) 45%,var(--line))"><h3 style="color:var(--acc)">${tm(t.t)}</h3><p>${T(t.d)}</p><p><b>${T(['يوم عادي', 'A typical day'])}:</b> ${T(t.day)}</p><p><b>${T(['المهارات', 'Skills'])}:</b> <span class="en" style="font-weight:400">${t.skills}</span></p><p><b>${T(['الشهادات', 'Credentials'])}:</b> <span class="en" style="font-weight:400">${t.certs}</span></p><p><b>${T(['إلى أين بعدها', 'Where it leads'])}:</b> ${T(t.exit)}</p><button type="button" class="btn sm" data-act="lad" data-k="${TR[t.id]}" data-jump="1">${T(['السلّم الكامل حتى القمة', 'The full ladder to the top'])} ${ARW()}</button></div>`;
  const ladOut = () => `<div class="chips">${Object.entries(LADDERS).map(([k, l]) => `<button type="button" class="chip" data-act="lad" data-k="${k}" aria-pressed="${k === ladK}">${tmE(l.t)}${ar() ? ` <span class="tr">(${l.t.split('|')[1]})</span>` : ''}</button>`).join('')}</div>${FM.ladderFull(ladK)}`;
  P.careers = () => { const c = CAREERS, tags = ['all', ...new Set(c.qa.map(q => q.tag))]; return `
    ${head(T(['من أول يوم إلى Director و GM و CEO', 'From day one to director, GM and CEO']), T(['المسارات المهنية', 'Career paths']), T(c.intro))}
    ${sec(T(['السلّم العام في الشركات والبنوك', 'The general ladder at companies and banks']), T(['عشر درجات، وما يتغير في كل واحدة', 'Ten grades, and what changes at each']), `<div class="scroll"><table style="min-width:680px"><thead><tr><th>#</th><th>${T(['الدرجة', 'Grade'])}</th><th class="n">${T(['سنوات الخبرة', 'Years of experience'])}</th><th>${T(['ما الذي يتغير', 'What changes'])}</th><th>${T(['النطاق', 'Scope'])}</th></tr></thead><tbody>${GRADES.map((g, i) => `<tr class="${i === 5 || i === 7 ? 'sub' : ''}"><td class="n">${i + 1}</td><td>${tm(g[0])}</td><td class="n">${g[1]}</td><td>${T(g[2])}</td><td>${T(g[3])}</td></tr>`).join('')}</tbody></table></div><p class="note">${T(['السنوات تقريبية وتختلف بحسب الجهة والأداء. المسميات تختلف أيضاً: بعض البنوك السعودية تستخدم "مساعد مدير عام AGM" و"نائب رئيس تنفيذي EVP".', 'Years are approximate and vary by employer and performance. Titles vary too: some Saudi banks use assistant general manager (AGM) and executive vice president (EVP).'])}</p>`, 'grades')}
    ${sec(T(['نفس الدرجة بأسماء مختلفة', 'The same grade under different names']), '', `<div class="scroll"><table style="min-width:680px"><thead><tr>${EQUIV.cols.map(x => `<th>${T(x)}</th>`).join('')}</tr></thead><tbody>${EQUIV.rows.map((r, i) => `<tr class="${i === 4 || i === 5 ? 'sub' : ''}">${r.map(x => `<td><span class="en" style="font-weight:500">${x}</span></td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="killer" style="border-color:var(--gold);background:color-mix(in srgb,var(--gold) 10%,var(--surface))">${T(EQUIV.note)}</div>`)}
    ${sec(T(['خمسة طرق تصل بك إلى Director و GM', 'Five routes to director and GM']), '', `<div class="grid g2">${ROUTES.map((r, i) => `<div class="card" style="--acc:var(--${['blue', 'magenta', 'emerald', 'cyan', 'coral'][i]})"><div class="row1" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span class="mono">${i + 1}</span><h3>${T(r.t)}</h3></div><p>${T(r.d)}</p><span class="badge" style="direction:inherit;align-self:flex-start">${T(r.y)}</span></div>`).join('')}</div>`, 'routes')}
    ${sec(T(['ما المطلوب في كل قفزة', 'What each jump demands']), '', `<div class="grid g2">${JUMPS.map(([t, d]) => `<div class="card soft"><h3>${T(t)}</h3><p>${T(d)}</p></div>`).join('')}</div>`)}
    ${sec(T(['السلّم المفصل لكل مسار', 'The detailed ladder for each path']), T(['اختر المسار', 'Pick a path']), `<div class="card" id="lad-out">${ladOut()}</div>`, 'ladders')}
    ${sec(T(['مساراتك الثلاثة', 'Your three target paths']), '', `<div class="grid g3">${c.tracks.filter(t => t.star).map(tcard).join('')}</div>`)}
    ${sec(T(['مسارات أخرى قريبة', 'Other nearby paths']), '', `<div class="grid g3">${c.tracks.filter(t => !t.star).map(tcard).join('')}</div>`)}
    ${sec(T(['طبيعة العمل ويوم موظف نموذجي', 'The nature of the work and a typical day']), T(['12 نشاطاً', '12 activities']), `<div class="grid g2">${DAYS.map(d => { const [lo, hi] = d.life.split('–').map(Number); return `<div class="card"><h3>${tm(d.t)}</h3><p>${T(d.what)}</p><p><b>${T(['اليوم', 'The day'])}:</b> ${T(d.day)}</p><p><b>${T(['يُحكم عليك بـ', 'You are judged on'])}:</b> ${T(d.judge)}</p><div class="row" style="grid-template-columns:minmax(0,1fr) auto"><span class="lab">${T(['ساعات العمل أسبوعياً', 'Hours a week'])}</span><span class="val" style="color:var(--fg)">${d.life}</span><span class="track"><span class="fill" style="width:${hi}%;background:var(--${hi >= 80 ? 'danger' : hi >= 65 ? 'gold' : 'ok'})"></span></span></div></div>`; }).join('')}</div><p class="note">${T(['ملخص من دليل "خريطة القطاع المالي السعودي" (عبدالله أكرم، فسيلة المالية). الساعات تقديرية وتختلف بحسب الجهة والموسم.', 'Condensed from the guide “Map of the Saudi Financial Sector” (Abdullah Akram, Faseelat Al-Maliyah). Hours are estimates and vary by employer and season.'])}</p>`, 'days')}
    ${sec(T(['الشهادات المهنية', 'Professional credentials']), '', `<div class="scroll"><table><tbody>${c.certs.map(([a, n, d]) => `<tr><td><b class="en">${a}</b><small class="en" style="font-weight:400">${n}</small></td><td>${T(d)}</td></tr>`).join('')}</tbody></table></div>`)}
    ${sec(T(['كيف تحصل على التدريب في السعودية', 'Landing an internship in Saudi Arabia']), '', `<div class="card acc" style="--acc:var(--emerald)"><ul class="clean">${c.ksa.map(k => `<li>${T(k)}</li>`).join('')}</ul><a class="btn sm" href="#directory" style="align-self:flex-start">${T(['تصفح الجهات في الدليل', 'Browse employers in the directory'])} ${ARW()}</a></div>`)}
    ${sec(T(['أسئلة المقابلات مع إجابات نموذجية', 'Interview questions with model answers']), '', `<div class="chips">${tags.map(t => `<button type="button" class="chip" data-act="qa2" data-t="${t}" aria-pressed="${t === qaTag}">${t === 'all' ? T(['الكل', 'All']) : t}</button>`).join('')}</div>
      <div class="grid" id="qa-list">${qaList()}</div>`, 'interview')}`; };
  const qaList = () => CAREERS.qa.filter(q => qaTag === 'all' || q.tag === qaTag).map(q => `<details class="qa"><summary><span>${T(q.q)}</span><span class="badge">${q.tag}</span></summary><div>${T(q.a)}</div></details>`).join('');
  FM.acts.lad = b => { ladK = b.dataset.k; const o = $('#lad-out'); if (!o) return; o.innerHTML = ladOut(); if (b.dataset.jump) { const y = $('#ladders').getBoundingClientRect().top + window.scrollY - ($('header.top').offsetHeight + 12); window.scrollTo({ top: y, behavior: 'smooth' }); } };
  FM.acts.qa2 = b => { qaTag = b.dataset.t; $('#qa-list').innerHTML = qaList(); $$('[data-act="qa2"]').forEach(c => c.setAttribute('aria-pressed', c === b)); };

  FM.start();
})();
