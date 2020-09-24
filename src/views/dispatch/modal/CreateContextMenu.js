import React,{ useState,useEffect} from 'react'


 function ContextMenu (){
     const [context, setContext] = useState(false)
     const [pos, setPos,setShow] = useState({xPos,yPos,showMenu:true})
    useEffect(() => {
        document.addEventListener('contextmenu,', (e) => {
            e.preventDefault();
            const xPos = e.pageX + 'px';
            const yPos = e.pageY + 'px';
        })
    })
 
    

    handleContextMenu = (e) => {
        Element.preventDefault()

    }
     return (
        <div  className={modalState ? 'menu':'hideMenu'} draggable>
<nav  className="menu-nav">
<div  className="closeDiv"><button className={modalState ? 'close':'hideClose'} onClick={()=> setmodalState(false)}>X</button></div>
    <ul>
        <li className="menu-items dry-item"><button className="menu-btn" onClick={()=> alert('Dry Loads')}>Dry Loads</button></li>
        <li className="menu-items wet-item"><button className="menu-btn" onClick={()=> alert('Dry Loads')}>Wet Loads</button></li>
    </ul>
</nav>
</div>
     )
     }
     export default ContextMenu