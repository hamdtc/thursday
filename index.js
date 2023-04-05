// document.getElementById("count_el").innerHTML=05;

let count=0;
let savel=document.getElementById("s");

function increment(){
    count=count+1;
    document.getElementById("count_el").innerText=count;
}
function decrement(){
    count=count-1;
    document.getElementById("count_el").innerText=count;
}

function save(){
   let ans= count+ "- ";
   savel.textContent =ans+savel.textContent;
    count=0;
    document.getElementById("count_el").innerText=count;
}

 