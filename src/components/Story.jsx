function Story() {
    return (
        <section id="story" className="bg-slate-950 text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-900/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className='max-w-[1000px] mx-auto flex flex-col gap-16 px-8 relative z-10'>
                
                {/* Header */}
                <div className="text-center space-y-4">
                    <p className="tag rank rounded-full px-4 py-1.5 inline-block text-sm font-semibold tracking-wide uppercase bg-slate-800 text-slate-300 border border-slate-700">Origin Story</p>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                        The Lore
                    </h2>
                </div>

                {/* RPG Character Card Style Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    
                    {/* Left Column: Stats & "Character Sheet" */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl md:sticky md:top-24 transition-all hover:border-slate-600 duration-300 shadow-xl">
                            
                            {/* Header / Level */}
                            <div className="flex justify-between items-end mb-4 border-b border-slate-800 pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">David Nathanson</h3>
                                    <p className="text-emerald-400 font-mono text-sm">Level 22 Technologist</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500 font-mono mb-1">EXP</p>
                                    <div className="h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-500 w-[85%] animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Vitals */}
                                <div className="space-y-2">
                                     <div className="flex items-center gap-3 text-sm">
                                        <span className="text-red-400 font-bold w-8">HP</span>
                                        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[60%]"></div>
                                        </div>
                                        <span className="text-xs text-slate-500">Sleep</span>
                                     </div>
                                     <div className="flex items-center gap-3 text-sm">
                                        <span className="text-blue-400 font-bold w-8">MP</span>
                                        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[95%]"></div>
                                        </div>
                                        <span className="text-xs text-slate-500">Creativity</span>
                                     </div>
                                </div>

                                {/* Skills / Stats */}
                                <div className="space-y-3">
                                    
                                    <div>
                                        <div className="flex justify-between text-sm mb-1 text-slate-400 font-mono">
                                            <span>Origin</span>
                                            <span className="text-white">Phuket, Thailand</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1 text-slate-400 font-mono">
                                            <span>Class</span>
                                            <span className="text-white">Jack of All Trades</span>
                                        </div>
                                    </div>
                                    
                                    {/* Education / Main Quest */}
                                    <div className="pt-2 border-t border-slate-800 mt-2">
                                         <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-bold">Main Quest</h4>
                                         <div className="bg-slate-800/30 rounded p-2 border-l-2 border-emerald-500 mb-2">
                                            <p className="text-white font-bold text-xs">Univ. of Richmond</p>
                                            <p className="text-slate-400 text-[10px]">B.S. CS & Mathematics</p>
                                            <p className="text-slate-500 text-[10px]">GPA: 3.97 • Exp. 2028</p>
                                         </div>
                                    </div>

                                    {/* Tech Stack / Ability Tree */}
                                    <div className="pt-2 border-t border-slate-800">
                                        <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-bold">Ability Tree</h4>
                                        <div className="space-y-2">
                                            <div>
                                                <p className="text-[10px] text-slate-500 font-mono mb-1">LANGUAGES</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {["Python", "C++", "Java", "JS", "Swift", "SQL", "MIPS"].map(t => (
                                                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-500 font-mono mb-1">FRAMEWORKS & TOOLS</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {["React", "Tailwind", "PyTorch", "OpenCV", "ROS 2", "Git", "Docker"].map(t => (
                                                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Inventory / Achievements */}
                                <div className="pt-4 border-t border-slate-800">
                                     <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-bold">Toolbelt</h4>
                                     <div className="grid grid-cols-2 gap-2 font-mono text-xs mb-4">
                                        <div className="bg-slate-800/50 p-2 rounded border border-slate-700/50 flex items-center gap-2">
                                            <span className="text-lg">⚔️</span>
                                            <span className="text-slate-300">VS Code</span>
                                        </div>
                                        <div className="bg-slate-800/50 p-2 rounded border border-slate-700/50 flex items-center gap-2">
                                            <span className="text-lg">🤖</span>
                                            <span className="text-slate-300">Selenium</span>
                                        </div>
                                        <div className="bg-slate-800/50 p-2 rounded border border-slate-700/50 flex items-center gap-2">
                                            <span className="text-lg">☁️</span>
                                            <span className="text-slate-300">MongoDB</span>
                                        </div>
                                        <div className="bg-slate-800/50 p-2 rounded border border-slate-700/50 flex items-center gap-2">
                                            <span className="text-lg">🐧</span>
                                            <span className="text-slate-300">Linux</span>
                                        </div>
                                     </div>

                                     <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-bold">Trophies</h4>
                                     <div className="space-y-2 font-mono text-xs">
                                        <div className="flex items-start gap-2 text-amber-400 bg-amber-900/10 p-1.5 rounded border border-amber-900/30">
                                            <span className="text-base">🏆</span>
                                            <div>
                                                <p className="font-bold">Apple Swift Scholar</p>
                                                <p className="text-[10px] opacity-75">WWDC24 Winner</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2 text-slate-300 bg-slate-800/30 p-1.5 rounded border border-slate-700/30">
                                            <span className="text-base">🥈</span>
                                            <div>
                                                <p className="font-bold">Int'l Science Fair</p>
                                                <p className="text-[10px] opacity-75">Silver Medal (AI/NLP)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2 text-slate-300 bg-slate-800/30 p-1.5 rounded border border-slate-700/30">
                                            <span className="text-base">🚩</span>
                                            <div>
                                                <p className="font-bold">UR Capture The Flag</p>
                                                <p className="text-[10px] opacity-75">1st Place (2x Winner)</p>
                                            </div>
                                        </div>
                                     </div>
                                </div>

                                {/* World Map */}
                                <div className="pt-4 border-t border-slate-800">
                                     <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-bold">World Map</h4>
                                     <div className="space-y-3 font-mono text-xs">
                                        <div className="flex items-center gap-3 opacity-40">
                                            <span className="text-lg">🏝️</span>
                                            <div>
                                                <p className="text-slate-300">Phuket Island</p>
                                                <p className="text-slate-600">Spawn Point</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 opacity-60">
                                            <span className="text-lg">🏯</span>
                                            <div>
                                                <p className="text-slate-300">Chiang Mai</p>
                                                <p className="text-slate-600">Tutorial Zone</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 opacity-80">
                                            <span className="text-lg">🗽</span>
                                            <div>
                                                <p className="text-slate-300">New York City</p>
                                                <p className="text-slate-600">Gateway Server</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <div className="relative">
                                                <span className="text-lg">🦅</span>
                                                <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
                                             </div>
                                            <div>
                                                <p className="text-white font-bold">Richmond, VA</p>
                                                <p className="text-emerald-500">Current Region</p>
                                            </div>
                                        </div>
                                     </div>
                                </div>

                                {/* Photo Card */}
                                <div className="pt-6 border-t border-slate-800 flex justify-center">
                                    <div className="relative w-full aspect-square max-w-[200px] rounded-lg overflow-hidden border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-300 shadow-xl group">
                                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                            {/* Placeholder for when no image is present */}
                                            <span className="text-4xl">🧑‍💻</span>
                                        </div>
                                        <img 
                                            src="/me.png" 
                                            alt="David Nathanson" 
                                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                            onError={(e) => {e.target.style.display='none'}}
                                        />
                                        <div className="absolute bottom-0 inset-x-0 bg-black/60 p-2 text-center backdrop-blur-sm">
                                            <p className="text-white text-xs font-mono">Player_01.png</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative Timeline */}
                    <div className="md:col-span-7 space-y-12">
                        
                        {/* Chapter 1 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">The Teak Mansion</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                I was born on the island of Phuket, Thailand. When I was young, my family
                                moved north to Chiang Mai and into a wooden teak mansion. It used to belong
                                to a drug kingpin, and somehow my parents managed to get it before the police did.
                                That house became the backdrop of my childhood: wooden hallways, wild animals, and hill tribes.
                             </p>
                        </div>

                        {/* Chapter 2 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">The Bridge</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                My dad was born in Brooklyn, NY, and my mom was born in Phatthalung, Thailand. With an American dad and Thai mom, both English and Thai were spoken at home, making me a personal translator for my family. I helped my father, who doesn't speak Thai, navigate the social world in Chiang Mai, which taught me both how to bridge gaps between people and the importance of communication. These lessons have stuck with me, and I continue to use them in my everyday life.
                             </p>
                        </div>

                        {/* Chapter 3 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">The Philosophy</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                Along the way, I built a philosophy that still guides me. I believe in the little things,
                                the small details that add up quickly and create real impact. I believe in kindness and forgiveness,
                                and that learning is something you do every single day. Even small improvements matter.
                                The Japanese call it "Kaizen" aka continuous improvement. If I can get just a little better each day,
                                I know the bigger picture will take care of itself.
                             </p>
                        </div>

                        {/* Chapter 4 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">Pre-Game Lobby</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                Before I ever touched code, I was glued to editing videos, playing way too much
                                Minecraft and Overwatch, and daydreaming about building something people online would
                                actually care about. Then one day, curiosity hit. I opened up a random Java file,
                                saw symbols that made no sense, and instead of closing it I got
                                hooked.
                             </p>
                        </div>

                        {/* Chapter 5 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">Hello World</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                That was the start of a world of limitless possibilities. I began with Python, and from there the rabbit hole opened
                                into machine learning, data science, and automation. The things I used to only
                                consume became things I could build myself. Little scripts grew into bigger
                                projects: AI models, bots, and apps that actually worked. The kid running around
                                that teak mansion eventually found a new playground, one made of logic and creativity
                                instead of wood and stone.
                             </p>
                        </div>

                        {/* Chapter 6 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">The Lab: Cobotiq & Research</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                In Summer 2025, I joined Cobotiq and the HIVE Lab as a Research Engineer. I wasn't just running simulations;
                                I was solving real-world collision failures in commercial cleaning robots. Using ROS 2 and Python,
                                I engineered modules that integrated LiDAR and inertial data, creating safer navigation for the robots.
                                This work wasn't theoretical—it generated datasets from real-world scenarios to ensure reproducible safety testing.
                             </p>
                        </div>

                        {/* Chapter 7 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-rose-500 shadow-lg shadow-rose-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">The Workshop: Building Tools</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                I love building tools that optimize life. I created <strong className="text-slate-200">MENSA</strong>,
                                an optimization engine reducing meal planning time from 15 minutes to 8 seconds. I built the engine in C++ for raw speed (15x faster than Python).
                                Before that, I co-led <strong className="text-slate-200">SpiderBot</strong>, a RAG-enabled campus chatbot used by 120+ students,
                                ingesting 14M+ characters of university data to answer questions 24/7.
                             </p>
                        </div>

                        {/* Chapter 8 */}
                        <div className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-600 transition-colors duration-300">
                             <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></span>
                             <h4 className="text-xl font-bold text-white mb-2">The Community & Arena</h4>
                             <p className="text-slate-400 leading-relaxed text-lg">
                                I believe in giving back—whether as a Data Structures Grader, helping students debug code, or as an
                                IT Helpdesk Technician resolving connectivity issues for the campus. My work has been recognized globally:
                                from being an <strong className="text-slate-200">Apple Swift Student Scholar</strong> in 2024 to winning the
                                University of Richmond Capture The Flag (twice!) and taking Silver at the Indonesia Youth Int'l Science Fair.
                                The map keeps expanding, and I’m still just getting started.
                             </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Story;