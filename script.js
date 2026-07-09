const body = document.body;
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelectorAll('.nav a');
const yearNode = document.querySelector('#year');
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.catalog-card');
const langButtons = document.querySelectorAll('[data-lang]');

if (yearNode) yearNode.textContent = new Date().getFullYear();

const commonTranslations = {
  ru: {
    'brand.role': 'хирург', 'nav.home': 'Главная', 'nav.services': 'Услуги', 'nav.about': 'О враче', 'nav.book': 'Запись',
    'common.book': 'Записаться', 'common.viewServices': 'Смотреть услуги', 'contact.call': 'Позвонить',
    'filter.all': 'Все', 'filter.general': 'Общая', 'filter.oncology': 'Онко', 'filter.plastic': 'Пластика', 'footer.top': 'Наверх ↑'
  },
  en: {
    'brand.role': 'surgeon', 'nav.home': 'Home', 'nav.services': 'Services', 'nav.about': 'About', 'nav.book': 'Book',
    'common.book': 'Book a visit', 'common.viewServices': 'View services', 'contact.call': 'Call',
    'filter.all': 'All', 'filter.general': 'General', 'filter.oncology': 'Onco', 'filter.plastic': 'Plastic', 'footer.top': 'Back to top ↑'
  },
  hy: {
    'brand.role': 'վիրաբույժ', 'nav.home': 'Գլխավոր', 'nav.services': 'Ծառայություններ', 'nav.about': 'Բժշկի մասին', 'nav.book': 'Գրանցում',
    'common.book': 'Գրանցվել', 'common.viewServices': 'Դիտել ծառայությունները', 'contact.call': 'Զանգել',
    'filter.all': 'Բոլորը', 'filter.general': 'Ընդհանուր', 'filter.oncology': 'Օնկո', 'filter.plastic': 'Պլաստիկ', 'footer.top': 'Վերև ↑'
  }
};

