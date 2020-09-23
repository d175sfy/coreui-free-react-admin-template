import React, { lazy } from 'react'
import './DriverDispatch.css'
const WhseLoadCount = lazy(() => import('../../utils/loads/whseLoadCount/WhseLoadCount.js'))
const DispatchHeader = lazy(() => import('../../containers/dispatch/DispatchHeader.js'))
const CreateDriver = lazy(() => import('./drivers/createdriver.js'))
const CreateDryModal = lazy(() => import('./modal/CreateDryModal'))
const CreateWetModal = lazy(() => import('./modal/CreateWetModal'))
const SidePanel = lazy(() => import('../../components/panel/SidePanel'))


const DriverDispatch = () => {
  return (

    <React.Fragment>
    <DispatchHeader/>
      <div className="main-container">
        <SidePanel/>
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
