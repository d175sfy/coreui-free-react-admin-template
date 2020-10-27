import React,{ useState,useRef } from 'react'
import As400 from '../utils/As400'
import Storelist from '../utils/StoreList'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import './DryAs400.css'
import { CgArrowsExpandDownLeft } from 'react-icons/cg'

const DryAs400 = () => {
    const [containerState, setContainerState] = useState(false)
    const labelRef = useRef(null)

    function showContent() {
        console.log('Hello')
        const storeTitle = document.querySelector('.store-title')
        if(storeTitle){
        setContainerState('!containerState')
        }
    }
    return (
        <div className="main-container">
            {Storelist.map(whse => (
                <React.Fragment>

                    <div className="store-title" key={whse.Warehouse}>

                            <FaArrowAltCircleDown  ref={labelRef} className="arrow-up" size={20}  onClick={showContent}/>


                        <div className="store">{whse.Warehouse}</div>
                    </div>
                    <div className="load-header">
                        <div className="heading">Time</div>
                        <div className="heading">Date</div>
                        <div className="heading">Status</div>
                        <div className="heading">LoadNumber</div>
                        <div className="heading">Trailer</div>
                        <div className="heading">Seal</div>
                    </div>
                    {As400.filter(load => load.Warehouse === whse.Warehouse)
                        .map(load => (


                            <div className={containerState ? "load-container" : "load-container-hidden"}>
                                <div className="load">{load.Time}</div>
                                <div className="load">{load.Date}</div>
                                <div className="load">{load.Status}</div>
                                <div className="load">{load.LoadNumber}</div>
                                <div className="load">{load.Trailer}</div>
                                <div className="load">{load.Seal}</div>
                            </div>



                        ))}

                </React.Fragment>
            ))}


        </div>
    )
}

export default DryAs400



