
/*
var john = {
    name: 'John',
    yearOfBitth: 1990,
    job: 'teacher'  
};


//Function Constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBitth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
        console.log(2016 - this.yearOfBitth);
        
    }

Person.prototype.lastName = 'Smith';



            

var john = new Person('John', 1990, 'teacher');  //instantiation
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');




john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/
var correctAns, correctChoice;
var ans = [];
var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = answers[correct -1];  
}



//console.log('Holo World!');

var question1 = new Question("Name the capital of Maine", ['1-Portland','2-Belfast','3-Augusta'], 3);

var question2 = new Question("Name the largest state in the union", ['1-Alaska','2-Texas','3-California'], 1);

var question3 = new Question("Name the capial of Brazil", ['1-Rio Di Janero','2-Brazilia','3-Sao Paulo'], 2);

var question4 = new Question("Name Abrahams oldest son", ['1-Jacob','2-Ishmael','3-Issac'], 2);

var randomQuestion = Math.ceil(Math.random() * 4);

switch(randomQuestion) {
    case 1:
        console.log(question1.question);
        console.log(question1.answers[0]);
        console.log(question1.answers[1]);
        console.log(question1.answers[2]);
        correctAns = question1.correct;
        correctChoice = 3;
        
        break;
    case 2:
        console.log(question2.question);
        console.log(question2.answers[0]);
        console.log(question2.answers[1]);
        console.log(question2.answers[2]);
        correctAns = question2.correct;
         correctChoice = 1;
        
        break;
    case 3:
        console.log(question3.question);
         console.log(question3.answers[0]);
        console.log(question3.answers[1]);
        console.log(question3.answers[2]);
        correctAns = question3.correct;
         correctChoice = 2;
        break;
    case 4:
        console.log(question4.question);
       console.log(question4.answers[0]);
        console.log(question4.answers[1]);
        console.log(question4.answers[2]);
         correctChoice = 2;
        correctAns = question4.correct;
}

var choice = prompt("Please enter the number corresponing to the correct answer");

console.log(" You selected " + choice);
console.log("The correct answer is " + correctAns);

if (choice == correctChoice) {
    
    alert("Correct! The answer is " + correctAns);
    
} else {
    
    alert("No! Dumb Ass the correct answer is " + correctAns +"!" );
}
    
    

/*

var Rectangle = function(name, length, width) {
    this.name = name;
    this.length = length;
    this.width = width;
}

Rectangle.prototype.area = function(){
    console.log( this.name + ' is  ' + this.length * this.width + ' square units')
}





var area1 = new Rectangle('area1',10, 25);
var area2 = new Rectangle('area2',10, 10);
var area3 = new Rectangle('area3',40, 25);
area1.area();
area2.area();
area3.area();
console.log(area1.name);


//Object.create


var personProto = {
    
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';




var jane = Object.create(personProto,
   {
     name: { value: 'Jane' },
     yearOfBirth: { value: 1969 },
     job: { value:   'designer' }                        
   })


//Primativs Vs Objects


//Primitives
var a = 23;
var b = a;  //copied a to b.

a = 46;
console.log(a);
console.log(b);   //each hold its own copy fo the data


//Objectes

var obj1 = 
    {
        name: 'John',
        age: 26
    };




var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Fuctions
var age = 27;
var obj = 
    {
        name: 'Jonas',
        city: 'Lisbon'
    };

function change(a, b)
{
    a = 30;
    b.city  = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


//////////////////////////////
//Lecture: Passing functions as arguments


var years = [1990, 1965, 1945, 2005, 1998];


function arrayCalc(arr, fn) 
{
    var arrRes = [];
    for (var i =0; i < arr.length; i++) 
    {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}


function calculateAge(el) 
{
    return 2016-el;
}


function isFullAge(el) 
{
    return el >= 18;
}

function maxHeartRate(el)
{
    if (el >= 18 && el <= 81)
    {
    return Math.round(206 - (0.67 * el));  
    } else {
    return -1;
    }
}




var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);


var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

//Lecture Functions Returning Functions


/*
function interviewQuestion(job) 
  {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explaine what UX design is?');   
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', What subject do you teach?');
            console.log(', How long have you been teaching?');
        } 
        
    } else {
        return function (name) {
           console.log('Hello ' + name + ', Che lavoro fai?');
        }
    }
}







var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
teacherQuestion('Sara');

var designerQuestion = interviewQuestion('designer');
designerQuestion("Mark");

var unk = interviewQuestion();
unk('James');


interviewQuestion('designer')('Guido');

interviewQuestion('teacher')('Guido');


//Lecture IIFE immediately envoked function expressions




function game() 
{
    var score = Math.random() * 10;
    console.log(score >= 5);    
}

game();

(function ()
    {
    var score = Math.random() * 10;
    console.log(score >= 5);    
    })();




(function (goodluck)
    {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);    
    })(5);




////////////////////////////////////////////////
// Lecture: Closures

function retirement(retirementAge) {
    var a = " years until retirement.";
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a );
    }
}





var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementUS(1945);
retirementGermany(1945);
retirementIceland(1945);

//retirement(67)(1990);





function interviewQuestion(job) 
  {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explaine what UX design is?');   
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', What subject do you teach?');
            console.log(', How long have you been teaching?');
        } 
        
    } else {
        return function (name) {
           console.log('Hello ' + name + ', Che lavoro fai?');
        }
    }
}

interviewQuestion('designer')('Guido');

interviewQuestion('teacher')('Guido');

interviewQuestion()('Guido');

var job = interviewQuestion('teacher');
job("John");




function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
        console.log(name + ', can you please explain what UX design is?');   
        
    } else if (job === 'teacher') {
            console.log(name + ', What subject do you teach?');
            console.log(', How long have you been teaching?');
            
    } else {
           console.log('Hello ' + name + ', Che lavoro fai?');
        }
    }
}



interviewQuestion('designer')('Guido');

interviewQuestion('teacher')('Guido');



interviewQuestion()('Guido');

var job = interviewQuestion('teacher');



//Lecture: Bind, call, apply
// allows to change the this variable


var john = 
    {
        name: 'John',
        age: 26,
        job: 'teacher',
        presentation: function(style, timeOfDay) {
            if ( style === 'formal') {
                console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
            } else if (style === 'friendly') {
                console.log('Hey! What\'s up? I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
            }
        }
        
    }

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentation('formal','morning');

john.presentation.call(emily, 'friendly','evening');


// john.presentation.apply(emily, ['friendly','evening']);

var johnFriendly = john.presentation.bind(john, 'friendly');


johnFriendly('afternoon');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal("afternoon");








var years = [1990, 1965, 1945, 2005, 1998];


function arrayCalc(arr, fn) 
{
    var arrRes = [];
    for (var i =0; i < arr.length; i++) 
    {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}


function calculateAge(el) 
{
    return 2016-el;
}


function isFullAge(limit, el) 
{
    return el >= limit;
}

function maxHeartRate(el)
{
    if (el >= 18 && el <= 81)
    {
    return Math.round(206 - (0.67 * el));  
    } else {
    return -1;
    }
}





var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);



*/











    






























