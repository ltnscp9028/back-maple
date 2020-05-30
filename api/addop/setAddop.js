function setAddop(lv,arr){
    for (let i = 0; i < 8; i++) {
        arr[0][i] = arr[1][i] = arr[2][i] = arr[3][i] = arr[4][i] = (parseInt(lv*1 / 20) + 1) * i;
        arr[5][i] = arr[6][i] = arr[7][i] = arr[8][i] = arr[9][i] = (parseInt(lv*1 / 40) + 1) * i;
    }
}

module.exports = setAddop;