import React, { useState } from 'react'
import As400 from '../As400'
import WetLoads from '../wetLoads/WetLoads'
import HeldLoads from '../heldLoads/HeldLoads'
import StoreList from '../../../../src/utils/stores/storelist'
import ContextContainer from '../../../../src/containers/dispatch/context/ContextContainer'
import { TiArrowUnsorted } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti'
import './WhseLoadCount.css'

//dry Loads
const Whse_222 = As400.filter(load => load.Warehouse === "222").length
const Whse_226 = As400.filter(load => load.Warehouse === "226").length
const Whse_230 = As400.filter(load => load.Warehouse === "230").length
const Whse_237 = As400.filter(load => load.Warehouse === "237").length
const Whse_240 = As400.filter(load => load.Warehouse === "240").length
const Whse_241 = As400.filter(load => load.Warehouse === "241").length
const Whse_243 = As400.filter(load => load.Warehouse === "243").length
const Whse_244 = As400.filter(load => load.Warehouse === "244").length
const Whse_245 = As400.filter(load => load.Warehouse === "245").length
const Whse_246 = As400.filter(load => load.Warehouse === "246").length
const Whse_248 = As400.filter(load => load.Warehouse === "248").length
const Whse_305 = As400.filter(load => load.Warehouse === "305").length
const Whse_306 = As400.filter(load => load.Warehouse === "306").length
const Whse_310 = As400.filter(load => load.Warehouse === "310").length
const Whse_315 = As400.filter(load => load.Warehouse === "315").length
const Whse_316 = As400.filter(load => load.Warehouse === "316").length
const Whse_318 = As400.filter(load => load.Warehouse === "318").length
const Whse_320 = As400.filter(load => load.Warehouse === "320").length
const Whse_321 = As400.filter(load => load.Warehouse === "321").length
const Whse_322 = As400.filter(load => load.Warehouse === "322").length
const Whse_323 = As400.filter(load => load.Warehouse === "323").length
const Whse_324 = As400.filter(load => load.Warehouse === "324").length
const Whse_326 = As400.filter(load => load.Warehouse === "326").length
const Whse_329 = As400.filter(load => load.Warehouse === "329").length
const Whse_729 = As400.filter(load => load.Warehouse === "729").length
const Whse_739 = As400.filter(load => load.Warehouse === "739").length
const Whse_749 = As400.filter(load => load.Warehouse === "749").length
const Whse_1025 = As400.filter(load => load.Warehouse === "1025").length
const Whse_1062 = As400.filter(load => load.Warehouse === "1062").length
const Whse_1070 = As400.filter(load => load.Warehouse === "1070").length
const Whse_1081 = As400.filter(load => load.Warehouse === "1081").length
const Whse_1093 = As400.filter(load => load.Warehouse === "1093").length
const Whse_1103 = As400.filter(load => load.Warehouse === "1103").length
const Whse_1114 = As400.filter(load => load.Warehouse === "1114").length
const Whse_1166 = As400.filter(load => load.Warehouse === "1166").length
const Whse_1174 = As400.filter(load => load.Warehouse === "1174").length
const Whse_1177 = As400.filter(load => load.Warehouse === "1177").length
const Whse_1199 = As400.filter(load => load.Warehouse === "1199").length
const Whse_1211 = As400.filter(load => load.Warehouse === "1211").length
const Whse_1214 = As400.filter(load => load.Warehouse === "1214").length
const Whse_1215 = As400.filter(load => load.Warehouse === "1215").length
const Whse_1236 = As400.filter(load => load.Warehouse === "1236").length
const Whse_1334 = As400.filter(load => load.Warehouse === "1334").length
const Whse_1415 = As400.filter(load => load.Warehouse === "1415").length


