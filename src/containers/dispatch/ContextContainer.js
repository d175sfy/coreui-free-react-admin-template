import React,{useRef} from 'react'
import ContextMenu from '../../components/contextMenu/ContextMenu'
import './ContextContainer.css'

function ContextContainer({children}) {
    const ContextContainerRef = useRef(null)
    return (
        <div className="context-container" ref={ContextContainerRef}>
        {children}
        <ContextMenu parentRef={ContextContainerRef} />
        </div>
    
)
    }
    export default ContextContainer