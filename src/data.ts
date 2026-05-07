export type Lang = 'en' | 'ru'

export const person = {
  name: 'Arseniy Abramidze',
  email: 'zowel.aep@gmail.com',
  telegram: 'https://t.me/zowelqqe',
  linkedin: 'https://linkedin.com/in/arseniy-abramidze-14946727b',
  github: 'https://github.com/zowelqqee',
  location: { en: 'Tenerife, Spain · open to remote', ru: 'Тенерифе, Испания · открыт к удаленной работе' },
  headline: {
    en: 'AI/ML Engineer building LLM integrations and automation systems',
    ru: 'AI/ML-инженер, создаю LLM-интеграции и системы автоматизации',
  },
  subheadline: {
    en: 'Python-focused engineer building practical AI products: voice assistants, browser agents, production ML services, and analytics workflows that turn raw business data into decisions.',
    ru: 'Python-ориентированный инженер, создаю прикладные AI-продукты: голосовых ассистентов, браузерных агентов, production ML-сервисы и аналитические workflow, превращающие сырые данные в решения.',
  },
}

export const projects = [
  {
    name: 'JARVIS',
    tagline: { en: 'Personal AI Assistant', ru: 'Персональный AI-ассистент' },
    period: '2025 — present',
    stack: ['Python', 'Google Gemini Live API', 'scikit-learn', 'FastAPI', 'MLflow'],
    color: 'indigo' as const,
    image: '/images/jarvis_image.png' as string,
    description: {
      en: 'Real-time voice AI assistant for system control, browser automation, file management, and workflow execution. Combines a production intent-classification API, MLflow experiment tracking, confidence-drift monitoring, and a deterministic Parser → Validator → Planner → Executor pipeline.',
      ru: 'Голосовой AI-ассистент в реальном времени для управления системой, браузерной автоматизации, работы с файлами и выполнения workflow. Объединяет production API для intent classification, трекинг экспериментов в MLflow, мониторинг дрифта уверенности и детерминированный пайплайн Parser → Validator → Planner → Executor.',
    },
    highlights: {
      en: [
        'Intent detection via TF-IDF + Logistic Regression on 4,200 samples with 99.88% accuracy, deployed through FastAPI',
        'Wake-word filtering, CI via GitHub Actions, and KS-test-based drift alerts for model-confidence drops',
      ],
      ru: [
        'Определение интентов через TF-IDF + Logistic Regression на 4 200 примерах с точностью 99.88%, развернуто через FastAPI',
        'Wake-word filtering, CI на GitHub Actions и drift alerts на основе KS-теста при падении уверенности модели',
      ],
    },
  },
  {
    name: 'ARIA',
    tagline: { en: 'AR Assistant', ru: 'AR-ассистент' },
    period: '2026 — present',
    stack: ['Python', 'Raspberry Pi', 'OpenCV', 'YOLOv8', 'face_recognition'],
    color: 'sky' as const,
    description: {
      en: 'Real-time decision-support assistant with voice interface, contextual memory, and computer vision on edge hardware. Uses OpenCV, YOLOv8, face recognition, and server-side vector memory to fit Raspberry Pi constraints.',
      ru: 'Ассистент поддержки решений в реальном времени с голосовым интерфейсом, контекстной памятью и computer vision на edge-устройстве. Использует OpenCV, YOLOv8, face recognition и серверную векторную память, чтобы уложиться в ограничения Raspberry Pi.',
    },
    highlights: {
      en: [
        'Computer-vision pipeline for face detection, face recognition, and real-time object detection',
        'Architecture chosen around edge-device limits: server-side vector memory instead of local GPU',
      ],
      ru: [
        'Computer vision pipeline для детекции лиц, распознавания лиц и object detection в реальном времени',
        'Архитектура выбрана под ограничения edge-устройства: серверная векторная память вместо локального GPU',
      ],
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
        'Built and launched DataPulse, an AI analytics product for e-commerce and retail with paying customers',
        'Ingested raw Excel and Google Sheets data into structured AI reports: executive summaries, top risks, anomalies, and demand patterns',
        'Automated SKU-level anomaly detection and data quality control, reducing report preparation time from hours to 30 seconds',
        'Designed the full architecture independently: Python backend, OpenAI API integration, Pandas pipeline, and client output layer',
      ],
      ru: [
        'Построил и запустил DataPulse, AI-продукт аналитики для e-commerce и ритейла с платящими клиентами',
        'Преобразовал сырые данные из Excel и Google Sheets в структурированные AI-отчеты: executive summary, top risks, anomalies и demand patterns',
        'Автоматизировал SKU-level anomaly detection и контроль качества данных, сократив подготовку отчетов с нескольких часов до 30 секунд',
        'Самостоятельно спроектировал полную архитектуру: Python-бэкенд, интеграцию OpenAI API, Pandas-пайплайн и слой клиентской выдачи',
      ],
    },
  },
  {
    role: { en: 'Freelance Developer', ru: 'Фриланс-разработчик' },
    company: { en: 'Self-employed', ru: 'Self-employed' },
    period: '2023 — present',
    points: {
      en: [
        'Delivered production web projects for 4+ clients using Next.js, TypeScript, and Tailwind CSS from brief to handoff',
        'Built automated content pipelines and SEO workflows; one client achieved 2x organic reach growth in 3 months',
        'Developed browser automation agents with Playwright and Python for data collection and business reporting',
        'Integrated OpenAI API into multiple client tools, including prompt architecture and response parsing over raw API calls',
      ],
      ru: [
        'Сделал продакшн-веб-проекты для 4+ клиентов на Next.js, TypeScript и Tailwind CSS, полностью от брифа до handoff',
        'Построил автоматизированные контент-пайплайны и SEO-workflow; у одного клиента органический охват вырос в 2 раза за 3 месяца',
        'Разработал агентов браузерной автоматизации на Playwright и Python для сбора данных и бизнес-отчетности',
        'Интегрировал OpenAI API в несколько клиентских инструментов, включая prompt architecture и response parsing поверх raw API calls',
      ],
    },
  },
]

