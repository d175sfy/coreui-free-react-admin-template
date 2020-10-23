import React, { lazy } from 'react'
import './SSW.css'
const DryAs400 = lazy(() => import('../../../components/DryAs400.js'))


const DryLoads = () => {
  return (
    <React.Fragment>
      <div className="main-container">
      
  {/* main-load-container spans 100% */}
      <div className="main-load-container">
          <DryAs400 />


        </div>
      </div>
    </React.Fragment>
  )
}

export default DryLoads