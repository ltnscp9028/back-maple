const test = (req,res) => {
    res.send("test");
    res.end();
}

const upStat = (req,res) => {
    const arr = [[3,180],[4,270],[7,470]];
    const {mainStat,subStat,upgradeCount} = req.params;
    const jack = (mainStat-subStat)/upgradeCount;
    let result;
    for(let i=0;i<3;i++)
        for(let j=0;j<2;j++){
            if(arr[i][j]==jack){
                result = i==0?"100작":i==1?"70%작":"30%작";
                break;
            }
        }
    console.log(result);
    result = result ?  result : "섞작";
    res.send(result);
    res.end();
}
module.exports = {test,upStat};