const textTranslations = {
  en: {
    'Общая хирургия · Онкохирургия · Пластическая хирургия': 'General surgery · Oncologic surgery · Plastic surgery',
    'Консультации и операции с понятным планом лечения': 'Consultations and surgery with a clear treatment plan',
    'Доктор Виктория Арменовна Меликян не только консультирует пациентов, но и проводит хирургическое лечение по показаниям: от подготовки к операции до послеоперационного наблюдения и восстановления.': 'Dr. Viktoria Armenovna Melikyan not only consults patients, but also performs surgical treatment when indicated — from surgery preparation to post-operative follow-up and recovery.',
    'Доктор Виктория Арменовна Меликян': 'Dr. Viktoria Armenovna Melikyan',
    'хирургическое лечение, консультации и сопровождение пациента': 'surgical treatment, consultations, and patient support',
    'От консультации до операции': 'From consultation to surgery',
    'Пациент получает не общие слова, а понятный маршрут: что проверить, когда нужна операция, как подготовиться и чего ожидать после.': 'The patient receives a clear route: what to check, when surgery is needed, how to prepare, and what to expect afterward.',
    'Решение по показаниям': 'Indication-based decisions',
    'Операция обсуждается только после осмотра, анализа документов и оценки пользы, рисков, сроков и альтернатив.': 'Surgery is discussed only after examination, document review, and assessment of benefits, risks, timing, and alternatives.',
    'Сопровождение после лечения': 'Support after treatment',
    'Контроль заживления, коррекция рекомендаций, ограничения по нагрузке и возвращение к обычной активности — часть плана.': 'Healing control, recommendation updates, activity limits, and return to daily life are part of the plan.',
    'Направления': 'Directions',
    'Хирургические направления': 'Surgical directions',
    'Каждое направление включает очную консультацию, оценку показаний, подготовку к вмешательству и хирургическое лечение в рамках выбранной тактики.': 'Each direction includes an in-person consultation, indication assessment, preparation for intervention, and surgical treatment within the chosen strategy.',
    'Плановое лечение': 'Planned treatment',
    'Общая хирургия': 'General surgery',
    'Диагностика хирургических жалоб, подготовка к операции, малые вмешательства, плановое лечение и послеоперационный контроль.': 'Diagnosis of surgical complaints, surgery preparation, minor procedures, planned treatment, and post-operative follow-up.',
    'Что входит': 'What is included',
    'На приеме врач разбирает жалобы, историю болезни, анализы и обследования. После осмотра пациент получает план: нужно ли дополнительное обследование, есть ли показания к операции, насколько срочно нужно действовать и как подготовиться к лечению.': 'During the visit, the doctor reviews complaints, medical history, tests, and examinations. After the examination, the patient receives a plan: whether more diagnostics are needed, whether surgery is indicated, how urgent it is, and how to prepare.',
    'Онкоразбор и операция': 'Oncology review and surgery',
    'Хирургическая онкология': 'Oncologic surgery',
    'Второе мнение, разбор обследований, оценка операбельности, подготовка к хирургическому этапу и наблюдение после лечения.': 'Second opinion, review of tests, operability assessment, preparation for the surgical stage, and follow-up after treatment.',
    'Что взять': 'What to bring',
    'Лучше принести заключения, результаты биопсии, КТ, МРТ, УЗИ, выписки и список вопросов. Врач помогает понять, что уже известно, каких данных не хватает и как хирургический этап сочетается с другими методами лечения.': 'Bring reports, biopsy results, CT/MRI/ultrasound findings, discharge summaries, and questions. The doctor helps clarify what is known, what data is missing, and how surgery fits with other treatments.',
    'Эстетическая хирургия': 'Aesthetic surgery',
    'Пластическая хирургия': 'Plastic surgery',
    'Консультация, подбор методики, предоперационное планирование, пластические операции и сопровождение восстановления.': 'Consultation, method selection, pre-operative planning, plastic surgery, and recovery support.',
    'На приеме': 'At the visit',
    'Врач обсуждает запрос пациента, медицинские ограничения и реалистичный результат. Объясняет возможные варианты операции, подготовку, анализы, риски и этапы восстановления.': 'The doctor discusses the patient’s request, medical limitations, and realistic outcomes. Possible surgical options, preparation, tests, risks, and recovery stages are explained.',
    'Подробнее': 'More details',
    'Как проходит работа': 'How the process works',
    'Путь пациента': 'Patient pathway',
    'От первичного приема до операции и контрольных визитов — пациент понимает, зачем нужен каждый следующий шаг.': 'From the first visit to surgery and follow-up appointments, the patient understands why each next step is needed.',
    'Запись': 'Booking', 'Осмотр': 'Examination', 'Операционный план': 'Surgical plan', 'Контроль': 'Follow-up',
    'Перед консультацией': 'Before the consultation',
    'Что подготовить': 'What to prepare',
    'Чем больше медицинской информации есть на приеме, тем точнее можно обсудить показания к операции, риски и дальнейший план.': 'The more medical information is available at the visit, the more precisely indications for surgery, risks, and the next plan can be discussed.',
    'результаты анализов крови и мочи, если они уже есть;': 'blood and urine test results, if available;',
    'УЗИ, КТ, МРТ, маммографию или другие снимки;': 'ultrasound, CT, MRI, mammography, or other imaging;',
    'заключения врачей, выписки, гистологию или биопсию;': 'doctor reports, discharge summaries, histology, or biopsy results;',
    'список лекарств, аллергий и хронических заболеваний;': 'a list of medications, allergies, and chronic conditions;',
    'информацию о прошлых операциях и осложнениях, если они были;': 'information about previous surgeries and complications, if any;',
    'короткий список вопросов: про операцию, сроки, восстановление и стоимость.': 'a short list of questions about surgery, timing, recovery, and cost.',
    'Доверие': 'Trust',
    'Кейсы, отзывы и результаты': 'Cases, reviews, and results',
    'Формат будущего блока: не обещания “идеального результата”, а понятные истории — с задачей, тактикой, восстановлением и отзывом пациента.': 'Future content format: not promises of a “perfect result,” but clear stories with a task, strategy, recovery, and patient feedback.',
    'Ниже — формат будущих материалов. Это не обещания результата, а понятные примеры того, как можно показывать опыт врача: задача, решение, восстановление и отзыв пациента.': 'Below is a format for future materials. These are not outcome promises, but clear examples of how to present experience: task, decision, recovery, and feedback.',
    'Кейс · общая хирургия': 'Case · general surgery',
    'Удаление образования мягких тканей': 'Soft tissue formation removal',
    'Пациент обратился из-за растущего образования и дискомфорта. После осмотра было выполнено удаление по показаниям, материал направлен на гистологию, восстановление прошло под контролем врача.': 'The patient came with a growing formation and discomfort. After examination, removal was performed when indicated, the material was sent for histology, and recovery was monitored.',
    'Кейс · онкохирургия': 'Case · oncologic surgery',
    'Второе мнение перед операцией': 'Second opinion before surgery',
    'Пациентка пришла с заключениями, снимками и тревогой из-за предложенного лечения. Документы были структурированы, выделены ключевые вопросы и составлен понятный план.': 'The patient came with reports, imaging, and anxiety about proposed treatment. Documents were structured, key questions were identified, and a clear plan was created.',
    'Результат · пластика': 'Result · plastic surgery',
    'Подготовка к эстетической операции': 'Preparation for aesthetic surgery',
    'До вмешательства были обсуждены ожидания, ограничения, обследования, сроки восстановления и возможные риски. Такой подход помогает принимать решение без спешки.': 'Before the procedure, expectations, limitations, tests, recovery time, and possible risks were discussed. This approach helps patients decide without rushing.',
    'Отзыв · пример': 'Review · example',
    '“Мне наконец объяснили, что происходит”': '“Someone finally explained what is happening”',
    'Пациент отмечает спокойное объяснение диагноза, отсутствие давления и понятный план: какие анализы нужны, когда приходить на контроль и какие симптомы нельзя игнорировать.': 'The patient notes a calm explanation of the diagnosis, no pressure, and a clear plan: what tests are needed, when to follow up, and which symptoms should not be ignored.',
    'Результат · восстановление': 'Result · recovery',
    'Контроль после операции': 'Post-operative follow-up',
    'После вмешательства пациент получил рекомендации по уходу, ограничениям и контрольным визитам. Такой формат снижает тревожность после хирургического лечения.': 'After the intervention, the patient received care recommendations, restrictions, and follow-up visits. This format reduces anxiety after surgical treatment.',
    '“Без лишних обещаний, но очень понятно”': '“No unnecessary promises, but very clear”',
    'Хороший отзыв для медицинского сайта — не про чудо, а про доверие: врач объяснил риски, варианты лечения, сроки восстановления и помог принять взвешенное решение.': 'A good medical review is not about miracles, but about trust: the doctor explained risks, treatment options, recovery timing, and helped make a balanced decision.',
    'Вопросы': 'Questions',
    'Она только консультирует или оперирует тоже?': 'Does she only consult, or does she also operate?',
    'На сайте речь идет не только о консультациях. Виктория Арменовна проводит хирургическое лечение по показаниям, а консультация нужна, чтобы безопасно определить тактику, объем операции и подготовку.': 'The site is not only about consultations. Dr. Melikyan performs surgical treatment when indicated; the consultation helps safely define strategy, surgical scope, and preparation.',
    'Нужно ли приходить с анализами?': 'Should I bring test results?',
    'Если обследования уже есть, лучше взять их с собой. Если документов нет, врач после осмотра подскажет, какие исследования действительно нужны перед операцией или наблюдением.': 'If you already have test results, bring them. If not, the doctor will explain after examination which studies are truly needed before surgery or follow-up.',
    'Можно ли получить второе мнение?': 'Can I get a second opinion?',
    'Да. Второе мнение полезно, если уже предложена операция, есть онкологический диагноз или пациент хочет спокойно понять последовательность лечения.': 'Yes. A second opinion is useful if surgery has already been suggested, there is an oncologic diagnosis, or the patient wants to calmly understand the treatment sequence.',
    'Когда становится понятно, нужна ли операция?': 'When does it become clear whether surgery is needed?',
    'Обычно после осмотра и анализа документов. Иногда для решения нужны дополнительные обследования, чтобы не делать вмешательство без достаточных показаний.': 'Usually after examination and document review. Sometimes additional tests are needed so that surgery is not performed without sufficient indications.',
    'Можно ли обсудить пластическую операцию заранее?': 'Can I discuss plastic surgery in advance?',
    'Да. На консультации обсуждаются желаемый результат, ограничения, возможная методика, анализы, риски, сроки восстановления и реалистичные ожидания.': 'Yes. The consultation covers the desired result, limitations, possible method, tests, risks, recovery time, and realistic expectations.',
    'Как формируется стоимость?': 'How is the cost determined?',
    'Стоимость зависит от диагноза, объема вмешательства, клиники, анестезии, расходных материалов и количества контрольных визитов. Точный расчет возможен после очной оценки.': 'The cost depends on the diagnosis, procedure scope, clinic, anesthesia, materials, and number of follow-up visits. Accurate calculation is possible after an in-person assessment.',
    'Записаться на консультацию': 'Book a consultation',
    'Можно обратиться для первичного приема, второго мнения, подготовки к плановой операции, пластического вмешательства или контроля после хирургического лечения.': 'You can book an initial visit, second opinion, preparation for planned surgery, plastic intervention, or follow-up after surgical treatment.',
    '©': '©',
    'Dr. Viktoria. Информация на сайте не заменяет очную консультацию врача.': 'Dr. Viktoria. Website information does not replace an in-person medical consultation.',
    'Услуги': 'Services',
    'Консультации, операции и восстановление': 'Consultations, surgery, and recovery',
    'Каталог построен вокруг реальных задач пациента: понять диагноз, выбрать безопасную тактику, подготовиться к операции, пройти вмешательство и восстановиться под наблюдением врача.': 'The catalog is built around real patient tasks: understand the diagnosis, choose a safe strategy, prepare for surgery, undergo intervention, and recover under medical supervision.',
    'Старт лечения': 'Start of treatment',
    'Первичная консультация хирурга': 'Initial surgical consultation',
    'Осмотр, анализ жалоб, документов и понятный план действий.': 'Examination, complaint and document review, and a clear action plan.',
    'Врач оценивает жалобы, анамнез, результаты обследований и объясняет, нужна ли операция, какое обследование стоит завершить, какие есть риски и как подготовиться к лечению.': 'The doctor evaluates complaints, history, test results, and explains whether surgery is needed, what diagnostics should be completed, what risks exist, and how to prepare.',
    'Операционный план': 'Surgical plan',
    'Подготовка к плановой операции': 'Preparation for planned surgery',
    'Проверка анализов, рисков, сроков и маршрута госпитализации.': 'Review of tests, risks, timing, and hospitalization pathway.',
    'Перед операцией важно убедиться, что пациент обследован достаточно, сопутствующие заболевания учтены, а восстановление спланировано реалистично. На консультации обсуждаются анализы, ограничения и подготовка.': 'Before surgery, it is important to ensure the patient is sufficiently examined, related conditions are considered, and recovery is planned realistically. Tests, restrictions, and preparation are discussed.',
    'После операции': 'After surgery',
    'Послеоперационное наблюдение': 'Post-operative follow-up',
    'Контроль заживления, перевязки, ограничения и восстановление.': 'Healing control, dressings, restrictions, and recovery.',
    'Пациент получает ответы на практические вопросы: что нормально после операции, когда нужен контроль, какие симптомы требуют внимания и когда можно возвращаться к обычной активности.': 'The patient receives practical answers: what is normal after surgery, when follow-up is needed, which symptoms require attention, and when normal activity can resume.',
    'Кожа и ткани': 'Skin and tissues',
    'Новообразования кожи и мягких тканей': 'Skin and soft tissue formations',
    'Оценка образований, выбор тактики, удаление по показаниям.': 'Assessment of formations, strategy selection, and removal when indicated.',
    'Врач оценивает внешний вид, динамику, жалобы и документы. Если требуется удаление, заранее обсуждаются объем вмешательства, обезболивание, гистология и уход после процедуры.': 'The doctor evaluates appearance, dynamics, symptoms, and documents. If removal is required, procedure scope, anesthesia, histology, and aftercare are discussed in advance.',
    'Боль и дискомфорт': 'Pain and discomfort',
    'Консультация при грыжах и выпячиваниях': 'Consultation for hernias and bulges',
    'Осмотр, оценка симптомов, рисков ущемления и необходимости операции.': 'Examination, symptom assessment, strangulation risk, and need for surgery.',
    'Если пациента беспокоит выпячивание, боль или дискомфорт, врач помогает понять, насколько ситуация срочная, какие обследования нужны и какой вариант лечения будет безопаснее.': 'If bulging, pain, or discomfort is present, the doctor helps assess urgency, required diagnostics, and the safer treatment option.',
    'Срочная оценка': 'Urgent assessment',
    'Воспалительные процессы мягких тканей': 'Soft tissue inflammation',
    'Оценка боли, покраснения, уплотнений и необходимости вмешательства.': 'Assessment of pain, redness, swelling, and need for intervention.',
    'При воспалении важно не затягивать с осмотром. Врач определяет, достаточно ли консервативного лечения или требуется хирургическая обработка, дренирование или другой вид вмешательства.': 'With inflammation, timely examination matters. The doctor determines whether conservative treatment is enough or surgical treatment, drainage, or another intervention is needed.',
    'Разбор онкологического диагноза': 'Review of an oncologic diagnosis',
    'Независимая оценка документов, снимков и предложенной тактики.': 'Independent review of documents, imaging, and proposed strategy.',
    'Врач помогает понять, достаточно ли данных для решения, ясна ли стадия процесса, есть ли показания к операции и какие вопросы стоит обсудить с лечащей командой.': 'The doctor helps understand whether there is enough data, whether staging is clear, whether surgery is indicated, and what to discuss with the treatment team.',
    'Операционный этап': 'Surgical stage',
    'План хирургического лечения': 'Surgical treatment plan',
    'Когда операция нужна, как готовиться и как она вписывается в общий план.': 'When surgery is needed, how to prepare, and how it fits into the overall plan.',
    'Хирургический этап должен сочетаться с диагностикой, лекарственным лечением, лучевой терапией или наблюдением. На приеме обсуждается последовательность и логика действий.': 'The surgical stage must align with diagnostics, medication, radiation therapy, or observation. The visit covers sequence and logic.',
    'Маршрут': 'Pathway',
    'Путь пациента после обследований': 'Patient pathway after diagnostics',
    'Что делать дальше, если документов много, а ясности нет.': 'What to do next when there are many documents but little clarity.',
    'Врач структурирует заключения, снимки и выписки: что ключевое, чего не хватает, к кому обратиться дополнительно и когда стоит ускорить лечение.': 'The doctor structures reports, imaging, and summaries: what matters, what is missing, who else to consult, and when treatment should be accelerated.',
    'Кожа': 'Skin',
    'Подозрительные образования кожи': 'Suspicious skin formations',
    'Оценка образований, которые изменяются, растут или вызывают тревогу.': 'Assessment of formations that change, grow, or cause concern.',
    'При изменении формы, цвета, размера или появлении кровоточивости важно оценить образование очно. Врач обсуждает диагностику, удаление по показаниям и необходимость гистологии.': 'If shape, color, size changes or bleeding appears, in-person assessment is important. Diagnostics, removal when indicated, and histology are discussed.',
    'Гистология': 'Histology',
    'Тактика после биопсии или гистологии': 'Strategy after biopsy or histology',
    'Понятное объяснение результата и следующих шагов.': 'Clear explanation of the result and next steps.',
    'После получения гистологии пациенту часто непонятно, что означает заключение. Врач объясняет медицинский смысл результата и помогает определить дальнейший хирургический или диагностический маршрут.': 'After histology, patients often do not understand the report. The doctor explains its medical meaning and helps choose the next surgical or diagnostic route.',
    'После лечения': 'After treatment',
    'Послеоперационное наблюдение в онкохирургии': 'Post-operative follow-up in oncologic surgery',
    'Контроль восстановления, документов и дальнейших рекомендаций.': 'Control of recovery, documents, and further recommendations.',
    'После операции важно понимать, когда приходить на контроль, какие обследования нужны, что означают результаты гистологии и как согласовать дальнейшее наблюдение или лечение.': 'After surgery, it is important to know when to follow up, what tests are needed, what histology means, and how to coordinate further monitoring or treatment.',
    'Лицо': 'Face', 'Блефаропластика': 'Blepharoplasty',
    'Оценка зоны век, ожиданий, ограничений и восстановления.': 'Assessment of eyelid area, expectations, limitations, and recovery.',
    'На консультации обсуждается эстетическая задача, анатомические особенности, возможный объем коррекции, анализы, анестезия, сроки восстановления и реалистичный результат.': 'The consultation covers the aesthetic goal, anatomy, possible correction scope, tests, anesthesia, recovery time, and realistic result.',
    'Тело': 'Body', 'Абдоминопластика': 'Abdominoplasty',
    'Консультация по коррекции передней брюшной стенки.': 'Consultation on anterior abdominal wall correction.',
    'Врач оценивает исходные данные, состояние тканей, наличие рубцов, ожидания пациента и объясняет, какой объем коррекции может быть безопасным и оправданным.': 'The doctor evaluates baseline features, tissue condition, scars, expectations, and explains what correction scope may be safe and justified.',
    'Контур': 'Contour', 'Липосакция и контурирование': 'Liposuction and contouring',
    'Разбор зон коррекции, показаний, ограничений и восстановления.': 'Review of correction areas, indications, limitations, and recovery.',
    'Важно заранее обсудить, чего можно добиться хирургически, какие зоны подходят для коррекции, как проходит подготовка и какие ограничения будут после операции.': 'It is important to discuss what surgery can achieve, which areas are suitable, how preparation works, and what restrictions follow surgery.',
    'Грудь': 'Breast', 'Консультация по маммопластике': 'Mammoplasty consultation',
    'Обсуждение формы, объема, показаний, рисков и ожиданий.': 'Discussion of shape, volume, indications, risks, and expectations.',
    'На приеме обсуждаются пожелания пациента, медицинские ограничения, необходимые обследования, возможные варианты операции и восстановление. Финальное решение принимается только после очной оценки.': 'The visit covers wishes, medical limitations, required tests, possible surgical options, and recovery. The final decision is made only after in-person assessment.',
    'Рубцы': 'Scars', 'Коррекция рубцов': 'Scar correction',
    'Оценка рубцов после операций, травм или воспалений.': 'Assessment of scars after surgery, trauma, or inflammation.',
    'Врач оценивает тип рубца, давность, жалобы, локализацию и объясняет, какие методы коррекции возможны, чего стоит ожидать и сколько времени может занять результат.': 'The doctor assesses scar type, age, symptoms, location, and explains possible correction methods, expectations, and timing.',
    'Сопровождение восстановления': 'Recovery support',
    'Контроль заживления, ограничений и сроков возвращения к активности.': 'Control of healing, restrictions, and return-to-activity timing.',
    'Результат пластической операции формируется постепенно. Врач объясняет, что нормально в первые дни и недели, как ухаживать за зоной вмешательства и когда приходить на контроль.': 'The result of plastic surgery forms gradually. The doctor explains what is normal in the first days and weeks, how to care for the area, and when to come for follow-up.',
    'О враче': 'About the doctor',
    'Хирург, который консультирует, оперирует и сопровождает пациента после лечения. В работе важны точная диагностика, аккуратное объяснение показаний и понятный план восстановления.': 'A surgeon who consults, operates, and supports patients after treatment. Accurate diagnostics, careful explanation of indications, and a clear recovery plan are central to the work.',
    'Профессиональный подход': 'Professional approach',
    'Операция должна быть понятным решением, а не пугающим словом': 'Surgery should be a clear decision, not a frightening word',
    'Виктория Арменовна объясняет пациенту не только диагноз, но и логику лечения: почему операция нужна или не нужна, какие есть альтернативы, как подготовиться, как проходит восстановление и какие контрольные точки важны после вмешательства.': 'Dr. Melikyan explains not only the diagnosis, but the logic of treatment: why surgery is or is not needed, alternatives, preparation, recovery, and follow-up milestones.',
    'Квалификация': 'Qualification',
    'Образование, практика и хирургические направления': 'Education, practice, and surgical directions',
    'Медицинское образование': 'Medical education',
    'Клиническое мышление, работа с пациентами хирургического профиля и принятие решений по показаниям.': 'Clinical thinking, work with surgical patients, and indication-based decisions.',
    'Осмотр, операции по показаниям, подготовка к вмешательству и послеоперационное наблюдение.': 'Examination, surgery when indicated, preparation for intervention, and post-operative follow-up.',
    'Эстетические операции, предоперационная оценка, безопасность, реалистичные ожидания и восстановление.': 'Aesthetic surgery, pre-operative assessment, safety, realistic expectations, and recovery.',
    'Онкохирургический фокус': 'Oncologic surgery focus',
    'Разбор обследований, второе мнение, хирургический этап лечения и наблюдение после операции.': 'Test review, second opinion, surgical treatment stage, and follow-up after surgery.'
  }
};

