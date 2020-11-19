import React from 'react'
import HeldLoadList from '../../src/utils/loads/heldLoads/HeldLoadList'
function CreateHeldLoads() {
    return (
        <div>
            {
                HeldLoadList.map(load => (
                    <div className="held-load-item" store={load.Warehouse} trailer={load.Trailer}>
                        {load.Trailer}
                    </div>
                ))
            }
        </div>
    )
}

export default CreateHeldLoads
