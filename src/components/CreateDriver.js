import React,{useRef} from 'react'
import Driverlist from '../utils/drivers/Driverlist'
import './CreateDriver.css'

const onDrag =  (e) => {
    e.preventDefault()
    console.log('Help, I\'m being dragged!')
}
const handle_onDrop = (e) => {
    e.preventDefault()
    e.dataTransfer.getData('text/html',e.target.id)
    e.currentTarget.style.background = "lightyellow";
    console.log(e.target.id)


}
const handle_onDragStart = (e) => {
    e.dataTransfer.setData('text/html',e.target.id)
    e.dataTransfer.dropEffect = 'move'
    console.log(e.target.innerText)
    console.log(e.target.pageX)
    console.log(e.target.pageY)
}
const handle_onDragOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    
}
const handle_onDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Help! I\'ve been entered into!')
}
const handle_onDragEnd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Help! I\'ve been dragged into!')
}

const CreateDriver = (props) =>  {
    const containerRef = useRef()
    return (
        <div className="main-container" ref={containerRef} onDragEnter={handle_onDragEnter} onDragOver={handle_onDragOver} onDrop= {handle_onDrop}>
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
