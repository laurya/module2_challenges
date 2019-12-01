/*1. Aplanando arrays
Apartado A
*/

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

function buildNewFlatArray(sample) {
  return sample.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(buildNewFlatArray(val)) : acc.concat(val),
    []
  );
}

buildNewFlatArray(sample);

/*
Apartado B
*/

const sample2: (number | number[] | (number | (number | number[])[])[][])[] = [
  1,
  [2, 3],
  [[4], [5, 6, [7, 8, [9]]]]
];

function buildTypeNewFlatArray(sample) {
  return sample.reduce(
    (acc, val) =>
      Array.isArray(val)
        ? acc.concat(buildTypeNewFlatArray(val))
        : acc.concat(val),
    []
  );
}

buildTypeNewFlatArray(sample);
