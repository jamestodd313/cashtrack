import { useEffect, useState } from 'react'
import {convertToDollars} from '../../../util/convertToDollars'
export const TableRow = ({transactions, item, value, change}) => {
    const [showingValue, setShowingValue] = useState(true)
    const [amount, setAmount] = useState(null)
    
    useEffect(()=>{
        let obj = convertToDollars(value)
        setAmount(obj.value)
    },[value])
    
    return (
        <tr className="table-row table-row--2col">
            <td className="table-left">
                <span className="new-items">{transactions}</span>{item}
            </td>
            <td className="table-right" onClick={e=> setShowingValue(!showingValue)}>
                {amount}
            </td>
        </tr>
    )
}
