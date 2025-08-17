import { useState } from "react";

function ClickChange({ arr = [] }) {
    const [index, setIndex] = useState(0)
    return (
        <>
            {/* {arr.map((elem, elemIndex) =>
                <h1 key={elemIndex}>{elem}</h1>
            )} */}
            <span key={index}
                onClick={() => setIndex((index + 1) % arr.length)}
            className="">
                {arr[index]}
            </span>
        </>
    )
}

export default ClickChange;