import {useEffect} from 'react'

export const TimePeriodSelector = ({time, setTime}) => {
    useEffect(() => {
        let btns = document.querySelectorAll('button.time-option')
        btns.forEach(btn=>{
            btn.addEventListener('click', (e)=>{
                setTime(e.target.dataset.id)
            })
        })
        return () => {
            btns.forEach(btn=>{
                btn.removeEventListener('click', (e)=>{
                    setTime(e.target.dataset.id)
                })
            })
        }
    }, [])
    return (
        <div className="time-period-selector">
            <button className={`time-option${time === 'day' ? ' time-option--selected':''}`} data-id="day">Day</button>
            <button className={`time-option${time === 'week' ? ' time-option--selected':''}`} data-id="week">Week</button>
            <button className={`time-option${time === 'month' ? ' time-option--selected':''}`} data-id="month">Month</button>
            <button className={`time-option${time === 'quarter' ? ' time-option--selected':''}`} data-id="quarter">Quarter</button>
            <button className={`time-option${time === 'year' ? ' time-option--selected':''}`} data-id="year">Year</button>
        </div>
    )
}
