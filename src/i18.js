import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "hy",
  resources: {
    hy: {
      translation: {
        welcome: "Բարի գալուստ Solo Beauty",
        services: "Մեր Ծառայությունները",
        book: "Ամրագրեք հիմա",
        home: "Գլխավոր",
        gallery: "Մեր Աշխատանքները",
        pricelist: "Գնացուցակ",
        manifestoTITLE: "Ձա՜յն հառաչանաց հեծութեան ողբոց սրտից աղաղակիՔեզ վերընծայեմ, տեսողդ գաղտնեաց,Եւ մատուցեալ եդեալ ի հուր թախծութեան անձին տոչորման",
        test: 
        {
          first:" first one",
          second:"seconf one",
        },
        service:
        {
          barber:"Տղամարդու Վարսահարդար",
          barberDesc:"Կտրվածքներ,Բարբերական Ծառայություններ և այլն",
          wbarber:"Կանանց Վարսահարդար",
          wbarberDesc:"Կտրվածքներ,Ներկում,Խնամք և այլն",
          makeup:"Դիմահարդարում",
          makeupDesc:"Դեմք,Հոնքեր,Հարսանյաց և այլն",
          eyes:"Թարթիչներ և Հոնքեր",
          eyesDesc:"Կորրեկցիյա,Լամինացիյա,Shading և այլն",
          eyelash:"Թարթիչների Լիցք",
          eyelashDesc:"Կլասսիկ,Անկյունային,Թաց և այլն",
          nails:"Մատնահարդարում",
          nailsDesc: "Պեդիկյուր,Մանիկյուր,Մաքրում և այլն",
          cosmetology:"Կոսմետոլոգիա",
          cosmetologyDesc:"Ֆիլլեր,Պիլինգ,Մաքրում,Խնամք և այլն",
          epilation:"Մազահեռացում",
          epilationDesc:"Վոսկային,Շուգարինգ,Էլեկտրոէպիլացիյա,Դիոդային և այլն",
          body:"Մարմին",
          bodyDesc:"Վակուումային մասսաժ և այլն",
        },
        homet:
        {
          welcoming:"Բարի Գալուստ Solo Beauty ❤️",
          introText:"Մենք առաջարկում ենք յուրահատուկ որակ",
          services:"Տեսնել մեր ծառայությունները",
        },
        footer:
        {
          contactInfo:"Կոնտակտներ",
          address:"Հասցե: ",
          addressName:"Ռիժկովի փողոց 3/1, Գյումրի, Հայաստան",
          addandhours:"Հասցե և Աշխատանքային ժամեր",
          telephone:"+374 93 00 02 17",
          days:"Երկուշաբթի-Կիրակի",
          businessHours:"Աշխատանքային ժամեր",
          followUs:"Հետևեք Մեզ",
          getDirections:"Տեսնել Քարտեզը",
          copy:"© {{year}} Solo Beauty. Բոլոր իրավունքները պաշտպանված են."
        },
        contact: {
          title: "Կապ",
          telegramTitle: "Ամրագրում Telegram-բոտով",
          telegramDesc: "Ամրագրեք ձեր այցը արագ և հարմար Telegram-բոտի միջոցով:",
          telegramBtn: "Ամրագրել Telegram-ով",
          onlineTitle: "Առցանց ամրագրում",
          onlineDesc: "Ամրագրեք ձեր այցը առցանց հարթակի միջոցով",
          onlineBtn: "Ամրագրել առցանց",
          needHelp: "Օգնության կարիք ունե՞ք։ Կապվեք մեզ հետ՝",
          phone: "+(374)-93-000217",
          whatsapp: "WhatsApp",
          viber: "Viber"
        },
        pricing:
        {
          title:"Գնացուցակ",
          subtitle:"Ապահովելով բարձրորակ արդյունքներ մատչելի գներով",
          mostPopular:"Ամենահայտնի",
          bookNow:"Ամրագրել",
          fullPriceList:
          {
            title:"Ամբողջական Գնացուցակ",
            description:"Դիտեք մեր ամբողջական ծառայությունների գնացուցակը՝ ներառյալ բոլոր մանրամասները և հատուկ առաջարկները",
            button:"Դիտել Ամբողջական Գնացուցակը"
          },
          services:
          {
            hairdressing:
            {
              name:"Վարսահարդարում",
              description:"Կտրվածքներ, ներկում, խնամք",
              features:
              {
                consultation:"Խորհրդատվություն",
                products:"Պրոֆեսիոնալ ներկեր",
                results:"Ակներև արդյունք"
              }
            },
            makeup:
            {
              name:"Դիմահարդարում",
              description:"Ամենօրյա, երեկոյան, հարսանյաց",
              features:
              {
                quality:"Բարձրորակ նյութեր",
                results:"Ցանկալի արդյունք",
                natural:"Բնական տեսք"
              }
            },
            eyelashes:
            {
              name:"Թարթիչների Լիցք",
              description:"Կլասսիկ, անկյունային, թաց էֆեկտ",
              features:
              {
                natural:"Պրոֆեսիոնալ մոտեցում",
                results:"Երկարատև արդյունք",
                comfort:"Որակի երաշխիք"
              }
            },
            nails:
            {
              name:"Մատնահարդարում",
              description:"Մանիկյուր, պեդիկյուր, գել-լակ",
              features:
              {
                tools:"Սթայլինգ",
                materials:"Անթերի մաքրություն",
                results:"Նրբություն և էֆեկտ"
              }
            }
          }
        }
      },
    },
    ru: {
      translation: {
        welcome: "Добро Пожаловать в Solo Beauty",
        services: "Услуги",
        book: "Бронировка",
        home: "Домой",
        gallery: "Наши Работы",
        pricelist: "Цены",
        manifestoTITLE: "Ձա՜յն հառաչանաց հեծութեան ողբոց սրտից աղաղակիՔեզ վերընծայեմ, տեսողդ գաղտնեաց,Եւ մատուցեալ եդեալ ի հուր թախծութեան անձին տոչորման",
        test: 
        {
          first:" first one",
          second:"seconf one",
        },
        service:
        {
          barber:"Парикмахерские Услуги для Мужчин",
          barberDesc:"Стрижки,Барберские Услуги итд.",
          wbarber:"Парикмахерские Услуги для Женщин",
          wbarberDesc:"Стрижки,Окрашивание,Уход итд.",
          makeup:"Макияж",
          makeupDesc:"Лицо,Ресницы,Свадебные итд.",
          eyes:"Ресницы и Брови",
          eyesDesc:"Коррекция,Ламинация,Shading итд.",
          eyelash:"Наращивание Ресниц",
          eyelashDesc:"Классика,Уголки,Мокрый Эффект итд.",
          nails:"Ногтевой Сервис",
          nailsDesc: "Маникюр,Педикюр,Гель Лак итд.",
          cosmetology:"Косметология",
          cosmetologyDesc:"Филлер,Пилинг,Чиста,Уход итд.",
          epilation:"Эпиляция",
          epilationDesc:"Воск,Шугаринг,Электроэпиляция,Диодная Эпиляция итд.",
          body:"Тело",
          bodyDesc:"Вакуумный Массаж,Кавитация итд."
        },
        homet:
        {
          welcoming:"Добро Пожаловать в Solo Beauty ❤️",
          introText:"Мы предлагаем уникальное качество",
          services:"Посмотреть наши услуги",
        },
        footer:
        {
          contactInfo:"Контакты",
          address:"Адрес: ",
          addressName:"ул. Рыжкова 3/1, Гюмри, Армения",
          addandhours:"Адрес и Часы Работы",
          telephone:"+374 93 00 02 17",
          days:"Понедельник-Воскресенье",
          businessHours:"Часы Работы",
          followUs:"Следите за Нами",
          getDirections:"Посмотреть Карту",
          copy:"© {{year}} Solo Beauty. Все права защищены."
        },
        contact: {
          title: "Связь",
          telegramTitle: "Бронирование через Telegram-бота",
          telegramDesc: "Бронируйте встречу быстро и удобно через нашего Telegram-бота. Получайте мгновенное подтверждение и управляйте своими записями в любое время.",
          telegramBtn: "Бронь через Telegram-бота",
          onlineTitle: "Онлайн-бронирование",
          onlineDesc: "Посетите нашу онлайн-платформу для бронирования встречи.",
          onlineBtn: "Бронь онлайн",
          needHelp: "Нужна помощь? Свяжитесь с нами напрямую:",
          phone: "+(374)-93-000217",
          whatsapp: "WhatsApp",
          viber: "Viber"
        },
        pricing:
        {
          title:"Прайс-лист",
          subtitle:"Обеспечиваем высококачественные результаты по доступным ценам",
          mostPopular:"Популярный",
          bookNow:"Забронировать",
          fullPriceList:
          {
            title:"Полный Прайс-лист",
            description:"Просмотрите наш полный прайс-лист услуг, включая все детали и специальные предложения",
            button:"Посмотреть Полный Прайс-лист"
          },
          services:
          {
            hairdressing:
            {
              name:"Парикмахерские Услуги",
              description:"Стрижки, окрашивание, уход",
              features:
              {
                consultation:"Детальная консультация",
                products:"Профессиональные средства",
                results:"Видимый результат"
              }
            },
            makeup:
            {
              name:"Макияж",
              description:"Повседневный, вечерний, свадебный",
              features:
              {
                quality:"Высококачественные средства",
                results:"Желательный результат",
                natural:"Естественный вид"
              }
            },
            eyelashes:
            {
              name:"Наращивание Ресниц",
              description:"Классика, уголки, мокрый эффект",
              features:
              {
                natural:"Опытный мастер",
                results:"Желательный результат",
                comfort:"Гарантия качества"
              }
            },
            nails:
            {
              name:"Маникюр",
              description:"Маникюр, педикюр, гель-лак",
              features:
              {
                tools:"Стайлинг",
                materials:"Идеальная чистота",
                results:"Результат и эффект"
              }
            }
          }
        }
      },
    },
  },
  interpolation: { escapeValue: false },
  lng: "hy",
});

export default i18n;
