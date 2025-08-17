import { timeElasped } from "./utils/index.js";
import { useEffect, useState } from "react";

function TimeFromBirthday() {
    const [ref, setRef] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setRef(new Date());
        }, 1000);
        
        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []) // Empty dependency array - effect runs once on mount
    return (
        <>
            <span className="text-slate-900">{timeElasped(ref.toISOString())}</span>
        </>
    )
}

export default TimeFromBirthday;