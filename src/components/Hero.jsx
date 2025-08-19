import ClickChange from "./ClickChange";
import TimeFromBirthday from "./TimeFromBirthday";

function Hero() {
    const otherThings = [
        "Lifting Weights 🏋",
        "Trying out different Outfits 👕",
        "Playing Volleyball 🏐",
        "Playing Badminton 🏸",
        "Listening to my Favorite Songs 🎧",
        "Jamming on the Guitar 🎸",
        "Singing 🎤",
        "Watching Movies 🎥",
        "Making Movies 🎬",
        "Watching Cute Pet Videos 😻🐶",
        "Sleeping 😴",
    ];

    const greet = [
        { text: "Hi! I'm David", lang: "English" },
        { text: "¡Hola! Soy David", lang: "Spanish" },
        { text: "สวัสดี! ผมชื่อเดวิด", lang: "Thai" },
        { text: "嗨！我是大卫", lang: "Chinese (Simplified)" },
        { text: "नमस्ते! मैं डेविड हूँ", lang: "Hindi" },
        { text: "Salut! Je suis David", lang: "French" },
        { text: "مرحبًا! أنا ديفيد", lang: "Arabic" },
        { text: "Oi! Sou David", lang: "Portuguese (BR)" },
        { text: "Привет! Я Дэвид", lang: "Russian" },
        { text: "やあ！デビッドです", lang: "Japanese" },
        { text: "안녕! 저는 데이비드예요", lang: "Korean" },
        { text: "Ciao! Sono David", lang: "Italian" },
        { text: "Merhaba! Ben David", lang: "Turkish" },
        { text: "Habari! Mimi ni David", lang: "Swahili" },
        { text: "سلام! من دیوید هستم", lang: "Persian (Farsi)" },
        { text: "שלום! אני דיוויד", lang: "Hebrew" },
        { text: "Kia ora! Ko David ahau", lang: "Māori" },
        { text: "Bula! O yau o David", lang: "Fijian" },
        { text: "Hej! Jag är David", lang: "Swedish" },
        { text: "Ahoj! Jsem David", lang: "Czech" },
        { text: "Halo! Saya David", lang: "Indonesian" },
        { text: "Sawubona! Ngingu David", lang: "Zulu" },
        { text: "Γεια! Είμαι Ντέιβιντ", lang: "Greek" },
        { text: "Szia! David vagyok", lang: "Hungarian" },
        { text: "Tere! Olen David", lang: "Estonian" },
        { text: "Hei! Jeg er David", lang: "Norwegian" },
        { text: "Hai! Saya David", lang: "Malay" },
        { text: "Kamusta! Ako si David", lang: "Filipino/Tagalog" },
        { text: "Hallo! Ich bin David", lang: "German" },
        { text: "Cześć! Jestem David", lang: "Polish" },
        { text: "Hoi! Ik ben David", lang: "Dutch" },
        { text: "Chào! Tôi là David", lang: "Vietnamese" },
        { text: "ሰላም! እኔ ዴቪድ ነኝ", lang: "Amharic" },
        { text: "Привіт! Я Девід", lang: "Ukrainian" },
        { text: "Salut! Sunt David", lang: "Romanian" },
        { text: "Moi! Olen David", lang: "Finnish" },
    ];

    return (
        <section
            id="hero"
            className="flex flex-col gap-8 px-8 pt-10 pb-16 sm:py-20 md:py-24 max-w-[1000px] mx-auto w-full"
        >
            <div className="text-center font-medium flex flex-col items-center gap-2">
                <h2 className="text-slate-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:scale-105 hover:text-slate-900 transition-all duration-300 cursor-pointer w-screen max-w-fit px-[0.5rem] text-center mx-auto flex py-10">
                    <ClickChange arr={greet} />
                </h2>
            </div>

            <p className="text-slate-400 text-xl">
                Having lived <TimeFromBirthday /> in the lushes mountains of Chiang Mai,
                Thailand <a href="https://en.wikipedia.org/wiki/Thailand" target="_blank" rel="noreferrer"></a>{" "}
                🐘 , I am now a sophmore student at the{" "}
                <a
                    href="https://www.richmond.edu/"
                    target="_blank"
                    rel="noreferrer"
                    className="toggle-change clickable"
                >
                    University of Richmond
                </a>
                ! When you don't see me doing homework or studying, I'm probably doing
                something else such as{" "}
                <span className="clickable">
                    <ClickChange arr={otherThings} />
                </span>
            </p>

            <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="tag rank px-[1rem] py-0.5 sm:py-2 rounded-full sm:text-lg md:text-XL">
                    AI & ML
                </div>
                <div className="tag rank px-[1rem] py-0.5 sm:py-2 rounded-full sm:text-lg md:text-XL">
                    Entrepreneur
                </div>
                <div className="tag rank px-[1rem] py-0.5 sm:py-2 rounded-full sm:text-lg md:text-XL">
                    Life-long Learner
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-fit mx-auto my-4">
                <a href="/resume/David-Nathanson-Resume.pdf" target="_blank" rel="noreferrer">
                    <button className="card-button-secondary px-5 py-2 rounded-full text-lg sm:text-lg md:text-2xl flex items-center justify-center">
                        View Résumé
                    </button>
                </a>
                <a href="#hire">
                    <button className="card-button-primary px-5 py-2 rounded-full text-lg sm:text-lg md:text-2xl">
                        Contact Me
                    </button>
                </a>
            </div>

            <div className="w-fit mx-auto my-4 flex flex-col items-center gap-4">
                <p className="indie text-slate-600">Scroll for more</p>
                <div className="w-0.5 h-[100px] rounded-lg bg-linear-to-b from-slate-400 to-transparent"></div>
            </div>
        </section>
    );
}

export default Hero;