function ededler() {
const ededler = [2,5,6,10]
let tekcem=0
let cutcem=0
for(let i=0 ;i<ededler.length; i++){
if (ededler[i]%2==0) {
cutcem=cutcem+ ededler[i]

}
else{
    tekcem=tekcem+ ededler[i]
    
}

} 

  console.log(cutcem-tekcem);   

} 

ededler()