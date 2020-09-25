import React,{ useState} from 'react'
import ReactDom from 'react-dom'
import './CreateContextMenu.css'

 function CreateContextMenu ({open,children,onClose}){
    if(!open) return null
     return ReactDom.createPortal(
         <>
         <div className="overlay"/>
             <div className={open ? 'context-menu':'hideMenu'}>
                 <div className="wet-dry-div">
                     <button className="closeBtn" onClick={onClose}>X</button>
                     <div className="choose-load dry-load">Dry Loads</div>
                     <div className="choose-load wet-load">Wet Loads</div>
                 </div>
             </div>
         </>,
         document.getElementById('portal')
     )
     }
     export default CreateContextMenu
