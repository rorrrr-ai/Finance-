/* Sectors, business models, Saudi directory, detailed ladders, day-in-the-life. Strings are [ar, en]; terms are "English|عربي". */

/* ---------- Sectors ---------- */
window.SECTORS = [
  { c: 'emerald', t: 'Energy|الطاقة', how: ['تستخرج النفط والغاز وتكررهما وتبيعهما. الربح يتبع سعر النفط مباشرة، والتكاليف معظمها ثابت.', 'Extracts, refines and sells oil and gas. Profit follows the oil price directly, and costs are mostly fixed.'], kpi: 'Production (mboe/d) · Realised price · Lifting cost · Reserves life · Free cash flow · Gearing', sa: 'أرامكو السعودية · أديس القابضة · الحفر العربية · البحري · الدريس', gl: 'ExxonMobil · Shell · Chevron · TotalEnergies' },
  { c: 'coral', t: 'Materials|المواد الأساسية', how: ['بتروكيماويات، تعدين، أسمدة، أسمنت. تبيع سلعاً سعرها عالمي، فالهامش هو الفرق بين سعر المنتج وتكلفة اللقيم.', 'Petrochemicals, mining, fertilisers, cement. It sells globally priced commodities, so the margin is the spread between product price and feedstock cost.'], kpi: 'Product spreads · Utilisation rate · Feedstock cost · EBITDA per tonne · Net debt / EBITDA', sa: 'سابك · سابك للمغذيات الزراعية · معادن · سبكيم · ينساب · أسمنت السعودية', gl: 'BASF · Dow · Rio Tinto · LyondellBasell' },
  { c: 'blue', t: 'Banks|البنوك', how: ['تجمع الودائع وتقرضها وتربح الهامش. أرباحها ترتفع مع ارتفاع الفائدة ونمو الائتمان.', 'Gathers deposits, lends them and earns the margin. Profits rise with interest rates and credit growth.'], kpi: 'NIM · ROE · Cost-to-income · Cost of risk · CET1 · NPL · Loan growth', sa: 'الراجحي · الأهلي السعودي · الرياض · ساب · الإنماء · السعودي الفرنسي · العربي الوطني', gl: 'JPMorgan · HSBC · ICBC · BNP Paribas' },
  { c: 'magenta', t: 'Telecommunication Services|الاتصالات', how: ['اشتراكات شهرية للجوال والإنترنت. إيراد متكرر ونفقات رأسمالية عالية على الشبكات.', 'Monthly mobile and internet subscriptions. Recurring revenue with heavy network capital spending.'], kpi: 'ARPU · Subscribers · Churn · EBITDA margin · CapEx intensity · Dividend yield', sa: 'stc · موبايلي · زين السعودية', gl: 'Verizon · Vodafone · China Mobile · Deutsche Telekom' },
  { c: 'cyan', t: 'Utilities|المرافق العامة', how: ['كهرباء ومياه بعقود طويلة أو تعرفة منظمة. عائد مستقر، دين مرتفع، ونمو مرتبط بالاستثمار في الأصول.', 'Power and water under long contracts or regulated tariffs. Steady returns, high debt, and growth tied to asset investment.'], kpi: 'Regulated asset base · Allowed return · Capacity (MW) · PPA tenor · Net debt / EBITDA', sa: 'السعودية للكهرباء · أكوا باور · مرافق · غازكو', gl: 'NextEra · Enel · Iberdrola · National Grid' },
  { c: 'gold', t: 'Food & Beverages|الأغذية والمشروبات', how: ['تنتج وتبيع سلعاً يومية بهوامش متوسطة. الطلب ثابت، والخطر في تكلفة المدخلات.', 'Makes and sells everyday goods at moderate margins. Demand is steady; the risk is input costs.'], kpi: 'Gross margin · Volume vs price growth · Input costs · Market share · Inventory days', sa: 'المراعي · صافولا · سدافكو · نادك · التنمية الغذائية', gl: 'Nestlé · Danone · PepsiCo · Mondelez' },
  { c: 'emerald', t: 'Consumer Staples Retail|تجزئة السلع الأساسية', how: ['سوبرماركت وصيدليات. هامش رفيع ودوران سريع، والنقد يُقبض من العميل قبل الدفع للمورد.', 'Supermarkets and pharmacies. Thin margins and fast turnover, with cash collected from shoppers before suppliers are paid.'], kpi: 'Like-for-like sales · Sales per sqm · Gross margin · Inventory days · Store count', sa: 'أسواق العثيم · بن داود القابضة · النهدي الطبية · الدواء', gl: 'Walmart · Costco · Tesco · CVS' },
  { c: 'magenta', t: 'Consumer Discretionary Retail|تجزئة السلع الكمالية', how: ['إلكترونيات، أزياء، مكتبات. المبيعات تتبع دخل المستهلك والمواسم، والتجارة الإلكترونية تضغط على الهوامش.', 'Electronics, fashion, books. Sales follow consumer income and seasons, and e-commerce squeezes margins.'], kpi: 'Same-store sales · Online share · Gross margin · Inventory turnover · Rent to sales', sa: 'جرير · إكسترا · سينومي ريتيل · ساكو', gl: 'Amazon · Inditex (Zara) · Home Depot · IKEA' },
  { c: 'cyan', t: 'Health Care|الرعاية الصحية', how: ['مستشفيات وعيادات وأدوية. الإيراد من شركات التأمين والحكومة والأفراد. نمو قوي مع التأمين الإلزامي وزيادة السكان.', 'Hospitals, clinics and pharmaceuticals. Revenue comes from insurers, government and individuals. Strong growth from mandatory insurance and population growth.'], kpi: 'Beds · Occupancy · Revenue per patient · Payor mix · Receivable days · EBITDA margin', sa: 'مجموعة د. سليمان الحبيب · المواساة · دله الصحية · الحمادي · سبيماكو الدوائية', gl: 'HCA Healthcare · UnitedHealth · Novo Nordisk · Pfizer' },
  { c: 'gold', t: 'Insurance|التأمين', how: ['أقساط مقدماً ومطالبات لاحقاً، مع دخل استثمار. السوق السعودي يغلب عليه الصحي والمركبات.', 'Premiums up front and claims later, plus investment income. The Saudi market is dominated by health and motor.'], kpi: 'Combined ratio · Loss ratio · GWP growth · Solvency ratio · Investment yield', sa: 'التعاونية · بوبا العربية · ميدغلف · الراجحي تكافل · الإعادة السعودية', gl: 'Allianz · AXA · Chubb · Munich Re' },
  { c: 'coral', t: 'Real Estate & REITs|العقار وصناديق الريت', how: ['مطورون يبيعون وحدات (غالباً على الخارطة)، وملاك يؤجرون. حساس جداً للفائدة.', 'Developers sell units (often off-plan) and landlords lease. Highly sensitive to interest rates.'], kpi: 'Pre-sales · Land bank · NAV · Occupancy · FFO · Loan-to-value', sa: 'دار الأركان · رتال · سينومي سنترز · جبل عمر · إعمار المدينة الاقتصادية · الرياض ريت', gl: 'Prologis · Simon Property · Vonovia · Emaar' },
  { c: 'blue', t: 'Transportation & Logistics|النقل والخدمات اللوجستية', how: ['طيران، شحن، تأجير سيارات، خدمات أرضية. تكاليف ثابتة عالية، فالربح يعتمد على نسبة الإشغال.', 'Airlines, shipping, car rental, ground services. High fixed costs, so profit depends on utilisation.'], kpi: 'Load factor · Yield · Fleet utilisation · Cost per unit · Fuel cost share', sa: 'سال للخدمات اللوجستية · طيران ناس · البحري · لومي · بدجت السعودية · ذيب', gl: 'DHL · Maersk · Ryanair · UPS' },
  { c: 'magenta', t: 'Software & Technology Services|البرمجيات والخدمات التقنية', how: ['منصات رقمية وخدمات تقنية معظم عملائها جهات حكومية وشركات كبرى. هوامش عالية ورأس مال قليل.', 'Digital platforms and IT services, mostly for government and large companies. High margins and little capital.'], kpi: 'Recurring revenue share · Backlog · Revenue per employee · EBITDA margin · Client concentration', sa: 'علم · حلول stc · توبي (2P) · MIS', gl: 'Microsoft · Accenture · SAP · Salesforce' },
  { c: 'gold', t: 'Capital Goods & Industrials|السلع الرأسمالية والصناعة', how: ['كابلات، مواد بناء، معدات، مقاولات. الطلب يتبع الإنفاق على المشاريع الكبرى.', 'Cables, building materials, equipment, contracting. Demand follows spending on large projects.'], kpi: 'Order backlog · Book-to-bill · Gross margin · Working capital days · Capacity utilisation', sa: 'كابلات الرياض · الخريف لتقنية المياه · أسترا الصناعية · بوان · الخزف السعودي', gl: 'Siemens · Caterpillar · Schneider Electric · ABB' },
  { c: 'coral', t: 'Consumer Services|الخدمات الاستهلاكية', how: ['مطاعم، أندية رياضية، تعليم، سفر. تنمو بفتح فروع جديدة، والنجاح يُقاس بربحية الفرع الواحد.', 'Restaurants, gyms, education, travel. Growth comes from new outlets, and success is measured by profit per outlet.'], kpi: 'Same-store sales · Outlet count · Unit economics · Payback period · Members', sa: 'أمريكانا للمطاعم · العمار الغذائية · هرفي · لجام للرياضة · سيرا · عطاء التعليمية', gl: 'McDonald’s · Starbucks · Booking · Planet Fitness' },
  { c: 'blue', t: 'Financial Services|الخدمات المالية', how: ['بورصات، شركات وساطة، تمويل، وشركات قابضة استثمارية. الدخل يتبع نشاط التداول وأسعار الأصول.', 'Exchanges, brokers, finance companies and investment holdings. Income follows trading activity and asset prices.'], kpi: 'ADTV · AUM · Net financing margin · Operating margin · NAV discount', sa: 'مجموعة تداول السعودية · دراية المالية · المملكة القابضة · النايفات للتمويل · أملاك العالمية', gl: 'CME Group · Blackstone · Charles Schwab · Berkshire Hathaway' },
  { c: 'cyan', t: 'Media & Entertainment|الإعلام والترفيه', how: ['إعلانات واشتراكات ومحتوى. قطاع ينمو في السعودية مع فتح السينما والترفيه.', 'Advertising, subscriptions and content. A growing sector in Saudi Arabia as cinema and entertainment open up.'], kpi: 'Subscribers · Ad revenue · Content cost · ARPU · Churn', sa: 'مجموعة MBC · المجموعة السعودية للأبحاث والإعلام SRMG', gl: 'Netflix · Disney · Spotify · Warner Bros. Discovery' }
];

