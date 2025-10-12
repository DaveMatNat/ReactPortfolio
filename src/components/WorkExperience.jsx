import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
    const experiences = [
        {
            title: "Incoming Data Structures Teaching Assistant (Fall 2025)",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Aug 2025 – Present",
            bullets: [
                "Assisted in grading homework and project assignments for Grade 10 students in the Data Structures class. ",
                "Provided constructive feedback and insightful critiques to enhance student understanding and performance.",
                "Collaborated closely with Dr. Yucong Jiang to prepare students for more advanced courses like Algorithms",
                "Developed strong communication and analytical skills through regular interactions with students and faculty."
            ],
        },
        {
            title: "IT Helpdesk Technician",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Aug 2025 – Present",
            bullets: [
                "Resolved over 300+ technical support requests weekly, minimizing downtime for students, staff, and faculty.",
                "Provided user-focused support, simplifying complex technical issues for non-technical users.",
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
                "Guided 150+ international students through cultural, academic, and transitions with confident, empathetic leadership.",
                "Directed a cohort of 40 first-years during Main Orientation, ensuring every student felt welcomed and supported.",
                "Designed and led community-building events that fostered belonging and cross-cultural connection.",
                "Mentored students with patience and consistency, connecting them to key campus resources.",
                "Led sessions on visas, campus life, and cultural adjustment with clarity and authority.",
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
                <div className="flex flex-col gap-5">
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;