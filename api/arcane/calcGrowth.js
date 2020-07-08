const calcGrowth = (nowSymbolLevel,nowSymbolCount,getSymbolCount) => {
    let nowSymbolSum = 0;
    for(let i=1;i<nowSymbolLevel;i++)
        nowSymbolSum += i*i +11;
    const maxSymbol = 2679;
    const day =  Math.ceil((maxSymbol-nowSymbolSum*1-nowSymbolCount*1)/parseInt(getSymbolCount));
    // return 
    return day;
}
//16,130,8
module.exports = {calcGrowth,}