/* ---------- Business models ---------- */
window.BMODELS = [
  { t: 'Spread|هامش الفرق', how: ['تقترض بسعر وتقرض بسعر أعلى. الربح هو الفرق مضروباً في الحجم.', 'Borrow at one rate and lend at a higher one. Profit is the spread times the volume.'], m: 'NIM · Cost of funds', risk: ['التعثر وهروب الودائع.', 'Defaults and deposit flight.'], gl: 'JPMorgan · HSBC', sa: 'الراجحي · الأهلي السعودي' },
  { t: 'Float|أموال الغير المؤقتة', how: ['تقبض النقد مقدماً وتدفع لاحقاً، وتستثمره في الفترة بينهما.', 'Collect cash up front, pay out later, and invest it in between.'], m: 'Combined ratio · Investment yield', risk: ['تسعير الخطر بأقل من حقيقته.', 'Underpricing the risk.'], gl: 'Berkshire Hathaway · Allianz', sa: 'التعاونية · بوبا العربية' },
  { t: 'Fee on Assets|رسوم على الأصول', how: ['نسبة صغيرة سنوية على أموال تديرها للآخرين.', 'A small annual percentage on money managed for others.'], m: 'AUM · Fee rate · Net flows', risk: ['هبوط الأسواق والاستردادات.', 'Falling markets and redemptions.'], gl: 'BlackRock · Vanguard', sa: 'الأهلي المالية · الراجحي المالية' },
  { t: 'Toll / Network|رسم العبور والشبكة', how: ['تملك بنية يمر عليها الجميع وتأخذ رسماً صغيراً على كل عملية. كل مستخدم جديد يزيد قيمة الشبكة.', 'Own infrastructure everyone must use and take a small fee per transaction. Each new user raises the network’s value.'], m: 'Volume · Take rate · Operating margin', risk: ['التنظيم وبدائل تتجاوز الشبكة.', 'Regulation and alternatives that bypass the network.'], gl: 'Visa · Mastercard · CME', sa: 'مجموعة تداول · مدى' },
  { t: 'Subscription|الاشتراك', how: ['دفعة شهرية أو سنوية متكررة. الإيراد متوقع، والمهم الاحتفاظ بالعميل.', 'A recurring monthly or annual payment. Revenue is predictable; keeping the customer is what matters.'], m: 'ARR / MRR · Churn · LTV / CAC', risk: ['ارتفاع معدل الإلغاء.', 'Rising churn.'], gl: 'Netflix · Microsoft 365 · Spotify', sa: 'stc · لجام (وقت اللياقة) · شاهد' },
  { t: 'Marketplace / Platform|المنصة والسوق الإلكتروني', how: ['تجمع البائع والمشتري وتأخذ عمولة، دون أن تملك البضاعة.', 'Bring buyer and seller together and take a commission, without owning the goods.'], m: 'GMV · Take rate · Active users', risk: ['حرق النقد لبناء طرفي السوق، وخروج المستخدمين للتعامل المباشر.', 'Cash burn to build both sides of the market, and users dealing directly.'], gl: 'Amazon Marketplace · Uber · Airbnb', sa: 'جاهز · حراج · نون' },
  { t: 'Razor & Blade|الشفرة والموس', how: ['تبيع الجهاز بسعر منخفض وتربح من المستهلكات المتكررة.', 'Sell the device cheaply and profit from recurring consumables.'], m: 'Installed base · Attach rate', risk: ['بدائل متوافقة أرخص.', 'Cheaper compatible substitutes.'], gl: 'Gillette · HP (ink) · Nespresso · PlayStation', sa: 'أجهزة نقاط البيع مع رسوم العمليات' },
  { t: 'Freemium|المجاني والمدفوع', how: ['نسخة مجانية تجذب المستخدمين، ونسبة صغيرة منهم تدفع للنسخة الكاملة.', 'A free tier attracts users, and a small share pay for the full version.'], m: 'Conversion rate · Paying users', risk: ['تكلفة خدمة المستخدمين المجانيين.', 'The cost of serving free users.'], gl: 'Spotify · LinkedIn · Zoom · Dropbox', sa: 'تطبيقات الاستثمار والمحافظ الرقمية' },
  { t: 'Franchise|الامتياز التجاري', how: ['صاحب العلامة يمنح حق استخدامها مقابل رسوم ونسبة من المبيعات، والمشغّل يتحمل الاستثمار.', 'The brand owner licenses the name for fees and a share of sales, while the operator carries the investment.'], m: 'System sales · Royalty rate · Unit count', risk: ['ضعف جودة المشغّلين يضر العلامة.', 'Weak operators damage the brand.'], gl: 'McDonald’s · Marriott · Subway', sa: 'العمار الغذائية (دومينوز) · أمريكانا (KFC) · هرفي' },
  { t: 'Asset-light|خفيف الأصول', how: ['تملك العلامة والتصميم والعميل، وتترك التصنيع أو الأصول لغيرك. عائد مرتفع على رأس المال.', 'Own the brand, design and customer, and leave manufacturing or assets to others. High return on capital.'], m: 'ROIC · CapEx / Sales', risk: ['الاعتماد على شركاء لا تتحكم بهم.', 'Dependence on partners you do not control.'], gl: 'Apple · Nike · Airbnb', sa: 'جاهز · علم' },
  { t: 'Vertical Integration|التكامل الرأسي', how: ['تملك السلسلة من المادة الخام إلى العميل. تتحكم بالجودة والتكلفة وتحتاج رأس مال كبيراً.', 'Own the chain from raw material to customer. You control quality and cost but need heavy capital.'], m: 'Gross margin · CapEx · Asset turnover', risk: ['أصول ثقيلة يصعب تعديلها عند تغير السوق.', 'Heavy assets that are hard to adjust when the market shifts.'], gl: 'Tesla · Zara (Inditex) · ExxonMobil', sa: 'المراعي · أرامكو' },
  { t: 'Low-cost Leader|قائد التكلفة المنخفضة', how: ['أقل تكلفة في الصناعة تسمح بأقل سعر. الربح من الحجم.', 'The lowest cost in the industry allows the lowest price. Profit comes from volume.'], m: 'Cost per unit · Load factor · Volume', risk: ['حرب أسعار أو ارتفاع تكلفة لا يمكن تمريرها.', 'A price war, or cost rises that cannot be passed on.'], gl: 'Ryanair · Walmart · Costco · IKEA', sa: 'طيران ناس · طيران أديل · أسواق العثيم' },
  { t: 'Commodity Producer|منتج السلع الأولية', how: ['تبيع سلعة سعرها عالمي لا تتحكم به. الميزة الوحيدة الدائمة هي تكلفة إنتاج أقل من المنافسين.', 'Sell a commodity whose price you do not control. The only lasting edge is a lower production cost than rivals.'], m: 'Position on cost curve · Realised price', risk: ['دورات الأسعار.', 'Price cycles.'], gl: 'Rio Tinto · ExxonMobil · Dow', sa: 'أرامكو · معادن · سابك' },
  { t: 'Regulated / Contracted|المنظم وطويل الأجل', how: ['إيراد مضمون بتعرفة حكومية أو عقد شراء طويل الأجل (PPA). عائد منخفض ومستقر يسمح بدين مرتفع.', 'Revenue secured by a government tariff or a long-term purchase agreement. A low, steady return that supports high debt.'], m: 'Allowed return · Contract tenor', risk: ['تغيير التعرفة وارتفاع الفائدة.', 'Tariff changes and rising rates.'], gl: 'NextEra · National Grid · Enel', sa: 'السعودية للكهرباء · أكوا باور' },
  { t: 'Advertising|الإعلانات', how: ['الخدمة مجانية للمستخدم، والمعلن يدفع للوصول إليه.', 'The service is free to users, and advertisers pay to reach them.'], m: 'Daily active users · ARPU · Ad load', risk: ['دورة الإنفاق الإعلاني وقوانين الخصوصية.', 'The ad spending cycle and privacy rules.'], gl: 'Google · Meta · Snap', sa: 'مجموعة MBC · SRMG' },
  { t: 'Ecosystem / Lock-in|المنظومة المغلقة', how: ['منتجات وخدمات مترابطة تجعل الخروج مكلفاً، فيشتري العميل أكثر ويبقى أطول.', 'Linked products and services make leaving costly, so the customer buys more and stays longer.'], m: 'Installed base · Services share · Retention', risk: ['دعاوى الاحتكار.', 'Antitrust action.'], gl: 'Apple · Google · Microsoft · Tencent', sa: 'stc (اتصالات، stc bank، حلول)' },
  { t: 'Licensing / IP|الترخيص والملكية الفكرية', how: ['تبتكر مرة وتؤجر الحق مرات. تكلفة النسخة الإضافية قريبة من الصفر.', 'Invent once and license many times. The cost of an extra copy is close to zero.'], m: 'Royalty revenue · R&D / Sales', risk: ['انتهاء براءات الاختراع.', 'Patent expiry.'], gl: 'Qualcomm · Arm · Disney · Pfizer', sa: 'علم (منصات حكومية رقمية)' },
  { t: 'Leasing / Rental|التأجير', how: ['تشتري الأصل وتؤجره مرات، ثم تبيعه مستعملاً. الربح من الفرق بين الإيجار وتكلفة التمويل والإهلاك.', 'Buy the asset, rent it out repeatedly, then sell it used. Profit is rent less funding cost and depreciation.'], m: 'Fleet utilisation · Residual value', risk: ['هبوط قيمة الأصل المستعمل.', 'A fall in the used asset’s value.'], gl: 'United Rentals · AerCap · Hertz', sa: 'لومي · بدجت السعودية · ذيب' },
  { t: 'Holding Company|الشركة القابضة', how: ['تملك حصصاً في شركات عديدة وتوزع رأس المال بينها. قيمتها مجموع حصصها، وغالباً تتداول بخصم عنه.', 'Own stakes in many companies and allocate capital among them. Its value is the sum of its stakes, and it often trades at a discount to that.'], m: 'NAV · Discount to NAV', risk: ['سوء توزيع رأس المال.', 'Poor capital allocation.'], gl: 'Berkshire Hathaway · SoftBank · Investor AB', sa: 'المملكة القابضة · صافولا · PIF' },
  { t: 'Off-plan Development|البيع على الخارطة', how: ['المطور يبيع الوحدة قبل بنائها ويستخدم دفعات العملاء لتمويل البناء.', 'The developer sells a unit before building it and uses customer instalments to fund construction.'], m: 'Pre-sales · Collection rate · Gross margin', risk: ['تأخر التسليم وضعف الطلب.', 'Delivery delays and weak demand.'], gl: 'Emaar · Lennar · Country Garden', sa: 'روشن · دار الأركان · رتال' }
];

