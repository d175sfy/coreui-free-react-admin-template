import React from 'react'
import CreateHeldLoads from '../../../components/CreateHeldLoads'
// import Storelist from '../../../utils/stores/Storelist'
import HeldLoadList from '../../../utils//loads/heldLoads/HeldLoadList'
import './HeldLoads.css'
function HeldLoads(props) {
    return (
        <React.Fragment>
            <div className="held-load-container">
                {HeldLoadList.filter(load => load.Warehouse === props.Warehouse).map(
                    load => (
                
                        <CreateHeldLoads>{load.Trailer}</CreateHeldLoads>
                    ))
                
                }
            </div>
        </React.Fragment>
    )
}

export default HeldLoads