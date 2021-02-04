import { useEffect, useState } from 'react'
import {convertToDollars} from '../../../util/convertToDollars'

export const TableHeader = ({title, highlight}) => {
    const [amount, setAmount] = useState(null)
    const [gain, setGain] = useState(true)
    
    useEffect(()=>{
        let obj = convertToDollars(highlight)
        setAmount(obj.value)
        setGain(obj.gain)
    },[highlight])

    return (
        <header className="table-section__header">
            <h2>{title}</h2>
            <span className={`highlight highlight--${gain ? 'gain':'loss'}`}>{gain ? '+' : '-'}{amount}</span>
        </header>
    )
}
