// Problem - Print A to Z without using any variable or storage.

//Approach - Use ASCII code by getting the ascii code for A and Z, then we traverse A to Z and covert ascii code to String.

console.log('a'. charCodeAt(0));// ascii code of A  
console.log('z'. charCodeAt(0));// ascii code of Z

for(i = 'a'. charCodeAt(0); i<= 'z'.charCodeAt(0); i++){ // traversing from 97 to 122 
    console.log(String.fromCharCode(i));
}