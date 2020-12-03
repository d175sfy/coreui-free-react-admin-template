import React from 'react'
import './SwitcherSchedule.css'
import Switcher from '../../../../src/utils/switchers/SwitcherList'
import {CBadge} from '@coreui/react'
function SwitcherSchedule() {
    return (
        <div className="switcher-main-container">
          <div className="switcher-container">
          {Switcher.filter(switcherInfo => switcherInfo.category === "permanent")
          .map(switcherInfo =>(
            
                <React.Fragment>
                <div className="switcher-item-container">
                <div className="switcher-item">
                <div className="switcher-info-name">{switcherInfo.name}<CBadge className="mr-1" color="secondary" shape="pill">{switcherInfo.start}</CBadge></div>
                </div>
                <div className="switcher-info-hostler"><CBadge className="mr-1" color="secondary" shape="pill">{switcherInfo.hostler}</CBadge></div>
                <div className="current-status">{switcherInfo.off}</div>
                </div>
                </React.Fragment>
              ))}
          </div>
        </div>                                                  
    )
}

export default SwitcherSchedule
