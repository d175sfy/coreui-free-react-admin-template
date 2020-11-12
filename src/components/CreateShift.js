import React, { useState} from 'react'
import Shifts from '../utils/shifts/ShiftList'
import CreateDriver from '../components/CreateDriver'
import './CreateDriver.css'

import './CreateShift.css'

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

    return (
        <React.Fragment>
            <div className="shift-accordion-container">
                        {/* create shifts */}
                            {Shifts.map(shift => (

                                    <div className="shift-container" key={shift.shift}>
                                            <div className="shift-container__shift" key={shift.shift}>{shift.shift}</div>
                                            <CreateDriver className={driver ? "driver-container":"driver-container-hidden"} shift={shift.shift} key={driver.id}/>
                                    </div>
                        ))}
                        </div>
                        </React.Fragment>
                        )
                    }



export default CreateShift