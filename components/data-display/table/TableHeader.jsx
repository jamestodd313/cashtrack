import { useEffect, useState } from 'react'
import {convertToDollars} from '../../../util/convertToDollars'

export const TableHeader = ({title, balance, change}) => {
    const [showingBalance, setShowingBalance] = useState(true)
    return (
        <header className="table-section__header">
            <h2>{title}</h2>
            {showingBalance ? (
                <span className={`highlight highlight--${balance >= 0 ? 'gain' : 'loss'}`} onClick={e=> setShowingBalance(!showingBalance)}>{convertToDollars(balance).value}</span>
            ) : (
                <span className={`highlight highlight--${change >= 0 ? 'gain' : 'loss'}`} onClick={e=> setShowingBalance(!showingBalance)}>{convertToDollars(change).gain ? '+' : '-' }{convertToDollars(change).value}</span>
            )}
        </header>
    )
}
