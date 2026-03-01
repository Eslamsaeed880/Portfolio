const DATA = {
    about: {
        description: [
            "I am a backend-focused software engineer with strong interest in system design, scalability, and performance optimization.",
            "I build production-ready applications with clean architecture principles, proper testing, CI/CD pipelines, Dockerized environments, and performance considerations from day one.",
            "Beyond coding, I focus on designing systems — implementing caching, background jobs, load testing, and recommendation systems — always thinking about how software behaves at scale."
        ],
        profession: [
            {
                title: "Backend Engineer",
                description: "I design and build scalable APIs and distributed systems using clean architecture, caching strategies, queues, and performance optimization techniques."
            },
            {
                title: "System Design Enthusiast",
                description: "I enjoy breaking down real-world problems into scalable system architectures, working with event driven systems, databases, load balancing, and reliability patterns."
            },
            {
                title: "Full-Stack Developer",
                description: "I develop complete web applications from frontend interfaces to backend logic, ensuring performance, SEO, and maintainability across the entire stack."
            }
        ],
        email: "eslamsaeed298@gmail.com",
        phone: "+20 1101109666",
        location: "Cairo, Egypt",
    },
    skills: {
        languages: [
            { alt: "JavaScript", src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
            { alt: "TypeScript", src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
            { alt: "Java", src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
            { alt: "Python", src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
            { alt: "HTML5", src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
            { alt: "CSS3", src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
            { alt: "C", src: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" },
            { alt: "C++", src: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
            { alt: "C#", src: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" },
            { alt: "PHP", src: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" },
        ],
        frontend: [
            { alt: "React", src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
            { alt: "Bootstrap", src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" },
            { alt: "SASS", src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" },
            { alt: "TailwindCSS", src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        ],
        backend: [
            { alt: "NodeJS", src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
            { alt: "Express.js", src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
            { alt: "GraphQL", src: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
            { alt: "Django", src: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" },
            { alt: "Spring", src: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" },
            { alt: "Spring Boot", src: "https://img.shields.io/badge/spring%20boot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white" },
        ],
        databases: [
            { alt: "MySQL", src: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
            { alt: "MongoDB", src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
            { alt: "Microsoft SQL Server", src: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" },
            { alt: "SQLite", src: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" },
        ],
        tools: [
            { alt: "Git", src: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" },
            { alt: "GitHub", src: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
            { alt: "Figma", src: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" },
            { alt: "Trello", src: "https://img.shields.io/badge/trello-%23026AA7.svg?style=for-the-badge&logo=trello&logoColor=white" },
            { alt: "Docker", src: "https://img.shields.io/badge/docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" },
            { alt: "Docker Compose", src: "https://img.shields.io/badge/docker%20compose-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" },
            { alt: "Redis", src: "https://img.shields.io/badge/redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white" },
            { alt: "BullMQ", src: "https://img.shields.io/badge/BullMQ-%23FF0000.svg?style=for-the-badge&logo=redis&logoColor=white" },
            { alt: "Jest", src: "https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white" },
            { alt: "Linux", src: "https://img.shields.io/badge/linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black" },
            { alt: "Swagger", src: "https://img.shields.io/badge/swagger-%2385EA2C.svg?style=for-the-badge&logo=swagger&logoColor=white" },

        ],
        systemDesign: [
            { alt: "Event-Driven", src: "https://img.shields.io/badge/Event--Driven-%23FF5733.svg?style=for-the-badge&logo=event-driven&logoColor=white" },
            { alt: "Caching", src: "https://img.shields.io/badge/Caching-%23FF5733.svg?style=for-the-badge&logo=cache&logoColor=white" },
            { alt: "Load Balancing", src: "https://img.shields.io/badge/Load%20Balancing-%23FF5733.svg?style=for-the-badge&logo=load-balancing&logoColor=white" },
            { alt: "Message Queues", src: "https://img.shields.io/badge/Message%20Queues-%23FF5733.svg?style=for-the-badge&logo=message-queue&logoColor=white" },
            { alt: "CI/CD", src: "https://img.shields.io/badge/CI%2FCD-%23FF5733.svg?style=for-the-badge&logo=ci%2Fcd&logoColor=white" },
            { alt: "Workers & Queues", src: "https://img.shields.io/badge/Workers%20%26%20Queues-%23FF5733.svg?style=for-the-badge&logo=workers%20%26%20queues&logoColor=white" },
            { alt: "Scalability", src: "https://img.shields.io/badge/Scalability-%23FF5733.svg?style=for-the-badge&logo=scalability&logoColor=white" },
            { alt: "Load Testing", src: "https://img.shields.io/badge/Load%20Testing-%23FF5733.svg?style=for-the-badge&logo=load-testing&logoColor=white" },
        ]
    },
    projects: [
        {
            title: "A Social Media App",
            description: "A scalable backend App with nodejs, express, Redis, BullMQ, for social media website",
            previewLink: false,
            githubLink: "https://github.com/Eslamsaeed880/Social-Media-App",
            photo: "https://github.com/Eslamsaeed880/Social-Media-App/blob/main/docs/main.png?raw=true"
        },
        {
            title: "E-Commerce API",
            description: "A backend App with nodejs and express for ecommerce website",
            previewLink: false,
            githubLink: "https://github.com/Eslamsaeed880/ecommerce",
            photo: "https://github.com/Eslamsaeed880/ecommerce/raw/main/images/image2.png"
        },
        {
            title: "Fitness API",
            description: "A backend App with nodejs and express for fitness website",
            previewLink: false,
            githubLink: "https://github.com/Eslamsaeed880/Fitness-API",
            photo: "https://github.com/Eslamsaeed880/Fitness-API/blob/main/images/Fitness.png?raw=true"
        },
        {
            title: "Job Finder",
            description: "A web application for finding job opportunities.",
            githubLink: "https://github.com/Momen-Abdelkader/Job-Finder",
            previewLink: false,
            photo: "https://github.com/Momen-Abdelkader/Job-Finder/blob/main/frontend/assets/JobSearch.png?raw=true"
        }
    ]
};

export default DATA;