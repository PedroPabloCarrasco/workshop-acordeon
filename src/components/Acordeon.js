import React, {useState} from "react";

const Acordeon = ({ title, content }) => {


    const [ isExpanded, setExpanded ] = useState(false)


    const toggle = () => {
        setExpanded(!isExpanded) 
    }







    const panelStyles = {
        background: 'gray',
        color: '#FFF',
        padding: '0.5em 1em'

    }

const contentStyles = {
    height: isExpanded ? '100px' : '0px',
    overflow: 'hidden'

}



    return (
        <div style={panelStyles}>
            <div onClick={ toggle }>
                <span>{ title }</span>
            </div>
        <div style={contentStyles}>
                
                { content }


            </div>
        </div>
    )
}

export default Acordeon