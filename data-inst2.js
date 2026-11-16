/* Institutions data (part 2) */
window.INST.push(
{
  id: 'pension', cat: 'con', ab: 'PF', cfa: 'Portfolio Management · FSA',
  name: ['صناديق التقاعد', 'Pension Funds'], term: 'Pension Funds|صناديق التقاعد',
  line: ['تجمع اشتراكات الموظفين طوال سنوات العمل وتستثمرها لتدفع معاشاتهم بعد التقاعد.',
         'It collects contributions through working life and invests them to pay pensions in retirement.'],
  model: ['نوعان أساسيان. في Defined Benefit (المنافع المحددة) يعد الصندوق بمعاش محدد، فيتحمل هو أو جهة العمل مخاطر الاستثمار وطول العمر. في Defined Contribution (الاشتراكات المحددة) تُحدد الاشتراكات فقط، والمعاش يعتمد على أداء الاستثمار، فيتحمل الموظف المخاطر. الصندوق لا يهدف للربح. هدفه أن تكفي أصوله لتغطية التزاماته. لأن التزاماته تمتد عقوداً، يستطيع الاستثمار في أصول طويلة الأجل وغير سائلة مثل البنية التحتية والملكية الخاصة.',
          'There are two main types. In defined benefit the fund promises a set pension, so it or the employer carries investment and longevity risk. In defined contribution only the contributions are set and the pension depends on investment results, so the employee carries the risk. The fund does not aim for profit; its goal is for assets to cover liabilities. Because liabilities stretch over decades, it can hold long-term illiquid assets such as infrastructure and private equity.'],
  rev: [['Investment Returns|عوائد الاستثمار', 60], ['Contributions (Employee + Employer)|الاشتراكات', 40]],
  A: [['Bonds & Sukuk|سندات وصكوك', 40], ['Listed Equities|أسهم مدرجة', 30], ['Alternatives (PE, Infrastructure, Real Estate)|استثمارات بديلة', 22], ['Cash|النقد', 8]],
  L: [['Present Value of Promised Pensions (DBO)|القيمة الحالية للمعاشات الموعودة', 92], ['Other|أخرى', 3], ['Surplus (or Deficit)|الفائض (أو العجز)', 5]],
  product: ['المعاش التقاعدي: دخل مدى الحياة بعد التقاعد.', 'The pension: income for life after retirement.'],
  div: {
    front: ['Asset Allocation|توزيع الأصول', 'Manager Selection|اختيار مديري الاستثمار', 'Direct Investments|الاستثمارات المباشرة'],
    mid: ['Actuarial Valuation|التقييم الاكتواري', 'Asset-Liability Management|إدارة الأصول والالتزامات', 'Risk|المخاطر'],
    back: ['Member Services & Benefits|خدمات المشتركين', 'Contributions Collection|تحصيل الاشتراكات', 'Operations|العمليات']
  },
  kpi: [
    ['Funding Ratio', 'Funding Ratio|نسبة التمويل', ['الأصول ÷ القيمة الحالية للالتزامات. أقل من 100% يعني عجزاً.', 'Assets ÷ present value of liabilities. Below 100% means a deficit.']],
    ['Discount Rate', 'Discount Rate|معدل الخصم', ['انخفاضه يرفع قيمة الالتزامات بشدة.', 'A lower rate sharply raises the value of liabilities.']],
    ['Dependency', 'Dependency Ratio|نسبة الإعالة', ['عدد المتقاعدين مقابل المشتركين العاملين.', 'Retirees relative to active contributors.']],
    ['Return', 'Investment Return vs Target|العائد مقابل المستهدف', ['العائد الفعلي مقارنة بالعائد الاكتواري المطلوب.', 'Actual return against the actuarially required return.']]
  ],
  risk: { credit: 1, market: 3, liq: 1, rate: 3, ops: 1, uw: 3, reg: 2 },
  killer: ['Longevity Risk (مخاطر طول العمر) مع انخفاض الفائدة: المتقاعدون يعيشون أطول والالتزامات تكبر أسرع من الأصول.',
           'Longevity risk combined with low rates: retirees live longer and liabilities grow faster than assets.'],
  reg: ['IAS 19 لمحاسبة منافع الموظفين عند الشركات. في السعودية: المؤسسة العامة للتأمينات الاجتماعية GOSI (اندمجت معها المؤسسة العامة للتقاعد عام 2021)، وتدير استثماراتها شركة حصانة.',
        'IAS 19 for employee benefits in company accounts. In Saudi Arabia: GOSI (merged with the Public Pension Agency in 2021), with investments run by Hassana.'],
  fs: [
    ['الالتزام تقدير اكتواري يعتمد على معدل الخصم ونمو الرواتب ومتوسط العمر.', 'The liability is an actuarial estimate driven by discount rate, salary growth and life expectancy.'],
    ['عند الشركات الراعية يظهر العجز كالتزام في ميزانيتها، ويعامله المحللون كدين.', 'For sponsoring companies a deficit appears as a liability, and analysts treat it as debt.'],
    ['في السعودية يظهر End-of-Service Benefits (مكافأة نهاية الخدمة) كالتزام في ميزانية الشركات.', 'In Saudi Arabia, end-of-service benefits appear as a liability on company balance sheets.']
  ],
  val: ['لا يُقيَّم كشركة. يُقاس بنسبة التمويل واستدامته.', 'Not valued as a company. It is judged by its funding ratio and sustainability.'],
  ladder: ['Investment Analyst|محلل استثمار', 'Senior Analyst|محلل أول', 'Portfolio Manager|مدير محفظة', 'Head of Asset Class|رئيس فئة أصول', 'CIO|رئيس الاستثمار'],
  certs: 'CFA · CAIA · Actuarial (SOA / IFoA)',
  ex: { g: 'GPIF (Japan) · CPP Investments · CalPERS · ABP · NPS (Korea)', s: ['التأمينات الاجتماعية GOSI · شركة حصانة الاستثمارية', 'GOSI · Hassana Investment Company'] },
  crisis: { t: ['أزمة LDI في بريطانيا — سبتمبر 2022', 'UK LDI crisis — September 2022'],
    d: ['استخدمت صناديق التقاعد البريطانية استراتيجية Liability-Driven Investment برافعة لمطابقة التزاماتها. بعد إعلان ميزانية حكومية مفاجئة قفزت عوائد السندات الحكومية في أيام، فجاءت طلبات هامش ضخمة واضطرت الصناديق لبيع السندات، فهبطت الأسعار أكثر. أعلن بنك إنجلترا برنامج شراء طارئاً يصل إلى 65 مليار جنيه لإيقاف الدوامة. الدرس: حتى التحوط يحمل مخاطر سيولة إذا كان بالرافعة.',
        'UK pension funds used leveraged liability-driven investment to match their liabilities. After a surprise government budget, gilt yields jumped within days, triggering huge margin calls and forced gilt sales that pushed prices lower still. The Bank of England announced emergency purchases of up to £65 billion to stop the spiral. The lesson: even a hedge carries liquidity risk when it is leveraged.'] },
  quiz: [
    { q: ['في نظام Defined Contribution، من يتحمل مخاطر الاستثمار؟', 'In a defined contribution plan, who bears investment risk?'],
      o: [['جهة العمل', 'The employer'], ['الموظف', 'The employee'], ['الحكومة', 'The government'], ['البنك المركزي', 'The central bank']], a: 1,
      w: ['الاشتراك محدد والمعاش غير مضمون، فالنتيجة على الموظف.', 'The contribution is fixed and the pension is not guaranteed, so the outcome falls on the employee.'] },
    { q: ['إذا انخفض معدل الخصم، التزامات الصندوق:', 'If the discount rate falls, the fund’s liabilities:'],
      o: [['ترتفع', 'Rise'], ['تنخفض', 'Fall'], ['لا تتغير', 'Stay the same'], ['تصبح صفراً', 'Go to zero']], a: 0,
      w: ['القيمة الحالية لمدفوعات مستقبلية ترتفع عندما ينخفض معدل الخصم.', 'The present value of future payments rises when the discount rate falls.'] }
  ]
},
{
  id: 'swf', cat: 'pub', ab: 'SWF', cfa: 'Portfolio Management · Economics',
  name: ['صناديق الثروة السيادية', 'Sovereign Wealth Funds'], term: 'Sovereign Wealth Funds|صناديق الثروة السيادية',
  line: ['صندوق استثماري تملكه الدولة، يحوّل فوائض النفط أو الاحتياطيات إلى ثروة للأجيال وأداة لتنويع الاقتصاد.',
         'A state-owned investment fund that turns oil surpluses or reserves into wealth for future generations and a tool to diversify the economy.'],
  model: ['مصدر المال فوائض السلع (النفط والغاز) أو احتياطيات العملة الأجنبية أو أصول حكومية محوّلة. الأنواع: Stabilization (استقرار) لحماية الميزانية من تقلب الأسعار، Savings (ادخار) للأجيال، و Development (تنمية) لبناء قطاعات محلية. صندوق الاستثمارات العامة PIF يجمع الادخار والتنمية: يملك حصصاً في أرامكو والبنك الأهلي وSTC، ويؤسس شركات جديدة ضمن رؤية 2030، ويستثمر عالمياً. لا يوجد مودعون ولا التزامات تقاعدية محددة، وهذا يمنحه أفقاً زمنياً طويلاً جداً.',
          'Funding comes from commodity surpluses (oil and gas), foreign reserves or transferred state assets. Types: stabilisation funds that shield the budget from price swings, savings funds for future generations, and development funds that build domestic sectors. The Public Investment Fund combines savings and development: it holds stakes in Aramco, SNB and stc, creates new companies under Vision 2030, and invests abroad. With no depositors and no fixed pension liabilities, it has a very long horizon.'],
  rev: [['Dividends from Holdings|توزيعات أرباح الشركات المملوكة', 45], ['Capital Gains|أرباح رأسمالية', 35], ['Income from Operating Subsidiaries|إيرادات الشركات التابعة', 20]],
  A: [['Domestic Holdings & Giga-projects|استثمارات محلية ومشاريع كبرى', 76], ['International Investments|استثمارات دولية', 20], ['Treasury & Liquidity|الخزينة والسيولة', 4]],
  L: [['Borrowings (Bonds, Sukuk, Loans)|قروض وسندات وصكوك', 14], ['Other Liabilities|التزامات أخرى', 6], ['Government Equity|حقوق الدولة', 80]],
  product: ['لا يبيع منتجاً. ناتجه عوائد للدولة وشركات ووظائف وقطاعات جديدة.', 'It sells no product. Its output is returns for the state, plus new companies, jobs and sectors.'],
  div: {
    front: ['Local Holdings / MENA Investments|الاستثمارات المحلية والإقليمية', 'International Investments|الاستثمارات الدولية', 'Giga-projects & Real Estate|المشاريع الكبرى والعقار', 'Global Capital Finance (Treasury)|التمويل والخزينة'],
    mid: ['Risk|المخاطر', 'Strategy & Economics|الاستراتيجية والاقتصاد', 'Legal & Compliance|القانونية والالتزام'],
    back: ['Finance|المالية', 'Portfolio Operations|عمليات المحفظة', 'Shared Services|الخدمات المشتركة']
  },
  kpi: [
    ['AUM', 'Assets Under Management|الأصول المدارة', ['PIF: نحو 3.4 تريليون ريال (حوالي 900 مليار دولار) نهاية 2025.', 'PIF: about SAR 3.4 trillion (roughly $900 billion) at end-2025.']],
    ['TSR', 'Total Shareholder Return|إجمالي عائد المساهم', ['PIF أعلن 5.8% سنوياً منذ 2017.', 'PIF reports 5.8% a year since 2017.']],
    ['Local %', 'Domestic Allocation|نسبة الاستثمار المحلي', ['PIF: 76% محلي، 20% دولي، 4% خزينة (2025).', 'PIF: 76% domestic, 20% international, 4% treasury (2025).']],
    ['Rating', 'Credit Rating|التصنيف الائتماني', ['يحدد تكلفة اقتراضه من الأسواق الدولية.', 'It sets the cost of borrowing in international markets.']]
  ],
  risk: { credit: 1, market: 3, liq: 2, rate: 2, ops: 2, uw: 0, reg: 1 },
  killer: ['ضعف الحوكمة والتدخل السياسي، وتركز الاستثمارات في الاقتصاد نفسه الذي يُفترض أن تنوّعه.',
           'Weak governance and political interference, and concentration in the very economy it is meant to diversify.'],
  reg: ['Santiago Principles: 24 مبدأ طوعياً للشفافية والحوكمة. والاستثمارات الخارجية تخضع لمراجعة مثل CFIUS في أمريكا.',
        'The Santiago Principles: 24 voluntary principles on transparency and governance. Foreign investments face reviews such as CFIUS in the US.'],
  fs: [
    ['يوجد رقمان مختلفان: الأصول المدارة AUM، وإجمالي الأصول في القوائم الموحدة التي تضم ميزانيات الشركات التابعة كاملة.', 'There are two different numbers: AUM, and total assets in consolidated accounts, which include subsidiaries’ full balance sheets.'],
    ['PIF: إجمالي الأصول الموحدة نحو 4.5 تريليون ريال في 2025، وهو غير رقم الأصول المدارة.', 'PIF: consolidated total assets of about SAR 4.5 trillion in 2025, distinct from AUM.'],
    ['الأصول غير المدرجة تُقيَّم بالتقدير، فالعائد المعلن يعتمد على منهجية التقييم.', 'Unlisted assets are valued by estimate, so reported returns depend on valuation method.']
  ],
  val: ['لا يُقيَّم. يُقارن عائده بمؤشر مرجعي وبأهدافه الوطنية.', 'Not valued. Its return is compared with a benchmark and its national objectives.'],
  ladder: ['Graduate Development Programme|برنامج تطوير الخريجين', 'Analyst|محلل', 'Associate|مشارك', 'Senior Associate / VP|مشارك أول / نائب رئيس', 'Director|مدير', 'Head of Division|رئيس قطاع'],
  certs: 'CFA · CAIA · MBA',
  ex: { g: 'NBIM (Norway) · ADIA · KIA · GIC · Temasek · CIC · QIA', s: ['صندوق الاستثمارات العامة PIF · سنابل للاستثمار · صندوق التنمية الوطني', 'Public Investment Fund (PIF) · Sanabil Investments · National Development Fund'] },
  crisis: { t: ['1MDB، ماليزيا — 2015', '1MDB, Malaysia — 2015'],
    d: ['صندوق تنمية حكومي ماليزي جمع مليارات الدولارات بسندات رتبها Goldman Sachs. قدّرت وزارة العدل الأمريكية أن نحو 4.5 مليار دولار اختُلست وأُنفقت على عقارات ويخوت ولوحات. أُدين رئيس الوزراء السابق، ودفع Goldman تسويات بمليارات الدولارات. الدرس: مال عام كبير دون مجلس مستقل وإفصاح شفاف يدعو للفساد.',
        'A Malaysian state development fund raised billions through bonds arranged by Goldman Sachs. The US Department of Justice estimated about $4.5 billion was misappropriated and spent on property, yachts and art. The former prime minister was convicted and Goldman paid billions in settlements. The lesson: large public money without an independent board and transparent disclosure invites corruption.'] },
  quiz: [
    { q: ['ما الذي يميز SWF عن صندوق التقاعد؟', 'What separates a sovereign wealth fund from a pension fund?'],
      o: [['لا يستثمر في الأسهم', 'It does not buy equities'], ['ليس عليه التزامات محددة لأفراد', 'It has no defined liabilities to individuals'], ['يملكه القطاع الخاص', 'It is privately owned'], ['يقبل الودائع', 'It takes deposits']], a: 1,
      w: ['صندوق التقاعد يدين بمعاشات محددة، والصندوق السيادي يدير ثروة الدولة دون التزام مقابل لأفراد.', 'A pension fund owes defined pensions; a sovereign fund manages state wealth with no matching liability to individuals.'] },
    { q: ['كم نسبة الاستثمارات المحلية من أصول PIF المدارة في 2025؟', 'What share of PIF’s AUM was domestic in 2025?'],
      o: [['20%', '20%'], ['50%', '50%'], ['76%', '76%'], ['96%', '96%']], a: 2,
      w: ['76% محلي، 20% دولي، 4% خزينة بحسب التقرير السنوي 2025.', '76% domestic, 20% international, 4% treasury, per the 2025 annual report.'] }
  ]
},
{
  id: 'broker', cat: 'mkt', ab: 'BD', cfa: 'Equity · Ethics',
  name: ['الوساطة وصناع السوق', 'Brokers & Dealers'], term: 'Brokers & Dealers|الوسطاء والمتعاملون',
  line: ['الوسيط ينفذ أوامر العملاء مقابل عمولة، والمتعامل يشتري ويبيع من حسابه ويربح الفرق بين السعرين.',
         'A broker executes client orders for a commission; a dealer trades from its own account and earns the spread.'],
  model: ['Broker (الوسيط) وكيل لا يحمل مخاطرة السعر. دخله عمولات، وفوائد على Margin Lending (التمويل بالهامش)، وعائد على أرصدة العملاء النقدية. Dealer أو Market Maker (صانع السوق) يعرض سعر شراء Bid وسعر بيع Ask باستمرار ويربح Bid-Ask Spread ويحمل مخزوناً من الأوراق. Prime Brokerage (الوساطة الرئيسية) تخدم صناديق التحوط بالتمويل وإقراض الأسهم والحفظ. المنافسة أنزلت العمولات إلى الصفر في أمريكا، فانتقل الدخل إلى Payment for Order Flow والفوائد.',
          'A broker is an agent that carries no price risk. It earns commissions, interest on margin lending and a return on client cash. A dealer or market maker quotes a bid and an ask continuously, earns the bid-ask spread and carries inventory. Prime brokerage serves hedge funds with financing, stock lending and custody. Competition drove US commissions to zero, shifting income to payment for order flow and interest.'],
  rev: [['Commissions|العمولات', 35], ['Net Interest (Margin, Client Cash)|صافي الفوائد', 35], ['Trading / Market-making Gains|أرباح صناعة السوق', 20], ['Other Fees|رسوم أخرى', 10]],
  A: [['Client Cash (Segregated)|نقد العملاء (مفصول)', 35], ['Margin Loans to Clients|قروض الهامش للعملاء', 30], ['Securities Inventory|مخزون الأوراق المالية', 20], ['Receivables from Clearing Houses|ذمم من غرف المقاصة', 15]],
  L: [['Payables to Clients|مستحقات للعملاء', 60], ['Short-term Borrowings|قروض قصيرة الأجل', 20], ['Other|أخرى', 8], ['Equity|حقوق الملكية', 12]],
  product: ['الوصول للسوق: فتح حساب، تنفيذ أوامر، تمويل بالهامش، وحفظ الأوراق.', 'Market access: account opening, order execution, margin finance and custody.'],
  div: {
    front: ['Retail Brokerage|وساطة الأفراد', 'Institutional Sales|المبيعات المؤسسية', 'Market Making|صناعة السوق', 'Prime Brokerage|الوساطة الرئيسية'],
    mid: ['Margin & Credit Risk|مخاطر الهامش والائتمان', 'Compliance & Surveillance|الالتزام والمراقبة', 'Best Execution|أفضل تنفيذ'],
    back: ['Clearing & Settlement|المقاصة والتسوية', 'Client Onboarding (KYC)|فتح الحسابات', 'IT / Trading Platforms|منصات التداول']
  },
  kpi: [
    ['DARTs', 'Daily Average Revenue Trades|متوسط الصفقات اليومية', ['نشاط العملاء اليومي.', 'Daily client activity.']],
    ['Client Assets', 'Client Assets|أصول العملاء', ['حجم الأصول في حسابات العملاء.', 'Assets held in client accounts.']],
    ['Market Share', 'Share of Traded Value|الحصة من قيمة التداول', ['حصة الوسيط من تداولات السوق.', 'The broker’s share of market turnover.']],
    ['Net Capital', 'Net Capital / Capital Adequacy|كفاية رأس المال', ['رأس المال السائل فوق الحد التنظيمي.', 'Liquid capital above the regulatory minimum.']]
  ],
  risk: { credit: 2, market: 2, liq: 3, rate: 2, ops: 3, uw: 0, reg: 3 },
  killer: ['خلط أموال العملاء بأموال الشركة، أو عميل واحد كبير بالهامش لا يستطيع السداد.',
           'Mixing client money with the firm’s own, or one large margin client who cannot pay.'],
  reg: ['فصل أموال العملاء إلزامي. MiFID II في أوروبا و SEC و FINRA في أمريكا. في السعودية: CMA ترخّص نشاط التعامل والحفظ، ويشترط اختبار CME-1 للعاملين.',
        'Client money segregation is mandatory. MiFID II in Europe, the SEC and FINRA in the US. In Saudi Arabia the CMA licenses dealing and custody, and staff must pass CME-1.'],
  fs: [
    ['جزء كبير من الميزانية أموال عملاء تظهر كأصل والتزام معاً.', 'Much of the balance sheet is client money, shown as both asset and liability.'],
    ['الإيراد يرتفع بقوة مع نشاط السوق وأسعار الفائدة.', 'Revenue swings strongly with market activity and interest rates.']
  ],
  val: ['P/E بالأساس، مع الانتباه إلى حساسية الأرباح لأحجام التداول والفائدة.', 'Mainly P/E, with attention to earnings sensitivity to volumes and rates.'],
  ladder: ['Broker / Sales Trader|وسيط', 'Senior Broker|وسيط أول', 'Desk Head|رئيس مكتب', 'Head of Brokerage|رئيس الوساطة', 'CEO|الرئيس التنفيذي'],
  certs: 'CME-1 (إلزامي في السعودية) · CFA · CISI',
  ex: { g: 'Charles Schwab · Interactive Brokers · Citadel Securities · Virtu', s: ['الراجحي المالية · الأهلي المالية · دراية المالية · الجزيرة كابيتال · الإنماء للاستثمار', 'Al Rajhi Capital · SNB Capital · Derayah Financial · AlJazira Capital · Alinma Investment'] },
  crisis: { t: ['MF Global — أكتوبر 2011', 'MF Global — October 2011'],
    d: ['راهنت شركة الوساطة MF Global بنحو 6.3 مليار دولار على سندات حكومات أوروبية متعثرة. لما ساءت الأزمة جاءت طلبات هامش واستخدمت الشركة أموال العملاء المفصولة لسد العجز، فظهر نقص بنحو 1.6 مليار دولار في حساباتهم. أفلست في 31 أكتوبر 2011. الدرس: فصل أموال العملاء قاعدة لا تُمَس.',
        'The broker MF Global bet about $6.3 billion on distressed European sovereign bonds. As the crisis deepened, margin calls came and the firm dipped into segregated client funds, leaving a shortfall of roughly $1.6 billion. It went bankrupt on 31 October 2011. The lesson: client money segregation is not to be touched.'] },
  quiz: [
    { q: ['من يحمل مخاطرة السعر؟', 'Who carries price risk?'],
      o: [['Broker', 'The broker'], ['Dealer', 'The dealer'], ['كلاهما بالتساوي', 'Both equally'], ['لا أحد', 'Neither']], a: 1,
      w: ['المتعامل يشتري ويبيع من حسابه ويحمل مخزوناً، والوسيط ينفذ لحساب العميل فقط.', 'A dealer trades for its own account and holds inventory; a broker only executes for the client.'] },
    { q: ['Bid = 99.80 و Ask = 100.00. ما Spread؟', 'Bid = 99.80, ask = 100.00. What is the spread?'],
      o: [['0.02', '0.02'], ['0.20', '0.20'], ['2.00', '2.00'], ['199.80', '199.80']], a: 1,
      w: ['Ask − Bid = 100.00 − 99.80 = 0.20.', 'Ask − bid = 100.00 − 99.80 = 0.20.'] }
  ]
},
{
  id: 'exchange', cat: 'mkt', ab: 'EX', cfa: 'Equity · Derivatives',
  name: ['البورصات وغرف المقاصة والحفظ', 'Exchanges, Clearing & Custody'], term: 'Exchanges, CCPs & Custodians|البورصات وغرف المقاصة وأمناء الحفظ',
  line: ['البنية التحتية للسوق: مكان يلتقي فيه البائع والمشتري، وجهة تضمن إتمام الصفقة، وجهة تحفظ الأوراق.',
         'Market plumbing: a venue where buyers and sellers meet, a body that guarantees the trade, and one that holds the securities.'],
  model: ['Exchange (البورصة) تربح من رسوم التداول والإدراج وبيع Market Data (بيانات السوق). Central Counterparty أو CCP (غرفة المقاصة المركزية) تدخل بين الطرفين فتصبح المشتري لكل بائع والبائع لكل مشترٍ، وتطلب Margin (هامشاً) وتحتفظ بـ Default Fund (صندوق التعثر). CSD (مركز الإيداع) يسجل الملكية ويسوي الصفقات. Custodian (أمين الحفظ) يحفظ أصول المستثمرين المؤسسيين. هذه أعمال احتكارية تقريباً، هوامشها عالية ودخلها متكرر. مجموعة تداول السعودية تضم: تداول السعودية (البورصة)، مقاصة (CCP)، إيداع (CSD)، وامض (التقنية).',
          'An exchange earns trading and listing fees and sells market data. A central counterparty steps between the two sides, becoming buyer to every seller and seller to every buyer; it collects margin and holds a default fund. A central securities depository records ownership and settles trades. A custodian safekeeps institutional investors’ assets. These are near-monopoly businesses with high margins and recurring income. Saudi Tadawul Group comprises the Saudi Exchange, Muqassa (CCP), Edaa (CSD) and Wamid (technology).'],
  rev: [['Trading & Clearing Fees|رسوم التداول والمقاصة', 45], ['Post-trade (Settlement, Custody)|خدمات ما بعد التداول', 25], ['Market Data & Technology|البيانات والتقنية', 20], ['Listing Fees|رسوم الإدراج', 10]],
  A: [['Clearing Members’ Margin (Cash & Collateral)|هوامش الأعضاء', 60], ['Investments & Cash|استثمارات ونقد', 22], ['Technology & Intangibles|التقنية والأصول غير الملموسة', 14], ['Other|أخرى', 4]],
  L: [['Margin Owed to Clearing Members|هوامش مستحقة للأعضاء', 60], ['Other Liabilities|التزامات أخرى', 10], ['Equity (incl. “Skin in the Game”)|حقوق الملكية', 30]],
  product: ['سوق منظم يثق به الجميع: تسعير شفاف، ضمان تنفيذ، وتسجيل ملكية.', 'An organised market everyone trusts: transparent pricing, guaranteed execution and ownership records.'],
  div: {
    front: ['Listings|الإدراج', 'Cash & Derivatives Markets|أسواق الأسهم والمشتقات', 'Market Data & Indices|البيانات والمؤشرات'],
    mid: ['Market Surveillance|مراقبة السوق', 'CCP Risk (Margin Models)|مخاطر المقاصة', 'Membership|العضوية'],
    back: ['Settlement & Depository|التسوية والإيداع', 'Technology & Cyber|التقنية والأمن السيبراني', 'Operations|العمليات']
  },
  kpi: [
    ['ADTV', 'Average Daily Traded Value|متوسط قيمة التداول اليومي', ['المحرك الرئيسي للإيراد.', 'The main revenue driver.']],
    ['Market Cap', 'Market Capitalisation|القيمة السوقية', ['السوق السعودي من أكبر عشر أسواق في العالم بفضل إدراج أرامكو.', 'The Saudi market is among the world’s ten largest thanks to Aramco’s listing.']],
    ['Listings', 'Number of Listings / IPOs|عدد الإدراجات', ['نشاط الطروحات في السوق الرئيسية ونمو.', 'IPO activity on the main market and Nomu.']],
    ['Velocity', 'Turnover Velocity|معدل الدوران', ['قيمة التداول ÷ القيمة السوقية.', 'Traded value ÷ market capitalisation.']],
    ['Uptime', 'System Availability|جاهزية الأنظمة', ['أي توقف يضرب الثقة مباشرة.', 'Any outage hits trust directly.']]
  ],
  risk: { credit: 2, market: 1, liq: 2, rate: 1, ops: 3, uw: 0, reg: 2 },
  killer: ['عطل تقني أو هجوم سيبراني، وللـ CCP: تعثر عضو كبير بخسارة تتجاوز هامشه وصندوق التعثر.',
           'A technology failure or cyber attack, and for a CCP: a large member defaulting with losses beyond its margin and the default fund.'],
  reg: ['مبادئ PFMI من CPMI-IOSCO للبنى التحتية، و EMIR و Dodd-Frank التي فرضت مقاصة المشتقات مركزياً بعد 2008. في السعودية: CMA.',
        'The CPMI-IOSCO PFMI principles for market infrastructures, and EMIR and Dodd-Frank, which mandated central clearing of derivatives after 2008. In Saudi Arabia: the CMA.'],
  fs: [
    ['ميزانية CCP تبدو كبيرة بسبب هوامش الأعضاء، وهي ليست ملكها.', 'A CCP’s balance sheet looks large because of members’ margin, which it does not own.'],
    ['تكاليف ثابتة عالية، فكل ريال إضافي من التداول يتحول معظمه إلى ربح (Operating Leverage).', 'Fixed costs are high, so most of each extra riyal of trading falls to profit (operating leverage).']
  ],
  val: ['P/E و EV/EBITDA بمضاعفات مرتفعة لأن الدخل متكرر والمنافسة قليلة.', 'P/E and EV/EBITDA at high multiples because income is recurring and competition is limited.'],
  ladder: ['Analyst|محلل', 'Specialist|أخصائي', 'Manager|مدير', 'Director|مدير إدارة', 'Chief Officer|رئيس قطاع', 'CEO|الرئيس التنفيذي'],
  certs: 'CME-1 · CFA · CISI · CISA (IT audit)',
  ex: { g: 'CME Group · ICE (NYSE) · Nasdaq · LSEG · DTCC · Euroclear · BNY', s: ['مجموعة تداول السعودية: تداول السعودية · مقاصة · إيداع · وامض', 'Saudi Tadawul Group: Saudi Exchange · Muqassa · Edaa · Wamid'] },
  crisis: { t: ['نيكل بورصة لندن للمعادن LME — مارس 2022', 'LME Nickel — March 2022'],
    d: ['منتج صيني كبير كان يحمل مركز بيع ضخماً على النيكل. بعد غزو أوكرانيا تضاعف السعر في ساعات وتجاوز 100 ألف دولار للطن، وكانت طلبات الهامش ستفلس عدة أعضاء. علّقت LME التداول وألغت صفقات يوم كامل بمليارات الدولارات، فقاضتها صناديق التحوط. الدرس: البورصة تبيع الثقة في أن الصفقة المنفذة نهائية، وإلغاء الصفقات يكلفها سمعتها.',
        'A large Chinese producer held a huge short position in nickel. After the invasion of Ukraine the price doubled within hours to above $100,000 a tonne, and margin calls would have bankrupted several members. The LME suspended trading and cancelled a full day of trades worth billions of dollars, prompting lawsuits from hedge funds. The lesson: an exchange sells confidence that an executed trade is final, and cancelling trades costs it its reputation.'] },
  quiz: [
    { q: ['ما وظيفة CCP؟', 'What does a CCP do?'],
      o: [['تقديم النصيحة الاستثمارية', 'Gives investment advice'], ['تصبح الطرف المقابل لكل صفقة وتضمن تنفيذها', 'Becomes counterparty to every trade and guarantees it'], ['تصدر التصنيفات', 'Issues ratings'], ['تقرض الأفراد', 'Lends to individuals']], a: 1,
      w: ['غرفة المقاصة تزيل مخاطر الطرف المقابل بين المتداولين وتدير الخطر بالهامش وصندوق التعثر.', 'A clearing house removes counterparty risk between traders and manages the risk with margin and a default fund.'] },
    { q: ['أي شركة تمثل مركز الإيداع CSD في السعودية؟', 'Which company is the CSD in Saudi Arabia?'],
      o: [['مقاصة', 'Muqassa'], ['إيداع', 'Edaa'], ['وامض', 'Wamid'], ['سمة', 'SIMAH']], a: 1,
      w: ['إيداع تسجل الملكية وتسوي الصفقات. مقاصة هي غرفة المقاصة المركزية.', 'Edaa records ownership and settles trades. Muqassa is the central counterparty.'] }
  ]
},
{
  id: 'cra', cat: 'mkt', ab: 'CRA', cfa: 'Fixed Income',
  name: ['وكالات التصنيف الائتماني', 'Credit Rating Agencies'], term: 'Credit Rating Agencies|وكالات التصنيف الائتماني',
  line: ['تعطي رأياً مستقلاً في قدرة المُصدر على سداد ديونه، بحروف مثل AAA و BB.',
         'They give an independent opinion on an issuer’s ability to repay debt, in letters such as AAA and BB.'],
  model: ['ثلاث وكالات تسيطر على نحو 95% من السوق: S&P و Moody’s و Fitch. النموذج الغالب Issuer-Pays: الجهة المُصدرة للسند تدفع رسوم التصنيف. المستثمرون يحتاجون التصنيف لأن أنظمة كثيرة تمنع الصناديق والبنوك من شراء ما دون Investment Grade (الدرجة الاستثمارية)، وهي BBB− أو Baa3 فأعلى. ما دونها يسمى High Yield أو Junk. النشاط خفيف على رأس المال وهوامشه عالية، وأضيف له قطاع بيانات وتحليلات.',
          'Three agencies hold about 95% of the market: S&P, Moody’s and Fitch. The dominant model is issuer-pays: the bond issuer pays for the rating. Investors need ratings because many rules bar funds and banks from buying below investment grade, which is BBB− or Baa3 and above. Anything lower is high yield, or junk. The business is capital-light with high margins, and now includes data and analytics.'],
  rev: [['Ratings Fees (New Issues)|رسوم تصنيف الإصدارات الجديدة', 35], ['Surveillance Fees (Recurring)|رسوم المتابعة السنوية', 25], ['Data, Analytics & Indices|البيانات والتحليلات والمؤشرات', 40]],
  A: [['Goodwill & Intangibles|الشهرة والأصول غير الملموسة', 55], ['Cash & Investments|نقد واستثمارات', 20], ['Receivables|ذمم مدينة', 15], ['Other|أخرى', 10]],
  L: [['Debt|الديون', 35], ['Deferred Revenue|إيرادات مؤجلة', 15], ['Other|أخرى', 15], ['Equity|حقوق الملكية', 35]],
  product: ['التصنيف الائتماني: رأي وليس ضماناً. يشمل الدول والشركات والبنوك والصكوك والمنتجات المهيكلة.', 'The credit rating: an opinion, not a guarantee. It covers sovereigns, corporates, banks, sukuk and structured products.'],
  div: {
    front: ['Sovereign Ratings|تصنيف الدول', 'Corporate & FI Ratings|تصنيف الشركات والمؤسسات المالية', 'Structured Finance|التمويل المهيكل', 'Analytics & Data Sales|مبيعات البيانات'],
    mid: ['Rating Committees|لجان التصنيف', 'Methodology & Criteria|المنهجيات', 'Compliance (Analyst Independence)|الالتزام واستقلالية المحللين'],
    back: ['Operations|العمليات', 'Technology|التقنية']
  },
  kpi: [
    ['Issuance', 'Global Debt Issuance|حجم إصدارات الدين', ['كلما زادت الإصدارات زادت رسوم التصنيف.', 'More issuance means more rating fees.']],
    ['Default Study', 'Default & Transition Rates|معدلات التعثر والانتقال', ['تاريخياً: نسبة تعثر AAA قريبة من الصفر، و CCC عالية جداً.', 'Historically, AAA default rates are near zero and CCC very high.']],
    ['Margin', 'Operating Margin|هامش الربح التشغيلي', ['قطاع التصنيف يتجاوز 50% غالباً.', 'The ratings segment often exceeds 50%.']],
    ['Recurring %', 'Recurring Revenue Share|نسبة الإيراد المتكرر', ['المتابعة والبيانات تخفف تقلب الإصدارات.', 'Surveillance and data smooth the swings in issuance.']]
  ],
  risk: { credit: 0, market: 1, liq: 0, rate: 2, ops: 2, uw: 0, reg: 3 },
  killer: ['فقدان المصداقية. تضارب المصالح في نموذج Issuer-Pays قد يدفع نحو تصنيفات متساهلة.',
           'Loss of credibility. The conflict of interest in the issuer-pays model can push ratings to be lenient.'],
  reg: ['بعد 2008 شُدد الإشراف: SEC في أمريكا و ESMA في أوروبا. في السعودية: CMA ترخّص وكالات التصنيف، ومنها شركة تصنيف (سمة للتصنيف).',
        'Oversight tightened after 2008: the SEC in the US and ESMA in Europe. In Saudi Arabia the CMA licenses rating agencies, including Tassnief (SIMAH Rating).'],
  fs: [
    ['Deferred Revenue (إيرادات مؤجلة) ظاهرة لأن رسوم المتابعة تُدفع مقدماً.', 'Deferred revenue is prominent because surveillance fees are paid in advance.'],
    ['أكبر التكاليف رواتب المحللين، والتكاليف شبه ثابتة.', 'Analyst pay is the main cost, and costs are largely fixed.']
  ],
  val: ['P/E و EV/EBITDA بمضاعفات مرتفعة مثل شركات البيانات.', 'P/E and EV/EBITDA at high multiples, like data companies.'],
  ladder: ['Rating Analyst / Associate|محلل تصنيف', 'Senior Analyst|محلل أول', 'Director / Lead Analyst|مدير / محلل رئيسي', 'Senior Director|مدير أول', 'Managing Director / Sector Head|عضو منتدب / رئيس قطاع'],
  certs: 'CFA · FRM · Credit analysis',
  ex: { g: 'S&P Global · Moody’s · Fitch Ratings', s: ['تصنيف السعودية: S&P عند A+ · Moody’s عند Aa3 · Fitch عند A+ (2025) · وكالة محلية: شركة تصنيف', 'Saudi sovereign: S&P A+ · Moody’s Aa3 · Fitch A+ (2025) · Local agency: Tassnief'] },
  crisis: { t: ['تصنيفات الرهن العقاري — 2007 و 2008', 'Mortgage ratings — 2007 and 2008'],
    d: ['منحت الوكالات تصنيف AAA لآلاف السندات المبنية على رهون عقارية ضعيفة (Subprime) بعد تجميعها في CDOs. افترضت النماذج أن أسعار المنازل لن تهبط في كل أمريكا معاً. لما هبطت، خُفض تصنيف معظم هذه السندات إلى Junk خلال شهور وخسر المستثمرون مئات المليارات. دفعت S&P تسوية 1.375 مليار دولار عام 2015. الدرس: التصنيف رأي مبني على نموذج، والنموذج قد يكون خاطئاً.',
        'The agencies gave AAA ratings to thousands of bonds built on weak subprime mortgages once pooled into CDOs. The models assumed house prices would not fall across the whole US at once. When they did, most of these bonds were cut to junk within months and investors lost hundreds of billions. S&P paid a $1.375 billion settlement in 2015. The lesson: a rating is an opinion built on a model, and the model can be wrong.'] },
  quiz: [
    { q: ['أي تصنيف هو أدنى درجة استثمارية عند S&P؟', 'Which is the lowest investment-grade rating at S&P?'],
      o: [['A−', 'A−'], ['BBB−', 'BBB−'], ['BB+', 'BB+'], ['B', 'B']], a: 1,
      w: ['BBB− عند S&P و Fitch تقابل Baa3 عند Moody’s. ما دونها High Yield.', 'BBB− at S&P and Fitch matches Baa3 at Moody’s. Anything lower is high yield.'] },
    { q: ['ما مصدر تضارب المصالح في نموذج Issuer-Pays؟', 'Where is the conflict of interest in the issuer-pays model?'],
      o: [['المستثمر يدفع', 'The investor pays'], ['المُصدر الذي يُصنَّف هو من يدفع الرسوم', 'The issuer being rated pays the fee'], ['الحكومة تدفع', 'The government pays'], ['لا يوجد تضارب', 'There is none']], a: 1,
      w: ['الوكالة تتقاضى أجرها من الجهة التي تقيّمها، وقد تختار الجهة الوكالة الأكثر تساهلاً.', 'The agency is paid by the party it rates, which may pick the most lenient agency.'] }
  ]
},
{
  id: 'finco', cat: 'fin', ab: 'FC', cfa: 'Fixed Income · Alternative Investments',
  name: ['شركات التمويل والائتمان الخاص', 'Finance Companies & Private Credit'], term: 'Finance Companies & Private Credit|شركات التمويل والائتمان الخاص',
  line: ['تُقرض مثل البنك، لكنها لا تقبل الودائع، فتموّل نفسها من البنوك والأسواق.',
         'They lend like a bank but take no deposits, so they fund themselves from banks and markets.'],
  model: ['Finance Company (شركة التمويل) تتخصص في منتج: تمويل سيارات، Leasing (تأجير تمويلي)، تمويل استهلاكي، تمويل عقاري، أو تمويل منشآت صغيرة. لأنها بلا ودائع رخيصة، تكلفة تمويلها أعلى، فتستهدف عملاء أو منتجات بعائد أعلى ومخاطر أعلى. تموّل نفسها بتسهيلات بنكية وسندات و Securitization (التوريق)، أي بيع محفظة القروض كأوراق مالية. Private Credit (الائتمان الخاص) صناديق تجمع أموال المؤسسات وتقرض الشركات المتوسطة مباشرة، وقد نمت بسرعة بعد تشدد البنوك عقب 2008.',
          'A finance company specialises in one product: auto finance, leasing, consumer finance, mortgages or SME lending. Without cheap deposits its funding costs more, so it targets higher-yield, higher-risk customers or products. It funds itself with bank lines, bonds and securitisation, selling its loan book as securities. Private credit funds pool institutional money and lend directly to mid-sized companies, and grew quickly as banks pulled back after 2008.'],
  rev: [['Net Financing Income|صافي دخل التمويل', 80], ['Fees (Origination, Admin)|رسوم', 12], ['Insurance Commission & Other|عمولات تأمين وأخرى', 8]],
  A: [['Financing Receivables (Loans, Leases)|ذمم التمويل', 85], ['Cash|النقد', 7], ['Other|أخرى', 8]],
  L: [['Bank Borrowings|قروض بنكية', 45], ['Bonds, Sukuk & Securitisation|سندات وصكوك وتوريق', 25], ['Other|أخرى', 5], ['Equity|حقوق الملكية', 25]],
  product: ['تمويل متخصص سريع الموافقة: سيارة، معدات، بطاقة، أو قرض لشركة لا تخدمها البنوك.', 'Specialised finance with quick approval: a car, equipment, a card, or a loan for a company banks do not serve.'],
  div: {
    front: ['Sales & Dealer Network|المبيعات وشبكة الوكلاء', 'Underwriting / Credit|الائتمان', 'Treasury & Funding|الخزينة والتمويل'],
    mid: ['Risk & Scorecards|المخاطر ونماذج التقييم', 'Compliance|الالتزام'],
    back: ['Collections|التحصيل', 'Operations|العمليات', 'IT|التقنية']
  },
  kpi: [
    ['Yield', 'Portfolio Yield|عائد المحفظة', ['دخل التمويل ÷ متوسط المحفظة.', 'Financing income ÷ average portfolio.']],
    ['CoF', 'Cost of Funds|تكلفة التمويل', ['العنصر الحاسم لأنها بلا ودائع.', 'The decisive factor, since there are no deposits.']],
    ['NCO', 'Net Charge-off Rate|نسبة الديون المشطوبة', ['القروض المشطوبة بعد الاستردادات ÷ متوسط المحفظة.', 'Loans written off, net of recoveries, ÷ average portfolio.']],
    ['Leverage', 'Debt-to-Equity|الدين إلى حقوق الملكية', ['أقل من البنوك، غالباً 2–5 مرات.', 'Lower than banks, often 2–5x.']],
    ['DPD 30+', 'Delinquency (30+ Days Past Due)|التأخر أكثر من 30 يوماً', ['إنذار مبكر لجودة المحفظة.', 'An early warning on portfolio quality.']]
  ],
  risk: { credit: 3, market: 1, liq: 3, rate: 3, ops: 2, uw: 0, reg: 2 },
  killer: ['انغلاق مصادر التمويل. الشركة تحتاج إعادة تمويل ديونها باستمرار، وإذا توقف السوق توقفت.',
           'Funding markets shutting. The company must keep refinancing its debt, and if the market stops, so does it.'],
  reg: ['في السعودية: SAMA ترخّص شركات التمويل بموجب نظام مراقبة شركات التمويل، والشركة السعودية لإعادة التمويل العقاري SRC تشتري محافظ التمويل العقاري.',
        'In Saudi Arabia SAMA licenses finance companies under the Finance Companies Control Law, and the Saudi Real Estate Refinance Company (SRC) buys mortgage portfolios.'],
  fs: [
    ['تشبه قوائم البنك: دخل تمويل، تكلفة تمويل، ومخصصات ECL بحسب IFRS 9.', 'Statements resemble a bank’s: financing income, funding cost and IFRS 9 expected credit loss provisions.'],
    ['انظر جدول استحقاق الديون مقابل استحقاق المحفظة.', 'Look at the debt maturity schedule against the portfolio’s maturities.'],
    ['بيع المحافظ بالتوريق قد يُخرجها من الميزانية مع بقاء جزء من المخاطر.', 'Securitised portfolios may leave the balance sheet while some risk remains.']
  ],
  val: ['P/B و P/E مثل البنوك، مع خصم بسبب مخاطر التمويل.', 'P/B and P/E as for banks, at a discount for funding risk.'],
  ladder: ['Credit Officer|موظف ائتمان', 'Senior Credit Analyst|محلل ائتمان أول', 'Credit Manager|مدير ائتمان', 'Head of Business / Risk|رئيس الأعمال أو المخاطر', 'CEO|الرئيس التنفيذي'],
  certs: 'CFA · FRM · Credit certifications',
  ex: { g: 'Ally Financial · Synchrony · Ares · Blue Owl · Apollo (credit)', s: ['عبداللطيف جميل للتمويل · أملاك العالمية · الأمثل للتمويل · السعودية لإعادة التمويل العقاري SRC', 'Abdul Latif Jameel Finance · Amlak International · Al-Amthal Finance · Saudi Real Estate Refinance Company (SRC)'] },
  crisis: { t: ['CIT Group — نوفمبر 2009', 'CIT Group — November 2009'],
    d: ['كانت CIT من أكبر ممولي المنشآت الصغيرة والمتوسطة في أمريكا بأصول نحو 71 مليار دولار. اعتمدت على سوق السندات والأوراق التجارية للتمويل. لما تجمدت الأسواق في 2008 لم تستطع إعادة تمويل ديونها المستحقة، وأفلست في نوفمبر 2009 رغم أن معظم قروضها كانت تُسدد. الدرس: شركة بلا ودائع تفلس بسبب السيولة قبل أن تفلس بسبب خسائر القروض.',
        'CIT was one of the largest US lenders to small and mid-sized businesses, with about $71 billion of assets. It relied on bonds and commercial paper for funding. When markets froze in 2008 it could not refinance maturing debt and filed for bankruptcy in November 2009, even though most of its loans were performing. The lesson: a lender without deposits fails on liquidity before it fails on loan losses.'] },
  quiz: [
    { q: ['ما الفرق الأساسي بين شركة التمويل والبنك؟', 'What is the main difference between a finance company and a bank?'],
      o: [['لا تُقرض', 'It does not lend'], ['لا تقبل الودائع', 'It takes no deposits'], ['لا تخضع لأي تنظيم', 'It is unregulated'], ['لا تحقق أرباحاً', 'It makes no profit']], a: 1,
      w: ['غياب الودائع يرفع تكلفة التمويل ويجعل السيولة الخطر الأول.', 'Having no deposits raises funding cost and makes liquidity the first risk.'] },
    { q: ['ما هو Securitization؟', 'What is securitisation?'],
      o: [['تأمين القروض', 'Insuring loans'], ['تجميع قروض وبيعها للمستثمرين كأوراق مالية', 'Pooling loans and selling them to investors as securities'], ['رهن الأسهم', 'Pledging shares'], ['شطب الديون', 'Writing off debt']], a: 1,
      w: ['يحوّل قروضاً غير سائلة إلى أوراق قابلة للتداول ويوفر تمويلاً جديداً للمُقرض.', 'It turns illiquid loans into tradable securities and gives the lender fresh funding.'] }
  ]
},
{
  id: 'reit', cat: 'inv', ab: 'RE', cfa: 'Alternative Investments · Equity',
  name: ['صناديق الريت', 'REITs'], term: 'Real Estate Investment Trusts|صناديق الاستثمار العقاري المتداولة',
  line: ['صندوق يملك عقارات مؤجرة ويوزع معظم دخل الإيجار على حملة الوحدات، ويُتداول مثل السهم.',
         'A fund that owns leased property, pays most of the rental income to unitholders, and trades like a share.'],
  model: ['REIT يشتري عقارات مدرّة للدخل: مكاتب، مراكز تجارية، مستودعات، فنادق، مدارس. دخله الإيجار. النظام يلزمه بتوزيع معظم أرباحه: 90% على الأقل من صافي الأرباح سنوياً في السعودية، و 90% من الدخل الخاضع للضريبة في أمريكا. لذلك لا يحتفظ بأرباح للنمو، ويموّل مشترياته الجديدة بالدين أو بإصدار وحدات. في السعودية لا يتجاوز الاقتراض 50% من قيمة الأصول. أول صندوق ريت أُدرج في تداول عام 2016.',
          'A REIT buys income-producing property: offices, malls, warehouses, hotels, schools. Its income is rent. Rules require it to distribute most profit: at least 90% of net profit each year in Saudi Arabia, and 90% of taxable income in the US. It therefore keeps little for growth and funds new purchases with debt or new units. In Saudi Arabia borrowing may not exceed 50% of asset value. The first REIT listed on Tadawul in 2016.'],
  rev: [['Rental Income|دخل الإيجار', 92], ['Other Property Income|دخل عقاري آخر', 8]],
  A: [['Investment Properties|العقارات الاستثمارية', 90], ['Cash|النقد', 4], ['Rent Receivables|إيجارات مستحقة', 4], ['Other|أخرى', 2]],
  L: [['Bank Financing|تمويل بنكي', 35], ['Other Liabilities|التزامات أخرى', 5], ['Unitholders’ Equity (NAV)|حقوق حملة الوحدات', 60]],
  product: ['وحدة في الصندوق تعطي المستثمر دخلاً دورياً من العقار دون شراء عقار كامل.', 'A unit in the fund that gives the investor regular property income without buying a whole building.'],
  div: {
    front: ['Acquisitions|الاستحواذات', 'Asset Management|إدارة الأصول العقارية', 'Leasing|التأجير'],
    mid: ['Valuation (Independent Valuers)|التقييم', 'Fund Management & Compliance|إدارة الصندوق والالتزام'],
    back: ['Property Management|إدارة الأملاك', 'Fund Accounting|محاسبة الصندوق']
  },
  kpi: [
    ['FFO', 'Funds From Operations|الأموال من العمليات', ['صافي الربح + الإهلاك − أرباح بيع العقارات. أدق من صافي الربح.', 'Net income + depreciation − gains on property sales. More telling than net income.']],
    ['NAV', 'Net Asset Value per Unit|صافي قيمة الأصول للوحدة', ['قيمة العقارات العادلة − الديون ÷ عدد الوحدات.', 'Fair value of properties − debt ÷ number of units.']],
    ['Occupancy', 'Occupancy Rate|نسبة الإشغال', ['المساحة المؤجرة ÷ المساحة القابلة للتأجير.', 'Leased area ÷ lettable area.']],
    ['WALE', 'Weighted Average Lease Expiry|متوسط المدة المتبقية للعقود', ['كلما طالت كان الدخل أكثر استقراراً.', 'The longer it is, the more stable the income.']],
    ['LTV', 'Loan-to-Value|القرض إلى القيمة', ['الدين ÷ قيمة العقارات. الحد في السعودية 50%.', 'Debt ÷ property value. The Saudi cap is 50%.']],
    ['Cap Rate', 'Capitalisation Rate|معدل الرسملة', ['صافي الدخل التشغيلي NOI ÷ قيمة العقار.', 'Net operating income ÷ property value.']]
  ],
  risk: { credit: 2, market: 3, liq: 2, rate: 3, ops: 1, uw: 0, reg: 2 },
  killer: ['ارتفاع الفائدة يضرب من ثلاث جهات: يرفع تكلفة الدين، يخفض تقييم العقارات، ويجعل توزيعات الصندوق أقل جاذبية من الودائع والصكوك.',
           'Higher rates hit three ways: debt costs more, property values fall, and the payout looks less attractive next to deposits and sukuk.'],
  reg: ['في السعودية: تعليمات صناديق الاستثمار العقارية المتداولة من CMA.', 'In Saudi Arabia: the CMA’s Real Estate Investment Traded Funds Instructions.'],
  fs: [
    ['Depreciation (الإهلاك) يخفض صافي الربح لكنه غير نقدي، لذلك نستخدم FFO.', 'Depreciation lowers net income but is non-cash, which is why FFO is used.'],
    ['تقييم العقارات يحدد NAV، ويتغير مع معدل الرسملة.', 'Property valuations determine NAV and move with the cap rate.'],
    ['التوزيعات قد تتجاوز صافي الربح المحاسبي لأنها تعتمد على النقد.', 'Distributions can exceed accounting profit because they are based on cash.']
  ],
  val: ['P/FFO، والسعر مقابل NAV (خصم أو علاوة)، وعائد التوزيعات مقارنة بعائد الصكوك الحكومية.',
        'P/FFO, price against NAV (discount or premium), and dividend yield compared with government sukuk yields.'],
  ladder: ['Real Estate Analyst|محلل عقاري', 'Associate|مشارك', 'Asset Manager|مدير أصول', 'Fund Manager|مدير صندوق', 'Head of Real Estate|رئيس العقار'],
  certs: 'CFA · CAIA · RICS · TAQEEM',
  ex: { g: 'Prologis · American Tower · Equinix · Simon Property', s: ['الرياض ريت · جدوى ريت السعودية · الراجحي ريت · سدكو كابيتال ريت', 'Riyad REIT · Jadwa REIT Saudi · Al Rajhi REIT · SEDCO Capital REIT'] },
  crisis: { t: ['General Growth Properties — أبريل 2009', 'General Growth Properties — April 2009'],
    d: ['ثاني أكبر مالك مراكز تجارية في أمريكا. اشترى كثيراً بالدين حتى بلغت ديونه نحو 27 مليار دولار، ومعظمها قصير الأجل يحتاج إعادة تمويل. في 2008 أُغلق سوق تمويل العقار التجاري فلم يستطع التجديد وأفلس، مع أن مراكزه كانت مؤجرة وتدر دخلاً. خرج من الإفلاس لاحقاً وربح من اشترى سهمه في القاع. الدرس: عقار جيد مع هيكل تمويل سيئ ينتج شركة مفلسة.',
        'The second-largest US mall owner. It bought heavily with debt until borrowings reached about $27 billion, much of it short-term and needing refinancing. In 2008 the commercial property finance market shut, it could not roll its debt and filed for bankruptcy, though its malls were let and producing income. It later emerged, and those who bought the shares at the bottom profited. The lesson: good property with bad financing makes a bankrupt company.'] },
  quiz: [
    { q: ['صافي ربح ريت 50 مليوناً، الإهلاك 30 مليوناً، ولا أرباح بيع. كم FFO؟', 'A REIT has net income of 50m, depreciation of 30m and no sale gains. What is FFO?'],
      o: [['20 مليوناً', '20 million'], ['50 مليوناً', '50 million'], ['80 مليوناً', '80 million'], ['30 مليوناً', '30 million']], a: 2,
      w: ['FFO = صافي الربح + الإهلاك = 50 + 30 = 80.', 'FFO = net income + depreciation = 50 + 30 = 80.'] },
    { q: ['كم الحد الأدنى للتوزيع السنوي لصناديق الريت في السعودية؟', 'What is the minimum annual distribution for Saudi REITs?'],
      o: [['50% من صافي الأرباح', '50% of net profit'], ['75%', '75%'], ['90%', '90%'], ['100%', '100%']], a: 2,
      w: ['90% على الأقل من صافي أرباح الصندوق سنوياً.', 'At least 90% of the fund’s net profit each year.'] }
  ]
},
{
  id: 'fintech', cat: 'fin', ab: 'FT', cfa: 'Portfolio Management (FinTech)',
  name: ['التقنية المالية', 'FinTech'], term: 'FinTech|التقنية المالية',
  line: ['شركات تقنية تقدم خدمة مالية واحدة بتجربة أسهل وأرخص من البنك، ثم تتوسع.',
         'Technology companies that offer one financial service more easily and cheaply than a bank, then expand.'],
  model: ['تبدأ من نقطة ألم واحدة: دفع، تحويل، تقسيط، استثمار. القطاعات: Payments (المدفوعات)، Neobanks (بنوك رقمية بلا فروع)، BNPL (اشترِ الآن وادفع لاحقاً)، Robo-advisors (مستشار آلي)، Lending (إقراض)، Open Banking (المصرفية المفتوحة)، و InsurTech. النموذج الاقتصادي: تكلفة اكتساب العميل CAC أقل من قيمته على مدى حياته LTV. كثير منها يخسر في البداية لشراء النمو ويعتمد على جولات رأس المال الجريء. BNPL مثلاً يربح من رسوم يدفعها التاجر، ويتحمل هو مخاطرة عدم سداد العميل.',
          'They start from one pain point: paying, transferring, instalments, investing. Segments: payments, neobanks, buy now pay later, robo-advisors, lending, open banking and insurtech. The economics: customer acquisition cost must sit below lifetime value. Many lose money early to buy growth and depend on venture rounds. BNPL, for example, earns a fee from the merchant and carries the risk that the shopper does not pay.'],
  rev: [['Merchant Fees / Interchange|رسوم التجار والتبادل', 55], ['Interest & Lending Income|دخل التمويل', 20], ['Subscriptions & SaaS|اشتراكات', 15], ['FX & Other|صرف وأخرى', 10]],
  A: [['Customer Funds (Safeguarded)|أموال العملاء (محمية)', 45], ['Receivables (e.g., BNPL)|ذمم مدينة', 25], ['Cash|النقد', 18], ['Capitalised Technology|تقنية مرسملة', 12]],
  L: [['Customer Balances|أرصدة العملاء', 45], ['Funding Facilities|تسهيلات تمويلية', 20], ['Other|أخرى', 7], ['Equity (VC-funded)|حقوق الملكية', 28]],
  product: ['تطبيق. القيمة في التجربة والسرعة والبيانات.', 'An app. The value is in the experience, speed and data.'],
  div: {
    front: ['Product|المنتج', 'Growth & Marketing|النمو والتسويق', 'Partnerships / Merchant Sales|الشراكات ومبيعات التجار'],
    mid: ['Risk & Fraud|المخاطر والاحتيال', 'Compliance (AML, Licensing)|الالتزام والتراخيص', 'Data Science|علم البيانات'],
    back: ['Engineering|الهندسة', 'Customer Support|خدمة العملاء', 'Finance & Strategy (FP&A)|المالية والاستراتيجية']
  },
  kpi: [
    ['TPV / GMV', 'Total Payment Volume|إجمالي حجم المدفوعات', ['قيمة العمليات التي تمر عبر المنصة.', 'The value of transactions through the platform.']],
    ['Take Rate', 'Take Rate|نسبة الاقتطاع', ['الإيراد ÷ حجم المدفوعات.', 'Revenue ÷ payment volume.']],
    ['CAC / LTV', 'Customer Acquisition Cost vs Lifetime Value|تكلفة اكتساب العميل مقابل قيمته', ['القاعدة الشائعة: LTV أكبر من 3 أضعاف CAC.', 'A common rule: LTV above 3x CAC.']],
    ['MAU', 'Monthly Active Users|المستخدمون النشطون شهرياً', ['مقياس التفاعل الحقيقي.', 'The measure of real engagement.']],
    ['Burn / Runway', 'Burn Rate & Runway|معدل حرق النقد والمدة المتبقية', ['النقد ÷ الحرق الشهري = عدد الأشهر قبل الحاجة لتمويل جديد.', 'Cash ÷ monthly burn = months until new funding is needed.']]
  ],
  risk: { credit: 2, market: 1, liq: 2, rate: 2, ops: 3, uw: 0, reg: 3 },
  killer: ['توقف التمويل قبل الوصول للربحية، أو اختراق أمني، أو تغير تنظيمي يلغي نموذج العمل.',
           'Funding drying up before profitability, a security breach, or a rule change that removes the business model.'],
  reg: ['في السعودية: SAMA Regulatory Sandbox (البيئة التجريبية)، تراخيص شركات المدفوعات والبنوك الرقمية (مثل STC Bank و D360)، ومبادرة فنتك السعودية ضمن رؤية 2030.',
        'In Saudi Arabia: SAMA’s regulatory sandbox, licences for payment companies and digital banks (such as STC Bank and D360), and the Fintech Saudi initiative under Vision 2030.'],
  fs: [
    ['خسائر في البداية بسبب التسويق والتقنية. انظر Unit Economics (اقتصاديات الوحدة) قبل صافي الربح.', 'Early losses come from marketing and technology. Look at unit economics before net income.'],
    ['Stock-Based Compensation (التعويض بالأسهم) مصروف كبير غير نقدي.', 'Stock-based compensation is a large non-cash expense.'],
    ['أموال العملاء تظهر في الميزانية وليست متاحة للشركة.', 'Customer funds appear on the balance sheet but are not the company’s to use.']
  ],
  val: ['EV/Revenue في مرحلة النمو، ثم EV/EBITDA و P/E عند النضج. في الجولات الخاصة: تقييم Pre-money و Post-money.',
        'EV/revenue in the growth phase, then EV/EBITDA and P/E at maturity. In private rounds: pre-money and post-money valuation.'],
  ladder: ['Analyst (Strategy / FP&A)|محلل', 'Associate / Product Manager|مشارك / مدير منتج', 'Senior Manager|مدير أول', 'Head of Function|رئيس إدارة', 'VP / C-level|نائب رئيس / تنفيذي'],
  certs: 'CFA · Product & Data skills (SQL, Python)',
  ex: { g: 'Stripe · PayPal · Revolut · Nubank · Klarna · Adyen', s: ['STC Bank · تمارا · تابي · D360 Bank · جيديا · مُزن · ليندو', 'STC Bank · Tamara · Tabby · D360 Bank · Geidea · Mozn · Lendo'] },
  crisis: { t: ['Wirecard — يونيو 2020', 'Wirecard — June 2020'],
    d: ['شركة مدفوعات ألمانية دخلت مؤشر DAX وتجاوزت قيمتها بنك Deutsche Bank. ادعت أن 1.9 مليار يورو من نقدها محفوظ في حسابات أمانة في آسيا. لم يستطع المراجع EY تأكيد وجود الأموال، واعترفت الشركة أنها على الأرجح غير موجودة. أفلست خلال أيام واعتُقل رئيسها التنفيذي. الدرس: تحقق من النقد. الأرباح يمكن تجميلها، والنقد في البنك إما موجود أو لا.',
        'A German payments company that joined the DAX and was worth more than Deutsche Bank. It claimed €1.9 billion of its cash sat in trust accounts in Asia. Its auditor EY could not confirm the money existed, and the company admitted it probably did not. It filed for insolvency within days and its chief executive was arrested. The lesson: verify the cash. Earnings can be dressed up; cash in the bank is either there or not.'] },
  quiz: [
    { q: ['منصة حجم مدفوعاتها 1 مليار وإيرادها 15 مليوناً. ما Take Rate؟', 'A platform processes 1 billion and earns 15 million. What is the take rate?'],
      o: [['0.15%', '0.15%'], ['1.5%', '1.5%'], ['15%', '15%'], ['6.7%', '6.7%']], a: 1,
      w: ['15 ÷ 1,000 = 1.5%.', '15 ÷ 1,000 = 1.5%.'] },
    { q: ['من يدفع الرسوم الرئيسية في نموذج BNPL؟', 'Who pays the main fee in BNPL?'],
      o: [['المتسوق', 'The shopper'], ['التاجر', 'The merchant'], ['البنك المركزي', 'The central bank'], ['شركة التأمين', 'The insurer']], a: 1,
      w: ['التاجر يدفع نسبة من قيمة البيع مقابل زيادة مبيعاته، والمنصة تتحمل مخاطر السداد.', 'The merchant pays a share of the sale in return for higher sales, and the platform carries repayment risk.'] }
  ]
},
{
  id: 'payments', cat: 'fin', ab: 'PN', cfa: 'Equity (Business Models)',
  name: ['شبكات المدفوعات', 'Payment Networks'], term: 'Payment Networks|شبكات المدفوعات',
  line: ['طريق سريع تمر عليه العمليات بين بنك المشتري وبنك التاجر، وتأخذ الشبكة رسماً صغيراً على كل عملية.',
         'A toll road that carries transactions between the buyer’s bank and the merchant’s bank, with a small fee on each.'],
  model: ['Four-Party Model (النموذج الرباعي): حامل البطاقة، Issuer (البنك المُصدر للبطاقة)، Acquirer (البنك المحصّل للتاجر)، والتاجر، وفي الوسط الشبكة مثل Visa و Mastercard. الشبكة لا تُقرض ولا تتحمل مخاطر الائتمان. هذه على البنك المُصدر. التاجر يدفع Merchant Discount Rate، ويذهب معظمه للبنك المُصدر كـ Interchange Fee (رسم التبادل)، وتأخذ الشبكة رسوماً على الحجم وعدد العمليات والعمليات العابرة للحدود. أما American Express فتعمل بنموذج ثلاثي: هي الشبكة والمُصدر والمحصّل، فتتحمل مخاطر الائتمان. في السعودية: مدى شبكة الدفع الوطنية، وسريع للمدفوعات الفورية، وسداد للفواتير، وتديرها "المدفوعات السعودية" التابعة للبنك المركزي.',
          'In the four-party model there is the cardholder, the issuer (the cardholder’s bank), the acquirer (the merchant’s bank) and the merchant, with a network such as Visa or Mastercard in the middle. The network does not lend and carries no credit risk; that sits with the issuer. The merchant pays a merchant discount rate, most of which goes to the issuer as interchange, while the network charges on volume, transaction count and cross-border activity. American Express runs a three-party model: it is network, issuer and acquirer, so it carries credit risk. In Saudi Arabia: mada is the national debit network, sarie handles instant payments and SADAD bills, all run by Saudi Payments, owned by the central bank.'],
  rev: [['Service Fees (on Volume)|رسوم الخدمة على الحجم', 35], ['Data Processing (per Transaction)|معالجة البيانات لكل عملية', 35], ['Cross-border Fees|رسوم العمليات العابرة للحدود', 25], ['Other (Value-added Services)|خدمات القيمة المضافة', 5]],
  A: [['Goodwill & Intangibles|الشهرة والأصول غير الملموسة', 45], ['Cash & Investments|نقد واستثمارات', 25], ['Settlement Receivables|ذمم التسوية', 15], ['Other|أخرى', 15]],
  L: [['Settlement Payables|مستحقات التسوية', 15], ['Debt|الديون', 22], ['Client Incentives & Other|حوافز العملاء وأخرى', 20], ['Equity|حقوق الملكية', 43]],
  product: ['قبول عالمي: بطاقتك تعمل عند ملايين التجار في أي بلد.', 'Global acceptance: your card works at millions of merchants in any country.'],
  div: {
    front: ['Issuer & Acquirer Relationships|علاقات البنوك المصدرة والمحصلة', 'Merchant Solutions|حلول التجار', 'Value-added Services (Fraud, Data)|خدمات القيمة المضافة'],
    mid: ['Network Rules & Risk|قواعد الشبكة والمخاطر', 'Fraud & Dispute Management|الاحتيال والاعتراضات'],
    back: ['Processing & Technology|المعالجة والتقنية', 'Cybersecurity|الأمن السيبراني']
  },
  kpi: [
    ['Payments Volume', 'Payments Volume|حجم المدفوعات', ['قيمة المشتريات على بطاقات الشبكة.', 'The value of purchases on the network’s cards.']],
    ['Transactions', 'Processed Transactions|العمليات المعالجة', ['عدد العمليات.', 'The number of transactions.']],
    ['Cross-border', 'Cross-border Volume Growth|نمو العمليات العابرة للحدود', ['الأعلى ربحية، ويرتبط بالسفر.', 'The most profitable line, tied to travel.']],
    ['Op. Margin', 'Operating Margin|هامش الربح التشغيلي', ['من أعلى الهوامش في أي قطاع، يتجاوز 55% عند Visa و Mastercard.', 'Among the highest in any industry, above 55% at Visa and Mastercard.']]
  ],
  risk: { credit: 0, market: 0, liq: 1, rate: 0, ops: 3, uw: 0, reg: 3 },
  killer: ['التنظيم (تحديد سقف لرسوم التبادل ودعاوى الاحتكار) وبدائل تتجاوز البطاقة: التحويل الفوري من حساب لحساب والمحافظ الرقمية.',
           'Regulation (interchange caps and antitrust suits) and alternatives that bypass cards: instant account-to-account transfers and digital wallets.'],
  reg: ['سقوف رسوم التبادل في أوروبا، وتعديل Durbin في أمريكا. في السعودية: نظام المدفوعات وخدماتها تحت إشراف SAMA.',
        'Interchange caps in Europe and the Durbin Amendment in the US. In Saudi Arabia: the Law of Payments and Payment Services, supervised by SAMA.'],
  fs: [
    ['Client Incentives (حوافز للبنوك) تُخصم من الإيراد الإجمالي، فانتبه للفرق بين Gross و Net Revenue.', 'Client incentives are deducted from gross revenue, so mind the gap between gross and net revenue.'],
    ['لا مخصصات ائتمان لأن الشبكة لا تُقرض.', 'There are no credit provisions, because the network does not lend.'],
    ['تدفقات نقدية حرة عالية تعود للمساهمين عبر إعادة شراء الأسهم.', 'High free cash flow returns to shareholders through buybacks.']
  ],
  val: ['P/E و EV/EBITDA بمضاعفات مرتفعة: نمو مرتبط بالتحول من النقد إلى البطاقات وهوامش عالية ورأس مال قليل.',
        'P/E and EV/EBITDA at high multiples: growth from the shift from cash to cards, high margins and little capital.'],
  ladder: ['Analyst|محلل', 'Senior Analyst / Account Manager|محلل أول / مدير حسابات', 'Director|مدير', 'Vice President|نائب رئيس', 'Country / Regional Manager|مدير دولة أو منطقة'],
  certs: 'CFA · Payments certifications · Data analytics',
  ex: { g: 'Visa · Mastercard · American Express · UnionPay', s: ['مدى · سريع · سداد (المدفوعات السعودية)', 'mada · sarie · SADAD (Saudi Payments)'] },
  crisis: { t: ['دعوى رسوم التبادل — 2005 إلى 2019', 'Interchange litigation — 2005 to 2019'],
    d: ['رفع ملايين التجار في أمريكا دعوى جماعية على Visa و Mastercard والبنوك، واتهموها بتثبيت رسوم التبادل ومنع التاجر من توجيه العميل لبطاقة أرخص. انتهت بتسوية نحو 5.5 مليار دولار اعتُمدت في 2019، وهي من أكبر تسويات الاحتكار. الدرس: نموذج شبه احتكاري بهوامش عالية يعيش تحت مراقبة دائمة من المنظمين والمحاكم.',
        'Millions of US merchants brought a class action against Visa, Mastercard and the banks, alleging they fixed interchange and stopped merchants steering customers to cheaper cards. It ended in a settlement of about $5.5 billion approved in 2019, one of the largest antitrust settlements. The lesson: a near-monopoly with high margins lives under constant scrutiny from regulators and courts.'] },
  quiz: [
    { q: ['في النموذج الرباعي، من يتحمل مخاطر ائتمان حامل البطاقة؟', 'In the four-party model, who carries the cardholder’s credit risk?'],
      o: [['Visa أو Mastercard', 'Visa or Mastercard'], ['البنك المُصدر للبطاقة', 'The issuing bank'], ['التاجر', 'The merchant'], ['البنك المحصّل', 'The acquirer']], a: 1,
      w: ['الشبكة تنقل العملية فقط. البنك المُصدر هو من أقرض العميل.', 'The network only routes the transaction. The issuing bank is the one that lent to the customer.'] },
    { q: ['لماذا تتحمل American Express مخاطر ائتمان بخلاف Visa؟', 'Why does American Express carry credit risk when Visa does not?'],
      o: [['لأنها أصغر', 'It is smaller'], ['لأنها تُصدر البطاقات وتُقرض بنفسها', 'It issues cards and lends itself'], ['لأنها شركة تأمين', 'It is an insurer'], ['لأنها لا تعمل دولياً', 'It is not international']], a: 1,
      w: ['Amex شبكة ومُصدر ومحصّل في آن واحد، فتظهر القروض في ميزانيتها.', 'Amex is network, issuer and acquirer at once, so the loans sit on its balance sheet.'] }
  ]
}
);
