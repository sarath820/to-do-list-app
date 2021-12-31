

document.querySelector(".sun").addEventListener("click",function(){
  document.querySelector("body").classList.toggle("colour");
  var number = 0;
  var url = ["images/icon-moon.svg"];

  url.push( this.getAttribute("src"));

  document.querySelector(".sun").removeAttribute("src");
  document.querySelector(".sun").setAttribute("src",url[number]);
  number++;

});
const parent = document.querySelector(".parent");
let child  = document.querySelector(".details");
const newdiv = document.createElement("div");

newdiv.classList.add("div-0");
newdiv.classList.add("div-1");

let first = true;
let numerical = 1;
let newdivnumber = 2;
let clearbutton = [];
let cleatbutton2 = [];
let divname = [];

document.querySelector(".typing").addEventListener("keydown",function(event){

if(first === true){

    if(event.key === "Enter"){

        var inputvalue = document.querySelector(".typing-input").value;
        newdiv.innerHTML = "<input>" + "<p>" + inputvalue+ "</p>" ;

      document.querySelector(".typing-input").value = "";

    parent.insertBefore(newdiv, child);
    divname.push("div-1");
   document.querySelector(".div-1 input").setAttribute("type","checkbox");
   document.querySelector(".div-1 input").addEventListener("click",function(){
     document.querySelector(".div-1 p").classList.toggle("paraindiv");
     document.querySelector(".div-1").classList.toggle("remove");
     if(document.querySelector(".div-1").classList.contains("remove") === true){
    clearbutton.push("remove");
  }else {
    clearbutton.pop();
  }

   });
    first = false;
    }

  }else if (event.key === "Enter") {
    let childnumber = "div-"+numerical;
    let newdivnumerical = "div-"+newdivnumber;
     let newdiv2 = document.createElement("div");
      newdiv2.classList.add("div-0");
      newdiv2.classList.add(newdivnumerical);
      let input2 = document.querySelector(".typing-input");
      newdiv2.innerHTML = "<input>" + "<p>" + input2.value + "</p>";
      input2.value = "";
      parent.insertBefore(newdiv2, document.querySelector("."+ childnumber));
      divname.push(newdivnumerical);
      document.querySelector("."+ newdivnumerical+" input").setAttribute("type","checkbox");
      numerical++;
      newdivnumber++;
      document.querySelector("."+newdivnumerical+" input").addEventListener("click",function(){
        document.querySelector("."+newdivnumerical+" p").classList.toggle("paraindiv");
        document.querySelector("."+newdivnumerical).classList.toggle("remove");
        if(document.querySelector("."+newdivnumerical).classList.contains("remove") === true){
       clearbutton.push("remove");
       clearbutton2.push(newdivnumerical);
     }else {
       clearbutton.pop();
      let indexvalue = cleatbutton2.indexOf(newdivnumerical);
       clearbutton2.splice(indexvalue);
     }

      });




  }
});
document.querySelector(".clear").addEventListener("click",function(){
  let cbl = clearbutton.length;
  for(var i = 0; i < cbl; i++){
  document.querySelector(".remove").remove();

}
});
