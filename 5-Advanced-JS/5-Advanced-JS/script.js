
/*
var john = {
    name: 'John',
    yearOfBitth: 1990,
    job: 'teacher'  
};

//Function Contructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBitth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
        console.log(2016 - this.yearOfBitth);
        
    }

Person.prototype.lastName = 'Smith';


var Rectangle = function(name, length, width) {
    this.name = name;
    this.length = length;
    this.width = width;
}

Rectangle.prototype.area = function(){
    console.log( this.name + ' is  ' + this.length * this.width + ' square units')
}


            

var john = new Person('John', 1990, 'teacher');  //instantiation
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');




john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


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

*/
//Lecture IIFE immediately envoked function expressions


/*

function game() 
{
    var score = Math.random() * 10;
    console.log(score >= 5);    
}

game();
*/

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



























































    






























