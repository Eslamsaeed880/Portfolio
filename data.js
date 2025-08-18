const DATA = {
    about: {
        description: "I am a passionate web developer with experience in building modern web applications.",
        email: "eslamsaeed298@gmail.com",
        phone: "+20 01101109666",
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
        ],
        frontend: [
            { alt: "React", src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
            { alt: "Next JS", src: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" },
            { alt: "Bootstrap", src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" },
            { alt: "Redux", src: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" },
            { alt: "SASS", src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" },
            { alt: "TailwindCSS", src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        ],
        backend: [
            { alt: "NodeJS", src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
            { alt: "Express.js", src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
            { alt: "GraphQL", src: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
            { alt: "Django", src: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" },
            { alt: "Nodemon", src: "https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" },
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
            { alt: "NPM", src: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" },
            { alt: "Trello", src: "https://img.shields.io/badge/trello-%23026AA7.svg?style=for-the-badge&logo=trello&logoColor=white" },
        ]
    },
    projects: [
        {
            title: "Job Finder",
            description: "A web application for finding job opportunities.",
            githubLink: "https://github.com/Momen-Abdelkader/Job-Finder",
            previewLink: false,
            photo: "https://github.com/Momen-Abdelkader/Job-Finder/blob/main/assets/project.png?raw=true"
        },
        {
            title: "Management App",
            description: "A web application for managing tasks and projects.",
            githubLink: "https://github.com/Eslamsaeed880/Management-App?tab=readme-ov-file",
            previewLink: "https://management-app-ky5q.vercel.app/",
            photo: "https://github.com/Eslamsaeed880/Management-App/blob/main/public/image.png?raw=true"
        },
        {
            title: "Personal Portfolio",
            description: "A personal portfolio website to showcase my work.",
            githubLink: "https://github.com/Eslamsaeed880/Portfolio?tab=readme-ov-file",
            previewLink: false,
            photo: "./src/assets/portfolio.png"
        },
        {
            title: "Timer Challenge",
            description: "A fully functional timer application built with React.",
            githubLink: "https://github.com/Eslamsaeed880/timer-challenge",
            previewLink: "https://timer-challenge-beige.vercel.app/",
            photo: "https://github.com/Eslamsaeed880/timer-challenge/blob/main/src/assets/image.png?raw=true"
        }
    ]
}

export const ICONS = {
    email: '../../public/email.svg',
    phone: '../../public/phone.svg',
    location: '../../public/location.svg'
}

export default DATA;