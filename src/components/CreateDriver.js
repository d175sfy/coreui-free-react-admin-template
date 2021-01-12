import React from 'react'
import Driverlist from '../utils/drivers/Driverlist'
import './CreateDriver.css'


const CreateDriver = (props) =>  {
    return (
        <div className="main-container">
            {Driverlist.filter(driver => driver.shift === props.shift).map(
                driver => (
                    <div className="driver-container" key={driver.id}>
                    <strong>{driver.name} {driver.tractor}</strong>
                    </div>
                )
            )}

        </div>
    )
}


export default CreateDriver
