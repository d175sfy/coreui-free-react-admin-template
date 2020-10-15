import React, { useState } from 'react'
import As400 from '../As400'
import WetLoads from '../wetLoads/WetLoads'
import HeldLoads from '../heldLoads/HeldLoads'
import ContextContainer from '../../../containers/dispatch/context/ContextContainer'
import ShowDryModal from '../../../views/dispatch/modal/dry/ShowDryModal'
import { TiArrowUnsorted } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti'
import './WhseLoadCount.css'

function WhseLoadCount() {
    const [loadCount, setloadCount] = useState(true)

    return (

        <React.Fragment>
            <div className="unsrtd" onClick={() => setloadCount(!loadCount)}>{loadCount ? <TiArrowSortedUp size={32} /> : <TiArrowUnsorted size={32} />}{loadCount ? 'Hide Whse Loads' : 'Show Whse Loads'}</div>
            <div className={loadCount ? 'whse-container' : 'hideLoadCount'}>

                <div className="whse-id__container"> 
                <div className="context-container">
                <div context-container__item>
                        <div>222</div>
                </div>
                </div>
                <div className="whse-loadCount-container">
                <div className="whse-count-dry">{Whse_222}</div>
                <div className="whse-count-wet">{Whse_222_wet}</div>
                <div className="whse-count-held">{Whse_222_held}</div>
                </div>
                </div>
        </div>
        </React.Fragment>
    )
}
export default WhseLoadCount
               
                  
                   

