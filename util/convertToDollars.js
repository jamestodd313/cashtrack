export const convertToDollars = (num)=>{
    if(num == 0) return {value: '$0.00', gain: true}
    else{
        const value = '$' + Math.abs(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        let gain = num >= 0
        return {value, gain}
    }
}