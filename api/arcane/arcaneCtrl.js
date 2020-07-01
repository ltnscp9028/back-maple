const test = (req,res) => {
    res.send("test");
    res.end();
}

const upStat = (req,res) => {
    const arr = [[3,180,"100%작"],[4,270,"70%작"],[7,470,"30%작"]];
    const {mainStat,subStat,upgradeCount} = req.params;
    const jack = (mainStat-subStat)/upgradeCount;
    let result = "섞작";
    for(let i=0;i<3;i++)
        for(let j=0;j<2;j++){
            if(arr[i][j]==jack){
                result = arr[i][2];
                break;
            }
        }
    console.log(result);
    res.send(result);
    res.end();
}

const weaponReinforce = (req,res) => {
    const arr = [[1,50,"100%작"],[2,100,"70%작"],[3,150,"30%작"],[4,200,"15%작"]];
    const {mainStat, subStat, upgradeCount} = req.params;
    const jack = (mainStat-subStat)/upgradeCount;
    let result = "섞작";
    for(let i=0;i<4;i++)
        for(let j=0;j<2;j++){
            if(arr[i][j]==jack){
                result = arr[i][2];
                break;
            }
        }
    res.send(result);
    res.end();
}

module.exports = {test,upStat,weaponReinforce};