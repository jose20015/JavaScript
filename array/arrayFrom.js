const arr = [2,4,6];
//doubro de cada item do array
const arra2 = Array.from(arr, a => a * a);
console.log(arra2);


const arr3 = ['José', 'Jorge', 'João'];
console.log("Conteúdo: ", arr3);
const arr4 = Array.from(new Set(arr3));
console.log("Conteúdo removido com sucesso! ",arr4);

const arr5 = [...arr3];
const arr6 = Array.from(arr3);

console.log(arr5, arr6);

const obj = {length: 3, 0: '0', 1: '1', 2: '2'};
const arrObj = Array.from(obj);

for(const a of arrObj)
{
	console.log(a);
}