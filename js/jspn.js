function phoneNumber(){
    let first = ""
    let second = ""
    let third = ""
    let fourth = ""
    let fifth =""
    let sixth = ""
    let seventh =""
    let eigth = ""
    let ninth = ""
    let tenth = ""
    for(var i=0;i<numbers.length;i++){
      if(i<3){
        firstpart.concat(numbers[i].toString())
      } else if(3<i<6){
        secondpart.concat(numbers[i].toString())
      } else if(i>=6){
        thirdpart.concat(numbers[i].toString())
      }
    }
    return `(${firstpart} ${secondpart}-${thirdpart}`
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(createPhoneNumber);