//wet loads
const Whse_222_wet = WetLoads.filter(load => load.Wets === 222).length
const Whse_226_wet = WetLoads.filter(load => load.Wets === 226).length
const Whse_230_wet = WetLoads.filter(load => load.Wets === 230).length
const Whse_237_wet = WetLoads.filter(load => load.Wets === 237).length
const Whse_240_wet = WetLoads.filter(load => load.Wets === 240).length
const Whse_241_wet = WetLoads.filter(load => load.Wets === 241).length
const Whse_243_wet = WetLoads.filter(load => load.Wets === 243).length
const Whse_244_wet = WetLoads.filter(load => load.Wets === 244).length
const Whse_245_wet = WetLoads.filter(load => load.Wets === 245).length
const Whse_246_wet = WetLoads.filter(load => load.Wets === 246).length
const Whse_248_wet = WetLoads.filter(load => load.Wets === 248).length
const Whse_305_wet = WetLoads.filter(load => load.Wets === 305).length
const Whse_306_wet = WetLoads.filter(load => load.Wets === 306).length
const Whse_310_wet = WetLoads.filter(load => load.Wets === 310).length
const Whse_315_wet = WetLoads.filter(load => load.Wets === 315).length
const Whse_316_wet = WetLoads.filter(load => load.Wets === 316).length
const Whse_318_wet = WetLoads.filter(load => load.Wets === 318).length
const Whse_320_wet = WetLoads.filter(load => load.Wets === 320).length
const Whse_321_wet = WetLoads.filter(load => load.Wets === 321).length
const Whse_322_wet = WetLoads.filter(load => load.Wets === 322).length
const Whse_323_wet = WetLoads.filter(load => load.Wets === 323).length
const Whse_324_wet = WetLoads.filter(load => load.Wets === 324).length
const Whse_326_wet = WetLoads.filter(load => load.Wets === 326).length
const Whse_329_wet = WetLoads.filter(load => load.Wets === 329).length
const Whse_729_wet = WetLoads.filter(load => load.Wets === 729).length
const Whse_739_wet = WetLoads.filter(load => load.Wets === 739).length
const Whse_749_wet = WetLoads.filter(load => load.Wets === 749).length
const Whse_1025_wet = WetLoads.filter(load => load.Wets === 1025).length
const Whse_1062_wet = WetLoads.filter(load => load.Wets === 1062).length
const Whse_1070_wet = WetLoads.filter(load => load.Wets === 1070).length
const Whse_1081_wet = WetLoads.filter(load => load.Wets === 1081).length
const Whse_1093_wet = WetLoads.filter(load => load.Wets === 1093).length
const Whse_1103_wet = WetLoads.filter(load => load.Wets === 1103).length
const Whse_1114_wet = WetLoads.filter(load => load.Wets === 1114).length
const Whse_1166_wet = WetLoads.filter(load => load.Wets === 1166).length
const Whse_1174_wet = WetLoads.filter(load => load.Wets === 1174).length
const Whse_1177_wet = WetLoads.filter(load => load.Wets === 1177).length
const Whse_1199_wet = WetLoads.filter(load => load.Wets === 1199).length
const Whse_1211_wet = WetLoads.filter(load => load.Wets === 1211).length
const Whse_1214_wet = WetLoads.filter(load => load.Wets === 1214).length
const Whse_1215_wet = WetLoads.filter(load => load.Wets === 1215).length
const Whse_1236_wet = WetLoads.filter(load => load.Wets === 1236).length
const Whse_1334_wet = WetLoads.filter(load => load.Wets === 1334).length
const Whse_1415_wet = WetLoads.filter(load => load.Wets === 1415).length

//Held loads

