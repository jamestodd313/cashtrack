export const formatLineData = accountsData => {
    let totalBalance = 0
    const calculateTotalBalance = balanceToAdd => totalBalance += balanceToAdd
    //===================
    let monthData = []
    const calculateMonthData = months => {
        months.forEach(month=>{
            let {transactions} = month
            let balanceOfLastTransaction = transactions[transactions.length - 1].runningBalance
            if(monthData.some(datapoint=> datapoint.label === month.month)){
                let indexOfObjectToUpdate = monthData.findIndex(function(obj){return obj.label == month.month})
                monthData[indexOfObjectToUpdate].value += balanceOfLastTransaction
            } 
            else monthData.push({label: month.month, value: balanceOfLastTransaction})
        })
    }
    //===================
    let dayData = []
    const calculateDayData = months => {
        const thisMonth = months[0]
        let today = new Date().toDateString()
        let startingBalance = undefined
        thisMonth.transactions.forEach(trans=>{
            let transDate = new Date(trans.date).toDateString()
            if(transDate === today) startingBalance = trans.runningBalance
        })
        if(startingBalance === undefined) startingBalance = thisMonth.transactions[thisMonth.transactions.length - 1].runningBalance
        const currentBalance = thisMonth.transactions[thisMonth.transactions.length - 1].runningBalance

        dayData = [{label: '12 AM', value: startingBalance}, {label: 'Now', value: currentBalance}]
        return dayData
    }
    //===================














    let weekData = []
    const generateDate = num => {
        let dateRef = new Date()
        dateRef.setDate(dateRef.getDate() - num)
        dateRef = new Date(dateRef).toDateString()
        return dateRef
    }
    const calculateWeekData = month => {
        console.log(month)
    //     let today = new Date().toDateString()
    //     let yesterday = generateDate(1)
    //     let twoAgo = generateDate(2)
    //     let threeAgo = generateDate(3)
    //     let fourAgo = generateDate(4)
    //     let fiveAgo = generateDate(5)
    //     let sixAgo = generateDate(6)
    //     let weekAgo = generateDate(7)

    //     weekData = [
    //         {label: [today], value: 0},
    //         {label: [yesterday], value: 0},
    //         {label: [twoAgo], value: 0},
    //         {label: [threeAgo], value: 0},
    //         {label: [fourAgo], value: 0},
    //         {label: [fiveAgo], value: 0},
    //         {label: [sixAgo], value: 0},
    //         {label: [weekAgo], value: 0},
    //     ]

    //     month.transactions.forEach(transaction=> {
    //         const transactionDateAsDateString = new Date(transaction.date).toDateString()
    //         weekData.forEach(day=> {
    //             if(day.label == transactionDateAsDateString) day.value = transaction.runningBalance
    //         })
    //     })
    //     weekData.forEach(day=>{
    //         if(day.value === 0){
    //             // if the days value is zero then we need to change it to the previous or next balance that isnt zero
                
    //             // and if it's today (element 0 in the weekData array) then we'll update the balance to the next day




    //             // let indexOfDay = weekData.indexOf(day)
    //             // if(indexOfDay === 0){
    //             //     let nextDayValue = weekData[indexOfDay + 1].value
    //             //     day.value = nextDayValue
    //             // }else if(indexOfDay === weekData.length){
    //             //     let prevDayValue = weekData[indexOfDay - 1].value
    //             //     day.value = prevDayValue
    //             // }
                
    //         }else{
    //             return
    //         }
    
    //     })
    //     console.log(weekData)

    }














    //===================
    accountsData.forEach(acct=> {
        calculateTotalBalance(acct.balance)
        calculateMonthData(acct.transactions)
        calculateDayData(acct.transactions)
        calculateWeekData(acct.transactions[0])
    })

    return( {totalBalance, monthData, dayData, weekData} )
}
