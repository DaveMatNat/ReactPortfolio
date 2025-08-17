import ClickChange from './ClickChange'
import TimeFromBirthday from './TimeFromBirthday'

function Hero() {
    const otherThings = [
        "Lifting Weights 🏋",
        "Trying out different Outfits 👕",
        'Playing Volleyball 🏐',
        'Playing Badminton 🏸',
        'Listening to my Favorite Songs 🎧',
        'Jamming on the Guitar 🎸',
        'Singing 🎤',
        'Watching Movies 🎥',
        'Making Movies 🎬',
        'Watching Cute Pet Videos 😻🐶',
        'Sleeping 😴',
    ]
    const greet = [
        "Hello! I'm David",              // English
        "Hola! Soy David",               // Spanish
        "สวัสดี! ผมชื่อเดวิด",         // Thai
        "你好! 我是大卫",                // Chinese (Simplified)
        "नमस्ते! मैं डेविड हूँ",         // Hindi
        "Bonjour! Je suis David",        // French
        "السلام عليكم! أنا ديفيد",       // Arabic
        "Olá! Eu sou o David",           // Portuguese
        "Привет! Я Дэвид",               // Russian
        "こんにちは! 私はデビッドです", // Japanese
        "안녕하세요! 저는 데이비드입니다",  // Korean
        "Ciao! Sono David",              // Italian
        "Merhaba! Ben David",            // Turkish
        "Habari! Mimi ni David",         // Swahili
        "Salam! Men David",              // Persian (Farsi)
        "Shalom! Ani David",             // Hebrew
        "Kia ora! Ko David ahau",        // Maori
        "Bula! O yau o David",           // Fijian
        "Hej! Jag är David",             // Swedish
        "Ahoj! Já jsem David"            // Czech
    ]
    return (
        <section id="hero" className="flex flex-col gap-8 px-8 pt-10 pb-16 sm:py-20 md:py-24 max-w-[1000px] mx-auto w-full">
            <div className="text-center font-medium flex flex-col items-center gap-2">
                <h2 className="text-slate-400  text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:scale-105 hover:text-slate-900 transition-all duration-300 cursor-pointer w-screen max-w-fit px-[0.5rem] text-center mx-auto flex py-10">
                    <ClickChange arr={greet} />
                </h2>
                {/* <h4 className="text-4xl sm:text-5xl md:text-6xl">and beyond</h4> */}
            </div>
            {/* <p className="text-center max-w-[600px] w-full mx-auto"><span className="font-semibold">Book a one-on-one
              private maths lesson</span> with James, a qualified Engineer and Math Teacher with over 13 years
              of tutoring experience.</p> */}
            <p className='text-slate-400'>
                Having lived <TimeFromBirthday /> in the lushes mountains of Chiang Mai, Thailand <a href="https://en.wikipedia.org/wiki/Thailand" target="_blank"></a> 🐘 , I am now a sophmore student at the <a href="https://www.richmond.edu/" target="_blank" className="toggle-change clickable">University of Richmond</a>!
                When you don't see me doing homework or studying, I'm probably doing something else such as <span className="clickable"><ClickChange arr={otherThings} /></span>
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="tag rank px-[1rem] py-0.5 sm:py-2 rounded-full sm:text-lg md:text-xl">AI & ML</div>
                <div className="tag rank px-[1rem] py-0.5 sm:py-2 rounded-full sm:text-lg md:text-xl">Entrepreneur</div>
                <div className="tag rank px-[1rem] py-0.5 sm:py-2 rounded-full sm:text-lg md:text-xl">Life-long Learner</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-fit mx-auto my-4">
                <a
                    href="/resume/David-Nathanson-Resume.pdf"
                    target="_blank"
                >
                {/* Make View Resume a Modal */}
                    <button className="card-button-secondary px-4 py-2 rounded-full text-lg sm:text-lg md:text-2xl flex items-center justify-center">View Résumé</button>
                </a>
                <button className="card-button-primary px-4 py-2 rounded-full text-lg sm:text-lg md:text-2xl">Contact Me</button>
            </div>
            <div className="w-fit mx-auto my-4 flex flex-col items-center gap-4">
                <p className="indie text-slate-600">Scroll for more</p>
                <div className="w-0.5 h-[100px] rounded-lg bg-linear-to-b from-slate-400 to-transparent"></div>
            </div>
        </section>
    )
}

export default Hero;