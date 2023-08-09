import { useRef, useState } from "react";

import "./TopToBottom.css";

const TopToBottom: React.FC<{
    title: JSX.Element,
    items: JSX.Element[],
    hover?: boolean
}> = ({
    title,
    items,
    hover
}) => {
    const menu = useRef<HTMLUListElement | null>(null);

    const [menuOpen, setMenuOpen] = useState(false);

    // Function that is called when the slide up animation ends.
    const slideUpEnd = () => {
        const ele = menu.current;

        // Since we're at the end of the animation for sliding up, finally hide the element.
        if (ele)
            ele.setAttribute("style", "display: none;");        
    }

    const toggleMenu = () => {
        const ele = menu.current;

        if (ele) {
            // Element shoud always show at beginning of each animation.
            ele.setAttribute("style", "display: flex");

            if (menuOpen) {
                // Add slide up animation and remove previous.
                ele.classList.remove("animate-slideDown");
                ele.classList.add("animate-slideUp");

                // Add an event listener to animation end to hide menu.
                ele.addEventListener("animationend", slideUpEnd, { 
                    once: true
                });
            }
            else {
                // Add slide down animation and remove previous.
                ele.classList.remove("animate-slideUp");
                ele.classList.add("animate-slideDown");
            }

            // Set menu open to opposite.
            setMenuOpen(!menuOpen);
        }
    }

    return (
        <div
            className="dropdown"
            onMouseEnter={() => {
                console.log(`Enter! ${hover} && ${menuOpen}`);

                if (hover && !menuOpen)
                    toggleMenu();
            }}
            onMouseLeave={() => {
                console.log(`Leave! ${hover} && ${menuOpen}`);

                if (hover && menuOpen)
                    toggleMenu();
            }}
        >
            <button
                className="dropdown-button"
                onClick={() => {
                    if (!hover)
                        toggleMenu();
                }}
            >
                {title}
            </button>
            <div className="relative">
                <ul ref={menu} className="dropdown-menu">
                    {items.map((item, index) => {
                        return (
                            <li key={`item-${index.toString()}`}>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TopToBottom;