// Создать объект с такой структурой: obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: 13 } } 
// Написать функцию convert(obj), которая получает аргументом obj. Функция должна вернуть новый объект вида:


let obj = { 
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30
    }, 
    foo2: { 
        k: 23, 
        p: 13
    } 
}

function convert(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            let insideObj = obj[key];
            for (let insideKey in insideObj) {
                newObj[insideKey] = insideObj[insideKey];
            }
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(convert(obj));

// function convert1(obj, newObj) {
//     for (let key in obj) {
//         if (typeof obj[key] === "object") {
//             convert1(obj[key], newObj);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

// console.log(convert1(obj, {}));
