import React from 'react'
import HeldLoadList from '../../../utils/loads/heldLoads/HeldLoadList'
import Storelist from '../../../utils/stores/Storelist'
function HeldLoads(props) {
    return (
        <React.Fragment>
            <div className="held-load-container">
                {Storelist.filter(store => store.storeID === HeldLoadList.Warehouse).map(
                    load => (
                        <div className="load-container" key={load.LoadNumber}>
                            <strong>{load.Trailer}</strong>
                        </div>
                    )
                )}
            </div>
        </React.Fragment>
    )
}

export default HeldLoads
