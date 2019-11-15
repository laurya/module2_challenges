console.log("playgroundTS");

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];


function buildNewFlatArray(sample) {
   return sample.reduce((acc, val) => Array.isArray(val) ? 
        acc.concat(buildNewFlatArray(val)) : acc.concat(val), []);
}

buildNewFlatArray(sample); 
