import React from 'react'

export const TableRow = ({transactions, item, value}) => {
    return (
        <tr className="table-row table-row--2col">
            <td className="table-left">
                <span className="new-items">{transactions}</span>{item}
            </td>
            <td className="table-right">
                ${value}
            </td>
        </tr>
    )
}
