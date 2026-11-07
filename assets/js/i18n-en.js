/* =========================================================
   QURALAI — English (US) strings
   Plain browser script. Exposes window.QR_EN.
   text   — data-i18n key → innerHTML
   cursor — RU data-cursor label → EN label
   wa     — RU WhatsApp prefill → EN prefill
   meta   — <title> / description
   reels  — reel id → { t: title, s: tag }
   lab    — accent-lab strings
   extra  — optional: strings in index.html that have no data-i18n key
   ========================================================= */
window.QR_EN = {
  text: {
    /* nav */
    t0: 'Path',
    t1: 'Method',
    t2: 'Cases',
    t3: 'Reviews',
    t4: 'Plans',
    t5: 'Sign up',

    /* hero */
    t6: 'KZ <i>✈</i> US · online worldwide',
    t7: 'that’s me, Quralai ✦',
    t8: 'The American English you’ll <em>finally speak.</em>',
    t9: 'I’m 19. I’ve been teaching since I was 15 and have taught 1300+ students worldwide. 80% of every lesson is live speaking — so a month from now, you won’t just “know the rules.” You’ll be talking.',
    t10: 'Choose a plan',
    t11: 'Free lessons',
    t12: 'Scroll — we’re taking off',
    t13: 'students<br>worldwide',
    t14: 'languages<br>I speak and learn',
    t15: 'followers<br>on Instagram',
    t16: 'Harvard for free? · reels',
    t17: 'English since age 8,<br>teaching since 15 ✦',
    t18: 'live speaking',
    t19: '1300+ students',
    t20: 'Online worldwide',
    t21: 'Kazakh / Russian',

    /* 01 path */
    t22: 'My path',
    t23: 'At 8, I <em>hated</em> English.',
    t24: 'My parents made me study it — I didn’t see the point. Today English is my profession, and my students live in countries all over the world. Here’s how it happened.',
    t25: 'Scroll → the route moves on its own',
    t26: 'years old — the start',
    t27: 'Started learning English. Honestly? Against my will, and in tears.',
    t28: 'years old — first video',
    t29: 'A girl who’d only just started, already reading aloud on camera. That’s when the habit took hold: speak, don’t cram.',
    t30: 'years old — first students',
    t31: 'Started teaching on my own. And learned the main thing: a language doesn’t live in rules — it lives in everyday speech.',
    t32: 'this is where it all began',
    t33: 'days — French',
    t34: 'I was speaking French in 30 days. I teach my students the same fast-track method.',
    t35: 'years old — now',
    t36: '1300+ students worldwide, 7 languages I speak and learn, and I’m studying to become a translator.',
    t37: 'next — your route',
    t38: 'A language is a ticket. Where will you fly?',
    t39: 'Next stop: method →',

    /* 02 method */
    t40: 'My lessons aren’t a textbook. They’re a <em>conversation.</em>',
    t41: 'grwm in English — I turn even getting ready for class into a lesson',
    t42: '80% live speaking',
    t43: 'You speak from the very first lesson. Every class ends with speaking. Mistakes are fine — silence isn’t.',
    t44: 'Accent is a muscle',
    t45: 'We build American pronunciation by shadowing native speakers: podcasts, YouTube, TV shows. Not talent — technique.',
    t46: 'Grammar through real life',
    t47: '“Would have,” “could have” — I explain them through situations you’ve actually lived. That’s why they stick the first time.',
    t48: 'Daily report',
    t49: 'Homework, voice messages, mini-tests — every day. I keep the discipline; you just show up and do the work.',
    t50: 'One person — <em>seven accents.</em>',
    t51: 'Tap an accent and hear me switch between them. That’s exactly how we’ll train your ear — and your tongue.',
    t52: '<b class="mono">US</b> American',
    t53: '<b class="mono">UK</b> British',
    t54: '<b class="mono">RU</b> Russian',
    t55: '<b class="mono">FR</b> French',
    t56: '<b class="mono">AR</b> Arabic',
    t57: '<b class="mono">IN</b> Indian',
    t58: 'Pick an accent — sound on',
    t59: 'Next stop: cases →',

    /* 03 cases */
    t60: 'Not promises — student <em data-i18n="t83">results</em>.',
    t61: 'Screenshots from my stories, unretouched. Tap a card — it opens just like on Instagram.',
    c01: 'level in a month',
    c02: 'in 2 months',
    c03: 'on the UNT — automatic, via IELTS',
    c10: 'Speaking 7.0 in one month',
    c11: '<span>Timeline</span>1 month',
    c12: '<span>Format</span>private, 5 lessons a week',
    c13: '<span>Bonus</span>automatic 50/50 on the UNT',
    c14: '“Now she gets an automatic 50/50 on the UNT. Isn’t that awesome?” <span class="mono">from my stories</span>',
    c20: 'Level · 1 month',
    c21: 'One month — one level',
    c22: '<span>Timeline</span>1 month, 3 weeks for some',
    c23: '<span>Check</span>level test → B1 Intermediate',
    c24: '<span>Signature</span>a daily reminder: “study!”',
    c25: '“Meanwhile, our students finish a whole level in a month.” <span class="mono">from my stories</span>',
    t67: 'Level',
    t68: 'From A2 to B2 in two months',
    t69: '<span>Timeline</span>2 months',
    t70: '<span>Accent</span>American',
    t71: '<span>Signature</span>fast-speaking technique',
    t72: '“Look how my student speaks — with an American accent.” <span class="mono">from my stories</span>',
    c30: 'From zero',
    c31: 'From zero — speaking from day one',
    c32: '<span>Principle</span>speak from the first lesson',
    c33: '<span>Format</span>30-day challenge',
    c34: '<span>Day 7</span>speech already noticeably better',
    c35: '“Started from zero and spoke right away. My principle: speak — and get my students speaking — from day one.” <span class="mono">from my stories</span>',
    t73: '30<small>words</small>',
    t74: 'One month in the cohort — and they’re already talking',
    t75: '<span>Format</span>group on Zoom',
    t76: '<span>Every lesson</span>new words + speaking',
    t77: '<span>Homework</span>notebooks and voice messages',
    t78: '“I wrote down about 30 words from past topics, plus the new ones from class. Sentences are already getting easier.” <span class="mono">cohort student</span>',
    t79: 'Next stop: reviews →',

    /* 04 reviews */
    t80: 'What they write <em>after</em> class.',
    t81: 'Originals in Kazakh and Russian, exactly as sent. English translation below, in gray.',
    t82: 'reviews',
    c40: '1 month = 1 level',
    t83: 'results',
    t84: 'lessons',
    t85: 'my path',
    t86: 'The course was really strong. The month flew by, but you taught us so much — and your motivation is powerful.',
    t90: 'Cohort student · 21:38',
    t87: 'Lessons used to bore me. Now I keep talking even when I make mistakes — because I want to get my point across.',
    t91: 'Student · 17:14',
    t88: 'You explain things so they stick right away. Speaking, reading, listening — I discovered them all over again. And the motivation comes straight from the heart.',
    t92: 'Student · 17:12',
    t89: 'Thank you for giving us your time and sharing such useful tips. I really liked the lesson.',
    t93: 'Next stop: free lessons →',

    /* 05 reels */
    t94: 'Try a lesson <em>right now.</em>',
    t95: "Tap or click a video to watch it with sound. Swipe or drag the strip sideways.",
    t96: 'even more lessons on Instagram',
    t97: 'Next stop: plans →',

    /* 06 plans */
    t98: 'Choose your <em>ticket.</em>',
    t99: 'Not sure where to start? Start with a consultation — we’ll find your level and build a plan.',
    t100: 'YOU',
    t101: 'Reels on grammar and accents',
    t102: 'Slow English podcast for A2',
    t103: 'Life hacks and resource roundups',
    t104: 'forever',
    t105: 'Follow',
    t106: 'only 5 spots',
    t107: 'PLAN',
    t108: 'Personal consultation',
    t109: 'We’ll pinpoint your English level',
    t110: 'We’ll map out a full growth plan',
    t111: 'I’ll answer any question about the language and my method',
    t112: '<b>Bonus:</b> my secret polyglot methods',
    t113: 'Book now',
    t114: 'Group cohort',
    t115: 'A month of classes on Zoom',
    t116: '80% of each lesson is speaking practice',
    t117: 'Homework with feedback: notebooks, voice messages',
    t118: 'Cohort chat and support',
    t119: 'via WhatsApp',
    t120: 'next start date',
    t121: 'Join the cohort',
    t122: 'Private lessons',
    t123: 'Up to 5 lessons a week — intensive',
    t124: 'A program built around your goal: IELTS, school, work',
    t125: 'Daily reports and mini-tests',
    t126: 'American accent, one-on-one',
    t127: 'on request',
    t128: 'few spots left',
    t129: 'Learn more',
    t130: 'Next stop: questions →',

    /* 07 FAQ */
    t131: 'Questions',
    t132: 'Before <em>takeoff.</em>',
    t133: 'didn’t find your answer? message me — I’ll reply myself ✦',
    t134: 'My level is really low. Is this for me?',
    t135: 'Yes. I have materials even for A2 — like the Slow English podcast. In the consultation, we’ll figure out exactly where you should start.',
    t136: 'How do the lessons work?',
    t137: 'Online, on Zoom — that’s how I teach people in different countries. Homework and voice messages go through chat, and I check them myself.',
    t138: 'What language do you explain things in?',
    t139: 'Kazakh or Russian — whichever you’re more comfortable with. But in class we speak English: 80% of the time.',
    t140: 'Do you prep for IELTS?',
    t141: 'Yes. For example, one of my students got Speaking 7.0 after a month of private lessons (5 times a week).',
    t142: 'Why an American accent?',
    t143: 'It’s the most widespread English in movies, on YouTube and at work. I spent years building mine — and I know the shortcut.',
    t144: 'How do I sign up?',
    t145: 'Message me on WhatsApp — I’ll tell you when the next cohort starts or when I have time open for a consultation.',

    /* 08 contact */
    t146: 'Destination',
    t147: 'The first step is one message. I’ll handle the rest: level, plan, accent.',
    t148: 'Back to top ↑',
    t149: 'Open on Instagram ↗',

    /* route hub (multi-page split) */
    r20: 'Route',
    r21: 'Where should we <em>fly</em> first?',
    r22: 'Every stop is its own page. Start anywhere — every road leads to fluent English.',
    r01: 'Path',
    r11: 'At 8, I hated English. Today — 1300+ students.',
    r02: 'Method',
    r12: '80% of every lesson is live speaking. Plus a seven-accent lab.',
    r03: 'Cases',
    r13: 'IELTS 7.0, A2 → B2 in two months, a level a month.',
    r04: 'Reviews',
    r14: 'What students write after class — unretouched.',
    r05: 'Reels',
    r15: 'Free mini-lessons: accents, grammar, podcasts.',
    r06: 'Plans',
    r16: 'Consultation, cohort or private — choose your ticket.',
    r07: 'FAQ',
    r17: 'Answers to the big questions before takeoff.'
  },

  cursor: {
    'наверх': 'top',
    'форматы': 'plans',
    'смотреть': 'watch',
    'акценты': 'accents',
    'история': 'story',
    'дальше': 'next',
    'это я': 'that’s me',
    'слушать': 'listen',
    'звук': 'sound',
    'открыть': 'open',
    'читать': 'read',
    'тяни ⟷': 'drag ⟷',
    '▶ смотреть': '▶ watch',
    'бронь': 'book',
    'в поток': 'join',
    'ответ': 'answer',
    'написать': 'message',
    /* not in CURSOR (hero portrait label is Kazakh in every language) — optional */
    'сәлем!': 'hello!'
  },

  wa: {
    'Здравствуйте, Куралай! Хочу записаться на консультацию': 'Hi Quralai! I’d like to book a consultation',
    'Хочу на консультацию': 'I’d like to book a consultation',
    'Хочу в поток': 'I’d like to join the group cohort',
    'Хочу индивидуально': 'I’d like private lessons',
    'Здравствуйте, Куралай!': 'Hi Quralai!'
  },

  meta: {
    title: 'Quralai — American English coach',
    desc: 'Quralai Rapilbekova — American English teacher. 1300+ students worldwide, 80% of every lesson is live speaking. Consultations, group cohorts and private lessons online.',
    ogDesc: 'The American English you’ll finally speak. 1300+ students, 7 languages, online worldwide.'
  },

  reels: {
    'DfK4L0IN_va': { t: 'British or American?', s: 'accents' },
    'DepjRBNNou3': { t: 'Speaking in seven accents', s: 'accents' },
    'Der2Y7ZNv8b': { t: 'Would have — the saddest grammar', s: 'grammar' },
    'DetmhjcN-1S': { t: 'Slow English podcast · A2', s: 'listening' },
    'DepHaT2ND_T': { t: 'Top 3 YouTubers who got me to C1', s: 'resources' },
    'DeqsfLrNVRi': { t: 'How to study at Harvard for free', s: 'education' },
    'De1zYvwN4IC': { t: 'How do you build your speaking?', s: 'speaking' },
    'DeoW4KatvWH': { t: 'How I got this accent', s: 'pronunciation' },
    'DfCmN25NDzp': { t: 'GRWM in English', s: 'vocabulary' },
    'DfKg5-qSAsa': { t: 'Could have — grammar', s: 'grammar' },
    'DfHrEL7NwP_': { t: 'Slow English podcast · part 2', s: 'listening' },
    'Deo1p0ctggU': { t: 'English is easy — why sweat it?', s: 'motivation' }
  },

  lab: {
    names: { 3: 'American', 7: 'British', 12: 'Russian', 17: 'French', 21: 'Valley girl', 30: 'Arabic', 35: 'Indian' },
    now: 'Now playing: ',
    suffix: ' accent',
    again: 'Pick another accent',
    hint: 'Pick an accent — sound on'
  },

  /* ---------------------------------------------------------
     OPTIONAL — strings in index.html with no data-i18n key.
     Not required by i18n.js today; here so English mode can
     be fully English if they get wired up.
     --------------------------------------------------------- */
  extra: {
    /* review bubbles without data-i18n, keyed by the RU figcaption text.
       tr  = English translation line for the quote (RU or KZ original)
       cap = English figcaption */
    reviews: {
      'Зайнаб · WhatsApp · 16:45': { cap: 'Zainab · WhatsApp · 16:45', tr: 'I really loved today’s lesson. Lots of new words. And most importantly — I didn’t really know how to write an essay. Thank you for teaching me.' },
      'Студент · WhatsApp': { cap: 'Student · WhatsApp', tr: null /* t89 already covers this bubble */ },
      'Ученица · из сторис': { cap: 'Student · from my stories', tr: 'I got my thoughts across freely — straight in English, without thinking in Kazakh and without a translator.' },
      'Студентка · из Турции': { cap: 'Student · from Turkey', tr: 'I really loved the course. Everything is explained clearly and calmly, and it was never boring. Now I’m not afraid to speak English.' },
      'Ученица · после 2 уроков': { cap: 'Student · after 2 lessons', tr: 'Thank you for these useful lessons. Only two classes in, and I already know two tenses and lots of new words, and I’m writing essays — the thing I disliked most back in school.' },
      'Ученица · первый урок': { cap: 'Student · first lesson', tr: 'In my very first lesson, I understood a topic I couldn’t get in other courses. At the end, we listened to a podcast and worked with it.' },
      'Студентка · мама двоих детей': { cap: 'Student · mom of two', tr: 'I want to thank you for your patience — you were always so understanding. In my case that mattered: I have two small kids. Huge thanks for the knowledge, for how easily you explain things, and for the fair prices. I’ll definitely keep learning with you.' },
      'Ученица · после урока': { cap: 'Student · after a lesson', tr: 'The lesson was such a vibe. I never thought I’d start speaking like this.' },
      'Ученица потока': { cap: 'Cohort student', tr: 'I loved your course so much — honestly, 100000 out of 10.' }
    },
    /* visible text nodes without data-i18n (RU → EN) */
    misc: {
      'Accent lab · интерактив': 'Accent lab · interactive',
      'Поток': 'Cohort',
      'консультация': 'consultation',
      'танысу': 'about me',
      '30 минут': '30 minutes',
      '60 минут': '60 minutes'
    },
    /* aria-label values (RU → EN) */
    aria: {
      'Разделы': 'Sections',
      'Язык · Тіл': 'Language',
      'Меню': 'Menu',
      'Выбор акцента': 'Choose an accent',
      'Сторис': 'Stories',
      'Закрыть': 'Close',
      'Назад': 'Previous',
      'Вперёд': 'Next',
      'Видео': 'Video'
    },
    /* img alt values (RU → EN) */
    alt: {
      'Құралай Рапилбекова': 'Quralai Rapilbekova',
      'Құралай': 'Quralai',
      'Құралай в детстве': 'Quralai as a child',
      'Құралай в 9 лет читает на английском': 'Quralai at 9, reading in English',
      'Құралай в библиотеке': 'Quralai in a library',
      'Занятия в Zoom и путешествия': 'Zoom lessons and travel',
      'Путешествие во Вьетнам': 'A trip to Vietnam',
      'IELTS: Overall 6.0, Speaking 7.0': 'IELTS: Overall 6.0, Speaking 7.0',
      'Результат IELTS: Speaking 7.0': 'IELTS result: Speaking 7.0',
      'Тест уровня: B1 Intermediate': 'Level test: B1 Intermediate',
      'Результат за 3 недели': 'Result after 3 weeks',
      '2 месяца — 2 уровня: A2 → B2': '2 months — 2 levels: A2 → B2',
      'Ученица: точка А — A2, точка B — B2': 'Student: point A — A2, point B — B2',
      'Ученица с нуля говорит на английском': 'A student who started from zero, speaking English',
      'Домашние задания студентов потока': 'Homework from cohort students',
      'Урок в Zoom': 'A lesson on Zoom',
      'Скриншот отзыва ученика': 'Screenshot of a student review',
      'Скриншоты отзывов в WhatsApp': 'Screenshots of WhatsApp reviews'
    }
  }
};
