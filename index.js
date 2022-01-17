// code for changing background ****************************

let number = 0;
let url = ["images/icon-moon.svg"];
let selector = [".parent", ".typing", "body", ".typing-input", "ul", ".three-options-mobile", ".three-options", ".clear", ".three-options", ".clear"];
let selector2 = ["colour-2", "colour-2", "bg-2", "colour-2", "colour-2", "colour-2", "white", "white-clear", "black", "black-clear"];

document.querySelector(".sun").addEventListener("click", function() {
  for (var i = 0; i < selector.length; i++) {
    document.querySelector(selector[i]).classList.toggle(selector2[i]);
  }



  url.push(this.getAttribute("src"));
  document.querySelector(".sun").removeAttribute("src");
  document.querySelector(".sun").setAttribute("src", url[number]);
  number++;

});
// ********************************************


if (window.innerWidth < 560) {
  document.querySelector(".three-options").remove();
}




const parent = document.querySelector("ul");
let itemnumber = 1
let buttonclick = [];
let first = true;
let listnumber = 1;
let divnumber = 1;

// code for adding list *******************************************
document.querySelector(".typing").addEventListener("keydown", function(event) {

  if (first === true) {

    if (event.key === "Enter") {

      let liclass = "li-" + divnumber;
      const newele = document.createElement("hr");
      let inputvalue = document.querySelector(".typing-input").value;

      document.querySelector("ul").classList.remove("hidden-list");
      document.querySelector("li").classList.add(liclass);
      parent.insertBefore(newele, parent.lastElementChild.nextSibling);
      document.querySelector("." + liclass).innerHTML = "<img src = images/icon-check.svg>" + "<P>" + inputvalue + "</P>" + "<img src = images/icon-cross.svg >";
      document.querySelectorAll("." + liclass + " img")[0].setAttribute("class", "check");
      document.querySelectorAll("." + liclass + " img")[1].setAttribute("class", "cross");
      document.querySelector("." + liclass).classList.add("add");
      document.querySelector(".typing-input").value = "";

      document.querySelector("." + liclass + " .check").addEventListener("click", function() {
        document.querySelector("." + liclass + " .check").classList.toggle("hidden-image");
        document.querySelector("." + liclass + " p").classList.toggle("paraindiv");
        document.querySelector("." + liclass).classList.toggle("remove");
        document.querySelector("." + liclass).classList.toggle("add");
        if (document.querySelector("." + liclass).classList.contains("remove") === true) {
          buttonclick.push("remove");
        } else {
          buttonclick.pop();
        }
      });


      document.querySelector("." + liclass + " .cross").addEventListener("click", function() {
        this.parentElement.nextSibling.remove();
        this.parentElement.remove();

        listnumber = listnumber - 1;
        itemnumber--;
        document.querySelector(".itemsleft").innerHTML = itemnumber + " Items left";

        if (this.classList.contains("remove")) {
          buttonclick.pop();
        }
      });

      document.querySelector(".itemsleft").innerHTML = itemnumber + " Items left";
      first = false;
    }

  } else if (event.key === "Enter") {
    let divs = divnumber++;
    let liclass = "li-" + divnumber;
    let newele2 = document.createElement("hr");
    let newdiv = document.createElement("li");
    let input2 = document.querySelector(".typing-input");

    parent.insertBefore(newdiv, document.querySelector("li"));
    parent.insertBefore(newele2, document.querySelector(".li-" + divs));
    newdiv.classList.add("add");
    newdiv.classList.add(liclass);
    newdiv.innerHTML = "<img src = images/icon-check.svg>" + "<P>" + input2.value + "</P>" + "<img src = images/icon-cross.svg >";
    document.querySelectorAll("." + liclass + " img")[0].setAttribute("class", "check");
    document.querySelectorAll("." + liclass + " img")[1].setAttribute("class", "cross");
    input2.value = "";
    listnumber++;

    document.querySelector("." + liclass + " .check").addEventListener("click", function() {
      document.querySelector("." + liclass + " .check").classList.toggle("hidden-image");
      document.querySelector("." + liclass + " p").classList.toggle("paraindiv");
      document.querySelector("." + liclass).classList.toggle("remove");
      document.querySelector("." + liclass).classList.toggle("add");
      if (document.querySelector("." + liclass).classList.contains("remove") === true) {
        buttonclick.push("remove");
      } else {
        buttonclick.pop();
      }
    });

    document.querySelector("." + liclass + " .cross").addEventListener("click", function() {
      this.parentElement.nextSibling.remove();
      this.parentElement.remove();

      listnumber = listnumber - 1;
      itemnumber--;
      document.querySelector(".itemsleft").innerHTML = itemnumber + " Items left";
      if (this.classList.contains("remove")) {
        buttonclick.pop();
      }
    });
    itemnumber++;
    document.querySelector(".itemsleft").innerHTML = itemnumber + " Items left";

  }




});
   // ******************************************


   // code for options tab ********************************

document.querySelector(".clear").addEventListener("click", function() {
  let cbl = buttonclick.length;
  itemnumber = itemnumber - buttonclick.length;

  for (var i = 0; i < cbl; i++) {
    document.querySelector(".remove").nextSibling.remove();
    document.querySelector(".remove").remove();

  }

  document.querySelector(".itemsleft").innerHTML = itemnumber + "Items left";
  listnumber = listnumber - cbl;
  buttonclick = [];

});

document.querySelector(".all").addEventListener("click", function() {
  let cbl1 = listnumber;
  for (var i = 0; i < cbl1; i++) {
    document.querySelectorAll("li")[i].classList.remove("hidden-list");
    document.querySelectorAll("li")[i].nextSibling.classList.remove("hidden-list");
  }

});

document.querySelector(".active").addEventListener("click", function() {

  let cbl2 = buttonclick.length;
  let remainadd = listnumber - cbl2;
  for (var i = 0; i < cbl2; i++) {
    document.querySelectorAll(".remove")[i].classList.add("hidden-list");
    document.querySelectorAll(".remove")[i].nextSibling.classList.add("hidden-list")
  }
  if (document.querySelector(".add").classList.contains("hidden-list") === true) {
    for (var i = 0; i < remainadd; i++) {
      document.querySelectorAll(".add")[i].classList.remove("hidden-list");
      document.querySelectorAll(".add")[i].nextSibling.classList.remove("hidden-list");
    }
  }
});

document.querySelector(".completed").addEventListener("click", function() {
  let cbl3 = buttonclick.length;
  let remainadd = listnumber - cbl3;
  if (cbl3 !== 0) {
    for (var i = 0; i < remainadd; i++) {
      document.querySelectorAll(".add")[i].classList.add("hidden-list");
      document.querySelectorAll(".add")[i].nextSibling.classList.add("hidden-list")
    }
  }

  if (document.querySelector(".remove").classList.contains("hidden-list") === true) {
    for (var i = 0; i < cbl3; i++) {
      document.querySelectorAll(".remove")[i].classList.remove("hidden-list");
      document.querySelectorAll(".remove")[i].nextSibling.classList.remove("hidden-list");
    }
  }

});
