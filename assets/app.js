



let a = +prompt('Введите год')


if(a % 4 != 0 || (a % 100 ==0 && a % 400 != 0)){
   console.log(`Не высокосный год`)
      
}else{ 
   console.log(`Высокосный год`)

}