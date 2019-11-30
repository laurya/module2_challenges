/*1. Aplanando arrays

Apartado A

Dado un array multidimensional, construye una función inmutable que devuelva el 
mismo array aplanado, esto es, con un único nivel de profundidad. 
Por ejemplo, el siguiente array:

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

quedaría aplanado como:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

¿Has resuelto el ejercicio anterior? Suponiendo que los arrays multidimensionales
 del ejercicio anterior no
serán de naturaleza mixta, es decir, sus elementos siempre serán del mismo 
tipo ¿Serías capaz de proporcionar
un tipado adecuado a dicha función de aplanamiento?
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
