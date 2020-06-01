const setAddop = require('./setAddop');
const makePick = require('./makePick');
const calStat = require('./calStat');
const data = (req,res) => {
    let {lv,sorm} = req.params;
    let tmp_arr = [];
    let data = [];
    for(let i=1;i<8;i++)tmp_arr.push(parseInt(lv / sorm + 1) * i)
    res.json(tmp_arr);
    res.end();
}

const weapon = (req,res) => {
    const fafnir = [12, 18, 24, 32, 41];
    const absol = [15, 22, 30, 40, 51];
    const arcanesh = [18, 26, 36, 48, 62];
    let tempArr = [];
    let {lv} = req.params;
    for(let i=1;i<8;i++){
        if(i<3)tempArr.push('X');
        else tempArr.push(`${lv == 150 ? fafnir[i - 3] : lv == 160 ? absol[i - 3] : arcanesh[i - 3]}%`)
    }
    res.json(tempArr);
    res.end();
}

const test = async(req,res) => {
    const stat = [
        'STR', 'DEX', 'INT', 'LUK',
        '최대 HP', '최대 MP',
        '공/마 (기본)',
        '공격력(추옵)', '마력(추옵)',
        '보공', '데미지',
        '방어력', '이동속도', '점프력', '올스탯', '착용레벨 감소',
    ];
    const statArr = JSON.parse(JSON.stringify(req.body));
    const {lv,checkFire} = statArr;
    let statGaesu=0,v=[],tempVector=[],checkSt=[],Stmp=[],tempArr=[];
    let mmap= new Set();
    let arr = Array(10).fill(0).map(() => Array(8));
    for(let key in statArr){
        if(statArr[key]!=0 && key!=stat[7] && key!='STR' && key!='DEX' && key!='INT' && key!='LUK' && key!='lv' && key!='checkFire'){
            statGaesu++;
        }
        Stmp.push(statArr[key]*1);
    }
    await setAddop(lv,arr);
    await makePick(statGaesu,v,tempVector);
        if (statGaesu != 4)await calStat(4 - statGaesu,tempVector,checkSt,v,arr,mmap,lv,checkFire,Stmp);
    mmap.forEach(value => tempArr.push(value));
    res.json(tempArr);
    res.end();
}

const weaponAddop = async(req,res) => {
    const statTmp = JSON.parse(JSON.stringify(req.body));
    let statArr = [];
    for(let key in statTmp){
        statArr.push(statTmp[key]);
    }
    const {lv} = statTmp;
    let gmAddop = [];
        const fafnir = [12, 18, 24, 32, 41];
        const absol = [15, 22, 30, 40, 51];
        const arcanesh = [18, 26, 36, 48, 62];
        const tmp = lv == 150 ? fafnir : lv == 160 ? absol : arcanesh;
        const tmpGong = Math.floor(statArr[7] / statArr[6] * 100);
        const tmpMa = Math.floor(statArr[8] / statArr[6] * 100);
        for (let i = 0; i < 5; i++) {
            if (tmpGong == tmp[i])
                gmAddop.push(`공격력 ${i}추옵(${statArr[7]})`);
            if (tmpMa == tmp[i])
                gmAddop.push(`마력  ${i}추옵(${statArr[8]})`);
        }
        if (statArr[9]) gmAddop.push(`보공 ${8 - statArr[9] / 2}추옵(${statArr[9]}%)`);
        if (statArr[10])gmAddop.push(`데미지 ${8 - statArr[10]}추옵(${statArr[10]}%)`);
        if (statArr[14]) gmAddop.push(`올스탯 ${8 - statArr[14]}추옵(${statArr[14]}%)`);
    res.json(gmAddop);
}

module.exports = {data,weapon,test,weaponAddop};
