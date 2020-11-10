import React, { useState } from "react";
import As400 from "../utils/As400";
import StoreList from "../utils/StoreList";
import ArrowDown from "../components/Arrow-circle-down";
import "./DryAs400.css";

const DryAs400 = () => {
  const [store, setStore] = useState(...StoreList)
  const [loadShown, setloadShown] = useState([])


  const toggleLoad = warehouse => {
    console.log(warehouse)
    //slice method to return selected elements as new array object
    const shownState = loadShown.slice()
    //indexOf to search array for specified item
    const index = shownState.indexOf(warehouse)
    
      if(index >= 0) {
        //splice // adds/removes item
        // 1 means remove 1 item
        // remove one item if found
        shownState.splice(index, 1)
        setloadShown(loadShown)
      
      }else {
        shownState.push(warehouse)
        setloadShown(shownState)
      }
      return StoreList
    }
  
  return (
    <div className="main-container">
      {StoreList.map((whse) => (
        <React.Fragment>
          <div className="store-title" key={whse.warehouse}>
            <div className="arrow-container" onClick={() => toggleLoad(whse.warehouse)}>
              <ArrowDown
                className="down-arrow"
                width={20}
                fill={"#ff3333"}
              />
            </div> 

            <div className="store">{whse.warehouse}</div>
          </div>
          <div className="load-header">
                  <div className="heading">Time</div>
                  <div className="heading">Date</div>
                  <div className="heading">Status</div>
                  <div className="heading">LoadNumber</div>
                  <div className="heading">Trailer</div>
                  <div className="heading">Seal</div>
                </div>
          {loadShown.includes(whse.warehouse) && (
            As400.filter((load) => load.warehouse === whse.warehouse).map(
            (load, i) => (
              <div className={"load-container" + (loadShown ? 'load-container-open':'')} key={i}>
                <div className="load">{`${i + 1}.`}{load.time}</div>
                <div className="load">{load.date}</div>
                <div className="load">{load.status}</div>
                <div className="load">{load.loadNumber}</div>
                <div className="load">{load.trailer}</div>
                <div className="load">{load.seal}</div>
              </div>
            )
          ))}
     
        </React.Fragment>
      ))}
    </div>
  );
};

export default DryAs400;
               
