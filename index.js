// let course={
//     title: "this is  css course",
//     lesson: 10,
//     tutor: "hamd",
//     length:118,
//     isFree: true,
//     level:2,
//     tags: ["html","css","js"],
//     hello: function(){
//         console.log("this is hello fn in course");
//     }
// }


let newArr=["a","b"];

const inputEl=document.getElementById("input_el");
let inputBtn=document.getElementById("input_btn");
let ulel=document.getElementById("ul_el");
  


inputBtn.addEventListener ("click",newfn);
function newfn(){
    newArr.push(inputEl.value);
    console.log("hi there");
    console.log(newArr);
    
 }
 for(let i=0;i<newArr.length;i++){
    ulel.innerHTML +="<li>"+ newArr[i]+"</li>";
}


