import React from 'react'
import Storelist from '../utils/StoreList'


function CreateStore() {

    function labelClick() {
        setContainerState(!containerState)
       }
    return (
       
              <div className="main-container">
            {Storelist.map((whse,i) => (
                <React.Fragment>

                    <div className="store-title" key={whse.Warehouse}>

                            <div onClick={labelClick}><ArrowDown className="rotate" width={20} fill={"#ff3333"} /></div>


                        <div className="store ${whse.Warehouse}"><strong>{whse.Warehouse}</strong></div>
                    </div>
                   
                    <div className={containerState ? "load-container":"load-container-hidden"}>
                        <div className="heading">Time</div>
                        <div className="heading">Date</div>
                        <div className="heading">Status</div>
                        <div className="heading">LoadNumber</div>
                        <div className="heading">Trailer</div>
                        <div className="heading">Seal</div>
                    </div>
       </React.Fragment>
            
    ))}
                    </div>
            )
}

export default CreateStore
