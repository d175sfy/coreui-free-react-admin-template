import React,{useRef} from 'react'
import ContextMenu from '../../../components/contextMenu/ContextMenu'
import './ContextContainer.css'

function ContextContainer({children, menuItems}) {
    const ContextContainerRef = useRef(null)
    return (
        <div className="context-container" ref={ContextContainerRef}>
        {children}
        
        <ContextMenu 
        parentRef={ContextContainerRef}
        items={menuItems}
         />
        </div>
        )
    }
    
    export default ContextContainer