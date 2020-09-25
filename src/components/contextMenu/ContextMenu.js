import React,{useEffect} from 'react'
import './ContextMenu.css'

const  ContextMenu = ({parentRef}) => {
    useEffect(() => {
        const parent = parentRef.current;
        if (!parent) {
            return;
        }
        const showMenu = (e) => {
            e.preventDefault();
            console.log('show')
        }
        parent.addEventListener('contextmenu', showMenu)
        return () => {
            parent.removeEventListener('contextmenu', showMenu)
        }
    })
    return (
        <div className="context-menu">
            
        </div>
    )
}
export default ContextMenu