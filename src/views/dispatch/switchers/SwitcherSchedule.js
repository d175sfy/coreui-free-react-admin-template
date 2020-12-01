import React from 'react'
import './SwitcherSchedule.css'
import Switcher from '../../../../src/utils/switchers/SwitcherList'
import {CBadge} from '@coreui/react'
function SwitcherSchedule() {
    return (
        <div className="switcher-main-container">
          <div className="switcher-container">
          {Switcher.map(switcher => (
                <React.Fragment>
                <div className="switcher-item-container">
                <div className="switcher-item">
                <div className="switcher-info">{switcher.name}<CBadge className="mr-1" color="secondary" shape="pill">{switcher.start}</CBadge></div>
                <div className="current-status">{switcher.off}</div>
                </div>
                </div>
                </React.Fragment>
              ))}
          </div>
        </div>
    )
}

export default SwitcherSchedule
