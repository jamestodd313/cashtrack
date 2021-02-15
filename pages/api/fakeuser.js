export default function fakeuser(req, res){
    // send back an object that has the users accounts. checking, saving and investing. 

    const user = {
        profile: {},
        accounts: {
            checking: {
                open: true,
                type: 'checking',
                accountNumber: 91827465,
                currentBalance: 2304.27,
                transactions: {
                    jan21: {
                        _1: [
                            {
                                date: new Date('01/01/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: 'Starbucks',
                                category: 'Dining & Drinks',
                                runningBalance: 3748.4
                            },
                        ],
                        _2: [
                            {
                                date: new Date('01/02/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 3748.4
                            }
                        ],
                        _3: [
                            {
                                date: new Date('01/03/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: 'Starbucks',
                                category: 'Dining & Drinks',
                                runningBalance: 3748.4 - 8.50
                            },
                        ],
                        _4: [
                            {
                                date: new Date('01/04/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: 'Starbucks',
                                category: 'Dining & Drinks',
                                runningBalance: 3748.4 - 8.50 - 8.50
                            },
                        ],
                        _5: [
                            {
                                date: new Date('01/05/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: 'Starbucks',
                                category: 'Dining & Drinks',
                                runningBalance: 3722.9
                            },
                        ],
                        _6: [
                            {
                                date: new Date('01/06/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 13.92,
                                description: 'Amazon Prime',
                                category: 'Subscriptions',
                                runningBalance: 3722.9 - 13.92
                            },
                        ],
                        _7: [
                            {
                                date: new Date('01/07/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: 'Starbucks',
                                category: 'Dining & Drinks',
                                runningBalance: 3722.9 - 13.92 - 8.50
                            },
                            {
                                date: new Date('01/07/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 192.32,
                                description: 'Target',
                                category: 'Shopping',
                                runningBalance: 3722.9 - 13.92 - 8.50 - 192.32
                            },
                        ],
                        _8: [
                            {
                                date: new Date('01/08/2021').toDateString(),
                                type: ['direct deposit', 'credit'],
                                amount: 4307.64,
                                description: 'Direct Deposit',
                                category: 'Income',
                                runningBalance: 7815.8
                            },
                        ],
                        _9: [
                            {
                                date: new Date('01/09/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 84.32,
                                description: 'Tio',
                                category: 'Dining & Drinks',
                                runningBalance: 7815.8 - 84.32
                            },
                            {
                                date: new Date('01/09/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 129.32,
                                description: "Trader Joe's",
                                category: 'Groceries',
                                runningBalance: 7815.8 - 84.32 - 129.32
                            },
                        ],
                        _10: [
                            {
                                date: new Date('01/10/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 7602.16
                            },
                        ],
                        _11: [
                            {
                                date: new Date('01/11/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 7602.16
                            },
                        ],
                        _12: [
                            {
                                date: new Date('01/12/2021').toDateString(),
                                type: ['transfer', 'debit'],
                                amount: 500.00,
                                description: "To Investing Account",
                                category: 'Transfer',
                                runningBalance: 7602.16 - 500.00
                            },
                            {
                                date: new Date('01/12/2021').toDateString(),
                                type: ['transfer', 'debit'],
                                amount: 2000.00,
                                description: "To Savings Account",
                                category: 'Transfer',
                                runningBalance: 7602.16 - 500.00 - 2000.00
                            },
                        ],
                        _13: [
                            {
                                date: new Date('01/13/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 476.39,
                                description: "HB Financial",
                                category: 'Loan Repayment',
                                runningBalance: 7602.16 - 500.00 - 2000.00 - 476.39
                            },
                            {
                                date: new Date('01/13/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 142.34,
                                description: "State Farm",
                                category: 'Bills & Utilities',
                                runningBalance: 7602.16 - 500.00 - 2000.00 - 476.39 - 142.34
                            },
                        ],
                        _14: [
                            {
                                date: new Date('01/14/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 4483.43,
                            },
                        ],
                        _15: [
                            {
                                date: new Date('01/15/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: "Starbucks",
                                category: 'Dining & Drinks',
                                runningBalance: 4483.43 - 8.50,
                            },
                            {
                                date: new Date('01/15/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: "Starbucks",
                                category: 'Dining & Drinks',
                                runningBalance: 4483.43 - 8.50 - 8.50,
                            },
                        ],
                        _16: [
                            {
                                date: new Date('01/16/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 8.50,
                                description: "Starbucks",
                                category: 'Dining & Drinks',
                                runningBalance: 4483.43 - 8.50 - 8.50 - 8.50,
                            },
                        ],
                        _17: [
                            {
                                date: new Date('01/17/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 4483.43 - 8.50 - 8.50 - 8.50,
                            },
                        ],
                        _18: [
                            {
                                date: new Date('01/18/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 4483.43 - 8.50 - 8.50 - 8.50,
                            },
                        ],
                        _19: [
                            {
                                date: new Date('01/19/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 4483.43 - 8.50 - 8.50 - 8.50,
                            },
                        ],
                        _20: [
                            {
                                date: new Date('01/20/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 4483.43 - 8.50 - 8.50 - 8.50,
                            },
                        ],
                        _21: [
                            {
                                date: new Date('01/21/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 4483.43 - 8.50 - 8.50 - 8.50,
                            },
                        ],
                        _22: [
                            {
                                date: new Date('01/22/2021').toDateString(),
                                type: ['direct deposit', 'credit'],
                                amount: 4307.64,
                                description: 'Direct Deposit',
                                category: 'Income',
                                runningBalance: 4483.43 - 8.50 - 8.50 - 8.50 + 4307.64,
                            },
                        ],
                        _23: [
                            {
                                date: new Date('01/23/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 8765.57
                            },
                        ],
                        _24: [
                            {
                                date: new Date('01/24/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 8765.57
                            },
                        ],
                        _25: [
                            {
                                date: new Date('01/25/2021').toDateString(),
                                type: ['transfer', 'debit'],
                                amount: 2000.00,
                                description: "To Savings Account",
                                category: 'Transfer',
                                runningBalance: 8765.57 - 2000.00
                            },
                        ],
                        _26: [
                            {
                                date: new Date('01/26/2021').toDateString(),
                                type: ['transfer', 'debit'],
                                amount: 500.00,
                                description: "To Investing Account",
                                category: 'Transfer',
                                runningBalance: 8765.57 - 2000.00 - 500.00
                            },
                        ],
                        _27: [
                            {
                                date: new Date('01/27/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 3850.00,
                                description: "YNW Properties",
                                category: 'Bills & Utilities',
                                runningBalance: 8765.57 - 2000.00 - 500.00 - 3850.00
                            },
                        ],
                        _28: [
                            {
                                date: new Date('01/28/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 2415.56
                            },
                        ],
                        _29: [
                            {
                                date: new Date('01/29/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 2415.56
                            },
                        ],
                        _30: [
                            {
                                date: new Date('01/30/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 92.10,
                                description: "Verizon",
                                category: 'Bills & Utilities',
                                runningBalance: 2415.56 - 92.10
                            },
                        ],
                        _31: [
                            {
                                date: new Date('01/31/2021').toDateString(),
                                type: ['purchase', 'debit'],
                                amount: 19.19,
                                description: "Netflix",
                                category: 'Subscriptions',
                                runningBalance: 2415.56 - 92.10 - 19.19
                            },
                        ],
                    },
                    // ONLY DOING ONE MONTH OF DATA FOR STATIC. THIS IS SUCH A WASTE OF TIME LOL
                }
            },
            savings: {
                open: true,
                type: 'savings',
                accountNumber: 19283746,
                currentBalance: 23456.78,
                transactions: {
                    jan21: {
                        _1: [
                            {
                                date: new Date('01/01/2021').toDateString(),
                                type: ['interest', 'credit'],
                                amount: 42.72,
                                description: '0.22% Interest',
                                category: 'Interest Payment',
                                runningBalance: 19456.78,
                            }
                        ],
                        _2: [
                            {
                                date: new Date('01/02/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _3: [
                            {
                                date: new Date('01/03/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _4: [
                            {
                                date: new Date('01/04/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _5: [
                            {
                                date: new Date('01/05/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _6: [
                            {
                                date: new Date('01/06/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _7: [
                            {
                                date: new Date('01/07/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _8: [
                            {
                                date: new Date('01/08/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _9: [
                            {
                                date: new Date('01/09/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _10: [
                            {
                                date: new Date('01/10/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _11: [
                            {
                                date: new Date('01/11/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 19456.78,
                            }
                        ],
                        _12:[
                            {
                                date: new Date('01/12/2021').toDateString(),
                                type: ['deposit', 'credit'],
                                amount: 2000.00,
                                description: 'Transfer From Checking',
                                category: 'Deposit',
                                runningBalance: 21456.78
                            }
                        ],
                        _13:[
                            {
                                date: new Date('01/13/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _14:[
                            {
                                date: new Date('01/14/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _15:[
                            {
                                date: new Date('01/15/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _16:[
                            {
                                date: new Date('01/16/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _17:[
                            {
                                date: new Date('01/17/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _18:[
                            {
                                date: new Date('01/18/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _19:[
                            {
                                date: new Date('01/19/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _20:[
                            {
                                date: new Date('01/20/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _21:[
                            {
                                date: new Date('01/21/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _22:[
                            {
                                date: new Date('01/22/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _23:[
                            {
                                date: new Date('01/23/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _24:[
                            {
                                date: new Date('01/24/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _25:[
                            {
                                date: new Date('01/25/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 21456.78
                            }
                        ],
                        _26:[
                            {
                                date: new Date('01/26/2021').toDateString(),
                                type: ['deposit', 'credit'],
                                amount: 2000.00,
                                description: 'Transfer from Checking',
                                category: 'Deposit',
                                runningBalance: 23456.78 
                            }
                        ],
                        _27:[
                            {
                                date: new Date('01/27/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 23456.78
                            }
                        ],
                        _28:[
                            {
                                date: new Date('01/28/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 23456.78
                            }
                        ],
                        _29:[
                            {
                                date: new Date('01/29/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 23456.78
                            }
                        ],
                        _30:[
                            {
                                date: new Date('01/30/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 23456.78
                            }
                        ],
                        _31:[
                            {
                                date: new Date('01/31/2021').toDateString(),
                                type: ['none', 'none'],
                                runningBalance: 23456.78
                            }
                        ],
                    }
                }
            },
            investing: {
                open: true,
                type: 'investing',
                accountNumber: 62946184,
                currentBalance: 16909.05,
                transactions: {
                    jan21: {
                        _1: {
                            date: new Date('01/01/2021').toDateString(),
                            pl: 0.00,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 13958.30,
                        },
                        _2: {
                            date: new Date('01/02/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 13958.30,
                        },
                        _3: {
                            date: new Date('01/03/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 13958.30,
                        },
                        _4: {
                            date: new Date('01/04/2021').toDateString(),
                            pl: 195.33,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14153.63,
                        },
                        _5: {
                            date: new Date('01/05/2021').toDateString(),
                            pl: -67.23,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14153.63 - 67.23,
                        },
                        _6: {
                            date: new Date('01/06/2021').toDateString(),
                            pl: 205.78,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14292.18,
                        },
                        _7: {
                            date: new Date('01/07/2021').toDateString(),
                            pl: 171.99,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14292.18 + 171.99,
                        },
                        _8: {
                            date: new Date('01/08/2021').toDateString(),
                            pl: 284.67,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14748.84
                        },
                        _9: {
                            date: new Date('01/09/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14748.84
                        },
                        _10: {
                            date: new Date('01/10/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14748.84
                        },
                        _11: {
                            date: new Date('01/11/2021').toDateString(),
                            pl: 89.45,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14748.84 + 89.45
                        },
                        _12: {
                            date: new Date('01/12/2021').toDateString(),
                            pl: 107.95,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14748.84 + 89.45 + 108.95
                        },
                        _13: {
                            date: new Date('01/13/2021').toDateString(),
                            pl: 403.12,
                            dividends: [{from: 'F', amount: 31.00}],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 14748.84 + 89.45 + 108.95 + 403.12 + 3
                        },
                        _14: {
                            date: new Date('01/14/2021').toDateString(),
                            pl: -227.36,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15353.36 - 227.36 
                        },
                        _15: {
                            date: new Date('01/15/2021').toDateString(),
                            pl: 222.22,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15348.22
                        },
                        _16: {
                            date: new Date('01/16/2021').toDateString(),
                            pl: 0.00,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15348.22
                        },
                        _17: {
                            date: new Date('01/17/2021').toDateString(),
                            pl: 0.00,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15348.22
                        },
                        _18: {
                            date: new Date('01/18/2021').toDateString(),
                            pl: 234.56,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15348.22 + 234.56
                        },
                        _19: {
                            date: new Date('01/19/2021').toDateString(),
                            pl: -54.32,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15348.22 + 234.56 - 54.32
                        },
                        _20: {
                            date: new Date('01/20/2021').toDateString(),
                            pl: 313.93,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15348.22 + 234.56 - 54.32 + 313.93
                        },
                        _21: {
                            date: new Date('01/21/2021').toDateString(),
                            pl: 378.42,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 15348.22 + 234.56 - 54.32 + 313.93 + 378.42
                        },
                        _22: {
                            date: new Date('01/22/2021').toDateString(),
                            pl: -123.45,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16097.36
                        },
                        _23: {
                            date: new Date('01/23/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16097.36
                        },
                        _24: {
                            date: new Date('01/24/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16097.36
                        },
                        _25: {
                            date: new Date('01/25/2021').toDateString(),
                            pl: 92.56,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16097.36 + 92.56
                        },
                        _26: {
                            date: new Date('01/26/2021').toDateString(),
                            pl: 420.69,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16097.36 + 92.56 + 420.69
                        },
                        _27: {
                            date: new Date('01/27/2021').toDateString(),
                            pl: -222.10,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16388.51
                        },
                        _28: {
                            date: new Date('01/28/2021').toDateString(),
                            pl: 199.45,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16388.51 + 199.45
                        },
                        _29: {
                            date: new Date('01/29/2021').toDateString(),
                            pl: 321.09,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16909.05
                        },
                        _30: {
                            date: new Date('01/30/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16909.05
                        },
                        _31: {
                            date: new Date('01/31/2021').toDateString(),
                            pl: 0,
                            dividends: [],
                            deposits: [],
                            withdrawals: [],
                            runningBalance: 16909.05
                        },

                    } 
                }
            }
        }
    }


    res.json(user)


}