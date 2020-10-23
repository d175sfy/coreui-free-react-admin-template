import React, { useState, useRef, useEffect } from 'react'
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
    const arrowClickRef = useRef(null)


    function onClickHandler() {
        alert('Hello There!')
        setDriver(!driver)
    }

    // useEffect(() => {
    //     arrowClickRef.current.click();
    //     return () => {
    //         arrowClickRef.current.delete();
    //     }
    // },[]);

    return (
        <React.Fragment>
            <div className="shift-accordion-container">
                        {/* create shifts */}
                            {Shifts.map(shift => (

                                    <div className="shift-container">
                                            <div className="shift-container__shift">{shift.shift}</div>
                                            <CreateDriver className={driver ? "driver-container":"driver-container-hidden"} shift={shift.shift} key={driver.id}/>
                                    </div>
                        ))}
                        </div>
                        </React.Fragment>
                        )
                    }



export default CreateShift