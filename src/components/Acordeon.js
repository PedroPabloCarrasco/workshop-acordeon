import React, { useState, useRef, useEffect } from "react";

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
        transition: 'height 0.3s ease'
    }

    return (
        <div style={panelStyles}>
            <div onClick={toggle}>
                <span>{title}</span>
            </div>
            <div style={contentStyles} ref={contentRef}>
                {content}
            </div>
        </div>
    )
}

export default Acordeon;
