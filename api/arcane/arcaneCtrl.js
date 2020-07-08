const util = require('./calcGrowth');

const test = (req,res) => {
    res.send("test");
    res.end();
}

const symbol = (req,res)=>{
    const {nowSymbolLevel,nowSymbolCount,getSymbolCount} = req.params;
    const day = util.calcGrowth(nowSymbolLevel,nowSymbolCount,getSymbolCount);
    res.status(200).send(`${day}일`);
}


module.exports = {test,symbol};