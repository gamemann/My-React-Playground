import React from 'react';

const Card: React.FC<{
    image?: string,
    title: string,
    children: React.ReactNode,
    classes?: string[]
}> = ({
    image,
    title,
    children,
    classes
}) => {
    if (!classes)
        classes = ["card"];
    return (
        <div className={classes.join(" ")}>
            {image && (
                <img src={image} alt={`${title}`} />
            )}
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Card;