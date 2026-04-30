export type Lang = 'en' | 'ru'

export const person = {
  name: 'Arseniy Abramidze',
  email: 'zowel.aep@gmail.com',
  telegram: 'https://t.me/zowelqqe',
  linkedin: 'https://linkedin.com/in/arseniy-abramidze-14946727b',
  github: 'https://github.com/zowelqqee',
  location: { en: 'Saint Petersburg · office / hybrid', ru: 'Санкт-Петербург · офис / гибрид' },
  headline: {
    en: 'AI Engineer building automation tools and deterministic LLM systems',
    ru: 'AI-инженер, строю инструменты автоматизации и детерминированные LLM-системы',
  },
  subheadline: {
    en: 'I build practical AI products: local desktop assistants, analytics automation, browser agents, and LLM-integrated workflows.',
    ru: 'Создаю прикладные AI-продукты: локальные десктопные ассистенты, аналитическую автоматизацию, браузерные агенты и LLM-интеграции.',
  },
}

export const projects = [
  {
    name: 'JARVIS',
    tagline: { en: 'Desktop AI Assistant', ru: 'Десктопный AI-ассистент' },
    stack: ['Python', 'TypeScript', 'PySide6', 'LLM APIs'],
    color: 'indigo' as const,
    // put your screenshot in public/images/ and set the path here, e.g. '/images/jarvis.png'
    image: '/images/jarvis_image.png' as string,
    description: {
      en: 'Local desktop AI assistant with deterministic execution pipeline: Parser → Validator → Planner → Executor. No hidden actions. Explicit confirmation boundaries. Visible state at every step. LLM is used only as fallback; core decisions are deterministic and reproducible.',
      ru: 'Локальный десктопный AI-ассистент с детерминированным пайплайном: Parser → Validator → Planner → Executor. Никаких скрытых действий. Явные границы подтверждений. Видимое состояние на каждом шаге. LLM используется только как запасной вариант — ключевые решения воспроизводимы.',
    },
  },
  {
    name: 'DataPulse',
    tagline: { en: 'AI Analytics Product', ru: 'AI-продукт для аналитики' },
    stack: ['Python', 'Pandas', 'OpenAI API', 'Excel / Google Sheets'],
    color: 'violet' as const,
    // put your screenshot in public/images/ and set the path here, e.g. '/images/datapulse.png'
    image: '/images/datapulse_image.png' as string,
    description: {
      en: 'AI analytics product for e-commerce and retail with paying clients. Takes raw Excel/Google Sheets data and generates decision-ready reports: executive summary, risks, anomalies, SKU-level insights, demand patterns. Reduced report preparation from several hours to about 30 seconds.',
      ru: 'AI-продукт аналитики для e-commerce и ритейла с реальными клиентами. Принимает сырые данные из Excel/Google Sheets и генерирует готовые к принятию решений отчёты: executive summary, риски, аномалии, SKU-инсайты, паттерны спроса. Сокращает подготовку отчётов с нескольких часов до ~30 секунд.',
    },
  },
  {
    name: 'ARIA',
    tagline: { en: 'AR Assistant Prototype', ru: 'Прототип AR-ассистента' },
    stack: ['Python', 'Vector DBs', 'Server architecture', 'Frame hardware'],
    color: 'sky' as const,
    description: {
      en: 'Prototype of a real-time decision support assistant with voice interface and contextual memory. Uses server-side vector memory instead of local GPU to fit edge-device constraints.',
      ru: 'Прототип ассистента поддержки решений в реальном времени с голосовым интерфейсом и контекстной памятью. Использует серверную векторную память вместо локального GPU для работы на граничных устройствах.',
    },
  },
]

export const experience = [
  {
    role: { en: 'Founder / AI Developer', ru: 'Основатель / AI-разработчик' },
    company: 'DataPulse',
    period: '2025 — present',
    points: {
      en: [
        'Built and launched an AI analytics product with paying clients',
        'Designed backend architecture, Pandas pipeline, OpenAI integration, and report generation layer',
      ],
      ru: [
        'Построил и запустил AI-продукт аналитики с платящими клиентами',
        'Спроектировал бэкенд-архитектуру, Pandas-пайплайн, интеграцию OpenAI и слой генерации отчётов',
      ],
    },
  },
  {
    role: { en: 'Freelance Developer', ru: 'Фриланс-разработчик' },
    company: { en: 'Independent', ru: 'Независимо' },
    period: '2023 — present',
    points: {
      en: [
        'Delivered 4+ production web projects with Next.js, TypeScript, Tailwind CSS',
        'Built automated content and SEO workflows',
        'Developed browser automation agents with Playwright + Python',
        'Integrated OpenAI API into client tools',
      ],
      ru: [
        'Сдал 4+ продакшн-веб-проекта на Next.js, TypeScript, Tailwind CSS',
        'Построил автоматизированные контентные и SEO-воркфлоу',
        'Разработал агенты браузерной автоматизации на Playwright + Python',
        'Интегрировал OpenAI API в инструменты клиентов',
      ],
    },
  },
]

export const skills = [
  'Python', 'TypeScript', 'JavaScript', 'Next.js', 'React',
  'Tailwind CSS', 'Node.js', 'REST API', 'Git', 'Playwright',
  'Pandas', 'NumPy', 'OpenAI API', 'LLM integrations',
  'Prompt architecture', 'Workflow automation', 'Vector databases',
]

export const education = {
  degree: { en: 'B.S. Computer Science', ru: 'Бакалавр, Компьютерные науки' },
  detail: { en: 'Starting Fall 2026', ru: 'Начало — осень 2026' },
  achievements: {
    en: ['ITMO Programming Olympiad finalist', 'Level 1 RSOSH'],
    ru: ['Финалист олимпиады ИТМО по программированию', 'ВСОШ 1-го уровня'],
  },
}

export const ui = {
  nav: {
    projects: { en: 'Projects', ru: 'Проекты' },
    experience: { en: 'Experience', ru: 'Опыт' },
    skills: { en: 'Skills', ru: 'Навыки' },
    contact: { en: 'Contact', ru: 'Контакт' },
  },
  hero: {
    viewProjects: { en: 'View projects', ru: 'Смотреть проекты' },
    contactMe: { en: 'Contact me', ru: 'Написать' },
  },
  sections: {
    projects: { en: "Things I've built", ru: 'Что я построил' },
    experience: { en: 'Work history', ru: 'Опыт работы' },
    skills: { en: 'Technical stack', ru: 'Технический стек' },
    education: { en: 'Academic background', ru: 'Образование' },
    cta: {
      label: { en: 'Get in touch', ru: 'Связаться' },
      title: { en: "Let's work together", ru: 'Давайте работать вместе' },
      body: {
        en: 'Interested in AI automation, LLM systems, or product engineering roles.',
        ru: 'Открыт к ролям в AI-автоматизации, LLM-системах или продуктовой разработке.',
      },
    },
  },
}
