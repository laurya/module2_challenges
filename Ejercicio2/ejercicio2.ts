/* 
2. Acceso en profundidad
Apartado A
*/

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo"
      }
    }
  }
};

function deepGet(myObject, toLook) {
  return toLook
    .split(",")
    .reduce(
      (o, x) => (typeof o == "undefined" || o === null ? o : o[x]),
      myObject
    );
}

// deepGet(myObject,'b,d,f,g')
// "bingo"

/*
Apartado B
*/

const myNewObject = {};

//assign(myNewObject, ['a', 'b'], 1);
function assign(obj, keyPath, value) {
  const lastKeyIndex = keyPath.length - 1;
  for (var i = 0; i < lastKeyIndex; ++i) {
    const key = keyPath[i];
    if (!(key in obj)) obj[key] = {};
    obj = obj[key];
  }
  return (obj[keyPath[lastKeyIndex]] = value);
}

console.log(JSON.stringify(myNewObject));
