/* Institutions data (part 1). Strings are [ar, en]. Terms are "English|عربي". */
window.CATS = {
  dep: { name: ['مؤسسات الإيداع', 'Deposit-takers'], color: 'blue' },
  mkt: { name: ['أسواق رأس المال', 'Capital markets'], color: 'magenta' },
  con: { name: ['مؤسسات تعاقدية', 'Contractual institutions'], color: 'gold' },
  inv: { name: ['مؤسسات الاستثمار', 'Investment institutions'], color: 'emerald' },
  pub: { name: ['جهات رسمية وسيادية', 'Official & sovereign'], color: 'cyan' },
  fin: { name: ['التمويل والتقنية المالية', 'Finance cos. & FinTech'], color: 'coral' }
};
window.RISKS = [
  ['credit', 'Credit Risk|مخاطر الائتمان'], ['market', 'Market Risk|مخاطر السوق'],
  ['liq', 'Liquidity Risk|مخاطر السيولة'], ['rate', 'Interest Rate Risk|مخاطر سعر الفائدة'],
  ['ops', 'Operational Risk|المخاطر التشغيلية'], ['uw', 'Underwriting Risk|مخاطر الاكتتاب التأميني'],
  ['reg', 'Regulatory Risk|المخاطر التنظيمية']
];
window.INST = [
{
  id: 'bank', cat: 'dep', ab: 'CB', cfa: 'FSA · Fixed Income',
  name: ['البنوك التجارية', 'Commercial Banks'], term: 'Commercial Banks|البنوك التجارية',
  line: ['البنك يقترض قصيراً ورخيصاً من المودعين، ويُقرض طويلاً وبسعر أعلى، ويعيش على الفرق.',
         'A bank borrows short and cheap from depositors, lends long at a higher rate, and lives on the spread.'],
  model: ['المادة الخام للبنك هي أموال الناس. يجمع Deposits (الودائع) ويدفع عليها عائداً منخفضاً أو صفراً في الحسابات الجارية، ثم يحوّلها إلى Loans (قروض) بعائد أعلى. الفرق اسمه Net Interest Income (صافي دخل الفوائد). فوقه رسوم على التحويلات والبطاقات وتمويل التجارة. ولأن البنك يعمل برافعة مالية عالية (حوالي 10 ريالات أصول لكل ريال من حقوق الملكية)، خسارة صغيرة في القروض تأكل جزءاً كبيراً من رأس المال.',
          'A bank’s raw material is other people’s money. It gathers deposits, pays little or nothing on current accounts, and turns them into loans that earn more. The gap is Net Interest Income. On top come fees from transfers, cards and trade finance. Because a bank runs high leverage (about 10 of assets per 1 of equity), a small loan loss eats a large share of capital.'],
  rev: [['Net Interest Income|صافي دخل الفوائد', 72], ['Fees & Commissions|الرسوم والعمولات', 18], ['FX & Trading Income|دخل الصرف والمتاجرة', 7], ['Other|أخرى', 3]],
  A: [['Loans & Advances|القروض والسلف', 60], ['Investment Securities|الأوراق المالية الاستثمارية', 20], ['Cash & Central Bank Reserves|النقد والاحتياطيات لدى البنك المركزي', 10], ['Interbank Placements|إيداعات لدى البنوك', 6], ['Fixed & Other Assets|أصول ثابتة وأخرى', 4]],
  L: [['Customer Deposits|ودائع العملاء', 72], ['Interbank Borrowing|اقتراض بين البنوك', 7], ['Debt & Sukuk Issued|سندات وصكوك مصدرة', 6], ['Other Liabilities|التزامات أخرى', 3], ['Shareholders’ Equity|حقوق المساهمين', 12]],
  product: ['المنتج هو المال نفسه: قرض شخصي، تمويل عقاري، تمويل شركات، بطاقة ائتمان، خطاب ضمان. والمودع أيضاً عميل يشتري "الأمان والسيولة".',
            'The product is money itself: personal loans, mortgages, corporate lending, credit cards, letters of guarantee. The depositor is also a customer, buying safety and liquidity.'],
  div: {
    front: ['Retail Banking|مصرفية الأفراد', 'Corporate Banking|مصرفية الشركات', 'SME Banking|مصرفية المنشآت الصغيرة والمتوسطة', 'Treasury|الخزينة', 'Private Banking / Wealth|المصرفية الخاصة وإدارة الثروات', 'Trade Finance|تمويل التجارة'],
    mid: ['Credit Risk|مخاطر الائتمان', 'Market & Liquidity Risk|مخاطر السوق والسيولة', 'Compliance & AML|الالتزام ومكافحة غسل الأموال', 'ALCO / ALM|لجنة الأصول والالتزامات', 'Finance & Regulatory Reporting|المالية والتقارير الرقابية'],
    back: ['Operations|العمليات', 'IT & Cybersecurity|التقنية والأمن السيبراني', 'Internal Audit|المراجعة الداخلية', 'Collections|التحصيل']
  },
  kpi: [
    ['NIM', 'Net Interest Margin|هامش صافي الفائدة', ['صافي دخل الفوائد ÷ متوسط الأصول المدرّة للعائد. عادة 2–4%.', 'Net interest income ÷ average earning assets. Usually 2–4%.']],
    ['ROE', 'Return on Equity|العائد على حقوق الملكية', ['صافي الربح ÷ حقوق الملكية. البنوك الجيدة 12–20%.', 'Net income ÷ equity. Good banks earn 12–20%.']],
    ['CET1', 'Common Equity Tier 1 Ratio|نسبة الشريحة الأولى من رأس المال', ['أقوى أنواع رأس المال ÷ الأصول المرجّحة بالمخاطر (RWA). الحد الأدنى في Basel III هو 4.5% وفوقه هوامش إضافية.', 'Highest-quality capital ÷ risk-weighted assets. Basel III minimum is 4.5% plus buffers.']],
    ['C/I', 'Cost-to-Income Ratio|نسبة التكلفة إلى الدخل', ['المصاريف التشغيلية ÷ الدخل التشغيلي. كلما قلّت كان البنك أكفأ. البنوك السعودية غالباً 25–40%.', 'Operating expenses ÷ operating income. Lower is more efficient. Saudi banks often run 25–40%.']],
    ['NPL', 'Non-Performing Loans Ratio|نسبة القروض المتعثرة', ['القروض المتعثرة (تأخر أكثر من 90 يوماً) ÷ إجمالي القروض.', 'Loans more than 90 days past due ÷ gross loans.']],
    ['CoR', 'Cost of Risk|تكلفة المخاطر', ['مخصصات خسائر الائتمان ÷ متوسط القروض. تقيس كم يكلّفك الإقراض من خسائر متوقعة.', 'Credit loss provisions ÷ average loans. What lending costs you in expected losses.']],
    ['LDR', 'Loan-to-Deposit Ratio|نسبة القروض إلى الودائع', ['فوق 100% يعني أن البنك يموّل قروضه من مصادر غير الودائع.', 'Above 100% means loans are funded by more than deposits.']],
    ['LCR', 'Liquidity Coverage Ratio|نسبة تغطية السيولة', ['أصول سائلة عالية الجودة ÷ صافي التدفقات الخارجة خلال 30 يوماً من الضغط. الحد الأدنى 100%.', 'High-quality liquid assets ÷ net outflows in a 30-day stress. Minimum 100%.']]
  ],
  risk: { credit: 3, market: 1, liq: 3, rate: 3, ops: 2, uw: 0, reg: 3 },
  killer: ['القاتل هو اجتماع خسائر الائتمان مع هروب الودائع. البنك لا يملك نقداً يكفي لرد كل الودائع في يوم واحد، فإذا فُقدت الثقة انهار ولو كانت أصوله سليمة.',
           'The killer is credit losses combined with a deposit run. No bank holds enough cash to repay all deposits in one day, so lost confidence can sink it even with sound assets.'],
  reg: ['Basel III (رأس المال والسيولة)، IFRS 9 (المخصصات على أساس الخسائر الائتمانية المتوقعة ECL). في السعودية: البنك المركزي السعودي SAMA هو المنظّم.',
        'Basel III (capital and liquidity), IFRS 9 (provisions on expected credit losses). In Saudi Arabia the regulator is SAMA.'],
  fs: [
    ['قائمة الدخل تبدأ بـ Interest Income ناقص Interest Expense. لا يوجد Revenue ولا COGS بالمعنى الصناعي.', 'The income statement starts with interest income less interest expense. There is no revenue or COGS in the industrial sense.'],
    ['أهم "مصروف" هو Provision for Credit Losses (مخصص خسائر الائتمان)، وهو تقدير وليس نقداً مدفوعاً.', 'The key “expense” is the provision for credit losses, an estimate rather than cash paid.'],
    ['الدين عند البنك مادة خام وليس تمويلاً، لذلك لا نحسب EBITDA ولا Enterprise Value للبنوك.', 'Debt is raw material for a bank, not financing, so EBITDA and enterprise value are not used.'],
    ['قائمة التدفقات النقدية قليلة الفائدة للبنك، لأن الإقراض وجمع الودائع يظهران كتدفقات تشغيلية ضخمة.', 'The cash flow statement tells you little, because lending and deposit-taking show up as huge operating flows.']
  ],
  val: ['P/B مقابل ROE هو الأساس: البنك الذي يحقق ROE أعلى من تكلفة حقوق الملكية يستحق أكثر من قيمته الدفترية. تُستخدم أيضاً P/E ونموذج خصم الأرباح الموزعة DDM ونموذج العوائد الفائضة Excess Returns.',
        'P/B against ROE is the core: a bank earning ROE above its cost of equity deserves more than book value. P/E, the dividend discount model and the excess returns model are also used.'],
  ladder: ['Graduate Trainee / Analyst|متدرب خريج / محلل', 'Relationship Officer / Credit Analyst|مسؤول علاقات / محلل ائتمان', 'Relationship Manager|مدير علاقات', 'Senior RM / Team Head|مدير علاقات أول / رئيس فريق', 'Head of Division|رئيس قطاع', 'Chief Officer (CRO, CFO)|رئيس تنفيذي للقطاع', 'CEO|الرئيس التنفيذي'],
  certs: 'CFA · FRM · CME-1 · Moody’s Credit Certificate',
  ex: { g: 'JPMorgan Chase · Bank of America · HSBC · ICBC', s: ['الراجحي · البنك الأهلي السعودي SNB · بنك الرياض · الإنماء · ساب', 'Al Rajhi · Saudi National Bank · Riyad Bank · Alinma · SAB'] },
  crisis: { t: ['Silicon Valley Bank — مارس 2023', 'Silicon Valley Bank — March 2023'],
    d: ['جمع SVB ودائع ضخمة من شركات التقنية ووضعها في سندات طويلة الأجل حين كانت الفائدة قريبة من الصفر. لما رفع الفيدرالي الفائدة هبطت قيمة السندات. حاول البنك بيع جزء منها فظهرت الخسارة، وسحب العملاء نحو 42 مليار دولار في يوم واحد. أُغلق البنك في 10 مارس 2023. الدرس: عدم تطابق آجال الأصول والالتزامات مع ودائع غير مؤمّنة ومتركزة في قطاع واحد.',
        'SVB took in huge deposits from tech firms and parked them in long-dated bonds when rates were near zero. As the Fed raised rates the bonds lost value. Selling some exposed the loss, and customers pulled about $42 billion in a single day. The bank was closed on 10 March 2023. The lesson: a duration mismatch funded by uninsured deposits concentrated in one sector.'] },
  quiz: [
    { q: ['لماذا لا نستخدم EV/EBITDA لتقييم البنوك؟', 'Why is EV/EBITDA not used to value banks?'],
      o: [['لأن البنوك لا تربح', 'Because banks make no profit'], ['لأن الدين والفوائد جزء من النشاط التشغيلي للبنك', 'Because debt and interest are part of a bank’s operations'], ['لأن البنوك لا تدفع زكاة أو ضريبة', 'Because banks pay no zakat or tax'], ['لأن أصولها قليلة', 'Because their assets are small']], a: 1,
      w: ['الودائع والاقتراض مادة خام، والفوائد إيراد وتكلفة تشغيلية، فلا يمكن فصل "التمويل" عن "التشغيل".', 'Deposits and borrowings are raw material and interest is operating revenue and cost, so financing cannot be separated from operations.'] },
    { q: ['بنك لديه NIM = 3% وارتفعت تكلفة ودائعه 0.5% دون تغير عائد القروض. ماذا يحدث؟', 'A bank has a 3% NIM and deposit costs rise 0.5% with loan yields unchanged. What happens?'],
      o: [['يرتفع NIM', 'NIM rises'], ['ينخفض NIM', 'NIM falls'], ['لا يتأثر', 'No effect'], ['يرتفع CET1', 'CET1 rises']], a: 1,
      w: ['الهامش هو الفرق بين عائد الأصول وتكلفة التمويل، وارتفاع تكلفة التمويل يضغط عليه.', 'The margin is asset yield minus funding cost, so higher funding cost squeezes it.'] }
  ]
},
{
  id: 'ib', cat: 'mkt', ab: 'IB', cfa: 'Equity · Corporate Issuers',
  name: ['البنوك الاستثمارية', 'Investment Banks'], term: 'Investment Banks|البنوك الاستثمارية',
  line: ['وسيط بين الشركات والأسواق: ينصح في الصفقات، يطرح الأسهم والسندات، ويتداول الأوراق المالية.',
         'A middleman between companies and markets: it advises on deals, issues shares and bonds, and trades securities.'],
  model: ['البنك الاستثماري لا يعيش على الودائع. دخله رسوم على الاستشارات في Mergers & Acquisitions (الاندماج والاستحواذ)، ورسوم Underwriting (التعهد بالتغطية) عند طرح الأسهم ECM أو أدوات الدين DCM، وأرباح Sales & Trading (المبيعات والتداول). الأصل الحقيقي هنا هو الناس والعلاقات، لذلك تذهب نسبة كبيرة من الإيراد رواتب ومكافآت. الأنواع: Bulge Bracket مثل Goldman Sachs، و Elite Boutique مثل Lazard و Evercore، و Middle Market.',
          'An investment bank does not live on deposits. It earns advisory fees on mergers and acquisitions, underwriting fees when issuing equity (ECM) or debt (DCM), and profits from sales and trading. The real asset is people and relationships, so a large share of revenue goes to pay. Types: bulge bracket such as Goldman Sachs, elite boutiques such as Lazard and Evercore, and middle market firms.'],
  rev: [['Sales & Trading|المبيعات والتداول', 45], ['Advisory (M&A)|استشارات الاندماج والاستحواذ', 20], ['Underwriting (ECM/DCM)|التعهد بتغطية الإصدارات', 20], ['Asset & Wealth Mgmt|إدارة الأصول والثروات', 15]],
  A: [['Trading Assets|أصول المتاجرة', 35], ['Reverse Repos & Securities Borrowed|إعادة شراء معكوس وأوراق مقترضة', 30], ['Receivables from Clients & Brokers|ذمم العملاء والوسطاء', 15], ['Cash & Liquidity Pool|النقد ومحفظة السيولة', 15], ['Other|أخرى', 5]],
  L: [['Repos & Securities Loaned|اتفاقيات إعادة الشراء', 30], ['Trading Liabilities|التزامات المتاجرة', 20], ['Long-term Debt|ديون طويلة الأجل', 20], ['Payables & Deposits|ذمم دائنة وودائع', 22], ['Shareholders’ Equity|حقوق المساهمين', 8]],
  product: ['المنتج خدمة: نصيحة في صفقة، إدارة طرح عام أولي IPO، ترتيب إصدار سندات أو صكوك، صناعة سوق، وأبحاث للمستثمرين.',
            'The product is a service: deal advice, running an IPO, arranging a bond or sukuk issue, market making, and research for investors.'],
  div: {
    front: ['M&A Advisory|استشارات الاندماج والاستحواذ', 'Equity Capital Markets (ECM)|أسواق رأس المال (الأسهم)', 'Debt Capital Markets (DCM)|أسواق رأس المال (الدين)', 'Leveraged Finance|التمويل بالرافعة', 'Sales & Trading|المبيعات والتداول', 'Equity Research|أبحاث الأسهم'],
    mid: ['Risk Management|إدارة المخاطر', 'Compliance|الالتزام', 'Treasury|الخزينة', 'Product Control|مراقبة المنتجات'],
    back: ['Operations & Settlement|العمليات والتسوية', 'Technology|التقنية', 'Legal|الشؤون القانونية']
  },
  kpi: [
    ['League Tables', 'League Table Rank|ترتيب جداول الصفقات', ['ترتيب البنوك حسب حجم الصفقات والرسوم في كل منتج ومنطقة.', 'Ranking of banks by deal volume and fees in each product and region.']],
    ['Comp Ratio', 'Compensation Ratio|نسبة التعويضات', ['الرواتب والمكافآت ÷ صافي الإيرادات. غالباً 30–50%.', 'Pay and bonuses ÷ net revenue. Often 30–50%.']],
    ['RoTE', 'Return on Tangible Equity|العائد على حقوق الملكية الملموسة', ['صافي الربح ÷ حقوق الملكية بعد استبعاد الشهرة والأصول غير الملموسة.', 'Net income ÷ equity excluding goodwill and intangibles.']],
    ['VaR', 'Value at Risk|القيمة المعرضة للخطر', ['أقصى خسارة متوقعة في محفظة التداول خلال يوم واحد بمستوى ثقة معين مثل 99%.', 'Largest expected one-day loss on the trading book at a confidence level such as 99%.']],
    ['Backlog', 'Deal Pipeline|الصفقات المنتظرة', ['صفقات موقعة لم تكتمل بعد، وهي مؤشر على الرسوم القادمة.', 'Signed but not yet completed deals, a pointer to future fees.']],
    ['Leverage', 'Leverage Ratio|نسبة الرافعة', ['إجمالي الأصول ÷ حقوق الملكية. وصلت إلى نحو 30 مرة قبل أزمة 2008.', 'Total assets ÷ equity. It reached about 30x before the 2008 crisis.']]
  ],
  risk: { credit: 2, market: 3, liq: 3, rate: 2, ops: 3, uw: 0, reg: 3 },
  killer: ['القاتل هو التمويل قصير الأجل لمراكز تداول كبيرة. إذا رفض المقرضون تجديد الـ Repo ليلة واحدة، توقف البنك.',
           'The killer is short-term funding of large trading positions. If lenders refuse to roll overnight repo, the firm stops.'],
  reg: ['Basel III و FRTB لمخاطر السوق، وقاعدة Volcker في أمريكا التي تمنع التداول لحساب البنك نفسه. في السعودية: هيئة السوق المالية CMA ترخّص "مؤسسات السوق المالية".',
        'Basel III and FRTB for market risk, and the Volcker Rule in the US limiting proprietary trading. In Saudi Arabia the CMA licenses capital market institutions.'],
  fs: [
    ['الإيراد يُعرض حسب النشاط: Advisory و Underwriting و Trading، وليس كمبيعات.', 'Revenue is shown by activity: advisory, underwriting and trading, not as sales.'],
    ['Compensation (التعويضات) هي أكبر بند مصروفات، وتتغير مع الأرباح.', 'Compensation is the largest expense line and moves with profits.'],
    ['الميزانية تُقيَّم بالقيمة العادلة يومياً (Mark-to-Market)، فالأرباح والخسائر تظهر فوراً.', 'The balance sheet is marked to market daily, so gains and losses show immediately.'],
    ['أصول Level 3 (يصعب تسعيرها) تستحق انتباهاً خاصاً.', 'Level 3 assets, which are hard to price, deserve special attention.']
  ],
  val: ['P/E و P/TBV (السعر إلى القيمة الدفترية الملموسة) مقابل RoTE. بيوت الاستشارات الصغيرة تُقيَّم بـ P/E لأن ميزانياتها خفيفة.',
        'P/E and price to tangible book against RoTE. Advisory boutiques are valued on P/E because their balance sheets are light.'],
  ladder: ['Analyst (2–3 yrs)|محلل', 'Associate (3–4 yrs)|مشارك', 'Vice President|نائب رئيس', 'Director / Executive Director|مدير', 'Managing Director|عضو منتدب', 'Group Head / Partner|رئيس مجموعة / شريك'],
  certs: 'CFA · CME-1 · FMVA · Financial Modelling (Excel)',
  ex: { g: 'Goldman Sachs · Morgan Stanley · JPMorgan · Lazard · Evercore', s: ['الأهلي المالية SNB Capital · الراجحي المالية · الرياض المالية · HSBC العربية السعودية · جي بي مورغان السعودية', 'SNB Capital · Al Rajhi Capital · Riyad Capital · HSBC Saudi Arabia · J.P. Morgan Saudi Arabia'] },
  crisis: { t: ['Lehman Brothers — سبتمبر 2008', 'Lehman Brothers — September 2008'],
    d: ['كان Lehman يحمل أصولاً بنحو 639 مليار دولار برافعة تقارب 30 مرة، وجزء كبير منها عقارات ورهون يصعب بيعها، ويموّلها بقروض Repo قصيرة الأجل. لما انخفضت أسعار العقار طلب المقرضون ضمانات أكثر ثم توقفوا عن التجديد. أعلن إفلاسه في 15 سبتمبر 2008، وهو أكبر إفلاس في تاريخ أمريكا. الدرس: الرافعة العالية مع أصول غير سائلة وتمويل قصير تركيبة قاتلة.',
        'Lehman carried about $639 billion of assets at roughly 30x leverage, much of it hard-to-sell real estate and mortgages funded by short-term repo. When property prices fell, lenders demanded more collateral and then stopped rolling. It filed for bankruptcy on 15 September 2008, the largest in US history. The lesson: high leverage, illiquid assets and short funding are a lethal mix.'] },
  quiz: [
    { q: ['ما الفرق بين ECM و DCM؟', 'What is the difference between ECM and DCM?'],
      o: [['ECM لإصدار الأسهم و DCM لإصدار أدوات الدين', 'ECM issues equity, DCM issues debt'], ['ECM للأفراد و DCM للشركات', 'ECM is retail, DCM is corporate'], ['لا فرق', 'No difference'], ['ECM للتداول و DCM للأبحاث', 'ECM is trading, DCM is research']], a: 0,
      w: ['Equity Capital Markets يدير الطروحات مثل IPO، و Debt Capital Markets يرتب السندات والصكوك.', 'Equity capital markets runs offerings such as IPOs; debt capital markets arranges bonds and sukuk.'] },
    { q: ['أي قسم يُعتبر Front Office؟', 'Which is a front office function?'],
      o: [['Compliance', 'Compliance'], ['Settlement', 'Settlement'], ['M&A Advisory', 'M&A Advisory'], ['Internal Audit', 'Internal Audit']], a: 2,
      w: ['Front Office هو كل قسم يولّد إيراداً مباشراً من العملاء.', 'Front office means any unit that earns revenue directly from clients.'] }
  ]
},
{
  id: 'islamic', cat: 'dep', ab: 'IS', cfa: 'Fixed Income · Ethics',
  name: ['البنوك الإسلامية', 'Islamic Banks'], term: 'Islamic Banks|البنوك الإسلامية',
  line: ['تؤدي وظيفة البنك التجاري نفسها، لكن عبر البيع والتأجير والمشاركة بدل القرض بفائدة.',
         'They do the same job as a commercial bank, but through sale, lease and partnership instead of interest-bearing loans.'],
  model: ['يمنع التمويل الإسلامي Riba (الربا) و Gharar (الغرر الفاحش). لذلك يربح البنك من عقود حقيقية: Murabaha (المرابحة) يشتري السلعة ويبيعها للعميل بهامش معلوم، Ijara (الإجارة) يؤجر الأصل، Mudaraba (المضاربة) و Musharaka (المشاركة) يتقاسم الربح والخسارة. في جانب التمويل: الحسابات الجارية قرض حسن بلا عائد، وحسابات الاستثمار تشارك في الأرباح. ميزة البنوك الإسلامية في السعودية هي نسبة عالية من الحسابات الجارية عديمة التكلفة.',
          'Islamic finance prohibits riba (interest) and excessive gharar (uncertainty). The bank earns from real contracts: murabaha (cost-plus sale), ijara (leasing), and mudaraba and musharaka (profit-and-loss sharing). On the funding side, current accounts are interest-free and investment accounts share in profits. The edge of Saudi Islamic banks is a high share of zero-cost current accounts.'],
  rev: [['Net Financing & Investment Income|صافي دخل التمويل والاستثمار', 76], ['Fees from Banking Services|رسوم الخدمات المصرفية', 14], ['FX Income|دخل تحويل العملات', 5], ['Other|أخرى', 5]],
  A: [['Financing (Murabaha, Ijara…)|التمويل (مرابحة، إجارة…)', 70], ['Sukuk & Investments|الصكوك والاستثمارات', 17], ['Cash & Balances with SAMA|النقد والأرصدة لدى البنك المركزي', 6], ['Due from Banks|مطلوبات من البنوك', 3], ['Other Assets|أصول أخرى', 4]],
  L: [['Customer Deposits (Current & Time)|ودائع العملاء (جارية واستثمارية)', 66], ['Due to Banks|مطلوبات للبنوك', 14], ['Sukuk Issued & Other|صكوك مصدرة والتزامات أخرى', 7], ['Shareholders’ Equity & Tier 1 Sukuk|حقوق المساهمين وصكوك الشريحة الأولى', 13]],
  product: ['تمويل شخصي بالتورق، تمويل عقاري بالإجارة أو المرابحة، بطاقات ائتمانية متوافقة، وحسابات استثمارية. كل منتج يحتاج موافقة Sharia Board (الهيئة الشرعية).',
            'Personal finance through tawarruq, home finance through ijara or murabaha, compliant credit cards, and investment accounts. Each product needs Sharia board approval.'],
  div: {
    front: ['Retail Banking|مصرفية الأفراد', 'Corporate Banking|مصرفية الشركات', 'Treasury (Sukuk, Commodity Murabaha)|الخزينة', 'Takaful Distribution|توزيع التكافل'],
    mid: ['Sharia Board & Sharia Audit|الهيئة الشرعية والتدقيق الشرعي', 'Risk Management|إدارة المخاطر', 'Compliance|الالتزام'],
    back: ['Operations|العمليات', 'IT & Digital|التقنية والقنوات الرقمية', 'Internal Audit|المراجعة الداخلية']
  },
  kpi: [
    ['NPM', 'Net Profit Margin|هامش صافي الربح', ['مقابل NIM في البنوك التقليدية: صافي دخل التمويل ÷ متوسط الأصول المدرّة.', 'The equivalent of NIM: net financing income ÷ average earning assets.']],
    ['CASA', 'Current & Savings Accounts Ratio|نسبة الحسابات الجارية', ['نسبة الودائع عديمة أو قليلة التكلفة من إجمالي الودائع. الراجحي: 64.8% نهاية 2025.', 'Share of zero- or low-cost deposits. Al Rajhi: 64.8% at end-2025.']],
    ['ROE', 'Return on Equity|العائد على حقوق الملكية', ['الراجحي حقق 23.4% في 2025.', 'Al Rajhi earned 23.4% in 2025.']],
    ['Tier 1', 'Tier 1 Capital Ratio|نسبة الشريحة الأولى', ['رأس المال الأساسي ÷ الأصول المرجّحة بالمخاطر. الراجحي: 20.5% نهاية 2025.', 'Core capital ÷ risk-weighted assets. Al Rajhi: 20.5% at end-2025.']],
    ['NPL Coverage', 'NPL Coverage Ratio|نسبة تغطية التمويل المتعثر', ['المخصصات ÷ التمويل المتعثر. فوق 100% يعني تغطية كاملة.', 'Provisions ÷ non-performing financing. Above 100% means full cover.']],
    ['PER', 'Profit Equalization Reserve|احتياطي معدل الأرباح', ['احتياطي يُقتطع لتثبيت عوائد أصحاب حسابات الاستثمار.', 'A reserve set aside to smooth returns to investment account holders.']]
  ],
  risk: { credit: 3, market: 1, liq: 3, rate: 3, ops: 2, uw: 0, reg: 3 },
  killer: ['نفس مخاطر البنك التجاري، ويضاف إليها Sharia Non-Compliance Risk (مخاطر عدم الالتزام الشرعي) التي قد تُبطل الدخل، وقلة أدوات السيولة المتوافقة.',
           'The same risks as a commercial bank, plus Sharia non-compliance risk, which can void income, and fewer compliant liquidity tools.'],
  reg: ['معايير AAOIFI و IFSB بجانب Basel III. في السعودية تطبق البنوك IFRS تحت إشراف SAMA مع إطار الحوكمة الشرعية.',
        'AAOIFI and IFSB standards alongside Basel III. Saudi banks report under IFRS, supervised by SAMA, with a Sharia governance framework.'],
  fs: [
    ['بدل Interest Income تجد Income from Financing (الدخل من التمويل)، وبدل Interest Expense تجد Return on Customers’ Time Investments (عائد استثمارات العملاء لأجل).', 'Instead of interest income you see income from financing, and instead of interest expense, return on customers’ time investments.'],
    ['الأصول تُصنف حسب العقد: Murabaha و Ijara و Tawarruq.', 'Assets are split by contract: murabaha, ijara, tawarruq.'],
    ['Zakat (الزكاة) تظهر بدل ضريبة الدخل للمساهمين السعوديين.', 'Zakat appears in place of income tax for Saudi shareholders.']
  ],
  val: ['نفس أدوات البنوك التجارية: P/B مقابل ROE و P/E. البنوك التي تملك ودائع جارية رخيصة تتداول بمضاعفات أعلى.',
        'The same tools as commercial banks: P/B against ROE, and P/E. Banks with cheap current accounts trade at higher multiples.'],
  ladder: ['Graduate Trainee|متدرب خريج', 'Officer / Analyst|موظف / محلل', 'Relationship Manager|مدير علاقات', 'Department Head|رئيس إدارة', 'Group Head|رئيس مجموعة', 'CEO|الرئيس التنفيذي'],
  certs: 'CIFE · AAOIFI CSAA / CIPA · CFA · CME-1',
  ex: { g: 'Kuwait Finance House · Dubai Islamic Bank · Maybank Islamic', s: ['مصرف الراجحي (أكبر بنك إسلامي في العالم) · مصرف الإنماء · بنك البلاد · بنك الجزيرة', 'Al Rajhi Bank (largest Islamic bank in the world) · Alinma · Bank Albilad · Bank AlJazira'] },
  crisis: { t: ['صكوك نخيل، دبي — نوفمبر 2009', 'Nakheel Sukuk, Dubai — November 2009'],
    d: ['طلبت Dubai World تأجيل سداد ديون بنحو 26 مليار دولار، ومنها صكوك نخيل بنحو 4 مليارات دولار المستحقة في ديسمبر 2009. اكتشف المستثمرون أن حقوقهم على الأصل المؤجَّر أقل وضوحاً مما ظنوا. سُددت الصكوك في النهاية بدعم 10 مليارات دولار من أبوظبي. الدرس: اقرأ هيكل الصك، فهل هو Asset-Backed (مدعوم بالأصل) أم Asset-Based (مستند إلى الأصل فقط)؟',
        'Dubai World asked to delay about $26 billion of debt, including roughly $4 billion of Nakheel sukuk due in December 2009. Investors found their claim on the leased asset was less clear than assumed. The sukuk were repaid after $10 billion of support from Abu Dhabi. The lesson: read the structure, and ask whether a sukuk is asset-backed or only asset-based.'] },
  quiz: [
    { q: ['في عقد Murabaha، من أين يأتي ربح البنك؟', 'In a murabaha contract, where does the bank’s profit come from?'],
      o: [['فائدة على القرض', 'Interest on a loan'], ['هامش ربح معلوم فوق تكلفة السلعة', 'A disclosed mark-up over the cost of the goods'], ['رسوم تأخير', 'Late fees'], ['حصة في أرباح العميل', 'A share of the client’s profit']], a: 1,
      w: ['المرابحة بيع بالتكلفة مع هامش ربح متفق عليه ومؤجل السداد.', 'Murabaha is a sale at cost plus an agreed mark-up, paid over time.'] },
    { q: ['ما الذي يميز تمويل البنوك الإسلامية السعودية؟', 'What sets the funding of Saudi Islamic banks apart?'],
      o: [['سندات طويلة الأجل', 'Long-term bonds'], ['نسبة عالية من الحسابات الجارية بلا عائد', 'A high share of non-profit-bearing current accounts'], ['اقتراض من الخارج', 'Foreign borrowing'], ['رأس مال حكومي', 'Government capital']], a: 1,
      w: ['الحسابات الجارية لا تدفع عائداً، فتنخفض تكلفة التمويل ويرتفع الهامش.', 'Current accounts pay no return, which lowers funding cost and lifts the margin.'] }
  ]
},
{
  id: 'central', cat: 'pub', ab: 'CB+', cfa: 'Economics',
  name: ['البنوك المركزية', 'Central Banks'], term: 'Central Banks|البنوك المركزية',
  line: ['بنك البنوك وبنك الحكومة: يصدر العملة، يحدد سعر الفائدة، ويراقب النظام المالي.',
         'The banks’ bank and the government’s bank: it issues currency, sets interest rates and oversees the financial system.'],
  model: ['البنك المركزي لا يهدف للربح. أهدافه استقرار الأسعار والاستقرار المالي. أدواته: Policy Rate (سعر الفائدة الأساسي)، Open Market Operations (عمليات السوق المفتوحة)، Reserve Requirements (الاحتياطي الإلزامي)، ودور Lender of Last Resort (المقرض الأخير). البنك المركزي السعودي SAMA يربط الريال بالدولار عند 3.75 منذ 1986، لذلك تتحرك أسعار الفائدة السعودية مع قرارات الفيدرالي الأمريكي. ومع ذلك يحقق البنك المركزي ربحاً اسمه Seigniorage: يصدر نقداً بلا تكلفة ويستثمر مقابله في أصول تدر عائداً.',
          'A central bank does not aim for profit. Its goals are price stability and financial stability. Its tools: the policy rate, open market operations, reserve requirements, and acting as lender of last resort. SAMA has pegged the riyal to the dollar at 3.75 since 1986, so Saudi rates move with the Federal Reserve. A central bank still earns seigniorage: it issues cash at no cost and holds income-earning assets against it.'],
  rev: [['Return on FX Reserves|عائد الاحتياطيات الأجنبية', 60], ['Interest on Government Securities|عائد الأوراق الحكومية', 25], ['Lending to Banks|إقراض البنوك', 10], ['Fees|رسوم', 5]],
  A: [['Foreign Reserves (Deposits & Securities)|الاحتياطيات الأجنبية', 70], ['Government Securities|أوراق مالية حكومية', 12], ['Gold|الذهب', 6], ['Loans to Banks (Repo)|قروض للبنوك', 7], ['Other|أخرى', 5]],
  L: [['Currency in Circulation|النقد المتداول', 15], ['Bank Reserves|احتياطيات البنوك', 25], ['Government Deposits|ودائع الحكومة', 35], ['Central Bank Bills|أذونات البنك المركزي', 15], ['Capital & Reserves|رأس المال والاحتياطيات', 10]],
  product: ['المنتج هو الثقة في العملة. النقد الذي في جيبك التزام على البنك المركزي.',
            'The product is trust in the currency. The cash in your pocket is a central bank liability.'],
  div: {
    front: ['Monetary Policy|السياسة النقدية', 'Reserve Management|إدارة الاحتياطيات', 'Markets Operations|عمليات الأسواق'],
    mid: ['Banking Supervision|الرقابة على البنوك', 'Financial Stability|الاستقرار المالي', 'Economic Research|الأبحاث الاقتصادية'],
    back: ['Payment Systems (sarie, mada)|أنظمة المدفوعات', 'Currency Issuance|إصدار النقد', 'Consumer Protection|حماية العملاء']
  },
  kpi: [
    ['Policy Rate', 'Policy Rate (Repo Rate)|سعر الفائدة الأساسي', ['السعر الذي يقرض به البنك المركزي البنوك. في السعودية: Repo و Reverse Repo.', 'The rate at which the central bank lends to banks. In Saudi Arabia: repo and reverse repo.']],
    ['CPI', 'Inflation Rate|معدل التضخم', ['معظم البنوك المركزية تستهدف نحو 2%.', 'Most central banks target about 2%.']],
    ['Reserves', 'FX Reserves / Import Cover|الاحتياطيات وتغطية الواردات', ['عدد أشهر الواردات التي تغطيها الاحتياطيات. مهمة جداً للدول التي تربط عملتها.', 'Months of imports covered by reserves. Vital for pegged currencies.']],
    ['M2 / M3', 'Money Supply|عرض النقود', ['النقد المتداول مع الودائع بأنواعها.', 'Currency in circulation plus deposits of various types.']],
    ['Balance Sheet', 'Balance Sheet Size|حجم الميزانية', ['يكبر مع QE (التيسير الكمي) ويصغر مع QT (التشديد الكمي).', 'It grows with quantitative easing and shrinks with quantitative tightening.']]
  ],
  risk: { credit: 1, market: 2, liq: 0, rate: 2, ops: 2, uw: 0, reg: 0 },
  killer: ['فقدان المصداقية. إذا لم يصدق السوق أن البنك المركزي سيدافع عن سعر الصرف أو يكبح التضخم، هربت الأموال من العملة.',
           'Loss of credibility. If markets doubt the central bank will defend the exchange rate or curb inflation, money flees the currency.'],
  reg: ['يعمل بقانون خاص يحدد استقلاليته. ينسق دولياً عبر BIS (بنك التسويات الدولية) و IMF (صندوق النقد الدولي).',
        'It operates under its own law defining its independence, and coordinates internationally through the BIS and the IMF.'],
  fs: [
    ['الالتزام الرئيسي هو النقد المصدر واحتياطيات البنوك، وكلاهما "نقود" بالنسبة لغيره.', 'Its main liabilities are issued currency and bank reserves, both of which are money to everyone else.'],
    ['قد يسجل خسائر محاسبية دون أن يُفلس، لأنه يصدر العملة التي يسدد بها.', 'It can post accounting losses without going bust, because it issues the currency it pays in.'],
    ['أرباحه تُحوَّل غالباً إلى خزينة الدولة.', 'Its profits are usually remitted to the treasury.']
  ],
  val: ['لا يُقيَّم. المهم هو قراءة ميزانيته لفهم السيولة في النظام.', 'It is not valued. What matters is reading its balance sheet to understand system liquidity.'],
  ladder: ['Graduate Programme / Economist|برنامج الخريجين / اقتصادي', 'Senior Economist / Bank Examiner|اقتصادي أول / مفتش بنوك', 'Section Head|رئيس قسم', 'Director|مدير إدارة', 'Deputy Governor|نائب المحافظ', 'Governor|المحافظ'],
  certs: 'MSc Economics · CFA · FRM · PhD',
  ex: { g: 'Federal Reserve · ECB · Bank of England · Bank of Japan · PBoC', s: ['البنك المركزي السعودي SAMA (تأسس 1952)', 'Saudi Central Bank, SAMA (founded 1952)'] },
  crisis: { t: ['الأربعاء الأسود، بنك إنجلترا — 16 سبتمبر 1992', 'Black Wednesday, Bank of England — 16 September 1992'],
    d: ['كانت بريطانيا تثبت الجنيه ضمن آلية الصرف الأوروبية ERM بسعر أعلى مما يتحمله اقتصادها. راهن المضاربون، وأشهرهم George Soros، على أن بنك إنجلترا لن يصمد. رفع البنك الفائدة من 10% إلى 12% ووعد بـ 15% في يوم واحد واشترى الجنيه بالمليارات، ثم خرج من الآلية في المساء. ربح Soros نحو مليار دولار. الدرس: ربط العملة يحتاج احتياطيات كافية واقتصاداً يتحمل سعر الفائدة اللازم للدفاع عنه.',
        'Britain fixed the pound in the European Exchange Rate Mechanism at a rate its economy could not bear. Speculators, most famously George Soros, bet the Bank of England would not hold. In one day the Bank raised rates from 10% to 12%, promised 15% and bought pounds by the billion, then left the mechanism that evening. Soros made about $1 billion. The lesson: a peg needs enough reserves and an economy that can live with the rate required to defend it.'] },
  quiz: [
    { q: ['لماذا تتبع أسعار الفائدة في السعودية قرارات الفيدرالي الأمريكي؟', 'Why do Saudi interest rates follow the US Federal Reserve?'],
      o: [['بسبب اتفاقية تجارية', 'A trade agreement'], ['بسبب ربط الريال بالدولار', 'The riyal’s peg to the dollar'], ['لأن SAMA فرع للفيدرالي', 'SAMA is a Fed branch'], ['بسبب أسعار النفط فقط', 'Oil prices only']], a: 1,
      w: ['لو اختلفت الفائدة كثيراً بين العملتين مع سعر صرف ثابت لتحركت الأموال نحو العملة الأعلى عائداً وضغطت على الربط.', 'With a fixed rate, a large interest gap would send money to the higher-yielding currency and strain the peg.'] },
    { q: ['النقد المتداول في ميزانية البنك المركزي يُصنف كـ:', 'Currency in circulation on a central bank’s balance sheet is:'],
      o: [['أصل', 'An asset'], ['التزام', 'A liability'], ['إيراد', 'Revenue'], ['حقوق ملكية', 'Equity']], a: 1,
      w: ['الورقة النقدية وعد من البنك المركزي لحاملها، فهي التزام عليه.', 'A banknote is the central bank’s promise to the holder, so it is a liability.'] }
  ]
},
{
  id: 'insurance', cat: 'con', ab: 'IN', cfa: 'FSA · Alternative Investments',
  name: ['شركات التأمين', 'Insurance Companies'], term: 'Insurance Companies|شركات التأمين',
  line: ['تقبض القسط اليوم وتدفع المطالبة لاحقاً، وتستثمر المال في الفترة بينهما.',
         'It collects the premium today, pays the claim later, and invests the money in between.'],
  model: ['شركة التأمين تبيع وعداً. تجمع Premiums (الأقساط) من كثيرين وتدفع Claims (المطالبات) للقلة الذين يقع عليهم الخطر. لها مصدران للربح: Underwriting Profit (ربح الاكتتاب) إذا كانت الأقساط أكبر من المطالبات والمصاريف، و Investment Income (دخل الاستثمار) على الأموال التي تحتفظ بها قبل دفع المطالبات، وتسمى Float. الأنواع: Life (حياة) بالتزامات طويلة جداً، P&C أو General (عام: سيارات، ممتلكات) بالتزامات قصيرة، Health (صحي)، Reinsurance (إعادة تأمين) وهي تأمين شركات التأمين، و Takaful (تكافل) التعاوني. السوق السعودي يعمل بنموذج التأمين التعاوني، ويغلب عليه الصحي والمركبات.',
          'An insurer sells a promise. It pools premiums from many and pays claims to the few who suffer a loss. It has two profit sources: underwriting profit, if premiums exceed claims and expenses, and investment income on the money held before claims are paid, known as float. Types: life (very long liabilities), P&C or general (short liabilities), health, reinsurance (insurance for insurers), and cooperative takaful. The Saudi market runs on the cooperative model and is dominated by health and motor.'],
  rev: [['Insurance Revenue (Earned Premiums)|إيرادات التأمين (الأقساط المكتسبة)', 88], ['Investment Income|دخل الاستثمار', 10], ['Other|أخرى', 2]],
  A: [['Investments (Bonds, Sukuk, Deposits)|الاستثمارات (سندات، صكوك، ودائع)', 62], ['Reinsurance Contract Assets|أصول عقود إعادة التأمين', 14], ['Cash|النقد', 10], ['Equities & Funds|أسهم وصناديق', 8], ['Other Assets|أصول أخرى', 6]],
  L: [['Insurance Contract Liabilities (Claims Reserves)|التزامات عقود التأمين (احتياطي المطالبات)', 52], ['Unearned Premiums / Remaining Coverage|أقساط غير مكتسبة', 22], ['Other Liabilities|التزامات أخرى', 6], ['Shareholders’ Equity|حقوق المساهمين', 20]],
  product: ['Policy (وثيقة التأمين): وعد بالتعويض إذا وقع حدث محدد. تكلفة هذا المنتج غير معروفة وقت البيع، وهذه خصوصية الصناعة كلها.',
            'The policy: a promise to pay if a defined event occurs. The cost of this product is unknown when it is sold, which defines the whole industry.'],
  div: {
    front: ['Underwriting|الاكتتاب', 'Sales & Distribution (Agents, Brokers, Bancassurance)|المبيعات والتوزيع', 'Investments|الاستثمارات'],
    mid: ['Actuarial|الاكتوارية', 'Claims Management|إدارة المطالبات', 'Reinsurance|إعادة التأمين', 'Risk & Compliance|المخاطر والالتزام'],
    back: ['Policy Administration|إدارة الوثائق', 'Finance (IFRS 17)|المالية', 'IT|التقنية']
  },
  kpi: [
    ['Loss Ratio', 'Loss Ratio|نسبة الخسارة', ['المطالبات المتكبدة ÷ الأقساط المكتسبة.', 'Incurred claims ÷ earned premiums.']],
    ['Expense Ratio', 'Expense Ratio|نسبة المصاريف', ['مصاريف الاكتتاب والعمولات ÷ الأقساط.', 'Underwriting expenses and commissions ÷ premiums.']],
    ['Combined Ratio', 'Combined Ratio|النسبة المجمّعة', ['نسبة الخسارة + نسبة المصاريف. أقل من 100% يعني ربحاً من الاكتتاب.', 'Loss ratio plus expense ratio. Below 100% means an underwriting profit.']],
    ['GWP', 'Gross Written Premiums|إجمالي الأقساط المكتتبة', ['حجم المبيعات. التعاونية: 23.8 مليار ريال في 2025.', 'Sales volume. Tawuniya: SAR 23.8 billion in 2025.']],
    ['Solvency', 'Solvency Ratio|نسبة الملاءة', ['رأس المال المتاح ÷ رأس المال المطلوب نظاماً.', 'Available capital ÷ required regulatory capital.']],
    ['CSM', 'Contractual Service Margin|هامش الخدمة التعاقدية', ['في IFRS 17: الربح غير المكتسب من العقود طويلة الأجل، ويُعترف به مع تقديم الخدمة.', 'Under IFRS 17: unearned profit on long-term contracts, released as service is provided.']]
  ],
  risk: { credit: 1, market: 3, liq: 1, rate: 3, ops: 2, uw: 3, reg: 2 },
  killer: ['تسعير الخطر بأقل من حقيقته أو احتياطيات غير كافية. الخطأ يظهر بعد سنوات عندما تأتي المطالبات. وفي تأمين الحياة: انخفاض الفائدة مع ضمانات عوائد قديمة.',
           'Underpricing risk or under-reserving. The mistake shows years later when claims arrive. In life insurance: falling rates against old guaranteed returns.'],
  reg: ['Solvency II في أوروبا، و IFRS 17 لمحاسبة عقود التأمين منذ 2023. في السعودية: هيئة التأمين Insurance Authority تشرف على القطاع منذ نوفمبر 2023.',
        'Solvency II in Europe, and IFRS 17 for insurance contracts since 2023. In Saudi Arabia the Insurance Authority has supervised the sector since November 2023.'],
  fs: [
    ['الإيراد هو Insurance Revenue وليس مبيعات. القسط يُكتسب مع مرور مدة الوثيقة.', 'Revenue is insurance revenue, not sales. A premium is earned as the policy period passes.'],
    ['أكبر التزام في الميزانية تقدير اكتواري للمطالبات، ومنه IBNR (مطالبات وقعت ولم يُبلَّغ عنها).', 'The largest liability is an actuarial estimate of claims, including IBNR (incurred but not reported).'],
    ['Insurance Service Result (نتيجة خدمات التأمين) يقابل الربح التشغيلي، ثم يضاف دخل الاستثمار.', 'The insurance service result is the equivalent of operating profit; investment income is then added.'],
    ['النقد يأتي قبل تقديم الخدمة، وهذا عكس الشركة الصناعية.', 'Cash arrives before the service is delivered, the reverse of an industrial company.']
  ],
  val: ['P/B مقابل ROE لشركات التأمين العام. لتأمين الحياة: Embedded Value (القيمة الضمنية) ومضاعف P/EV. وتُستخدم P/E عند استقرار الأرباح.',
        'P/B against ROE for general insurers. For life insurers: embedded value and P/EV. P/E is used when earnings are stable.'],
  ladder: ['Actuarial Analyst / Underwriting Assistant|محلل اكتواري / مساعد اكتتاب', 'Underwriter / Claims Officer|مكتتب / مسؤول مطالبات', 'Senior Underwriter / Associate Actuary|مكتتب أول / اكتواري مشارك', 'Manager / Fellow Actuary|مدير / اكتواري زميل', 'Chief Actuary / Chief Underwriting Officer|رئيس الاكتواريين / رئيس الاكتتاب', 'CEO|الرئيس التنفيذي'],
  certs: 'SOA / IFoA (Actuarial) · CII · IFCE · CFA',
  ex: { g: 'Allianz · AXA · Berkshire Hathaway · Munich Re · Swiss Re', s: ['التعاونية · بوبا العربية · ميدغلف · الراجحي تكافل · الإعادة السعودية', 'Tawuniya · Bupa Arabia · MedGulf · Al Rajhi Takaful · Saudi Re'] },
  crisis: { t: ['AIG — سبتمبر 2008', 'AIG — September 2008'],
    d: ['وحدة صغيرة في AIG اسمها Financial Products باعت Credit Default Swaps، أي تأميناً على سندات الرهن العقاري، بمئات المليارات من الدولارات دون احتياطيات كافية، لأنها رأت الخطر شبه معدوم. لما هبطت قيمة السندات طلب المشترون ضمانات نقدية لم تكن متوفرة. أقرضها الفيدرالي 85 مليار دولار في 16 سبتمبر 2008، ووصل الدعم إلى نحو 182 مليار دولار. الدرس: بيع الحماية دون احتياطي ليس تأميناً. هو رهان بالرافعة.',
        'A small AIG unit, Financial Products, sold credit default swaps, in effect insurance on mortgage bonds, for hundreds of billions of dollars without adequate reserves because it saw the risk as negligible. When the bonds fell, buyers demanded cash collateral that was not there. The Fed lent $85 billion on 16 September 2008, and support reached about $182 billion. The lesson: selling protection without reserves is a leveraged bet, not insurance.'] },
  quiz: [
    { q: ['Combined Ratio = 96%. ماذا يعني ذلك؟', 'A combined ratio of 96% means:'],
      o: [['خسارة اكتتاب 4%', 'A 4% underwriting loss'], ['ربح اكتتاب 4% من الأقساط', 'A 4% underwriting profit on premiums'], ['عائد استثمار 96%', 'A 96% investment return'], ['نسبة الملاءة 96%', 'A 96% solvency ratio']], a: 1,
      w: ['كل 100 ريال أقساط ذهب منها 96 للمطالبات والمصاريف وبقي 4 ربح اكتتاب، قبل دخل الاستثمار.', 'Of every 100 of premium, 96 went to claims and expenses, leaving 4 of underwriting profit before investment income.'] },
    { q: ['ما هو Float؟', 'What is float?'],
      o: [['أسهم الشركة الحرة', 'The free float of shares'], ['أقساط مقبوضة لم تُدفع مطالباتها بعد وتُستثمر', 'Premiums collected, not yet paid out in claims, and invested'], ['رأس المال المدفوع', 'Paid-up capital'], ['عمولة الوسطاء', 'Broker commission']], a: 1,
      w: ['هو مال الآخرين الذي تستثمره شركة التأمين مؤقتاً. بنى Warren Buffett ثروة Berkshire عليه.', 'It is other people’s money that the insurer invests for a time. Warren Buffett built Berkshire on it.'] }
  ]
},
{
  id: 'am', cat: 'inv', ab: 'AM', cfa: 'Portfolio Management · Equity',
  name: ['شركات إدارة الأصول', 'Asset Managers'], term: 'Asset Managers|شركات إدارة الأصول',
  line: ['تدير أموال الآخرين مقابل رسم سنوي صغير على حجم الأصول.',
         'It manages other people’s money for a small annual fee on the assets.'],
  model: ['شركة إدارة الأصول لا تملك الأموال التي تديرها. تجمعها في Mutual Funds (صناديق استثمارية) أو ETFs (صناديق مؤشرات متداولة) أو محافظ خاصة، وتتقاضى Management Fee (رسوم إدارة) كنسبة من Assets Under Management (الأصول المدارة). الإيراد يساوي الأصول المدارة مضروبة في نسبة الرسوم. لذلك يكبر الربح بطريقتين: ارتفاع السوق و Net Inflows (صافي التدفقات الداخلة). النشاط خفيف على رأس المال وهوامشه عالية. الاتجاه العالمي هو الانتقال من Active (الإدارة النشطة) إلى Passive (الإدارة غير النشطة) الأرخص.',
          'An asset manager does not own the money it runs. It pools it in mutual funds, ETFs or segregated mandates and charges a management fee as a percentage of assets under management. Revenue equals AUM times the fee rate, so profit grows two ways: rising markets and net inflows. The business is capital-light with high margins. The global trend is a shift from active to cheaper passive management.'],
  rev: [['Management Fees|رسوم الإدارة', 78], ['Performance Fees|رسوم الأداء', 6], ['Technology & Data Services|خدمات التقنية والبيانات', 9], ['Distribution & Other|التوزيع وأخرى', 7]],
  A: [['Goodwill & Intangibles (Acquisitions)|الشهرة والأصول غير الملموسة', 40], ['Cash|النقد', 20], ['Seed Investments in Own Funds|استثمارات تأسيسية في صناديقها', 20], ['Fee Receivables|رسوم مستحقة القبض', 12], ['Other|أخرى', 8]],
  L: [['Accrued Compensation|تعويضات مستحقة', 15], ['Borrowings|قروض', 20], ['Other Liabilities|التزامات أخرى', 15], ['Shareholders’ Equity|حقوق المساهمين', 50]],
  product: ['الصندوق أو المحفظة. المستثمر يشتري وحدات، وأموال العملاء تبقى خارج ميزانية الشركة عند أمين حفظ مستقل.',
            'The fund or mandate. Investors buy units, and client money stays off the firm’s balance sheet with an independent custodian.'],
  div: {
    front: ['Portfolio Management|إدارة المحافظ', 'Buy-side Research|الأبحاث', 'Distribution / Institutional Sales|التوزيع والمبيعات المؤسسية', 'Product Development|تطوير المنتجات'],
    mid: ['Investment Risk|مخاطر الاستثمار', 'Performance & Attribution|قياس الأداء', 'Compliance|الالتزام'],
    back: ['Fund Operations & Accounting|عمليات ومحاسبة الصناديق', 'Dealing / Trading Desk|غرفة التنفيذ', 'IT|التقنية']
  },
  kpi: [
    ['AUM', 'Assets Under Management|الأصول المدارة', ['BlackRock: نحو 14 تريليون دولار نهاية 2025.', 'BlackRock: about $14 trillion at end-2025.']],
    ['Net Flows', 'Net Flows|صافي التدفقات', ['الاشتراكات ناقص الاستردادات. BlackRock: 698 مليار دولار في 2025.', 'Subscriptions minus redemptions. BlackRock: $698 billion in 2025.']],
    ['Fee Rate', 'Effective Fee Rate|متوسط نسبة الرسوم', ['الإيراد ÷ متوسط الأصول المدارة، ويُقاس بنقاط الأساس bps.', 'Revenue ÷ average AUM, measured in basis points.']],
    ['Op. Margin', 'Operating Margin|هامش الربح التشغيلي', ['غالباً 30–45% للشركات الكبيرة.', 'Often 30–45% for large managers.']],
    ['Alpha', 'Alpha|ألفا', ['العائد الزائد عن المؤشر المرجعي بعد تعديل المخاطر.', 'Return above the benchmark after adjusting for risk.']],
    ['TER', 'Total Expense Ratio|إجمالي نسبة المصاريف', ['كل ما يدفعه المستثمر سنوياً كنسبة من أصول الصندوق.', 'Everything the investor pays each year as a share of fund assets.']]
  ],
  risk: { credit: 0, market: 3, liq: 2, rate: 1, ops: 2, uw: 0, reg: 2 },
  killer: ['الخطر على العميل أكثر من الشركة. ما يقتل الشركة هو هبوط السوق مع استردادات كبيرة، أو أداء ضعيف مستمر، أو فضيحة تضرب السمعة.',
           'The risk sits mostly with the client. What kills the firm is a market fall with heavy redemptions, persistent poor performance, or a reputational scandal.'],
  reg: ['UCITS في أوروبا، و Investment Company Act 1940 في أمريكا. في السعودية: هيئة السوق المالية CMA ولائحة صناديق الاستثمار.',
        'UCITS in Europe and the Investment Company Act of 1940 in the US. In Saudi Arabia: the CMA and its Investment Funds Regulations.'],
  fs: [
    ['الميزانية صغيرة جداً مقارنة بالأصول المدارة، لأن أموال العملاء لا تظهر فيها.', 'The balance sheet is tiny next to AUM, because client money is not on it.'],
    ['الإيراد متكرر ويمكن توقعه: الأصول المدارة مضروبة في نسبة الرسوم.', 'Revenue is recurring and predictable: AUM times fee rate.'],
    ['أكبر مصروف هو التعويضات، ثم التوزيع والتقنية.', 'The largest cost is compensation, then distribution and technology.']
  ],
  val: ['P/E هو الأشهر، و EV/EBITDA مقبول هنا لأن الدين ليس مادة خام، ونسبة القيمة السوقية إلى الأصول المدارة للمقارنة السريعة.',
        'P/E is most common; EV/EBITDA works here because debt is not raw material; and market value as a percentage of AUM gives a quick comparison.'],
  ladder: ['Research Analyst|محلل أبحاث', 'Senior Analyst|محلل أول', 'Assistant Portfolio Manager|مساعد مدير محفظة', 'Portfolio Manager|مدير محفظة', 'Head of Asset Class|رئيس فئة أصول', 'CIO|رئيس الاستثمار'],
  certs: 'CFA · CME-1 · CAIA · CIPM',
  ex: { g: 'BlackRock · Vanguard · Fidelity · State Street · Amundi', s: ['الأهلي المالية · الراجحي المالية · الرياض المالية · جدوى للاستثمار · الإنماء للاستثمار', 'SNB Capital · Al Rajhi Capital · Riyad Capital · Jadwa Investment · Alinma Investment'] },
  crisis: { t: ['Woodford Equity Income Fund — يونيو 2019', 'Woodford Equity Income Fund — June 2019'],
    d: ['كان Neil Woodford من أشهر مديري الصناديق في بريطانيا. وضع جزءاً كبيراً من صندوقه، وحجمه 3.7 مليار جنيه، في أسهم شركات صغيرة وغير مدرجة يصعب بيعها، والصندوق يسمح بالاسترداد اليومي. لما ضعف الأداء وطلب المستثمرون أموالهم لم يستطع بيع الأصول بسرعة، فعُلّق الصندوق ثم صُفّي. الدرس: Liquidity Mismatch، أي وعد بسيولة يومية مقابل أصول غير سائلة.',
        'Neil Woodford was one of Britain’s best-known fund managers. He put much of his £3.7 billion fund into small and unlisted stocks that were hard to sell, while the fund offered daily dealing. When performance sagged and investors asked for their money, he could not sell fast enough; the fund was suspended and then wound up. The lesson: a liquidity mismatch, daily liquidity promised against illiquid assets.'] },
  quiz: [
    { q: ['صندوق يدير 10 مليارات ريال برسوم 0.5%. كم إيراده السنوي؟', 'A fund manages SAR 10 billion at a 0.5% fee. Annual revenue?'],
      o: [['5 ملايين', '5 million'], ['50 مليوناً', '50 million'], ['500 مليون', '500 million'], ['5 مليارات', '5 billion']], a: 1,
      w: ['10,000 مليون × 0.5% = 50 مليون ريال.', '10,000 million × 0.5% = SAR 50 million.'] },
    { q: ['لماذا ميزانية مدير الأصول صغيرة مقارنة بالأصول المدارة؟', 'Why is an asset manager’s balance sheet small relative to AUM?'],
      o: [['لأن الأرباح قليلة', 'Profits are low'], ['لأن أموال العملاء ليست ملك الشركة ولا تظهر في ميزانيتها', 'Client money is not the firm’s and stays off its balance sheet'], ['لأنها تخفي الأصول', 'It hides assets'], ['بسبب IFRS 17', 'Because of IFRS 17']], a: 1,
      w: ['الشركة وكيل. الأصول تخص الصناديق وعملاءها وتُحفظ عند أمين حفظ.', 'The firm is an agent. The assets belong to the funds and their clients and sit with a custodian.'] }
  ]
},
{
  id: 'hf', cat: 'inv', ab: 'HF', cfa: 'Alternative Investments · Derivatives',
  name: ['صناديق التحوط', 'Hedge Funds'], term: 'Hedge Funds|صناديق التحوط',
  line: ['صندوق خاص لمستثمرين مؤهلين، يستخدم البيع على المكشوف والرافعة والمشتقات ليربح في السوق الصاعد والهابط.',
         'A private fund for qualified investors that uses short selling, leverage and derivatives to profit in rising and falling markets.'],
  model: ['صندوق التحوط يستهدف Absolute Return (عائداً مطلقاً) بدل مجاراة مؤشر. هيكل الرسوم التقليدي "2 and 20": 2% رسوم إدارة و 20% من الأرباح فوق High-Water Mark (أعلى قيمة سابقة). الاستراتيجيات: Long/Short Equity، Global Macro، Event-Driven، Relative Value، Quant. يقترض من Prime Broker (الوسيط الرئيسي) لتكبير المراكز. المستثمرون يقبلون Lock-up (فترة حظر الاسترداد) و Gates (قيود على الاسترداد).',
          'A hedge fund targets absolute return instead of tracking an index. The classic fee is “2 and 20”: a 2% management fee and 20% of profits above the high-water mark. Strategies include long/short equity, global macro, event-driven, relative value and quant. It borrows from a prime broker to enlarge positions. Investors accept lock-ups and redemption gates.'],
  rev: [['Performance Fees (20%)|رسوم الأداء', 55], ['Management Fees (2%)|رسوم الإدارة', 45]],
  A: [['Long Positions (Equities, Bonds)|مراكز شراء', 55], ['Derivative Assets|أصول مشتقات', 15], ['Cash & Margin at Prime Broker|نقد وهامش لدى الوسيط الرئيسي', 20], ['Other|أخرى', 10]],
  L: [['Prime Broker Margin Loans|قروض الهامش', 35], ['Short Positions|مراكز بيع على المكشوف', 25], ['Derivative Liabilities|التزامات مشتقات', 5], ['Investors’ Capital (NAV)|رأس مال المستثمرين', 35]],
  product: ['حصة في الصندوق. ما يُباع فعلاً هو مهارة المدير وعائد لا يرتبط بالسوق.',
            'An interest in the fund. What is really sold is the manager’s skill and returns that do not track the market.'],
  div: {
    front: ['Portfolio Managers|مديرو المحافظ', 'Analysts|المحللون', 'Traders|المتداولون', 'Investor Relations|علاقات المستثمرين'],
    mid: ['Risk Management|إدارة المخاطر', 'Quant Research|الأبحاث الكمية', 'Compliance|الالتزام'],
    back: ['Fund Administration (often outsourced)|إدارة الصندوق', 'Operations|العمليات', 'Technology|التقنية']
  },
  kpi: [
    ['Sharpe', 'Sharpe Ratio|نسبة شارب', ['(عائد الصندوق − العائد الخالي من المخاطر) ÷ الانحراف المعياري. فوق 1 جيد.', '(Fund return − risk-free rate) ÷ standard deviation. Above 1 is good.']],
    ['Max DD', 'Maximum Drawdown|أقصى تراجع', ['أكبر هبوط من قمة إلى قاع.', 'The largest fall from peak to trough.']],
    ['Gross / Net', 'Gross & Net Exposure|التعرض الإجمالي والصافي', ['الإجمالي = شراء + بيع. الصافي = شراء − بيع.', 'Gross = long + short. Net = long − short.']],
    ['Alpha', 'Alpha|ألفا', ['العائد الذي لا يفسره تحرك السوق.', 'Return not explained by market moves.']],
    ['AUM', 'Assets Under Management|الأصول المدارة', ['Bridgewater و Citadel و Millennium من أكبر الصناديق.', 'Bridgewater, Citadel and Millennium are among the largest.']]
  ],
  risk: { credit: 1, market: 3, liq: 3, rate: 2, ops: 2, uw: 0, reg: 1 },
  killer: ['الرافعة مع Margin Call (طلب تغطية الهامش) في سوق غير سائل: يُجبر الصندوق على البيع بأسعار منهارة.',
           'Leverage plus a margin call in an illiquid market: the fund is forced to sell at collapsing prices.'],
  reg: ['تنظيم أخف من الصناديق العامة: Form PF في أمريكا و AIFMD في أوروبا. في السعودية تُطرح كصناديق خاصة مرخصة من CMA.',
        'Lighter regulation than public funds: Form PF in the US and AIFMD in Europe. In Saudi Arabia they are offered as private funds licensed by the CMA.'],
  fs: [
    ['الصندوق يُقاس بصافي قيمة الأصول NAV وليس بالأرباح المحاسبية.', 'A fund is measured by net asset value, not accounting profit.'],
    ['رسوم الأداء متقلبة جداً، وقد تكون صفراً في سنة سيئة.', 'Performance fees are highly volatile and can be zero in a bad year.'],
    ['شركة الإدارة كيان منفصل عن الصندوق وميزانيتها صغيرة.', 'The management company is separate from the fund and has a small balance sheet.']
  ],
  val: ['شركات الإدارة المدرجة تُقيَّم بـ P/E، مع مضاعف أعلى لرسوم الإدارة وأقل لرسوم الأداء لتقلبها.',
        'Listed managers are valued on P/E, with a higher multiple on management fees and a lower one on volatile performance fees.'],
  ladder: ['Junior Analyst|محلل مبتدئ', 'Analyst|محلل', 'Senior Analyst / Sector Head|محلل أول / رئيس قطاع', 'Portfolio Manager|مدير محفظة', 'Partner / CIO|شريك / رئيس الاستثمار'],
  certs: 'CFA · CAIA · CQF · FRM',
  ex: { g: 'Bridgewater · Citadel · Millennium · Renaissance · D.E. Shaw', s: ['حضور محدود. الاستراتيجيات تُقدَّم عبر صناديق خاصة ومكاتب عائلية', 'Limited presence. Strategies are offered through private funds and family offices'] },
  crisis: { t: ['Long-Term Capital Management — 1998', 'Long-Term Capital Management — 1998'],
    d: ['صندوق أسسه متداولون مشهورون ومعهم اثنان من حملة نوبل. كان رأس ماله 4.7 مليار دولار وأصوله نحو 125 مليار دولار، أي رافعة 25 مرة، ومشتقات قيمتها الاسمية فوق تريليون دولار. راهن على تقارب فروق أسعار السندات. لما تخلفت روسيا عن السداد في أغسطس 1998 اتسعت الفروق بدل أن تضيق وخسر الصندوق معظم رأس ماله في أسابيع. نظّم الفيدرالي إنقاذاً بـ 3.6 مليار دولار من 14 بنكاً. الدرس: نموذج صحيح على المدى الطويل لا ينفعك إذا أفلست قبل أن يتحقق.',
        'A fund founded by star traders with two Nobel laureates. It held $4.7 billion of capital against about $125 billion of assets, 25x leverage, plus derivatives with over $1 trillion notional. It bet that bond spreads would converge. When Russia defaulted in August 1998, spreads widened instead and most of the capital was lost in weeks. The Fed arranged a $3.6 billion rescue by 14 banks. The lesson: a model that is right in the long run does not help if you go bust first.'] },
  quiz: [
    { q: ['صندوق "2 and 20" حجمه 100 مليون وحقق ربحاً 10%. كم إجمالي الرسوم تقريباً؟', 'A $100m “2 and 20” fund earns 10%. Roughly what are total fees?'],
      o: [['2 مليون', '2 million'], ['4 ملايين', '4 million'], ['10 ملايين', '10 million'], ['20 مليوناً', '20 million']], a: 1,
      w: ['2% × 100 = 2 مليون إدارة، و 20% × 10 ملايين ربح = 2 مليون أداء. المجموع 4 ملايين.', '2% × 100 = 2 million management, plus 20% × 10 million profit = 2 million performance. Total 4 million.'] },
    { q: ['ما وظيفة High-Water Mark؟', 'What does a high-water mark do?'],
      o: [['يحدد الحد الأقصى للرافعة', 'Caps leverage'], ['يمنع أخذ رسوم أداء قبل تعويض الخسائر السابقة', 'Stops performance fees until past losses are recovered'], ['يحدد الحد الأدنى للاستثمار', 'Sets the minimum investment'], ['يضمن رأس المال', 'Guarantees capital']], a: 1,
      w: ['المدير لا يأخذ رسوم أداء إلا إذا تجاوزت قيمة الوحدة أعلى مستوى وصلته سابقاً.', 'The manager earns performance fees only once the unit value passes its previous peak.'] }
  ]
},
{
  id: 'pe', cat: 'inv', ab: 'PE', cfa: 'Alternative Investments · Corporate Issuers',
  name: ['الملكية الخاصة ورأس المال الجريء', 'Private Equity & Venture Capital'], term: 'Private Equity & Venture Capital|الملكية الخاصة ورأس المال الجريء',
  line: ['تشتري شركات غير مدرجة، تحسّنها أو تنمّيها، ثم تبيعها بعد 3 إلى 7 سنوات.',
         'It buys unlisted companies, improves or grows them, and sells after three to seven years.'],
  model: ['مدير الصندوق اسمه General Partner (الشريك العام)، ويجمع التزامات من Limited Partners (الشركاء المحدودين) مثل صناديق التقاعد والصناديق السيادية. عمر الصندوق نحو 10 سنوات. الرسوم: نحو 2% إدارة و 20% من الأرباح تسمى Carried Interest، بعد أن يحصل المستثمرون على Hurdle Rate (عائد أدنى) غالباً 8%. في Leveraged Buyout (الاستحواذ بالرافعة) يُموَّل الشراء بدين كبير تسدده الشركة المستحوذ عليها من تدفقاتها. مصادر العائد ثلاثة: نمو الأرباح، ارتفاع المضاعف، وسداد الدين. أما Venture Capital فيستثمر حصص أقلية في شركات ناشئة على جولات Seed و Series A و B، ويتوقع أن عدداً قليلاً من الاستثمارات يعوّض خسائر الباقي.',
          'The fund manager is the general partner and raises commitments from limited partners such as pension and sovereign funds. A fund lasts about 10 years. Fees: about 2% management and 20% of profits, called carried interest, after investors receive a hurdle rate, often 8%. In a leveraged buyout the purchase is funded with heavy debt that the acquired company repays from its cash flow. Returns come from three sources: earnings growth, multiple expansion and debt paydown. Venture capital takes minority stakes in start-ups across seed, Series A and B rounds, expecting a few winners to cover the losses on the rest.'],
  rev: [['Management Fees|رسوم الإدارة', 50], ['Carried Interest|حصة الأرباح', 40], ['Transaction & Monitoring Fees|رسوم الصفقات والمتابعة', 10]],
  A: [['Portfolio Companies (at Fair Value)|شركات المحفظة (بالقيمة العادلة)', 88], ['Cash|النقد', 8], ['Other|أخرى', 4]],
  L: [['Fund-level Credit Lines|تسهيلات على مستوى الصندوق', 8], ['Carry Payable & Other|حصة أرباح مستحقة وأخرى', 4], ['LP & GP Capital|رأس مال الشركاء', 88]],
  product: ['صندوق مغلق. المستثمر يلتزم بمبلغ ويُستدعى منه تدريجياً عبر Capital Calls (طلبات رأس المال)، ولا يستطيع الخروج قبل التصفية.',
            'A closed-end fund. The investor commits a sum that is drawn through capital calls and cannot exit before liquidation.'],
  div: {
    front: ['Deal Origination|استقطاب الصفقات', 'Investment Team (Due Diligence, Modelling)|فريق الاستثمار', 'Portfolio Operations / Value Creation|تطوير شركات المحفظة', 'Fundraising & Investor Relations|جمع الأموال وعلاقات المستثمرين'],
    mid: ['Legal & Structuring|القانونية والهيكلة', 'Valuation|التقييم', 'Compliance|الالتزام'],
    back: ['Fund Finance & Accounting|مالية ومحاسبة الصندوق', 'Operations|العمليات']
  },
  kpi: [
    ['IRR', 'Internal Rate of Return|معدل العائد الداخلي', ['العائد السنوي مع مراعاة توقيت التدفقات. الصناديق الجيدة تستهدف 15–25%.', 'Annualised return that reflects cash flow timing. Good funds target 15–25%.']],
    ['MOIC', 'Multiple on Invested Capital|مضاعف رأس المال المستثمر', ['إجمالي القيمة ÷ المبلغ المستثمر. 2.5x يعني أن كل ريال صار 2.5.', 'Total value ÷ amount invested. 2.5x means each riyal became 2.5.']],
    ['DPI', 'Distributions to Paid-In|التوزيعات إلى المدفوع', ['النقد المُعاد فعلاً للمستثمرين ÷ ما دفعوه.', 'Cash actually returned to investors ÷ what they paid in.']],
    ['TVPI', 'Total Value to Paid-In|القيمة الإجمالية إلى المدفوع', ['التوزيعات + القيمة المتبقية ÷ المدفوع.', 'Distributions plus residual value ÷ paid-in capital.']],
    ['Dry Powder', 'Dry Powder|رأس المال غير المستثمر', ['التزامات لم تُستدعَ بعد.', 'Commitments not yet drawn.']],
    ['Net Debt/EBITDA', 'Leverage Multiple|مضاعف الرافعة', ['دين شركة المحفظة ÷ أرباحها قبل الفوائد والضرائب والإهلاك. في LBO غالباً 4–7 مرات.', 'Portfolio company debt ÷ EBITDA. Often 4–7x in an LBO.']]
  ],
  risk: { credit: 2, market: 3, liq: 3, rate: 3, ops: 2, uw: 0, reg: 1 },
  killer: ['دفع سعر مرتفع بدين ثقيل ثم يأتي ركود أو ترتفع الفائدة، فلا تكفي تدفقات الشركة لخدمة الدين ولا يوجد مشترٍ للخروج.',
           'Paying a high price with heavy debt, then a recession or higher rates arrive: cash flow cannot service the debt and there is no buyer at exit.'],
  reg: ['تنظيم خفيف نسبياً لأن المستثمرين مؤسسات. في السعودية: صناديق خاصة مرخصة من CMA، مع دعم من PIF وشركة SVC وصندوق الصناديق "جدا".',
        'Relatively light regulation because investors are institutions. In Saudi Arabia: private funds licensed by the CMA, supported by PIF, SVC and the Jada fund of funds.'],
  fs: [
    ['القيمة تقديرية بالقيمة العادلة حتى البيع، فالأرباح على الورق تختلف عن المحققة.', 'Values are fair-value estimates until sale, so paper gains differ from realised ones.'],
    ['J-Curve: العائد سالب في السنوات الأولى بسبب الرسوم ثم يرتفع مع التخارجات.', 'The J-curve: returns are negative early on because of fees, then rise with exits.'],
    ['قراءة قوائم شركة المحفظة هي العمل الأساسي: EBITDA و Free Cash Flow والقدرة على خدمة الدين.', 'Reading the portfolio company’s statements is the core job: EBITDA, free cash flow and debt service capacity.']
  ],
  val: ['LBO Model يحدد أعلى سعر يمكن دفعه لتحقيق IRR المستهدف. ويُستخدم EV/EBITDA و DCF. في VC يُقيَّم بطريقة Pre-money و Post-money.',
        'An LBO model sets the highest price that still delivers the target IRR. EV/EBITDA and DCF are used. Venture capital values on a pre-money and post-money basis.'],
  ladder: ['Analyst|محلل', 'Associate|مشارك', 'Senior Associate|مشارك أول', 'Vice President|نائب رئيس', 'Principal / Director|مدير', 'Partner / Managing Director|شريك'],
  certs: 'CFA · CAIA · LBO Modelling · MBA',
  ex: { g: 'Blackstone · KKR · Carlyle · Apollo · Sequoia · Andreessen Horowitz', s: ['صندوق الاستثمارات العامة PIF · سنابل للاستثمار · جدوى · STV · الشركة السعودية للاستثمار الجريء SVC · رائد فنتشرز', 'PIF · Sanabil Investments · Jadwa · STV · Saudi Venture Capital Company (SVC) · Raed Ventures'] },
  crisis: { t: ['TXU / Energy Future Holdings — 2007 إلى 2014', 'TXU / Energy Future Holdings — 2007 to 2014'],
    d: ['أكبر صفقة LBO في التاريخ: اشترت KKR و TPG و Goldman Sachs شركة الكهرباء TXU بنحو 45 مليار دولار عام 2007 بدين ضخم. كان الرهان أن أسعار الغاز الطبيعي سترتفع. حدث العكس مع ثورة الغاز الصخري، فهبطت أسعار الكهرباء ولم تعد الأرباح تغطي الفوائد. أفلست الشركة في أبريل 2014. الدرس: الدين الثقيل يحوّل رهاناً خاطئاً واحداً على سعر سلعة إلى إفلاس.',
        'The largest LBO in history: KKR, TPG and Goldman Sachs bought the utility TXU for about $45 billion in 2007 with enormous debt. The bet was that natural gas prices would rise. The shale boom did the opposite, power prices fell and earnings no longer covered interest. The company filed for bankruptcy in April 2014. The lesson: heavy debt turns one wrong commodity call into insolvency.'] },
  quiz: [
    { q: ['استثمر صندوق 100 مليون واستعاد 250 مليوناً بعد 5 سنوات. ما MOIC؟', 'A fund invests 100 million and gets back 250 million after 5 years. What is the MOIC?'],
      o: [['1.5x', '1.5x'], ['2.5x', '2.5x'], ['20%', '20%'], ['150%', '150%']], a: 1,
      w: ['250 ÷ 100 = 2.5x. أما IRR فنحو 20% سنوياً لأن (2.5)^(1/5) − 1 ≈ 20%.', '250 ÷ 100 = 2.5x. The IRR is about 20% a year because 2.5^(1/5) − 1 ≈ 20%.'] },
    { q: ['أي مما يلي ليس مصدر عائد في LBO؟', 'Which is not a source of return in an LBO?'],
      o: [['نمو EBITDA', 'EBITDA growth'], ['ارتفاع مضاعف الخروج', 'Multiple expansion'], ['سداد الدين', 'Debt paydown'], ['رسوم الإدارة', 'Management fees']], a: 3,
      w: ['رسوم الإدارة دخل لمدير الصندوق وتكلفة على المستثمر، وليست مصدراً لعائد الصفقة.', 'Management fees are income for the manager and a cost to investors, not a source of deal return.'] }
  ]
}
];
