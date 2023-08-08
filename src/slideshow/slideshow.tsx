import React, { ReactNode, useRef } from "react"

import LeftArrow from './icons/left_arrow';
import RightArrow from './icons/right_arrow';

import './slideshow.css';

// Calculates the average width of each child.
function cal_avg_width (
    elements: HTMLCollection,
    fallback?: number
): number {
    if (!fallback)
        fallback = 15;

    let ele_cnt = 0;
    let ele_width = 0;

    for (let i = 0; i < elements.length; i++) {
        const ele = elements[i];

        if (!ele)
            continue;
        
        ele_cnt++;
        ele_width += ele.clientWidth;
    }

    return (ele_width / ele_cnt) || fallback;
}

const SlideShow: React.FC<{
    children: ReactNode,
    classes?: string[],
    identifier?: string
}> = ({
    children,
    classes,
    identifier
}) => {

    if (classes)
        classes.push("slideshow");
    else
        classes = ["slideshow"];

    if (!identifier)
        identifier = Math.floor(100000 + Math.random() * 900000).toString();

    const elements = React.Children.toArray(children);

    const content_ref = useRef<HTMLDivElement>(null);

    return (
        <div className={classes.join(" ")}>
            <div className="slideshow-left">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();

                        if (content_ref.current) {
                            const content = content_ref.current;

                            // Retrieve default width of elements.
                            const item_width = cal_avg_width(content.children);

                            const cur_pos = parseInt(content.style.left || "0", 10);

                            console.log("Cur position => " + cur_pos);
                            console.log("CurP pos => " + Math.abs(cur_pos));

                            // Only move if we need to.
                            if (cur_pos < 0) {
                                const new_pos = cur_pos + item_width;

                                content.style.left = `${new_pos}px`;

                                console.log("Move Width => " + item_width + "px");
                                console.log("New position => " + new_pos);
                            }
                        }
                    }}
                ><LeftArrow /></button>
            </div>
            <div className="slideshow-content">
                <div ref={content_ref} className="slideshow-items" >
                    {elements.map((item, index) => {
                        return (
                            <div key={identifier + "-" + index} className="slideshow-item">
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="slideshow-right">
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        if (content_ref.current) {
                            const content = content_ref.current;
                            const content_width = content.clientWidth;

                            // Retrieve default width of elements.
                            const item_width = cal_avg_width(content.children);

                            const cur_pos = parseInt(content.style.left || "0", 10);

                            console.log("Cur position => " + cur_pos);
                            console.log("CurP pos => " + Math.abs(cur_pos));

                            if (Math.abs(cur_pos) < (content_width - item_width)) {
                                const new_pos = cur_pos - item_width;

                                content.style.left = `${new_pos}px`;

                                console.log("Move Width => " + item_width + "px");
                                console.log("New position => " + new_pos);
                            }
                        }
                    }}
                ><RightArrow /></button>
            </div>
        </div>
    );
}

export default SlideShow;