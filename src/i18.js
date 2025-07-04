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
        contact: "Կապ",
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
          eyelash:"Թարթիչների Սերտաճեցում",
          eyelashDesc:"Կլասսիկ,Անկյունային,Թաց և այլն",
          nails:"Մատնահարդարում",
          nailsDesc: "Պեդիկյուր,Մանիկյուր,Մաքրում և այլն",
          cosmetology:"Կոսմետոլոգիա",
          cosmetologyDesc:"Ֆիլլեր,Պիլինգ,Մաքրում,Խնամք և այլն",
          epilation:"Մազահեռացում",
          epilationDesc:"Վոսկային,Շուգարինգ,Էլեկտրոէպիլացիյա,Դիոդային և այլն",
          body:"Մարմին",
          bodyDesc:"Վակուումային մասսաժ և այլն"
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
        contact: "Связь",
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
        }
      },
    },
  },
  interpolation: { escapeValue: false },
  lng: "hy",
});

export default i18n;
