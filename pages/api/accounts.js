export default function accounts(req, res){
    const accountsData = [
        { 
            type: 'Checking',
            bank: 'US Bank',
            balance: 17829.40,
            transactions: [
                {
                    month: 'February 2021',
                    transactions: [
                        {
                            type: 'purchase',
                            amount: 6.69,
                            date: '2021-02-01T19:41:35+0000',
                            toFrom: 'Starbucks',
                            category: 'Dining & Drinks',
                            runningBalance: 16792.31
                        },
                        {
                            type: 'purchase',
                            amount: 194.86,
                            date: '2021-02-01T19:41:35+0000',
                            toFrom: 'Amazon',
                            category: 'Shopping',
                            runningBalance: 16785.62
                        },
                        {
                            type: 'direct deposit',
                            amount: 9650.47,
                            date: '2021-02-02T19:41:35+0000',
                            toFrom: 'Solasa',
                            category: 'Paycheck',
                            runningBalance: 26436.09
                        },
                        {
                            type: 'purchase',
                            amount: 6.69,
                            date: '2021-02-04T19:41:35+0000',
                            toFrom: 'Starbucks',
                            category: 'Dining & Drinks',
                            runningBalance: 26429.40
                        },
                        {
                            type: 'transfer out',
                            amount: 6000.00,
                            date: '2021-02-04T19:41:35+0000',
                            toFrom: 'Vanguard',
                            category: 'Investing',
                            runningBalance:  20429.40
                        },
                        {
                            type: 'transfer out',
                            amount: 2600.00,
                            date: '2021-02-06T19:41:35+0000',
                            toFrom: 'FBG Properties',
                            category: 'Bills & Utilities',
                            runningBalance: 17829.40
                        },
                    ]
                }
            ]
        },
        { 
            type: 'Savings',
            bank: 'US Bank',
            balance: 396819.93,
            transactions: [
                {
                    month: 'March 2020',
                    transactions: [
                        {
                            type: 'purchase',
                            amount: 6.69,
                            date: '2020-03-01T19:41:35+0000',
                            toFrom: 'Starbucks',
                            category: 'Dining & Drinks',
                            runningBalance: 396819.93
                        },
                    ]
                }
            ]
        },
    
    ]
    res.status(200).json(accountsData)
}

