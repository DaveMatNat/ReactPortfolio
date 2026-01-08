import React from 'react';

export const storyData = {
    // Character Profile
    player: {
        name: "David Nathanson",
        level: 22,
        class: "Technologist",
        exp: 85, // percentage
        hp: { current: 60, max: 100, label: "Sleep" },
        mp: { current: 95, max: 100, label: "Creativity" },
        avatar: "/me2.png",
        origin: "Phuket, Thailand",
        characterClass: "Jack of All Trades"
    },

    // Sidebar - Main Information
    mainQuest: {
        title: "Univ. of Richmond",
        subtitle: "B.S. CS & Mathematics",
        details: "GPA: 3.97 • Exp. 2028"
    },

    // Sidebar - Skills
    skills: {
        languages: ["Python", "C++", "Java", "JS", "Swift", "SQL", "MIPS"],
        frameworks: ["React", "Tailwind", "PyTorch", "OpenCV", "ROS 2", "Git", "Docker"]
    },

    // Sidebar - Toolbelt
    toolbelt: [
        { icon: "⚔️", name: "VS Code" },
        { icon: "🤖", name: "Selenium" },
        { icon: "☁️", name: "MongoDB" },
        { icon: "🐧", name: "Linux" }
    ],

    // Sidebar - Trophies / Achievements
    trophies: [
        { 
            icon: "🏆", 
            title: "Apple Swift Scholar", 
            subtitle: "WWDC22 Winner", 
            color: "text-amber-400", 
            bg: "bg-amber-900/10", 
            border: "border-amber-900/30" 
        },
        { 
            icon: "🥈", 
            title: "Int'l Science Fair", 
            subtitle: "Silver Medal (AI/NLP)", 
            color: "text-slate-300", 
            bg: "bg-slate-800/30", 
            border: "border-slate-700/30" 
        },
        { 
            icon: "🚩", 
            title: "UR Capture The Flag", 
            subtitle: "1st Place (2x Winner)", 
            color: "text-slate-300", 
            bg: "bg-slate-800/30", 
            border: "border-slate-700/30" 
        },
        { 
            icon: "🚀", 
            title: "Accelerate DC Pitch", 
            subtitle: "1st Runner-Up ($2k)", 
            color: "text-emerald-400", 
            bg: "bg-emerald-900/10", 
            border: "border-emerald-900/30" 
        }
    ],

    // Sidebar - Active Buffs
    buffs: [
        { icon: "⚡", title: "Quick Learner", effect: "+20% EXP Gain", color: "text-emerald-400" },
        { icon: "🦉", title: "Night Owl", effect: "Code Speed x2 (PM)", color: "text-blue-400" },
        { icon: "🌐", title: "Bi-Lingual", effect: "Thai/English", color: "text-purple-400" },
        { icon: "🤝", title: "Socializer", effect: "Charisma +10", color: "text-amber-400" }
    ],

    // Sidebar - Current Quest
    currentQuest: {
        title: "M.E.N.S.A Full Stack Refactor",
        status: "In Progress",
        description: "Objective: Converting Mensa to a full stack application.",
        tasksCompleted: 3,
        totalTasks: 13,
        percentage: 23,
        barColor: "bg-yellow-500"
    },

    // Sidebar - World Map
    worldMap: [
        { icon: "🏝️", title: "Phuket Island", subtitle: "Spawn Point", opacity: "opacity-40" },
        { icon: "🏯", title: "Chiang Mai", subtitle: "Tutorial Zone", opacity: "opacity-60" },
        { icon: "🗽", title: "New York City", subtitle: "Gateway Server", opacity: "opacity-80" },
        { icon: "🦅", title: "Richmond, VA", subtitle: "Current Region", active: true }
    ],

    // Main Content - Narrative Chapters
    chapters: [
        {
            title: "The Teak Mansion",
            color: "bg-emerald-500",
            shadow: "shadow-emerald-500/50",
            content: (
                <>
                    I was born on the island of Phuket, Thailand. When I was young, my family
                    moved north to Chiang Mai and into a wooden teak mansion. It used to belong
                    to a drug kingpin, and somehow my parents managed to get it before the police did.
                    That house became the backdrop of my childhood: wooden hallways, wild animals, and hill tribes.
                </>
            )
        },
        {
            title: "The Bridge",
            color: "bg-blue-500",
            shadow: "shadow-blue-500/50",
            content: (
                <>
                    My dad was born in Brooklyn, NY, and my mom was born in Phatthalung, Thailand. With an American dad and Thai mom, both English and Thai were spoken at home, making me a personal translator for my family. I helped my father, who doesn't speak Thai, navigate the social world in Chiang Mai, which taught me both how to bridge gaps between people and the importance of communication. These lessons have stuck with me, and I continue to use them in my everyday life.
                </>
            )
        },
        {
            title: "The Philosophy",
            color: "bg-amber-500",
            shadow: "shadow-amber-500/50",
            content: (
                <>
                    Along the way, I built a philosophy that still guides me. I believe in the little things,
                    the small details that add up quickly and create real impact. I believe in kindness and forgiveness,
                    and that learning is something you do every single day. Even small improvements matter.
                    The Japanese call it "Kaizen" aka continuous improvement. If I can get just a little better each day,
                    I know the bigger picture will take care of itself.
                </>
            )
        },
        {
            title: "The Pre-Game Lobby",
            color: "bg-purple-500",
            shadow: "shadow-purple-500/50",
            content: (
                <>
                    Before I ever touched code, I was glued to editing videos, playing way too much
                    Minecraft and Overwatch, and daydreaming about building something people online would
                    actually care about. Then one day, curiosity hit. I opened up a random Java file,
                    saw symbols that made no sense, and instead of closing it I got hooked.
                </>
            )
        },
        {
            title: "Hello World",
            color: "bg-pink-500",
            shadow: "shadow-pink-500/50",
            content: (
                <>
                    That was the start of a world of limitless possibilities. I began with Python, and from there the rabbit hole opened
                    into machine learning, data science, and automation. The things I used to only
                    consume became things I could build myself. Little scripts grew into bigger
                    projects: AI models, bots, and apps that actually worked. The kid running around
                    that teak mansion eventually found a new playground, one made of logic and creativity
                    instead of wood and stone.
                </>
            )
        },
        {
            title: "Joining the Server",
            color: "bg-indigo-500",
            shadow: "shadow-indigo-500/50",
            content: (
                <>
                    At the University of Richmond, I didn't just attend classes; I logged in to every part of the map.
                    I've been an <strong>Orientation Advisor</strong> for both international and new students, helping them navigate their own tutorial zones.
                    I also found my team in the <strong>Volleyball Club</strong>, winning the IM championship.
                    It’s about being present, active, and part of the community.
                </>
            )
        },
        {
            title: "The Grind",
            color: "bg-cyan-500",
            shadow: "shadow-cyan-500/50",
            content: (
                <>
                    Leveling up meant putting in the work. I made the <strong>Dean’s List</strong> and A-List,
                    served as the <strong>Education Chair for ACM</strong>, and spent my summer doing <strong>Robotics Research with Cobotiq</strong>,
                    working on real cleaning robots. I also took on the boss battle of
                    the IT Helpdesk, once welcoming and fixing <strong>102 devices in just 3 hours</strong>.
                    Whether it's debugging code or debugging Wi-Fi, I like solving problems fast.
                </>
            )
        },
        {
            title: "PvP & Tournaments",
            color: "bg-rose-500",
            shadow: "shadow-rose-500/50",
            content: (
                <>
                    I love a good competition. I competed in the <strong>ICPC</strong>, but my main arena is Capture The Flag.
                    My team took <strong>1st Place</strong> at the UR CTF two years in a row (2024 & 2025), even winning the overall title against "URBadger".
                    I was even interviewed on the <a href="https://www.assurainc.com/blog/podcast-episode-21-interview-with-the-university-of-richmonds-ctf-winning-team/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Assura Podcast</a> about it.
                    Most recently, I was the <strong>First Runner-Up</strong> at the Accelerate DC Start-up Pitch Competition, winning $2,000.
                </>
            )
        }
    ]
};
