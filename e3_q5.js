function listApply(list, f) {
    for (let i = 0; i < list.length; i++) {
        list[i] = f(list[i]);
    }
}

function cadToUsd(cad){
    return cad * 0.73;
}


function cadsToUsds(list){
    listApply(list, cadToUsd);
    return list;
}

const isOdd = (x) => x % 2 === 1;

function every(list, f) {
    return list.reduce((accumulator, currentValue) => {
        return accumulator && f(currentValue);
    }, true);
}

