import React from 'react'

export const TimePeriodSelector = ({time, setTime}) => {
    return (
        <div className="time-period-selector">
            <button className="time-option">Day</button>
            <button className="time-option time-option--selected">Week</button>
            <button className="time-option">Month</button>
            <button className="time-option">Quarter</button>
            <button className="time-option">Year</button>
        </div>
    )
}
