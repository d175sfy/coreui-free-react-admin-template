import React,{ useState } from 'react'
import { CToggler} from '@coreui/react'
import { ImMenu } from 'react-icons/im'
import './SidePanel.css'

function SidePanel (){
    const [panelOpen, setPanel] = useState(true)

    return (
        <div className={panelOpen ? 'side-panel':'hide-side-panel'}><CToggler  onClick={() => setPanel(!panelOpen)}><ImMenu size={32} outline={0}/></CToggler></div>
    )
}
export default SidePanel
