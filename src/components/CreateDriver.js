import React from 'react'
import Driverlist from '../utils/drivers/Driverlist'
import './CreateDriver.css'

const handle_onDrop = (e) => {
    e.preventDefault()
    e.dataTransfer.getData('text/html',e.target.id)
    e.currentTarget.style.background = "lightyellow";
    //console.log(target)
    console.log('I\'ve been dropped!')



}
const handle_onDragStart = (e) => {
    e.dataTransfer.setData('text/html',e.target.id)
    e.dataTransfer.dropEffect = 'move'
    console.log(e.target.innerText)
}
const handle_onDragOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
    e.currentTarget.style.border = '5px solid purple'
    e.dataTransfer.dropEffect = 'move'
    
}
const handle_onDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.currentTarget.style.border = '1px solid red'
    console.log('Help! I\'ve been entered into!')
}
const handle_onDragEnd = (e) => {
    e.preventDefault()
    e.stopPropagation()
     e.currentTarget.style.border = '3px solid green'
    console.log('Help! I\'ve been dragged into!')
}

const CreateDriver = (props) =>  {
    return (
        <div className="main-container"  onDragEnter={handle_onDragEnter} onDragOver={handle_onDragOver} onDrop= {handle_onDrop}>
            {Driverlist.filter(driver => driver.shift === props.shift).map(
                driver => (
                    <div className="driver-container" key={driver.id} draggable="true" onDragStart={handle_onDragStart} onDragEnd={handle_onDragEnd}>
                    <strong>{driver.name} {driver.tractor}</strong>
                    </div>
                )
            )}

        </div>
    )
}


export default CreateDriver
