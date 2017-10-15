function pigIt(str){
    words = str.split(' ');
    convertedWord = words.map((val)=>{
      letters = val.split('');
      letters.push(letters.shift());
      return `${letters.join('')}ay`;
    });
    return convertedWord.join(' ');
  }
