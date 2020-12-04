import React from 'react'
import DriverList from '../../utils/drivers/Driverlist'
import './DriverScheduleComponent.css'

function DriverScheduleComponent() {
    return (
        <React.Fragment className="main">
        <div className="driver-schedule__items-title">
            <div className="driver-schedule__items-title-items">
            <div className="driver-schedule__items-tractor">TRACTOR</div>
                <div className="driver-schedule__items-tractor">STATUS</div>
                <div className="driver-schedule__items-name">DRIVER</div>
                <div className="driver-schedule__items-shift">SHIFT</div>
                <div className="driver-schedule__items-off">OFF</div>
            </div>
            <div className="driver-schedule__items-title-items">
            <div className="driver-schedule__items-tractor">TRACTOR</div>
                <div className="driver-schedule__items-tractor">STATUS</div>
                <div className="driver-schedule__items-name">DRIVER</div>
                <div className="driver-schedule__items-shift">SHIFT</div>
                <div className="driver-schedule__items-off">OFF</div>
            </div>
            <div className="driver-schedule__items-title-items">
                <div className="driver-schedule__items-tractor">TRACTOR</div>
                <div className="driver-schedule__items-tractor">STATUS</div>
                <div className="driver-schedule__items-name">DRIVER</div>
                <div className="driver-schedule__items-shift">SHIFT</div>
                <div className="driver-schedule__items-off">OFF</div>
            </div>
            <div className="driver-schedule__items-title-items">
            <div className="driver-schedule__items-tractor">TRACTOR</div>
                <div className="driver-schedule__items-tractor">STATUS</div>
                <div className="driver-schedule__items-name">DRIVER</div>
                <div className="driver-schedule__items-shift">SHIFT</div>
                <div className="driver-schedule__items-off">OFF</div>
            </div>
        </div>
        <div className="driver-schedule__container">
        <div className="schedule-dashboard">
            <div className="schedule-dashboard-item item">Office</div>
            <div className="schedule-dashboard-item item">vacation</div>
            <div className="schedule-dashboard-item item">Yard/Switch</div>
            <div className="schedule-dashboard-item item">Sick</div>
            <div className="schedule-dashboard-item item">FMLA/LOA/DIS</div>
            <div className="schedule-dashboard-item item">JURY DUTY</div>
            <div className="schedule-dashboard-item item">BEREAVEMENT</div>
            <div className="schedule-dashboard-item item">SCHED OFF</div>
            <div className="schedule-dashboard-item item">P-DAY</div>
            <div className="schedule-dashboard-item item">TOTAL</div>
        </div>
            {DriverList.map(driver => (
                <div className="driver-schedule__items">
                    <div className="driver-schedule__items-tractor item">{driver.tractor}</div>
                    <div className="driver-schedule__items-tractor item">O</div>
                    <div className="driver-schedule__items-name item">{driver.name}</div>
                    <div className="driver-schedule__items-shift item">{driver.shift}</div>
                    <div className="driver-schedule__items-off item">{driver.off}</div>
                </div>
            ))}
        </div>
        </React.Fragment>
    )
}

export default DriverScheduleComponent
