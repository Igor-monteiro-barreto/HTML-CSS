function parimpar(n){
    if(n % 2 ==0 ){
        return 'par'
    }
    else{
            return 'impar'
        }
    
}
let res = parimpar(9)
console.log(`Este numero é ${res}`)