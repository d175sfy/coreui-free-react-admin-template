import React, { useState } from 'react'
import { CgArrowsV } from "react-icons/cg";
import Shifts from '../utils/shifts/ShiftList'
import CreateDriver from '../components/CreateDriver'
import './CreateDriver.css'
import { CgListTree } from 'react-icons/cg'
import './CreateShift.css'

//import { useDrop } from 'react-dnd';

const CreateShift = children => {

    // const [{ isOver }, drop] = useDrop({
    //     accept: ItemTypes.CARD,
    //     id: props.id
    //     ,
    //     collect: monitor => ({
    //         isOver: !!monitor.isOver()
    //     })
    // });
 
    const [driver, setDriver] = useState(false)

    function onClickHandler() {
        alert('Hello There!')
        setDriver(!driver)
    }
    return (
        <React.Fragment>
            <div className="shift-accordion">
                    <div className="shift-accordion__container">
                        {/* create shifts */}
                            {Shifts.map(shift => (
                                
                                    <div className="shift-container">
                                        <div className="shift-container__toggle-container">
                                            <div className="shift-container__toggle">
                                                <CgArrowsV size={18} onClick={onClickHandler} />
                                            </div>
                                        </div>
                                            <div className="shift-container__shift">
                                            {shift.shift}
                                            </div>
                                            <CreateDriver className={driver ? "driver-container":"driver-container-hidden"} shift={shift.shift} key={driver.id}/>
                                            <div className="shift-container__subItems"><CgListTree /></div>
                                    </div>  
                                           
                            ))}
                    </div>
            </div>
        </React.Fragment>
    )
                    }
export default CreateShift