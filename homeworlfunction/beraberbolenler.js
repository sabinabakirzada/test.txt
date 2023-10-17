function ededler() {
    let n= 17
    let say=0
   
for(let i=0; i<n; i++){
let c=Math.floor(n/i)
let d=n%i
if (c==d) {
        say++
        
    } 
}
console.log(say);
    
}


ededler()