import React, { useState } from 'react'
// import As400 from '../As400'
// import WetLoads from '../wetLoads/WetLoads'
// import HeldLoads from '../heldLoads/HeldLoads'
import DryLoadCount from '../dryLoads/DryLoadCount' 
import StoreList from '../../../utils/StoreList' 
import { TiArrowUnsorted } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti'
import './WhseLoadCount.css'


function WhseLoadCount() {
    const [loadCount, setloadCount] = useState(true)

    return (

        <React.Fragment>
            <div className="unsrtd" onClick={() => setloadCount(!loadCount)}>{loadCount ? <TiArrowSortedUp size={32} /> : <TiArrowUnsorted size={32} />}{loadCount ? 'Hide Whse Loads' : 'Show Whse Loads'}</div>
            <div className={loadCount ? 'whse-container' : 'hideLoadCount'}>
            {StoreList.map(store => (
                <div className="whse-id__container" key={store.warehouse}> 
                <div className="context-container" key={store.warehouse}>
                <div className="whse-container__item" key={store.warehouse}>
                       
                            <div className="whse-container__item-id">{store.Warehouse}</div>
                     
                </div>
                </div>
                <div className="whse-loadCount-container">
                <div className="whse-count-dry">hello</div>
                <div className="whse-count-wet">hello</div>
                <div className="whse-count-held">hello</div>
                </div>
                </div>
                ))} 
        </div>
        </React.Fragment>
    )
}
export default WhseLoadCount
               
                  
                   

