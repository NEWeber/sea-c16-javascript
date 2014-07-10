// Write a function that takes in a string seperated by a seperator, and will return an array 
// of strings in between the seperators.

var stringDelimiter = function(string, seperator) {
    return string.split(seperator);
} 

var sampleInput = 'asdf$lskd1234$asdo$$$';

stringDelimiter(sampleInput, '$');
// -> ['asdf', 'lskd1234', 'asdo']