/* ---------- Saudi financial sector directory (based on the user's guide by Abdullah Akram / Faseelat Al-Maliyah) ---------- */
window.DIRECTORY = {
  credit: ['مبني على دليل "خريطة القطاع المالي السعودي" (عبدالله أكرم، فسيلة المالية) مع ترجمة وتلخيص. القطاع يتغير بسرعة: اندماجات وتراخيص جديدة، فراجع موقع الجهة أو الجهة المنظمة قبل الاستشهاد.',
           'Based on the guide “Map of the Saudi Financial Sector” (Abdullah Akram, Faseelat Al-Maliyah), translated and condensed. The sector changes quickly through mergers and new licences, so check the entity’s or the regulator’s site before citing.'],
  multi: ['كثير من الجهات متعددة النشاط: شركة مالية واحدة تمارس تمويل الشركات وإدارة الأصول والوساطة تحت سقف واحد. هذا مصدر الحيرة الشائع عند اختيار المسار.',
          'Many entities are multi-activity: one firm does corporate finance, asset management and brokerage under one roof. That is the usual source of confusion when choosing a path.'],
  groups: [
    { cat: 'dep', t: ['البنوك التجارية والرقمية', 'Commercial & digital banks'], inst: 'bank', l: [
      ['الأهلي السعودي SNB', 'Saudi National Bank (SNB)', 'بنك تجاري (أفراد، شركات، خزينة)، الأكبر في السعودية', 'Commercial bank (retail, corporate, treasury), the largest in Saudi Arabia'],
      ['مصرف الراجحي', 'Al Rajhi Bank', 'بنك إسلامي (أفراد، شركات، تمويل عقاري)', 'Islamic bank (retail, corporate, home finance)'],
      ['بنك الرياض', 'Riyad Bank', 'أفراد، شركات، خزينة', 'Retail, corporate, treasury'],
      ['ساب SAB', 'Saudi Awwal Bank (SAB)', 'بعد اندماج ساب مع الأول في 2019', 'After the 2019 SABB and Alawwal merger'],
      ['البنك السعودي الفرنسي', 'Banque Saudi Fransi', 'تركيز على الشركات الكبرى', 'Focus on large corporates'],
      ['البنك العربي الوطني ANB', 'Arab National Bank', 'أفراد وشركات', 'Retail and corporate'],
      ['مصرف الإنماء', 'Alinma Bank', 'بنك إسلامي', 'Islamic bank'],
      ['بنك البلاد', 'Bank Albilad', 'بنك إسلامي', 'Islamic bank'],
      ['بنك الجزيرة', 'Bank AlJazira', 'بنك إسلامي', 'Islamic bank'],
      ['بنك الاستثمار السعودي SAIB', 'Saudi Investment Bank', 'تركيز على الشركات', 'Corporate focus'],
      ['STC Bank', 'STC Bank', 'بنك رقمي ومدفوعات (تحول من STC Pay)', 'Digital bank and payments (formerly STC Pay)'],
      ['D360 Bank', 'D360 Bank', 'بنك رقمي', 'Digital bank'] ] },
    { cat: 'pub', t: ['الجهات الحكومية والتنظيمية والتنموية', 'Government, regulatory & development bodies'], inst: 'central', l: [
      ['البنك المركزي السعودي SAMA', 'Saudi Central Bank (SAMA)', 'سياسة نقدية، تنظيم البنوك وشركات التمويل، إدارة الاحتياطي', 'Monetary policy, bank and finance company regulation, reserve management'],
      ['هيئة السوق المالية CMA', 'Capital Market Authority', 'تنظيم أسواق المال وشركات الاستثمار والصناديق', 'Regulates capital markets, investment firms and funds'],
      ['هيئة التأمين IA', 'Insurance Authority', 'تنظيم قطاع التأمين (استقلت عن ساما 2023)', 'Insurance regulator (separated from SAMA in 2023)'],
      ['هيئة الزكاة والضريبة والجمارك ZATCA', 'ZATCA', 'تحصيل الزكاة وضريبة القيمة المضافة والضرائب', 'Collects zakat, VAT and taxes'],
      ['مجموعة تداول السعودية', 'Saudi Tadawul Group', 'البورصة، مقاصة، مركز الإيداع', 'The exchange, Muqassa and Edaa'],
      ['صندوق التنمية الوطني NDF', 'National Development Fund', 'الجهة الأم للصناديق التنموية', 'Parent of the development funds'],
      ['شركة الاستثمار الجريء SVC', 'Saudi Venture Capital Company', 'تستثمر في صناديق VC و PE والدين الخاص', 'Invests in VC, PE and private debt funds'],
      ['بنك المنشآت الصغيرة والمتوسطة', 'SME Bank', 'بنك تنموي للمنشآت الصغيرة والمتوسطة', 'Development bank for SMEs'],
      ['صندوق التنمية الصناعية SIDF', 'Saudi Industrial Development Fund', 'تمويل الصناعة والتعدين والطاقة واللوجستيات', 'Funds industry, mining, energy and logistics'],
      ['صندوق التنمية العقارية', 'Real Estate Development Fund', 'تمويل إسكاني حكومي', 'Government housing finance'],
      ['صندوق التنمية السياحي TDF', 'Tourism Development Fund', 'تمويل مشاريع السياحة', 'Funds tourism projects'],
      ['بنك التصدير والاستيراد', 'Saudi EXIM Bank', 'تمويل وضمان الصادرات غير النفطية', 'Finances and guarantees non-oil exports'],
      ['سمة وبيان', 'SIMAH & Bayan', 'شركات المعلومات الائتمانية للأفراد والشركات', 'Credit bureaus for individuals and companies'],
      ['مدى وسريع', 'mada & sarie', 'شبكات المدفوعات الوطنية', 'National payment networks'] ] },
    { cat: 'mkt', t: ['الشركات المالية السعودية (متعددة النشاط)', 'Saudi capital market institutions (multi-activity)'], inst: 'ib', l: [
      ['الأهلي المالية', 'SNB Capital', 'تمويل الشركات (الأنشط في الطروحات)، إدارة أصول (الأكبر محلياً)، وساطة، أبحاث', 'Corporate finance (most active in IPOs), asset management (largest locally), brokerage, research'],
      ['الراجحي المالية', 'Al Rajhi Capital', 'إدارة أصول (الأقوى في الصناديق الشرعية)، وساطة، تمويل شركات، أبحاث', 'Asset management (strongest in Sharia funds), brokerage, corporate finance, research'],
      ['الرياض المالية', 'Riyad Capital', 'إدارة أصول، تمويل شركات، وساطة، حفظ', 'Asset management, corporate finance, brokerage, custody'],
      ['جدوى للاستثمار', 'Jadwa Investment', 'تمويل شركات، إدارة أصول، ملكية خاصة، ريت، أبحاث اقتصادية', 'Corporate finance, asset management, private equity, REITs, economic research'],
      ['الإنماء المالية', 'Alinma Capital', 'إدارة أصول، وساطة، تمويل شركات', 'Asset management, brokerage, corporate finance'],
      ['دراية المالية', 'Derayah Financial', 'وساطة إلكترونية للأفراد (الأشهر)، إدارة أصول', 'Online retail brokerage (the best known), asset management'],
      ['الأول كابيتال', 'Awwal Capital', 'تمويل شركات، إدارة أصول، وساطة', 'Corporate finance, asset management, brokerage'],
      ['البلاد المالية', 'Albilad Capital', 'إدارة أصول، وساطة، تمويل شركات', 'Asset management, brokerage, corporate finance'],
      ['فالكم للخدمات المالية', 'Falcom Financial Services', 'إدارة أصول، وساطة، تمويل شركات', 'Asset management, brokerage, corporate finance'],
      ['الاستثمار كابيتال', 'Alistithmar Capital', 'ذراع بنك الاستثمار: إدارة أصول، تمويل شركات، وساطة', 'SAIB’s arm: asset management, corporate finance, brokerage'],
      ['الخبير المالية', 'Alkhabeer Capital', 'إدارة أصول مع تركيز على العقار والبدائل', 'Asset management focused on real estate and alternatives'],
      ['سدكو كابيتال', 'SEDCO Capital', 'إدارة أصول شرعية، ملكية خاصة، عقار', 'Sharia asset management, private equity, real estate'],
      ['سدرة كابيتال', 'Sidra Capital', 'إدارة أصول شرعية، ملكية خاصة وائتمان خاص، عقار دولي', 'Sharia asset management, private equity and credit, international real estate'] ] },
    { cat: 'mkt', t: ['البنوك الاستثمارية العالمية في السعودية', 'Global investment banks in Saudi Arabia'], inst: 'ib', l: [
      ['HSBC العربية السعودية', 'HSBC Saudi Arabia', 'تمويل شركات، إدارة أصول، أبحاث. الأنشط في الطروحات الحكومية', 'Corporate finance, asset management, research. Most active in government IPOs'],
      ['Goldman Sachs السعودية', 'Goldman Sachs Saudi Arabia', 'تمويل شركات: M&A، طروحات، أسواق دين', 'Corporate finance: M&A, IPOs, debt markets'],
      ['JP Morgan السعودية', 'J.P. Morgan Saudi Arabia', 'تمويل شركات واستشارات سيادية', 'Corporate finance and sovereign advisory'],
      ['Morgan Stanley السعودية', 'Morgan Stanley Saudi Arabia', 'تمويل شركات وإدارة ثروات مؤسسية', 'Corporate finance and institutional wealth'],
      ['Citi السعودية', 'Citi Saudi Arabia', 'تمويل شركات وإصدارات ديون', 'Corporate finance and debt issuance'],
      ['EFG Hermes السعودية', 'EFG Hermes KSA', 'تمويل شركات، وساطة مؤسسية، أبحاث', 'Corporate finance, institutional brokerage, research'],
      ['BNP Paribas السعودية', 'BNP Paribas Saudi Arabia', 'تمويل شركات ومشاريع بنية تحتية', 'Corporate and infrastructure finance'] ] },
    { cat: 'inv', t: ['الصناديق السيادية والتقاعدية', 'Sovereign & pension investors'], inst: 'swf', l: [
      ['صندوق الاستثمارات العامة PIF', 'Public Investment Fund', 'الأكبر في السعودية: أسهم دولية، ملكية خاصة، عقار، بنية تحتية، ومشاريع كبرى', 'The largest in Saudi Arabia: global equities, private equity, real estate, infrastructure and giga-projects'],
      ['سنابل للاستثمار', 'Sanabil Investments', 'تابع لـ PIF: رأس مال جريء وملكية خاصة ومنتجات بديلة', 'A PIF company: venture capital, private equity and alternatives'],
      ['جدا (صندوق الصناديق)', 'Jada Fund of Funds', 'تابع لـ PIF: يستثمر في مديري صناديق PE و VC', 'A PIF company: invests in PE and VC fund managers'],
      ['التأمينات الاجتماعية GOSI', 'GOSI', 'صندوق التقاعد والتأمين الاجتماعي', 'The pension and social insurance fund'],
      ['حصانة الاستثمارية', 'Hassana Investment Company', 'الذراع الاستثماري للتأمينات: أسهم، دخل ثابت، ملكية خاصة، عقار، بنية تحتية', 'GOSI’s investment arm: equities, fixed income, private equity, real estate, infrastructure'],
      ['Savvy Games Group', 'Savvy Games Group', 'تابع لـ PIF: استثمار في الألعاب والرياضات الإلكترونية', 'A PIF company: gaming and esports investments'] ] },
    { cat: 'inv', t: ['رأس المال الجريء والملكية الخاصة', 'Venture capital & private equity'], inst: 'pe', l: [
      ['STV', 'STV', 'رأس مال جريء للمراحل المتأخرة، الأكبر إقليمياً', 'Late-stage venture capital, the largest regionally'],
      ['رائد فنتشرز', 'Raed Ventures', 'مراحل مبكرة', 'Early stage'],
      ['Impact46', 'Impact46', 'تقنية سعودية', 'Saudi technology'],
      ['Vision Ventures', 'Vision Ventures', 'مراحل مبكرة', 'Early stage'],
      ['MEVP', 'Middle East Venture Partners', 'إقليمي', 'Regional'],
      ['Merak Capital', 'Merak Capital', 'رأس مال جريء ونمو', 'Venture and growth equity'],
      ['MENA 500', '500 Global MENA', 'فرع 500 Global', 'The 500 Global regional fund'],
      ['Nuwa Capital · Wamda', 'Nuwa Capital · Wamda', 'إقليمي نشط في السعودية', 'Regional, active in Saudi Arabia'],
      ['واعد وأرامكو فنتشرز', 'Wa’ed & Aramco Ventures', 'أذرع أرامكو للاستثمار الجريء', 'Aramco’s venture arms'],
      ['إنفستكورب السعودية', 'Investcorp Saudi Arabia', 'ملكية خاصة، عقار، ائتمان', 'Private equity, real estate, credit'],
      ['أموال كابيتال بارتنرز', 'Amwal Capital Partners', 'ملكية خاصة ونمو', 'Private equity and growth'] ] },
    { cat: 'inv', t: ['بيوت العائلات (Family Offices)', 'Family offices'], inst: 'am', l: [
      ['مجموعة العليان', 'Olayan Group', 'استثمارات محلية ودولية', 'Local and international investments'],
      ['المملكة القابضة', 'Kingdom Holding', 'عقار، ضيافة، أسهم دولية', 'Real estate, hospitality, global equities'],
      ['عبد اللطيف جميل', 'Abdul Latif Jameel', 'استثمارات صناعية وتمويلية ومالية', 'Industrial, financing and financial investments'],
      ['مجموعة الفيصلية', 'Al Faisaliah Group', 'استثمارات متنوعة', 'Diversified investments'],
      ['مجموعة التركي · الزامل · الجفالي', 'Alturki · Zamil · Juffali', 'صناعة وطاقة وتجارة واستثمار', 'Industry, energy, trade and investment'],
      ['مجموعة الحكير · المهيدب · العيسى', 'Al Hokair · Al Muhaidib · Alessa', 'تجزئة وصناعة وتجارة واستثمار', 'Retail, industry, trade and investment'] ] },
    { cat: 'con', t: ['شركات التأمين', 'Insurance companies'], inst: 'insurance', l: [
      ['بوبا العربية', 'Bupa Arabia', 'تأمين صحي، الأكبر', 'Health insurance, the largest'],
      ['التعاونية', 'Tawuniya', 'صحي، عام، سيارات، طاقة، بحري', 'Health, general, motor, energy, marine'],
      ['ميدغلف', 'MedGulf', 'صحي وعام', 'Health and general'],
      ['ولاء', 'Walaa', 'صحي وعام', 'Health and general'],
      ['الراجحي تكافل', 'Al Rajhi Takaful', 'تأمين شرعي: صحي وعام', 'Sharia insurance: health and general'],
      ['الإعادة السعودية', 'Saudi Re', 'إعادة تأمين، الوحيدة الوطنية', 'Reinsurance, the only national reinsurer'],
      ['الدرع العربي · سلامة · ملاذ', 'Arabian Shield · Salama · Malath', 'تأمين عام وسيارات', 'General and motor insurance'] ] },
    { cat: 'mkt', t: ['الاستشارات والمهن المالية', 'Advisory & professional services'], inst: null, l: [
      ['PwC · EY · Deloitte · KPMG', 'PwC · EY · Deloitte · KPMG', 'الأربع الكبار: تدقيق، خدمات الصفقات، ضريبة وزكاة، استشارات', 'The Big Four: audit, deal services, tax and zakat, consulting'],
      ['McKinsey · BCG · Bain', 'McKinsey · BCG · Bain', 'استشارات استراتيجية، نشطة مع الجهات الحكومية ورؤية 2030', 'Strategy consulting, active with government and Vision 2030'],
      ['Oliver Wyman · Kearney · Roland Berger · Arthur D. Little', 'Oliver Wyman · Kearney · Roland Berger · Arthur D. Little', 'استشارات استراتيجية وعمليات', 'Strategy and operations consulting'],
      ['Accenture · IBM Consulting · Capgemini', 'Accenture · IBM Consulting · Capgemini', 'تحول رقمي وتقني', 'Digital and technology transformation'],
      ['Lazard', 'Lazard', 'استشارات M&A وإعادة هيكلة واستشارات سيادية', 'M&A, restructuring and sovereign advisory'],
      ['Alvarez & Marsal · FTI Consulting', 'Alvarez & Marsal · FTI Consulting', 'إعادة هيكلة وتحسين أداء ونزاعات', 'Restructuring, turnaround and disputes'],
      ['Kroll', 'Kroll', 'تقييمات ومخاطر', 'Valuations and risk'],
      ['Mercer · WTW', 'Mercer · WTW', 'استشارات استثمار واكتوارية ومزايا موظفين', 'Investment, actuarial and benefits consulting'],
      ['مكاتب المحاماة', 'Law firms', 'Clifford Chance، White & Case، Latham & Watkins، A&O، ومكاتب محلية: صفقات وطروحات', 'Clifford Chance, White & Case, Latham & Watkins, A&O and local firms: deals and offerings'] ] },
    { cat: 'fin', t: ['الفنتك', 'FinTech'], inst: 'fintech', l: [
      ['STC Pay · urpay · Barq', 'STC Pay · urpay · Barq', 'محافظ ومدفوعات رقمية', 'Digital wallets and payments'],
      ['Geidea · Foodics · Hala', 'Geidea · Foodics · Hala', 'حلول دفع ونقاط بيع للتجار', 'Merchant payments and point of sale'],
      ['HyperPay · PayTabs', 'HyperPay · PayTabs', 'بوابات دفع للتجارة الإلكترونية', 'E-commerce payment gateways'],
      ['Tabby · Tamara', 'Tabby · Tamara', 'اشترِ الآن وادفع لاحقاً', 'Buy now, pay later'],
      ['Lendo · Forus · Raqamyah', 'Lendo · Forus · Raqamyah', 'إقراض المنشآت الصغيرة وتمويل جماعي بالدين', 'SME lending and debt crowdfunding'],
      ['إمكان', 'Emkan', 'تابع للراجحي: إقراض رقمي شخصي', 'An Al Rajhi company: digital personal lending'],
      ['ملاذ · حافظ · Sarwa', 'Malaz · Hafiz · Sarwa', 'منصات استثمار وادخار ومستشار آلي', 'Investment, savings and robo-advice'],
      ['Thndr · Baraka · Derayah Smart', 'Thndr · Baraka · Derayah Smart', 'تداول للأفراد', 'Retail trading'],
      ['Rasan (Tameeni)', 'Rasan (Tameeni)', 'تجميع وثائق التأمين، أول شركة تقنية تأمين سعودية مدرجة', 'Insurance aggregation, the first listed Saudi insurtech'] ] }
  ]
};

