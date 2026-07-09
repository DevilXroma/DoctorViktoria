const extraTranslations = {
  en: {
    'home.fact.1.title': '3 directions',
    'home.fact.1.text': 'surgical consultation, oncology review, and plastic surgery',
    'home.fact.2.title': 'In-person plan',
    'home.fact.2.text': 'decision after examination and documents',
    'home.fact.3.title': 'Follow-up',
    'home.fact.3.text': 'preparation and recovery support',
    'home.trust.1.title': 'Diagnosis before decisions',
    'home.trust.1.text': 'First come complaints, medical history, examination, and documents. Only then surgery and alternatives are discussed.',
    'home.trust.2.title': 'Indications and risks',
    'home.trust.2.text': 'The patient receives not a promise, but a clear explanation of benefits, limitations, and possible risks.',
    'home.trust.3.title': 'Recovery plan',
    'home.trust.3.text': 'Timing, follow-up visits, restrictions, and warning signs are discussed before treatment.',
    'home.directions.note': 'The cards below are a quick entry into the main directions. The full list of services and detailed explanations are on a separate page.',
    'home.process.text': 'The patient should not have to guess what happens next. Each stage of the consultation is explained in advance.',
    'home.prepare.label': 'Before the visit',
    'home.prepare.title': 'What to prepare',
    'home.prepare.text': 'If documents already exist, it is better to bring them. This helps understand the situation faster and avoid unnecessary tests.',
    'home.prepare.item.1': 'blood tests, ultrasound, CT, MRI, or mammography results;',
    'home.prepare.item.2': 'reports, discharge summaries, histology, or biopsy results;',
    'home.prepare.item.3': 'a list of medicines, allergies, and previous surgeries;',
    'home.prepare.item.4': 'a short list of questions that are important to discuss.'
  },
  hy: {
    'home.fact.1.title': '3 ուղղություն',
    'home.fact.1.text': 'վիրաբուժական խորհրդատվություն, օնկո վերլուծություն և պլաստիկա',
    'home.fact.2.title': 'Անձնական պլան',
    'home.fact.2.text': 'որոշում՝ զննումից և փաստաթղթերից հետո',
    'home.fact.3.title': 'Հսկում',
    'home.fact.3.text': 'պատրաստում և վերականգնման աջակցություն',
    'home.trust.1.title': 'Ախտորոշում՝ որոշումից առաջ',
    'home.trust.1.text': 'Նախ՝ գանգատներ, պատմություն, զննում և փաստաթղթեր։ Միայն հետո քննարկվում են վիրահատությունն ու այլընտրանքները։',
    'home.trust.2.title': 'Ցուցումներ և ռիսկեր',
    'home.trust.2.text': 'Պացիենտը ստանում է ոչ թե խոստում, այլ օգուտների, սահմանափակումների և հնարավոր ռիսկերի պարզ բացատրություն։',
    'home.trust.3.title': 'Վերականգնման պլան',
    'home.trust.3.text': 'Մինչ բուժումը քննարկվում են ժամկետները, հսկողական այցերը, սահմանափակումները և զգուշացնող նշանները։',
    'home.directions.note': 'Ստորև քարտերը հիմնական ուղղությունների արագ մուտքն են։ Ծառայությունների ամբողջ ցանկը և բացատրությունները առանձին էջում են։',
    'home.process.text': 'Պացիենտը չպետք է գուշակի, թե ինչ կլինի հետո։ Խորհրդատվության յուրաքանչյուր փուլ բացատրվում է նախապես։',
    'home.prepare.label': 'Ընդունումից առաջ',
    'home.prepare.title': 'Ինչ պատրաստել',
    'home.prepare.text': 'Եթե փաստաթղթեր արդեն կան, լավ է բերել դրանք։ Դա օգնում է ավելի արագ հասկանալ իրավիճակը և խուսափել ավելորդ հետազոտություններից։',
    'home.prepare.item.1': 'անալիզներ, ՈՒՁՀ, ԿՏ, ՄՌՏ կամ մամոգրաֆիա;',
    'home.prepare.item.2': 'եզրակացություններ, դուրսգրումներ, հիստոլոգիա կամ բիոպսիա;',
    'home.prepare.item.3': 'դեղերի, ալերգիաների և նախկին վիրահատությունների ցանկ;',
    'home.prepare.item.4': 'հարցերի կարճ ցանկ, որոնք կարևոր է քննարկել։'
  }
};

function applyExtraLanguage(lang) {
  const dictionary = extraTranslations[lang];
  if (!dictionary) return;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const text = dictionary[node.dataset.i18n];
    if (text) node.textContent = text;
  });
}

applyExtraLanguage(localStorage.getItem('siteLanguage') || 'ru');

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => applyExtraLanguage(button.dataset.lang || 'ru'));
});
