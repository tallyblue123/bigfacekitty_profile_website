(function () {
  'use strict';

  const DICT = {
    zh: {
      /* ── Page meta ── */
      'site.title': 'Jessie Feng | 大模型应用 · 后端工程',
      'site.desc': 'Jessie Feng的个人主页，8 年后端与 Agent 应用开发经验，展示技术栈、项目经历和联系方式。',
      'contact.title': '联系 · Jessie Feng',
      'contact.desc': '联系Jessie Feng——大模型应用开发工程师，8 年后端与 Agent 开发经验。',

      /* ── Sidebar ── */
      'brand.title': 'LLM 应用工程 · 后端架构',
      'brand.subtitle': 'Jessie Feng · 个人主页',
      'nav.bio': 'Bio Node',
      'nav.projects': 'Repository Map',
      'nav.timeline': 'Timeline Notes',
      'nav.contact': 'Contact',
      'cta.text': '联系我',
      'side.archive': 'Archive',
      'side.location': 'Remote / 深圳',

      /* ── Mobile topbar ── */
      'mobile.home': '主页',
      'mobile.bio': '简介',
      'mobile.stack': '技术',
      'mobile.projects': '项目',
      'mobile.timeline': '经历',
      'mobile.contact': '联系',

      /* ── Focus node ── */
      'focus.title': 'Focus',
      'focus.text': '正在将 LLM 应用工程经验、后端架构能力和 Agent 开发实践沉淀为可展示的个人技术主页。',

      /* ── Bio node ── */
      'bio.name': 'Jessie Feng',
      'bio.role': '大模型应用开发 · 后端工程师',
      'bio.text': '8 年工作经验，7 年后端 + 1 年 Agent 应用开发。专注大模型应用工程、RAG 全流程与多智能体协作，具备从 Prompt 设计到服务化部署的端到端落地能力。',

      /* ── Stack node ── */
      'stack.title': 'Stack Layers',
      'stack.backend': 'Backend & Architecture',
      'stack.ai': 'AI & LLM Engineering',
      'stack.infra': 'Engineering & Infra',

      /* ── Project node ── */
      'projects.title': 'Repository Map',
      'projects.item1.title': 'Order Agent 服务',
      'projects.item1.desc': '基于大模型 + Function Calling 的对话式下单助手，支持多轮填单、表单实时联动、权限校验与安全合规。',
      'projects.item2.title': '检验检测业务服务平台',
      'projects.item2.desc': '微服务架构支撑客户下单、订单流转与工单排单，引入 Redis 分布式缓存与 Spring Batch 批量对账。',
      'projects.item3.title': '邮件管理服务',
      'projects.item3.desc': '重构邮件服务，实现邮件监控、查询、重发与模板管理，基于 Spring Boot + AWS SQS + PostgreSQL。',
      'projects.item4.title': 'Scratch Tools',
      'projects.item4.desc': '个人开发效率工具集，日常脚本与各类实用工具的集中仓库。',

      /* ── Personal node ── */
      'personal.title': '个人App',
      'personal.item1.title': '模版渲染与转换服务',
      'personal.item1.desc': '基于 Spring Boot + Velocity + Node.js，实现 HTML 模板渲染与 PDF 转换，支持模板管理与 Docker 容器化部署。',
      'personal.item2.title': 'Cypress 自动化测试平台',
      'personal.item2.desc': '封装 Cypress 通用测试组件与自定义命令库，对接 Jenkins 实现代码提交自动触发测试与结果通知。',
      'personal.item3.title': '密码生成器',
      'personal.item3.desc': '随机密码在线生成工具，支持长度/字符集自定义，部署在 GitHub Pages。',

      /* ── Timeline node ── */
      'timeline.title': '工作经历 Timeline',
      'timeline.item1.company': '启迈检验（深圳）',
      'timeline.item1.range': '2021 – 2025',
      'timeline.item1.desc': 'Java 开发工程师，主导检验检测平台核心业务后端开发，负责 Order Agent 等大模型应用从方案设计到落地。',
      'timeline.item2.company': '德科信息 · 软通科技',
      'timeline.item2.range': '2019 – 2021',
      'timeline.item2.desc': 'Java/Go 中台服务开发，基于 Spring Cloud 构建安全防御通信链路，支持 10W+ 终端设备的策略管控。',
      'timeline.item3.company': '重庆新致金服 · 太平金科',
      'timeline.item3.range': '2018 – 2019',
      'timeline.item3.desc': 'Java 开发工程师，参与保险续期、教育平台等业务系统开发，涉及微服务架构与 SQL 优化。',

      /* ── Contact page ── */
      'contact.heading': '联系我',
      'contact.subtitle': '欢迎交流大模型应用、后端架构或长期合作',
      'contact.note': '目前在深圳，支持远程协作。邮件和 GitHub 私信都能找到我。',
      'contact.emailBtn': '发送邮件',
      'contact.githubBtn': 'GitHub',

      /* ── Canvas hint ── */
      'canvas.hint': '滚动画布 · 触碰猫咪',

      /* ── Cat messages ── */
      'cat.msg.0': '你好，我是大脸猫。想了解我的技术栈还是项目经历？',
      'cat.msg.1': '我有 8 年后端经验，最近一年专注大模型应用工程和 Agent 开发。',
      'cat.msg.2': '目前这个主页还在持续更新中，后面会接博客、作品集和 AI 助手入口，请持续关注哦~',
      'cat.msg.3': '我最近开发了一个英语学习网站整合英语私教agent的项目哦，他可以帮助我提供英语私教的私人化跟踪及追踪学习进度的功能，欢迎了解一下！',
      'cat.msg.4': '鼠标再靠近一点，我会把耳朵转过去听你说。',

      /* ── alt / aria attributes ── */
      'alt.avatar': 'Jessie Feng 头像',
      'alt.project1': '项目预览',
      'alt.project2': '项目预览',
      'alt.cat': '可互动的 3D 黑猫 Jessie Feng的虚拟伙伴',
      'aria.sendEmail': '发送邮件',
      'aria.github': 'GitHub',
      'aria.mobileNav': '移动端导航',
      'aria.mainNav': '主导航',
      'aria.workspace': '个人介绍画布',
      'aria.catStage': '互动猫咪'
    },

    en: {
      /* ── Page meta ── */
      'site.title': 'Jessie Feng | LLM Applications · Backend Engineering',
      'site.desc': 'Personal homepage of Jessie Feng — 8 years of backend & Agent development experience, showcasing tech stack, projects, and contact info.',
      'contact.title': 'Contact · Jessie Feng',
      'contact.desc': 'Get in touch with Jessie Feng — LLM application engineer with 8 years of backend and Agent development experience.',

      /* ── Sidebar ── */
      'brand.title': 'LLM Apps · Backend Architecture',
      'brand.subtitle': 'Jessie Feng · Profile',
      'nav.bio': 'Bio Node',
      'nav.projects': 'Repository Map',
      'nav.timeline': 'Timeline',
      'nav.contact': 'Contact',
      'cta.text': 'Get in Touch',
      'side.archive': 'Archive',
      'side.location': 'Remote / Shenzhen',

      /* ── Mobile topbar ── */
      'mobile.home': 'Home',
      'mobile.bio': 'Bio',
      'mobile.stack': 'Stack',
      'mobile.projects': 'Projects',
      'mobile.timeline': 'Timeline',
      'mobile.contact': 'Contact',

      /* ── Focus node ── */
      'focus.title': 'Focus',
      'focus.text': 'Distilling hands-on experience in LLM application engineering, backend architecture, and Agent development into a showcase personal site.',

      /* ── Bio node ── */
      'bio.name': 'Jessie Feng',
      'bio.role': 'LLM Application Developer · Backend Engineer',
      'bio.text': '8 years of industry experience — 7 years in backend + 1 year in Agent development. Focused on LLM application engineering, end-to-end RAG pipelines, and multi-agent collaboration, with hands-on capability from prompt design to production serving.',

      /* ── Stack node ── */
      'stack.title': 'Stack Layers',
      'stack.backend': 'Backend & Architecture',
      'stack.ai': 'AI & LLM Engineering',
      'stack.infra': 'Engineering & Infra',

      /* ── Project node ── */
      'projects.title': 'Repository Map',
      'projects.item1.title': 'Order Agent Service',
      'projects.item1.desc': 'A conversational ordering assistant built on LLM + Function Calling, supporting multi-turn form filling, real-time form sync, permission checks, and security compliance.',
      'projects.item2.title': 'Inspection & Testing Service Platform',
      'projects.item2.desc': 'Microservice platform supporting customer ordering, order workflow, and job scheduling. Leverages Redis distributed caching and Spring Batch for daily reconciliation.',
      'projects.item3.title': 'Email Management Service',
      'projects.item3.desc': 'Refactored email service with monitoring, querying, retry, and template management, built on Spring Boot + AWS SQS + PostgreSQL.',
      'projects.item4.title': 'Scratch Tools',
      'projects.item4.desc': 'Personal dev toolkit — a central repo of daily scripts and utility tools.',

      /* ── Personal node ── */
      'personal.title': 'Personal App',
      'personal.item1.title': 'Template Rendering & Conversion Service',
      'personal.item1.desc': 'HTML template rendering and PDF conversion service using Spring Boot + Velocity + Node.js, with template management and Docker-based deployment.',
      'personal.item2.title': 'Cypress Automated Testing Platform',
      'personal.item2.desc': 'Wrapped Cypress with reusable test components and custom commands, integrated with Jenkins for CI-driven automated regression testing and reporting.',
      'personal.item3.title': 'Password Generator',
      'personal.item3.desc': 'Online random password generator with customizable length and character sets, hosted on GitHub Pages.',

      /* ── Timeline node ── */
      'timeline.title': 'Work Experience',
      'timeline.item1.company': 'QIMA (Shenzhen)',
      'timeline.item1.range': '2021 – 2025',
      'timeline.item1.desc': 'Java Developer — led core backend development for the inspection platform; designed and delivered the Order Agent LLM application end-to-end.',
      'timeline.item2.company': 'DeKe Info · iSoftStone',
      'timeline.item2.range': '2019 – 2021',
      'timeline.item2.desc': 'Java/Go mid-platform service development — built secure communication pipelines on Spring Cloud, supporting 100K+ endpoint device policy management.',
      'timeline.item3.company': 'NewStart · Taiping Fintech',
      'timeline.item3.range': '2018 – 2019',
      'timeline.item3.desc': 'Java Developer — contributed to insurance renewal systems and education platforms with microservice architecture and SQL optimization.',

      /* ── Contact page ── */
      'contact.heading': 'Contact Me',
      'contact.subtitle': 'Open to discussing LLM applications, backend architecture, or long-term collaboration',
      'contact.note': 'Based in Shenzhen, China. Available for remote collaboration. Reach me via email or GitHub.',
      'contact.emailBtn': 'Send Email',
      'contact.githubBtn': 'GitHub',

      /* ── Canvas hint ── */
      'canvas.hint': 'scroll the canvas · hover the cat',

      /* ── Cat messages ── */
      'cat.msg.0': "Hey there — I'm the guardian of this canvas. Want to check out the tech stack or project map first?",
      'cat.msg.1': "I've got 8 years of backend experience and spent the last year deep in LLM application engineering and Agent development.",
      'cat.msg.2': "This site is pure static for now — a blog, portfolio, and AI assistant entry point are coming soon.",
      'cat.msg.3': "Order Agent is my latest project — we reimagined the ordering experience with LLM + Function Calling.",
      'cat.msg.4': "Come a little closer — I'll turn my ears your way and listen.",

      /* ── alt / aria attributes ── */
      'alt.avatar': 'Jessie Feng avatar',
      'alt.project1': 'Project preview',
      'alt.project2': 'Project preview',
      'alt.cat': 'Interactive 3D black cat — virtual companion',
      'aria.sendEmail': 'Send email',
      'aria.github': 'GitHub',
      'aria.mobileNav': 'Mobile navigation',
      'aria.mainNav': 'Main navigation',
      'aria.workspace': 'Personal profile canvas',
      'aria.catStage': 'Interactive cat'
    }
  };

  const SUPPORTED = ['zh', 'en'];
  const ATTR_PREFIX = 'data-i18n-attr-';

  function detectLang() {
    const stored = localStorage.getItem('lang');
    if (stored && SUPPORTED.includes(stored)) return stored;
    const nav = navigator.language || '';
    if (nav.startsWith('zh')) return 'zh';
    return 'zh'; // default Chinese
  }

  let currentLang = detectLang();

  function applyText(el, lang) {
    const key = el.getAttribute('data-i18n');
    if (!key || !DICT[lang][key]) return;
    el.textContent = DICT[lang][key];
  }

  function applyAttr(el, lang) {
    // data-i18n-attr-* attributes: the attribute value IS the translation key
    for (var i = 0; i < el.attributes.length; i++) {
      var name = el.attributes[i].name;
      if (name.indexOf(ATTR_PREFIX) === 0) {
        var targetAttr = name.slice(ATTR_PREFIX.length);
        var key = el.attributes[i].value;
        if (DICT[lang] && DICT[lang][key]) {
          el.setAttribute(targetAttr, DICT[lang][key]);
        }
      }
    }
  }

  function applyPageMeta(lang) {
    const tKey = document.querySelector('meta[data-i18n="site.title"], title[data-i18n="site.title"], title[data-i18n="contact.title"]');
    if (!tKey) return;
    // Handle <title>
    const titleEl = document.querySelector('title');
    const titleKey = titleEl && titleEl.getAttribute('data-i18n');
    if (titleKey && DICT[lang][titleKey]) {
      document.title = DICT[lang][titleKey];
    }
    // Handle <meta name="description">
    const metaDesc = document.querySelector('meta[name="description"]');
    const descKey = metaDesc && metaDesc.getAttribute('data-i18n');
    if (descKey && DICT[lang][descKey]) {
      metaDesc.setAttribute('content', DICT[lang][descKey]);
    }
    // Update html lang
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function hasChildElements(el) {
    return el.children.length > 0;
  }

  function hasI18nAttrs(el) {
    for (var i = 0; i < el.attributes.length; i++) {
      if (el.attributes[i].name.indexOf('data-i18n-attr-') === 0) return true;
    }
    return false;
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Page title & meta
    applyPageMeta(lang);

    // All data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      // Skip textContent for containers that have child elements and attr-only usage
      // (e.g. <nav> with children uses data-i18n only for aria-label)
      if (!hasI18nAttrs(el) || !hasChildElements(el)) {
        applyText(el, lang);
      }
      applyAttr(el, lang);
    });

    // Update toggle button states
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
    });

    // Dispatch event for inline scripts that need to react
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    applyLang(lang);
  }

  // Expose API
  window.I18N = {
    dict: DICT,
    lang: function () { return currentLang; },
    setLang: setLang,
    t: function (key) { return DICT[currentLang] && DICT[currentLang][key] ? DICT[currentLang][key] : key; },
    catMessages: function () {
      var msgs = [];
      for (var i = 0; i < 5; i++) {
        msgs.push(DICT[currentLang]['cat.msg.' + i] || '');
      }
      return msgs;
    }
  };

  // Apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { applyLang(currentLang); });
  } else {
    applyLang(currentLang);
  }
})();
