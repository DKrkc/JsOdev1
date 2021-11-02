
function Isprime(...numbers){
   
    for(let i=0;i<numbers.length; i++){
        let a=0;
        for(let j=3; j<numbers[i]; j++){
         if(numbers[i]%j==0){
         a=1;
        break;
         }
        
        }

        if(a==0) {
            console.log(numbers[i]+ " asaldır.");
           
        }
        else{
             console.log(numbers[i]+ "asal değildir.");
        }
        
        
       
    }
}

//Isprime(17,77,200)
//Isprime(10,2,999,29)
Isprime(11,23,5,10,100,2,99,13)


function Isfriend(sayi1,sayi2){
    let toplam1=0;
    let toplam2=0;
    for(let i=0; i<sayi1; i++){
        if(sayi1%i==0){
            toplam1=toplam1+i;
        }
    }

    //console.log(toplam1);

    for(let j=0; j<sayi2; j++){
        if(sayi2%j==0){
            toplam2=toplam2+j;
        }
    }
    //console.log(toplam2);

    if(sayi1==toplam2 && sayi2==toplam1){
        console.log(sayi1 + " ve " + sayi2 +" arkadaş sayılardır.");
    }
}
    
    

Isfriend(220,284)


for(let i=1;i<1001;i++){
    let toplam=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            toplam=toplam+j;
        }

    }

    if(toplam==2*i){
        console.log(i + " mükemmel sayıdır." + toplam);
    }
} 

console.log(" asal sayılar : ");

for(let i=2;i<1000;i++){
    let a=0;
if(i==2){
    console.log(i);
}
else{
   for(let j=2;j<i;j++){
       if(i%j==0) {
           a=1;
           break;
       }
   }
   if(a==0) {
      
       console.log(i);
   }

}


}