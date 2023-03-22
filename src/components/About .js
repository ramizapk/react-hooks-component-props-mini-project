import React from 'react'

export default function About(props) {
    const { imageSrc, aboutText } = props;
    const imageSrcOrDefault = imageSrc || 'https://via.placeholder.com/215';
    return (
        <aside>
            <img src={imageSrcOrDefault} alt="blog logo" />
            <p>{aboutText}</p>
        </aside>
    )
}
