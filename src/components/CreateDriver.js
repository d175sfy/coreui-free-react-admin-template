import React from 'react'
import { CgArrowsV } from "react-icons/cg";
import { BsChat } from "react-icons/bs";
import Drivers from '../utils/drivers/Driverlist'
import Shifts from '../utils/shifts/ShiftList'
import { ItemTypes } from '../utils/DnD/items.js'
import { AiFillCaretDown } from 'react-icons/ai'
import { CgListTree } from 'react-icons/cg'
import './createdriver.css'

import { useDrop } from 'react-dnd';

const CreateDriver = props => {

    // const [{ isOver }, drop] = useDrop({
    //     accept: ItemTypes.CARD,
    //     id: props.id
    //     ,
    //     collect: monitor => ({
    //         isOver: !!monitor.isOver()
    //     })
    // });



  
    return (
        <div className="driver-accordion">
            <React.Fragment>
                {
                    <div className="driver-accordion__container">
                    
                        {Shifts.map(shift => (
                            <React.Fragment>
                            <div className="shift-container">
                                <div className="shift-container__caret"><div className="shift-container__caret-icon"><AiFillCaretDown/></div></div>
                                <div className="shift-container__toggle-container"><div className="shift-container__toggle"><CgArrowsV size={14}/></div></div>
                                <div classname="placeholder" ><CgArrowsV/></div>
                                <div className="shift-container__shift">{shift.shift}</div>
                                <div className="shift-container__subItems"><CgListTree/></div>

                            </div>
                            
                            </React.Fragment>
                        ))}
                    </div>

                }
            </React.Fragment>
                                






            
                {/* <div driver-accordion__container>
                    <div className="driver-accordion__label"><div className="h3-label"><h3>8am</h3></div><div className="h5-label"><h5>Subitems</h5></div><div className="h5-label"><h5>Status</h5></div></div>
                    <div className="sriver-accordion-content__container">
                        {Drivers.filter(driver => driver.shift === "8am")
                            .map(driver => (
                                <React.Fragment>

                                    <div className="driver-accordion__content">
                                    <div className="driver-info"><div className="driver-info-content">{driver.name} ({driver.tractor})</div><div className="driver-info-speech"><BsChat/></div></div>
                                        <div className="driver-subItem">
                                            <div className="driver-subItem-icon"><FcParallelTasks size={32} /></div>
                                            <div className="driver-subItem-icon-items">1</div>
                                        </div>
                                        <div className="driver-status">Status</div>
                                        <div className="driver-status" contentEditable={true}>Load 1</div>
                                        <div className="driver-status" contentEditable={true}>Load 2</div>
                                        <div className="driver-status" contentEditable={true}>Load 3</div>
                                        <div className="driver-status" contentEditable={true}>Load 4</div>
                                        <div className="driver-status" contentEditable={true}>Load 5</div>
                                    </div> */}


                                {/* </React.Fragment>

                            ))}
                    </div>
                </div> */}
            
        </div>
    )
}




export default CreateDriver