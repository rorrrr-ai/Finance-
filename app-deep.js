/* Deep-reading pages: deals, crises, library (with big ideas), playbook. Loaded last; starts the app. */
(() => {
  const { P, T, tm, fmt, ARW, ar, sec, head, $, $$, U } = FM;
  const ins = (after, item) => { const i = U.nav.findIndex(n => n[0] === after); U.nav.splice(i + 1, 0, item); };
  ins('intl', ['crises', ['الأزمات', 'Crises']]);
  ins('intl', ['deals', ['الصفقات', 'Deals']]);
  ins('careers', ['playbook', ['خطتك', 'Your plan']]);
  ins('cfa', ['library', ['اقرأ وتابع', 'Read & follow']]);
  SOURCES.push(['Electronic Arts — completion of acquisition by PIF, Silver Lake and Affinity Partners (2026)', 'https://www.engadget.com/2227680/electronic-arts-goes-private-next-week'],
    ['Almarai — acquisition of Pure Beverages Industry Company (Argaam)', 'https://www.argaam.com/en/article/articledetail/id/1820744'],
    ['Aramco — Jafurah midstream deal (2025)', 'https://www.aramco.com/en/news-media/news/2025/jafurah-midstream-deal'],
    ['Jahez IPO — final offer price and coverage (Argaam)', 'https://www.argaam.com/en/article/articledetail/id/1520608']);
  const mem = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* unavailable */ } } };
  const none = () => `<p class="note">${T(['لا توجد نتائج بهذا الفلتر.', 'Nothing matches this filter.'])}</p>`;

  /* home tiles */
  const home0 = P.home;
  P.home = () => home0().replace('<!--deep-->', sec(T(['اقرأ بعمق', 'Read deeper']), T(['صفقات، أزمات، كتب، وخطة عمل', 'Deals, crises, books and a plan']), `<div class="grid g4">${[
    ['deals', 'gold', ['مكتبة الصفقات', 'The deals library'], ['17 صفقة سعودية وعالمية: الهيكل، التقييم، ماذا حدث بعدها، وسؤال مقابلة.', '17 Saudi and global deals: structure, valuation, what came next, and an interview question.']],
    ['crises', 'coral', ['الأزمات والخط الزمني', 'Crises and timeline'], ['من 1929 إلى 2023، مع انهيار السوق السعودي 2006 ومحطات السوق المالية.', 'From 1929 to 2023, with the 2006 Saudi crash and the market’s milestones.']],
    ['library', 'cyan', ['اقرأ وتابع', 'Read & follow'], ['12 فكرة كبرى، 22 كتاباً مرتبة بالمستوى، ورسائل ونشرات تستحق وقتك.', '12 big ideas, 22 books ordered by level, and letters and newsletters worth your time.']],
    ['playbook', 'emerald', ['خطتك وتوصياتي', 'Your plan and my advice'], ['خطة 12 شهراً، كيف تكتب توصية سهم، ومثال تدريبي بأرقام حقيقية.', 'A 12-month plan, how to write a stock pitch, and a practice case on real numbers.']]
  ].map(([h, c, t, d]) => `<a class="tile" href="#${h}" style="--acc:var(--${c})"><span class="mono">${ARW()}</span><h3>${T(t)}</h3><small>${T(d)}</small></a>`).join('')}</div>`));

  /* ---------- deals ---------- */
  let dReg = 'all', dType = 'all';
  const TYPES = { IPO: ['طرح عام', 'IPO'], 'M&A': ['استحواذ', 'M&A'], LBO: ['استحواذ بالرافعة', 'LBO'], Merger: ['اندماج', 'Merger'], Rescue: ['إنقاذ', 'Rescue'], Infrastructure: ['بنية تحتية', 'Infrastructure'] };
  P.deals = () => `
    ${head(T(['17 دراسة حالة', '17 case studies']), T(['مكتبة الصفقات', 'The deals library']), T(['كل صفقة تعلّم مفهوماً واحداً بعمق: كيف هُيكلت، بكم قُيّمت، ماذا حدث بعدها، وما السؤال الذي قد يُطرح عليك عنها في مقابلة. اقرأ الصفقة ثم حاول الإجابة قبل فتح الجواب.', 'Each deal teaches one concept in depth: how it was structured, what it was valued at, what happened next, and the question you might be asked about it in an interview. Read the deal, then try the answer before opening it.']))}
    <div class="chips">${[['all', ['الكل', 'All']], ['sa', ['السعودية والمنطقة', 'Saudi & region']], ['gl', ['عالمية', 'Global']]].map(([k, t]) => `<button type="button" class="chip" data-act="d-reg" data-k="${k}" aria-pressed="${k === dReg}">${T(t)}</button>`).join('')}</div>
    <div class="chips">${[['all', ['كل الأنواع', 'All types']], ...Object.entries(TYPES)].map(([k, t]) => `<button type="button" class="chip" data-act="d-type" data-k="${k}" aria-pressed="${k === dType}">${T(t)}</button>`).join('')}</div>
    <div id="deals-out" class="grid"></div>`;
  const dealsRender = () => {
    const l = DEALS.filter(d => (dReg === 'all' || d.reg === dReg) && (dType === 'all' || d.type === dType));
    $('#deals-out').innerHTML = l.length ? l.map((d, i) => `<details class="qa" style="--acc:var(--${d.cat})"${i === 0 ? ' open' : ''}><summary><span><span class="num" style="color:var(--acc)">${d.y}</span> · ${T(d.name)}</span><span class="badge" style="direction:inherit">${T(TYPES[d.type])}</span></summary>
      <div style="color:var(--fg);display:flex;flex-direction:column;gap:14px">
        <div class="grid g4">${d.facts.map(([k, v]) => `<div class="stat"><b style="font-size:1.05rem">${v}</b><span style="direction:inherit;font-family:inherit">${tm(k)}</span></div>`).join('')}</div>
        <div><h4>${T(['القصة', 'The story'])}</h4><p>${T(d.story)}</p></div>
        <div><h4>${T(['ماذا حدث بعدها', 'What happened next'])}</h4><p>${T(d.after)}</p></div>
        <div class="killer" style="border-color:var(--acc);background:color-mix(in srgb,var(--acc) 10%,var(--surface))"><b>${T(['الدرس', 'The lesson'])}:</b> ${T(d.lesson)}</div>
        <details class="qa"><summary><span>${T(['سؤال مقابلة', 'Interview question'])}: ${T(d.q)}</span></summary><div>${T(d.a)}</div></details>
      </div></details>`).join('') : none();
    $$('[data-act="d-reg"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === dReg));
    $$('[data-act="d-type"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === dType));
  };
  FM.after.deals = dealsRender;
  FM.acts['d-reg'] = b => { dReg = b.dataset.k; dealsRender(); };
  FM.acts['d-type'] = b => { dType = b.dataset.k; dealsRender(); };

  /* ---------- crises ---------- */
  let cReg = 'all';
  P.crises = () => `
    ${head(T(['13 أزمة · قرن من الدروس', '13 crises · a century of lessons']), T(['الأزمات والخط الزمني', 'Crises and timeline']), T(['الأزمات تتشابه: رافعة عالية، تمويل قصير لأصول طويلة، وثقة بأن الأسعار لا تهبط. من يعرف القصص يتعرف على النمط حين يتكرر.', 'Crises rhyme: high leverage, short funding of long assets, and confidence that prices do not fall. Knowing the stories helps you recognise the pattern when it returns.']))}
    <div class="chips">${[['all', ['الكل', 'All']], ['sa', ['السعودية والخليج', 'Saudi & Gulf']], ['gl', ['عالمية', 'Global']]].map(([k, t]) => `<button type="button" class="chip" data-act="c-reg" data-k="${k}" aria-pressed="${k === cReg}">${T(t)}</button>`).join('')}</div>
    <div id="crises-out"></div>
    ${sec(T(['محطات السوق المالية السعودية', 'Milestones of the Saudi capital market']), '', `<div class="tl" style="--acc:var(--emerald)">${MILESTONES.map(([y, d]) => `<div><span class="yr">${y}</span><div class="kpi"><small style="color:var(--fg);font-size:.95rem">${T(d)}</small></div></div>`).join('')}</div>`)}
    <div class="cta"><a class="btn" href="#risk">${T(['راجع أنواع المخاطر', 'Review the risk types'])}</a><a class="btn" href="#deals">${T(['مكتبة الصفقات', 'The deals library'])}</a></div>`;
  const crisesRender = () => {
    const l = CRISES.filter(c => cReg === 'all' || c.reg === cReg);
    $('#crises-out').innerHTML = `<div class="tl">${l.map(c => `<div style="--acc:var(--${c.reg === 'sa' ? 'emerald' : 'coral'})"><span class="yr">${c.y}</span><div class="card"><h3>${T(c.t)}</h3><p>${T(c.d)}</p><div class="killer" style="border-color:var(--acc);background:color-mix(in srgb,var(--acc) 10%,var(--surface))">${T(c.l)}</div></div></div>`).join('')}</div>`;
    $$('[data-act="c-reg"]').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === cReg));
  };
  FM.after.crises = crisesRender;
  FM.acts['c-reg'] = b => { cReg = b.dataset.k; crisesRender(); };

  /* ---------- library ---------- */
  let bTrack = 'all';
  const TRK = { all: ['الكل', 'All'], consult: ['الاستشارات', 'Consulting'], funds: ['الصناديق', 'Funds'], corp: ['مالية الشركات', 'Corporate finance'] };
  const booksOut = () => LIBRARY.books.map((g, gi) => { const l = g.l.filter(b => bTrack === 'all' || b[3] === 'all' || b[3] === bTrack); return l.length ? `<div class="card" style="--acc:var(--${['emerald', 'gold', 'magenta'][gi]})"><h3 style="color:var(--acc)">${gi + 1}. ${T(g.g)}</h3><div class="grid g2">${l.map(b => `<div class="kpi"><b>${b[0]}</b><span class="en" style="font-weight:400;color:var(--mute);text-align:start">${b[1]}</span><small style="color:var(--fg)">${T(b[2])}</small></div>`).join('')}</div></div>` : ''; }).join('');
  P.library = () => `
    ${head(T(['أفكار · كتب · رسائل · نشرات', 'Ideas · books · letters · newsletters']), T(['اقرأ وتابع', 'Read & follow']), T(['المنهج يعطيك الأدوات، والقراءة تعطيك الحكم. هذه قائمة مختصرة ومرتبة: ابدأ بالأفكار الكبرى، ثم كتاب واحد في الشهر.', 'The curriculum gives you tools; reading gives you judgement. A short, ordered list: start with the big ideas, then one book a month.']))}
    ${sec(T(['12 فكرة كبرى في المالية', '12 big ideas in finance']), T(['كل فكرة معها سؤال تفكر فيه', 'Each idea comes with a question to think about']), `<div class="grid g2">${IDEAS.map(([t, d, q], i) => `<div class="card" style="--acc:var(--${['emerald', 'gold', 'blue', 'magenta', 'coral', 'cyan'][i % 6]})"><div style="display:flex;gap:10px;align-items:center"><span class="mono">${i + 1}</span><h3>${tm(t)}</h3></div><p>${T(d)}</p><p class="note" style="color:var(--acc)"><b>${T(['فكّر', 'Think'])}:</b> ${T(q)}</p></div>`).join('')}</div>`, 'ideas')}
    ${sec(T(['الكتب', 'Books']), T(['ثلاثة مستويات. اختر مسارك', 'Three levels. Pick your path']), `<div class="chips">${Object.entries(TRK).map(([k, t]) => `<button type="button" class="chip" data-act="b-trk" data-k="${k}" aria-pressed="${k === bTrack}">${T(t)}</button>`).join('')}</div><div id="books-out" class="grid">${booksOut()}</div>`, 'books')}
    ${sec(T(['خمسة كتب لكل هدف، بالترتيب', 'Five books per goal, in order']), '', `<div class="grid g3">${LIBRARY.paths.map(p => `<div class="card" style="--acc:var(--${p.c})"><h3 style="color:var(--acc)">${T(p.t)}</h3><div class="lad">${p.l.map((b, i) => `<div style="--i:${i}"><span class="n">${i + 1}</span><b class="en">${b}</b></div>`).join('')}</div></div>`).join('')}</div>`)}
    ${sec(T(['تابع باستمرار', 'Follow regularly']), '', LIBRARY.follow.map(g => `<div class="card" style="--acc:var(--${g.c})"><h3 style="color:var(--acc)">${T(g.g)}</h3><div class="grid g2">${g.l.map(([n, d]) => `<div class="kpi"><b style="font-family:inherit;direction:inherit;font-size:1rem">${n}</b><small>${T(d)}</small></div>`).join('')}</div></div>`).join(''))}`;
  FM.acts['b-trk'] = b => { bTrack = b.dataset.k; $('#books-out').innerHTML = booksOut(); $$('[data-act="b-trk"]').forEach(c => c.setAttribute('aria-pressed', c === b)); };

  /* ---------- playbook ---------- */
  let plan = mem.get('fm-plan', {});
  const fcfRows = () => { const DN = { almarai: -190590, apple: -25000 };
    const calc = id => { const c = LAB.find(x => x.id === id), k = c.k, tr = k.tax[0] / k.pbt[0], nopat = k.op[0] * (1 - tr), ufcf = nopat + k.da[0] - k.capex[0] + DN[id], norm = nopat + DN[id]; return { c, tr, nopat, da: k.da[0], capex: k.capex[0], dn: DN[id], ufcf, norm, rev: k.rev[0] }; };
    const a = calc('almarai'), p = calc('apple'), f = n => n < 0 ? '(' + fmt(-n) + ')' : fmt(n);
    const rows = [['Operating profit (EBIT)|الربح التشغيلي', x => f(x.c.k.op[0]), 0], ['Tax / zakat rate|معدل الضريبة والزكاة', x => fmt(x.tr * 100, 1) + '%', 0], ['NOPAT = EBIT × (1 − t)|الربح التشغيلي بعد الضريبة', x => f(x.nopat), 1], ['+ Depreciation & amortisation|+ الإهلاك والإطفاء', x => f(x.da), 0], ['− Capital expenditure|− النفقات الرأسمالية', x => f(-x.capex), 0], ['− Increase in working capital|− الزيادة في رأس المال العامل', x => f(x.dn), 0], ['Unlevered free cash flow|التدفق النقدي الحر غير المموَّل بالدين', x => f(x.ufcf), 2], ['As % of revenue|كنسبة من الإيرادات', x => fmt(x.ufcf / x.rev * 100, 1) + '%', 0], ['Normalised (CapEx = D&A)|مُطبَّع (النفقات الرأسمالية = الإهلاك)', x => f(x.norm), 1]];
    return `<div class="scroll"><table style="min-width:520px"><thead><tr><th>FY2025</th><th class="n" style="color:var(--coral)">${T(a.c.name)}<small>${T(a.c.unit)}</small></th><th class="n" style="color:var(--magenta)">${T(p.c.name)}<small>${T(p.c.unit)}</small></th></tr></thead><tbody>${rows.map(([l, fn, lv]) => `<tr class="${lv === 2 ? 'tot' : lv === 1 ? 'sub' : ''}"><td>${tm(l)}</td><td class="n">${fn(a)}</td><td class="n">${fn(p)}</td></tr>`).join('')}</tbody></table></div>`; };
  const list = a => `<ul class="clean">${a.map(x => `<li>${T(x)}</li>`).join('')}</ul>`;
  P.playbook = () => { const b = PLAYBOOK, done = Object.keys(plan).length, total = b.phases.reduce((s, p) => s + p.l.length, 0); return `
    ${head(T(['السنة الأخيرة · خطوة بخطوة', 'Final year · step by step']), T(['خطتك وتوصياتي', 'Your plan and my advice']), T(['خطة عملية من 12 شهراً لطالب في سنته الأخيرة يستهدف CFA Level I وتدريباً في الاستشارات أو الصناديق أو مالية الشركات. علّم على ما أنجزته، ويُحفظ في هذا المتصفح.', 'A practical 12-month plan for a final-year student aiming at CFA Level I and an internship in consulting, funds or corporate finance. Tick off what you have done; it is saved in this browser.']))}
    <section><div class="prog"><i style="width:${Math.round(100 * done / total)}%"></i></div><p class="note"><span class="num">${done} / ${total}</span> ${T(['خطوة منجزة', 'steps done'])}</p>
      <div class="grid g2">${b.phases.map((p, pi) => `<div class="card" style="--acc:var(--${p.c})"><h3 style="color:var(--acc)">${T(p.t)}</h3>${p.l.map((x, i) => { const k = pi + '-' + i; return `<button type="button" class="chk" data-act="plan" data-k="${k}" aria-pressed="${!!plan[k]}"><i>${plan[k] ? '✓' : ''}</i><span>${T(x)}</span></button>`; }).join('')}</div>`).join('')}</div></section>
    ${sec(T(['كيف تكتب توصية سهم', 'How to write a stock pitch']), ar() ? 'Stock Pitch' : '', `<div class="steps">${b.pitch.map(([t, d]) => `<div class="step"><b>${tm(t)}</b><small>${T(d)}</small></div>`).join('')}</div><p class="note">${T(['في مقابلات الصناديق يُطلب منك غالباً: "اعرض عليّ سهماً". جهّز توصية واحدة تعرفها بعمق أفضل من ثلاث سطحية.', 'In fund interviews you are often asked to pitch a stock. One pitch you know deeply beats three shallow ones.'])}</p>`, 'pitch')}
    ${sec(T(['مثال تدريبي: المراعي', 'A practice case: Almarai']), T(['بأرقام 2025 من مختبر القوائم', 'On 2025 figures from the statement lab']), `<div class="killer" style="border-color:var(--gold);background:color-mix(in srgb,var(--gold) 10%,var(--surface))">${T(['هذا تمرين على التفكير وليس توصية بالشراء أو البيع. لا يوجد هنا سعر مستهدف، وأنا لا أملك سعر السهم الحالي. الهدف أن ترى كيف تُبنى الحجتان من الأرقام نفسها، ثم تكمل أنت.', 'This is a thinking exercise, not a recommendation to buy or sell. There is no target price here, and I do not have the current share price. The aim is to see both cases built from the same numbers, and then to finish the work yourself.'])}</div>
      <div class="grid g2"><div class="card" style="--acc:var(--ok)"><h3 style="color:var(--acc)">${tm('Bull Case|الحجة المتفائلة')}</h3>${list(b.bull)}</div><div class="card" style="--acc:var(--danger)"><h3 style="color:var(--acc)">${tm('Bear Case|الحجة المتشائمة')}</h3>${list(b.bear)}</div></div>
      <div class="card acc" style="--acc:var(--blue)"><h3>${T(['أسئلة تحسم الأمر، وعليك الإجابة عنها', 'The questions that settle it, for you to answer'])}</h3>${list(b.ask)}<a class="btn sm" href="#lab" style="align-self:flex-start">${T(['افتح قوائم المراعي', 'Open Almarai’s statements'])} ${ARW()}</a></div>`, 'case')}
    ${sec(T(['من القوائم إلى التدفق النقدي الحر', 'From the statements to free cash flow']), T(['أول خطوة في أي DCF', 'The first step of any DCF']), `${fcfRows()}
      <div class="grid g2"><div class="card soft"><h3>${T(['لماذا رقم المراعي سالب؟', 'Why is Almarai’s figure negative?'])}</h3><p>${T(['لأن النفقات الرأسمالية في سنة توسع تتجاوز ما تولده العمليات. لو خصمت هذا الرقم في DCF لحصلت على قيمة سالبة، وهذا خطأ شائع. المحلل يفصل نفقات الصيانة عن التوسع. السطر الأخير يفترض أن الصيانة تساوي الإهلاك، وهو تقريب أولي، والتوسع تُقيَّم عوائده المتوقعة بشكل مستقل.', 'Because capital spending in an expansion year exceeds what operations generate. Discount this figure in a DCF and you get a negative value, a common mistake. The analyst separates maintenance from expansion spending. The last line assumes maintenance equals depreciation, a first approximation, with expansion returns valued separately.'])}</p></div>
      <div class="card soft"><h3>${T(['ولماذا رقم Apple يحتاج تعديلاً؟', 'And why does Apple’s figure need adjusting?'])}</h3><p>${T(['لأن الشركة تدفع جزءاً كبيراً من الأجور أسهماً: 12.9 مليار دولار في 2025. هذا المصروف يُضاف في التدفقات النقدية لأنه غير نقدي، لكنه يخفض حصة المساهمين. كثير من المحللين يخصمونه من التدفق الحر. وتغير رأس المال العامل في 2025 تضمن سداد ضريبة استثنائية لا تتكرر.', 'Because the company pays a large share of wages in stock: $12.9 billion in 2025. That expense is added back in cash flow as non-cash, yet it dilutes shareholders. Many analysts deduct it from free cash flow. And the 2025 working capital change included a one-off tax payment that will not recur.'])}</p></div></div>
      <div class="cta"><a class="btn pri" href="#modeling">${T(['ضع الرقم في حاسبة DCF', 'Put the number into the DCF calculator'])}</a></div>`, 'fcf')}
    ${sec(T(['ستة مشاريع تبني بها ملفك', 'Six projects to build your portfolio']), '', `<div class="grid g3">${b.projects.map((p, i) => `<div class="card"><div style="display:flex;gap:10px;align-items:center"><span class="mono">${i + 1}</span><h3>${ar() ? p[0] : p[1]}</h3></div><p>${T(p[2])}</p></div>`).join('')}</div>`)}
    <div class="grid g2"><div class="card" style="--acc:var(--emerald)"><h3 style="color:var(--acc)">${T(['عادات أسبوعية', 'Weekly habits'])}</h3>${list(b.habits)}</div><div class="card" style="--acc:var(--danger)"><h3 style="color:var(--acc)">${T(['أخطاء شائعة', 'Common mistakes'])}</h3>${list(b.mistakes)}</div></div>
    <div class="cta"><a class="btn" href="#careers">${T(['السلالم الوظيفية وأسئلة المقابلات', 'Career ladders and interview questions'])}</a><a class="btn" href="#library">${T(['قائمة القراءة', 'The reading list'])}</a></div>`; };
  FM.acts.plan = b => { const k = b.dataset.k; if (plan[k]) delete plan[k]; else plan[k] = 1; mem.set('fm-plan', plan); const y = window.scrollY; $('#view').innerHTML = P.playbook(); window.scrollTo(0, y); };

  FM.start();
})();
