const util = require('./calcGrowth');


const symbol = (req,res)=>{
    const {nowSymbolLevel,nowSymbolCount,getSymbolCount} = req.params;
    const day = util.calcGrowth(nowSymbolLevel,nowSymbolCount,getSymbolCount);
    res.status(200).send(`${day}일`);
}

const postSymbol = (req,res)=>{
    const dayArr = util.returnDayArr(req.body);
    res.send(dayArr);
}

module.exports = {symbol,postSymbol,};