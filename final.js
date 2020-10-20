const n =25;

let ar = [1,2,3,4,5,5,4,3,3,2,2,1,3,5,2,4,3,5,2,1,3,5,4,2,3]

function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.color = original[i];
            a.pair =  Math.round(myCount/2-0.5);
            a.count = myCount;
            a.single = myCount - a.pair * 2;
            compressed.push(a);
		}
	}
    return compressed;
    
};

var newArray = compressArray(ar);

// console.log(newArray);

for(var p =0; p < newArray.length; p++){
	console.log(newArray[p].color+" color"+" no. of pair "+ newArray[p].pair + " <br>");
}

const arrPair = newArray.map(newArray => {
    return newArray.pair;
});

const sum = arrPair.reduce(
	(acc, cur) => acc + cur
	);
console.log("Total no. of pair to sell "+sum);