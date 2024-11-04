
        // CONSOLE API 
       /*
        console.log('Hello WORLD');
        console.warn("Warning !");
        console.error("Error!");
        console.log('Hello',10,"Number");
        // console.assert(4==60);

        //alert("me");
        
        document.write("Harsh this side "); 

        */
        
    // variables 
var  a= 332;
var b = 89;

// console.log(a+b);

// DATA TYPES IN JS 

var str1="Hello Harry "; //strings 
var mar_l={'Harsh':99,'Yash':89};//Object 
var  a =45; //Number 
var is_state=true;  // booolean 
var _state=false; //boolesan 

var un= undefined;  // undefined   
var t;
var n =null; //  null
console.log(mar_l);// semicolon can be avoided
console.log(is_state,_state)
console.log(un)
console.log(n) // null
console.log(t)//by default variable are undefiend no data type





//  Two types of data types in JS
// 1. Primitive Data Type (6)
// Number 
// boolean 
// string 
//undefined 
//null
//symbol


// 2. Reference Data type (2)
// Objects{}  , Arrays[]

// Arrays
var arr = [1,2,3,'Harsh',56.2]
console.log(arr); 
console.log(arr[3]);



// OPerators in JS 
// Arithematic OPerators (+,-,*,/)
//Assignment OPerators (+=,-=,/=,*=)
//Comparison OPerator (==, != , >=,<=,>,<)
//Logical Operator (!,&&, ||)
// Bitwise OPerator (|,&,)  

function avg(x ,  y ) {
                                ///     /// function expression
    return (x+y)/2;
}
 
var c1= avg(2,3);
console.log("Average ism : ", c1);





// Conditional in JS 
  
var age=22; 

if(age>18){
    console.log("cn vote ")
}
else if(age>5 && age<10){
    console.log("No vote ");            // if-else-if ladder
}

else{
    console.log("cAn vote"); 
}

console.log("End of ladder ")
// END OF LADDER








// LOOPS IN JS 
var arr= [1,3,4,6,"Harsh","Jay"]

// for loop 
console.log("Using for  Loop ")

for(var i = 0 ; i<arr.length;i++){
    console.log(arr[i]);
}

//forEach loop with func
console.log("Using forEach Loop ")

arr.forEach(
    function(Element)
    {
        console.log(Element)
    }
)
 

// while loop 

let j=0; 
 console.log("printing using while loop")
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

//do while 
var k = 0 ; 
do{
    console.log(arr[k]); 
    k =56;
}while(j<arr.length);


//jump & continue 




//let -> Variable (Block Level Scope [Local variable])
// Modern js -> Let used more than var 

// const for constant values 
//can;t change values 




// ARRAYS METHODs
// .length,
// .push(),  .pop(),shift(),unshift(element)
// .sort(), .toString()

let myarr=["harsh",'yash',null,true,34];

console.log("Length of array :",myarr.length) //length 
myarr.push("Harry"); //push elements 

console.log(myarr);
console.log(myarr.pop()); // pop last item 

myarr.shift()//removes 1st element 
console.log(myarr)// harsh removed !

myarr.unshift("Khush"); // element inserted at 1st pos 
console.log(myarr)
//also if 
let newL=myarr.unshift("Sumit")// returms new len 
console.log("New length: ",newL);

let myar2=[56,32,5,45,31,52]
console.log("sorted array : ", myar2.sort())// not normal
// sorting it convrts to string then sorts a/c dictionary 
// e,g. [ 31, 32,45, 5,52, 56]
// 1,12,1234423,2,2323,23232323232,3,312,34532,.....
 








// STRING methods 
// .length, indexOf('str'),.lastindexOf('str')
// slice(i,j) i se j-1
// replace(string, new str)

let mystr="Harsh is a good good boy";
console.log('Length of string is : ',mystr.length);
console.log(mystr.lastIndexOf('good'));

console.log(mystr.slice(0,3))
mystr.replace("Harsh","Rohan")
console.log(myar2)












// DATE 
let curDate=new Date(); //timestamp

console.log(curDate.getTime());
console.log(curDate.getDay());//0-sun,1-mon....

console.log(curDate.getMinutes()); //8
console.log(curDate.getHours()); //13
console.log(curDate.getFullYear()); //2024














// DOM (DOCUMENT OBJECT MODEL ) mANIPULTN 

// Documnent Methods


// document.location

// document.URL-> 'http://127.0.0.1:5500/JS_HARRY/idx.html'

// document.links -> HTML COLLN 

