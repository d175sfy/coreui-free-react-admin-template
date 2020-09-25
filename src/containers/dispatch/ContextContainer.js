import React,{useRef} from 'react'
import ContextMenu from '../../components/'
import './ContextContainer.css'

function ContextContainer({children}) {
    const contextContainerRef = useRef(null)
    return (
        <div className="context-container">
        {children}
        <ContextMenu parentRef={contextContainerRef} />
        </div>
    
)
    }
    export default ContextContainer