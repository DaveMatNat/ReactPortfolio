function WorkExperience() {
    const experiences = [
        {
            title: "Incoming Data Structures Teaching Assistant (Fall 2025)",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Fall 2025",
            bullets: [
            ],
        },
        {
            title: "IT Helpdesk Technician",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Aug 2025 – Present",
            bullets: [
                "Solved 100+ IT support cases daily, solving software, hardware, and account-related issues for students, faculty, and staff.",
                "Troubleshot and resolved WiFi connectivity problems across campus devices.",
                "Diagnosed and repaired computer hardware issues, including desktops, laptops, and peripheral devices.",
                "Delivered clear and patient technical support to a diverse user base, ensuring quick resolution and minimal downtime.",
            ],
        },
        {
            title: "University Orientation Advisor",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Aug 2025",
            bullets: [
                "Led orientation efforts for 152+ incoming international students, providing assertive yet empathetic guidance through cultural, academic, and logistical transitions.",
                "Facilitated interactive sessions on visa regulations, campus resources, academic expectations, and cultural adjustment with clarity and confidence.",
                "Served as a trusted mentor and consistent point of contact, supporting students with patience and care while connecting them to campus services when needed.",
                "Independently guided a cohort of 40 first-year students during Main Orientation, ensuring each student felt welcomed, supported, and empowered to thrive.",
                "Planned and led community-building activities that fostered belonging, while demonstrating empathy, adaptability, and strong cross-cultural communication skills.",
            ],
        },
        {
            title: "Research Engineer & Assistant",
            company: "Cobotiq / HIVE Lab, University of Richmond",
            location: "Richmond, VA",
            date: "May 2025 – Present",
            bullets: [
                "Troubleshot critical collision issues in commercial cleaning robots caused by environmental obstacles.",
                "Generated a multi-sensor dataset of 15+ collision scenarios by recording ROS bag files during impact tests.",
                "Developed Python-based ROS2 systems for HIVEBot mobile robots using real-time positioning and LiDAR data.",
                "Researched privacy-preserving object detection using LiDAR and IMU as camera alternatives for sensitive offices.",
                "Implemented ROS2-based motion planning and service-based control for autonomous mobile robots.",
                "Optimized LiDAR and odometry pipelines to reduce robot collision rates by 30%.",
            ],
        },
        {
            title: "Technical Lead",
            company: "Academic Ambassadors Club",
            location: "Chiang Mai, Thailand",
            date: "2022",
            bullets: [
                "Led a team of 4 in organizing STEM and Social Studies events for 200+ students.",
                "Produced event media using Notion and Google Workspace, achieving 2,000+ online views.",
            ],
        },
    ];

    return (
        <section
            id="work-experience"
            className="bg-white text-black px-8 py-16 sm:py-20 md:py-24"
        >
            <div className="max-w-[1000px] mx-auto flex flex-col gap-[1rem]">
                <p className="tag rank rounded-full px-4 py-2 text-center mx-auto">
                    A Productive Journey
                </p>
                <h2 className="text-5xl sm:text-6xl md:text-7xl pt-4 mx-auto font text-center">
                    Work Experience
                </h2>
                <p className="text-slate-500 mb-8 mx-auto text-lg text-center">
                    Proven experiences. Real results!
                </p>

                {experiences.map((exp, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-baseline gap-x-3">
                            <h3 className="text-2xl font-semibold">{exp.title}</h3>
                            <span className="text-gray-700">{exp.company}</span>
                        </div>
                        <p className="italic text-gray-600">
                            {exp.location} • {exp.date}
                        </p>
                        <ul className="list-disc ml-2 text-base sm:text-lg leading-relaxed ">
                            {exp.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;