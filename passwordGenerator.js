function changeVocals (str) {
  //code di sini
  var hurufVokal = "aeiouAEIOU"
  var kalimatSet = "bfjpvBFJPV"
  var tampung = ""

  for( var i = 0; i < str.length; i++ ) {
    var kata = false
      for( var j = 0; j < hurufVokal.length; j++ ){
        if( str[i] == hurufVokal[j] ){
          tampung += kalimatSet[j]
          kata = true
        }
      }
      if( kata == false ){
        tampung += str[i]
      }
  }
return tampung;
}

function reverseWord (str) {
  //code di sini
  var balik = [];
  
  for (let i = str.length - 1; i >=0; i--) {
    balik.push(str[i]);
  }
  
  return balik;
}

function setLowerUpperCase (str) {
  //code di sini
  var kata = '';
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      kata += str[i].toLowerCase();
    }
    else {
      kata += str[i].toUpperCase();
    }
  }
  return kata;
}


function removeSpaces (str) {
  //code di sini
  let strRemovedSpace = str;
    let i=0;
    let strFinalResult = '';
    
    for (i; i<strRemovedSpace.length; i++) {
        //console.log(strRemovedSpace[i]);
        if (strRemovedSpace[i] === ' ') {
            //strFinalResult += strRemovedSpace[i];
        } else {
            strFinalResult += strRemovedSpace[i];
        }
    }
    
    return strFinalResult;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5 || name ===undefined) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
} else {
    var ubahVokal = changeVocals(name);
    var balikKata = reverseWord(ubahVokal);
    var lowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(lowerUpper);
    return hapusSpasi;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'