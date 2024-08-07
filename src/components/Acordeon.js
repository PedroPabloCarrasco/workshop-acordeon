import React, { useState, useRef, useEffect } from "react";

import arrowImg from '../img/arrow.svg'


const Acordeon = ({ title, content }) => {
    const [isExpanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState('0px');
    const contentRef = useRef();

    const toggle = () => {
        setExpanded(!isExpanded);
    }

    useEffect(() => {
        setContentHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
    }, [isExpanded]);

    const panelStyles = {
        background: 'gray',
        color: '#FFF',
        padding: '0.5em 1em'
    }

    const contentStyles = {
        height: contentHeight,
        overflow: 'hidden',
        transition: 'all 350ms ease-out',
        background: isExpanded ? 'white' : 'none',
        color: isExpanded ? 'black' : 'inherit',
        border: '1px solid black',
        padding: isExpanded ? '1em 0.5em' : '0 0.5em'

    }

    const imageStyles = {

        width: '18px'
    }






    return (
        <div style={panelStyles}>
            <div onClick={toggle}>
                <span>{title}</span>
                <img

                src={arrowImg}
                alt="Flecha"
                style={imageStyles}
                />
                
            </div>
            <div style={contentStyles} ref={contentRef}>
                {content}
            </div>
        </div>
    )
}

export default Acordeon;
