// write a program that takes a letter (a-z or A-Z) and checks
// if it is a vowel or consonant.
// vowels a,e,i,o,u both upper case and lower case
// otherwise print "consonant"
// if input is not a letter print "invalid input"

let letter = "v"
letter=letter.toLowerCase();

switch (letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("vowel");
        break;
    default:
        if(letter >= 'a' && letter <= 'z'){
            console.log("consonant");
        }else{
            console.log("invalid input");
        }
}