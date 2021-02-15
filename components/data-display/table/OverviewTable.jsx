import { useEffect, useState } from "react"
import { BorderButton } from "../../buttons/BorderButton"
import { TableRow } from "./TableRow"

export const OverviewTable = ({data, acctType}) => {
    return (
        <table className="overview-table">
            <thead>
                <tr>
                    <th className="table-head table-head--invisible">Item/Items</th>
                    <th className="table-head table-head--invisible">Amount</th>
                </tr>
            </thead>
            <tbody>

                {!data ? 'loading...' : (
                    acctType === 'checking' ? (
                        <>
                        <TableRow transactions={data.deposits.length} item={'Deposits'} value={data.deposits.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.withdrawals.length} item={'Withdrawals'} value={data.withdrawals.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.purchases.length} item={'Purchases'} value={data.purchases.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.transfers.length} item={'Transfers'} value={data.transfers.reduce((a,b)=> a + b, 0)}/>
                        </>
                    ) : acctType === 'savings' ? (
                        <>
                        <TableRow transactions={data.deposits.length} item={'Deposits'} value={data.deposits.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.withdrawals.length} item={'Withdrawals'} value={data.withdrawals.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.interest.length === 0 ? '0%' : '0.22%'} item={'Interest'} value={data.interest.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.transfers.length} item={'Transfers'} value={data.transfers.reduce((a,b)=> a + b, 0)}/>
                        </>
                    ) : acctType === 'investing' ? (
                        <>
                        <TableRow transactions={[]} item={'Market P/L'} value={data.pl}/>
                        <TableRow transactions={data.dividends.length} item={'Dividends'} value={data.dividends.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.deposits.length} item={'Deposits'} value={data.deposits.reduce((a,b)=> a + b, 0)}/>
                        <TableRow transactions={data.withdrawals.length} item={'Withdrawals'} value={data.withdrawals.reduce((a,b)=> a + b, 0)}/>
                        </>
                    ) : "Something went wrong. Please try again."
                )}
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
