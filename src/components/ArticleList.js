import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    return (
        <main>
            {props.posts.map((post) => {
                return (
                    <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutesToRead={post.minutes} />
                );
            })}

        </main>
    )
}
