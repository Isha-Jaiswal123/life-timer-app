
let first = document.getElementById('container1');
let second = document.getElementById('container2');
let dobinput = document.getElementById("datepicker");
let dobbutton = document.getElementById("btn");
let dateOfBirth;


const updateAge = () => {
   let yearele = document.getElementById("year");
   let monthele = document.getElementById("month");
   let dayele = document.getElementById("day");
   let hourele = document.getElementById("hour");
   let dateele = document.getElementById("minute");
   let secondele = document.getElementById("second");

   let number1=document.getElementById('number1');
   let number2=document.getElementById('number2');
   let number3=document.getElementById('number3');
   let number4=document.getElementById('number4');
   let number5=document.getElementById('number5');
   let number6=document.getElementById('number6');


   const currentdate = new Date();
   const datediff = currentdate - dateOfBirth;

   const year = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365));
   const month = Math.floor(datediff / (1000 * 60 * 60 * 24 * 365) % 12);
   const day = Math.floor(datediff / (1000 * 60 * 60 * 24) % 30);
   const hour = Math.floor(datediff / (1000 * 60 * 60 ) % 24);
   const minute = Math.floor(datediff / (1000 * 60 ) % 60);
   const second = Math.floor(datediff / (1000 ) % 60);

 number1.innerHTML=year;
 number2.innerHTML=month;
 number3.innerHTML=day;
 number4.innerHTML=hour;
 number5.innerHTML=minute;
 number6.innerHTML=second;

   

};
function setDOB() {
   const dateString= document.querySelector('input').value;

   dateOfBirth=new Date(dateString);
   // console.log(dateOfBirth)
   let first = document.getElementById('container1');
   let second = document.getElementById('container2');
   if (dateOfBirth) {
      first.style.display = 'none';
      second.style.display = 'grid'
     
      setInterval(() => updateAge(), 1000);
   }
   else {
      second.style.display = 'grid';
   }

}


