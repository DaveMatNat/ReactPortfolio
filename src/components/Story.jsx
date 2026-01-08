import React from 'react';
import { storyData } from './storyData';

// Reusable Components
const StatBar = ({ label, current, max, color, subLabel }) => (
    <div className="flex items-center gap-3 text-base">
        <span className={`${color.text} font-bold w-8`}>{label}</span>
        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full ${color.bg} transition-all duration-1000`} style={{ width: `${(current / max) * 100}%` }}></div>
        </div>
        <span className="text-sm text-slate-500">{subLabel}</span>
    </div>
);

const SectionHeader = ({ title }) => (
    <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-3 font-bold">{title}</h4>
);

const TagList = ({ tags }) => (
    <div className="flex flex-wrap gap-1">
        {tags.map(tag => (
            <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">{tag}</span>
        ))}
    </div>
);

function Story() {
    const { player, mainQuest, skills, toolbelt, trophies, buffs, currentQuest, worldMap, chapters } = storyData;

    return (
        <section id="story" className="bg-slate-950 text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-900/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className='max-w-[1000px] mx-auto flex flex-col gap-16 px-8 relative z-10'>
                
                {/* Header */}
                <div className="text-center space-y-4">
                    <p className="tag rank rounded-full px-4 py-1.5 inline-block text-sm font-semibold tracking-wide uppercase bg-slate-800 text-slate-300 border border-slate-700">Origin Story</p>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                        The Lore
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    
                    {/* LEFT COLUMN: Character Sheet */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl md:sticky md:top-24 transition-all hover:border-slate-600 duration-300 shadow-xl">
                            
                            {/* Profile Header */}
                            <div className="flex justify-between items-end mb-4 border-b border-slate-800 pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                                    <p className="text-emerald-400 font-mono text-base">Level {player.level} {player.class}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-slate-500 font-mono mb-1">EXP</p>
                                    <div className="h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500 animate-pulse" style={{ width: `${player.exp}%` }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Photo Card */}
                                <div className="flex justify-center">
                                    <div className="relative w-full aspect-square max-w-[280px] rounded-lg overflow-hidden border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-xl group">
                                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                            <span className="text-4xl">🧑‍💻</span>
                                        </div>
                                        <img 
                                            src={player.avatar} 
                                            alt={player.name} 
                                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            onError={(e) => {e.target.style.display='none'}}
                                        />
                                        <div className="absolute bottom-0 inset-x-0 bg-black/60 p-2 text-center backdrop-blur-sm">
                                            <p className="text-white text-sm font-mono">happy-mini-me.png</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Vitals */}
                                <div className="space-y-2">
                                    <StatBar label="HP" current={player.hp.current} max={player.hp.max} color={{text: "text-red-400", bg: "bg-red-500"}} subLabel={player.hp.label} />
                                    <StatBar label="MP" current={player.mp.current} max={player.mp.max} color={{text: "text-blue-400", bg: "bg-blue-500"}} subLabel={player.mp.label} />
                                </div>

                                {/* Info Grid */}
                                <div className="space-y-3">
                                    <div className="flex justify-between text-base mb-1 text-slate-400 font-mono">
                                        <span>Origin</span>
                                        <span className="text-white">{player.origin}</span>
                                    </div>
                                    <div className="flex justify-between text-base mb-1 text-slate-400 font-mono">
                                        <span>Class</span>
                                        <span className="text-white">{player.characterClass}</span>
                                    </div>
                                    
                                    {/* Main Quest */}
                                    <div className="pt-2 border-t border-slate-800 mt-2">
                                         <SectionHeader title="Main Quest" />
                                         <div className="bg-slate-800/30 rounded p-2 border-l-2 border-emerald-500 mb-2">
                                            <p className="text-white font-bold text-sm">{mainQuest.title}</p>
                                            <p className="text-slate-400 text-xs">{mainQuest.subtitle}</p>
                                            <p className="text-slate-500 text-xs">{mainQuest.details}</p>
                                         </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="pt-2 border-t border-slate-800">
                                        <SectionHeader title="Ability Tree" />
                                        <div className="space-y-2">
                                            <div>
                                                <p className="text-xs text-slate-500 font-mono mb-1">LANGUAGES</p>
                                                <TagList tags={skills.languages} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-mono mb-1">FRAMEWORKS & TOOLS</p>
                                                <TagList tags={skills.frameworks} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Toolbelt */}
                                <div className="pt-4 border-t border-slate-800">
                                     <SectionHeader title="Toolbelt" />
                                     <div className="grid grid-cols-2 gap-2 font-mono text-sm mb-4">
                                        {toolbelt.map((tool, idx) => (
                                            <div key={idx} className="bg-slate-800/50 p-2 rounded border border-slate-700/50 flex items-center gap-2">
                                                <span className="text-lg">{tool.icon}</span>
                                                <span className="text-slate-300">{tool.name}</span>
                                            </div>
                                        ))}
                                     </div>

                                     <SectionHeader title="Trophies" />
                                     <div className="space-y-2 font-mono text-sm">
                                        {trophies.map((trophy, idx) => (
                                            <div key={idx} className={`flex items-start gap-2 ${trophy.color} ${trophy.bg} p-1.5 rounded border ${trophy.border}`}>
                                                <span className="text-base">{trophy.icon}</span>
                                                <div>
                                                    <p className="font-bold">{trophy.title}</p>
                                                    <p className="text-xs opacity-75">{trophy.subtitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                     </div>
                                </div>

                                {/* Active Buffs */}
                                <div className="pt-4 border-t border-slate-800">
                                     <SectionHeader title="Active Buffs" />
                                     <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                         {buffs.map((buff, idx) => (
                                             <div key={idx} className="bg-slate-800/50 p-2 rounded border border-slate-700/50 flex flex-col gap-1 hover:bg-slate-800 transition-colors">
                                                 <div className={`flex items-center gap-2 ${buff.color}`}>
                                                     <span>{buff.icon}</span>
                                                     <span className="font-bold">{buff.title}</span>
                                                 </div>
                                                 <p className="text-slate-500">{buff.effect}</p>
                                             </div>
                                         ))}
                                     </div>
                                </div>

                                 {/* Current Quest */}
                                <div className="pt-4 border-t border-slate-800">
                                     <SectionHeader title="Current Quest" />
                                     <div className="space-y-3 font-mono text-sm">
                                        <div className="bg-slate-800/30 p-3 rounded-md border border-slate-700/30">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-white font-bold">{currentQuest.title}</span>
                                                <span className="text-sm text-yellow-500 animate-pulse">{currentQuest.status}</span>
                                            </div>
                                            <p className="text-xs text-slate-400 mb-3">
                                                {currentQuest.description}
                                            </p>
                                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                                <div className={`${currentQuest.barColor} h-full relative`} style={{width: `${currentQuest.percentage}%`}}>
                                                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 animate-ping"></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between text-xs text-slate-500 mt-1">
                                                <span>Tasks: {currentQuest.tasksCompleted}/{currentQuest.totalTasks}</span>
                                                <span>{currentQuest.percentage}% Complete</span>
                                            </div>
                                        </div>
                                     </div>
                                </div>

                                {/* World Map */}
                                <div className="pt-4 border-t border-slate-800">
                                     <SectionHeader title="World Map" />
                                     <div className="space-y-3 font-mono text-sm">
                                        {worldMap.map((loc, idx) => (
                                            <div key={idx} className={`flex items-center gap-3 ${loc.active ? '' : loc.opacity}`}>
                                                <div className="relative">
                                                    <span className="text-xl">{loc.icon}</span>
                                                    {loc.active && <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-ping"></span>}
                                                </div>
                                                <div>
                                                    <p className={`font-bold ${loc.active ? 'text-white' : 'text-slate-300'}`}>{loc.title}</p>
                                                    <p className={loc.active ? 'text-emerald-500' : 'text-slate-600'}>{loc.subtitle}</p>
                                                </div>
                                            </div>
                                        ))}
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Narrative Timeline */}
                    <div className="md:col-span-7 space-y-12">
                        {chapters.map((chapter, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                                <span className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full ${chapter.color} shadow-lg ${chapter.shadow}`}></span>
                                <h4 className="text-xl font-bold text-white mb-2">{chapter.title}</h4>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    {chapter.content}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Story;
