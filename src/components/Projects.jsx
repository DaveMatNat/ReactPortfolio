import ProjectCard from './ProjectCard'

function Projects() {
    const projects = [
        {
            name: "Todo App",
            link: "https://github.com/DaveMatNat/TodoApp",
            owner: "DaveMatNat",
            repo: "TodoApp",
            description:
                "A clean and minimal task manager built with React for tracking daily todos and goals.",
            tags: ["React", "JavaScript", "Productivity"],
            image: ""
        },
        {
            name: "Pokédex",
            link: "https://github.com/DaveMatNat/pokedex",
            owner: "DaveMatNat",
            repo: "pokedex",
            description:
                "A Pokédex web app using the PokéAPI to fetch and display Pokémon data with dynamic search and filtering.",
            tags: ["JavaScript", "API", "Frontend"],
            image: ""
        },
        {
            name: "Outfit Design Generator",
            link: "https://github.com/DaveMatNat/outfit-design",
            owner: "DaveMatNat",
            repo: "outfit-design",
            description:
                "React-based avatar and outfit generator that lets users mix and match clothing and accessories from a local asset library.",
            tags: ["React", "Frontend", "Design Tool"],
            image: "https://private-user-images.githubusercontent.com/107134818/473813027-764593c4-3fba-4544-a83b-38d93eba1408.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU0MDI4MzIsIm5iZiI6MTc1NTQwMjUzMiwicGF0aCI6Ii8xMDcxMzQ4MTgvNDczODEzMDI3LTc2NDU5M2M0LTNmYmEtNDU0NC1hODNiLTM4ZDkzZWJhMTQwOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxN1QwMzQ4NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YjZkYzZiNjlmMzcyMDhjZjcxNjE5ZGYyMWY5MTRkZmFjOGYxODgzNzFkOTAwMGU0Yjk3ZjlkMjA3ZmFiMDUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MCCopQkaINIEQLtt6vD_QabvhwTCxC2873BYW74SmlU"
        },
        {
            name: "ROS2 Ping Pong Robot",
            link: "https://github.com/DaveMatNat/ros2-pingpong",
            owner: "DaveMatNat",
            repo: "ros2-pingpong",
            description:
                "ROS2-based robotics project simulating a ping pong ball tracking and hitting mechanism.",
            tags: ["ROS2", "Robotics", "Computer Vision", "Simulation"],
            image: ""
        },
        {
            name: "YOLO Brain Tumor Detection",
            link: "https://github.com/DaveMatNat/yolo-brain-tumor",
            owner: "DaveMatNat",
            repo: "yolo-brain-tumor",
            description:
                "YOLO-based object detection pipeline for detecting brain tumors in MRI scans.",
            tags: ["YOLO", "Computer Vision", "Medical Imaging"],
            image: "https://private-user-images.githubusercontent.com/107134818/400289567-ddd4b732-0e6b-49e9-9fb4-340111b13085.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU0MDM5NzksIm5iZiI6MTc1NTQwMzY3OSwicGF0aCI6Ii8xMDcxMzQ4MTgvNDAwMjg5NTY3LWRkZDRiNzMyLTBlNmItNDllOS05ZmI0LTM0MDExMWIxMzA4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxN1QwNDA3NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNDYzNGE2MjY3Y2E2MWUwYmM5YmZkZjVkYzcyMzA2MjZiNTU0NjgyYzcyYjRkYjg3YzdhZDNjZTVhNmVkZmNmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.1K13ZtVKMfhpb1lbVT1_yF5vdQkox7P-KC4eh7JSt4I"
        },
        {
            name: "COVID-19 Detection using CNN",
            link: "https://github.com/DaveMatNat/Covid-19-CNN",
            owner: "DaveMatNat",
            repo: "Covid-19-CNN",
            description:
                "CNN model to classify COVID-19 from chest X-rays. Includes preprocessing, model training, and evaluation pipeline.",
            tags: ["Deep Learning", "CNN", "Medical Imaging"],
            image: "https://private-user-images.githubusercontent.com/107134818/400180412-84b29b60-508e-4d51-ad6e-b8e180bf255f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU0MDQ1NDQsIm5iZiI6MTc1NTQwNDI0NCwicGF0aCI6Ii8xMDcxMzQ4MTgvNDAwMTgwNDEyLTg0YjI5YjYwLTUwOGUtNGQ1MS1hZDZlLWI4ZTE4MGJmMjU1Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxN1QwNDE3MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MzM1Mjc2YjIyOTM3OTA4ZjA5YTNhM2UzMGZmMmVlNWMyZjQ0ZDVkOTNhYjg1ZjExYTk2MzQ2YjFiNGFhNmFmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.575mfVjYsKKhkUU7_2fV6iCINJ_Pr8WQDGnJIN3t73I"
        },
        {
            name: "Breast Cancer Classifier",
            link: "https://github.com/DaveMatNat/breast-cancer-ml",
            owner: "DaveMatNat",
            repo: "breast-cancer-ml",
            description:
                "Machine learning pipeline for early breast cancer detection using structured dataset analysis. Accuracy: 94%",
            tags: ["Machine Learning", "Healthcare", "Data Analysis"],
            image: ""
        },
        {
            name: "UnWasteIt",
            link: "https://github.com/DaveMatNat/UnWasteIt",
            owner: "DaveMatNat",
            repo: "UnWasteIt",
            description:
                "Mobile app to reduce food waste by tracking items and suggesting ways to use them before they expire. Winner of Apple's Swift Student Challenge.",
            tags: ["Swift", "Mobile App", "Sustainability"],
            image: "https://private-user-images.githubusercontent.com/107134818/399587889-11ec3ae2-f3c2-421a-9dab-55a7826f69f7.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU0MDMzODksIm5iZiI6MTc1NTQwMzA4OSwicGF0aCI6Ii8xMDcxMzQ4MTgvMzk5NTg3ODg5LTExZWMzYWUyLWYzYzItNDIxYS05ZGFiLTU1YTc4MjZmNjlmNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxN1QwMzU4MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lOTM2ZDgzZWFhMDcyZGFhOTgyMzI3OWQ4ODZmOGVmNTg3M2Q1NmVhNTNmNDI1MzliY2FlZGJjMTY1NmVmYmFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RVJKu9V_gkBh-xx-MPQer9rEhFXL6NvxDppFyqYEj-Q"
        },
        {
            name: "SpiderBot",
            link: "https://github.com/dgaray01/SierraAI",
            owner: "dgaray01",
            repo: "SierraAI",
            description:
                "Discord bot for the University of Richmond freshman server — uses RAG with Gemini API and scraped campus data to answer student questions.",
            tags: ["RAG", "Discord Bot", "Generative AI", "Web Scraping"],
            image: "https://private-user-images.githubusercontent.com/107134818/452865141-f3adea8c-3170-4453-a2de-624d4b21f214.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTU0MDA3ODYsIm5iZiI6MTc1NTQwMDQ4NiwicGF0aCI6Ii8xMDcxMzQ4MTgvNDUyODY1MTQxLWYzYWRlYThjLTMxNzAtNDQ1My1hMmRlLTYyNGQ0YjIxZjIxNC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxN1QwMzE0NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YzIyMThmZGY5N2Y2ZTFjYWFjNzE5YWJkMTFjNTc3NTdmMWQ1NTU0ZTMyYzM2YzEyMTcxNzYwYzAxNGNkNmYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ymq2ryX1VETndvkzpQwuTd0GSrhMw5Xx_FY946-r_t8"
        },
    ];
    return (
        <section id="projects" className="flex flex-col gap-8 px-8 py-16 sm:py-20 md:py-24 max-w-[1200px] w-full mx-auto">
            <p className="tag good max-w-fit px-4 py-2 rounded-full mx-auto text-center">
                Stories of Success
            </p>
            <div className="flex flex-col gap-2">
                <h3 className="text-5xl sm:text-6xl md:text-7xl mx-auto text-center">Projects</h3>
                <p className="py-2 mx-auto text-center text-slate-500">More archives can be found on my
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
    )
}

export default Projects;