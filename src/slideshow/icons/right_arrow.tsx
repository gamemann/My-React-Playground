import React from 'react';

const RightArrow: React.FC<{
    classes?: string[]
}> = ({
    classes
}) => {
    if (!classes)
        classes = ["icon-rightarrow"];

    return (
        <svg viewBox="0 0 1024 1024" className={classes.join(" ")}  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
        </svg>
    );
}

export default RightArrow;