const Whse_222_held = HeldLoads.filter(load => load.Wets === 222).length
const Whse_226_held = HeldLoads.filter(load => load.Wets === 226).length
const Whse_230_held = HeldLoads.filter(load => load.Wets === 230).length
const Whse_237_held = HeldLoads.filter(load => load.Wets === 237).length
const Whse_240_held = HeldLoads.filter(load => load.Wets === 240).length
const Whse_241_held = HeldLoads.filter(load => load.Wets === 241).length
const Whse_243_held = HeldLoads.filter(load => load.Wets === 243).length
const Whse_244_held = HeldLoads.filter(load => load.Wets === 244).length
const Whse_245_held = HeldLoads.filter(load => load.Wets === 245).length
const Whse_246_held = HeldLoads.filter(load => load.Wets === 246).length
const Whse_248_held = HeldLoads.filter(load => load.Wets === 248).length
const Whse_305_held = HeldLoads.filter(load => load.Wets === 305).length
const Whse_306_held = HeldLoads.filter(load => load.Wets === 306).length
const Whse_310_held = HeldLoads.filter(load => load.Wets === 310).length
const Whse_315_held = HeldLoads.filter(load => load.Wets === 315).length
const Whse_316_held = HeldLoads.filter(load => load.Wets === 316).length
const Whse_318_held = HeldLoads.filter(load => load.Wets === 318).length
const Whse_320_held = HeldLoads.filter(load => load.Wets === 320).length
const Whse_321_held = HeldLoads.filter(load => load.Wets === 321).length
const Whse_322_held = HeldLoads.filter(load => load.Wets === 322).length
const Whse_323_held = HeldLoads.filter(load => load.Wets === 323).length
const Whse_324_held = HeldLoads.filter(load => load.Wets === 324).length
const Whse_326_held = HeldLoads.filter(load => load.Wets === 326).length
const Whse_329_held = HeldLoads.filter(load => load.Wets === 329).length
const Whse_729_held = HeldLoads.filter(load => load.Wets === 729).length
const Whse_739_held = HeldLoads.filter(load => load.Wets === 739).length
const Whse_749_held = HeldLoads.filter(load => load.Wets === 749).length
const Whse_1025_held = HeldLoads.filter(load => load.Wets === 1025).length
const Whse_1062_held = HeldLoads.filter(load => load.Wets === 1062).length
const Whse_1070_held = HeldLoads.filter(load => load.Wets === 1070).length
const Whse_1081_held = HeldLoads.filter(load => load.Wets === 1081).length
const Whse_1093_held = HeldLoads.filter(load => load.Wets === 1093).length
const Whse_1103_held = HeldLoads.filter(load => load.Wets === 1103).length
const Whse_1114_held = HeldLoads.filter(load => load.Wets === 1114).length
const Whse_1166_held = HeldLoads.filter(load => load.Wets === 1166).length
const Whse_1174_held = HeldLoads.filter(load => load.Wets === 1174).length
const Whse_1177_held = HeldLoads.filter(load => load.Wets === 1177).length
const Whse_1199_held = HeldLoads.filter(load => load.Wets === 1199).length
const Whse_1211_held = HeldLoads.filter(load => load.Wets === 1211).length
const Whse_1214_held = HeldLoads.filter(load => load.Wets === 1214).length
const Whse_1215_held = HeldLoads.filter(load => load.Wets === 1215).length
const Whse_1236_held = HeldLoads.filter(load => load.Wets === 1236).length
const Whse_1334_held = HeldLoads.filter(load => load.Wets === 1334).length
const Whse_1415_held = HeldLoads.filter(load => load.Wets === 1415).length
const menuItems = [
    {
        text: 'All Loads',
        onClick: () => { console.log('All loads') }
    },
    {
        text: 'Dry Loads',
        onClick: () => { console.log('Dry Loads') }
    },
    {
        text: 'Wet Loads',
        onClick: () => { console.log('Wet Loads') }
    }
]
function WhseLoadCount(props) {
    const [loadCount, setloadCount] = useState(true)
    const store = { ...StoreList }
    return (


        StoreList.map(store => (
            <div className="whse-id__container">
                <div className="main-context-container">
                    <ContextContainer className="context-container">
                        <div className="context-container__store-id">{store.storeID}</div>
                    </ContextContainer>
                </div>
                <div className="whse-loadCount-container">
                    <div className="whse-count-dry">{Whse_222}</div>
                    <div className="whse-count-wet">{Whse_222_wet}</div>
                    <div className="whse-count-held">{Whse_222_held}</div>
                </div>
            </div>

        )))
}



export default WhseLoadCount