/* ---------- Detailed ladders: [title, years, what changes] ---------- */
window.GRADES = [
  ['Analyst / Officer|محلل / أخصائي', '0–3', ['تنفذ العمل بيدك: تحليل، نماذج، تقارير.', 'You do the work yourself: analysis, models, reports.'], ['مساهم فردي', 'Individual contributor']],
  ['Senior Analyst / Senior Specialist|محلل أول / أخصائي أول', '3–5', ['تعمل باستقلال وتراجع عمل المبتدئين.', 'You work independently and review juniors’ work.'], ['مساهم فردي', 'Individual contributor']],
  ['Assistant Manager / Team Lead|مساعد مدير / قائد فريق', '5–7', ['أول مسؤولية عن أشخاص: 2 إلى 4.', 'Your first responsibility for people: two to four.'], ['قائد فريق', 'Team lead']],
  ['Manager|مدير قسم', '7–10', ['تملك وظيفة كاملة ومخرجاتها وميزانيتها الصغيرة.', 'You own a whole function, its outputs and a small budget.'], ['مدير', 'Manager']],
  ['Senior Manager|مدير أول', '9–13', ['تدير عدة فرق وتتعامل مع الإدارة العليا.', 'You run several teams and deal with senior management.'], ['مدير', 'Manager']],
  ['Director / Head of Department|مدير إدارة (Director)', '12–16', ['تملك إدارة كاملة: استراتيجيتها، ميزانيتها، وتوظيفها. تعرض على اللجان التنفيذية.', 'You own a whole department: its strategy, budget and hiring. You present to executive committees.'], ['قيادة إدارة', 'Department leadership']],
  ['Senior / Executive Director · AGM|مدير تنفيذي / مساعد مدير عام', '14–18', ['تدير عدة إدارات. مرحلة انتقالية نحو الإدارة العامة.', 'You run several departments. A transition stage towards general management.'], ['قيادة إدارة', 'Department leadership']],
  ['General Manager / Vice President|مدير عام (GM) / نائب رئيس', '16–22', ['تملك قطاعاً أو وحدة أعمال بأرباحها وخسائرها (P&L). تتعامل مع مجلس الإدارة.', 'You own a sector or business unit and its P&L, and deal with the board.'], ['قيادة قطاع', 'Sector leadership']],
  ['Chief Officer / EVP (CFO, CIO, CRO)|رئيس تنفيذي للقطاع', '18–25', ['عضو في الإدارة التنفيذية العليا ومسؤول أمام الرئيس التنفيذي والمجلس.', 'A member of the top executive team, accountable to the CEO and board.'], ['إدارة عليا', 'C-suite']],
  ['CEO / Managing Director|الرئيس التنفيذي / العضو المنتدب', '20+', ['مسؤول عن الشركة كلها أمام المجلس والمساهمين.', 'Accountable for the whole company to the board and shareholders.'], ['إدارة عليا', 'C-suite']]
];
window.EQUIV = {
  cols: [['شركة أو بنك تجاري', 'Company or commercial bank'], ['بنك استثماري', 'Investment bank'], ['استشارات استراتيجية', 'Strategy consulting'], ['الأربع الكبار', 'Big Four'], ['ملكية خاصة', 'Private equity']],
  rows: [
    ['Analyst', 'Analyst', 'Business Analyst', 'Associate', 'Analyst'],
    ['Senior Analyst', 'Associate', 'Associate / Consultant', 'Senior Associate', 'Associate'],
    ['Manager', 'Associate (senior) / VP', 'Engagement Manager', 'Manager', 'Senior Associate / VP'],
    ['Senior Manager', 'Vice President', 'Engagement Manager (senior)', 'Senior Manager', 'Vice President'],
    ['Director', 'Director / Executive Director', 'Associate Partner / Principal', 'Director', 'Principal / Director'],
    ['General Manager / VP', 'Managing Director', 'Partner', 'Partner', 'Partner'],
    ['Chief Officer', 'Group Head', 'Senior Partner', 'Senior Partner', 'Managing Partner']
  ],
  note: ['انتبه: لقب Vice President في بنك استثماري منصب متوسط (6 إلى 9 سنوات خبرة) يقابل Senior Manager في شركة. أما VP في شركة سعودية فمنصب عليا يقابل المدير العام.',
         'Careful: vice president at an investment bank is a mid-level post (6 to 9 years’ experience), equal to a senior manager at a company. At a Saudi company, VP is a senior post on a par with general manager.']
};
window.LADDERS = {
  bank: { t: 'Commercial & Corporate Banking|البنوك التجارية ومصرفية الشركات', l: [
    ['Graduate Trainee|متدرب خريج', '0–1', ['برنامج تدوير بين الإدارات 12 شهراً.', 'A 12-month rotation across departments.']],
    ['Credit Analyst / Relationship Officer|محلل ائتمان / مسؤول علاقات', '1–3', ['تحليل قوائم العملاء وكتابة المذكرات الائتمانية.', 'Analysing client statements and writing credit memos.']],
    ['Assistant Relationship Manager|مساعد مدير علاقات', '3–5', ['تدير محفظة صغيرة تحت إشراف.', 'You run a small portfolio under supervision.']],
    ['Relationship Manager|مدير علاقات', '5–8', ['محفظة عملاء شركات بأهداف إيراد وائتمان.', 'A corporate client portfolio with revenue and credit targets.']],
    ['Senior RM / Team Head|مدير علاقات أول / رئيس فريق', '8–12', ['تقود فريق مديري علاقات وتوافق على الائتمان ضمن صلاحيتك.', 'You lead a team of RMs and approve credit within your authority.']],
    ['Regional Head / Head of Segment (Director)|مدير منطقة / رئيس قطاع عملاء', '12–16', ['تملك أرباح منطقة أو شريحة عملاء.', 'You own the profit of a region or client segment.']],
    ['Head of Corporate Banking (GM)|مدير عام مصرفية الشركات', '16–22', ['تملك قطاعاً كاملاً وعضوية لجان الائتمان العليا.', 'You own a full division and sit on senior credit committees.']],
    ['Chief Officer (CCO, CRO, CFO)|رئيس تنفيذي للقطاع', '20–25', ['الإدارة التنفيذية العليا للبنك.', 'The bank’s top executive team.']],
    ['CEO|الرئيس التنفيذي', '25+', ['يعيَّن بموافقة ساما.', 'Appointed with SAMA’s approval.']] ] },
  ib: { t: 'Investment Banking|المصرفية الاستثمارية', l: [
    ['Analyst|محلل', '0–3', ['نماذج مالية وعروض تقديمية. ساعات طويلة.', 'Financial models and pitch books. Long hours.']],
    ['Associate|مشارك', '3–6', ['تدير عمل المحللين وتراجع النماذج.', 'You manage analysts’ work and check the models.']],
    ['Vice President|نائب رئيس', '6–9', ['تدير تنفيذ الصفقة يومياً وتتعامل مع العميل.', 'You run deal execution day to day and deal with the client.']],
    ['Director / Executive Director|مدير / مدير تنفيذي', '9–13', ['تبدأ بجلب الصفقات وبناء علاقاتك الخاصة.', 'You begin to originate deals and build your own relationships.']],
    ['Managing Director|عضو منتدب', '13–18', ['مسؤول عن إيراد: تجلب العملاء والصفقات.', 'Accountable for revenue: you bring in clients and deals.']],
    ['Head of Investment Banking / Country Head|رئيس المصرفية الاستثمارية', '18+', ['تدير النشاط كله في الدولة أو المنطقة.', 'You run the whole business in the country or region.']] ] },
  am: { t: 'Asset Management & Funds|إدارة الأصول والصناديق', l: [
    ['Research Analyst|محلل أبحاث', '0–3', ['تغطي شركات قطاع أو قطاعين وتبني نماذجها.', 'You cover companies in one or two sectors and build their models.']],
    ['Senior Analyst|محلل أول', '3–6', ['توصياتك تدخل المحفظة مباشرة.', 'Your recommendations go straight into the portfolio.']],
    ['Assistant Portfolio Manager|مساعد مدير محفظة', '5–8', ['تشارك في قرارات الشراء والبيع.', 'You take part in buy and sell decisions.']],
    ['Portfolio Manager|مدير محفظة', '8–12', ['مسؤول عن أداء صندوق مقابل مؤشره.', 'Accountable for a fund’s performance against its benchmark.']],
    ['Head of Equities / Fixed Income (Director)|رئيس الأسهم أو الدخل الثابت', '12–16', ['تدير فريق مديري المحافظ في فئة أصول.', 'You lead the portfolio managers of an asset class.']],
    ['Head of Asset Management (GM)|مدير عام إدارة الأصول', '15–20', ['مسؤول عن الأصول المدارة وأرباح النشاط.', 'Accountable for AUM and the business’s profit.']],
    ['Chief Investment Officer|رئيس الاستثمار', '18+', ['يضع استراتيجية الاستثمار للشركة كلها.', 'Sets investment strategy for the whole firm.']],
    ['CEO|الرئيس التنفيذي', '20+', ['', '']] ] },
  pe: { t: 'Private Equity & Venture Capital|الملكية الخاصة ورأس المال الجريء', l: [
    ['Analyst|محلل', '0–2', ['فرز الفرص وبناء النماذج الأولية.', 'Screening opportunities and building first models.']],
    ['Associate|مشارك', '2–5', ['الفحص النافي للجهالة ونموذج LBO ومذكرة لجنة الاستثمار.', 'Due diligence, the LBO model and the investment committee memo.']],
    ['Senior Associate / Vice President|مشارك أول / نائب رئيس', '5–8', ['تدير الصفقة وتتابع شركات المحفظة.', 'You run the deal and monitor portfolio companies.']],
    ['Principal / Director|مدير', '8–12', ['تجلب الصفقات وتجلس في مجالس إدارات شركات المحفظة.', 'You source deals and sit on portfolio company boards.']],
    ['Partner / Managing Director|شريك', '12+', ['تقرر الاستثمار وتجمع أموال الصندوق وتحصل على حصة الأرباح.', 'You decide investments, raise the fund and share in the carry.']],
    ['Managing Partner|الشريك المدير', '18+', ['يدير الشركة كلها.', 'Runs the whole firm.']] ] },
  consult: { t: 'Strategy Consulting|الاستشارات الاستراتيجية', l: [
    ['Business Analyst|محلل أعمال', '0–2', ['جمع البيانات والتحليل وبناء الشرائح.', 'Gathering data, analysis and building slides.']],
    ['Associate / Consultant|استشاري', '2–4', ['تملك جزءاً من المشروع وتعرضه على العميل.', 'You own a workstream and present it to the client.']],
    ['Engagement Manager / Project Leader|مدير مشروع', '4–7', ['تدير الفريق والمشروع يومياً.', 'You run the team and the project day to day.']],
    ['Associate Partner / Principal|شريك مساعد', '7–10', ['تدير عدة مشاريع وتبدأ ببيع الأعمال.', 'You oversee several projects and start selling work.']],
    ['Partner|شريك', '10–14', ['تملك علاقة العميل وتبيع المشاريع.', 'You own the client relationship and sell engagements.']],
    ['Senior Partner / Managing Partner|شريك أول', '15+', ['تقود مكتباً أو قطاعاً.', 'You lead an office or practice.']] ] },
  big4: { t: 'Big Four: Audit & Deals|الأربع الكبار: التدقيق والصفقات', l: [
    ['Associate|مساعد', '0–2', ['فحص العينات وتوثيق أوراق العمل، أو تحليل بيانات الفحص المالي.', 'Testing samples and documenting workpapers, or analysing due diligence data.']],
    ['Senior Associate|مساعد أول', '2–4', ['تقود العمل الميداني لعميل.', 'You lead fieldwork for a client.']],
    ['Assistant Manager / Manager|مدير', '4–7', ['تدير عدة عملاء وتراجع الملفات.', 'You manage several clients and review the files.']],
    ['Senior Manager|مدير أول', '7–10', ['تملك علاقة العميل وجودة العمل.', 'You own the client relationship and the quality of work.']],
    ['Director|مدير تنفيذي', '10–13', ['مرحلة ما قبل الشراكة: تبيع وتدير محفظة عملاء.', 'The pre-partner stage: you sell and run a client portfolio.']],
    ['Partner|شريك', '13+', ['توقّع على التقرير وتشارك في أرباح المكتب.', 'You sign the report and share in the firm’s profit.']] ] },
  corp: { t: 'Corporate Finance: Analyst to CFO|مالية الشركات: من محلل إلى CFO', l: [
    ['Financial Analyst (FP&A / Treasury)|محلل مالي', '0–3', ['تقارير شهرية وتحليل الانحرافات.', 'Monthly reports and variance analysis.']],
    ['Senior Financial Analyst|محلل مالي أول', '3–5', ['تملك موازنة قطاع أو منتج.', 'You own the budget of a segment or product.']],
    ['Finance Manager / Finance Business Partner|مدير مالي / شريك مالي للأعمال', '5–9', ['شريك مالي لوحدة أعمال: تشارك في قراراتها.', 'A finance partner to a business unit: you take part in its decisions.']],
    ['Senior Manager / Head of FP&A|مدير أول / رئيس التخطيط المالي', '9–12', ['تدير دورة الموازنة والتوقعات للشركة.', 'You run the company’s budgeting and forecasting cycle.']],
    ['Finance Director / Financial Controller|مدير الإدارة المالية / المراقب المالي', '12–16', ['مسؤول عن القوائم المالية والرقابة والتعامل مع المراجع.', 'Accountable for the financial statements, controls and the auditor.']],
    ['VP Finance / General Manager Finance|نائب الرئيس للمالية / مدير عام المالية', '15–20', ['تدير كل وظائف المالية وتعرض على لجنة المراجعة.', 'You run all finance functions and present to the audit committee.']],
    ['CFO|المدير المالي', '18–25', ['عضو الإدارة العليا: رأس المال، المستثمرون، والاستراتيجية.', 'A top executive: capital, investors and strategy.']],
    ['CEO / General Manager of a Business|الرئيس التنفيذي / مدير عام نشاط', '20+', ['كثير من الرؤساء التنفيذيين جاءوا من منصب CFO.', 'Many chief executives came from the CFO seat.']] ] },
  risk: { t: 'Risk Management|إدارة المخاطر', l: [
    ['Risk Analyst|محلل مخاطر', '0–3', ['تقارير التعرضات والحدود.', 'Exposure and limit reports.']],
    ['Senior Risk Analyst|محلل مخاطر أول', '3–6', ['نماذج واختبارات ضغط.', 'Models and stress tests.']],
    ['Risk Manager|مدير مخاطر', '6–10', ['تملك نوعاً من المخاطر: ائتمان، سوق، أو تشغيل.', 'You own one risk type: credit, market or operational.']],
    ['Head of Credit / Market Risk (Director)|رئيس مخاطر الائتمان أو السوق', '10–15', ['تضع السياسات وتعرض على لجنة المخاطر.', 'You set policy and present to the risk committee.']],
    ['Deputy CRO (GM)|نائب رئيس المخاطر', '15–20', ['', '']],
    ['Chief Risk Officer|رئيس المخاطر التنفيذي', '18+', ['مستقل عن الأعمال ويرفع تقاريره للمجلس.', 'Independent of the business and reports to the board.']] ] },
  ins: { t: 'Insurance|التأمين', l: [
    ['Underwriting / Actuarial Analyst|محلل اكتتاب / اكتواري', '0–3', ['تسعير الوثائق وتحليل المطالبات.', 'Pricing policies and analysing claims.']],
    ['Underwriter / Associate Actuary|مكتتب / اكتواري مشارك', '3–6', ['صلاحية قبول أخطار ضمن حدود.', 'Authority to accept risks within limits.']],
    ['Senior Underwriter / Manager|مكتتب أول / مدير', '6–10', ['تدير خط أعمال: صحي أو مركبات.', 'You run a line of business: health or motor.']],
    ['Head of Line / Appointed Actuary (Director)|رئيس خط أعمال / الاكتواري المعيّن', '10–15', ['مسؤول عن ربحية الخط أو كفاية الاحتياطيات.', 'Accountable for the line’s profit or reserve adequacy.']],
    ['Chief Underwriting / Chief Actuary (GM)|رئيس الاكتتاب / رئيس الاكتواريين', '15–20', ['', '']],
    ['CEO|الرئيس التنفيذي', '20+', ['', '']] ] },
  gov: { t: 'Sovereign Funds & Regulators|الصناديق السيادية والجهات التنظيمية', l: [
    ['Graduate Development Programme|برنامج تطوير الخريجين', '0–2', ['تدوير بين الإدارات وتدريب مكثف.', 'Rotations across departments and intensive training.']],
    ['Analyst|محلل', '1–3', ['تحليل استثمارات أو إشراف.', 'Investment or supervisory analysis.']],
    ['Associate / Senior Associate|مشارك / مشارك أول', '3–7', ['تدير صفقة أو ملف جهة خاضعة للإشراف.', 'You run a deal or a supervised entity’s file.']],
    ['Vice President / Manager|نائب رئيس / مدير', '7–11', ['تقود فريقاً وتمثل الجهة في مجالس شركات المحفظة.', 'You lead a team and represent the fund on portfolio company boards.']],
    ['Director|مدير إدارة', '11–15', ['تملك قطاعاً استثمارياً أو إدارة إشرافية.', 'You own an investment sector or a supervisory department.']],
    ['Senior Director / Head of Division|رئيس قطاع', '15–20', ['', '']],
    ['Deputy Governor / Chief Officer|نائب المحافظ / رئيس تنفيذي', '20+', ['', '']] ] },
  fintech: { t: 'FinTech & Start-ups|الفنتك والشركات الناشئة', l: [
    ['Analyst (Strategy / FP&A)|محلل', '0–2', ['كل شيء: نماذج، تقارير المستثمرين، وتحليل البيانات.', 'A bit of everything: models, investor reports and data analysis.']],
    ['Associate / Product Manager|مشارك / مدير منتج', '2–4', ['تملك منتجاً أو مؤشراً.', 'You own a product or a metric.']],
    ['Senior Manager|مدير أول', '4–7', ['تدير فريقاً. الترقي أسرع من الشركات الكبيرة.', 'You lead a team. Promotion is faster than at large companies.']],
    ['Head of Finance / Head of Strategy (Director)|رئيس المالية / رئيس الاستراتيجية', '6–10', ['تدير جولات التمويل والعلاقة مع المستثمرين.', 'You run funding rounds and investor relations.']],
    ['VP / CFO|نائب رئيس / مدير مالي', '8–14', ['منصب CFO يأتي أبكر بعشر سنوات من الشركات الكبرى، بمخاطرة أعلى.', 'The CFO seat arrives ten years sooner than at large companies, with more risk.']] ] }
};
window.INSTLAD = { bank: 'bank', islamic: 'bank', ib: 'ib', broker: 'ib', am: 'am', hf: 'am', reit: 'am', pe: 'pe', swf: 'gov', central: 'gov', pension: 'gov', insurance: 'ins', exchange: 'gov', cra: 'risk', finco: 'bank', fintech: 'fintech', payments: 'fintech' };

