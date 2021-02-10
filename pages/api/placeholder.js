export default function placeholder(req, res){
    let placeholderData
    switch(req.query.page){
        case 'home':
            placeholderData={
                accountBalance: {
                    currentBalance: 214992.65,
                    dataPoints: {
                        day:[
                            {label: '12 AM', value: 213105.03},
                            {label: 'Now', value: 214992.65}
                        ], 
                        week:[
                            {label: 'Sunday', value: 198430.23}, 
                            {label: 'Monday', value: 200013.45}, 
                            {label: 'Tuesday', value: 203642.04}, 
                            {label: 'Wednesday', value: 199103.45}, 
                            {label: 'Thursday', value:201905.43}, 
                            {label: 'Friday', value: 204332.56}, 
                            {label: 'Saturday', value: 214992.65}
                        ], 
                        month:[
                            {label: "12/1", value: 203597.28},
                            {label: "12/2", value: 209575.92},
                            {label: "12/3", value: 207981.18},
                            {label: "12/4", value: 208597.28},
                            {label: "12/5", value: 225859.32},
                            {label: "12/6", value: 219754.76},
                            {label: "12/7", value: 176073.34},
                            {label: "12/8", value: 185294.22},
                            {label: "12/9", value: 189420.13},
                            {label: "12/10", value: 195333.90},
                            {label: "12/11", value: 194889.45},
                            {label: "12/12", value: 197996.65},
                            {label: "12/13", value: 196362.33},
                            {label: "12/14", value: 190398.12},
                            {label: "12/15", value: 200097.04},
                            {label: "12/16", value: 201123.54},
                            {label: "12/17", value: 200748.65},
                            {label: "12/18", value: 199702.01},
                            {label: "12/19", value: 204129.09},
                            {label: "12/21", value: 204192.65},
                            {label: "12/22", value: 205650.90},
                            {label: "12/23", value: 208996.56},
                            {label: "12/24", value: 206542.22},
                            {label: "12/25", value: 208016.76},
                            {label: "12/26", value: 212934.03},
                            {label: "12/27", value: 211670.87},
                            {label: "12/28", value: 212009.02},
                            {label: "12/29", value: 210938.24},
                            {label: "12/30", value: 213002.84},
                            {label: "12/31", value: 214992.65},
                        ], 
                        quarter: [
                            {label: 'September', value: 203889.34},
                            {label: 'October', value: 195333.90},
                            {label: 'November', value: 203889.45},
                            {label: 'December', value: 214992.65},
                        ],
                        year:[
                            {label: "January", value: 125334.13},
                            {label: "February", value: 132964.34},
                            {label: "March", value: 128853.56},
                            {label: "April", value: 131749.67},
                            {label: "May", value: 155859.32},
                            {label: "June", value: 149754.76},
                            {label: "July", value: 156073.34},
                            {label: "August", value: 165294.22},
                            {label: "September", value: 179420.13},
                            {label: "October", value: 195333.90},
                            {label: "November", value: 203889.45},
                            {label: "December", value: 214992.65},
                        ]
                    }
                },
                incomeData:{
                    day: {
                        highlight: 0.00,
                        items: [
                            {
                                item: 'Direct Deposits',
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            { 
                                item: "Cash/Check Deposits",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            { 
                                item: "Transfers",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ],
                    },
                    week: {
                        highlight: 5650.87,
                        items: [
                            {
                                item: 'Direct Deposits',
                                transactions: 1,
                                value: 5650.87,
                                change: 5650.87
                            },
                            { 
                                item: "Cash/Check Deposits",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            { 
                                item: "Transfers",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ],
                    },
                    month: {
                        highlight: 9650.87,
                        items: [
                            {
                                item: 'Direct Deposits',
                                transactions: 1,
                                value: 9650.87,
                                change: 9650.87
                            },
                            { 
                                item: "Cash/Check Deposits",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            { 
                                item: "Transfers",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ],
                    },
                    quarter: {
                        highlight: 9650.87,
                        items: [
                            {
                                item: 'Direct Deposits',
                                transactions: 1,
                                value: 9650.87,
                                change: 9650.87
                            },
                            { 
                                item: "Cash/Check Deposits",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            { 
                                item: "Transfers",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ],
                    },
                    year: {
                        highlight: 9650.87,
                        items: [
                            {
                                item: 'Direct Deposits',
                                transactions: 1,
                                value: 9650.87,
                                change: 9650.87
                            },
                            { 
                                item: "Cash/Check Deposits",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            { 
                                item: "Transfers",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ],
                    },
                    
                },
                spendingData:{
                    day: {
                        highlight: -56.12,
                        items: [
                            {
                                item: "Purchases",
                                transactions: 3,
                                value: 56.12,
                                change: -56.12
                            },
                            {
                                item: "Withdrawals",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            {
                                item: "Transfers",
                                transactions: 0,
                                value: 0,
                                change: 0
                            },
                        ]
                    },
                    week: {
                        highlight: -862.56 - 302.75,
                        items: [
                            {
                                item: "Purchases",
                                transactions: 1,
                                value: 862.56,
                                change: -862.56
                            },
                            {
                                item: "Withdrawals",
                                transactions: 1,
                                value: 302.75,
                                change: -302.75
                            },
                            {
                                item: "Transfers",
                                transactions: 0,
                                value: 0,
                                change: 0
                            },
                        ]
                    },
                    month: {
                        highlight: -862.56 - 302.75,
                        items: [
                            {
                                item: "Purchases",
                                transactions: 1,
                                value: 862.56,
                                change: -862.56
                            },
                            {
                                item: "Withdrawals",
                                transactions: 1,
                                value: 302.75,
                                change: -302.75
                            },
                            {
                                item: "Transfers",
                                transactions: 0,
                                value: 0,
                                change: 0
                            },
                        ]
                    },
                    quarter: {
                        highlight: -862.56 - 302.75,
                        items: [
                            {
                                item: "Purchases",
                                transactions: 1,
                                value: 862.56,
                                change: -862.56
                            },
                            {
                                item: "Withdrawals",
                                transactions: 1,
                                value: 302.75,
                                change: -302.75
                            },
                            {
                                item: "Transfers",
                                transactions: 0,
                                value: 0,
                                change: 0
                            },
                        ]
                    },
                    year: {
                        highlight: -862.56 - 302.75,
                        items: [
                            {
                                item: "Purchases",
                                transactions: 1,
                                value: 862.56,
                                change: -862.56
                            },
                            {
                                item: "Withdrawals",
                                transactions: 1,
                                value: 302.75,
                                change: -302.75
                            },
                            {
                                item: "Transfers",
                                transactions: 0,
                                value: 0,
                                change: 0
                            },
                        ]
                    },
                   
                },
                savingData: {
                    day: {
                        highlight: 0.00,
                        items: [
                            {
                            item: "Deposits",
                            transactions: 0,
                            value: 0.00,
                            change: 0.00
                            },
                            {
                            item: "Withdrawals",
                            transactions: "0",
                            value: 0.00,
                            change: 0.00
                            },
                            {
                            item: "Interest",
                            transactions: "0%",
                            value: 616.24,
                            change: 0.00
                            },
                    
                        ]
                    },
                    week: {
                        highlight: 5000.00,
                        items: [
                            {
                            item: "Deposits",
                            transactions: 1,
                            value: 5000.00,
                            change: 5000.00
                            },
                            {
                            item: "Withdrawals",
                            transactions: "0",
                            value: 0.00,
                            change: 0.00
                            },
                            {
                            item: "Interest",
                            transactions: "0%",
                            value: 0.00,
                            change: 0.00
                            },
                    
                        ]
                    },
                    month: {
                        highlight: 8513.39,
                        items: [
                            {
                                item: "Deposits",
                                transactions: 1,
                                value: 5000.00,
                                change: 5000.00
                            },
                            {
                                item: "Withdrawals",
                                transactions: "0",
                                value: 0.00,
                                change: 0.00
                            },
                            {
                                item: "Interest",
                                transactions: "0.22%",
                                value: 3513.39,
                                change: 3513.39
                            },
                    
                        ]
                    },
                    quarter: {
                        highlight: 5616.24,
                        items: [
                            {
                            item: "Deposits",
                            transactions: 1,
                            value: 5000.00,
                            change: 5000.00
                            },
                            {
                            item: "Withdrawals",
                            transactions: "0",
                            value: 0.00,
                            change: 0.00
                            },
                            {
                            item: "Interest",
                            transactions: "0.22%",
                            value: 616.24,
                            change: 616.24
                            },
                    
                        ]
                    },
                    year: {
                        highlight: 5616.24,
                        items: [
                            {
                            item: "Deposits",
                            transactions: 1,
                            value: 5000.00,
                            change: 5000.00
                            },
                            {
                            item: "Withdrawals",
                            transactions: "0",
                            value: 0.00,
                            change: 0.00
                            },
                            {
                            item: "Interest",
                            transactions: "0.22%",
                            value: 616.24,
                            change: 616.24
                            },
                    
                        ]
                    },
                },
                investingData:{
                    day: {
                        highlight: 1887.62 + 56.12,
                        items: [
                            {
                                item: "Market",
                                transactions: "+4.32%",
                                value: 1887.62 + 56.12,
                                change: 1887.62 + 56.12
                            },
                            {
                                item: "Dividends",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            {
                                item: "Deposits",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                            {
                                item: "Withdrawals",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ]
                    },
                    week: {
                        highlight: 6942.13,
                        items: [
                            {
                                item: "Market",
                                transactions: "+15.05%",
                                value: 6018.00,
                                change: 6018.00
                            },
                            {
                                item: "Dividends",
                                transactions: 3,
                                value: 924.13,
                                change: 924.13
                            },
                            {
                                item: "Deposits",
                                transactions: 0,
                                value: 0,
                                change: 0
                            },
                            {
                                item: "Withdrawals",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ]
                    },
                    month: {
                        highlight: 41652.45 + 7124.13 + 862.56 + 0,
                        items: [
                            {
                                item: "Market",
                                transactions: "+12%",
                                value: 41652.45,
                                change: 41652.45
                            },
                            {
                                item: "Dividends",
                                transactions: 3,
                                value: 7124.13,
                                change: 7124.13
                            },
                            {
                                item: "Deposits",
                                transactions: 1,
                                value: 862.56,
                                change: -862.56
                            },
                            {
                                item: "Withdrawals",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ]
                    },
                    quarter: {
                        highlight: 41652.45 + 7124.13 + 862.56 + 0,
                        items: [
                            {
                                item: "Market",
                                transactions: "+12%",
                                value: 41652.45,
                                change: 41652.45
                            },
                            {
                                item: "Dividends",
                                transactions: 3,
                                value: 7124.13,
                                change: 7124.13
                            },
                            {
                                item: "Deposits",
                                transactions: 1,
                                value: 862.56,
                                change: -862.56
                            },
                            {
                                item: "Withdrawals",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ]
                    },
                    year: {
                        highlight: 41652.45 + 7124.13 + 862.56 + 0,
                        items: [
                            {
                                item: "Market",
                                transactions: "+12%",
                                value: 41652.45,
                                change: 41652.45
                            },
                            {
                                item: "Dividends",
                                transactions: 3,
                                value: 7124.13,
                                change: 7124.13
                            },
                            {
                                item: "Deposits",
                                transactions: 1,
                                value: 862.56,
                                change: -862.56
                            },
                            {
                                item: "Withdrawals",
                                transactions: 0,
                                value: 0.00,
                                change: 0.00
                            },
                        ]
                    },
                }
            }
            break
        case 'cash':
            placeholderData={
                accountBalance: {
                    currentBalance: 117523.45,
                    dataPoints: {
                        day: [
                            {label: '12 AM', value: 17920.56},
                            {label: 'US Bank Savings', value: 99602.80},
                        ],
                        week: [

                        ],
                        month: [],
                        quarter: [],
                        year: []
                    }
                },
                accounts: [
                    {
                        accountName: 'US Bank Checking',
                        highlight: 17920.56,
                        items: [
                            {
                                item: 'Deposits',
                                transactions: 1,
                                value: 9650.87,
                                change: 9650.87,
                            },
                            {
                                item: 'Purchases',
                                transactions: 9,
                                value: -320.96,
                                change: -320.96,
                            },
                            {
                                item: 'Withdrawals',
                                transactions: 0,
                                value: 0,
                                change: 0,
                            },
                            {
                                item: 'Transfers',
                                transactions: 0,
                                value: 0,
                                change: 0,
                            },
                        ]
                    },
                    {
                        accountName: 'US Bank Savings',
                        highlight: 17920.56,
                        items: [
                            {
                                item: 'Deposits',
                                transactions: 1,
                                value: 9650.87,
                                change: 9650.87,
                            },
                            {
                                item: 'Withdrawals',
                                transactions: 0,
                                value: 0,
                                change: 0,
                            },
                            {
                                item: 'Transfers',
                                transactions: 0,
                                value: 0,
                                change: 0,
                            },
                            {
                                item: 'Interest',
                                transactions: '0.22%',
                                value: 0,
                                change: 0,
                            },
                        ]
                    },

                ]
            }
            // bank accounts
                // deposits
                // withdrawals
                // purchases
                // bank accounts
                // fees
            break
        case 'investing':
            // investing accounts
                // P/L
                // dividends
                // deposits
                // withdrawals
                // fees
            break
        default:
            break  
    }
    const placeholderAccounts = [
        {
            bank: 'US Bank',
            accountType: 'checking',
            accountBalance: 19693.13,
            transactions: [
                {
                    type: 'purchase',
                    amount: 13.92,
                    date: '2021-02-03T19:41:35+0000',
                    toFrom: 'Amazon Prime',
                    category: 'Subscriptions'
                },
                {
                    type: 'purchase', // cash/check deposit, direct deposit, withdrawal, purchase, transfer in, transfer out, internal transfer
                    amount: 6.44,
                    date: '2021-02-03T19:41:35+0000',
                    toFrom: 'Chargepoint',
                    category: 'Gas & Charging Stations',
                },
                {
                    type: 'Internal Transfer',
                    amount: 6000.00,
                    date: '2021-02-02T19:41:35+0000',
                    toFrom: 'US Bank Savings',
                    category: 'Savings'
                },
                {
                    type: 'transfer out',
                    amount: 6000.00,
                    date: '2021-02-02T19:41:35+0000',
                    toFrom: 'Vanguard',
                    category: 'Investing'
                },
                {
                    type: 'direct deposit', 
                    amount: 9650.14,
                    date: '2021-02-01T19:41:35+0000',
                    toFrom: 'Paycheck',
                    category: 'Income'
                },
                {
                    type: 'purchase',
                    amount: 6.90,
                    date: '2021-01-31T19:41:35+0000',
                    toFrom: 'Starbucks',
                    category: 'Dining & Drinks'
                },
                {
                    type: 'purchase',
                    amount: 2600.00,
                    date: '2021-01-31T19:41:35+0000',
                    toFrom: 'FBG Properties',
                    category: 'Bills & Utilities'
                },
                {
                    type: 'purchase',
                    amount: 6.90,
                    date: '2021-01-30T19:41:35+0000',
                    toFrom: 'Starbucks',
                    category: 'Dining & Drinks'
                },
            ]
        }
    ]
    res.status(200).json(placeholderData)
}


// UPDATE ALL THE PLACEHOLDER DATA TO HAVE DIFFERENT VALUES FOR EACH DIFFERNT TIME FILTER.
// DAY IS ALREADY DONE. JUST DO LIKE THAT.