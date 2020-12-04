import React from 'react'
import HeldLoadList from '../../src/utils/loads/heldLoads/HeldLoadList'
import './CreateHeldLoads.css'
function CreateHeldLoads(props) {
    return (
        <div className="held-load-item-container">
            {
                HeldLoadList.filter(load => load.Warehouse === props.Warehouse)
                .map(whse => (
                    <div className="held-load-item" store={whse.Warehouse} trailer={whse.Trailer}>
                        {whse.Warehouse}
                    </div>
                ))
                 
                
            }
        </div>
    )
}

export default CreateHeldLoads
