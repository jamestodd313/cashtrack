import { useEffect, useState } from 'react'
import {Line, Bar, Doughnut, } from 'react-chartjs-2'

export const Graph = ({data, variant}) => {
    const [formattedData, setFormattedData] = useState({})
    const [view, setView] = useState(variant)
    const formatData = (obj)=> {
        let template = {
            labels: ["S", "M", "T", "W", "TH", "F", "S"],
            datasets: [
                {
                    data: [113, 231, 234, 412, 332, 412, 224],
                    backgroundColor: view === 'line' ? 'transparent' : view === 'doughnut' ? ['rgba(255,255,255,0.60)', 'rgba(255,255,255,0.40)', 'rgba(255,255,255,0.20)', 'rgba(255,255,255,0.70)', 'rgba(255,255,255,0.10)', 'rgba(255,255,255,0.30)', 'rgba(255,255,255,0.50)',] : null,
                    borderColor: view === 'line' ? '#bcec37' : 'transparent',
                    borderWidth: 3
                    
                }
            ],
        }
        return template
    }
    useEffect(()=>{
        setFormattedData(formatData(data))
    }, [data || view])

    function changeView(){
        console.log('elo')
        if(view === 'line') setView('doughnut')
        else setView('line')
    }
    const graphOptions = {
        legend: {
            display: false
        },
        layout: {
            padding: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 0
            }
        },
        scales: {
            yAxes: [{display: false}],
            xAxes: [{display: false}]
        }
    }

    return (
        <div className="graph-container">
            <header className="graph-header">
                <h2 className="graph-title">Total Balance</h2>
                <span className="balance highlight">$5,027,313.93</span>
                <div className="change pl pl--gain">+$18,042.32</div>
            </header>
            {view === "line" ? <Line data={formattedData} options={graphOptions}/> : view === "doughnut" ? <Doughnut data={formattedData} options={graphOptions}/> : null}
            <div className="indicators">
                <button className={view === "line" ? "indicator indicator--active" : "indicator"} data-view="line" onClick={e=> setView(e.target.dataset.view)}></button>
                <button className={view === "doughnut" ? "indicator indicator--active" : "indicator"} data-view="doughnut" onClick={e=> setView(e.target.dataset.view)}></button>
            </div>
        </div>
    )
}



// legend={{display: false}} layout={{padding: 16}}
