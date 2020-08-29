import React from 'react'

export default function MasonryPost( {post, tagsOnTop} ) {
    const style={backgroundImage: `url("${require('../../assets/img/${post.image')})`};

    return (
        <a className="masonryPost overlay" style={style} href={post.link}>
            <div classname="image-text">

            </div>
        </a>
    )
}
