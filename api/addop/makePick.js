const makePick = (statGaesu,v,tempVector) => {
    const nn = 10;
    const scn = 4 - statGaesu;
    for (let i = 0; i < nn; i++)v.push(i);
    for (let i = 0; i < scn; i++)tempVector.push(1);
    for (let i = 0; i < nn - scn; i++)tempVector.push(0);
    tempVector.sort();
}

module.exports = makePick;