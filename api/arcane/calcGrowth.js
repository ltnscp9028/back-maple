const calcGrowth = (nowSymbolLevel,nowSymbolCount,getSymbolCount) => {
    let nowSymbolSum = 0;
    for(let i=1;i<nowSymbolLevel;i++)
        nowSymbolSum += i*i +11;
    const maxSymbol = 2679;
    const day =  Math.ceil((maxSymbol-nowSymbolSum*1-nowSymbolCount*1)/parseInt(getSymbolCount));
    // return 
    return day;
}

const calcCost = (nowSymbolLevel) => {
    let symbolCost = 0;
    for(let i=nowSymbolLevel+1;i<=20;i++)
        symbolCost += 2370000+7130000*i;
    return symbolCost;
}


const returnDayArr = (symbolObject) => {
    let dayArr = [];
    for(let idx in symbolObject){
        const {nowSymbolLevel,nowSymbolCount,getSymbolCount} = symbolObject[idx];
        const day = calcGrowth(nowSymbolLevel,nowSymbolCount,getSymbolCount);
        const cost = calcCost(nowSymbolLevel);
        dayArr.push(`${idx} ${day}일, ${cost.toLocaleString()}메소`);
    }
    return dayArr;
}
//16,130,8
module.exports = {calcGrowth,returnDayArr,}