const fallbackHy = {
  'Главная': 'Գլխավոր', 'Услуги': 'Ծառայություններ', 'О враче': 'Բժշկի մասին', 'Запись': 'Գրանցում', 'Записаться': 'Գրանցվել',
  'Смотреть услуги': 'Դիտել ծառայությունները', 'Подробнее': 'Մանրամասն', 'Общая хирургия': 'Ընդհանուր վիրաբուժություն', 'Хирургическая онкология': 'Օնկովիրաբուժություն', 'Пластическая хирургия': 'Պլաստիկ վիրաբուժություն',
  'Консультации и операции с понятным планом лечения': 'Խորհրդատվություններ և վիրահատություններ՝ հասկանալի բուժման պլանով',
  'Доктор Виктория Арменовна Меликян': 'Բժիշկ Վիկտորիա Արմենովնա Մելիքյան',
  'хирургическое лечение, консультации и сопровождение пациента': 'վիրաբուժական բուժում, խորհրդատվություն և պացիենտի ուղեկցում',
  'Хирургические направления': 'Վիրաբուժական ուղղություններ', 'Перед консультацией': 'Խորհրդատվությունից առաջ', 'Что подготовить': 'Ինչ պատրաստել',
  'Кейсы, отзывы и результаты': 'Դեպքեր, կարծիքներ և արդյունքներ', 'Вопросы': 'Հարցեր', 'Записаться на консультацию': 'Գրանցվել խորհրդատվության',
  'Консультации, операции и восстановление': 'Խորհրդատվություններ, վիրահատություններ և վերականգնում', 'О враче': 'Բժշկի մասին', 'Квалификация': 'Որակավորում',
  'Профессиональный подход': 'Մասնագիտական մոտեցում', 'Образование, практика и хирургические направления': 'Կրթություն, փորձ և վիրաբուժական ուղղություններ'
};
textTranslations.hy = { ...textTranslations.en, ...fallbackHy };

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
    return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  }
});
while (walker.nextNode()) {
  textNodes.push({ node: walker.currentNode, original: walker.currentNode.nodeValue });
}

