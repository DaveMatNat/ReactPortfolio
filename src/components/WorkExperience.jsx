import React, { useState } from 'react';

const ExperienceItem = ({ experience, index, isLast }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative flex gap-6 md:gap-10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
             {/* Timeline Line */}
            <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full border-2 z-10 transition-colors duration-300 ${
                    isHovered ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-white border-slate-300'
                }`} />
                {!isLast && (
                    <div className="w-0.5 h-full bg-slate-200 -mt-2 mb-2 group-hover:bg-slate-300 transition-colors" />
                )}
            </div>

            {/* Content Card */}
            <div className={`flex-1 pb-12 transition-all duration-300 ${isHovered ? '-translate-x-1' : ''}`}>
                <div className={`
                    bg-white rounded-2xl p-6 border border-slate-200
                    transition-all duration-300 relative overflow-hidden
                    ${isHovered ? 'border-emerald-500/50 shadow-lg' : 'hover:border-slate-300 shadow-sm'}
                `}>
                    {/* Decorative Hover Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 relative z-10">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                {experience.icons && experience.icons[0] && (
                                    <img src={experience.icons[0]} alt="" className="w-6 h-6 object-contain opacity-80" />
                                )}
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                                    {experience.title}
                                </h3>
                            </div>
                            <p className="text-emerald-600 font-mono text-sm md:text-base font-medium">
                                {experience.company}
                            </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end text-slate-500 text-xs md:text-sm font-mono whitespace-nowrap">
                            <span className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                                {experience.date}
                            </span>
                            <span className="mt-1 opacity-75 mr-1">{experience.location}</span>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-6 relative z-10">
                        {experience.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
                                <span className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 transition-colors ${isHovered ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Tech Tags */}
                    {experience.tech && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 relative z-10">
                            {experience.tech.map((tag, i) => (
                                <span 
                                    key={i} 
                                    className="text-xs font-mono px-2 py-1 rounded bg-slate-50 text-slate-500 border border-slate-200 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-colors cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

function WorkExperience() {
    const experiences = [
        {
            title: "Data Structures TA",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Aug 2025 – Present",
            bullets: [
                "Assisted in grading homework and project assignments for data structures curriculum.",
                "Provided constructive feedback to enhance student understanding of core concepts.",
                "Collaborated with faculty to prepare students for advanced Algorithm courses.",
                "Mentored students on debugging, code optimization, and time complexity analysis."
            ],
            icons: ["/icons/richmond.svg"],
            tech: ["Java", "Data Structures", "Algorithms", "Mentorship", "Debugging"]
        },
        {
            title: "IT Helpdesk Technician",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Aug 2025 – Present",
            bullets: [
                "Resolved 300+ technical support requests weekly, ensuring minimal downtime for campus.",
                "Diagnosed and repaired hardware issues across desktops, laptops, and peripherals.",
                "Simplified complex technical explanations for non-technical faculty and students.",
                "Managed ticketing systems and prioritized critical infrastructure incidents."
            ],
            icons: ["/icons/richmond.svg"],
            tech: ["Hardware Support", "User Training", "ServiceNow", "Troubleshooting", "MacOS/Windows"]
        },
        {
            title: "University Orientation Advisor",
            company: "University of Richmond",
            location: "Richmond, VA",
            date: "Aug 2025",
            bullets: [
                "Guided 150+ international students through cultural and academic transitions.",
                "Directed a cohort of 40 first-years during Main Orientation, fostering community.",
                "Designed and led inclusive community-building events for diverse student groups.",
                "Facilitated workshops on visa compliance, campus integration, and student resources."
            ],
            icons: ["/icons/richmond.svg"],
            tech: ["Leadership", "Public Speaking", "Event Management", "Cross-cultural Comm"]
        },
        {
            title: "Research Engineer & Assistant",
            company: "Cobotiq / HIVE Lab, UR",
            location: "Richmond, VA",
            date: "May 2025 – July 2025",
            bullets: [
                "Troubleshot critical collision issues in commercial cleaning robots caused by environmental obstacles.",
                "Generated a multi-sensor dataset of 15+ collision scenarios by recording ROS bag files.",
                "Developed Python-based ROS2 systems for HIVEBot mobile robots using real-time positioning.",
                "Researched privacy-preserving detection using LiDAR/IMU as camera alternatives.",
                "Optimized LiDAR and odometry pipelines to reduce robot collision rates by 30%."
            ],
            icons: ["/icons/cobotiq.svg"],
            tech: ["ROS 2", "Python", "LiDAR", "Robotics", "Computer Vision", "Linux"]
        },
        // {
        //     title: "Technical Lead",
        //     company: "Academic Ambassadors Club",
        //     location: "Chiang Mai, Thailand",
        //     date: "2022",
        //     bullets: [
        //         "Led a team of 4 in organizing STEM and Social Studies events for 200+ students.",
        //         "Produced high-engagement media achieving 2,000+ online views."
        //     ],
        //     icons: [],
        //     tech: ["Project Management", "Team Leadership", "Notion", "Social Media"]
        // }
    ];

    return (
        <section
            id="work-experience"
            className="bg-white text-slate-900 py-16 sm:py-24 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-emerald-600 font-mono text-sm tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Career History
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 my-5">
                        Experience Log
                    </h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        A timeline of missions, roles, and technical achievements unlocked along the journey.
                    </p>
                </div>

                <div className="flex flex-col">
                    {experiences.map((experience, index) => (
                        <ExperienceItem 
                            key={index} 
                            experience={experience} 
                            index={index} 
                            isLast={index === experiences.length - 1} 
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WorkExperience;
