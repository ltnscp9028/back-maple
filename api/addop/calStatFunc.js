const sCare = require('./sCare');
const arr2 = ['STR', 'DEX', 'LUK', 'INT', 'STR+DEX', 'STR+INT', 'STR+LUK', 'DEX+INT', 'DEX+LUK', 'INT+LUK'];
const calStatFunc = (qwer , arr, mmap, checkSt , lv, checkFire, Stmp ) => {
    //str = 0,  dex = 1, luk = 2, int = 3 , str+dex = 4 , str+int = 5, str+luk = 6 ,  dex + int = 7 ,  dex _ luk = 8, int + luk = 9
    let restat = { restr: 0, redex: 0, reluk: 0, reint: 0 };
    for (let ii = 0; ii < qwer.length; ii++){
        sCare(restat, ii, qwer[ii],checkSt,arr);
    }
    if (restat.restr == Stmp[0] && restat.redex == Stmp[1] && restat.reint == Stmp[2] && restat.reluk == Stmp[3]) {
    for (let jj = 0; jj < qwer.length; jj++)if (qwer[jj] < 3 && lv >= 150) return 0;
        if (checkFire == 1) {
            for (let jj = 0; jj < qwer.length; jj++)if (qwer[jj] == 7 || qwer[jj] < 3) return 0;
        }
        else if (checkFire == 2) {
            for (let jj = 0; jj < qwer.length; jj++)if (qwer[jj] < 4) return 0;
        }
        let p = '';
        for (let ii = 0; ii < qwer.length; ii++) {
            
            if (arr[checkSt[ii]][qwer[ii]]) p += `${arr2[checkSt[ii]]} ${8 - qwer[ii]}추옵(${arr[checkSt[ii]][qwer[ii]]}),`;
        }
        mmap.add(p);
    }
    // return 1;
}

module.exports = calStatFunc;