function translateStaticText(lang) {
  const dictionary = lang === 'hy' ? textTranslations.hy : textTranslations[lang];
  textNodes.forEach(({ node, original }) => {
    const trimmed = original.trim();
    const translated = dictionary?.[trimmed] || trimmed;
    node.nodeValue = original.replace(trimmed, translated);
  });
}

function applyLanguage(lang) {
  const dictionary = commonTranslations[lang] || commonTranslations.ru;
  document.documentElement.lang = lang;
  localStorage.setItem('siteLanguage', lang);

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const text = dictionary[node.dataset.i18n];
    if (text) node.textContent = text;
  });

  if (lang === 'ru') {
    textNodes.forEach(({ node, original }) => { node.nodeValue = original; });
  } else {
    translateStaticText(lang);
  }

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
  if (linkPage === currentPage && !link.getAttribute('href')?.includes('#')) link.classList.add('active');
  link.addEventListener('click', () => { body.classList.remove('menu-open'); menuButton?.setAttribute('aria-expanded', 'false'); });
});

function setFilter(filter) {
  filterButtons.forEach((button) => button.classList.toggle('active', button.dataset.filter === filter));
  catalogCards.forEach((card) => card.classList.toggle('is-hidden', !(filter === 'all' || card.dataset.category === filter)));
}
filterButtons.forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter || 'all')));
langButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang || 'ru')));

const hash = window.location.hash.replace('#', '');
if (['general', 'oncology', 'plastic'].includes(hash)) setFilter(hash);
applyLanguage(localStorage.getItem('siteLanguage') || 'ru');
