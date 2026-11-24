import { ref } from 'vue'

const savedLang = localStorage.getItem('portfolio_lang') || 'vi'
export const currentLang = ref(savedLang)

export const toggleLang = () => {
  currentLang.value = currentLang.value === 'vi' ? 'en' : 'vi'
  localStorage.setItem('portfolio_lang', currentLang.value)
}

export const content = {
  vi: {
    nav: {
      about: 'Về tôi',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      experience: 'Kinh nghiệm',
      contact: 'Liên hệ'
    },
    hero: {
      statusBadge: 'Sẵn sàng đón nhận các cơ hội',
      greeting: 'Xin chào, mình là',
      name: 'Nguyễn Trung Nguyên',
      role: 'Sinh viên Kỹ thuật Phần mềm (FPT University)',
      subtitles: ['Prompt Engineering & Agent Workflows', 'Web & Full-Stack Foundations', 'Docker & AWS EC2 Deployment'],
      bio: 'Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học FPT Cần Thơ, định hướng Prompt Engineering, Agent Workflows và AI-Assisted Development. Tập trung vào tư duy kiến trúc, phân tích và bóc tách bài toán, ứng dụng AI để tối ưu quy trình phát triển và xây dựng sản phẩm phần mềm hoàn chỉnh.',
      stats: [
        { label: 'GPA tích lũy', value: '8.52 / 10' },
        { label: 'Thực tập sinh', value: 'Rikkeisoft' },
        { label: 'Dự án đã làm', value: '4+ dự án' },
        { label: 'Ngoại ngữ', value: 'TOEIC 400+' }
      ],
      btnProjects: 'Xem các dự án',
      btnContact: 'Gửi tin nhắn',
      fptuSub: 'Chuyên ngành Kỹ thuật Phần mềm'
    },
    skills: {
      badge: '01 — Kỹ năng & Công cụ',
      title: 'Những gì mình đã học và làm quen',
      subtitle: 'Nền tảng được rèn luyện qua các môn học tại trường, đồ án thực tế và quá trình tự học.',
      categories: [
        {
          title: 'Lập trình & Phát triển Web',
          icon: '💻',
          skills: ['Vue.js', 'JavaScript', 'HTML5 / CSS3', 'C#', 'ASP.NET Core', 'Java', 'Dart / Flutter']
        },
        {
          title: 'Cơ sở dữ liệu & Triển khai (Cloud/DevOps)',
          icon: '☁️',
          skills: ['Docker (Container hóa)', 'AWS EC2 (Deploy dự án)', 'SQL Server', 'PostgreSQL', 'Git / GitHub', 'Postman']
        },
        {
          title: 'Prompt Engineering & Agent Workflows',
          icon: '🧠',
          skills: ['Prompt Engineering & System Prompts', 'Agent Workflows (ReAct, Tool Calling)', 'AI-Assisted Development', 'Context & Memory Design', 'AI Vision (YOLO cơ bản)']
        },
        {
          title: 'Kỹ năng làm việc',
          icon: '🤝',
          skills: ['Làm việc nhóm', 'Quy trình SDLC', 'Theo dõi tiến độ công việc', 'Học hỏi nhanh & thích ứng']
        }
      ]
    },
    projects: {
      badge: '02 — Dự án đã làm',
      title: 'Dự án học tập & Cá nhân',
      subtitle: 'Những sản phẩm thực hành giúp mình hiểu sâu hơn về luồng làm việc thực tế và cách giải quyết vấn đề.',
      list: [
        {
          id: 1,
          title: 'MoVan – Nền tảng chuyển trọ sinh viên',
          badge: 'Đồ án tốt nghiệp (Đang định hướng)',
          category: 'Đồ án sắp tới',
          desc: 'Đề tài đồ án tốt nghiệp (nhóm 5 thành viên) xây dựng nền tảng hỗ trợ đặt xe chuyển trọ cho sinh viên. Dự án hiện chưa triển khai code mà đang trong giai đoạn định hướng kiến trúc: Backend định hướng sử dụng .NET (ASP.NET Core Web API), Frontend cân nhắc Blazor hoặc Next.js, kết hợp module AI Vision (YOLO) để nhận diện đồ đạc và ước lượng xe tải phù hợp.',
          role: 'Thành viên nhóm (Định hướng kiến trúc & Module AI)',
          tech: ['.NET Backend (Định hướng)', 'Blazor / Next.js (Dự kiến)', 'AI Vision (YOLO)', 'System Design'],
          linkText: null,
          linkUrl: null
        },
        {
          id: 2,
          title: 'Mộc Xinh – Tái sinh từ thiên nhiên',
          badge: 'Dự án Web thực tế',
          category: 'Cá nhân',
          desc: 'Landing page quảng bá các sản phẩm giấy thủ công sinh thái từ phụ phẩm nông nghiệp và các buổi workshop trải nghiệm của dự án Mộc Xinh. Xây dựng giao diện responsive mượt mà với Next.js và Tailwind CSS, tối ưu trải nghiệm người dùng, tốc độ tải trang và SEO, kết nối tên miền chính thức.',
          role: 'Lập trình viên Web (Frontend / Landing Page)',
          tech: ['Next.js', 'React', 'Tailwind CSS', 'Responsive UI', 'SEO'],
          githubUrl: 'https://github.com/Trunguyen104/mocxinh-project',
          githubText: 'Xem mã nguồn ↗',
          liveUrl: 'https://www.mocxinh.id.vn/',
          liveText: 'Trang web thực tế ↗'
        },
        {
          id: 3,
          title: 'Meism – CaseShop',
          badge: 'Dự án cá nhân Full-Stack',
          category: 'Cá nhân',
          desc: 'Website thương mại điện tử tùy biến ốp lưng điện thoại trực quan theo thời gian thực và đặt hàng. Dự án xây dựng theo chuẩn .NET hiện đại với ASP.NET Core và Razor (Components / Blazor), Entity Framework Core với PostgreSQL, kết hợp Tailwind CSS, Cloudinary quản lý ảnh và cổng thanh toán payOS, đóng gói Docker và deploy trên AWS EC2.',
          role: 'Lập trình viên độc lập (Full-Stack .NET)',
          tech: ['.NET (C#)', 'Razor Components / Blazor', 'ASP.NET Core', 'EF Core / PostgreSQL', 'Tailwind CSS', 'Docker / AWS EC2'],
          githubUrl: 'https://github.com/Trunguyen104/CaseShop',
          githubText: 'Xem mã nguồn ↗',
          linkUrl: 'https://github.com/Trunguyen104/CaseShop'
        },
        {
          id: 4,
          title: 'Internship One Connect (IOC)',
          badge: 'Dự án môn học (Team Lead)',
          category: 'Dự án nhóm',
          desc: 'Hệ thống quản lý thực tập kết nối Sinh viên – Nhà trường – Doanh nghiệp. Đảm nhiệm vai trò Team Lead: phân rã công việc, thiết kế quy trình, xây dựng Backend với ASP.NET Core Web API, cơ sở dữ liệu PostgreSQL và tích hợp kết nối giao diện Web qua RESTful API.',
          role: 'Team Lead & Lập trình Full-Stack',
          tech: ['C#', 'ASP.NET Core Web API', 'PostgreSQL', 'RESTful API', 'Git'],
          githubUrl: 'https://github.com/Trunguyen104/Internship-OneConnect_IOC_v2.0_Frontend',
          githubText: 'Xem mã nguồn ↗',
          linkUrl: 'https://github.com/Trunguyen104/Internship-OneConnect_IOC_v2.0_Frontend'
        },
        {
          id: 5,
          title: 'JoyleeBook',
          badge: 'Dự án Microservices nhóm',
          category: 'Dự án nhóm',
          desc: 'Nền tảng đọc truyện và sách trực tuyến kiến trúc Microservices trên nền tảng .NET 8. Tham gia phát triển giao diện đọc mượt mà với Blazor (JoyleeBook.Public & Admin), tối ưu cuộn trang và tích hợp dữ liệu qua API Gateway cùng các microservices backend.',
          role: 'Thành viên nhóm (Blazor Frontend & Backend APIs)',
          tech: ['.NET 8', 'Blazor Web', 'Microservices', 'ASP.NET Core Web API', 'PostgreSQL / SQL Server', 'Docker'],
          githubUrl: 'https://github.com/PhucPhucc/JoyleeBook-V3.0',
          githubText: 'Xem mã nguồn ↗',
          linkUrl: 'https://github.com/PhucPhucc/JoyleeBook-V3.0'
        }
      ]
    },
    experience: {
      badge: '03 — Hoạt động & Trải nghiệm',
      title: 'Quá trình học tập & Cọ xát',
      subtitle: 'Những trải nghiệm thực tế giúp mình hiểu rõ hơn về văn hóa doanh nghiệp và rèn luyện kỹ năng mềm.',
      timeline: [
        {
          period: 'Tháng 1/2026 – Tháng 4/2026',
          title: 'Thực tập sinh (Team Lead nhóm sinh viên)',
          org: 'Rikkeisoft',
          desc: 'Được phân công hỗ trợ điều phối công việc trong nhóm thực tập, theo dõi tiến độ công việc hàng tuần và làm quen với quy trình làm việc thực tế tại doanh nghiệp.'
        },
        {
          period: '2024 – Nay',
          title: 'Thành viên câu lạc bộ',
          org: 'FCoder Club (ĐH FPT Cần Thơ)',
          desc: 'Sinh hoạt định kỳ cùng các bạn sinh viên đam mê lập trình, cùng nhau chia sẻ tài liệu và hỗ trợ giải bài tập kỹ thuật.'
        },
        {
          period: 'Tháng 10/2026',
          title: 'Hỗ trợ tổ chức sự kiện',
          org: 'Dự án Mộc Xinh',
          desc: 'Tham gia điều phối và hỗ trợ workshop làm đồ thủ công từ giấy tái chế thân thiện với môi trường tại trường.'
        },
        {
          period: '2024 – 2026',
          title: 'Tham gia các cuộc thi ở trường để học hỏi',
          org: 'F-Hacker CTF, Auto Race, IT Consulting Challenge',
          desc: 'Chủ động đăng ký tham gia các cuộc thi lập trình xe tự hành, an toàn thông tin và thử thách tư vấn giải pháp IT để cọ xát kiến thức thực tế và học hỏi từ các đội bạn.'
        }
      ]
    },
    contact: {
      badge: '04 — Liên hệ',
      heading: 'Rất vui được kết nối cùng bạn',
      sub: 'Nếu bạn có công việc part-time phù hợp, hoặc muốn trao đổi về dự án học tập, đừng ngần ngại nhắn cho mình nhé!',
      btnEmail: 'Gửi Email',
      btnCopy: 'Sao chép Email',
      copied: '✓ Đã sao chép!',
      phone: 'Số điện thoại'
    },
    footer: {
      text: 'Nguyễn Trung Nguyên. Thiết kế mộc mạc với Vue 3 & Vite.',
      top: 'Lên đầu trang ↑'
    }
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      statusBadge: 'Open to opportunities',
      greeting: "Hi, I'm",
      name: 'Nguyen Trung Nguyen',
      role: 'Software Engineering Student (FPT University)',
      subtitles: ['Prompt Engineering & Agent Workflows', 'Web & Full-Stack Foundations', 'Docker & AWS EC2 Deployment'],
      bio: "A final-year Software Engineering student at FPT University Can Tho, with a focus on Prompt Engineering, Agent Workflows, and AI-Assisted Development. Specializes in architectural thinking, problem analysis and decomposition, and the application of AI to optimize development processes and build complete software products.",
      stats: [
        { label: 'Cumulative GPA', value: '8.52 / 10' },
        { label: 'Internship', value: 'Rikkeisoft' },
        { label: 'Projects Built', value: '4+ Projects' },
        { label: 'English', value: 'TOEIC 400+' }
      ],
      btnProjects: 'View Projects',
      btnContact: 'Get in Touch',
      fptuSub: 'Software Engineering Major'
    },
    skills: {
      badge: '01 — Skills & Tools',
      title: 'What I work with',
      subtitle: 'Technical foundations built through university coursework, hands-on projects, and self-study.',
      categories: [
        {
          title: 'Programming & Web',
          icon: '💻',
          skills: ['Vue.js', 'JavaScript', 'HTML5 / CSS3', 'C#', 'ASP.NET Core', 'Java', 'Dart / Flutter']
        },
        {
          title: 'Database & Cloud Deployment',
          icon: '☁️',
          skills: ['Docker (Containerization)', 'AWS EC2 (Deployment)', 'SQL Server', 'PostgreSQL', 'Git / GitHub', 'Postman']
        },
        {
          title: 'Prompt Engineering & Agent Workflows',
          icon: '🧠',
          skills: ['Prompt Engineering & System Prompts', 'Agent Workflows (ReAct, Tool Calling)', 'AI-Assisted Development', 'Context & Memory Design', 'AI Vision (YOLO Basics)']
        },
        {
          title: 'Workplace Skills',
          icon: '🤝',
          skills: ['Team Collaboration', 'SDLC Process', 'Progress Tracking', 'Fast Learning & Adaptability']
        }
      ]
    },
    projects: {
      badge: '02 — Projects',
      title: 'Academic & Personal Projects',
      subtitle: 'Practical applications that helped me understand real-world development workflows and problem-solving.',
      list: [
        {
          id: 1,
          title: 'MoVan – Student Moving Platform',
          badge: 'Upcoming Capstone (Architecture Planning)',
          category: 'Upcoming Capstone',
          desc: 'A 5-member capstone graduation project designing a student moving platform. The project has not been implemented yet and is currently in the architectural planning phase: backend is oriented towards .NET (ASP.NET Core Web API), frontend considering Blazor or Next.js, alongside AI Vision (YOLO) research to identify room items and recommend suitable vehicle sizes.',
          role: 'Team Member (Architecture Planning & AI Module)',
          tech: ['.NET Backend (Planned)', 'Blazor / Next.js (Planned)', 'AI Vision (YOLO)', 'System Design'],
          linkText: null,
          linkUrl: null
        },
        {
          id: 2,
          title: 'Mộc Xinh – Eco Crafts Landing Page',
          badge: 'Live Production Web',
          category: 'Solo Projects',
          desc: 'Official landing page showcasing eco-friendly handcrafted paper products from agricultural by-products and community workshop initiatives for the Mộc Xinh project. Designed and built with Next.js and Tailwind CSS with a strong focus on responsive UX, page speed, and SEO.',
          role: 'Web Developer (Frontend / Landing Page)',
          tech: ['Next.js', 'React', 'Tailwind CSS', 'Responsive UI', 'SEO'],
          githubUrl: 'https://github.com/Trunguyen104/mocxinh-project',
          githubText: 'View Source ↗',
          liveUrl: 'https://www.mocxinh.id.vn/',
          liveText: 'Live Website ↗'
        },
        {
          id: 3,
          title: 'Meism – CaseShop',
          badge: 'Full-Stack Solo Project',
          category: 'Solo Projects',
          desc: 'An interactive e-commerce platform for customizing and ordering personalized phone cases in real time. Built to modern .NET standards using ASP.NET Core & Razor (Components / Blazor), Entity Framework Core with PostgreSQL, Tailwind CSS, Cloudinary for asset storage, payOS payment integration, containerized via Docker and deployed on AWS EC2.',
          role: 'Solo Full-Stack .NET Developer',
          tech: ['.NET (C#)', 'Razor Components / Blazor', 'ASP.NET Core', 'EF Core / PostgreSQL', 'Tailwind CSS', 'Docker / AWS EC2'],
          githubUrl: 'https://github.com/Trunguyen104/CaseShop',
          githubText: 'View Source ↗',
          linkUrl: 'https://github.com/Trunguyen104/CaseShop'
        },
        {
          id: 4,
          title: 'Internship One Connect (IOC)',
          badge: 'Course Project (Team Lead)',
          category: 'Team Projects',
          desc: 'An internship management system connecting Students, Universities, and Enterprises. Served as Team Lead: task allocation, system workflow design, backend development with ASP.NET Core Web API, PostgreSQL database, and RESTful API integration for web frontend.',
          role: 'Team Lead & Full-Stack Contributor',
          tech: ['C#', 'ASP.NET Core Web API', 'PostgreSQL', 'RESTful API', 'Git'],
          githubUrl: 'https://github.com/Trunguyen104/Internship-OneConnect_IOC_v2.0_Frontend',
          githubText: 'View Source ↗',
          linkUrl: 'https://github.com/Trunguyen104/Internship-OneConnect_IOC_v2.0_Frontend'
        },
        {
          id: 5,
          title: 'JoyleeBook',
          badge: 'Microservices Team Project',
          category: 'Team Projects',
          desc: 'An online novel and comic reading platform designed with a .NET 8 Microservices architecture. Contributed to building responsive reader and management interfaces using Blazor (JoyleeBook.Public & Admin), optimizing reading workflows, and integrating API Gateway with backend services.',
          role: 'Team Member (Blazor Frontend & Backend APIs)',
          tech: ['.NET 8', 'Blazor Web', 'Microservices', 'ASP.NET Core Web API', 'PostgreSQL / SQL Server', 'Docker'],
          githubUrl: 'https://github.com/PhucPhucc/JoyleeBook-V3.0',
          githubText: 'View Source ↗',
          linkUrl: 'https://github.com/PhucPhucc/JoyleeBook-V3.0'
        }
      ]
    },
    experience: {
      badge: '03 — Activities & Growth',
      title: 'Practical Experience & Learning',
      subtitle: 'Real-world environments that helped me understand workplace collaboration and soft skills.',
      timeline: [
        {
          period: 'Jan 2026 – Apr 2026',
          title: 'Intern (Student Team Lead)',
          org: 'Rikkeisoft',
          desc: 'Assisted in coordinating tasks within the student intern group, tracked sprint progress, and adapted to professional company workflows.'
        },
        {
          period: '2024 – Present',
          title: 'Club Member',
          org: 'FCoder Club (FPTU Can Tho)',
          desc: 'Actively participated in regular club sessions with fellow programming peers to share resources and learn together.'
        },
        {
          period: 'Oct 2026',
          title: 'Event Coordinator',
          org: 'Mộc Xinh Project',
          desc: 'Helped organize an eco-friendly workshop crafting recycled paper products at FPT University Can Tho.'
        },
        {
          period: '2024 – 2026',
          title: 'University Competitions Participant',
          org: 'F-Hacker CTF, Auto Race, IT Consulting Challenge',
          desc: 'Proactively participated in autonomous vehicle racing, cybersecurity CTF, and IT consulting challenges to gain hands-on exposure and learn from other teams.'
        }
      ]
    },
    contact: {
      badge: '04 — Contact',
      heading: "Let's connect",
      sub: "If you have a suitable part-time opportunity or would like to discuss student projects, feel free to reach out!",
      btnEmail: 'Send Email',
      btnCopy: 'Copy Email',
      copied: '✓ Copied!',
      phone: 'Phone'
    },
    footer: {
      text: 'Nguyen Trung Nguyen. Crafted simply with Vue 3 & Vite.',
      top: 'Back to top ↑'
    }
  }
}
