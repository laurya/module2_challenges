/*
3. Árbol
¿Cómo generarías con TypeScript un tipado para estructuras en forma de árbol?
Un árbol es una estructura que parte de un nodo raiz, a partir del cual salen 
más nodos. Cada nodo en un árbol puede tener hijos (más nodos) o no tenerlos 
(convirtiendose en un nodo final o una "hoja").
*/

function NodeTree(valueNode: any) {
  this.value = valueNode;
  this.childrenNodes = [];
}
function Tree() {
  this.treeRoot = null; // referencia al nodo raíz
}

Tree.prototype.add = function(currentValueNode, toNodeValue) {
  let node = new NodeTree(currentValueNode);
  let parent = toNodeValue ? this.findBFS(toNodeValue) : null;
  if (parent) {
    parent.children.push(node);
  } else if (!this.treeRoot) {
    this.treeRoot = node;
  } else {
    throw new Error("Tree root have value");
  }
};

var tree = new Tree();
