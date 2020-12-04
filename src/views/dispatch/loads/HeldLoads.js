import React from 'react'
import CreateHeldLoads from '../../../components/CreateHeldLoads'
// import Storelist from '../../../utils/stores/Storelist'
import HeldLoadList from '../../../utils//loads/heldLoads/HeldLoadList'
import './HeldLoads.css'
function HeldLoads() {
    return (
        <React.Fragment>
            <div className="held-load-container">
                {HeldLoadList.map(
                    load => (
                
                        <CreateHeldLoads Warehouse={load.Warehouse}>{load.Warehouse}</CreateHeldLoads>
                    ))
                
                }
            </div>
        </React.Fragment>
    )
}

export default HeldLoads