function Ferq() {
    

const ededler=[5,25,300,420,60,28,2,200]
let uccem=0
let digercem=0
for(i=0;i<ededler.length ;i++){
    if (ededler[i]/100>1 && ededler[i]/100<10) {
        uccem=uccem+ededler[i]
    }
    else{
        digercem=digercem+ededler[i]
    }


}
console.log("Ferq: " , uccem-digercem);

}
Ferq()
