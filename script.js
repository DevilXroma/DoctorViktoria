const body = document.body;
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelectorAll('.nav a');
const year = new Date().getFullYear();
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.catalog-card');
const langButtons = document.querySelectorAll('[data-lang]');

const translations = {
  ru: {
    'brand.role': 'хирург',
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.about': 'О враче',
    'nav.book': 'Запись',
    'common.book': 'Записаться',
    'common.viewServices': 'Смотреть услуги',
    'common.city': 'Ереван',
    'common.byAppointment': 'по записи',
    'common.whatIncluded': 'Что входит',
    'common.whatToBring': 'Что взять',
    'common.atVisit': 'На приеме',
    'common.more': 'Подробнее',
    'doctor.name': 'Доктор Виктория Арменовна Меликян',
    'home.hero.label': 'Общая хирургия · Онкохирургия · Пластическая хирургия',
    'home.hero.title': 'Хирург, которому важно объяснить лечение понятно',
    'home.hero.text': 'Доктор Виктория Арменовна Меликян помогает пациенту разобраться в диагнозе, оценить необходимость операции и пройти путь лечения спокойно: от первичной консультации до восстановления.',
    'home.hero.note': 'хирургическая консультация и сопровождение пациента',
    'home.directions.label': 'Направления',
    'home.directions.title': 'С чем можно обратиться',
    'home.process.label': 'Прием',
    'home.process.title': 'Коротко и по делу',
    'home.catalog.label': 'Каталог',
    'home.catalog.title': 'Подробный перечень консультаций и услуг',
    'home.catalog.text': 'На отдельной странице собраны основные ситуации, с которыми можно обратиться: от первичного приема и второго мнения до подготовки к операции и послеоперационного наблюдения.',
    'home.catalog.button': 'Открыть услуги',
    'home.faq.label': 'Вопросы',
    'home.faq.title': 'Перед консультацией',
    'step.book': 'Запись',
    'step.exam': 'Осмотр',
    'step.plan': 'План',
    'step.follow': 'Контроль',
    'service.general.title': 'Общая хирургия',
    'service.general.short': 'Консультации по хирургическим жалобам, подготовка к плановому лечению и наблюдение после операции.',
    'service.general.more': 'На приеме врач разбирает жалобы, историю болезни, результаты анализов и обследований. После осмотра пациент получает понятный план: нужно ли дополнительное обследование, есть ли показания к операции, насколько срочно нужно действовать и как подготовиться к лечению.',
    'service.oncology.title': 'Хирургическая онкология',
    'service.oncology.short': 'Разбор диагноза, второе мнение, оценка обследований и хирургической тактики.',
    'service.oncology.more': 'Лучше принести все заключения, результаты биопсии, КТ, МРТ, УЗИ, выписки и список вопросов. Врач помогает понять, что уже известно, каких данных не хватает, когда операция действительно показана и как хирургический этап сочетается с другими методами лечения.',
    'service.plastic.title': 'Пластическая хирургия',
    'service.plastic.short': 'Консультация по эстетическим изменениям, ожиданиям, рискам, подготовке и восстановлению.',
    'service.plastic.more': 'Консультация начинается с обсуждения запроса пациента и медицинских ограничений. Врач объясняет, какие варианты коррекции возможны, где проходят границы безопасного результата, как проходит подготовка, какие анализы нужны и чего ожидать в период восстановления.',
    'faq.tests.q': 'Нужно ли приходить с анализами?',
    'faq.tests.a': 'Если обследования уже есть, лучше взять их с собой: анализы, УЗИ, КТ, МРТ, гистологию, выписки и назначения. Если документов нет, врач после осмотра подскажет, какие исследования действительно нужны, а какие можно не делать заранее.',
    'faq.second.q': 'Можно ли получить второе мнение?',
    'faq.second.a': 'Да. Второе мнение особенно полезно, если уже предложена операция, есть несколько вариантов лечения или пациенту важно спокойно разобраться в диагнозе и последовательности действий.',
    'contact.label': 'Запись',
    'contact.title': 'Записаться на консультацию',
    'contact.text': 'Можно обратиться для первичного приема, второго мнения, подготовки к плановой операции или контроля после лечения. Реальные контакты, адрес клиники и расписание добавим после уточнения.',
    'contact.call': 'Позвонить',
    'services.hero.label': 'Услуги',
    'services.hero.title': 'Хирургические направления',
    'services.hero.text': 'Здесь собраны основные ситуации, в которых пациенту нужна хирургическая консультация: оценка жалоб, разбор обследований, второе мнение, подготовка к операции и наблюдение после лечения.',
    'filter.all': 'Все',
    'filter.general': 'Общая',
    'filter.oncology': 'Онко',
    'filter.plastic': 'Пластика',
    'services.general.1.title': 'Первичная консультация хирурга',
    'services.general.1.text': 'Осмотр, анализ жалоб и понятный план дальнейших действий.',
    'services.general.1.more': 'На первичной консультации врач уточняет историю заболевания, проводит осмотр, изучает анализы и инструментальные обследования. После приема пациент понимает, нужно ли срочное лечение, какие дополнительные исследования нужны, есть ли показания к операции и как лучше подготовиться к следующему этапу.',
    'services.general.2.title': 'Подготовка к плановой операции',
    'services.general.2.text': 'Проверка обследований, рисков, сроков и маршрута лечения.',
    'services.general.2.more': 'Перед плановой операцией важно не просто назначить дату, а убедиться, что пациент обследован достаточно, риски понятны, сопутствующие заболевания учтены, а период восстановления реалистично спланирован. На консультации объясняется, какие анализы нужны, что отменить или согласовать заранее и как подготовиться к госпитализации.',
    'services.general.3.title': 'Послеоперационное наблюдение',
    'services.general.3.text': 'Контроль восстановления, перевязки и коррекция рекомендаций.',
    'services.general.3.more': 'После операции пациенту важно понимать, какие ощущения нормальны, когда нужен контрольный осмотр и какие признаки требуют внимания. Врач оценивает заживление, динамику восстановления, необходимость перевязок, ограничения по нагрузке и дальнейшие сроки возвращения к обычной активности.',
    'services.oncology.1.title': 'Второе мнение при онкологическом диагнозе',
    'services.oncology.1.text': 'Независимый разбор диагноза, обследований и предложенного лечения.',
    'services.oncology.1.more': 'Второе мнение помогает спокойно проверить, достаточно ли данных для принятия решения, понятна ли стадия процесса, есть ли показания к операции и какие вопросы стоит обсудить с лечащей командой. Врач разбирает заключения, снимки, результаты биопсии, выписки и объясняет пациенту медицинскую логику дальнейших шагов.',
    'services.oncology.2.title': 'План хирургического этапа лечения',
    'services.oncology.2.text': 'Показания, подготовка, риски и последовательность лечения.',
    'services.oncology.2.more': 'Хирургический этап должен быть встроен в общий план лечения. На консультации обсуждается, когда операция действительно нужна, какие обследования нужно завершить до вмешательства, как оценивать риски и как хирургическое лечение может сочетаться с химиотерапией, лучевой терапией или наблюдением.',
    'services.oncology.3.title': 'Маршрут пациента после обследований',
    'services.oncology.3.text': 'Понятный следующий шаг после анализов, снимков и консультаций.',
    'services.oncology.3.more': 'Часто у пациента уже есть много документов, но нет ясности, что делать дальше. Врач помогает структурировать информацию: какие данные ключевые, чего не хватает, к кому обратиться дополнительно, когда стоит ускорить лечение и как подготовиться к возможному хирургическому этапу.',
    'services.plastic.1.title': 'Первичная консультация по пластической хирургии',
    'services.plastic.1.text': 'Разбор запроса, ожиданий, ограничений и безопасности.',
    'services.plastic.1.more': 'Первая консультация нужна, чтобы отделить желание пациента от медицински безопасного и реалистичного результата. Врач оценивает исходные данные, объясняет возможные варианты коррекции, ограничения, противопоказания, примерный план подготовки и то, как будет выглядеть восстановление после вмешательства.',
    'services.plastic.2.title': 'Предоперационное планирование',
    'services.plastic.2.text': 'Обследования, сроки, подготовка и реалистичный план результата.',
    'services.plastic.2.more': 'Перед эстетической операцией важно заранее обсудить не только желаемый результат, но и медицинские ограничения. На консультации объясняется, какие анализы и заключения нужны, как подготовиться, какие есть риски, какие сроки восстановления ожидаемы и какие рекомендации нужно соблюдать после вмешательства.',
    'services.plastic.3.title': 'Послеоперационное восстановление',
    'services.plastic.3.text': 'Контроль заживления, ограничений и сроков возвращения к активности.',
    'services.plastic.3.more': 'После пластической операции результат формируется постепенно. Врач объясняет, какие изменения ожидаемы в первые дни и недели, как ухаживать за зоной вмешательства, когда приходить на контроль, какие ограничения соблюдать и в каких случаях нужно связаться с врачом раньше планового визита.',
    'about.hero.label': 'О враче',
    'about.hero.text': 'Хирург с опытом работы в клинической практике, внимательным подходом к диагностике и понятным объяснением каждого этапа лечения.',
    'about.approach.label': 'Профессиональный подход',
    'about.approach.title': 'Не просто назначить операцию, а объяснить зачем она нужна',
    'about.approach.text': 'Виктория Арменовна делает акцент на осознанном хирургическом лечении: сначала внимательно изучает жалобы, анамнез, снимки и заключения, затем объясняет пациенту возможные варианты. Цель консультации — чтобы человек понимал свой диагноз, показания к операции, риски, сроки восстановления и реальные ожидания от лечения.',
    'about.docs.label': 'Квалификация',
    'about.docs.title': 'Образование, сертификаты и профессиональное развитие',
    'about.docs.1.title': 'Медицинское образование',
    'about.docs.1.text': 'Базовая медицинская подготовка, клиническое мышление и работа с пациентами хирургического профиля.',
    'about.docs.2.title': 'Общая хирургия',
    'about.docs.2.text': 'Консультации, осмотр, подготовка к операции и послеоперационное наблюдение.',
    'about.docs.3.title': 'Пластическая хирургия',
    'about.docs.3.text': 'Эстетическое направление, предоперационная оценка, безопасность и восстановление.',
    'about.docs.4.title': 'Онкохирургический фокус',
    'about.docs.4.text': 'Разбор обследований, второе мнение и обсуждение хирургического этапа лечения.',
    'about.materials.label': 'Доверие',
    'about.materials.title': 'Кейсы, отзывы и результаты',
    'about.materials.text': 'В этом разделе позже можно разместить обезличенные клинические случаи, отзывы пациентов, сертификаты и фото до/после только при наличии согласия.',
    'about.case.1.title': 'Результаты лечения',
    'about.case.1.text': 'Краткое описание задачи, выбранной тактики, восстановления и результата без раскрытия личных данных пациента.',
    'about.case.2.title': 'Клинические случаи',
    'about.case.2.text': 'Показательный разбор: жалобы, обследования, решение, лечение и дальнейшее наблюдение.',
    'about.case.3.title': 'Отзывы пациентов',
    'about.case.3.text': 'Короткие отзывы можно добавить после получения разрешения на публикацию и удаления личных данных.',
    'footer.disclaimer': `© ${year} Dr. Viktoria. Информация на сайте не заменяет очную консультацию врача.`,
    'footer.top': 'Наверх ↑'
  },
  en: {
    'brand.role': 'surgeon', 'nav.home': 'Home', 'nav.services': 'Services', 'nav.about': 'About', 'nav.book': 'Book',
    'common.book': 'Book a visit', 'common.viewServices': 'View services', 'common.city': 'Yerevan', 'common.byAppointment': 'by appointment', 'common.whatIncluded': 'What is included', 'common.whatToBring': 'What to bring', 'common.atVisit': 'At the visit', 'common.more': 'More details',
    'doctor.name': 'Dr. Viktoria Armenovna Melikyan',
    'home.hero.label': 'General surgery · Oncologic surgery · Plastic surgery',
    'home.hero.title': 'A surgeon who explains treatment clearly',
    'home.hero.text': 'Dr. Viktoria Armenovna Melikyan helps patients understand their diagnosis, assess the need for surgery, and move through treatment calmly — from the first consultation to recovery.',
    'home.hero.note': 'surgical consultation and patient support',
    'home.directions.label': 'Directions', 'home.directions.title': 'Reasons to consult', 'home.process.label': 'Visit', 'home.process.title': 'Short and clear',
    'home.catalog.label': 'Catalog', 'home.catalog.title': 'Detailed list of consultations and services', 'home.catalog.text': 'The services page gathers the main reasons to consult: initial visit, second opinion, surgery preparation, and follow-up care.', 'home.catalog.button': 'Open services',
    'home.faq.label': 'Questions', 'home.faq.title': 'Before the consultation', 'step.book': 'Booking', 'step.exam': 'Exam', 'step.plan': 'Plan', 'step.follow': 'Follow-up',
    'service.general.title': 'General surgery', 'service.general.short': 'Consultations for surgical complaints, planned treatment preparation, and post-operative follow-up.', 'service.general.more': 'During the consultation, the doctor reviews complaints, medical history, test results, and imaging. The patient receives a clear plan: whether more diagnostics are needed, whether surgery is indicated, how urgent the situation is, and how to prepare for treatment.',
    'service.oncology.title': 'Oncologic surgery', 'service.oncology.short': 'Diagnosis review, second opinion, imaging assessment, and surgical strategy discussion.', 'service.oncology.more': 'Bring reports, biopsy results, CT/MRI/ultrasound findings, discharge summaries, and questions. The doctor helps clarify what is known, what information is missing, when surgery is truly indicated, and how surgery fits into broader treatment.',
    'service.plastic.title': 'Plastic surgery', 'service.plastic.short': 'Consultation on aesthetic changes, expectations, risks, preparation, and recovery.', 'service.plastic.more': 'The consultation begins with the patient’s request and medical limitations. The doctor explains possible options, the boundaries of a safe result, preparation, required tests, and the recovery period.',
    'faq.tests.q': 'Should I bring test results?', 'faq.tests.a': 'If you already have tests, imaging, biopsy results, discharge summaries, or prescriptions, bring them. If not, the doctor will explain what is actually needed after the examination.',
    'faq.second.q': 'Can I get a second opinion?', 'faq.second.a': 'Yes. A second opinion is useful when surgery has already been suggested, when there are several treatment options, or when the patient wants to understand the diagnosis and next steps calmly.',
    'contact.label': 'Booking', 'contact.title': 'Book a consultation', 'contact.text': 'You can book an initial visit, second opinion, surgery preparation, or post-treatment follow-up. Real contacts, clinic address, and schedule will be added later.', 'contact.call': 'Call',
    'services.hero.label': 'Services', 'services.hero.title': 'Surgical directions', 'services.hero.text': 'This page gathers the main situations where a surgical consultation may be needed: complaint assessment, test review, second opinion, surgery preparation, and follow-up care.',
    'filter.all': 'All', 'filter.general': 'General', 'filter.oncology': 'Onco', 'filter.plastic': 'Plastic',
    'services.general.1.title': 'Initial surgical consultation', 'services.general.1.text': 'Examination, complaint review, and a clear next-step plan.', 'services.general.1.more': 'The doctor reviews the history, performs an examination, and studies available tests and imaging. After the visit, the patient understands whether urgent care is needed, what additional diagnostics are reasonable, whether surgery is indicated, and how to prepare for the next stage.',
    'services.general.2.title': 'Preparation for planned surgery', 'services.general.2.text': 'Checking diagnostics, risks, timing, and the treatment pathway.', 'services.general.2.more': 'Before planned surgery, it is important to make sure the patient has been examined sufficiently, risks are clear, related conditions are considered, and recovery is planned realistically. The consultation explains required tests, what to coordinate in advance, and how to prepare for admission.',
    'services.general.3.title': 'Post-operative follow-up', 'services.general.3.text': 'Recovery control, dressings, and recommendation adjustment.', 'services.general.3.more': 'After surgery, the patient needs to know what is normal, when a control visit is needed, and which symptoms require attention. The doctor evaluates healing, recovery dynamics, dressings, activity limits, and return-to-life timing.',
    'services.oncology.1.title': 'Second opinion for an oncologic diagnosis', 'services.oncology.1.text': 'Independent review of diagnosis, tests, and proposed treatment.', 'services.oncology.1.more': 'A second opinion helps check whether there is enough information for decision-making, whether staging is clear, whether surgery is indicated, and what should be discussed with the treatment team. The doctor reviews reports, images, biopsy results, and discharge notes.',
    'services.oncology.2.title': 'Planning the surgical treatment stage', 'services.oncology.2.text': 'Indications, preparation, risks, and treatment sequence.', 'services.oncology.2.more': 'The surgical stage should fit the overall treatment plan. The consultation covers when surgery is needed, what diagnostics must be completed, how to evaluate risks, and how surgery may combine with chemotherapy, radiotherapy, or observation.',
    'services.oncology.3.title': 'Patient pathway after diagnostics', 'services.oncology.3.text': 'A clear next step after tests, imaging, and consultations.', 'services.oncology.3.more': 'Patients often have many documents but no clear route. The doctor helps organize the information, identify key data, decide what is missing, who to consult next, when to speed up treatment, and how to prepare for possible surgery.',
    'services.plastic.1.title': 'Initial plastic surgery consultation', 'services.plastic.1.text': 'Request, expectations, limitations, and safety.', 'services.plastic.1.more': 'The first consultation helps separate the patient’s wish from what is medically safe and realistic. The doctor assesses baseline features, explains correction options, limitations, contraindications, preparation, and recovery.',
    'services.plastic.2.title': 'Pre-operative planning', 'services.plastic.2.text': 'Tests, timing, preparation, and a realistic result plan.', 'services.plastic.2.more': 'Before aesthetic surgery, both the desired result and medical limitations should be discussed. The consultation explains required tests, preparation, risks, expected recovery timing, and post-operative recommendations.',
    'services.plastic.3.title': 'Post-operative recovery', 'services.plastic.3.text': 'Healing control, restrictions, and return-to-activity timing.', 'services.plastic.3.more': 'After plastic surgery, the result forms gradually. The doctor explains what changes are expected, how to care for the area, when follow-ups are needed, what restrictions apply, and when to contact the doctor earlier.',
    'about.hero.label': 'About', 'about.hero.text': 'A surgeon with clinical practice experience, attentive diagnostics, and clear explanations at every stage of treatment.',
    'about.approach.label': 'Professional approach', 'about.approach.title': 'Not just to prescribe surgery, but to explain why it is needed', 'about.approach.text': 'Dr. Melikyan focuses on conscious surgical care: first reviewing complaints, history, images, and reports, then explaining the possible options. The goal is for the patient to understand the diagnosis, indications, risks, recovery time, and realistic expectations.',
    'about.docs.label': 'Qualification', 'about.docs.title': 'Education, certificates, and professional development', 'about.docs.1.title': 'Medical education', 'about.docs.1.text': 'Medical training, clinical thinking, and work with surgical patients.', 'about.docs.2.title': 'General surgery', 'about.docs.2.text': 'Consultations, examination, preparation, and post-operative follow-up.', 'about.docs.3.title': 'Plastic surgery', 'about.docs.3.text': 'Aesthetic direction, pre-operative assessment, safety, and recovery.', 'about.docs.4.title': 'Oncologic surgery focus', 'about.docs.4.text': 'Test review, second opinion, and surgical treatment stage discussion.',
    'about.materials.label': 'Trust', 'about.materials.title': 'Cases, reviews, and results', 'about.materials.text': 'This section can later include anonymized clinical cases, patient reviews, certificates, and before/after images with consent.', 'about.case.1.title': 'Treatment results', 'about.case.1.text': 'A short description of the task, chosen strategy, recovery, and result without personal data.', 'about.case.2.title': 'Clinical cases', 'about.case.2.text': 'A structured case: complaints, diagnostics, decision, treatment, and follow-up.', 'about.case.3.title': 'Patient reviews', 'about.case.3.text': 'Short reviews can be added after permission and removal of personal data.',
    'footer.disclaimer': `© ${year} Dr. Viktoria. Website information does not replace an in-person medical consultation.`, 'footer.top': 'Back to top ↑'
  },
  hy: {
    'brand.role': 'վիրաբույժ', 'nav.home': 'Գլխավոր', 'nav.services': 'Ծառայություններ', 'nav.about': 'Բժշկի մասին', 'nav.book': 'Գրանցում',
    'common.book': 'Գրանցվել', 'common.viewServices': 'Դիտել ծառայությունները', 'common.city': 'Երևան', 'common.byAppointment': 'նախնական գրանցմամբ', 'common.whatIncluded': 'Ինչ է ներառված', 'common.whatToBring': 'Ինչ բերել', 'common.atVisit': 'Ընդունման ժամանակ', 'common.more': 'Մանրամասն',
    'doctor.name': 'Բժիշկ Վիկտորիա Արմենովնա Մելիքյան',
    'home.hero.label': 'Ընդհանուր վիրաբուժություն · Օնկովիրաբուժություն · Պլաստիկ վիրաբուժություն',
    'home.hero.title': 'Վիրաբույժ, որը պարզ բացատրում է բուժումը',
    'home.hero.text': 'Բժիշկ Վիկտորիա Արմենովնա Մելիքյանը օգնում է պացիենտին հասկանալ ախտորոշումը, գնահատել վիրահատության անհրաժեշտությունը և անցնել բուժման ճանապարհը հանգիստ՝ առաջին խորհրդատվությունից մինչև վերականգնում։',
    'home.hero.note': 'վիրաբուժական խորհրդատվություն և պացիենտի ուղեկցում',
    'home.directions.label': 'Ուղղություններ', 'home.directions.title': 'Ինչ հարցերով դիմել', 'home.process.label': 'Ընդունում', 'home.process.title': 'Կարճ և հստակ',
    'home.catalog.label': 'Կատալոգ', 'home.catalog.title': 'Խորհրդատվությունների և ծառայությունների մանրամասն ցանկ', 'home.catalog.text': 'Առանձին էջում հավաքված են հիմնական իրավիճակները՝ առաջնային ընդունումից և երկրորդ կարծիքից մինչև վիրահատության պատրաստում և հետվիրահատական հսկում։', 'home.catalog.button': 'Բացել ծառայությունները',
    'home.faq.label': 'Հարցեր', 'home.faq.title': 'Խորհրդատվությունից առաջ', 'step.book': 'Գրանցում', 'step.exam': 'Զննում', 'step.plan': 'Պլան', 'step.follow': 'Հսկում',
    'service.general.title': 'Ընդհանուր վիրաբուժություն', 'service.general.short': 'Խորհրդատվություններ վիրաբուժական գանգատների, պլանային բուժման պատրաստման և հետվիրահատական հսկման համար։', 'service.general.more': 'Ընդունման ժամանակ բժիշկը վերլուծում է գանգատները, հիվանդության պատմությունը, անալիզները և հետազոտությունները։ Զննությունից հետո պացիենտը ստանում է հասկանալի պլան՝ արդյոք պետք են լրացուցիչ հետազոտություններ, կա՞ վիրահատության ցուցում, որքան շտապ է պետք գործել և ինչպես պատրաստվել բուժմանը։',
    'service.oncology.title': 'Օնկովիրաբուժություն', 'service.oncology.short': 'Ախտորոշման վերլուծություն, երկրորդ կարծիք, հետազոտությունների և վիրաբուժական տակտիկայի գնահատում։', 'service.oncology.more': 'Ցանկալի է բերել բոլոր եզրակացությունները, բիոպսիայի արդյունքները, ԿՏ, ՄՌՏ, ՈՒՁՀ, դուրսգրումները և հարցերի ցանկը։ Բժիշկը օգնում է հասկանալ՝ ինչն է հայտնի, ինչ տվյալներ են պակասում, երբ է վիրահատությունը ցուցված և ինչպես է այն կապվում բուժման մյուս փուլերի հետ։',
    'service.plastic.title': 'Պլաստիկ վիրաբուժություն', 'service.plastic.short': 'Խորհրդատվություն էսթետիկ փոփոխությունների, սպասումների, ռիսկերի, պատրաստման և վերականգնման մասին։', 'service.plastic.more': 'Խորհրդատվությունը սկսվում է պացիենտի ցանկության և բժշկական սահմանափակումների քննարկումից։ Բժիշկը բացատրում է հնարավոր տարբերակները, անվտանգ արդյունքի սահմանները, պատրաստման փուլը, անհրաժեշտ անալիզները և վերականգնման ընթացքը։',
    'faq.tests.q': 'Պետք է բերել անալիզներ՞', 'faq.tests.a': 'Եթե հետազոտություններ արդեն կան, լավ է բերել՝ անալիզներ, ՈՒՁՀ, ԿՏ, ՄՌՏ, հիստոլոգիա, դուրսգրումներ և նշանակումներ։ Եթե փաստաթղթեր չկան, բժիշկը զննումից հետո կասի, թե ինչն է իրականում անհրաժեշտ։',
    'faq.second.q': 'Կարելի՞ է ստանալ երկրորդ կարծիք', 'faq.second.a': 'Այո։ Երկրորդ կարծիքը օգտակար է, երբ արդեն առաջարկվել է վիրահատություն, կան մի քանի բուժման տարբերակներ կամ պացիենտը ուզում է հանգիստ հասկանալ ախտորոշումն ու հաջորդ քայլերը։',
    'contact.label': 'Գրանցում', 'contact.title': 'Գրանցվել խորհրդատվության', 'contact.text': 'Կարելի է դիմել առաջնային ընդունման, երկրորդ կարծիքի, պլանային վիրահատության պատրաստման կամ բուժումից հետո հսկման համար։ Իրական կոնտակտները, կլինիկայի հասցեն և գրաֆիկը կավելացվեն հետո։', 'contact.call': 'Զանգել',
    'services.hero.label': 'Ծառայություններ', 'services.hero.title': 'Վիրաբուժական ուղղություններ', 'services.hero.text': 'Այստեղ հավաքված են հիմնական իրավիճակները, երբ պացիենտին կարող է պետք լինել վիրաբուժական խորհրդատվություն՝ գանգատների գնահատում, հետազոտությունների վերլուծություն, երկրորդ կարծիք, վիրահատության պատրաստում և հետագա հսկում։',
    'filter.all': 'Բոլորը', 'filter.general': 'Ընդհանուր', 'filter.oncology': 'Օնկո', 'filter.plastic': 'Պլաստիկ',
    'services.general.1.title': 'Վիրաբույժի առաջնային խորհրդատվություն', 'services.general.1.text': 'Զննում, գանգատների վերլուծություն և հաջորդ քայլերի հստակ պլան։', 'services.general.1.more': 'Բժիշկը պարզում է հիվանդության պատմությունը, կատարում է զննում և ուսումնասիրում հետազոտությունները։ Ընդունումից հետո պացիենտը հասկանում է՝ արդյոք պետք է շտապ օգնություն, ինչ լրացուցիչ հետազոտություններ են անհրաժեշտ և կա՞ վիրահատության ցուցում։',
    'services.general.2.title': 'Պլանային վիրահատության պատրաստում', 'services.general.2.text': 'Հետազոտությունների, ռիսկերի, ժամկետների և բուժման ուղու ստուգում։', 'services.general.2.more': 'Պլանային վիրահատությունից առաջ կարևոր է համոզվել, որ պացիենտը բավարար հետազոտված է, ռիսկերը հասկանալի են, ուղեկցող հիվանդությունները հաշվի են առնված, իսկ վերականգնումը պլանավորված է իրատեսորեն։',
    'services.general.3.title': 'Հետվիրահատական հսկում', 'services.general.3.text': 'Վերականգնման հսկում, վիրակապում և առաջարկությունների ճշգրտում։', 'services.general.3.more': 'Վիրահատությունից հետո բժիշկը գնահատում է վերքի լավացումը, վերականգնման ընթացքը, վիրակապումների անհրաժեշտությունը, ֆիզիկական սահմանափակումները և սովորական ակտիվությանը վերադառնալու ժամկետները։',
    'services.oncology.1.title': 'Երկրորդ կարծիք օնկոլոգիական ախտորոշման դեպքում', 'services.oncology.1.text': 'Ախտորոշման, հետազոտությունների և առաջարկված բուժման անկախ վերլուծություն։', 'services.oncology.1.more': 'Երկրորդ կարծիքը օգնում է հասկանալ՝ բավարար են արդյոք տվյալները որոշում ընդունելու համար, պարզ է արդյոք փուլը, կա՞ վիրահատության ցուցում և ինչ հարցեր քննարկել բուժող թիմի հետ։',
    'services.oncology.2.title': 'Վիրաբուժական փուլի պլանավորում', 'services.oncology.2.text': 'Ցուցումներ, պատրաստում, ռիսկեր և բուժման հաջորդականություն։', 'services.oncology.2.more': 'Վիրաբուժական փուլը պետք է տեղավորվի ընդհանուր բուժման պլանի մեջ։ Խորհրդատվության ընթացքում քննարկվում է՝ երբ է վիրահատությունը անհրաժեշտ, ինչ հետազոտություններ ավարտել և ինչպես գնահատել ռիսկերը։',
    'services.oncology.3.title': 'Պացիենտի ուղին հետազոտություններից հետո', 'services.oncology.3.text': 'Հետազոտություններից, նկարներից և խորհրդատվություններից հետո հստակ հաջորդ քայլ։', 'services.oncology.3.more': 'Բժիշկը օգնում է կառուցել տեղեկատվությունը, հասկանալ հիմնական տվյալները, բացակայող հետազոտությունները, հաջորդ մասնագետին դիմելու անհրաժեշտությունը և հնարավոր վիրահատության պատրաստումը։',
    'services.plastic.1.title': 'Առաջնային խորհրդատվություն պլաստիկ վիրաբուժության համար', 'services.plastic.1.text': 'Ցանկության, սպասումների, սահմանափակումների և անվտանգության քննարկում։', 'services.plastic.1.more': 'Առաջին խորհրդատվությունը օգնում է տարբերել պացիենտի ցանկությունը բժշկականորեն անվտանգ և իրատեսական արդյունքից։ Բժիշկը գնահատում է ելքային տվյալները, բացատրում հնարավոր տարբերակները և վերականգնումը։',
    'services.plastic.2.title': 'Նախավիրահատական պլանավորում', 'services.plastic.2.text': 'Հետազոտություններ, ժամկետներ, պատրաստում և իրատեսական արդյունքի պլան։', 'services.plastic.2.more': 'Էսթետիկ վիրահատությունից առաջ քննարկվում են ցանկալի արդյունքը և բժշկական սահմանափակումները, անհրաժեշտ անալիզները, ռիսկերը, վերականգնման ժամկետներն ու առաջարկությունները։',
    'services.plastic.3.title': 'Հետվիրահատական վերականգնում', 'services.plastic.3.text': 'Լավացման հսկում, սահմանափակումներ և ակտիվությանը վերադառնալու ժամկետներ։', 'services.plastic.3.more': 'Պլաստիկ վիրահատությունից հետո արդյունքը ձևավորվում է աստիճանաբար։ Բժիշկը բացատրում է սպասվող փոփոխությունները, խնամքը, հսկողական այցերը և երբ պետք է կապվել բժշկի հետ ավելի շուտ։',
    'about.hero.label': 'Բժշկի մասին', 'about.hero.text': 'Վիրաբույժ կլինիկական փորձով, ուշադիր ախտորոշմամբ և բուժման յուրաքանչյուր փուլի պարզ բացատրությամբ։',
    'about.approach.label': 'Մասնագիտական մոտեցում', 'about.approach.title': 'Ոչ միայն նշանակել վիրահատություն, այլ բացատրել՝ ինչու է այն պետք', 'about.approach.text': 'Բժիշկ Մելիքյանը շեշտը դնում է գիտակցված վիրաբուժական բուժման վրա՝ նախ ուսումնասիրում է գանգատները, պատմությունը, նկարներն ու եզրակացությունները, հետո բացատրում հնարավոր տարբերակները։',
    'about.docs.label': 'Որակավորում', 'about.docs.title': 'Կրթություն, սերտիֆիկատներ և մասնագիտական զարգացում', 'about.docs.1.title': 'Բժշկական կրթություն', 'about.docs.1.text': 'Բժշկական պատրաստվածություն, կլինիկական մտածողություն և վիրաբուժական պացիենտների հետ աշխատանք։', 'about.docs.2.title': 'Ընդհանուր վիրաբուժություն', 'about.docs.2.text': 'Խորհրդատվություններ, զննում, վիրահատության պատրաստում և հետվիրահատական հսկում։', 'about.docs.3.title': 'Պլաստիկ վիրաբուժություն', 'about.docs.3.text': 'Էսթետիկ ուղղություն, նախավիրահատական գնահատում, անվտանգություն և վերականգնում։', 'about.docs.4.title': 'Օնկովիրաբուժական ֆոկուս', 'about.docs.4.text': 'Հետազոտությունների վերլուծություն, երկրորդ կարծիք և վիրաբուժական փուլի քննարկում։',
    'about.materials.label': 'Վստահություն', 'about.materials.title': 'Դեպքեր, կարծիքներ և արդյունքներ', 'about.materials.text': 'Այստեղ հետագայում կարելի է տեղադրել անանուն կլինիկական դեպքեր, պացիենտների կարծիքներ, սերտիֆիկատներ և մինչև/հետո լուսանկարներ՝ համաձայնությամբ։', 'about.case.1.title': 'Բուժման արդյունքներ', 'about.case.1.text': 'Խնդրի, ընտրված տակտիկայի, վերականգնման և արդյունքի կարճ նկարագրություն՝ առանց անձնական տվյալների։', 'about.case.2.title': 'Կլինիկական դեպքեր', 'about.case.2.text': 'Կառուցվածքային դեպք՝ գանգատներ, ախտորոշում, որոշում, բուժում և հսկում։', 'about.case.3.title': 'Պացիենտների կարծիքներ', 'about.case.3.text': 'Կարճ կարծիքներ կարելի է ավելացնել թույլտվությունից և անձնական տվյալները հեռացնելուց հետո։',
    'footer.disclaimer': `© ${year} Dr. Viktoria. Կայքի տեղեկատվությունը չի փոխարինում բժշկի անձնական խորհրդատվությանը։`, 'footer.top': 'Վերև ↑'
  }
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.ru;
  document.documentElement.lang = lang;
  localStorage.setItem('siteLanguage', lang);

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
}

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const linkPage = link.getAttribute('href')?.split('#')[0];

  if (linkPage === currentPage && !link.getAttribute('href')?.includes('#')) {
    link.classList.add('active');
  }

  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

function setFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === filter);
  });

  catalogCards.forEach((card) => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !visible);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter || 'all'));
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang || 'ru'));
});

const hash = window.location.hash.replace('#', '');
if (['general', 'oncology', 'plastic'].includes(hash)) {
  setFilter(hash);
}

applyLanguage(localStorage.getItem('siteLanguage') || 'ru');
