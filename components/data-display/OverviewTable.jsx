import { BorderButton } from "../buttons/BorderButton"
import { TableRow } from "./TableRow"

export const OverviewTable = () => {
    return (
        <table className="overview-table">
            <thead>
                <tr>
                    <th className="table-head table-head--invisible">Item/Items</th>
                    <th className="table-head table-head--invisible">Amount</th>
                </tr>
            </thead>
            <tbody>
                <TableRow transactions="1" item="Direct Deposit" value="9,650.87" change="9,650.87"/>
                <TableRow transactions="0" item="Cash/Check Deposits" value="9,650.87" change="9,650.87"/>
                <TableRow transactions="0" item="Transfers" value="9,650.87" change="9,650.87"/>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">
                        <BorderButton text="See More" link="/"/>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}