window.ROUTES = [
  { t: ['الصعود الداخلي', 'Rising from within'], d: ['تبقى في الجهة نفسها وتتدرج. الأبطأ والأضمن. يتسارع إذا تنقلت بين الإدارات كل 3 سنوات وطلبت مسؤولية عن أشخاص مبكراً.', 'Stay with one employer and climb. The slowest and surest. It speeds up if you rotate every three years and ask for people responsibility early.'], y: ['Director خلال 12–16 سنة', 'Director in 12–16 years'] },
  { t: ['من الاستشارات أو البنوك الاستثمارية إلى الشركات', 'From consulting or investment banking into companies'], d: ['أسرع طريق شائع. Engagement Manager في MBB ينتقل مديراً للاستراتيجية. VP في بنك استثماري ينتقل مديراً للتطوير المؤسسي أو علاقات المستثمرين. Senior Manager في الأربع الكبار ينتقل مراقباً مالياً أو مديراً للمالية.', 'The common fast route. An MBB engagement manager moves in as director of strategy. An investment banking VP becomes director of corporate development or investor relations. A Big Four senior manager becomes financial controller or finance director.'], y: ['Director خلال 7–11 سنة', 'Director in 7–11 years'] },
  { t: ['طريق الشريك المالي للأعمال', 'The finance business partner route'], d: ['من FP&A إلى شريك مالي لوحدة أعمال، ثم رئيس مالية الوحدة، ثم مدير عام الوحدة. هذا أوضح طريق من المالية إلى منصب GM لأنه يعطيك مسؤولية أرباح وخسائر.', 'From FP&A to finance partner of a business unit, then its head of finance, then its general manager. The clearest path from finance to GM, because it gives you P&L responsibility.'], y: ['GM خلال 15–20 سنة', 'GM in 15–20 years'] },
  { t: ['طريق الصناديق الحكومية وشركاتها', 'The state funds and their companies route'], d: ['تعمل في صندوق مثل PIF ثم تُنتدب إلى إحدى شركات المحفظة في منصب مدير مالي أو مدير استراتيجية. شائع في السعودية مع تأسيس شركات جديدة كثيرة.', 'Work at a fund such as PIF, then be seconded to a portfolio company as finance or strategy director. Common in Saudi Arabia with so many new companies being set up.'], y: ['Director خلال 8–12 سنة', 'Director in 8–12 years'] },
  { t: ['طريق الشركات الناشئة', 'The start-up route'], d: ['تنضم مبكراً كمسؤول مالي، وإذا نمت الشركة تصبح CFO في الثلاثينات. مخاطرة عالية: معظم الشركات الناشئة لا تنجح.', 'Join early as the finance lead, and if the company grows you are CFO in your thirties. High risk: most start-ups do not succeed.'], y: ['CFO خلال 8–12 سنة', 'CFO in 8–12 years'] }
];
window.JUMPS = [
  [['من محلل إلى مدير', 'From analyst to manager'], ['يتغير عملك من "أنفذ جيداً" إلى "أجعل الآخرين ينفذون جيداً". تحتاج مهارة التفويض والمراجعة وتطوير الناس.', 'Your job shifts from doing the work well to getting others to do it well. You need to delegate, review and develop people.']],
  [['من مدير إلى Director', 'From manager to director'], ['تتوقف عن إدارة العمل وتبدأ بإدارة الاتجاه: استراتيجية الإدارة، ميزانيتها، وعلاقتها بباقي الشركة. يُحكم عليك بتأثيرك خارج فريقك.', 'You stop managing the work and start managing the direction: the department’s strategy, budget and ties to the rest of the company. You are judged on influence beyond your team.']],
  [['من Director إلى مدير عام', 'From director to general manager'], ['الفارق مسؤولية الأرباح والخسائر. المدير العام يُسأل عن الإيراد والتكلفة معاً، ويتعامل مع المجلس والجهات الخارجية. من لم يحمل P&L يصعب أن يصل.', 'The difference is P&L responsibility. A general manager answers for revenue and cost together, and deals with the board and outside parties. Without having held a P&L it is hard to get there.']],
  [['ما يسرّع الطريق', 'What speeds it up'], ['شهادة مهنية مبكرة (CFA أو SOCPA)، ماجستير MBA من جامعة قوية في منتصف المسار، خبرة في أكثر من وظيفة، ومرشد من الإدارة العليا.', 'An early professional credential (CFA or SOCPA), an MBA from a strong school mid-career, experience across more than one function, and a senior mentor.']]
];

