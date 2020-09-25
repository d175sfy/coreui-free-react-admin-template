import React, { lazy } from 'react'
import './DriverDispatch.css'
const WhseLoadCount = lazy(() => import('../../utils/loads/whseLoadCount/WhseLoadCount.js'))
const DispatchHeader = lazy(() => import('../../containers/dispatch/header/DispatchHeader.js'))
const CreateDriver = lazy(() => import('./drivers/createdriver.js'))
const CreateDryModal = lazy(() => import('./modal/dry/CreateDryModal'))
const CreateWetModal = lazy(() => import('./modal/wet/CreateWetModal'))
const SidePanel = lazy(() => import('../../components/panel/SidePanel'))


const DriverDispatch = () => {
  return (

    <React.Fragment>
    <SidePanel/>
    <DispatchHeader/>
      <div className="main-container">
        
        <div className="store-div">
          <WhseLoadCount />
          <CreateDryModal />
          <CreateWetModal />
        </div>
        <div className="driver-div">
          <CreateDriver />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DriverDispatch
