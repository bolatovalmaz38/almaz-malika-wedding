const CONFIG = {
  weddingDateISO: "2026-07-18T17:00:00+05:00",
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbz-HaYMI6qYE5NQQ_8mgu4RROioHHoQjAkK-eVGW3mfJzB8qJa84P8x9ErHZzvqK7fnJg/exec"
};

const translations = {
  ru: {
    heroEyebrow: "Свадебное приглашение",
heroNameLeft: "Алмаз",
heroNameRight: "Малика",
heroDate: "18 июля 2026",
heroCity: "Астана",
	heroButton: "Открыть приглашение",
    scrollHint: "листай ниже",

    inviteTitle: "Дорогие гости!",
	inviteLine1: 'С огромной радостью приглашаем <strong>Вас</strong>',
	inviteLine2: 'Разделить с нами',
	inviteLine3: 'Один из <strong>Самых Важных</strong> и <strong>Красивых</strong> дней в нашей жизни -',
	inviteLine4: '<strong>День Нашей Свадьбы!</strong>',
	hostsLabel: "Той иелері",
	hostsNames: "Самат & Гульжан",


    galleryLabel: "Фотогалерея",
    galleryHeading: "Наши моменты",

    detailsLabel: "Дата и место",
    detailsHeading: "Будем счастливы видеть Вас",
    dateLabel: "Дата",
    fullDate: "18 июля 2026 года",
    cityLabel: "Город",
    cityValue: "Астана",
    venueLabel: "Ресторан",
    venueValue: "Шығыс жұлдызы",

    calendarHeading: "Июль 2026",
    wk1: "Пн",
    wk2: "Вт",
    wk3: "Ср",
    wk4: "Чт",
    wk5: "Пт",
    wk6: "Сб",
    wk7: "Вс",

    countdownLabel: "До нашей свадьбы",
    countdownHeading: "Осталось совсем немного",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",

    programLabel: "Программа дня",
    programHeading: "Ждём Вас на нашем празднике",
    prog1Title: "Сбор гостей",
    prog1Text: "Время для тёплых встреч, улыбок и первых фотографий.",
    prog2Title: "Начало торжества",
    prog2Text: "Главные слова, эмоции и праздничная атмосфера.",
    prog3Title: "Праздничный ужин",
    prog3Text: "Вкусная еда, тосты, музыка и радость рядом с близкими.",

    locationLabel: "Локация",
    locationHeading: "Ресторан «Шығыс жұлдызы»",
    locationText: "г. Астана, ул. Темирбек Жургенов, 18/2. Нажмите на кнопку ниже, чтобы сразу открыть маршрут в 2GIS.",
    mapButton: "Открыть в 2GIS",

    rsvpBigTitle: "РАЗДЕЛИТЕ С НАМИ НАШУ РАДОСТЬ!!!",
    nameLabel: "Ваше имя",
    attendYes: "Конечно, приду",
    attendPlus: "Приду с супругой/супругом",
    attendNo: "К сожалению, не смогу",
    submitButton: "Отправить",

    footerText: "Будем счастливы разделить этот день вместе с Вами",

    sending: "Отправка...",
    enterName: "Введите имя",
    chooseOption: "Выберите вариант",
    sentYes: (name) => `Спасибо, ${name}! Ждём Вас 💛`,
    sentNo: (name) => `Спасибо, ${name}!`,
    failed: "Ошибка отправки 😔"
  },

  kz: {
    heroEyebrow: "Үйлену тойына шақыру",
heroNameLeft: "Алмаз",
heroNameRight: "Малика",
heroDate: "18 шілде 2026 жыл",
heroCity: "Астана",
    heroButton: "Шақыруды ашу",
    scrollHint: "төмен сырғытыңыз",

    inviteTitle: "Құрметті Қонақтар!",
	inviteLine1: 'Сіздерді Біздің өміріміздегі',
	inviteLine2: '<strong>Ең Маңызды</strong> әрі <strong>Әдемі</strong> күндерінің бірі -',
	inviteLine3: 'Үйлену тойымызды Бірге өткізуге',
	inviteLine4: 'шын жүректен <strong>Шақырамыз!</strong>',
	hostsLabel: "Той иелері",
	hostsNames: "Самат & Гульжан",


    galleryLabel: "Фотогалерея",
    galleryHeading: "Біздің сәттер",

    detailsLabel: "Өтетін күні мен орны",
    detailsHeading: "Сіздерді қуана күтеміз!",
    dateLabel: "Күні",
    fullDate: "18 шілде 2026 жыл",
    cityLabel: "Қала",
    cityValue: "Астана",
    venueLabel: "Мейрамхана",
    venueValue: "Шығыс жұлдызы",

    calendarHeading: "Шілде 2026",
    wk1: "Дс",
    wk2: "Сс",
    wk3: "Ср",
    wk4: "Бс",
    wk5: "Жм",
    wk6: "Сб",
    wk7: "Жс",

    countdownLabel: "Тойымызға дейін",
    countdownHeading: "Аз ғана уақыт қалды",
    days: "күн",
    hours: "сағат",
    minutes: "минут",
    seconds: "секунд",

    programLabel: "Күн бағдарламасы",
    programHeading: "Мерекемізде күтеміз",
    prog1Title: "Қонақтарды қарсы алу",
    prog1Text: "Жылы жүздесулер, әдемі суреттер мен көтеріңкі көңіл-күй уақыты.",
    prog2Title: "Тойдың басталуы",
    prog2Text: "Ең маңызды сәттер, қуаныш пен ерекше атмосфера.",
    prog3Title: "Мерекелік дастарқан",
    prog3Text: "Дәмді ас, тілектер, музыка және жақындармен қуаныш.",

    locationLabel: "Өтетін орны",
    locationHeading: "«Шығыс жұлдызы» мейрамханасы",
    locationText: "Астана қ., Темірбек Жүргенов көшесі, 18/2. Төмендегі батырманы басып, 2GIS арқылы маршрутты ашыңыз.",
    mapButton: "2GIS-та ашу",

    rsvpBigTitle: "Қуанышымызға ортақ болыңыздар!!!",
    nameLabel: "Аты-жөніңіз",
    attendYes: "Әрине, келемін",
    attendPlus: "Жұбайыммен / жұбыммен келемін",
    attendNo: "Өкінішке қарай, келе алмаймын",
    submitButton: "Жіберу",

    footerText: "Осы күнді сіздермен бірге өткізсек, өте қуанышты боламыз",

    sending: "Жіберілуде...",
    enterName: "Атыңызды енгізіңіз",
    chooseOption: "Бір нұсқаны таңдаңыз",
    sentYes: (name) => `Рақмет, ${name}! Сізді күтеміз 💛`,
    sentNo: (name) => `Рақмет, ${name}!`,
    failed: "Жіберу қатесі 😔"
  }
};

