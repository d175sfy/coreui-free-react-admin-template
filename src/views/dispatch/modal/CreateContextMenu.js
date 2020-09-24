import React,{ useState} from 'react'
import ReactDom from 'react-dom'
import './CreateContextMenu.css'

 function CreateContextMenu ({open,children}){
    if(!open) return null
     return ReactDom.createPortal(
         <>
         <div className="overlay"/>
             <div>
                 {children}
             </div>
         </>,
         document.getElementById('portal')
     )
     }
     export default CreateContextMenu
