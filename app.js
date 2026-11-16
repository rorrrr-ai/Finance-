(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  const S = { lang: store.get('fm-lang', 'ar'), theme: store.get('fm-theme', null), quiz: store.get('fm-quiz', {}), known: store.get('fm-known', {}), seen: store.get('fm-seen', {}) };
  const ar = () => S.lang === 'ar';
  const T = x => Array.isArray(x) ? x[ar() ? 0 : 1] : x;
  const tm = s => { const [e, a] = s.split('|'); return ar() && a ? `<span class="en">${e}</span> <span class="tr">(${a})</span>` : `<span class="en">${e}</span>`; };
  const tmE = s => s.split('|')[0];
  const fmt = (n, d = 0) => Number(n).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  const sgn = (n, d = 1) => (n > 0 ? '+' : n < 0 ? '−' : '') + fmt(Math.abs(n), d);
  const ARW = () => ar() ? '←' : '→';
  const byId = id => INST.find(i => i.id === id);

  const U = {
    brand: ['خريطة المال', 'Money Map'],
    nav: [['home', ['الرئيسية', 'Home']], ['institutions', ['المؤسسات', 'Institutions']], ['directory', ['دليل السعودية', 'Saudi directory']], ['sectors', ['القطاعات ونماذج العمل', 'Sectors & models']],
      ['statements', ['القوائم المالية', 'Statements']], ['lab', ['مختبر القوائم', 'Statement lab']], ['toolkit', ['أدوات المحلل', 'Analyst toolkit']], ['real', ['أرقام حقيقية', 'Real figures']],
      ['modeling', ['النمذجة المالية', 'Modelling']], ['risk', ['المخاطر', 'Risk']], ['intl', ['المالية الدولية', 'International']], ['careers', ['المسارات المهنية', 'Careers']], ['cfa', ['CFA L1', 'CFA L1']], ['learn', ['راجع واختبر', 'Review & quiz']]],
    illus: ['نسب تقريبية توضيحية لمؤسسة نموذجية، وتختلف من مؤسسة لأخرى.', 'Indicative proportions for a typical institution; they vary from one to another.'],
    foot: ['محتوى تعليمي لطالب مالية، وليس نصيحة استثمارية. الأرقام الحقيقية من تقارير السنة المالية 2025 ومصادرها في صفحة المصادر.', 'Educational content for a finance student, not investment advice. Real figures are from FY2025 reports, listed on the sources page.'],
    src: ['المصادر', 'Sources'], lv: [['—', '—'], ['منخفض', 'Low'], ['متوسط', 'Medium'], ['مرتفع', 'High']]
  };

  /* ---------- small components ---------- */
  const bars = (list, eq) => `<div class="rows">${list.map(([t, p]) => `<div class="row${eq && /Equity|Capital|NAV|Surplus/.test(t) ? ' eq' : ''}"><span class="lab">${tm(t)}</span><span class="val">${p}%</span><span class="track"><span class="fill" style="width:${p}%"></span></span></div>`).join('')}</div>`;
  const strip = list => `<div class="strip" aria-hidden="true">${list.map(([t, p], i) => `<i class="${/Equity|Capital|NAV|Surplus/.test(t) ? 'eq' : ''}" style="flex:${p};opacity:${Math.max(.3, 1 - i * .17)}"></i>`).join('')}</div>`;
  const chipsT = list => `<div class="chips">${list.map(t => `<span class="chip">${tm(t)}</span>`).join('')}</div>`;
  const head = (eyebrow, title, lead, cat) => `<div class="pagehead"${cat ? ` data-cat="${cat}"` : ''}><span class="eyebrow">${eyebrow}</span><h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</div>`;
  const sec = (title, sub, body, id) => `<section${id ? ` id="${id}"` : ''}><div class="sec-h"><h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div>${body}</section>`;
  const quizHTML = (q, qid) => {
    const st = S.quiz[qid];
    return `<div class="quiz" data-qid="${qid}" data-a="${q.a}"><p class="q">${T(q.q)}</p><div class="opts">${q.o.map((o, i) => `<button type="button" class="opt${st != null ? (i === q.a ? ' ok' : (i === st ? ' no' : '')) : ''}" data-act="ans" data-i="${i}"${st != null ? ' disabled' : ''}>${T(o)}</button>`).join('')}</div><div class="why"${st != null ? '' : ' hidden'}>${T(q.w)}</div></div>`;
  };
  const allQuiz = () => INST.flatMap(i => i.quiz.map((q, k) => ({ q, qid: i.id + '-' + k, inst: i })));
  const field = (id, label, val, step = 'any') => `<label class="fld" for="${id}">${label}<input id="${id}" type="number" inputmode="decimal" step="${step}" value="${val}"></label>`;
  const v = id => { const el = document.getElementById(id); const n = el ? parseFloat(el.value) : NaN; return isFinite(n) ? n : 0; };

  /* ---------- pages ---------- */
  const P = {};

  P.home = () => {
    const groups = [['dep', ['bank', 'islamic']], ['con', ['insurance', 'pension']], ['inv', ['am', 'hf', 'pe', 'reit', 'swf']], ['fin', ['finco', 'fintech']]];
    const infra = ['ib', 'broker', 'exchange', 'cra', 'payments'];
    const link = id => { const i = byId(id); return `<a class="chip" data-cat="${i.cat}" href="#i-${id}">${T(i.name)}</a>`; };
    const tick = TICKER.concat(TICKER).map(([a, b, c]) => `<span>${a} <b>${b}</b>${c ? `<em class="${c[0] === '−' ? 'down' : c[0] === '+' ? 'up' : ''}">${c}</em>` : ''}</span>`).join('');
    const nq = allQuiz().length, dq = Object.values(S.quiz).length, nk = Object.keys(S.known).length;
    return `
    <div class="hero">
      <span class="eyebrow">${T(['للطالب الذي يريد أن يفهم كيف يعمل المال', 'For the student who wants to see how money works'])}</span>
      <h1>${T(['من أين تأتي الأموال،', 'Where the money comes from,'])} <span class="grad">${T(['وأين تذهب', 'and where it goes'])}</span></h1>
      <p class="lead">${T(['17 نوعاً من المؤسسات المالية: ماذا تملك، بماذا تدين، كيف تربح، ما الذي يقتلها، كيف تُقيَّم، وكيف تعمل فيها. مع قوائم مالية حقيقية من السعودية والعالم وحاسبات نمذجة تجربها بنفسك.',
        '17 kinds of financial institution: what each owns, what it owes, how it earns, what kills it, how it is valued and how to work there. With real statements from Saudi Arabia and the world, and modelling calculators to try yourself.'])}</p>
      <div class="cta"><a class="btn pri" href="#institutions">${T(['استعرض المؤسسات', 'Browse institutions'])}</a><a class="btn" href="#statements">${T(['افهم القوائم الثلاث', 'Learn the three statements'])}</a><a class="btn" href="#careers">${T(['جهّز للمقابلة', 'Prepare for interviews'])}</a></div>
    </div>
    <div class="ticker" aria-label="FY2025 figures"><div>${tick}</div></div>
    ${sec(T(['خريطة النظام المالي', 'The financial system map']), T(['اضغط على أي مؤسسة', 'Select any institution']), `
      <div class="flow">
        <div class="flow-band" data-cat="pub"><span>${T(['المنظمون والجهات السيادية', 'Regulators & sovereign bodies'])}</span>${link('central')}${link('swf')}<span class="chip">SAMA</span><span class="chip">CMA</span><span class="chip">${T(['هيئة التأمين', 'Insurance Authority'])}</span></div>
        <div class="flow-row">
          <div class="flow-side"><h3>${T(['أصحاب الفوائض', 'Savers'])}</h3><small>${T(['أفراد وشركات وحكومات عندهم مال زائد عن حاجتهم اليوم.', 'Households, companies and governments with more money than they need today.'])}</small></div>
          <div class="flow-arrow"><span>${T(['ودائع، أقساط، اشتراكات', 'Deposits, premiums, contributions'])}</span><b>${ARW()}</b></div>
          <div class="flow-mid">${groups.map(([c, ids]) => `<div class="flow-grp" data-cat="${c}"><h4>${T(CATS[c].name)}</h4><div class="chips">${ids.map(link).join('')}</div></div>`).join('')}</div>
          <div class="flow-arrow"><span>${T(['قروض، استثمارات', 'Loans, investments'])}</span><b>${ARW()}</b></div>
          <div class="flow-side"><h3>${T(['طالبو التمويل', 'Borrowers'])}</h3><small>${T(['شركات تتوسع، حكومات تبني، وأفراد يشترون منزلاً.', 'Companies expanding, governments building, households buying a home.'])}</small></div>
        </div>
        <div class="flow-band" data-cat="mkt"><span>${T(['الأسواق والبنية التحتية', 'Markets & infrastructure'])}</span>${infra.map(link).join('')}</div>
      </div>
      <p class="note">${T(['كل مؤسسة مالية تحل المشكلة نفسها بطريقة مختلفة: تنقل المال ممن يملكه إلى من يحتاجه وتأخذ مقابلاً على المخاطرة التي تتحملها.', 'Every financial institution solves the same problem in a different way: it moves money from those who have it to those who need it, and is paid for the risk it carries.'])}</p>`)}
    ${sec(T(['ابدأ من هنا', 'Start here']), '', `<div class="grid g3">
      ${[['statements', 'emerald', ['القوائم الثلاث', 'The three statements'], ['قائمة الدخل، الميزانية، التدفقات النقدية، وأداة تربط بينها.', 'Income statement, balance sheet, cash flow, and a tool that links them.']],
        ['lab', 'blue', ['مختبر قراءة القوائم', 'Statement reading lab'], ['قوائم كاملة للراجحي والمراعي و Apple مع شرح تحت كل سطر.', 'Full statements for Al Rajhi, Almarai and Apple, with a note under each line.']],
        ['toolkit', 'coral', ['أدوات المحلل', 'Analyst toolkit'], ['علامات التحذير، ورقة النسب، قراءة صفحة السهم، Bloomberg والمصادر المجانية.', 'Warning signs, the ratio sheet, reading a stock page, Bloomberg and free sources.']],
        ['sectors', 'gold', ['القطاعات ونماذج العمل', 'Sectors & business models'], ['17 قطاعاً و 20 نموذج عمل مع أشهر الشركات السعودية والعالمية.', '17 sectors and 20 business models with leading Saudi and global companies.']],
        ['directory', 'cyan', ['دليل القطاع المالي السعودي', 'Saudi financial directory'], ['أكثر من 100 جهة: بنوك، شركات مالية، صناديق، تأمين، استشارات، فنتك.', 'Over 100 entities: banks, investment firms, funds, insurers, advisers, fintech.']],
        ['careers', 'magenta', ['السلالم الوظيفية الكاملة', 'Full career ladders'], ['من محلل إلى Director و GM و CEO، وخمسة طرق للوصول.', 'From analyst to director, GM and CEO, and five routes there.']],
        ['real', 'gold', ['أرقام حقيقية 2025', 'Real figures, 2025'], ['الراجحي، أرامكو، المراعي، التعاونية، JPMorgan، Apple، BlackRock، PIF.', 'Al Rajhi, Aramco, Almarai, Tawuniya, JPMorgan, Apple, BlackRock, PIF.']],
        ['modeling', 'magenta', ['النمذجة المالية', 'Financial modelling'], ['حاسبات DCF و WACC و LBO وتقييم البنوك والتأمين.', 'DCF, WACC, LBO, bank and insurance calculators.']],
        ['intl', 'cyan', ['المالية الدولية', 'International finance'], ['أسعار الصرف، ربط الريال، ميزان المدفوعات، تعادل الفائدة.', 'Exchange rates, the riyal peg, balance of payments, interest parity.']]
      ].map(([h, c, t, d]) => `<a class="tile" href="#${h}" style="--acc:var(--${c})"><span class="mono">${ARW()}</span><h3>${T(t)}</h3><small>${T(d)}</small></a>`).join('')}</div>`)}
    <!--deep-->
    ${sec(T(['تقدّمك', 'Your progress']), T(['محفوظ في هذا المتصفح', 'Saved in this browser']), `<div class="grid g3">
      <div class="stat"><b>${dq} / ${nq}</b><span>${T(['أسئلة أجبت عنها', 'Questions answered'])}</span></div>
      <div class="stat"><b>${nk} / ${GLOSS.length}</b><span>${T(['مصطلحات حفظتها', 'Terms learned'])}</span></div>
      <div class="stat"><b>${Object.keys(S.seen).length} / ${INST.length}</b><span>${T(['مؤسسات قرأتها', 'Institutions read'])}</span></div></div>
      <div class="prog"><i style="width:${Math.round(100 * (dq + nk + Object.keys(S.seen).length) / (nq + GLOSS.length + INST.length))}%"></i></div>`)}`;
  };

  P.institutions = () => `
    ${head(T(['17 مؤسسة · 6 فئات', '17 institutions · 6 families']), T(['المؤسسات المالية', 'Financial institutions']), T(['كل صفحة بالقالب نفسه حتى تقارن بسهولة: نموذج العمل، الميزانية، المؤشرات، المخاطر، التقييم، السلّم الوظيفي، وقصة أزمة.', 'Every page follows the same template so you can compare: business model, balance sheet, metrics, risks, valuation, career ladder and a crisis story.']))}
    ${Object.entries(CATS).map(([c, o]) => `<section data-cat="${c}"><div class="sec-h"><h2 style="color:var(--acc)">${T(o.name)}</h2></div><div class="grid g3">${INST.filter(i => i.cat === c).map(i => `<a class="tile" href="#i-${i.id}"><span class="mono">${i.ab}</span><h3>${T(i.name)}</h3>${ar() ? `<span class="en-name">${tmE(i.term)}</span>` : ''}<small>${T(i.line)}</small>${S.seen[i.id] ? `<span class="note">✓ ${T(['قرأتها', 'Read'])}</span>` : ''}</a>`).join('')}</div></section>`).join('')}
    ${sec(T(['قارن مؤسستين', 'Compare two institutions']), '', `<div class="card"><div class="fields">
      <label class="fld" for="cmp-a">${T(['الأولى', 'First'])}<select id="cmp-a">${INST.map(i => `<option value="${i.id}"${i.id === 'bank' ? ' selected' : ''}>${T(i.name)}</option>`).join('')}</select></label>
      <label class="fld" for="cmp-b">${T(['الثانية', 'Second'])}<select id="cmp-b">${INST.map(i => `<option value="${i.id}"${i.id === 'insurance' ? ' selected' : ''}>${T(i.name)}</option>`).join('')}</select></label></div><div id="cmp-out"></div></div>`, 'compare')}`;

  const cmpRender = () => {
    const a = byId($('#cmp-a').value), b = byId($('#cmp-b').value);
    const rows = [
      [T(['الفكرة', 'In one line']), i => T(i.line)],
      [T(['أكبر مصدر إيراد', 'Largest revenue source']), i => `${tm(i.rev[0][0])} · <span class="num">${i.rev[0][1]}%</span>`],
      [T(['أكبر أصل', 'Largest asset']), i => `${tm(i.A[0][0])} · <span class="num">${i.A[0][1]}%</span>`],
      [T(['أكبر التزام', 'Largest liability']), i => `${tm(i.L[0][0])} · <span class="num">${i.L[0][1]}%</span>`],
      [T(['أهم المؤشرات', 'Key metrics']), i => i.kpi.slice(0, 4).map(k => `<span class="en">${k[0]}</span>`).join(' · ')],
      [T(['أعلى المخاطر', 'Highest risks']), i => RISKS.filter(r => i.risk[r[0]] === 3).map(r => tm(r[1])).join('<br>') || '—'],
      [T(['ما الذي يقتلها', 'What kills it']), i => T(i.killer)],
      [T(['التقييم', 'Valuation']), i => T(i.val)]
    ];
    $('#cmp-out').innerHTML = `<div class="scroll"><table><thead><tr><th></th><th data-cat="${a.cat}" style="color:var(--acc)">${T(a.name)}</th><th data-cat="${b.cat}" style="color:var(--acc)">${T(b.name)}</th></tr></thead><tbody>${rows.map(([l, f]) => `<tr><td><b>${l}</b></td><td>${f(a)}</td><td>${f(b)}</td></tr>`).join('')}</tbody></table></div>`;
  };

  P.inst = id => {
    const i = byId(id); if (!i) return P.institutions();
    const idx = INST.indexOf(i), prev = INST[(idx + INST.length - 1) % INST.length], next = INST[(idx + 1) % INST.length];
    const toc = [['model', ['نموذج العمل', 'Model']], ['bs', ['الميزانية', 'Balance sheet']], ['div', ['الأقسام', 'Divisions']], ['kpi', ['المؤشرات', 'Metrics']], ['rk', ['المخاطر', 'Risks']], ['fs', ['القوائم والتقييم', 'Statements & value']], ['car', ['السلّم الوظيفي', 'Career']], ['cr', ['قصة أزمة', 'Crisis']], ['qz', ['اختبر نفسك', 'Quiz']]];
    return `
    <div class="pagehead">
      <div class="row1"><span class="mono">${i.ab}</span><span class="eyebrow">${T(CATS[i.cat].name)}</span><span class="badge">CFA L1 · ${i.cfa}</span></div>
      <h1>${T(i.name)}${ar() ? ` <span class="en" style="font-size:.5em;color:var(--acc)">${tmE(i.term)}</span>` : ''}</h1>
      <p class="lead" style="color:var(--fg)">${T(i.line)}</p>
      <div class="toc">${toc.map(([h, t]) => `<button type="button" class="chip" data-act="jump" data-to="s-${h}">${T(t)}</button>`).join('')}</div>
    </div>
    <section id="s-model"><div class="grid g2">
      <div class="card"><h3>${T(['كيف تربح؟', 'How does it earn?'])} <span class="tr">${ar() ? '(Business Model)' : ''}</span></h3><p>${T(i.model)}</p></div>
      <div class="card"><h3>${T(['مصادر الإيراد', 'Revenue mix'])}</h3>${bars(i.rev)}<h3>${T(['المنتج', 'The product'])}</h3><p>${T(i.product)}</p></div>
    </div></section>
    ${sec(T(['الميزانية في صورة', 'The balance sheet at a glance']), ar() ? 'Main Assets & Liabilities' : '', `<div class="grid g2">
      <div class="card"><h3>${T(['ماذا تملك؟', 'What it owns'])} — ${tm('Assets|الأصول')}</h3>${strip(i.A)}${bars(i.A)}</div>
      <div class="card"><h3>${T(['بماذا تدين؟', 'What it owes'])} — ${tm('Liabilities & Equity|الالتزامات وحقوق الملكية')}</h3>${strip(i.L)}${bars(i.L, 1)}</div>
    </div><p class="note">${T(U.illus)} ${T(['اللون الذهبي يمثل حقوق الملكية.', 'Gold marks equity.'])}</p>`, 's-bs')}
    ${sec(T(['الأقسام والتخصصات', 'Divisions & specialisms']), '', `<div class="grid g3">
      <div class="card"><h3>${tm('Front Office|المكتب الأمامي')}</h3><p class="note">${T(['يولّد الإيراد ويقابل العملاء', 'Earns revenue and faces clients'])}</p>${chipsT(i.div.front)}</div>
      <div class="card"><h3>${tm('Middle Office|المكتب الأوسط')}</h3><p class="note">${T(['يراقب المخاطر والالتزام', 'Controls risk and compliance'])}</p>${chipsT(i.div.mid)}</div>
      <div class="card"><h3>${tm('Back Office|المكتب الخلفي')}</h3><p class="note">${T(['ينفذ ويسجل ويشغّل', 'Executes, records and operates'])}</p>${chipsT(i.div.back)}</div></div>`, 's-div')}
    ${sec(T(['أهم المؤشرات', 'Key metrics']), 'KPIs', `<div class="grid g3">${i.kpi.map(k => `<div class="kpi"><b>${k[0]}</b><span>${tm(k[1])}</span><small>${T(k[2])}</small></div>`).join('')}</div>`, 's-kpi')}
    ${sec(T(['المخاطر', 'Risks']), '', `<div class="grid g2"><div class="card"><div class="rows">${RISKS.map(r => `<div class="row" style="grid-template-columns:minmax(0,1fr) auto"><span class="lab">${tm(r[1])}</span><span class="lv lv${i.risk[r[0]]}">${T(U.lv[i.risk[r[0]]])}</span></div>`).join('')}</div></div>
      <div class="card"><h3>${T(['ما الذي يقتلها؟', 'What kills it?'])}</h3><div class="killer">${T(i.killer)}</div><h3>${T(['التنظيم', 'Regulation'])}</h3><p>${T(i.reg)}</p></div></div>`, 's-rk')}
    ${sec(T(['قوائمها المالية وتقييمها', 'Its statements and valuation']), '', `<div class="grid g2">
      <div class="card"><h3>${T(['ما المختلف في قوائمها؟', 'What is different in its statements?'])}</h3><ul class="clean">${i.fs.map(f => `<li>${T(f)}</li>`).join('')}</ul></div>
      <div class="card acc"><h3>${T(['كيف تُقيَّم؟', 'How is it valued?'])}</h3><p>${T(i.val)}</p><a class="btn sm" href="#modeling">${T(['جرّب الحاسبات', 'Try the calculators'])}</a></div></div>`, 's-fs')}
    ${sec(T(['السلّم الوظيفي', 'Career ladder']), '', `<div class="grid g2">
      <div class="card">${window.INSTLAD && INSTLAD[i.id] ? `<h3>${tm(LADDERS[INSTLAD[i.id]].t)}</h3>${FM.ladderFull(INSTLAD[i.id])}<a class="btn sm" href="#careers" style="align-self:flex-start">${T(['كل السلالم وطرق الوصول إلى Director و GM', 'All ladders and routes to director and GM'])} ${ARW()}</a>` : `<div class="ladder">${i.ladder.map((l, k) => `<div style="--i:${k}">${tm(l)}</div>`).join('')}</div>`}</div>
      <div class="card"><h3>${T(['شهادات مفيدة', 'Useful credentials'])}</h3><p class="en" style="text-align:start">${i.certs}</p><h3>${T(['أمثلة عالمية', 'Global examples'])}</h3><p class="en" style="text-align:start">${i.ex.g}</p><h3>${T(['في السعودية', 'In Saudi Arabia'])}</h3><p>${T(i.ex.s)}</p></div></div>`, 's-car')}
    ${sec(T(['قصة أزمة', 'A crisis story']), '', `<div class="card" style="--acc:var(--danger);border-color:color-mix(in srgb,var(--danger) 45%,var(--line))"><h3>${T(i.crisis.t)}</h3><p>${T(i.crisis.d)}</p></div>`, 's-cr')}
    ${sec(T(['اختبر نفسك', 'Test yourself']), '', `<div class="grid g2">${i.quiz.map((q, k) => quizHTML(q, i.id + '-' + k)).join('')}</div>`, 's-qz')}
    <div class="cta" style="justify-content:space-between"><a class="btn" href="#i-${prev.id}">${ar() ? '→' : '←'} ${T(prev.name)}</a><a class="btn" href="#institutions">${T(['كل المؤسسات', 'All institutions'])}</a><a class="btn" href="#i-${next.id}">${T(next.name)} ${ARW()}</a></div>`;
  };

  P.statements = () => {
    const s = STMT;
    const isT = `<div class="scroll"><table><tbody>${s.is.rows.map(r => `<tr class="${r[3] === 2 ? 'tot' : r[3] === 1 ? 'sub' : ''}"><td>${tm(r[0])}<small>${T(r[1])}</small></td><td class="n">${r[2] < 0 ? '(' + fmt(-r[2]) + ')' : fmt(r[2])}</td></tr>`).join('')}</tbody></table></div>`;
    const cfT = `<div class="scroll"><table><tbody>${s.cf.rows.map(r => `<tr class="${r[2] === 2 ? 'tot' : r[2] === 1 ? 'sub' : ''}"><td>${tm(r[0])}</td><td class="n">${r[1] < 0 ? '(' + fmt(-r[1]) + ')' : fmt(r[1])}</td></tr>`).join('')}</tbody></table></div>`;
    const col = (title, list) => `<h4>${title}</h4><div class="rows">${list.map(([t, n]) => `<div class="row"><span class="lab">${tm(t)}</span><span class="val">${n}</span><span class="track"><span class="fill" style="width:${n / 10}%"></span></span></div>`).join('')}</div>`;
    return `
    ${head('CFA L1 · Financial Statement Analysis', T(['القوائم المالية الثلاث', 'The three financial statements']), T(s.intro))}
    <div class="grid g3">
      <div class="card" style="--acc:var(--emerald)"><span class="eyebrow">1</span><h3>${tm(s.is.t)}</h3><p class="note">${T(s.is.q)}</p>${isT}<p class="note">${T(s.is.note)}</p></div>
      <div class="card" style="--acc:var(--blue)"><span class="eyebrow">2</span><h3>${tm(s.bs.t)}</h3><p class="note">${T(s.bs.q)}</p><div class="bs-eq">${tm(s.bs.eq)}</div>
        ${col(tm('Assets|الأصول') + ' <span class="num">1,000</span>', s.bs.A)}${col(tm('Liabilities|الالتزامات') + ' <span class="num">500</span>', s.bs.L)}<div style="--acc:var(--gold)">${col(tm('Equity|حقوق الملكية') + ' <span class="num">500</span>', s.bs.E)}</div><p class="note">${T(s.bs.note)}</p></div>
      <div class="card" style="--acc:var(--magenta)"><span class="eyebrow">3</span><h3>${tm(s.cf.t)}</h3><p class="note">${T(s.cf.q)}</p>${cfT}<p class="note">${T(s.cf.note)}</p></div>
    </div>
    <p class="note">${T(['مثال توضيحي لشركة صناعية. الأرقام بالمليون.', 'An illustrative industrial company. Figures in millions.'])}</p>
    ${sec(T(['كيف ترتبط القوائم؟', 'How the statements link']), '', `<div class="card"><ul class="clean">${s.links.map(l => `<li>${T(l)}</li>`).join('')}</ul></div>`)}
    ${sec(T(['جرّب بنفسك: غيّر رقماً وشاهد الأثر', 'Try it: change a number and watch the effect']), ar() ? '3-Statement Linker' : '', `<div class="card acc" style="--acc:var(--gold)">
      <div class="chips" id="lk-chips">${LINK.map((l, k) => `<button type="button" class="chip" data-act="lk" data-k="${k}" aria-pressed="${k === 0}">${T(l.n)}</button>`).join('')}</div>
      <div class="fields">${field('lk-x', T(['المبلغ', 'Amount']), 10)}${field('lk-t', T(['معدل الزكاة والضريبة %', 'Zakat & tax rate %']), 20)}</div>
      <div id="lk-out"></div></div>`, 'linker')}
    ${sec(T(['الشركة الصناعية مقابل المؤسسات المالية', 'Industrial company against financial institutions']), '', `<div class="scroll"><table><thead><tr><th></th>${s.compare.cols.map(c => `<th>${tm(c)}</th>`).join('')}</tr></thead><tbody>${s.compare.rows.map(r => `<tr><td><b>${T(r[0])}</b></td>${r.slice(1).map(c => `<td>${T(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      <div class="cta"><a class="btn pri" href="#real">${T(['شاهد قوائم حقيقية', 'See real statements'])}</a></div>`)}
    ${sec(T(['خصوصية القوائم في السعودية', 'Saudi specifics']), '', `<div class="card"><ul class="clean">${s.saudi.map(l => `<li>${T(l)}</li>`).join('')}</ul></div>`)}`;
  };
  let lkK = 0;
  const lkRender = () => {
    const l = LINK[lkK], x = v('lk-x'), t = v('lk-t') / 100, r = l.f(x, t);
    const tbl = (rows) => rows.length ? `<div class="scroll"><table><tbody>${rows.map(([n, d]) => `<tr><td>${tm(n)}</td><td class="n ${d > 0 ? 'pos' : d < 0 ? 'neg' : ''}">${sgn(d)}</td></tr>`).join('')}</tbody></table></div>` : `<p class="note">${T(['لا يوجد أثر', 'No effect'])}</p>`;
    const sum = a => a.reduce((s, q) => s + q[1], 0);
    const dA = sum(r.a), dL = sum(r.l), dE = sum(r.e), ok = Math.abs(dA - dL - dE) < 1e-9;
    $('#lk-out').innerHTML = `<p><b>${T(l.n)}:</b> ${T(l.w)}</p><div class="grid g3">
      <div><h4>${tm('Income Statement|قائمة الدخل')}</h4>${tbl(r.is)}</div>
      <div><h4>${tm('Cash Flow|التدفقات النقدية')}</h4>${tbl(r.cf)}</div>
      <div><h4>${tm('Balance Sheet|الميزانية')}</h4>${tbl([...r.a, ...r.l, ...r.e])}</div></div>
      <div class="bs-eq">Δ Assets <span class="num">${sgn(dA)}</span> = Δ Liabilities <span class="num">${sgn(dL)}</span> + Δ Equity <span class="num">${sgn(dE)}</span> ${ok ? `<span class="pos">✓ ${T(['متوازنة', 'balanced'])}</span>` : ''}</div>`;
  };

  let realId = 'rajhi';
  P.real = () => `
    ${head(T(['السنة المالية 2025', 'Fiscal year 2025']), T(['قوائم مالية حقيقية', 'Real financial statements']), T(['أرقام معلنة من ثماني جهات سعودية وعالمية، مع شرح كيف تقرؤها. اختر جهة.', 'Reported figures from eight Saudi and global names, with notes on how to read them. Pick one.']))}
    <div class="chips">${REAL.map(r => `<button type="button" class="chip" data-cat="${r.cat}" data-act="real" data-id="${r.id}" aria-pressed="${r.id === realId}">${T(r.name)}</button>`).join('')}</div>
    <div id="real-out"></div>
    <p class="note">${T(['الأرقام من النتائج السنوية المعلنة وملخصاتها المنشورة. النسب المكتوب أمامها "محسوبة" حسبناها من الأرقام المعروضة. راجع التقرير السنوي قبل الاعتماد على أي رقم.', 'Figures come from published annual results and their summaries. Ratios marked as calculated are derived from the figures shown. Check the annual report before relying on any number.'])} <a href="#sources">${T(U.src)}</a></p>`;
  const realRender = () => {
    const r = REAL.find(q => q.id === realId);
    const dec = r.unit[1].includes('billion') ? (r.id === 'pif' || r.id === 'blk' ? 1 : 2) : 0;
    const f = n => n == null ? '—' : (n < 0 ? '(' + fmt(-n, dec) + ')' : fmt(n, dec));
    const tbl = (title, rows) => rows ? `<div class="card"><h3>${tm(title)}</h3><div class="scroll"><table><thead><tr><th>${T(r.unit)}</th><th class="n">2025</th><th class="n">2024</th><th class="n">Δ</th></tr></thead><tbody>${rows.map(([n, a, b]) => { const ch = b ? (a / b - 1) * 100 : null; return `<tr><td>${tm(n)}</td><td class="n"><b>${f(a)}</b></td><td class="n">${f(b)}</td><td class="n ${ch > 0 ? 'pos' : ch < 0 ? 'neg' : ''}">${ch == null ? '—' : sgn(ch) + '%'}</td></tr>`; }).join('')}</tbody></table></div></div>` : '';
    $('#real-out').innerHTML = `<section data-cat="${r.cat}">
      <div class="sec-h"><h2 style="color:var(--acc)">${T(r.name)}</h2><p>${T(r.type)} · <span class="num">${r.fy}</span></p></div>
      <div class="grid g4">${r.ratios.map(([k, val]) => `<div class="stat"><b>${val}</b><span>${k}</span></div>`).join('')}</div>
      <div class="grid g2">${tbl(r.id === 'blk' || r.id === 'pif' ? 'Key Figures|أرقام رئيسية' : 'Income Statement|قائمة الدخل', r.is)}${tbl('Balance Sheet|الميزانية', r.bs)}${tbl('Cash Flow|التدفقات النقدية', r.cf)}
        <div class="card acc"><h3>${T(['كيف تقرأ هذه الأرقام؟', 'How to read these numbers'])}</h3><ul class="clean">${r.read.map(x => `<li>${T(x)}</li>`).join('')}</ul></div></div>
      <p class="note">${T(['المصدر', 'Source'])}: <span class="en" style="font-weight:400">${r.src}</span></p></section>`;
    $$('[data-act="real"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === realId));
  };

  let calcK = 'dcf';
  const CALCS = {
    dcf: { n: 'DCF', f: () => `<div class="fields">${field('d-f', T(['التدفق النقدي الحر، السنة 1', 'Free cash flow, year 1']), 100)}${field('d-g', T(['نمو السنوات 1–5 %', 'Growth, years 1–5 %']), 8)}${field('d-w', 'WACC %', 10)}${field('d-tg', T(['النمو النهائي %', 'Terminal growth %']), 3)}${field('d-nd', T(['صافي الدين', 'Net debt']), 200)}${field('d-sh', T(['عدد الأسهم', 'Shares outstanding']), 100)}</div>`,
      r: () => { const f = v('d-f'), g = v('d-g') / 100, w = v('d-w') / 100, tg = v('d-tg') / 100, nd = v('d-nd'), sh = v('d-sh') || 1;
        const calc = (w, tg) => { if (w <= tg) return null; let pv = 0, c = f; for (let y = 1; y <= 5; y++) { if (y > 1) c *= 1 + g; pv += c / (1 + w) ** y; } const tv = c * (1 + tg) / (w - tg), pvtv = tv / (1 + w) ** 5; return { pv, pvtv, ev: pv + pvtv, eq: pv + pvtv - nd, ps: (pv + pvtv - nd) / sh }; };
        const o = calc(w, tg); if (!o) return `<div class="killer">${T(['WACC يجب أن يكون أعلى من النمو النهائي.', 'WACC must be above terminal growth.'])}</div>`;
        const ws = [w - .01, w, w + .01], gs = [tg - .005, tg, tg + .005];
        return `<div class="big"><span>${tm('Value per Share|قيمة السهم')}</span><b>${fmt(o.ps, 2)}</b></div>
        <div class="grid g3"><div class="stat"><b>${fmt(o.ev)}</b><span>Enterprise Value</span></div><div class="stat"><b>${fmt(o.eq)}</b><span>Equity Value</span></div><div class="stat"><b>${fmt(100 * o.pvtv / o.ev)}%</b><span>Terminal value share of EV</span></div></div>
        <div class="formula">EV = Σ FCFₜ / (1+WACC)ᵗ + [FCF₅ × (1+g) / (WACC − g)] / (1+WACC)⁵</div>
        <h4>${tm('Sensitivity Table|جدول الحساسية')}</h4><div class="scroll"><table class="heat"><thead><tr><th>WACC ↓ · g →</th>${gs.map(q => `<th class="n">${fmt(q * 100, 1)}%</th>`).join('')}</tr></thead><tbody>${ws.map((a, i) => `<tr><th class="n">${fmt(a * 100, 1)}%</th>${gs.map((b, j) => { const q = calc(a, b); return `<td class="${i === 1 && j === 1 ? 'mid' : ''}">${q ? fmt(q.ps, 2) : '—'}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div>
        <p class="note">${T(['لاحظ كم من القيمة يأتي من القيمة النهائية، وكيف يغيّر 1% في WACC قيمة السهم.', 'Note how much of the value comes from the terminal value, and how a 1% change in WACC moves the share value.'])}</p>`; } },
    wacc: { n: 'WACC', f: () => `<div class="fields">${field('w-e', T(['قيمة حقوق الملكية', 'Equity value']), 700)}${field('w-d', T(['قيمة الدين', 'Debt value']), 300)}${field('w-rf', T(['العائد الخالي من المخاطر %', 'Risk-free rate %']), 4.5)}${field('w-b', 'Beta', 1.1)}${field('w-erp', T(['علاوة مخاطر السوق %', 'Equity risk premium %']), 5.5)}${field('w-kd', T(['تكلفة الدين %', 'Cost of debt %']), 6)}${field('w-t', T(['معدل الضريبة %', 'Tax rate %']), 20)}</div>`,
      r: () => { const e = v('w-e'), d = v('w-d'), ke = v('w-rf') + v('w-b') * v('w-erp'), kd = v('w-kd') * (1 - v('w-t') / 100), tot = e + d || 1, w = (e / tot) * ke + (d / tot) * kd;
        return `<div class="big"><span>WACC</span><b>${fmt(w, 2)}%</b></div><div class="grid g3"><div class="stat"><b>${fmt(ke, 2)}%</b><span>Cost of Equity (CAPM)</span></div><div class="stat"><b>${fmt(kd, 2)}%</b><span>After-tax Cost of Debt</span></div><div class="stat"><b>${fmt(100 * e / tot)}% / ${fmt(100 * d / tot)}%</b><span>Equity / Debt weights</span></div></div>
        <div class="formula">Ke = Rf + β × ERP &nbsp;·&nbsp; WACC = E/V × Ke + D/V × Kd × (1 − t)</div>
        <p class="note">${T(['الدين أرخص من حقوق الملكية وفوائده تخفض الضريبة، لكن زيادته ترفع مخاطر التعثر. في السعودية الوفر الضريبي أقل لأن الزكاة تُحسب بطريقة مختلفة.', 'Debt is cheaper than equity and its interest lowers tax, but more of it raises default risk. In Saudi Arabia the tax shield is smaller because zakat is computed differently.'])}</p>`; } },
    lbo: { n: 'LBO', f: () => `<div class="fields">${field('l-e', 'EBITDA', 100)}${field('l-m', T(['مضاعف الدخول (x)', 'Entry multiple (x)']), 8)}${field('l-d', T(['نسبة الدين %', 'Debt share %']), 60)}${field('l-g', T(['نمو EBITDA %', 'EBITDA growth %']), 6)}${field('l-x', T(['مضاعف الخروج (x)', 'Exit multiple (x)']), 8)}${field('l-n', T(['السنوات', 'Years']), 5, 1)}${field('l-p', T(['سداد الدين سنوياً (% من EBITDA)', 'Debt paydown a year (% of EBITDA)']), 30)}</div>`,
      r: () => { const e0 = v('l-e'), m = v('l-m'), dp = v('l-d') / 100, g = v('l-g') / 100, xm = v('l-x'), n = Math.max(1, Math.round(v('l-n'))), p = v('l-p') / 100;
        const ev0 = e0 * m, debt0 = ev0 * dp, eq0 = ev0 - debt0; let e = e0, paid = 0; for (let y = 1; y <= n; y++) { e *= 1 + g; paid = Math.min(debt0, paid + e * p); }
        const ev1 = e * xm, eq1 = ev1 - (debt0 - paid), moic = eq0 > 0 ? eq1 / eq0 : 0, irr = moic > 0 ? (moic ** (1 / n) - 1) * 100 : 0;
        const a1 = (e - e0) * m, a2 = (xm - m) * e, a3 = paid, tot = a1 + a2 + a3 || 1;
        return `<div class="grid g2"><div class="big"><span>IRR</span><b>${fmt(irr, 1)}%</b></div><div class="big"><span>MOIC</span><b>${fmt(moic, 2)}x</b></div></div>
        <div class="grid g3"><div class="stat"><b>${fmt(eq0)}</b><span>Equity invested</span></div><div class="stat"><b>${fmt(debt0)}</b><span>Debt at entry (${fmt(debt0 / e0, 1)}x EBITDA)</span></div><div class="stat"><b>${fmt(eq1)}</b><span>Equity at exit</span></div></div>
        <h4>${T(['من أين جاء العائد؟', 'Where did the return come from?'])}</h4>${bars([['EBITDA Growth|نمو الأرباح', Math.round(100 * a1 / tot)], ['Multiple Expansion|ارتفاع المضاعف', Math.round(100 * a2 / tot)], ['Debt Paydown|سداد الدين', Math.round(100 * a3 / tot)]])}
        <p class="note">${T(['ارفع نسبة الدين وشاهد IRR يرتفع. ثم اخفض نمو الأرباح إلى سالب وشاهد كيف تتبخر حقوق الملكية.', 'Raise the debt share and watch IRR climb. Then cut EBITDA growth below zero and watch equity evaporate.'])}</p>`; } },
    bank: { n: T(['تقييم بنك', 'Bank value']), f: () => `<div class="fields">${field('b-n', T(['صافي دخل الفوائد ÷ الأصول %', 'Net interest income ÷ assets %']), 3)}${field('b-f', T(['الرسوم ÷ الأصول %', 'Fees ÷ assets %']), 0.8)}${field('b-c', T(['التكلفة إلى الدخل %', 'Cost-to-income %']), 35)}${field('b-r', T(['تكلفة المخاطر ÷ الأصول %', 'Cost of risk ÷ assets %']), 0.4)}${field('b-t', T(['الزكاة والضريبة %', 'Zakat & tax %']), 12)}${field('b-e', T(['حقوق الملكية ÷ الأصول %', 'Equity ÷ assets %']), 12)}${field('b-k', T(['تكلفة حقوق الملكية %', 'Cost of equity %']), 10)}${field('b-g', T(['النمو طويل الأجل %', 'Long-term growth %']), 4)}</div>`,
      r: () => { const inc = v('b-n') + v('b-f'), ppop = inc * (1 - v('b-c') / 100), pre = ppop - v('b-r'), roa = pre * (1 - v('b-t') / 100), ea = v('b-e') || 1, roe = roa / ea * 100, k = v('b-k'), g = v('b-g');
        const pb = k > g ? (roe - g) / (k - g) : null;
        return `<div class="grid g2"><div class="big"><span>ROE</span><b>${fmt(roe, 1)}%</b></div><div class="big"><span>${tm('Fair P/B|المضاعف العادل للقيمة الدفترية')}</span><b>${pb == null ? '—' : fmt(pb, 2) + 'x'}</b></div></div>
        <div class="grid g3"><div class="stat"><b>${fmt(roa, 2)}%</b><span>ROA</span></div><div class="stat"><b>${fmt(100 / ea, 1)}x</b><span>Leverage (Assets ÷ Equity)</span></div><div class="stat"><b>${fmt(ppop, 2)}%</b><span>Pre-provision profit ÷ assets</span></div></div>
        <div class="formula">ROE = ROA × Leverage &nbsp;·&nbsp; P/B = (ROE − g) / (COE − g)</div>
        <p class="note">${T(['إذا كان ROE يساوي تكلفة حقوق الملكية فالمضاعف العادل 1. ارفع تكلفة المخاطر إلى 1.5% وشاهد ماذا يحدث للربحية والتقييم.', 'When ROE equals the cost of equity, fair P/B is 1. Raise cost of risk to 1.5% and see what happens to profitability and value.'])}</p>`; } },
    ins: { n: T(['شركة تأمين', 'Insurer']), f: () => `<div class="fields">${field('i-p', T(['الأقساط المكتسبة', 'Earned premiums']), 1000)}${field('i-c', T(['المطالبات', 'Claims']), 780)}${field('i-e', T(['المصاريف والعمولات', 'Expenses & commissions']), 170)}${field('i-f', T(['الاستثمارات ÷ الأقساط %', 'Investments ÷ premiums %']), 120)}${field('i-y', T(['عائد الاستثمار %', 'Investment yield %']), 5)}</div>`,
      r: () => { const p = v('i-p') || 1, c = v('i-c'), e = v('i-e'), lr = 100 * c / p, er = 100 * e / p, cr = lr + er, uw = p - c - e, inv = p * v('i-f') / 100 * v('i-y') / 100;
        return `<div class="big" style="--acc:var(--${cr < 100 ? 'ok' : 'danger'})"><span>${tm('Combined Ratio|النسبة المجمّعة')}</span><b>${fmt(cr, 1)}%</b></div>
        <div class="grid g3"><div class="stat"><b>${fmt(lr, 1)}%</b><span>Loss Ratio</span></div><div class="stat"><b>${fmt(er, 1)}%</b><span>Expense Ratio</span></div><div class="stat"><b>${fmt(uw)}</b><span>Underwriting result</span></div><div class="stat"><b>${fmt(inv)}</b><span>Investment income (float)</span></div><div class="stat"><b>${fmt(uw + inv)}</b><span>Total pre-zakat profit</span></div></div>
        <div class="formula">Combined Ratio = Claims / Premiums + Expenses / Premiums</div>
        <p class="note">${T(['ارفع المطالبات إلى 850: تصبح النسبة فوق 100% وتخسر الشركة من الاكتتاب، لكن دخل الاستثمار قد يبقيها رابحة.', 'Raise claims to 850: the ratio passes 100% and underwriting loses money, though investment income may keep the company in profit.'])}</p>`; } }
  };
  P.modeling = () => `
    ${head('CFA L1 · Corporate Issuers · Equity', tm('Financial Modelling|النمذجة المالية'), T(MODEL.intro))}
    ${sec(T(['مسار التعلّم', 'The learning path']), '', `<div class="steps">${MODEL.steps.map(([t, d]) => `<div class="step"><b>${tm(t)}</b><small>${T(d)}</small></div>`).join('')}</div>`)}
    <div class="card acc"><h3>${tm('Enterprise Value vs Equity Value|قيمة المنشأة مقابل قيمة حقوق الملكية')}</h3><p>${T(MODEL.ev)}</p></div>
    ${sec(T(['الحاسبات', 'Calculators']), T(['غيّر أي رقم والنتيجة تتحدّث فوراً', 'Change any number and the result updates at once']), `<div class="card" style="--acc:var(--magenta)">
      <div class="chips">${Object.entries(CALCS).map(([k, c]) => `<button type="button" class="chip" data-act="calc" data-k="${k}" aria-pressed="${k === calcK}">${c.n}</button>`).join('')}</div>
      <div class="calc"><div id="calc-in"></div><div class="out" id="calc-out"></div></div></div>`, 'calcs')}
    ${sec(T(['قواعد النموذج الجيد', 'Rules of a good model']), '', `<div class="card"><ul class="clean">${MODEL.rules.map(r => `<li>${T(r)}</li>`).join('')}</ul></div>`)}`;
  const calcRender = full => { const c = CALCS[calcK]; if (full) $('#calc-in').innerHTML = c.f(); $('#calc-out').innerHTML = c.r(); $$('[data-act="calc"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === calcK)); };

  P.risk = () => `
    ${head('CFA L1 · Portfolio Management · Fixed Income', T(['المخاطر', 'Risk']), T(['كل مؤسسة مالية تبيع تحمّل المخاطر. السؤال الصحيح عن أي مؤسسة: أي مخاطرة تتقاضى عنها أجراً، وهل تعرف حجمها؟', 'Every financial institution sells risk-bearing. The right question about any of them: which risk is it paid to carry, and does it know how big that risk is?']))}
    ${sec(T(['أنواع المخاطر', 'Types of risk']), '', `<div class="grid g2">${RISKDEF.map(([t, d]) => `<div class="card"><h3>${tm(t)}</h3><p>${T(d)}</p></div>`).join('')}</div>`)}
    ${sec(T(['مصفوفة المخاطر', 'The risk matrix']), T(['أي مخاطرة تهم أي مؤسسة', 'Which risk matters to which institution']), `<div class="scroll"><table><thead><tr><th>${T(['المؤسسة', 'Institution'])}</th>${RISKS.map(r => `<th>${tmE(r[1]).replace(' Risk', '')}</th>`).join('')}</tr></thead><tbody>${INST.map(i => `<tr data-cat="${i.cat}"><td><a href="#i-${i.id}">${T(i.name)}</a></td>${RISKS.map(r => `<td><span class="lv lv${i.risk[r[0]]}">${T(U.lv[i.risk[r[0]]])}</span></td>`).join('')}</tr>`).join('')}</tbody></table></div>
      <p class="note">${T(['تقدير تعليمي عام، ويختلف بحسب المؤسسة ونشاطها.', 'A general teaching estimate; it differs by institution and activity.'])}</p>`)}
    ${sec(T(['أدوات قياس المخاطر', 'Risk measurement tools']), '', `<div class="grid g3">${RISKTOOLS.map(([t, d]) => `<div class="kpi"><b>${t}</b><small>${T(d)}</small></div>`).join('')}</div>`)}`;

  P.intl = () => `
    ${head('CFA L1 · Economics', tm('International Finance|المالية الدولية'), T(INTL.intro))}
    <div class="grid g2">${INTL.topics.map(t => `<div class="card"><div class="chips"><span class="badge">CFA L1 · ${t.cfa}</span></div><h3>${tm(t.t)}</h3><p>${T(t.d)}</p></div>`).join('')}</div>
    ${sec(T(['حاسبة السعر الآجل', 'Forward rate calculator']), ar() ? 'Covered Interest Parity' : '', `<div class="card" style="--acc:var(--cyan)"><div class="calc"><div class="fields">${field('fx-s', T(['السعر الفوري (محلي لكل أجنبي)', 'Spot rate (domestic per foreign)']), 3.75)}${field('fx-d', T(['فائدة العملة المحلية %', 'Domestic interest rate %']), 5.5)}${field('fx-f', T(['فائدة العملة الأجنبية %', 'Foreign interest rate %']), 4.5)}${field('fx-m', T(['المدة بالأشهر', 'Months']), 12, 1)}</div><div class="out" id="fx-out"></div></div></div>`)}
    ${sec(T(['حاسبة تعادل القوة الشرائية', 'Purchasing power parity calculator']), ar() ? 'Relative PPP' : '', `<div class="card" style="--acc:var(--gold)"><div class="calc"><div class="fields">${field('pp-s', T(['السعر الحالي (محلي لكل أجنبي)', 'Current rate (domestic per foreign)']), 50)}${field('pp-d', T(['التضخم المحلي %', 'Domestic inflation %']), 12)}${field('pp-f', T(['التضخم الأجنبي %', 'Foreign inflation %']), 3)}${field('pp-n', T(['السنوات', 'Years']), 5, 1)}</div><div class="out" id="pp-out"></div></div></div>`)}`;
  const intlRender = () => {
    const s = v('fx-s'), d = v('fx-d') / 100, f = v('fx-f') / 100, m = v('fx-m') / 12, F = s * (1 + d * m) / (1 + f * m), pr = s ? (F / s - 1) * 100 : 0;
    $('#fx-out').innerHTML = `<div class="big"><span>${tm('Forward Rate|السعر الآجل')}</span><b>${fmt(F, 4)}</b></div><div class="grid g2"><div class="stat"><b>${sgn((F - s) * 10000, 0)}</b><span>Forward points (pips)</span></div><div class="stat"><b>${sgn(pr, 2)}%</b><span>${pr > 0 ? 'Foreign currency at forward premium' : 'Foreign currency at forward discount'}</span></div></div><div class="formula">F = S × (1 + i_d × T) / (1 + i_f × T)</div><p class="note">${T(['الأرقام الافتراضية مثال: لو كانت فائدة الريال أعلى من فائدة الدولار، يُسعَّر الدولار آجلاً أعلى قليلاً من 3.75، وهذا لا يعني أن الربط سيتغير. هو انعكاس حسابي لفرق الفائدة.', 'The defaults are an example: if riyal rates sit above dollar rates, the dollar is priced slightly above 3.75 forward. That does not mean the peg will move. It is the arithmetic of the interest gap.'])}</p>`;
    const s0 = v('pp-s'), pd = v('pp-d') / 100, pf = v('pp-f') / 100, n = v('pp-n'), s1 = s0 * ((1 + pd) / (1 + pf)) ** n;
    $('#pp-out').innerHTML = `<div class="big"><span>${T(['السعر المتوقع بحسب PPP', 'PPP-implied rate'])}</span><b>${fmt(s1, 2)}</b></div><div class="stat"><b>${sgn(s0 ? (s1 / s0 - 1) * 100 : 0, 1)}%</b><span>Change in price of foreign currency</span></div><div class="formula">S₁ = S₀ × [(1 + π_d) / (1 + π_f)]ⁿ</div><p class="note">${T(['العملة ذات التضخم الأعلى تفقد قيمتها مع الوقت. هذا ما حدث لعملات كثيرة في الأسواق الناشئة.', 'The currency with higher inflation loses value over time. That is the story of many emerging market currencies.'])}</p>`;
  };

  let qaTag = 'all';
  P.careers = () => {
    const c = CAREERS, tags = ['all', ...new Set(c.qa.map(q => q.tag))];
    return `
    ${head(T(['تدريب · وظيفة أولى · شهادات', 'Internship · first job · credentials']), T(['المسارات المهنية', 'Career paths']), T(c.intro))}
    ${sec(T(['مساراتك الثلاثة', 'Your three target paths']), '', `<div class="grid g3">${c.tracks.filter(t => t.star).map(t => trackCard(t)).join('')}</div>`)}
    ${sec(T(['مسارات أخرى قريبة', 'Other nearby paths']), '', `<div class="grid g3">${c.tracks.filter(t => !t.star).map(t => trackCard(t)).join('')}</div>`)}
    ${sec(T(['الشهادات المهنية', 'Professional credentials']), '', `<div class="scroll"><table><tbody>${c.certs.map(([a, n, d]) => `<tr><td><b class="en">${a}</b><small class="en" style="font-weight:400">${n}</small></td><td>${T(d)}</td></tr>`).join('')}</tbody></table></div>`)}
    ${sec(T(['كيف تحصل على التدريب في السعودية', 'Landing an internship in Saudi Arabia']), '', `<div class="card acc" style="--acc:var(--emerald)"><ul class="clean">${c.ksa.map(k => `<li>${T(k)}</li>`).join('')}</ul></div>`)}
    ${sec(T(['أسئلة المقابلات مع إجابات نموذجية', 'Interview questions with model answers']), '', `<div class="chips">${tags.map(t => `<button type="button" class="chip" data-act="qa" data-t="${t}" aria-pressed="${t === qaTag}">${t === 'all' ? T(['الكل', 'All']) : t}</button>`).join('')}</div>
      <div class="grid" id="qa-list">${c.qa.filter(q => qaTag === 'all' || q.tag === qaTag).map(q => `<details class="qa"><summary><span>${T(q.q)}</span><span class="badge">${q.tag}</span></summary><div>${T(q.a)}</div></details>`).join('')}</div>`, 'interview')}`;
  };
  const trackCard = t => `<div class="card" data-cat="${t.cat}" style="border-color:color-mix(in srgb,var(--acc) 45%,var(--line))"><h3 style="color:var(--acc)">${tm(t.t)}</h3><p>${T(t.d)}</p>
    <div class="ladder">${t.ladder.map((l, k) => `<div style="--i:${k}">${tm(l)}</div>`).join('')}</div>
    <p><b>${T(['يوم عادي', 'A typical day'])}:</b> ${T(t.day)}</p><p><b>${T(['المهارات', 'Skills'])}:</b> <span class="en" style="font-weight:400">${t.skills}</span></p><p><b>${T(['الشهادات', 'Credentials'])}:</b> <span class="en" style="font-weight:400">${t.certs}</span></p><p><b>${T(['إلى أين بعدها', 'Where it leads'])}:</b> ${T(t.exit)}</p></div>`;

  P.cfa = () => {
    const name = h => h.startsWith('i-') ? T(byId(h.slice(2)).name) : T(U.nav.find(n => n[0] === h)[1]);
    return `
    ${head(T(['خريطة المنهج', 'Curriculum map']), 'CFA Level I', T(['عشرة مواضيع بأوزانها في الاختبار، وأين تجد كل موضوع في هذا الموقع. الأخلاقيات وتحليل القوائم المالية والأسهم والدخل الثابت تشكل أكثر من نصف الاختبار.', 'Ten topics with their exam weights, and where each appears on this site. Ethics, financial statement analysis, equity and fixed income make up more than half the exam.']))}
    <div class="scroll"><table><thead><tr><th>${T(['الموضوع', 'Topic'])}</th><th class="n">${T(['الوزن', 'Weight'])}</th><th>${T(['في هذا الموقع', 'On this site'])}</th></tr></thead><tbody>${CFA.map(([t, w, d, links]) => `<tr><td>${tm(t)}<small>${T(d)}</small></td><td class="n"><b>${w}</b></td><td><div class="chips">${links.map(h => `<a class="chip" href="#${h}">${name(h)}</a>`).join('')}</div></td></tr>`).join('')}</tbody></table></div>
    <p class="note">${T(['الأوزان بحسب منهج CFA Institute المعلن للمستوى الأول. تحقق من الموقع الرسمي عند التسجيل لأن الأوزان تُراجع دورياً.', 'Weights follow CFA Institute’s published Level I curriculum. Check the official site when you register, as weights are reviewed periodically.'])}</p>
    <div class="card acc" style="--acc:var(--gold)"><h3>${T(['نصيحة عملية', 'Practical advice'])}</h3><ul class="clean">
      <li>${T(['ابدأ بتحليل القوائم المالية: وزنه كبير ويخدمك في المقابلات مباشرة.', 'Start with financial statement analysis: it carries heavy weight and helps directly in interviews.'])}</li>
      <li>${T(['الأخلاقيات تُحفظ بالتمارين لا بالقراءة. حل أسئلتها في آخر شهر.', 'Ethics is learned through practice questions, not reading. Drill them in the final month.'])}</li>
      <li>${T(['خطة شائعة: نحو 300 ساعة على 4 إلى 6 أشهر، وآخر شهر كله اختبارات تجريبية.', 'A common plan: about 300 hours over 4 to 6 months, with the last month spent on mock exams.'])}</li></ul></div>`;
  };

  let learnTab = 'gloss', fcI = 0, fcFlip = false;
  P.learn = () => `
    ${head(T(['قاموس · بطاقات · اختبار', 'Glossary · flashcards · quiz']), T(['راجع واختبر', 'Review & quiz']), T(['كل المصطلحات بالإنجليزية مع ترجمتها وتعريفها، وكل أسئلة المؤسسات في مكان واحد.', 'Every term in English with its Arabic translation and definition, and all the institution questions in one place.']))}
    <div class="chips">${[['gloss', ['القاموس', 'Glossary']], ['flash', ['بطاقات المراجعة', 'Flashcards']], ['quiz', ['بنك الأسئلة', 'Question bank']]].map(([k, t]) => `<button type="button" class="chip" data-act="ltab" data-k="${k}" aria-pressed="${k === learnTab}">${T(t)}</button>`).join('')}</div>
    <div id="learn-out"></div>`;
  const learnRender = () => {
    const o = $('#learn-out');
    $$('[data-act="ltab"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === learnTab));
    if (learnTab === 'gloss') {
      o.innerHTML = `<section><input class="inp" id="g-q" type="search" style="direction:inherit;font-family:inherit" placeholder="${T(['ابحث بالعربي أو الإنجليزي…', 'Search in Arabic or English…'])}" aria-label="Search glossary"><div class="grid g3" id="g-list"></div></section>`;
      glossRender();
    } else if (learnTab === 'flash') {
      const g = GLOSS[fcI], nk = Object.keys(S.known).length;
      o.innerHTML = `<section style="--acc:var(--gold)"><div class="prog"><i style="width:${100 * nk / GLOSS.length}%"></i></div><p class="note"><span class="num">${fcI + 1} / ${GLOSS.length}</span> · ${T(['حفظت', 'Learned'])} <span class="num">${nk}</span></p>
        <button type="button" class="flash" data-act="flip">${fcFlip ? `<span class="en">${g[0]}</span><h3>${g[1]}</h3><p>${ar() ? g[2] : g[3]}</p>` : `<span class="en">${g[0]}</span><p class="note">${T(['اضغط لرؤية الترجمة والتعريف', 'Tap for the translation and definition'])}</p>`}</button>
        <div class="cta" style="justify-content:center"><button type="button" class="btn" data-act="fc" data-d="-1">${T(['السابق', 'Previous'])}</button><button type="button" class="btn pri" data-act="know">${S.known[g[0]] ? '✓ ' + T(['محفوظة', 'Learned']) : T(['حفظتها', 'I know this'])}</button><button type="button" class="btn" data-act="fc" data-d="1">${T(['التالي', 'Next'])}</button></div></section>`;
    } else {
      const all = allQuiz(), done = all.filter(q => S.quiz[q.qid] != null), right = done.filter(q => S.quiz[q.qid] === q.q.a).length;
      o.innerHTML = `<section><div class="grid g3"><div class="stat"><b>${done.length} / ${all.length}</b><span>${T(['أجبت', 'Answered'])}</span></div><div class="stat"><b>${right}</b><span>${T(['صحيحة', 'Correct'])}</span></div><div class="stat"><b>${done.length ? Math.round(100 * right / done.length) : 0}%</b><span>${T(['الدقة', 'Accuracy'])}</span></div></div>
        <div class="cta"><button type="button" class="btn sm" data-act="reset">${T(['ابدأ من جديد', 'Start over'])}</button></div>
        <div class="grid g2">${all.map(q => `<div data-cat="${q.inst.cat}"><span class="eyebrow">${T(q.inst.name)}</span>${quizHTML(q.q, q.qid)}</div>`).join('')}</div></section>`;
    }
  };
  const glossRender = () => {
    const q = ($('#g-q').value || '').trim().toLowerCase();
    const list = GLOSS.filter(g => !q || g[0].toLowerCase().includes(q) || g[1].includes(q) || g[2].includes(q) || g[3].toLowerCase().includes(q));
    $('#g-list').innerHTML = list.length ? list.map(g => `<div class="kpi"><b>${g[0]}</b>${ar() ? `<span>${g[1]}</span>` : ''}<small>${ar() ? g[2] : g[3]}</small></div>`).join('') : `<p class="note">${T(['لا توجد نتائج. جرّب كلمة أخرى.', 'No matches. Try another word.'])}</p>`;
  };

  P.sources = () => `
    ${head(T(['من أين جاءت الأرقام', 'Where the numbers come from']), T(U.src), T(['الأرقام الحقيقية من نتائج السنة المالية 2025 المعلنة. الشروحات مبنية على مناهج CFA ومعايير Basel و IFRS. النسب في صفحات المؤسسات تقريبية لمؤسسة نموذجية.', 'Real figures are from published FY2025 results. Explanations draw on the CFA curriculum and the Basel and IFRS standards. Proportions on institution pages are indicative for a typical firm.']))}
    <div class="card"><ul class="clean">${SOURCES.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener"><span class="en" style="font-weight:500">${t}</span></a></li>`).join('')}</ul></div>
    <div class="killer" style="border-color:var(--gold);background:color-mix(in srgb,var(--gold) 10%,var(--surface))">${T(['تنبيه: بعض أرقام 2025 أُخذت من ملخصات النتائج المنشورة في مواقع مالية لأن التقارير الأصلية لم تكن متاحة للقراءة المباشرة. راجع التقرير السنوي للشركة قبل استخدام أي رقم في بحث أو واجب.', 'Note: some 2025 figures were taken from published summaries of results on financial sites, because the original reports could not be read directly. Check the company’s annual report before using any number in research or coursework.'])}</div>`;

  const FM = window.FM = { P, T, tm, tmE, fmt, sgn, ARW, ar, sec, head, bars, chipsT, byId, $, $$, v, field, quizHTML, S, U, after: {}, acts: {}, inputs: [] };

  /* ---------- router & shell ---------- */
  const route = () => {
    const h = (location.hash || '#home').slice(1);
    const view = $('#view');
    let page = h, cat = null, html;
    if (h.startsWith('i-') && byId(h.slice(2))) { const i = byId(h.slice(2)); html = P.inst(i.id); page = 'institutions'; cat = i.cat; S.seen[i.id] = 1; store.set('fm-seen', S.seen); }
    else if (P[h] && h !== 'inst') html = P[h]();
    else { page = 'home'; html = P.home(); }
    view.innerHTML = html;
    if (cat) document.body.dataset.cat = cat; else delete document.body.dataset.cat;
    $$('#nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + page));
    const on = $('#nav a.on'); if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (h === 'institutions') cmpRender();
    if (h === 'statements') lkRender();
    if (h === 'real') realRender();
    if (h === 'modeling') calcRender(true);
    if (h === 'intl') intlRender();
    if (h === 'learn') learnRender();
    if (FM.after[h]) FM.after[h]();
    window.scrollTo(0, 0);
  };
  const shell = () => {
    document.documentElement.lang = S.lang;
    document.body.dir = ar() ? 'rtl' : 'ltr';
    if (S.theme) document.documentElement.dataset.theme = S.theme;
    $('#brand-t').textContent = T(U.brand);
    $('#nav').innerHTML = U.nav.map(([h, t]) => `<a href="#${h}">${T(t)}</a>`).join('');
    $('#btn-lang').textContent = ar() ? 'EN' : 'ع';
    $('#foot').innerHTML = `${T(U.foot)} · <a href="#sources">${T(U.src)}</a>`;
  };

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    const a = b.dataset.act;
    if (a === 'ans') {
      const q = b.closest('.quiz'), qid = q.dataset.qid, right = +q.dataset.a, i = +b.dataset.i;
      S.quiz[qid] = i; store.set('fm-quiz', S.quiz);
      $$('.opt', q).forEach((o, k) => { o.disabled = true; if (k === right) o.classList.add('ok'); else if (k === i) o.classList.add('no'); });
      $('.why', q).hidden = false;
    }
    else if (a === 'jump') { const el = document.getElementById(b.dataset.to); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - ($('header.top').offsetHeight + 12); window.scrollTo({ top: y, behavior: 'smooth' }); } }
    else if (a === 'lk') { lkK = +b.dataset.k; $$('[data-act="lk"]').forEach(c => c.setAttribute('aria-pressed', c === b)); lkRender(); }
    else if (a === 'real') { realId = b.dataset.id; realRender(); }
    else if (a === 'calc') { calcK = b.dataset.k; calcRender(true); }
    else if (a === 'qa') { qaTag = b.dataset.t; const y = window.scrollY; $('#view').innerHTML = P.careers(); window.scrollTo(0, y); }
    else if (a === 'ltab') { learnTab = b.dataset.k; learnRender(); }
    else if (a === 'flip') { fcFlip = !fcFlip; learnRender(); }
    else if (a === 'fc') { fcI = (fcI + +b.dataset.d + GLOSS.length) % GLOSS.length; fcFlip = false; learnRender(); }
    else if (a === 'know') { const k = GLOSS[fcI][0]; if (S.known[k]) delete S.known[k]; else S.known[k] = 1; store.set('fm-known', S.known); learnRender(); }
    else if (a === 'reset') { S.quiz = {}; store.set('fm-quiz', S.quiz); learnRender(); }
    else if (FM.acts[a]) FM.acts[a](b);
  });
  document.addEventListener('input', e => {
    const id = e.target.id || '';
    if (id.startsWith('lk-')) lkRender();
    else if (id.startsWith('fx-') || id.startsWith('pp-')) intlRender();
    else if (id === 'g-q') glossRender();
    else if (id.startsWith('cmp-')) cmpRender();
    else if (e.target.closest('#calc-in')) calcRender(false);
    FM.inputs.forEach(f => f(e));
  });
  $('#btn-lang').addEventListener('click', () => { S.lang = ar() ? 'en' : 'ar'; store.set('fm-lang', S.lang); shell(); route(); });
  $('#btn-theme').addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    S.theme = cur === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = S.theme; store.set('fm-theme', S.theme);
  });
  window.addEventListener('hashchange', route);
  FM.start = () => { shell(); route(); };
})();