let currentLang = "ru";

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.documentElement.lang = lang === "ru" ? "ru" : "kk";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langToggle = document.getElementById("langToggle");
  langToggle.textContent = lang === "ru" ? "KZ" : "RU";

  localStorage.setItem("weddingLang", lang);
  buildCalendar();
}

function buildCalendar() {
  const grid = document.getElementById("calendarGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const leadingEmpty = 2;
  const daysInMonth = 31;

  for (let i = 0; i < leadingEmpty; i++) {
    const cell = document.createElement("div");
    cell.className = "muted-day";
    grid.appendChild(cell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.textContent = day;
    if (day === 18) {
      cell.classList.add("selected-day");
    }
    grid.appendChild(cell);
  }
}

function startCountdown() {
  const target = new Date(CONFIG.weddingDateISO).getTime();

  const timer = () => {
    const now = Date.now();
    const diff = Math.max(target - now, 0);

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
  };

  timer();
  setInterval(timer, 1000);
}

function initAnimations() {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.18 });

  items.forEach((item) => observer.observe(item));
}

function initMusic() {
  const audio = document.getElementById("weddingAudio");
  const btn = document.getElementById("musicToggle");
  let isPlaying = false;

  btn.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await audio.play();
        isPlaying = true;
        btn.classList.add("active");
      } else {
        audio.pause();
        isPlaying = false;
        btn.classList.remove("active");
      }
    } catch (e) {
      alert("Добавь файл assets/music.mp3, чтобы музыка работала.");
    }
  });
}

function initGallery() {
  const track = document.getElementById("galleryTrack");
  const slides = Array.from(document.querySelectorAll(".gallery-slide"));
  const prevBtn = document.getElementById("galleryPrev");
  const nextBtn = document.getElementById("galleryNext");
  const dotsWrap = document.getElementById("galleryDots");

  if (!track || !slides.length || !prevBtn || !nextBtn || !dotsWrap) return;

  let currentIndex = 0;
  dotsWrap.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "gallery-dot" + (index === 0 ? " active" : "");
    dot.type = "button";
    dot.addEventListener("click", () => goToSlide(index));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".gallery-dot"));

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateSlider();
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  updateSlider();
}

function initForm() {
  const form = document.getElementById("rsvpForm");
  const statusEl = document.getElementById("formStatus");

  if (!form || !statusEl) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dict = translations[currentLang];
    statusEl.textContent = dict.sending;

    const name = form.guestName.value.trim();
    const checkedAttendance = form.querySelector('input[name="attendance"]:checked');

    if (!name) {
      statusEl.textContent = dict.enterName;
      return;
    }

    if (!checkedAttendance) {
      statusEl.textContent = dict.chooseOption;
      return;
    }

    const attendance = checkedAttendance.value;

    const data = {
      guest_name: name,
      attendance: attendance,
      language: currentLang,
      source_page: document.title,
      created_at_client: new Date().toISOString(),
      user_agent: navigator.userAgent
    };

    try {
      const res = await fetch(CONFIG.appsScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error("Network error");
      }

      form.reset();

      if (attendance === "no") {
        statusEl.textContent = dict.sentNo(name);
      } else {
        statusEl.textContent = dict.sentYes(name);
      }
    } catch (err) {
      console.error(err);
      statusEl.textContent = dict.failed;
    }
  });
}

document.getElementById("langToggle").addEventListener("click", () => {
  applyLanguage(currentLang === "ru" ? "kz" : "ru");
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("weddingLang");
  applyLanguage(savedLang === "kz" ? "kz" : "ru");
  buildCalendar();
  startCountdown();
  initAnimations();
  initMusic();
  initGallery();
  initForm();
});
