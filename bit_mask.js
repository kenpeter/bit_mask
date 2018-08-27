
function printAllSubsets(set) {
    let length = set.length;
    for (var i = 0; i < Math.pow(2,length); i++) {
        console.log("-- s --")
        for (var j = 0; j < length; j++) {
            if (i & (1 << j)) console.log(set[j]);
        }
        console.log("-- e --")
    }
}


var input = [1, 2, 3, 4];
printAllSubsets(input);
console.log((1 << 0));
