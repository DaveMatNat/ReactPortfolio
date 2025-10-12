function ExperienceCard({ experience, index}) {

    return (
        <div key={index} className="flex flex-col gap-2 rounded-xl p-[1rem] border-[1px] border-slate-400 experience-card">
            <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-2xl font-semibold">{experience.title}</h3>
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