// Импортируем базовые JSON-файлы напрямую (Next.js умеет это из коробки)
import en from './public/locales/en/common.json';
import ru from './public/locales/ru/common.json';
import kz from './public/locales/kz/common.json';

export const translations = {
  en: {
    ...en,
    rules: {
      compFormat: "Competition Format",
      title: "Rules &<br />Regulations",
      req: "Team Requirements",
      reqItems: {
        t1: "Team Size", d1: "4 to 5 students per team, from grades 9 to 12.",
        t2: "Captain", d2: "Each team must select a captain responsible for registration, submissions, and communication with organizers.",
        t3: "School", d3: "All members may be from the same or different schools — provided this is agreed upon with the organizers in advance.",
        t4: "Conduct", d4: "Phones, reference materials, and electronic devices are strictly prohibited unless explicitly allowed. Violations by any member may disqualify the entire team."
      },
      s1: "First Stage — Online",
      s1Items: {
        l1: "Round 1", t1: "Problem Solving", tag1: "3 hours", d1: "6–7 interdisciplinary problems spanning mathematics, physics, chemistry, and biology. Teams have 3 hours to complete all problems. The captain is responsible for submitting the final solutions.",
        l2: "Round 2", t2: "Case Study", tag2: "2 days", d2: "Teams receive their case 2 days before the submission deadline. The completed report is submitted electronically as a PDF or DOCX file."
      },
      s2: "Second Stage — In-Person",
      venue: "Venue",
      venueLoc: "KBTU — Kazakh-British Technical University, Almaty",
      s2Items: {
        l1: "Round 1", t1: "Interdisciplinary Problems", tag1: "4–5 hours", d1: "8 complex problems requiring cross-disciplinary reasoning. Teams have 4–5 hours. All members participate simultaneously.",
        l2: "Round 2", t2: "Case Study Presentation", tag2: "Live jury", d2: "Teams present their case study report to a panel of expert judges. Appeals against results are permitted within 5 hours of the results announcement."
      },
      cs: "Case Study Rules",
      csItems: {
        l1: "Format", v1: "APA 7", d1: "All written reports must follow APA 7th edition citation and formatting standards.",
        l2: "Length", v2: "≤ 40 pages", d2: "The written report must not exceed 40 pages including references and appendices.",
        l3: "Originality", v3: "≥ 70%", d3: "Minimum originality score. AI-generated content must not exceed 20% of the total report."
      },
      csNote1: "Two case types:",
      csNote2: " one scientific case and one engineering case. Teams present their findings to a jury panel during the Second Stage final."
    },
    register: {
      successTitle: "Team Registered!",
      successDesc1: "Your team",
      successDesc2: "has been successfully registered for NEScO 2026. The captain will receive a confirmation email shortly.",
      regAnother: "Register another team",
      subtitle: "NEScO 2026",
      title: "Register your team",
      desc: "Open to teams of 4–5 students in grades 9–12. The team name must be unique. Participant 1 is the captain and primary contact.",
      teamInfo: "Team Information",
      teamNameLabel: "Team Name *",
      teamNamePlh: "Enter a unique team name",
      part: "Participant",
      capt: "(Captain)",
      nameLabel: "Full Name *",
      namePlh: "First Last Name",
      gradeLabel: "Grade *",
      gradeSelect: "— select —",
      emailLabel: "Email *",
      emailPlh: "example@mail.com",
      phoneLabel: "Phone *",
      phonePlh: "+7 000 000 00 00",
      schoolLabel: "School *",
      schoolPlh: "School name and city",
      addPart: "Add 5th Participant",
      consent1: "I consent to the collection, processing and storage of Personal Data in accordance with the ",
      consentLink1: "List No. 03-08/01",
      consent2: ". The ",
      consentLink2: "Foundation's Personal Data Policy and List",
      consent3: " can be found on the Foundation's website.",
      btnLoading: "Registering…",
      btnSubmit: "Register Team",
      errNoName: "Please enter a team name.",
      errNoConsent: "Please accept the data processing consent.",
      errFillAll: "Please fill in all fields for Participant",
      errNetwork: "Network error. Please try again."
    }
  },
  ru: {
    ...ru,
    rules: {
      compFormat: "Формат Соревнования",
      title: "Правила &<br />Условия",
      req: "Требования к Команде",
      reqItems: {
        t1: "Размер команды", d1: "От 4 до 5 учеников в команде, 9-12 классы.",
        t2: "Капитан", d2: "Каждая команда должна выбрать капитана, ответственного за регистрацию, сдачу работ и связь с организаторами.",
        t3: "Школа", d3: "Участники могут быть из одной или разных школ — при условии предварительного согласования с организаторами.",
        t4: "Поведение", d4: "Телефоны, справочные материалы и электронные устройства строго запрещены, кроме разрешенных. Нарушение любым участником может привести к дисквалификации всей команды."
      },
      s1: "Первый Этап — Онлайн",
      s1Items: {
        l1: "Тур 1", t1: "Решение Задач", tag1: "3 часа", d1: "6–7 междисциплинарных задач по математике, физике, химии и биологии. На решение отводится 3 часа. Капитан отправляет итоговые решения.",
        l2: "Тур 2", t2: "Кейс-стади", tag2: "2 дня", d2: "Команды получают кейс за 2 дня до дедлайна. Готовый отчет сдается в формате PDF или DOCX."
      },
      s2: "Второй Этап — Оффлайн",
      venue: "Место проведения",
      venueLoc: "KBTU — Казахстанско-Британский технический университет, Алматы",
      s2Items: {
        l1: "Тур 1", t1: "Междисциплинарные Задачи", tag1: "4–5 часов", d1: "8 сложных задач, требующих междисциплинарного мышления. Дается 4-5 часов. Все участники решают одновременно.",
        l2: "Тур 2", t2: "Презентация Кейс-стади", tag2: "Живое жюри", d2: "Команды защищают свой отчет перед экспертным жюри. Апелляции разрешены в течение 5 часов после объявления результатов."
      },
      cs: "Правила Кейс-стади",
      csItems: {
        l1: "Формат", v1: "APA 7", d1: "Все письменные отчеты должны соответствовать стандартам цитирования и форматирования APA 7.",
        l2: "Объем", v2: "≤ 40 страниц", d2: "Письменный отчет не должен превышать 40 страниц, включая приложения.",
        l3: "Оригинальность", v3: "≥ 70%", d3: "Минимальная оригинальность. ИИ-контент не должен превышать 20% от всего отчета."
      },
      csNote1: "Два типа кейсов:",
      csNote2: " научный кейс и инженерный кейс. Команды представляют свои решения жюри во время финала Второго Этапа."
    },
    register: {
      successTitle: "Команда Зарегистрирована!",
      successDesc1: "Ваша команда",
      successDesc2: "успешно зарегистрирована на NEScO 2026. Капитан вскоре получит письмо с подтверждением.",
      regAnother: "Зарегистрировать еще команду",
      subtitle: "NEScO 2026",
      title: "Зарегистрируйте команду",
      desc: "Открыто для команд из 4–5 учеников 9–12 классов. Название команды должно быть уникальным. Участник 1 является капитаном и главным контактным лицом.",
      teamInfo: "Информация о команде",
      teamNameLabel: "Название Команды *",
      teamNamePlh: "Введите уникальное название",
      part: "Участник",
      capt: "(Капитан)",
      nameLabel: "ФИО *",
      namePlh: "Фамилия Имя",
      gradeLabel: "Класс *",
      gradeSelect: "— выбрать —",
      emailLabel: "Почта *",
      emailPlh: "example@mail.com",
      phoneLabel: "Телефон *",
      phonePlh: "+7 000 000 00 00",
      schoolLabel: "Школа *",
      schoolPlh: "Название школы и город",
      addPart: "Добавить 5-го Участника",
      consent1: "Я даю согласие на сбор, обработку и хранение персональных данных в соответствии с ",
      consentLink1: "Перечнем № 03-08/01",
      consent2: ". С ",
      consentLink2: "Политикой Фонда в отношении персональных данных",
      consent3: " можно ознакомиться на сайте Фонда.",
      btnLoading: "Регистрация…",
      btnSubmit: "Зарегистрировать Команду",
      errNoName: "Пожалуйста, введите название команды.",
      errNoConsent: "Пожалуйста, подтвердите согласие на обработку данных.",
      errFillAll: "Пожалуйста, заполните все поля для Участника",
      errNetwork: "Ошибка сети. Пожалуйста, попробуйте еще раз."
    }
  },
  kz: {
    ...kz,
    rules: {
      compFormat: "Жарыс Форматы",
      title: "Ережелер &<br />Шарттар",
      req: "Командаға Қойылатын Талаптар",
      reqItems: {
        t1: "Команда өлшемі", d1: "Әр командада 4-5 оқушы, 9-12 сыныптар аралығында.",
        t2: "Капитан", d2: "Әр команда тіркеуге, жұмыстарды тапсыруға және ұйымдастырушылармен байланысқа жауапты капитан сайлауы тиіс.",
        t3: "Мектеп", d3: "Қатысушылар бір немесе әртүрлі мектептерден бола алады — тек бұл туралы ұйымдастырушылармен алдын ала келісілуі қажет.",
        t4: "Тәртіп", d4: "Телефондар, анықтамалықтар және электронды құрылғылар қатаң тыйым салынады. Кез келген қатысушының тәртіп бұзуы бүкіл команданы шеттетуге алып келуі мүмкін."
      },
      s1: "Бірінші Кезең — Онлайн",
      s1Items: {
        l1: "1-тур", t1: "Есептер шығару", tag1: "3 сағат", d1: "Математика, physical, химия және биологиядан 6-7 пәнаралық есеп. Барлық есептерге 3 сағат беріледі. Соңғы шешімдерді капитан жіберуі тиіс.",
        l2: "2-тур", t2: "Кейс-стади", tag2: "2 күн", d2: "Командалар кейсті дедлайнға дейін 2 күн бұрын алады. Дайын есеп PDF немесе DOCX форматында электронды түрде жіберіледі."
      },
      s2: "Екінші Кезең — Офлайн",
      venue: "Өтетін орны",
      venueLoc: "KBTU — Қазақстан-Британ техникалық университеті, Алматы",
      s2Items: {
        l1: "1-тур", t1: "Пәнаралық Есептер", tag1: "4–5 сағат", d1: "Пәнаралық пайымдауды қажет ететін 8 күрделі есеп. 4-5 сағат беріледі. Барлықтар бірдей қатысады.",
        l2: "2-тур", t2: "Кейс-стади Қорғау", tag2: "Көзбен көретін әділқазы", d2: "Командалар кейс есебін әділқазы алдында қорғайды. Апелляция нәтижелер шыққан соң 5 сағат ішінде рұқсат етіледі."
      },
      cs: "Кейс-стади Ережелері",
      csItems: {
        l1: "Формат", v1: "APA 7", d1: "Барлық жазбаша есептер APA 7 цитата келтіру және пішімдеу стандарттарына сай болуы тиіс.",
        l2: "Көлемі", v2: "≤ 40 бет", d2: "Жазбаша есеп қосымшаларды қоса алғанда 40 беттен аспауы тиіс.",
        l3: "Түпнұсқалық", v3: "≥ 70%", d3: "Ең төменгі түпнұсқалық пайыз. ЖИ-генерацияланған контент барлық есептің 20%-дан аспауы керек."
      },
      csNote1: "Екі кейс түрі:",
      csNote2: " ғылыми және инженерлік кейс. Командалар Екінші Кезең финалында әділқазы алдында өз шешімдерін қорғайды."
    },
    register: {
      successTitle: "Команда Тіркелді!",
      successDesc1: "Сіздің",
      successDesc2: "командаңыз NEScO 2026-ға сәтті тіркелді. Капитан жақын арада растау хатын алады.",
      regAnother: "Тағы бір команда тіркеу",
      subtitle: "NEScO 2026",
      title: "Командаңызды тіркеңіз",
      desc: "9–12 сынып оқушыларынан құралған 4-5 адамдық командаларға ашық. Команда аты қайталанбас болуы керек.",
      teamInfo: "Команда ақпараты",
      teamNameLabel: "Команда Аты *",
      teamNamePlh: "Басқаларға ұқсамайтын атау жазыңыз",
      part: "Қатысушы",
      capt: "(Капитан)",
      nameLabel: "Толық Аты-жөні *",
      namePlh: "Тегі мен Аты",
      gradeLabel: "Сыныбы *",
      gradeSelect: "— таңдау —",
      emailLabel: "Электронды пошта *",
      emailPlh: "example@mail.com",
      phoneLabel: "Телефон *",
      phonePlh: "+7 000 000 00 00",
      schoolLabel: "Мектеп *",
      schoolPlh: "Мектеп аты мен қала",
      addPart: "5-ші Қатысушыны Қосу",
      consent1: "Мен дербес деректерді жинауға, өңдеуге және сақтауға ",
      consentLink1: "№ 03-08/01 Тізімге",
      consent2: " сәйкес келісім беремін. Қордың ",
      consentLink2: "Дербес derekter саясаты мен тізімін",
      consent3: " Қор веб-сайтынан таба аласыз.",
      btnLoading: "Тіркелуде…",
      btnSubmit: "Команданы Тіркеу",
      errNoName: "Команда атын енгізіңіз.",
      errNoConsent: "Деректерді өңдеуге келісім беріңіз.",
      errFillAll: "Қатысушының барлық өрістерін толтырыңыз - ",
      errNetwork: "Желі қатесі. Қайта байқап көріңіз."
    }
  }
};