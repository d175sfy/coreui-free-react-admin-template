import React, { lazy } from 'react'
import './DriverDispatch.css'
const WhseLoadCount = lazy(() => import('../../utils/loads/whseLoadCount/WhseLoadCount.js'))
const DispatchHeader = lazy(() => import('../../containers/dispatch/header/DispatchHeader.js'))
const CreateDriver = lazy(() => import('../../components/CreateDriver.js'))
const AddDryModal = lazy(() => import('./modal/dry/AddDryModal'))
const AddWetModal = lazy(() => import('./modal/wet/AddWetModal'))
const SidePanel = lazy(() => import('../../components/panel/SidePanel'))


const DriverDispatch = () => {
  return (
    
    <React.Fragment>
    <SidePanel/>
    <DispatchHeader/>
      <div className="main-container">
        
        <div className="store-div">
          <WhseLoadCount />
          <AddDryModal />
          <AddWetModal />
        </div>
        <div className="driver-div">
          <CreateDriver />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DriverDispatch
