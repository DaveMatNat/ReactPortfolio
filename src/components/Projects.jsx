import ProjectCard from './ProjectCard';

function Projects() {
    const categories = [
        {
            title: "AI & Emerging Tech",
            description: "Exploring the frontier of intelligent systems, computer vision, and generative models.",
            projects: [
                {
                    name: "Spider-Bot",
                    link: "https://github.com/dgaray01/SierraAI",
                    app: "",
                    owner: "dgaray01",
                    repo: "SierraAI",
                    description:
                        "Discord bot for UofR freshman server — uses RAG with Gemini API and scraped campus data to answer student questions.",
                    tags: ["RAG", "Discord Bot", "Generative AI"],
                    image: "/projects_img/spiderbot.gif"
                },
                {
                    name: "Brain Tumor Detection",
                    link: "https://github.com/DaveMatNat/yolo-brain-tumor",
                    app: "",
                    owner: "DaveMatNat",
                    repo: "yolo-brain-tumor",
                    description:
                        "YOLO-based object detection pipeline for detecting brain tumors in MRI scans with high precision.",
                    tags: ["YOLO", "Computer Vision", "Medical Imaging"],
                    image: "/projects_img/braintumor.png"
                },
                {
                    name: "COVID-19 CNN",
                    link: "https://github.com/DaveMatNat/Covid-19-CNN",
                    app: "",
                    owner: "DaveMatNat",
                    repo: "Covid-19-CNN",
                    description:
                        "CNN model to classify COVID-19 from chest X-rays. Includes preprocessing, training, and evaluation pipeline.",
                    tags: ["Deep Learning", "CNN", "Medical Imaging"],
                    image: "/projects_img/covid.jpeg"
                }
            ]
        },
        {
            title: "Web Development",
            description: "Full-stack apps, interactive frontend tools, and modern web experiences.",
            projects: [
                {
                    name: "WhatsCrackin!",
                    link: "https://github.com/DaveMatNat/startup",
                    app: "https://whatscrackin.net/",
                    owner: "DaveMatNat",
                    repo: "startup",
                    description:
                        "Find activities around your area! A community-driven platform to discover and share local events.",
                    tags: ["Full Stack", "Startup", "W.I.P"],
                    image: "/projects_img/whatscrackin.gif"
                },
                {
                    name: "Blink Scheduling",
                    link: "https://github.com/DaveMatNat/blink-front-end",
                    app: "https://blink-front-end.vercel.app/",
                    owner: "DaveMatNat",
                    repo: "blink-front-end",
                    description:
                        "Course scheduling assistant for UR students to generate optimized timetables. Built with Next.js.",
                    tags: ["React", "Next.js", "Scheduling"],
                    image: "/projects_img/blink.jpeg"
                },
                {
                    name: "Outfit Design Gen",
                    link: "https://github.com/DaveMatNat/outfit-design",
                    app: "https://uroutfit.netlify.app/",
                    owner: "DaveMatNat",
                    repo: "outfit-design",
                    description:
                        "React-based avatar generator letting users mix and match clothing and accessories from a local asset library.",
                    tags: ["React", "Frontend", "Design Tool"],
                    image: "/projects_img/outfit.png"
                },
                {
                    name: "Todo App",
                    link: "https://github.com/DaveMatNat/TodoApp",
                    app: "https://job2do.netlify.app/",
                    owner: "DaveMatNat",
                    repo: "TodoApp",
                    description:
                        "A clean and minimal task manager built with React for tracking daily todos and goals.",
                    tags: ["React", "JavaScript", "Productivity"],
                    image: "/projects_img/todo.png"
                },
                {
                    name: "Pokédex",
                    link: "https://github.com/DaveMatNat/pokedex",
                    app: "https://pokekop.netlify.app/",
                    owner: "DaveMatNat",
                    repo: "pokedex",
                    description:
                        "Web app fetching data from PokéAPI with dynamic search, filtering, and detailed stat displays.",
                    tags: ["JavaScript", "API", "Frontend"],
                    image: "/projects_img/pokedex.png"
                }
            ]
        },
        {
            title: "Mobile & Utilities",
            description: "Native applications and solving specific problems through code.",
            projects: [
                {
                    name: "UnWasteIt",
                    link: "https://github.com/DaveMatNat/UnWasteIt",
                    app: "",
                    owner: "DaveMatNat",
                    repo: "UnWasteIt",
                    description:
                        "iOS app to reduce food waste by tracking items and suggesting ways to use them relative to expiry. Swift Student Challenge Winner.",
                    tags: ["Swift", "Mobile App", "Sustainability"],
                    image: "/projects_img/unwasteit.jpeg"
                }
            ]
        }
    ];

    return (
        <div className='bg-slate-950 text-white'>
            <section id="projects" className="flex flex-col gap-16 px-8 py-16 sm:py-20 md:py-24 max-w-[1200px] w-full mx-auto">
                <div className="flex flex-col gap-4 text-center">
                    <p className="tag good max-w-fit px-4 py-2 rounded-full mx-auto font-mono text-sm tracking-wide">
                        Project Archives
                    </p>
                    <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                        Selected Works
                    </h3>
                    <p className="py-2 text-slate-400 max-w-2xl mx-auto text-lg">
                        A collection of tools, experiments, and products built to solve problems. <br />
                        More code can be found on my <a href="https://github.com/DaveMatNat" target="_blank" className="text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-emerald-500/30 underline-offset-4">GitHub</a>.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {categories.map((category, catIndex) => (
                        <div key={catIndex} className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2 border-l-4 border-emerald-500 pl-6">
                                <h4 className="text-3xl md:text-4xl font-bold text-white">
                                    {category.title}
                                </h4>
                                <p className="text-slate-400 text-lg">
                                    {category.description}
                                </p>
                            </div>
                            
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {category.projects.map((project, projectIndex) => (
                                    <ProjectCard key={projectIndex} project={project} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Projects;
