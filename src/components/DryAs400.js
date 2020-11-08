import React, { useState } from "react";
import As400 from "../utils/As400";
import StoreList from "../utils/StoreList";
import ArrowDown from "../components/Arrow-circle-down";
import "./DryAs400.css";

const DryAs400 = () => {
  const [store, setStore] = useState(...StoreList)
  const toggleStore = index => {
    setStore(StoreList.map((store, i) => {
      if(i=== index){
        console.log('This is store:'+store.warehouse,'I\'m store number:'+index)
      
      }else {
        store.open = false;
      }
      return StoreList
    }))
  }
  return (
    <div className="main-container">
      {StoreList.map((whse, i) => (
        <React.Fragment>
          <div className="store-title" key={whse.warehouse}>
            <div className="arrow-container" onClick={() => toggleStore(i)}>
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

          {As400.filter((load) => load.warehouse === whse.warehouse).map(
            (load, i) => (
              <div className={"load-container-" + (store === false ? 'closed':'open')} key={i}>
                <div className="load">{`${i + 1}.`}{load.time}</div>
                <div className="load">{load.date}</div>
                <div className="load">{load.status}</div>
                <div className="load">{load.loadNumber}</div>
                <div className="load">{load.trailer}</div>
                <div className="load">{load.seal}</div>
              </div>
            )
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DryAs400;
               
