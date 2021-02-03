import React from 'react'
import { OverviewTable } from './OverviewTable'
import { TableHeader } from './TableHeader'

export const TableSection = () => {
    return (
        <section className="table-section">
            <TableHeader/>
            <OverviewTable/>
        </section>
    )
}