// document.scripts -> HTML COlln use document.scripts[0]

// document.forms-> Extract forms 

//document.domain -> Tells Domain 127.0.0.1

//document.images -> Extracts Images  

// window.onload -> When doc is loaded completely 













//getElementById getElementsByClassName
// id mein element & classname mein  elements 

let btn=document.getElementById('mybtn')
console.log(btn)

let ele=document.getElementsByClassName('container')
console.log(ele) // HTML COLLECTN 2 firstContainer,secondContainer
// ele[0].style.background='yellow'; // changing css 
ele[1].style.background='orange';
ele[1].style.fontSize='22px';
ele[1].style.border='5px solid black';


// Adding class | classList.add(<class_name>) 
 
ele[0].classList.add('bg-P');  
ele[1].classList.add('txt-s');  


//Removing classList

// ele[0].classList.remove('bg-P');  
ele[1].classList.remove('txt-s');  // removing class 



// INNER HTML AND INNER TEXT (CamelCase)

let ab = ele[1].innerHTML;// accessing innerHtml in container 
//    i.e.->     <p>This is a paragraph  </p>

console.log(ab);
let txt = ele[1].innerText;// accessing innerHtml in container 
console.log(txt);
// i.e.-> This is a paragraph
 

// getElementsByTagName 
 
let heading=document.getElementsByTagName('h1')
console.log(heading) //HTML COllnN

let tn=document.getElementsByTagName('div')
// console.log(tn); //html colln 

let createdElement=document.createElement('p');
let createdElement2=document.createElement('b');
createdElement.innerText="This para is generated using js! "
createdElement2.innerText="This bold text is genrated using js "
ele[1].appendChild(createdElement)

ele[1].replaceChild(createdElement2,createdElement) // (new , old )

// removeChild -> removes child // appendChild 
ele[1].removeChild(createdElement2) 







//Selector using querySelector 

sel=document.querySelector('.container') // first conatiner

// del=document.querySelector('#id')
console.log(sel);
sel=document.querySelectorAll('.container') // nodelist
 








// EVENTS -> 'click', 'mouseover', 'mouseout','mouseup','mousedown'
// in html we use onclick to run a functn 

function clicked(){
    window.alert("Button was Clicked ! ")
}

window.onload=function(){
    console.log('Page Loaded !'); //ok 
}

let myele=document.getElementById('secContainer')
// myele.addEventListener('click',clicked)


// myele.addEventListener('click',function(){
//     alert('Sec contaienr pr click! ')
// })
//prompt is used to take i/p //ok || Cancel

// myele.addEventListener('mouseover',function(){
//     alert("mouseover hua ! ")
// })


// myele.addEventListener('mouseout',function(){
//     alert('mouseout hua! ')
// })

myele.addEventListener('mouseup',function(){
    console.log('mouseup hua! ')
})

myele.addEventListener('mousedown',function(){
    console.log('mousedown hua! ')
})

myele.addEventListener('click',function(){

    myele.innerHTML="<i>You have Clicked !</i>"
})








// Arrow Functions 

function sum(a,b){
    return a+b; 
}

sumadd=(x,y)=>{ //arrow functions 
    return x+y;
}




// setTimeout and setInterval 

// setTimeout(()=>{console.log('log kro ! ')},2000) //ms 

//setTimeout-> Scheduled 
function pd(){
 alert("WORLD IS NOT OK ! IT NEEDS U !")   
}


setTimeout(pd,2000) //ms 



// setInterval(functn,ms)  -> runs functn after a fixed interval of time !
//repeatedly do tasks 

clr=setInterval(pd,7000);


//setInterval returns an id 

// use clearInterval to stop it
// ----->use clearInterval(clr)/ clearTimeout(clr)













// Local Storage 

localStorage.setItem("Name","Harsh")
localStorage.setItem("Age",24)
localStorage.setItem("Salary",100000)

localStorage.getItem("name");
localStorage.getItem("Age");
localStorage.getItem("Salary");

// Removing item 
localStorage.removeItem("name");


// flushing local storage ! 
localStorage.clear();












// JSON 
obj={'name':"Harsh","age":24,"Salary":1000000};

// To convert ----> JSON STRING , use JSON.stringfy(<object_name>)

jso=JSON.stringify(obj); // json string

// To convert ----> JSON to object  , use JSON.parse<json_form>)

parse_f=JSON.parse(jso);










// Backticks !  {template literals ! }
// `{}`

var aa=3445;
console.log(`The value of aa is : ${aa}`); // enclose in vackticks only XX no quotes XX

