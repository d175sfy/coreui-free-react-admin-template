import React from 'react'
import As400 from '../../utils/As400'

function CountLoads(props) {
    return (
        As400.filter(load => load.warehouse === props)
            .map( load => (
                <div>
                    {load}
                </div>
            
        ) )
    )  
    }

export default CountLoads
