import React,{ useState } from 'react'
import './SidePanel.css'

function SidePanel (){
    const [panel, setPanel] = useState(true)

    return (
        <div className="side-panel">Hello World</div>
    )
}
export default SidePanel
