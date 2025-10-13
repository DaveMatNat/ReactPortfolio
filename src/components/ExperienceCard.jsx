function ExperienceCard({ experience, index }) {

    return (
        <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-[0.3rem]">
            <div className="flex flex-wrap items-end-safe gap-x-3">
                <div className="flex flex-wrap items-center gap-x-3">
                    {experience.icons && experience.icons.map((icon, iconIndex) => (
                        <img
                            key={iconIndex}
                            src={icon}
                            alt={`${experience.company} icon`}
                            className="w-5 h-5"
                        />
                    ))}
                    <h3 className="text-2xl font-semibold">{experience.title}</h3>
                </div>
                <span className="text-gray-700">{experience.company}</span>
            </div>
            <p className="italic text-gray-600">
                {experience.location} • {experience.date}
            </p>
            <ul className="list-disc ml-2 text-base sm:text-lg leading-relaxed ">
                {experience.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard;