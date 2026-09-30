export const portfolioData = {
  personal: {
    name: "IKHWANDA PRATAMA",
    title: "JUNIOR WEB DEVELOPER",
    headline: "Software Engineering & Full-Stack Web",
    location: "Kota Bekasi, Rawalumbu",
    domicile: "Kota Bekasi, Rawalumbu",
    university: "Universitas Bina Insani",
    degree: "S1 Software Engineering",
    period: "2024 - Sekarang (Aktif)",
    email: "ikhwanda466@gmail.com",
    phone: "0822-8246-2024",
    phoneClean: "+6282282462024",
    website: "ikhwanda.is-a.dev",
    websiteUrl: "https://ikhwanda.is-a.dev",
    github: "https://github.com/zennz-hash",
    linkedin: "https://www.linkedin.com/in/ikhwanda-pratama-671a34288/",
    instagram: "https://www.instagram.com/ikhone_466/",
    cvFile: "/Ikhwanda-Pratama-CV.pdf",
    heroImage: "/ikhwanda-hero.png",
    bio: "Mahasiswa Rekayasa Perangkat Lunak dan Web Developer dengan pengalaman praktis membangun aplikasi berbasis React/Next.js dan Node.js. Terbiasa mengintegrasikan REST API, LLM API wrapper untuk otomasi alur kerja (seperti generator PRD), interaksi smart contract pada Web3 dApps, serta pengelolaan database SQL/cloud (Neon/Supabase). Terbiasa dengan workflow Git dan antusias berkontribusi dalam tim untuk mengembangkan solusi web yang fungsional.",
    mottoLeft: "IKHWANDA PRATAMA",
    mottoSub: "Software Engineer & Web Developer",
    mottoRightTop: "Code that scales.",
    mottoRightBottom: "Experiences that connect."
  },

  skillsSummaryPill: [
    "FULL-STACK WEB",
    "REACT & NEXT.JS",
    "TYPESCRIPT",
    "RESTFUL API",
    "LLM AUTOMATION",
    "WEB3 DAPPS",
    "POSTGRESQL & NEON"
  ],

  skillCategories: [
    {
      category: "Frontend Development",
      description: "Membangun antarmuka modern, responsif, dan interaktif dengan arsitektur modular.",
      skills: [
        { name: "React.js", level: "Advanced", experience: "2+ Tahun" },
        { name: "Next.js", level: "Intermediate", experience: "Proyek Aktif" },
        { name: "JavaScript & TypeScript", level: "Advanced", experience: "Core Stack" },
        { name: "CSS3 / Modern Styling", level: "Advanced", experience: "Responsive & Animations" },
        { name: "Component-Driven Architecture", level: "Intermediate", experience: "Modular UI" }
      ]
    },
    {
      category: "Backend & Automation",
      description: "Pengembangan layanan API, integrasi AI LLM wrapper, dan logika server.",
      skills: [
        { name: "Node.js & Express.js", level: "Intermediate", experience: "REST API & Server" },
        { name: "RESTful API Integration", level: "Advanced", experience: "Data Piping & Auth" },
        { name: "LLM API Wrapper & Prompts", level: "Intermediate", experience: "PRD Workflow Automation" },
        { name: "Smart Contract Client Interaction", level: "Intermediate", experience: "Web3 dApps" }
      ]
    },
    {
      category: "Database & Cloud Infrastructure",
      description: "Manajemen relasional database, cloud instances, dan optimasi query.",
      skills: [
        { name: "SQL & PostgreSQL", level: "Intermediate", experience: "Relational Modeling" },
        { name: "Neon Cloud Database", level: "Intermediate", experience: "Serverless Postgres" },
        { name: "Supabase", level: "Intermediate", experience: "Auth & Database" },
        { name: "Query Performance Optimization", level: "Intermediate", experience: "Fast Loading Times" }
      ]
    },
    {
      category: "Engineering Workflow & Tools",
      description: "Best practice pengembangan perangkat lunak, kolaborasi tim, dan versioning.",
      skills: [
        { name: "Git & GitHub", level: "Advanced", experience: "Branching & Collaboration" },
        { name: "Agile / Scrum Collaboration", level: "Intermediate", experience: "Team Delivery" },
        { name: "Clean Code & Refactoring", level: "Advanced", experience: "Maintainable Systems" },
        { name: "Web Performance & SEO", level: "Intermediate", experience: "Lighthouse & Core Vitals" }
      ]
    }
  ],

  projects: [
    {
      id: "arisehash",
      title: "ARISEHASH",
      subtitle: "AI ARCHITECTURE ENGINE & SANDBOX",
      year: "2026",
      role: "Full-Stack Developer & System Architect",
      badge: "Flagship AI SaaS 2026",
      image: "/projects/arisehash.png",
      liveUrl: "https://arisexhash.xyz",
      summary: "AI Architecture Engine dan interactive web sandbox yang mengotomatisasi perencanaan arsitektur perangkat lunak dari ide mentah menjadi cetak biru teknis lengkap (PRD, diagram Mermaid.js, skema database) serta prototipe kode frontend modular yang langsung dieksekusi secara real-time di browser via in-browser runtime sandbox dengan autonomous error auto-fix loop.",
      details: [
        "Merancang dan mengembangkan platform AI Architecture Engine berskala penuh berbasis React 18, Express, Prisma, dan PostgreSQL.",
        "Mengimplementasikan in-browser IDE sandbox menggunakan @codesandbox/sandpack-react lengkap dengan autonomous error auto-correction loop untuk mendeteksi dan memperbaiki error kompilasi kode secara mandiri.",
        "Membangun pipeline streaming multi-file berlatensi rendah menggunakan Server-Sent Events (SSE) dan parser XML kustom untuk generasi kode real-time.",
        "Menerapkan arsitektur keamanan tingkat produksi dengan cookie JWT httpOnly, double-submit CSRF guard, enkripsi AES-256-GCM untuk penyimpanan BYOK API Key, dan alokasi kuota atomik di level query database.",
        "Mengonfigurasi arsitektur cloud serverless di Vercel dengan database Supabase PostgreSQL, custom domain Anycast DNS, dan otomatisasi SSL."
      ],
      tags: ["React 18", "Vite", "Node.js", "Express", "Sandpack Runtime", "Mermaid.js", "Prisma ORM", "PostgreSQL", "SSE Streaming", "Claude / OpenAI / Gemini", "Tailwind CSS"],
      stats: [
        { label: "Runtime", value: "In-Browser Sandpack" },
        { label: "Streaming", value: "SSE Multi-File" },
        { label: "AI Gateway", value: "Multi-LLM Failover" }
      ],
      highlight: "AI Architecture Engine & Sandbox"
    },
    {
      id: "calcu-id",
      title: "CALCU.ID",
      subtitle: "FINANCIAL EDUCATION & WEB3 CMS",
      year: "2025 - 2026",
      role: "Full-Stack Developer",
      badge: "Fintech & Web3 EdTech CMS",
      image: "/projects/calcu.png",
      liveUrl: "https://calcu.my.id",
      summary: "Website edukasi finansial dan komunitas Web3 terintegrasi sistem CMS dinamis dengan modul kalkulator keuangan interaktif, pengelolaan basis data relasional PostgreSQL pada cloud serverless, dan optimasi kecepatan rendering.",
      details: [
        "Mengembangkan platform edukasi finansial dan ekosistem Web3 interaktif yang memudahkan pengguna memahami instrumen DeFi & TradFi.",
        "Merancang dan membangun Content Management System (CMS) custom untuk pengelolaan modul artikel edukasi, kalkulator, dan data feed.",
        "Mengelola basis data relasional (SQL / PostgreSQL) menggunakan Supabase BaaS.",
        "Melakukan optimasi performa loading halaman, rendering tabel, serta efisiensi query database hingga mencapai skor performa optimal."
      ],
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Headless CMS"],
      stats: [
        { label: "Ecosystem", value: "DeFi & TradFi" },
        { label: "Architecture", value: "Headless CMS" },
        { label: "Database", value: "Supabase (PostgreSQL)" }
      ],
      highlight: "Platform Edukasi Finansial & Web3"
    },
    {
      id: "shadowroll",
      title: "SHADOWROLL",
      subtitle: "CONFIDENTIAL DEFI PAYROLL PROTOCOL",
      year: "2026",
      role: "Web3 Developer & Frontend Specialist",
      badge: "Web3 Confidential DeFi",
      image: "/projects/shadowroll.png",
      liveUrl: "https://shadow-roll.vercel.app",
      githubUrl: "https://github.com/zennz-hash/ShadowRoll.git",
      summary: "Protokol payroll terdesentralisasi pertama yang menjaga kerahasiaan nominal gaji on-chain menggunakan Trusted Execution Environment (TEE) via iExec Nox pada Arbitrum Sepolia dengan arsitektur shielded pool dan TEE encrypted ledger.",
      details: [
        "Membangun antarmuka dApp responsif dengan integrasi Web3 wallet (MetaMask, RainbowKit, Wagmi v2, Viem) pada jaringan Arbitrum Sepolia.",
        "Mengimplementasikan integrasi Trusted Execution Environment (TEE) berbasis euint256 melalui framework iExec Nox untuk enkripsi nominal gaji.",
        "Mengembangkan fitur shielded pool deposit untuk perusahaan dan portal dekripsi saldo privat terenkripsi di sisi penerima (karyawan).",
        "Menangani state management transaksi real-time dan pelacakan on-chain events untuk batch payroll processing."
      ],
      tags: ["Next.js 14", "TypeScript", "Solidity 0.8.24", "Arbitrum Sepolia", "Wagmi v2", "Viem", "RainbowKit", "iExec Nox TEE", "Tailwind CSS"],
      stats: [
        { label: "Network", value: "Arbitrum Sepolia" },
        { label: "Cryptography", value: "iExec Nox TEE" },
        { label: "Standard", value: "ERC-7984 Concept" }
      ],
      highlight: "Payroll On-Chain Terenkripsi TEE"
    }
  ],

  education: {
    institution: "Universitas Bina Insani",
    degree: "S1 Software Engineering (Rekayasa Perangkat Lunak)",
    period: "2024 - Sekarang (Aktif)",
    status: "Mahasiswa Aktif",
    highlights: [
      "Fokus kurikulum pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data, dan Arsitektur Web Modern.",
      "Pengembangan proyek praktis berbasis industri mulai dari aplikasi web full-stack, REST API, hingga teknologi Web3.",
      "Penerapan disiplin Clean Code, Git Version Control, dan kolaborasi metodologi Agile."
    ]
  }
};