/* ---------- A day in the life (condensed from the user's guide) ---------- */
window.DAYS = [
  { t: 'Investment Banking|تمويل الشركات (المصرفية الاستثمارية)', what: ['فرق تخدم الشركات في جمع التمويل (طرح أسهم، إصدار صكوك) أو صفقات الاندماج والاستحواذ.', 'Teams that help companies raise funds (share offerings, sukuk) or do M&A deals.'], day: ['المحلل يبدأ 9 صباحاً وينتهي أحياناً بعد منتصف الليل: تحديث نماذج Excel، بناء عروض PowerPoint، مكالمات مع فريق الصفقة، وتقييم الشركة بـ DCF والمقارنات.', 'An analyst starts at 9am and sometimes finishes after midnight: updating Excel models, building PowerPoint decks, calls with the deal team, and valuing the company by DCF and comparables.'], judge: ['جودة النماذج، سرعة الاستجابة، الدقة في الأرقام، وإغلاق الصفقات.', 'Model quality, responsiveness, accuracy and closing deals.'], life: '70–100', pay: 3 },
  { t: 'Asset Management|إدارة الأصول', what: ['إدارة أموال المستثمرين في السوق العام: أسهم، صكوك، صناديق مؤشرات.', 'Managing investors’ money in public markets: equities, sukuk, index funds.'], day: ['يبدأ 7 إلى 8 صباحاً بقراءة الأخبار وتقارير الشركات، ثم اجتماع الفريق لمناقشة السوق، بناء نماذج تقييم، مكالمات النتائج الفصلية، وكتابة توصية للجنة الاستثمار.', 'Starts at 7 to 8am reading news and company reports, then a team meeting on markets, valuation models, quarterly earnings calls, and a recommendation for the investment committee.'], judge: ['أداء المحفظة مقابل المؤشر على مدى سنوات، لا صفقة واحدة.', 'Portfolio performance against the benchmark over years, not one trade.'], life: '50–60', pay: 2 },
  { t: 'Private Equity|الملكية الخاصة', what: ['الاستحواذ على شركات غير مدرجة، تحسين أدائها لسنوات، ثم بيعها بربح.', 'Buying unlisted companies, improving them over years, then selling at a profit.'], day: ['مراجعة الفرص المعروضة، فحص نافٍ للجهالة لصفقة نشطة، مقابلة إدارة الشركة، بناء نموذج LBO، اجتماع مع المستشارين، وتحضير مذكرة للجنة الاستثمار.', 'Reviewing the deal pipeline, due diligence on a live deal, meeting management, building the LBO model, meeting advisers, and preparing the investment committee memo.'], judge: ['عوائد الصفقات (IRR, MOIC)، جودة الفحص، والقدرة على إيجاد الصفقات.', 'Deal returns (IRR, MOIC), diligence quality and the ability to source deals.'], life: '60–80', pay: 3 },
  { t: 'Venture Capital|رأس المال الجريء', what: ['استثمار في شركات ناشئة في مراحل مبكرة على أمل نمو بعشرات الأضعاف.', 'Investing in early-stage start-ups in the hope of many-fold growth.'], day: ['مراجعة عشرات العروض التقديمية، مقابلة مؤسسين، أبحاث حجم السوق والمنافسة، وحضور فعاليات لبناء العلاقات.', 'Reviewing dozens of pitch decks, meeting founders, researching market size and competition, and attending events to build relationships.'], judge: ['نوعية الصفقات التي تجلبها، شبكة علاقاتك، وحكمك على المؤسسين.', 'The quality of deals you bring, your network and your judgement of founders.'], life: '50–60', pay: 2 },
  { t: 'Hedge Funds|صناديق التحوط', what: ['صناديق تستخدم البيع على المكشوف والمشتقات والرافعة لتحقيق عوائد مستقلة عن السوق.', 'Funds that use short selling, derivatives and leverage to earn returns independent of the market.'], day: ['يعتمد على الاستراتيجية: بحث عميق في شركة (Long/Short)، متابعة الاقتصاد الكلي (Global Macro)، أو كتابة كود لاختبار استراتيجيات (Quant).', 'It depends on the strategy: deep research on a company (long/short), tracking macroeconomics (global macro), or coding to test strategies (quant).'], judge: ['أفكار التداول التي ربحت، والعائد مقارنة بالمخاطرة (Sharpe).', 'Trade ideas that made money, and return relative to risk (Sharpe).'], life: '60–70', pay: 3 },
  { t: 'Sovereign Wealth Fund|الصندوق السيادي', what: ['إدارة أصول الدولة للمدى الطويل (PIF، حصانة).', 'Managing state assets for the long term (PIF, Hassana).'], day: ['يعتمد على القسم: الأسواق العامة تشبه إدارة الأصول، والملكية الخاصة تشبه صندوق PE، والاستثمارات المباشرة تقود استحواذات استراتيجية كبيرة.', 'It depends on the unit: public markets resembles asset management, private equity resembles a PE fund, and direct investments lead large strategic acquisitions.'], judge: ['عوائد المحفظة على 10 سنوات فأكثر وجودة القرارات الاستراتيجية.', 'Portfolio returns over ten years or more and the quality of strategic decisions.'], life: '50–60', pay: 2 },
  { t: 'Strategy Consulting (MBB)|الاستشارات الاستراتيجية', what: ['استشارات للرؤساء التنفيذيين والحكومات في القرارات الكبرى: استراتيجية، هيكلة، تحول.', 'Advising chief executives and governments on big decisions: strategy, restructuring, transformation.'], day: ['اجتماع فريق المشروع، مقابلات مع موظفي العميل، جمع بيانات وتحليلها، بناء عروض PowerPoint أو نماذج Excel، وتحضير عرض اللجنة التوجيهية.', 'Project team meeting, interviews with client staff, gathering and analysing data, building PowerPoint or Excel, and preparing the steering committee presentation.'], judge: ['جودة "قصة" العرض، دقة التحليل، وقدرتك على هيكلة المشكلة.', 'The quality of the story in the deck, the rigour of analysis and your problem structuring.'], life: '60–80', pay: 3 },
  { t: 'Audit|التدقيق والمحاسبة', what: ['مراجعة القوائم المالية للشركات للتأكد من صحتها ومطابقتها للمعايير.', 'Reviewing companies’ financial statements for accuracy and compliance with standards.'], day: ['التوجه لمكاتب العميل، فحص عينات من الفواتير والعقود، مطابقتها مع القوائم، وتوثيق النتائج في ملف العمل. موسم الذروة من يناير إلى أبريل.', 'Going to the client’s offices, testing samples of invoices and contracts, tying them to the statements and documenting the workpapers. Busy season runs January to April.'], judge: ['دقة العمل، الالتزام بالمعايير (IFRS)، واجتياز اختبارات SOCPA أو CPA.', 'Accuracy, adherence to standards (IFRS) and passing the SOCPA or CPA exams.'], life: '50–70', pay: 1 },
  { t: 'Transaction Services / Deal Advisory|خدمات الصفقات (الأربع الكبار)', what: ['فحص مالي للشركات قبل الاستحواذ، يخدم صناديق الملكية الخاصة والشركات المستحوِذة.', 'Financial due diligence before acquisitions, serving private equity funds and corporate buyers.'], day: ['مراجعة جودة الأرباح (Quality of Earnings) للشركة المستهدفة، تحليل الإيرادات والأرباح، مقابلات مع المدير المالي، وكتابة تقرير الفحص.', 'Reviewing the target’s quality of earnings, analysing revenue and profit, interviewing the CFO and writing the diligence report.'], judge: ['عمق التحليل، اكتشاف مخاطر لم يرها العميل، واحترام المواعيد.', 'Depth of analysis, finding risks the client missed and meeting deadlines.'], life: '60–80', pay: 2 },
  { t: 'Risk Management|إدارة المخاطر', what: ['قياس ومراقبة المخاطر المالية (سوق، ائتمان، سيولة، تشغيل) في البنوك وشركات الاستثمار.', 'Measuring and monitoring financial risk (market, credit, liquidity, operational) at banks and investment firms.'], day: ['مراجعة تقارير VaR، فحص الحدود للمتداولين، بناء نماذج مخاطر واختبارات ضغط، ورفع تقارير للجنة المخاطر.', 'Reviewing VaR reports, checking traders’ limits, building risk models and stress tests, and reporting to the risk committee.'], judge: ['دقة النماذج، اكتشاف المخاطر مبكراً، والالتزام باللوائح (Basel III, IFRS 9).', 'Model accuracy, catching risks early and regulatory compliance (Basel III, IFRS 9).'], life: '45–55', pay: 2 },
  { t: 'Corporate Development / M&A|التطوير المؤسسي داخل الشركات', what: ['فريق داخل شركة كبيرة (أرامكو، STC، سابك) مسؤول عن الاستحواذات والتحالفات.', 'A team inside a large company (Aramco, stc, SABIC) responsible for acquisitions and alliances.'], day: ['مراجعة فرص استحواذ، اجتماعات مع فرق الأعمال لفهم احتياجاتها، بناء نماذج تقييم، إدارة الفحص مع المستشارين، وعروض للجنة التنفيذية.', 'Reviewing acquisition targets, meeting business teams to understand their needs, valuation models, running diligence with advisers, and presenting to the executive committee.'], judge: ['نجاح الصفقات بعد إتمامها (الدمج) وخدمة استراتيجية الشركة.', 'How deals perform after closing (integration) and service to the company’s strategy.'], life: '50–60', pay: 2 },
  { t: 'FP&A|التخطيط المالي وتحليل الأداء', what: ['فريق داخل الشركة يبني الموازنات، يتوقع الإيرادات، ويحلل الأداء الفعلي مقابل الخطة.', 'A team inside the company that builds budgets, forecasts revenue and analyses actuals against plan.'], day: ['تحديث نماذج توقعات الشهر، جمع بيانات من الأقسام، مقارنة الفعلي بالموازنة والبحث عن أسباب الانحرافات، وبناء تقارير للإدارة.', 'Updating the month’s forecast models, gathering data from departments, comparing actuals with budget and explaining variances, and building management reports.'], judge: ['دقة التوقعات، جودة التحليل، وتبسيط الأرقام للإدارة غير المالية.', 'Forecast accuracy, quality of analysis and making numbers clear to non-finance managers.'], life: '45–55', pay: 1 }
];
