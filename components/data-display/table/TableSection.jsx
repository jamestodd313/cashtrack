import {useState, useEffect} from 'react'
import { OverviewTable } from './OverviewTable'
import { TableHeader } from './TableHeader'

export const TableSection = ({title, tableData, time}) => {
    const [dataToShow, setDataToShow] = useState({})
    useEffect(()=>{
        setDataToShow(tableData[time])
    }, [time, title])
    return (
        <section className="table-section">
            <TableHeader title={title} highlight={dataToShow.highlight ? dataToShow.highlight : 0}/>
            <OverviewTable tableData={dataToShow}/>
        </section>
    )
}


