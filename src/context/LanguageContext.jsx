import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      project: 'Project',
      experience: 'Experience',
      openForWork: 'Open for work',
      langToggleAria: 'Switch language to Indonesian',
    },
    // Hero Slab & Home
    home: {
      roleSub: 'Junior Web Developer',
      taglineFullStack: '01 Full-Stack Developer',
      taglineReact: '02 React & Next.js Specialist',
      taglineWeb3: '03 Web3 & Cloud Systems',
      expYears: 'years',
      expLabel: 'EXP',
      basedLabel: 'BASED',
      basedLocation: 'Kota Bekasi, Rawalumbu',
      pickCard: 'Pick your card!',
      decksCount: '4 Decks',
      hoverToReveal: 'Hover to reveal',
      cardAbout: 'About',
      cardSkills: 'Skills',
      cardProject: 'Project',
      cardExperience: 'Experience',
      cardAboutSub: 'Software Engineering · Bina Insani',
      cardSkillsSub: 'React · Next · Node · Web3',
      cardProjectSub: 'Production Web Apps · PRD Automation',
      cardExpSub: 'Track Record · AriseHash · Calcu.id',
      dockContact: 'Contact me!',
      scrollCue: 'Scroll to get in touch',
    },
    // About Chapter
    about: {
      chapterNo: 'Chapter 01',
      titleMain: 'About',
      titleEm: 'Me',
      hello: 'HELLO!',
      roleBadge: 'Software Engineer',
      bioGreeting: 'I am',
      bioName: 'Ikhwanda Pratama',
      bioRole: ', a Junior Web Developer and Software Engineering student at Bina Insani University.',
      bioDetail: 'With a vocational Multimedia background from SMK Negeri 05 Bengkulu Utara, I focus deeply on modern web application development utilizing React, Next.js, and Node.js. Adept at translating complex technical requirements into clean, modular, and responsive codebases integrated with RESTful APIs, automated LLM prompt pipelines for technical workflows, and cloud relational databases.',
      downloadCV: 'Download CV',
      statYears: 'Years Coding Experience',
      statProjects: 'Projects & Web Repositories',
      statDegree: 'Software Engineering',
      statCleanCode: 'Clean Code & Git Workflow',
      eduTitle: 'Education History',
      eduTrack: 'Track Record',
      eduSubtitle: 'Formal and vocational academic foundation in software engineering, algorithms, and interactive multimedia.',
      eduUniPeriod: '2024 — Present (Active)',
      eduUniName: 'Bina Insani University',
      eduUniDegree: 'Bachelor of Software Engineering',
      eduUniDesc: 'In-depth focus on Software Engineering principles, Data Structures & Algorithms, Object-Oriented Programming (OOP), Relational Database Design (PostgreSQL/SQL), Modern Web Architecture, and Agile Methodologies.',
      eduSmkPeriod: 'Vocational High School',
      eduSmkName: 'SMK Negeri 05 Bengkulu Utara',
      eduSmkMajor: 'Multimedia Major',
      eduSmkDesc: 'Mastered visual design principles, UI/UX graphic interfaces, multimedia composition, interactive animations, and web logic fundamentals that form a solid foundation for modern frontend engineering.',
      focusTitle: 'Core Focus',
      focusBadge: 'Specialization',
      focusSubtitle: 'Technical specialization in architecting modern, resilient, and scalable web software:',
      socialInstagram: 'Instagram Profile',
      socialLinkedin: 'LinkedIn Profile',
      socialGithub: 'GitHub Profile',
      nextCardLbl: 'Pick your card!',
      nextSkills: 'Technical',
      nextSkillsEm: 'Skills',
      nextProjects: 'Featured',
      nextProjectsEm: 'Projects',
      nextExp: 'Track',
      nextExpEm: 'Experience',
    },
    // Skills Chapter
    skills: {
      chapterNo: 'Chapter 02',
      titleMain: 'Technical',
      titleEm: 'Skills',
      heroClaim: 'Writing resilient code that turns ideas into reality.',
      heroStatsYears: 'Years Dev',
      heroStatsRepos: 'Repositories',
      heroStatsArch: 'Full-Stack Architecture',
      railTitle: 'Core Stack',
      categories: {
        frontend: {
          title: 'Frontend Architecture',
          period: 'Core Stack',
          desc: 'High-performance reactive interfaces, modular component systems, and responsive layouts.',
        },
        backend: {
          title: 'Backend & APIs',
          period: 'Server & Logic',
          desc: 'RESTful API endpoints, server routing, prompt pipelines, and secure data contracts.',
        },
        database: {
          title: 'Databases & Cloud',
          period: 'Data Infrastructure',
          desc: 'Relational data modeling, serverless cloud databases, query performance, and BaaS integration.',
        },
        web3: {
          title: 'Web3 & dApps',
          period: 'Decentralized Web',
          desc: 'Smart contract client integration, Web3 wallet connect, and real-time on-chain state handling.',
        },
      },
    },
    // Projects Chapter
    projects: {
      chapterNo: 'Chapter 03',
      titleMain: 'Featured',
      titleEm: 'Projects',
      heroSub: '& Web Applications',
      heroClaim: 'Turning specifications into resilient, high-speed applications.',
      heroBody: 'Every project is engineered with structured architecture, modular components, optimized database queries, and battle-tested API integrations for real-world production users.',
      viewLive: 'Launch Live Demo',
      viewCode: 'GitHub Repo',
      techStackLbl: 'Tech Stack',
      exploreAll: 'Explore All Demos',
      project1Kicker: '01 · Flagship AI SaaS 2026',
      project1Title: 'AriseHash',
      project1Subtitle: 'AI Architecture Engine & In-Browser Sandbox Platform',
      project1Desc: 'AI Architecture Engine and interactive web sandbox that automates software architecture planning into complete technical blueprints (PRD, interactive Mermaid.js diagrams, database schema) and live executable frontend code prototypes in the browser with an autonomous error auto-fix loop.',
      project1Stat1Label: 'Sandpack',
      project1Stat1Val: 'In-Browser IDE',
      project1Stat2Label: 'SSE',
      project1Stat2Val: 'Streaming Engine',
      project1Stat3Label: 'Multi-LLM',
      project1Stat3Val: 'Failover Routing',

      project2Kicker: '02 · Fintech & Web3 EdTech CMS',
      project2Title: 'Calcu.id Platform',
      project2Period: '2025 — 2026',
      project2Desc: 'Financial education media platform and Web3 community integrated with a custom CMS engine. Features interactive financial calculators, educational modules, and high-speed query and loading performance on PostgreSQL and serverless cloud.',
      project2Action: 'Visit Calcu.id',

      project3Kicker: '03 · Web3 Confidential DeFi Protocol',
      project3Title: 'ShadowRoll Protocol',
      project3Period: '2026 · Arbitrum Sepolia',
      project3Desc: 'Privacy-first decentralized DeFi payroll protocol enabling confidential on-chain salary distribution powered by Trusted Execution Environment (TEE) via iExec Nox on Arbitrum Sepolia with shielded pool and encrypted ledger.',
      project3ActionLive: 'Launch dApp',
      project3ActionCode: 'GitHub Repo',
    },
    // Experience Chapter
    experience: {
      chapterNo: 'Chapter 04',
      titleMain: 'Track',
      titleEm: 'Experience',
      ledeLead: 'Engineering is proven through real deliverables, not theory alone.',
      ledeBody: 'Focused on end-to-end web application development that is clean, tested, and reliable: from architecting responsive UI, building secure API endpoints, integrating prompt pipelines, to deploying cloud serverless databases.',
      getInTouch: 'Get in Touch',
      trackTitle: 'Production Track Record',
      trackPeriod: '2025 — Present',
      trackIntro: 'Practical track record in full-stack web development, API integration, and workflow automation matching my updated CV:',
      item1Year: '2025 — 2026',
      item1Company: 'Calcu.id – Educational Platform & CMS (2026)',
      item1Role: 'Full-Stack Developer',
      item1Desc: 'Developed a financial educational website integrated with a CMS system. Managed relational databases (SQL / PostgreSQL) using Supabase and optimized page load performance.',
      item2Year: '2026',
      item2Company: 'ShadowRoll – Web3 Decentralized App (2026)',
      item2Role: 'Web3 Developer & Frontend Specialist',
      item2Desc: 'Built responsive dApp interfaces integrated with Web3 crypto wallets (MetaMask, RainbowKit, Wagmi v2). Handled client-side data state management and real-time transaction tracking.',
      item3Year: '2026',
      item3Company: 'AriseHash – Web Solution & PRD Builder (2026)',
      item3Role: 'Full-Stack Developer & System Architect',
      item3Desc: 'Built an AI Architecture Engine, structured code, and PRD generator platform with in-browser sandpack execution to realize website ideas. Integrated backend APIs and responsive design to enable rapid web development workflow automation.',
      pillarsTitle: 'Core Pillars',
      pillarsBadge: 'Engineering Principles',
      standardsTitle: 'Engineering Standards',
      standardsBadge: 'Engineering Culture',
      standardsIntro: 'Standardized code discipline and workflows for team collaboration:',
    },
    // Footer
    footer: {
      available: 'Available for full-time positions & high-impact contracts.',
      quickLinks: 'Navigation',
      backToTop: 'Back to top',
      copyright: 'All rights reserved.',
    },
    // CV Modal
    cvModal: {
      title: 'Curriculum Vitae',
      subtitle: 'Official PDF Document',
      downloadBtn: 'Download PDF',
      closeBtn: 'Close',
    },
  },
  id: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      project: 'Project',
      experience: 'Experience',
      openForWork: 'Tersedia untuk Kerja',
      langToggleAria: 'Ubah bahasa ke Bahasa Inggris',
    },
    // Hero Slab & Home
    home: {
      roleSub: 'Junior Web Developer',
      taglineFullStack: '01 Full-Stack Developer',
      taglineReact: '02 Spesialis React & Next.js',
      taglineWeb3: '03 Sistem Web3 & Cloud',
      expYears: 'tahun',
      expLabel: 'EXP',
      basedLabel: 'DOMISILI',
      basedLocation: 'Kota Bekasi, Rawalumbu',
      pickCard: 'Pilih kartu Anda!',
      decksCount: '4 Kartu',
      hoverToReveal: 'Arahkan kursor',
      cardAbout: 'About',
      cardSkills: 'Skills',
      cardProject: 'Project',
      cardExperience: 'Experience',
      cardAboutSub: 'Rekayasa Perangkat Lunak · Bina Insani',
      cardSkillsSub: 'React · Next · Node · Web3',
      cardProjectSub: 'Aplikasi Web Produksi · Otomasi PRD',
      cardExpSub: 'Rekam Jejak · AriseHash · Calcu.id',
      dockContact: 'Hubungi saya!',
      scrollCue: 'Gulir untuk terhubung',
    },
    // About Chapter
    about: {
      chapterNo: 'Chapter 01',
      titleMain: 'About',
      titleEm: 'Me',
      hello: 'HALO!',
      roleBadge: 'Software Engineer',
      bioGreeting: 'Saya',
      bioName: 'Ikhwanda Pratama',
      bioRole: ', seorang Junior Web Developer dan mahasiswa Rekayasa Perangkat Lunak di Universitas Bina Insani.',
      bioDetail: 'Memiliki latar belakang pendidikan Multimedia dari SMK Negeri 05 Bengkulu Utara dan fokus mendalam pada pengembangan aplikasi web modern berbasis React, Next.js, dan Node.js. Terbiasa menerjemahkan kebutuhan teknis ke dalam arsitektur kode yang bersih, responsif, dan terintegrasi dengan REST API, otomasi prompt LLM untuk alur kerja teknis, serta pengelolaan basis data relasional.',
      downloadCV: 'Unduh CV',
      statYears: 'Tahun Pengalaman Coding',
      statProjects: 'Proyek & Repositori Web',
      statDegree: 'S1 Rekayasa Perangkat Lunak',
      statCleanCode: 'Clean Code & Alur Kerja Git',
      eduTitle: 'Riwayat Pendidikan',
      eduTrack: 'Track Record',
      eduSubtitle: 'Pondasi akademik formal dan kejuruan dalam rekayasa perangkat lunak, algoritma, serta multimedia interaktif.',
      eduUniPeriod: '2024 — Sekarang (Aktif)',
      eduUniName: 'Universitas Bina Insani',
      eduUniDegree: 'S1 Rekayasa Perangkat Lunak (Software Engineering)',
      eduUniDesc: 'Fokus pendalaman pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Pemrograman Berorientasi Objek (OOP), Desain Basis Data Relasional (PostgreSQL/SQL), Arsitektur Web Modern, serta Metodologi Agile.',
      eduSmkPeriod: 'Pendidikan Menengah Kejuruan',
      eduSmkName: 'SMK Negeri 05 Bengkulu Utara',
      eduSmkMajor: 'Jurusan Multimedia',
      eduSmkDesc: 'Mempelajari dasar-dasar desain visual, antarmuka grafis (UI/UX), komposisi multimedia, animasi interaktif, serta logika pemrograman web dasar yang menjadi pondasi kuat pengembangan frontend modern.',
      focusTitle: 'Fokus Rekayasa',
      focusBadge: 'Spesialisasi',
      focusSubtitle: 'Spesialisasi teknis dalam membangun arsitektur perangkat lunak berbasis web modern, tangguh, dan skalabel:',
      socialInstagram: 'Profil Instagram',
      socialLinkedin: 'Profil LinkedIn',
      socialGithub: 'Profil GitHub',
      nextCardLbl: 'Pilih kartu Anda!',
      nextSkills: 'Keahlian',
      nextSkillsEm: 'Teknis',
      nextProjects: 'Proyek',
      nextProjectsEm: 'Unggulan',
      nextExp: 'Rekam',
      nextExpEm: 'Pengalaman',
    },
    // Skills Chapter
    skills: {
      chapterNo: 'Chapter 02',
      titleMain: 'Technical',
      titleEm: 'Skills',
      heroClaim: 'Menulis kode tangguh yang mewujudkan ide menjadi nyata.',
      heroStatsYears: 'Tahun Dev',
      heroStatsRepos: 'Repositori',
      heroStatsArch: 'Arsitektur Full-Stack',
      railTitle: 'Core Stack',
      categories: {
        frontend: {
          title: 'Arsitektur Frontend',
          period: 'Core Stack',
          desc: 'Antarmuka reaktif berkinerja tinggi, sistem komponen modular, dan tata letak responsif.',
        },
        backend: {
          title: 'Backend & APIs',
          period: 'Server & Logika',
          desc: 'Endpoint RESTful API, perutean server, alur prompt LLM, dan kontrak data aman.',
        },
        database: {
          title: 'Basis Data & Cloud',
          period: 'Infrastruktur Data',
          desc: 'Pemodelan skema relasional, basis data cloud serverless, performa kueri, dan BaaS.',
        },
        web3: {
          title: 'Web3 & dApps',
          period: 'Web Desentralisasi',
          desc: 'Integrasi smart contract sisi client, koneksi dompet Web3, dan penanganan state on-chain real-time.',
        },
      },
    },
    // Projects Chapter
    projects: {
      chapterNo: 'Chapter 03',
      titleMain: 'Featured',
      titleEm: 'Projects',
      heroSub: '& Aplikasi Web',
      heroClaim: 'Mengubah spesifikasi teknis menjadi aplikasi cepat dan tangguh.',
      heroBody: 'Setiap proyek dikembangkan dengan arsitektur kode terstruktur, modularitas komponen tinggi, efisiensi kueri database, dan integrasi API yang handal untuk kebutuhan pengguna nyata.',
      viewLive: 'Lihat Demo',
      viewCode: 'Repositori GitHub',
      techStackLbl: 'Tech Stack',
      exploreAll: 'Jelajahi Semua Demo',
      project1Kicker: '01 · Flagship AI SaaS 2026',
      project1Title: 'AriseHash',
      project1Subtitle: 'AI Architecture Engine & In-Browser Sandbox Platform',
      project1Desc: 'Platform AI Architecture Engine dan interactive web sandbox yang mengotomatisasi perencanaan arsitektur perangkat lunak dari ide mentah menjadi cetak biru teknis lengkap (PRD, diagram Mermaid.js, skema database) serta prototipe kode frontend modular yang langsung dieksekusi secara real-time di browser dengan mekanisme autonomous error auto-fix loop.',
      project1Stat1Label: 'Sandpack',
      project1Stat1Val: 'In-Browser IDE',
      project1Stat2Label: 'SSE',
      project1Stat2Val: 'Streaming Engine',
      project1Stat3Label: 'Multi-LLM',
      project1Stat3Val: 'Failover Routing',

      project2Kicker: '02 · Fintech & Web3 EdTech CMS',
      project2Title: 'Calcu.id Platform',
      project2Period: '2025 — 2026',
      project2Desc: 'Website edukasi finansial dan komunitas Web3 terintegrasi sistem CMS dinamis dengan modul kalkulator keuangan interaktif, pengelolaan basis data relasional PostgreSQL pada cloud serverless, dan optimasi kecepatan rendering.',
      project2Action: 'Kunjungi Calcu.id',

      project3Kicker: '03 · Protokol DeFi Web3 Konfidensial',
      project3Title: 'ShadowRoll Protocol',
      project3Period: '2026 · Arbitrum Sepolia',
      project3Desc: 'Protokol payroll terdesentralisasi pertama yang menjaga kerahasiaan nominal gaji on-chain menggunakan Trusted Execution Environment (TEE) via iExec Nox pada Arbitrum Sepolia. Menghadirkan shielded pool dan TEE ledger untuk privasi finansial tingkat enterprise.',
      project3ActionLive: 'Buka dApp',
      project3ActionCode: 'Repositori GitHub',
    },
    // Experience Chapter
    experience: {
      chapterNo: 'Chapter 04',
      titleMain: 'Track',
      titleEm: 'Experience',
      ledeLead: 'Rekayasa perangkat lunak dibuktikan lewat hasil karya nyata, bukan sekadar teori.',
      ledeBody: 'Fokus pada pengembangan aplikasi web end-to-end yang bersih dan teruji: mulai dari perancangan arsitektur antarmuka responsif, pembuatan API endpoints yang aman, integrasi prompt pipelines, hingga deployment basis data cloud serverless.',
      getInTouch: 'Hubungi Saya',
      trackTitle: 'Rekam Jejak Produksi',
      trackPeriod: '2025 — Sekarang',
      trackIntro: 'Rekam jejak praktis dalam pengembangan web full-stack, integrasi API, dan otomasi alur kerja sesuai dengan isi CV resmi terbaru:',
      item1Year: '2025 — 2026',
      item1Company: 'Calcu.id – Educational Platform & CMS (2026)',
      item1Role: 'Full-Stack Developer',
      item1Desc: 'Mengembangkan website edukasi finansial terintegrasi sistem CMS. Mengelola basis data relasional (SQL / PostgreSQL) menggunakan Supabase dan optimasi performa loading halaman.',
      item2Year: '2026',
      item2Company: 'ShadowRoll – Web3 Decentralized App (2026)',
      item2Role: 'Web3 Developer & Frontend Specialist',
      item2Desc: 'Membangun antarmuka dApp responsif dengan integrasi Web3 crypto wallet (MetaMask, RainbowKit, Wagmi v2). Menangani state management data dan transaksi real-time di sisi client.',
      item3Year: '2026',
      item3Company: 'AriseHash – Web Solution & PRD Builder (2026)',
      item3Role: 'Full-Stack Developer & System Architect',
      item3Desc: 'Membangun platform AI Architecture Engine, penjana kode, dan PRD berstruktur dengan in-browser sandpack execution untuk merealisasikan ide website. Mengintegrasikan backend API dan desain responsif untuk otomasi alur kerja pengembangan web dengan cepat.',
      pillarsTitle: 'Pilar Spesialisasi',
      pillarsBadge: 'Prinsip Rekayasa',
      standardsTitle: 'Standar Rekayasa',
      standardsBadge: 'Budaya Rekayasa',
      standardsIntro: 'Disiplin kode dan alur kerja terstandarisasi untuk kolaborasi tim:',
    },
    // Footer
    footer: {
      available: 'Terbuka untuk posisi full-time & kontrak proyek berdampak tinggi.',
      quickLinks: 'Navigasi',
      backToTop: 'Kembali ke atas',
      copyright: 'Hak cipta dilindungi.',
    },
    // CV Modal
    cvModal: {
      title: 'Curriculum Vitae',
      subtitle: 'Dokumen PDF Resmi',
      downloadBtn: 'Unduh PDF',
      closeBtn: 'Tutup',
    },
  },
};

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
  toggleLang: () => {},
});

export function LanguageProvider({ children }) {
  // Default language is English ('en') as requested by user
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ikhwanda_portofolio_lang');
      if (saved === 'en' || saved === 'id') return saved;
    }
    return 'en';
  });

  const changeLang = (newLang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ikhwanda_portofolio_lang', newLang);
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    changeLang(lang === 'en' ? 'id' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = {
    lang,
    setLang: changeLang,
    toggleLang,
    t: translations[lang] || translations.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
