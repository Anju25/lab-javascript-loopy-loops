// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var prograd_1="XXXX";
var prograd_2="YYYY";
console.log("The driver's name is"+prograd_1);
console.log("The navigaot's name is"+prograd_2);








// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var driver,navigator;
driver=prograd_1.length;
navigator=prograd_2.length;
if (driver>navigator)
{
    console.log("DRIVER HAS THE LONGEST NAME,IT HAS"+driver+"CHARACTERS");
}
else if
{
    console.log("NAVIGATOR HAS THE LONGEST NAME,IT HAS"+navigator+"CHARACTERS");
}
else{
    console.log("BOTH HAVE EQUALLY LONG NAMES,"+driver+"CHARACTERS");
}







// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
var str1=prograd_1;
for(let i=0;i<=prograd_1.length;i++)
{
    var check=is_vowels(i);
    if(check==true)
    console.log("IN A STRING"+str1.charAt(i)+"is vowel"+"and its postion is"+i);
    else
    console.log("string doesn't contains vowels");

}

function is_vowels(ch)
{
    if(ch=="a" || ch=="e" || ch=="i" ||ch=="0" ||ch=="u")
    return true;
    else 
    return false;
}





// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var str1=abCDef;
var len=str1.length;
var i=0; var uppercount=0,lowecount=0;
while(i<=len)
{
    if(str1.charAt(i)==str1.toUpperCase)
    {
    uppercount++;
    }
    else
    {
    lowecount++;
    }
    i++;
}
console.log("the number of uppercase letters are"+uppercount);
console.log("the number of lowercase letters"+lowercount);



// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
str1="ProGrad";
var str2=str1.split('').join(' ').toUpperCase;
console.log(str2);



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

var str1='prograd';
var str2=str1.split('').reverse().join('');
console.log(str2); 
// ----------------------------------------------
for(var i=str1.length;i<=0;i--)
{
    console.log(str1.charAt(i));
}

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
[str1,str2]=[str2,str1];
console.log(str1+str2);

// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"



// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
  var text='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu';
var s=text.split(' '); var count=0;
for(var i=0;i<=s.length;i++)
{
    if(s[i]!=" ")
    count++;
}
 console.log("number of words"+count);


















// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check 
// if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use
//  advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge 
// you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue.
// .. Just sayin' 
