import React, {useState} from "react";

function RgbSlider() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const color = `rgb(${value1}, ${value2}, ${value3})`;
    const bgStyle = {
        backgroundColor: color,
        width: '400px',
        height: '400px',
        gridGap: '42px'
    };

    return (
        <div style= {{ marginTop: '50px', gridColumn: '8'}}>
            <div style={bgStyle}></div>
            <h1 style={{ color: 'white'}}>The color is: {color}</h1>
            <input
                type="range"
                min='0'
                max='255'
                value={value1}
                onChange={(e) => setValue1(e.target.value)} />
            <input
                type="range"
                min='0'
                max='255'
                value={value2}
                onChange={(e) => setValue2(e.target.value)} />
            <input
                type="range"
                min='0'
                max='255'
                value={value3}
                onChange={(e) => setValue3(e.target.value)} />
        </div>
    );

}
export default RgbSlider