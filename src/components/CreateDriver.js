import React,{useRef} from 'react'
import Driverlist from '../utils/drivers/Driverlist'
import './CreateDriver.css'

const onDrag =  (e) => {
    e.preventDefault()
    console.log('Help, I\'m being dragged!')
}
const onDrop = (e) => {
    e.preventDefault()
    console.log('Help, I\'ve been dropped!')
}
const onDragStart = (e) => {
    e.dataTransfer.setData('text/plain',"This Text may be Dragged!")
    console.log('Whoa, What a Ride!!!')
}
const onDragOver = (e) => {
    e.preventDefault()
}
const onDragEnter = (e) => {
    e.preventDefault()
   // console.log('Help! I\'ve been entered into!')
}
const onDragEnd = (e) => {
    e.preventDefault()
    console.log('Help! I\'ve been dragged into!')
}

function CreateDriver(props) {
    const containerRef = useRef()
    return (
        <div className="main-container" ref={containerRef} onDragOver={onDragOver} onDragEnter={onDragEnter}>
            {Driverlist.filter(driver => driver.shift === props.shift).map(
                driver => (
                    <div className="driver-container" key={driver.id} draggable="true" onDrag = {onDrag} onDragStart={onDragStart}>
                    <strong>{driver.name} {driver.tractor}</strong>
                    </div>
                )
            )}

        </div>
    )
}


export default CreateDriver
