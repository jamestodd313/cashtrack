import React from 'react'
import { OverviewTable } from './OverviewTable'
import { TableHeader } from './TableHeader'

export const TableSection = ({title, tableData}) => {
    return (
        <section className="table-section">
            <TableHeader title={title} highlight={tableData.highlight}/>
            <OverviewTable tableData={tableData}/>
        </section>
    )
}
