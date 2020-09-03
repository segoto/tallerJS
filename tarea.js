//Punto 1
function secret(arr, encryptDecrypt, n){
    return arr.map(a=> encryptDecrypt( a, n ));
}
//Punto 2
let mcd = (a,b)=> a === b ? a : a < b ? mcd(a, b-a) : mcd(b, a-b);