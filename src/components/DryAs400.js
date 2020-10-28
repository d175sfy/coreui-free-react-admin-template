import React, { useState } from "react";
import As400 from "../utils/As400";
import Storelist from "../utils/StoreList";
import ArrowDown from "../components/Arrow-circle-down";
import "./DryAs400.css";

const DryAs400 = () => {
  const [store, setStore] = useState(...Storelist)

  const toggleStore = index => {
    console.log('Hello There!')
    setStore(Storelist.map((store, i) => {
      if(i === index){
        store.open = !store.open
      }else {
        store.open = false;
      }
    }))
  }
  return (
    <div className="main-container">
      {Storelist.map((whse, i) => (
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

          {As400.filter((load) => load.Warehouse === whse.warehouse).map(
            (load, i) => (
              <div className={"load-container-" + (store.open ? 'open':'')} key={i}>
                <div className="load">{`${i + 1}.`}{load.Time}</div>
                <div className="load">{load.Date}</div>
                <div className="load">{load.Status}</div>
                <div className="load">{load.LoadNumber}</div>
                <div className="load">{load.Trailer}</div>
                <div className="load">{load.Seal}</div>
              </div>
            )
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DryAs400;
               
