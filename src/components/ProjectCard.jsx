import { useEffect, useState } from 'react';
import Modal from "./Modal";

// Make project Card when clicked Pop up Modal
function ProjectCard({ project }) {
    // States
    const [pop, setPop] = useState(false);
    // Save project to localStorage cache
    const saveToCache = (projectData) => {
        const cache = JSON.parse(localStorage.getItem('davidProjectCache') || '[]');
        const existingIndex = cache.findIndex(item => item.repo === projectData.repo);

        const projectWithTimestamp = {
            ...projectData,
            cachedAt: Date.now()
        };

        if (existingIndex !== -1) {
            cache[existingIndex] = projectWithTimestamp;
        } else {
            cache.push(projectWithTimestamp);
        }

        localStorage.setItem('davidProjectCache', JSON.stringify(cache));
    };

    // Load project from localStorage cache
    const loadFromCache = (repoName) => {
        const cache = JSON.parse(localStorage.getItem('projectCardsCache') || '[]');
        return cache.find(item => item.repo === repoName) || null;
    };

    // Get cached image if available
    const cachedImage = loadFromCache(project.repo)?.image || project.image;

    useEffect(() => {
        // Save current project to cache when component mounts
        saveToCache(project);
    }, [project]);

    return (
        <div className="project-card bg-gradient-to-br from-slate-100 to-white">
            {/* Modal */}
            {pop && (
                <Modal handleCloseModal={() => setPop(false)}>
                    {/* Modal Name */}
                    <div className='pt-[1rem] pl-[1rem]'>
                        {/* <h6 className='text-xl'>Name</h6> */}
                        <a href={project.link} target='_blank'>
                            <span className="text-4xl text-slate-500 hover:text-black transition-all duration-300 ease-in-out after:content-['_↗']">{project.name}</span>
                        </a>
                    </div>

                    {/* Modal Image */}
                    <div className="w-auto max-w-xl h-full mx-auto my-4 rounded-xl shadow-md shadow-slate-500 bg-gray-100 flex items-center justify-center">
                        <img
                            src={cachedImage}
                            alt={project.name + ' preview'}
                            className="object-cover object-center w-auto max-h-[300px] lg:max-h-[400px] rounded-xl"
                        />
                    </div>
                    {/* Modal Tags */}
                    <div className="stags text-xl">
                        {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="stag mx-1 my-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                    {/* Modal Description */}
                    <div>
                        {/* <h6>Description</h6> */}
                        <p className='text-lg'>{project.description}</p>
                    </div>
                </Modal>
            )}
            {/* ProjectCard */}
            <div className="project-info" onClick={() => setPop(true)} style={{ cursor: 'pointer' }}>
                {/* <!-- GitHub Thumbnail --> */}
                <div>
                    <div className="aspect-[4/3] w-full max-w-xs mx-auto bg-transparent rounded-2xl overflow-hidden flex justify-center items-center">
                        <img
                            src={cachedImage}
                            alt={`${project.name} Thumbnail`}
                            className="object-cover object-center w-full h-full rounded-2xl aspect-[4/3]"
                        />
                    </div>
                </div>
                {/* Name */}
                <div className="py-2">
                    <b className='text-xl'>{project.name}</b>
                </div>
                {/* <!-- Tags --> */}
                <div className="stags">
                    {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="stag mx-1 my-1">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="line-clamp-2">{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;