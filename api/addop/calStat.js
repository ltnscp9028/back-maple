const calStatFunc = require('./calStatFunc');
const nq = require('combination-js');
const calStat = (len,tempVector,checkSt,v,arr,mmap,lv,checkFire,Stmp) => {
    let i=0;
    do {
        for (let i = 0; i < tempVector.length; i++) {
            if (tempVector[i] == 1) checkSt.push(v[i]);
        }
        for (let q = 0; q < 8; q++) {
            if (len > 1) {
                for (let w = 0; w < 8; w++) {
                    if (len > 2) {
                        for (let e = 0; e < 8; e++) {
                            if (len > 3) {
                                for (let r = 0; r < 8; r++) {
                                    i++;
                                    if (calStatFunc([q, w, e, r], arr, mmap, checkSt , lv, checkFire, Stmp)==0) {
                                        continue;
                                    }
                                }
                            }
                            else {
                                if (!calStatFunc([q, w, e], arr, mmap, checkSt , lv, checkFire, Stmp)) continue;
                            }
                        }
                    }
                    else {
                        if (!calStatFunc([q, w], arr, mmap, checkSt , lv, checkFire, Stmp)) continue;
                    }
                }
            }
            else {
                if (!calStatFunc([q], arr, mmap, checkSt , lv, checkFire, Stmp)) continue;
            }
        }
        checkSt.length =  0;
    } while (nq.next_permutation(tempVector));
}

module.exports = calStat;