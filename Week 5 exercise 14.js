function changeVocals (str) {
  var arr = str.split('')
  var vocalKecil = 'aiueo'
  var vocalBesar = 'AIUEO'
  var hasilKecil = 'bjvfp'
  var hasilBesar = 'BJVFP'
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < vocalBesar.length; j++){
      if(arr[i] == vocalBesar[j]){
        arr[i] = hasilBesar[j]
      } else if(arr[i] == vocalKecil[j]){
        arr[i] = hasilKecil[j]
      }
      
    }
  }

  return arr
}

function reverseWord (str) {
  for(var i = 0; i < str.length; i++){
    if(str[i] == str[i].toUpperCase()){
      str[i] = str[i].toLowerCase()
    } else {
      str[i] = str[i].toUpperCase()
    }
  }

  return str
}

function setLowerUpperCase (str) {
  var hasil = []
  for(var i = str.length - 1; i >= 0; i--){
    hasil.push(str[i])
  }

  return hasil
}

function removeSpaces (str) {
  // console.log(str)
  for(var i = 0; i < str.length; i++){
    if(str[i] == ' '){
      str.splice(i,1)
    }
  }

  return str.join('')
}

function passwordGenerator (name) {
  if(name.length <= 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var vocal = changeVocals(name)
  var reverse = reverseWord(vocal)
  var setCase = setLowerUpperCase(reverse)
  var remove = removeSpaces(setCase)

  return remove
}

console.log(passwordGenerator('Sergei Dragunov')); 
// 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); 
// 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); 
// 'JFXFLb'
console.log(passwordGenerator('Alex')); 
// 'Minimal karakter yang diinputkan adalah 5 karakter'