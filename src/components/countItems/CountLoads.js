
import React from 'react'
import As400 from '../../utils/As400'
import './CountLoads.css'


const CountLoads = (props) => {
    const count =  As400.reduce((counter, obj) => obj.warehouse === props.warehouse ? counter += 1 : counter,0)
    console.log(count)
    return (
      <div className="item-count">{count}</div>
      
        )
    }

export default CountLoads
