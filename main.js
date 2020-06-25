// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
var numbertostring=null;

const saveNumber = (num) => {
  numbertostring = parseInt(num)
  
}

const displayString = () => {
  var n=numbertostring.toString();
  console.log (numbertostring)
  document.getElementById("displays").innerHTML = "string = " + n;
  return
}


// Write a JavaScript program to convert a string to the number.
var stringtonum=null;

const saveNumber2 = (num) => {
  stringtonum = num
  
}

const displayString2 = () => {
  var n=parseInt(stringtonum)
  console.log (n)
  document.getElementById("displayn").innerHTML = "number = " + n;
  return
}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
var data="blankscreennodata";
typeofdata=null;

const saveData = (num) => {
  data = num
  
  if (!isNaN(num))
  {
    console.log ("it number")
    data = parseInt(num)
  }

  if (num == 'true') {
     data = true
  }

  if (num == 'false') {
    data = false}

  if (num == 'Null' || num == 'null' || num == "NULL"){
    data = null;
 }

  if (num == 'Undefined'){
    console.log("undifined")
  }
}


const displayType = () => {
  value = getType()
  document.getElementById("displayType").innerHTML = 'This is a ' + typeofdata;
  return
}

const getType = () => {

    console.log (typeof data)
    typeofdata = typeof data
    if (isNaN(data))
    {document.getElementById("displayType2").innerHTML = 'Also NaN' }
    if (data == 'blankscreennodata')
    { typeofdata = 'Undefined'}
    data='blankscreennodata'
}
  
// Write a JavaScript program that adds 2 numbers together.
var number1=null;
var number2=null;
const savenum1= (num) => {
  number1 = parseInt(num)
  console.log(number1)
  }
  const savenum2= (num) => {
    number2 = parseInt(num)
    }

const addnums =() =>{
  total = number1 + number2
  document.getElementById("displaysum").innerHTML = "Sum =" + total;
}

// Write a JavaScript program that runs only when 2 things are true.
var number1a=null;
var number2a=null;

const savenum1a= (num) => {
  number1a = parseInt(num)
  console.log(number1a)
  }

  const savenum2a= (num) => {
    number2a = parseInt(num)
    console.log(number2a)
    }

const addnums2 =() =>{
  if (number1a == number2a){
  total = number1a + number2a
  document.getElementById("displaysum2").innerHTML = "Sum =" + total;}
}




var number1b=null;
var number2b=null;

const savenum1b= (num) => {
  number1b = parseInt(num)
  console.log(number1b)
  }

  const savenum2b= (num) => {
    number2b = parseInt(num)
    console.log(number2b)
    }

const addnums3 =() =>{
  if (number1b >100 && number2b > 100){
  total = number1b + number2b
  document.getElementById("displaysum3").innerHTML = "Sum =" + total;}
}

// Write a JavaScript program that runs when 1 of 2 things are true.

var number1c=null;
var number2c=null;

const savenum1c= (num) => {
  number1c = parseInt(num)
  
  }

  const savenum2c= (num) => {
    number2c = parseInt(num)
    
    }

const addnums4 =() =>{
  if (number1c >100 || number2c > 100){
  total = number1c + number2c
  document.getElementById("displaysum4").innerHTML = "Sum =" + total;}
}

// Write a JavaScript program that runs when both things are not true.  
var number1d=null;
var number2d=null;

const savenum1d= (num) => {
  number1d = parseInt(num)
  console.log(number1d)
  }

  const savenum2d= (num) => {
    number2d = parseInt(num)
    
    }

const addnums5 =() =>{
  if (!(number1d == 100) && !(number2d == 100)){
  total = number1d + number2d
  document.getElementById("displaysum5").innerHTML = "Sum =" + total;}
}








// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
