import React from 'react'
import As400 from '../utils/As400'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import './DryAs400.css'

function DryAs400() {
    return (
        <div className="main-container">
            {As400.map(load => (
                <React.Fragment>
                    <div className="dry-load-container">
                        <label className="label-container">
                            <input type="checkbox" />
                            <svg width="32" height="32" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
                                {/* <!-- The background --> */}
                                <rect class="checkbox__bg" width="35" height="35" x="-2" y="-2" stroke="currentColor" fill="none" stroke-width="3" rx="6"
                                    ry="6"></rect>
                                {/* <!-- The checkmark--> */}
                                <polyline class="checkbox__checkmark" points="4,14 12,23 28,5" stroke="transparent" stroke-width="4" fill="none"></polyline>
                            </svg>
                            <span className="checkmark"></span>
                        </label>
                        <div className="store">{load.Warehouse}</div>
                        <div className="store">{load.Time}</div>
                        <div className="store">{load.Date}</div>
                        <div className="store">{load.Status}</div>
                        <div className="store">{load.LoadNumber}</div>
                        <div className="store">{load.Trailer}</div>
                        <div className="store">{load.Seal}</div>
                    </div>
                </React.Fragment>
            ))

            }
        </div>
    )
}

export default DryAs400

