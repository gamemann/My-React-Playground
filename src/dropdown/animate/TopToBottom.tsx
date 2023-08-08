import { useRef, useState } from "react";

import "./TopToBottom.css";

const TopToBottom: React.FC = () => {
    const menu = useRef<HTMLUListElement | null>(null);

    const [menuOpen, setMenuOpen] = useState(false);

    const animateEnd = () => {
        const ele = menu.current;

        if (ele && menuOpen)
            ele.setAttribute("style", "display: none;");
    }

    return (
        <div className="dropdown">
            <button
                className="dropdown-button"
                onClick={() => {
                    const ele = menu.current;

                    if (ele) {
                        if (menuOpen) {
                            ele.classList.remove("animate-slideDown");
                            ele.classList.add("animate-slideUp");
                        }
                        else {
                            ele.classList.remove("animate-slideUp");
                            ele.classList.add("animate-slideDown");

                            ele.setAttribute("style", "display: flex");
                        }

                        ele.addEventListener("animationend", animateEnd, { 
                            once: true
                        });
                    }

                    setMenuOpen(!menuOpen);
                }}
            >Drop Down!</button>
            <div className="relative">
                <ul ref={menu} className="dropdown-menu">
                    <li>Action One</li>
                    <li>Action Two</li>
                </ul>
            </div>
        </div>
    );
}

export default TopToBottom;