function minElement(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

function maxElement(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function medianElement(array) {
    let sortedArray = array.sort();
    let l = sortedArray.length;

    if (l % 2 == 1)
        return sortedArray[l / 2];
    else
        return (sortedArray[l / 2 - 1] + sortedArray[l / 2]) / 2;
}

function quickSort(array) {
    if (array.length < 2) return array;
    let pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

function tagCalculator() {
    var tags = document.querySelectorAll("*");
    var tagMap = new Map();

    for (i = 0; i < tags.length; i++) {
        let oldValue = tagMap.has(tags[i].tagName) ? tagMap.get(tags[i].tagName) : 0;
        tagMap.set(tags[i].tagName, oldValue + 1);
    }

    return tagMap;
}

let array = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
console.log(array);

console.log("Sorted array:");
console.log(quickSort(array));

console.log("Minimal element:");
console.log(minElement(array));

console.log("Maximal element:");
console.log(maxElement(array));

console.log("Median:");
console.log(medianElement(array));

console.log("Tag map:");
console.log(tagCalculator());