export default function placeholder(req, res){
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
    res.status(200).json(placeholderAccounts)
}