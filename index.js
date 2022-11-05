/*chapter 9:Prompts*/
 


var country =prompt("where are you from","karaci")
console.log(country)


var ques =prompt("Your Gender?")
var deAns=prompt("Male or Female?")
var gen= prompt(ques,deAns)
console.log(gen)


var numberOfCats = +prompt("How many cats?");
 var tooManyCats = numberOfCats + 1;


 console.log(tooManyCats)

var FirstName=prompt("enter first name:")
var LastName=prompt("enter last name")
var city=prompt("Enter your City","karachi")
console.log(FirstName)
console.log(LastName)
console.log(city)


/*Chapter 10,11,12: if statements, Comparison operators ,if...else and else if statements*/

var q=prompt("where does Imran Khan live?")
var v="Pakistan"

if(q==v){
    console.log("your Answer is correct!")
}
else{
    console.log("wrong answer!")
}


var officer = true
var assi= false

if(officer==true)
{
    console.log("documents are submitted!")
}


else if(assi==true)
{
    console.log("documents are submitted to Assistant")
}


else{
    console.log("documents can not be submitted!")
}


var age=prompt("enter your age")
if(age>=18){
    console.log("You can vote")
}
else if(age>100){
    console.log("Invalid input")
}
else{
    console.log("You can not vote.")
}

/* chapter 13: Testing sets of conditions*/

var age=15
var studentcard=true

if(age==16){
    console.log("Allow")
}

else{

    if(studentcard==true)
    {
        console.log("Allow on student car")
    }

    else if(studentcard==true && age==15)
    {
        console.log("allow")
    }

    else{
    console.log("not Allow")
    }  
}

