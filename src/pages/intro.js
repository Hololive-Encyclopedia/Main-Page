import React from 'react';
import '../intro.css';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            {/* <div class="cut-corner">Some content</div> */}
            <div class="cut-corner filled">Some content</div>

            <div className="intro--title--square"></div>
            {/* <div className="intro--title--trapezoidal"></div> */}
            <div className="intro--title">誰でも大好き</div>
        </div>
    );
}

