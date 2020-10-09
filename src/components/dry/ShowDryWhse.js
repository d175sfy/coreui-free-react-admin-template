import React,{useContext} from 'react'
import As400 from '../../../src/utils/loads/As400'
import './ShowDryWhse.css'

//Show dry Loads
const Show_Whse_222 = As400.filter(load => load.Warehouse === "222")
const Show_Whse_226 = As400.filter(load => load.Warehouse === "226")
const Show_Whse_230 = As400.filter(load => load.Warehouse === "230")
const Show_Whse_237 = As400.filter(load => load.Warehouse === "237")
const Show_Whse_240 = As400.filter(load => load.Warehouse === "240")
const Show_Whse_241 = As400.filter(load => load.Warehouse === "241")
const Show_Whse_243 = As400.filter(load => load.Warehouse === "243")
const Show_Whse_244 = As400.filter(load => load.Warehouse === "244")
const Show_Whse_245 = As400.filter(load => load.Warehouse === "245")
const Show_Whse_246 = As400.filter(load => load.Warehouse === "246")
const Show_Whse_248 = As400.filter(load => load.Warehouse === "248")
const Show_Whse_305 = As400.filter(load => load.Warehouse === "305")
const Show_Whse_306 = As400.filter(load => load.Warehouse === "306")
const Show_Whse_310 = As400.filter(load => load.Warehouse === "310")
const Show_Whse_315 = As400.filter(load => load.Warehouse === "315")
const Show_Whse_316 = As400.filter(load => load.Warehouse === "316")
const Show_Whse_318 = As400.filter(load => load.Warehouse === "318")
const Show_Whse_320 = As400.filter(load => load.Warehouse === "320")
const Show_Whse_321 = As400.filter(load => load.Warehouse === "321")
const Show_Whse_322 = As400.filter(load => load.Warehouse === "322")
const Show_Whse_323 = As400.filter(load => load.Warehouse === "323")
const Show_Whse_324 = As400.filter(load => load.Warehouse === "324")
const Show_Whse_326 = As400.filter(load => load.Warehouse === "326")
const Show_Whse_329 = As400.filter(load => load.Warehouse === "329")
const Show_Whse_729 = As400.filter(load => load.Warehouse === "729")
const Show_Whse_739 = As400.filter(load => load.Warehouse === "739")
const Show_Whse_749 = As400.filter(load => load.Warehouse === "749")
const Show_Whse_1025 = As400.filter(load => load.Warehouse === "1025")
const Show_Whse_1062 = As400.filter(load => load.Warehouse === "1062")
const Show_Whse_1070 = As400.filter(load => load.Warehouse === "1070")
const Show_Whse_1081 = As400.filter(load => load.Warehouse === "1081")
const Show_Whse_1093 = As400.filter(load => load.Warehouse === "1093")
const Show_Whse_1103 = As400.filter(load => load.Warehouse === "1103")
const Show_Whse_1114 = As400.filter(load => load.Warehouse === "1114")
const Show_Whse_1166 = As400.filter(load => load.Warehouse === "1166")
const Show_Whse_1174 = As400.filter(load => load.Warehouse === "1174")
const Show_Whse_1177 = As400.filter(load => load.Warehouse === "1177")
const Show_Whse_1199 = As400.filter(load => load.Warehouse === "1199")
const Show_Whse_1211 = As400.filter(load => load.Warehouse === "1211")
const Show_Whse_1214 = As400.filter(load => load.Warehouse === "1214")
const Show_Whse_1215 = As400.filter(load => load.Warehouse === "1215")
const Show_Whse_1236 = As400.filter(load => load.Warehouse === "1236")
const Show_Whse_1334 = As400.filter(load => load.Warehouse === "1334")
const Show_Whse_1415 = As400.filter(load => load.Warehouse === "1415")


const showDryContext = React.createContext(null)
const ShowDryWhse = props => {
   return (
       <div className="show-whse-container">
       {As400.filter(whse => whse.Warehouse === props.whse)
       .map(whse => (
           <div>{whse.Warehouse} {whse.Time} {whse.Date} {whse.Status} {whse.LoadNumber} {whse.Trailer} {whse.Trailer} {whse.Seal}</div>
       ))}
       </div>
   )
        }

export  {ShowDryWhse as default, showDryContext}
