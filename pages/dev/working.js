import { useEffect } from 'react'
import {formatLineData} from '../../util/formatLineData'
export default function working({accountsData}){
    useEffect(()=>{
        formatLineData(accountsData)
    }, [accountsData])
    return (
        "ayyyyyyyy"
    )
}

working.getInitialProps = async ctx => {
    const call = await fetch('http://localhost:3000/api/accounts')
    const resp = await call.json()
    return { accountsData: resp }
}