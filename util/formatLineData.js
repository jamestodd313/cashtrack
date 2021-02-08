export const formatLineData = accountsData => {
    let totalBalance = 0
    const calculateTotalBalance = balanceToAdd=> totalBalance += balanceToAdd
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

    const generateDate = (num) => {
        let dateRef = new Date()
        dateRef.setDate(dateRef.getDate() - num)
        dateRef = new Date(dateRef).toDateString()
        return dateRef
    }
    const calculateWeekData = month => {
        let today = new Date().toDateString()
        let yesterday = generateDate(1)
        let twoAgo = generateDate(2)
        let threeAgo = generateDate(3)
        let fourAgo = generateDate(4)
        let fiveAgo = generateDate(5)
        let sixAgo = generateDate(5)
        let weekAgo = generateDate(5)

        let thisWeek = {
                [today]: [],
                [yesterday]: [],
                [twoAgo]: [],
                [threeAgo]: [],
                [fourAgo]: [],
                [fiveAgo]: [],
                [sixAgo]: [],
                [weekAgo]: [],
        }
        month.transactions.forEach(transaction=>{
            let dateRef = new Date(transaction.date).toDateString()
            switch(dateRef){
                case today:
                    if(thisWeek[today].length > 0){
                        if(today[0] > transaction.date) return
                        else thisWeek[today] = [transaction.runningBalance]
                    }else{
                        thisWeek[today].push(transaction.runningBalance)
                    }
                    break
                case yesterday:
                    if(thisWeek[yesterday].length > 0){
                        if(yesterday[0] > transaction.date) return
                        else thisWeek[yesterday] = [transaction.runningBalance]
                    }else{
                        thisWeek[yesterday].push(transaction.runningBalance)
                    }
                    break
                case twoAgo:
                    if(thisWeek[twoAgo].length > 0){
                        if(twoAgo[0] > transaction.date) return
                        else thisWeek[twoAgo] = [transaction.runningBalance]
                    }else{
                        thisWeek[twoAgo].push(transaction.runningBalance)
                    }
                    break
                case threeAgo:
                    if(thisWeek[threeAgo].length > 0){
                        if(threeAgo[0] > transaction.date) return
                        else thisWeek[threeAgo] = [transaction.runningBalance]
                    }else{
                        thisWeek[threeAgo].push(transaction.runningBalance)
                    }
                    break
                case fourAgo:
                    if(thisWeek[fourAgo].length > 0){
                        if(fourAgo[0] > transaction.date) return
                        else thisWeek[fourAgo] = [transaction.runningBalance]
                    }else{
                        thisWeek[fourAgo].push(transaction.runningBalance)
                    }
                    break
                case fiveAgo:
                    if(thisWeek[fiveAgo].length > 0){
                        if(fiveAgo[0] > transaction.date) return
                        else thisWeek[fiveAgo] = [transaction.runningBalance]
                    }else{
                        thisWeek[fiveAgo].push(transaction.runningBalance)
                    }
                    break
                case sixAgo:
                    if(thisWeek[sixAgo].length > 0){
                        if(sixAgo[0] > transaction.date) return
                        else thisWeek[sixAgo] = [transaction.runningBalance]
                    }else{
                        thisWeek[sixAgo].push(transaction.runningBalance)
                    }
                    break
                case weekAgo:
                    if(thisWeek[weekAgo].length > 0){
                        if(weekAgo[0] > transaction.date) return
                        else thisWeek[weekAgo] = [transaction.runningBalance]
                    }else{
                        thisWeek[weekAgo].push(transaction.runningBalance)
                    }
                    break
                default:
                    break
            }
        })

        
        console.log(thisWeek)
        // console.log({today, yesterday, twoAgo, threeAgo, fourAgo, fiveAgo, sixAgo, weekAgo})
    }





// FIGURE OUT HOW TO FILL INN THE EMPTY SPACES IN THE THISWEEK ARRAY. GOOD LUCK. I DONT REMEMBER HOW I DID THIS AND I DID IT LIKE 5 MINS AGO SO HOPEFULLY FUTURE ME CAN FGURE IT OUT





    //===================
    accountsData.forEach(acct=> {
        calculateTotalBalance(acct.balance)
        calculateMonthData(acct.transactions)
        calculateDayData(acct.transactions)
        calculateWeekData(acct.transactions[0])
    })

    // console.log({totalBalance, monthData, dayData})
    return( {totalBalance, monthData, dayData} )
}