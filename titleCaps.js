// Convert all the strings to title caps in a string array anonymous function


let strcaps = function(str){
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log( str.join(' '));
  };
  strcaps("im the best");
  
  // Convert all the strings to title caps in a string array IIFE function
  
  (function (str1){
    str1 = str1.toLowerCase().split(' ');
    for (var i = 0; i < str1.length; i++) {
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
    }
    console.log( str1.join(' '));
  }("im the best"));
  // Convert all the strings to title caps in a string array arrow function
let strcaps2 = str2 => {
  str2 = str2.toLowerCase().split(' ');
    for (var i = 0; i < str2.length; i++) {
      str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].slice(1); 
    }
    console.log( str2.join(' '));
}
strcaps2("im the best");
