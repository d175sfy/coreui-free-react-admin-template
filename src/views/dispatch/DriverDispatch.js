import React, { lazy } from 'react'
import './DriverDispatch.css'
const CreateStore = lazy(() => import('./stores/createstore.js'))
const CreateDriver = lazy(() => import('./drivers/createdriver.js'))
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))


const DriverDispatch = () => {
  return (
    <React.Fragment>
    <div className="main-container">
    <WidgetsDropdown />

      <div className="store-driver-div">
        <CreateStore/>
        <CreateDriver/>

      </div>
    </div>
    </React.Fragment>
  )
}

export default DriverDispatch
