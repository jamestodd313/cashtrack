import { useEffect, useState } from "react"
import { BorderButton } from "../../buttons/BorderButton"
import { TableRow } from "./TableRow"

export const OverviewTable = ({tableData}) => {
    return (
        <table className="overview-table">
            <thead>
                <tr>
                    <th className="table-head table-head--invisible">Item/Items</th>
                    <th className="table-head table-head--invisible">Amount</th>
                </tr>
            </thead>
            <tbody>
                {tableData.items ? tableData.items.map(row=> <TableRow key={`${row.item}-${Math.floor(Math.random() * 52387 * Math.floor(Math.random() * 23324))}`} transactions={row.transactions} item={row.item} value={row.value} change={row.change}/>) : null}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">
                        <BorderButton text="See Transactions" link="/"/>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}