export const skills = [
  'Python', 'TypeScript', 'JavaScript', 'C++ (basic)', 'scikit-learn',
  'TF-IDF', 'Logistic Regression', 'FastAPI', 'MLflow', 'Pandas',
  'NumPy', 'Next.js', 'React', 'Tailwind CSS', 'Node.js',
  'REST API', 'Git', 'Docker', 'Playwright', 'Google Gemini Live API',
  'OpenAI API', 'LLM integrations', 'Prompt engineering', 'Intent classification',
  'Workflow automation', 'Vector DBs', 'Production ML',
]

export const education = {
  degree: { en: 'B.S. Computer Science', ru: 'Бакалавр, Computer Science' },
  detail: { en: 'Starting Fall 2026', ru: 'Начало — осень 2026' },
  achievements: {
    en: [
      'Self-directed preparation: algorithms, data structures, system design, Python, and ML fundamentals',
      'Open Olympiad in Programming (ITMO University): finalist, Level 1 RSOSH, accepted as an entrance exam equivalent at top Russian technical universities',
    ],
    ru: [
      'Самостоятельная подготовка: алгоритмы, структуры данных, system design, Python и основы ML',
      'Открытая олимпиада по программированию ИТМО: финалист, RSOSH 1-го уровня, засчитывается как вступительное испытание в ведущие технические вузы России',
    ],
  },
}

export const additional = [
  {
    label: { en: 'Languages', ru: 'Языки' },
    value: {
      en: 'Russian (native), English (professional)',
      ru: 'Русский (родной), английский (профессиональный)',
    },
  },
  {
    label: { en: 'Work setup', ru: 'Формат работы' },
    value: {
      en: 'Tenerife, Spain · EU Residence Permit · Open to Remote',
      ru: 'Тенерифе, Испания · ВНЖ ЕС · открыт к удаленной работе',
    },
  },
  {
    label: { en: 'Interests', ru: 'Интересы' },
    value: {
      en: 'AI/ML engineering, product architecture, developer tooling, systems thinking',
      ru: 'AI/ML engineering, продуктовая архитектура, developer tooling, systems thinking',
    },
  },
]

export const ui = {
  nav: {
    projects: { en: 'Projects', ru: 'Проекты' },
    experience: { en: 'Experience', ru: 'Опыт' },
    skills: { en: 'Skills', ru: 'Навыки' },
    additional: { en: 'Additional', ru: 'Дополнительно' },
    contact: { en: 'Contact', ru: 'Контакт' },
  },
  hero: {
    viewProjects: { en: 'View projects', ru: 'Смотреть проекты' },
    contactMe: { en: 'Email me', ru: 'Написать на почту' },
  },
  sections: {
    projects: { en: "Things I've built", ru: 'Что я построил' },
    experience: { en: 'Work history', ru: 'Опыт работы' },
    skills: { en: 'Technical stack', ru: 'Технический стек' },
    education: { en: 'Academic background', ru: 'Образование' },
    additional: { en: 'Additional', ru: 'Дополнительно' },
    cta: {
      label: { en: 'Get in touch', ru: 'Связаться' },
      title: { en: "Let's work together", ru: 'Давайте работать вместе' },
      body: {
        en: 'Open to AI/ML engineering, LLM integration, automation, and product-minded backend roles.',
        ru: 'Открыт к ролям в AI/ML engineering, LLM-интеграциях, автоматизации и продуктовой backend-разработке.',
      },
    },
  },
}
