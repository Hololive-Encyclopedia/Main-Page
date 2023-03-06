import React from 'react';
import '../intro.css';
import Book from '../pages/book';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div class="cut-corner"></div>
            <div className="intro--title--square"></div>
            <div className="intro--title">誰でも大好き</div>
            <Book />
        </div>
    );
}

