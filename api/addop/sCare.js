const sCare = (restat, n, ww,checkSt,arr) => {
    //str = 0,  dex = 1, luk = 2, int = 3 , str+dex = 4 , str+int = 5, str+luk = 6 ,  dex + int = 7 ,  dex _ luk = 8, int + luk = 9
    switch (checkSt[n]) {
        case 0:
            restat.restr += arr[checkSt[n]][ww];
            break;
        case 1:
            restat.redex += arr[checkSt[n]][ww];
            break;
        case 2:
            restat.reluk += arr[checkSt[n]][ww];
            break;
        case 3:
            restat.reint += arr[checkSt[n]][ww];
            break;
        case 4:
            restat.restr += arr[checkSt[n]][ww];
            restat.redex += arr[checkSt[n]][ww];
            break;
        case 5:
            restat.restr += arr[checkSt[n]][ww];
            restat.reint += arr[checkSt[n]][ww];
            break;
        case 6:
            restat.restr += arr[checkSt[n]][ww];
            restat.reluk += arr[checkSt[n]][ww];
            break;
        case 7:
            restat.redex += arr[checkSt[n]][ww];
            restat.reint += arr[checkSt[n]][ww];
            break;
        case 8:
            restat.redex += arr[checkSt[n]][ww];
            restat.reluk += arr[checkSt[n]][ww];
            break;
        case 9:
            restat.reint += arr[checkSt[n]][ww];
            restat.reluk += arr[checkSt[n]][ww];
            break;
    }
}

module.exports = sCare;