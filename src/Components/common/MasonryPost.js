import React from 'react'

export default function MasonryPost( {post, tagsOnTop} ) {
    const style={backgroundImage: `url("${require(`../../assets/img/${post.image}`)}")`};

    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div classname="image-text">
                <div>
                    <h2 classname="image-title">
                        {post.title}
                    </h2>
                </div>
            </div>
        </a>
    )
}
