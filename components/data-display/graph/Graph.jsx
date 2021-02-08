import { useEffect, useState } from 'react'
import {Line, Bar, Doughnut, } from 'react-chartjs-2'
import { convertToDollars } from '../../../util/convertToDollars'

export const Graph = ({data, variant, time, title}) => {
    const [formattedData, setFormattedData] = useState({})
    const [view, setView] = useState('line')
    const [change, setChange] = useState(0)
    const shuffle = arr => {
        let currentIndex = arr.length, temporaryValue, randomIndex
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = arr[currentIndex]
          arr[currentIndex] = arr[randomIndex]
          arr[randomIndex] = temporaryValue
        }
        return arr
    }
    const formatData = obj => {
        let template = {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: view === 'line' ? 'transparent' : view === 'doughnut' ? shuffle(['#421869', '#491a74', '#721cb8', '#995bd5', '#bf99f2', '#9cf945', '#8edf34', '#80c423', '#509724', '#1f6924', '#5390d9', '#4ea8de', '#48bfe3', '#56cfe1', '#64dfdf', '#72efdd', '#80ffdb', '#421869', '#491a74', '#721cb8', '#995bd5', '#bf99f2', '#9cf945', '#8edf34', '#80c423', '#509724', '#1f6924', '#5390d9', '#4ea8de', '#48bfe3', '#56cfe1', '#64dfdf', '#72efdd', '#80ffdb' ]) : null,
                    borderColor: view === 'line' ? '#bcec37' : 'transparent',
                    borderWidth: 3
                }
            ],
        }
        obj.dataPoints[time].forEach(dataPoint=> {
            template.labels.push(dataPoint.label)
            template.datasets[0].data.push(dataPoint.value)
        })
        return template
    }
    const calculateChange = () => {
        // if theres no data return
        if(!formattedData.datasets[0]) return
        // find the starting and ending values
        const start = formattedData.datasets[0].data[0]
        const end = formattedData.datasets[0].data[formattedData.datasets[0].data.length - 1]
        // the change is the end - start
        return end - start
    }

    useEffect(()=>{
        // intialize view state with variant prop passed from parent
        setView(variant)
    },[variant])
    // format data passed from parent prop
    useEffect(()=>{
        setFormattedData(formatData(data))
    }, [data, view, time])
    useEffect(()=>{
       setChange(calculateChange())
    }, [formattedData, data, view, variant, time])

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
        },
        tooltips: {
            callbacks: {
                title: function(tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                label: function(tooltipItem, data) {
                    return convertToDollars(data['datasets'][0]['data'][tooltipItem['index']]).value;
                },
            }
        }
    }

    return (
        <div className="graph-container">
            <header className="graph-header">
                <h2 className="graph-title">{title}</h2>
                <span className="balance highlight">{convertToDollars(data.currentBalance).value}</span>
                {convertToDollars(change).gain >= 0 ?  <div className="change pl pl--gain">+{convertToDollars(change).value}</div> :  <div className="change pl pl--loss">-{convertToDollars(change).value}</div>}
            </header>

            {
                view === "line" ? 
                    time === 'day' ? 
                        <Line data={formattedData} options={graphOptions}/> : 
                    time === 'week' ?
                        <Line data={formattedData} options={graphOptions}/> : 
                    time === 'month' ? 
                        <Line data={formattedData} options={graphOptions}/> : 
                    time === 'quarter' ? 
                        <Line data={formattedData} options={graphOptions}/> : 
                    time === 'year' ?
                        <Line data={formattedData} options={graphOptions}/> : 
                    null : 
                view === "doughnut" ? 
                    time === 'day' ? 
                        <Doughnut data={formattedData} options={graphOptions}/> : 
                    time === 'week' ? 
                        <Doughnut data={formattedData} options={graphOptions}/> : 
                    time === 'month' ? 
                        <Doughnut data={formattedData} options={graphOptions}/> : 
                    time === 'quarter' ? 
                        <Doughnut data={formattedData} options={graphOptions}/> : 
                    time === 'year' ? 
                        <Doughnut data={formattedData} options={graphOptions}/> :
                    null :
                null
            }


            <div className="indicators">
                <button className={view === "line" ? "indicator indicator--active" : "indicator"} data-view="line" onClick={e=> setView(e.target.dataset.view)}></button>
                <button className={view === "doughnut" ? "indicator indicator--active" : "indicator"} data-view="doughnut" onClick={e=> setView(e.target.dataset.view)}></button>
            </div>
        </div>
    )
}

// REQUIREMENTS:
// Time state in the parent component.
// TimePeriodSelector in the parent component to control state.
// JSON MUST BE FORMATTED CORRECTLY.
// Import convertToDollars() from util

// USAGE:
// This Graph component is a responsive contanier for dymanic graphs.
// Variants determine which style of graph will be displayed. The options are line and doughnut. 
// This Component has 3 required arguments. 
    // Data, the data to be displayed. More detail below. 
    // Time, the time period to get data for. 
        // Init a [time, setTime] state in the page component. Control the value with TimePeriodSelector component. Pass value to this component.
    // Variant, the type of chart to be displayed. [bar || doughnut]

// Data object 
    // This data will be run through the formatData() function and broken down into objects that chartjs can use.
    // {
        // currentBalance: number,  /*this is the current total for whatever data is being displayed */
        // dataPoints: { day:[{ label, value}], week: [{label, value}], month: [{label, value}], quarter:[{label, value}], year:[{label, value}]}
    // }

