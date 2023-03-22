import React from 'react'

export default function Article(props) {
    const { title, date, preview, minutesToRead } = props;
    const dateOrDefault = date || 'January 1, 1970';
    let output = " ";
    const symbole = (minutesToRead < 30) ? "☕️" : "🍱";
    const number = (minutesToRead < 30) ? Math.ceil(minutesToRead / 5) : Math.ceil(minutesToRead / 10);

    for (let i = 1; i <= number; i++) {
        output += symbole;
    }
    output += ` ${minutesToRead} min read`;
    return (
        <article>
            <h3>{title}</h3>
            <small>{dateOrDefault}.{output}</small>
            <p>{preview}</p>
        </article>
    )
}
