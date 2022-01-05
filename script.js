function myEach(arr) {
    for (let i = 0; i < arr.length; i++)
        arr[i] += 5;

    return arr;
}

function myMap(arr) {
    let newArr = arr;
    return newArr;
}

function myFilter(arr, x) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++)
        if (arr[i] > x)
            newArr.push(arr[i])

    return newArr;
}

function mySome(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 == 0)
            return true;
    return false;
}

function myEvery(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 != 0)
            return false;
    return true;
}

function myReducer(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}

function myIncludes(arr, x) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == x)
            return true;
    return false;
}

function myIndexOf(arr, x) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == x)
            return i;

    return null;
}

function myPush(arr, x) {
    arr[arr.length] = x;
    return arr;
}

function myLastIndexOf(arr, x) {
    for (let i = arr.length - 1; i > -1; i--)
        if (arr[i] == x)
            return i;

    return null;

}

function myKey(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++)
        myPush(newArr, i);

    return newArr;
}

let arr = [1, 2, 3, 4, 5];

console.log(myEach(arr));
console.log(myMap(arr));
console.log(myFilter(arr, Math.floor(Math.random() * 10)));
console.log(mySome(arr));
console.log(myEvery(arr));
console.log(myReducer(arr));
console.log(myIncludes(arr, Math.floor(Math.random() * 10)));
console.log(myIndexOf(arr, Math.floor(Math.random() * 10)));
console.log(myPush(arr, Math.floor(Math.random() * 10)));
console.log(myLastIndexOf(arr, Math.floor(Math.random() * 10)));

let iterator = myKey(arr);
for (const key of iterator) {
    console.log(key);
}

iterator = arr;
for (const value of iterator) {
    console.log(value);
}