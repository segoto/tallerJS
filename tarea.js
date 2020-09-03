//Punto 1
function secret(arr, encryptDecrypt, n){
    return arr.map(a=> encryptDecrypt( a, n ));
}
//Punto 2
let mcd = (a,b)=> b === 0? a: mcd(b, a%b);