import React, { lazy } from 'react'
import './SSW.css'
const CreateDryLoads = lazy(() => import('../as400/CreateDryLoads.js'))


const DryLoads = () => {
  return (
    <React.Fragment>
      <div className="main-container">
      
  {/* main-load-container spans 100% */}
      <div className="main-load-container">
          <CreateDryLoads />


        </div>
      </div>
    </React.Fragment>
  )
}

export default DryLoads