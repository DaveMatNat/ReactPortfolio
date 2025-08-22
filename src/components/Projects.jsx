import ProjectCard from './ProjectCard'

function Projects() {
    const projects = [
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
                "A Pokédex web app using the PokéAPI to fetch and display Pokémon data with dynamic search and filtering.",
            tags: ["JavaScript", "API", "Frontend"],
            image: "/projects_img/pokedex.png"
        },
        {
            name: "Outfit Design Generator",
            link: "https://github.com/DaveMatNat/outfit-design",
            app: "https://uroutfit.netlify.app/",
            owner: "DaveMatNat",
            repo: "outfit-design",
            description:
                "React-based avatar and outfit generator that lets users mix and match clothing and accessories from a local asset library.",
            tags: ["React", "Frontend", "Design Tool"],
            image: "/projects_img/outfit.png"
        },
        // {
        //     name: "ROS2 Ping Pong Robot",
        //     link: "https://github.com/DaveMatNat/ros2-pingpong",
        //     owner: "DaveMatNat",
        //     repo: "ros2-pingpong",
        //     description:
        //         "ROS2-based robotics project simulating a ping pong ball tracking and hitting mechanism.",
        //     tags: ["ROS2", "Robotics", "Computer Vision", "Simulation"],
        //     image: "/projects_img/"
        // },
        {
            name: "Blink",
            link: "https://github.com/DaveMatNat/blink-front-end",
            app: "https://blink-front-end.vercel.app/",
            owner: "DaveMatNat",
            repo: "blink-front-end",
            description:
                "Course scheduling assistant that helps students at the University of Richmond generate course calendar and optimized timetables. Built with React and Next.js",
            tags: ["React", "Next.js", "Scheduling"],
            image: "/projects_img/blink.jpeg"
        },
        {
            name: "Brain Tumor Detection",
            link: "https://github.com/DaveMatNat/yolo-brain-tumor",
            app: "",
            owner: "DaveMatNat",
            repo: "yolo-brain-tumor",
            description:
                "YOLO-based object detection pipeline for detecting brain tumors in MRI scans.",
            tags: ["YOLO", "Computer Vision", "Medical Imaging"],
            image: "/projects_img/braintumor.png"
        },
        {
            name: "COVID-19 Detection using CNN",
            link: "https://github.com/DaveMatNat/Covid-19-CNN",
            app: "",
            owner: "DaveMatNat",
            repo: "Covid-19-CNN",
            description:
                "CNN model to classify COVID-19 from chest X-rays. Includes preprocessing, model training, and evaluation pipeline.",
            tags: ["Deep Learning", "CNN", "Medical Imaging"],
            image: "/projects_img/covid.jpeg"
        },
        // {
        //     name: "Breast Cancer Classifier",
        //     link: "https://github.com/DaveMatNat/breast-cancer-ml",
        //     owner: "DaveMatNat",
        //     repo: "breast-cancer-ml",
        //     description:
        //         "Machine learning pipeline for early breast cancer detection using structured dataset analysis. Accuracy: 94%",
        //     tags: ["Machine Learning", "Healthcare", "Data Analysis"],
        //     image: ""
        // },
        {
            name: "UnWasteIt",
            link: "https://github.com/DaveMatNat/UnWasteIt",
            app: "",
            owner: "DaveMatNat",
            repo: "UnWasteIt",
            description:
                "Mobile app to reduce food waste by tracking items and suggesting ways to use them before they expire. Winner of Apple's Swift Student Challenge.",
            tags: ["Swift", "Mobile App", "Sustainability"],
            image: "/projects_img/unwasteit.jpeg"
        },
        {
            name: "SpiderBot",
            link: "https://github.com/dgaray01/SierraAI",
            app: "",
            owner: "dgaray01",
            repo: "SierraAI",
            description:
                "Discord bot for the University of Richmond freshman server — uses RAG with Gemini API and scraped campus data to answer student questions.",
            tags: ["RAG", "Discord Bot", "Generative AI"],
            image: "/projects_img/spiderbot.gif"
        },
    ];
    return (
        <div className='bg-slate-950'>
            <section id="projects" className="flex flex-col gap-8 px-8 py-16 sm:py-20 md:py-24 max-w-[1200px] w-full mx-auto">
                <p className="tag good max-w-fit px-4 py-2 rounded-full mx-auto text-center">
                    Featured
                </p>
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-5xl sm:text-6xl md:text-7xl mx-auto text-center">Projects</h3>
                    <p className="py-2 mx-auto text-center text-slate-400">More archives can be found on my
                        <a href="https://github.com/DaveMatNat" target="_blank" className="clickable"> GitHub
                        </a>
                    </p>

                </div>
                <section className="grid gap-[1rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, projectIndex) => {
                        return (
                            <ProjectCard key={projectIndex} project={project} />
                        )
                    })}
                </section>
            </section>
        </div>
    )
}

export default Projects;