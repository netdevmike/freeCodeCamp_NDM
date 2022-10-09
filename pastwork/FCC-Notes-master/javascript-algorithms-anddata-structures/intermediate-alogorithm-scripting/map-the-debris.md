---
id: map-the-debris
title: Map the Debris
---


```js
const getOrbitalPeriod = (altitude) => {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    var r = altitude + earthRadius;

    let period = 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / GM);
    period = period.toFixed(0);
    period = parseInt(period);
    return period
}

function orbitalPeriod(arr) {
    return arr.map(element => ({
        name: element.name,
        orbitalPeriod: getOrbitalPeriod(element.avgAlt),
    }));
}
```
