const calcGrowth = (nowSymbolLevel,nowSymbolCount,getSymbolCount) => {
    let nowSymbolSum = 0;
    for(let i=1;i<nowSymbolLevel;i++)
        nowSymbolSum += i*i +11;
    const maxSymbol = 2679;
    const day =  Math.ceil((maxSymbol-nowSymbolSum*1-nowSymbolCount*1)/parseInt(getSymbolCount));
    // return 
    return day;
}

const returnDayArr = (symbolObject) => {
    let dayArr = [];
    for(let idx in symbolObject){
        const {nowSymbolLevel,nowSymbolCount,getSymbolCount} = symbolObject[idx];
        let day = calcGrowth(nowSymbolLevel,nowSymbolCount,getSymbolCount);
        dayArr.push(`${idx} ${day}일`);
    }
    return dayArr;
}
//16,130,8
module.exports = {calcGrowth,returnDayArr,}