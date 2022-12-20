let boxOfInterests = document.querySelectorAll(".interest__check");


let mainCheckOne = boxOfInterests[0];
let mainCheckTwo = boxOfInterests[3];

mainCheckOne.onclick = function () {
  let firstBlock = mainCheckOne
    .closest(".interest")
    .querySelector(".interests_active")
    .querySelectorAll(".interest");

  for (let i = 0; i < firstBlock.length; i++) {
    let elements = firstBlock[i].querySelectorAll(".interest__check");
    elements[0].checked = true;
  }
};


mainCheckTwo.onclick = function () {
  let secondtBlock = mainCheckTwo
    .closest(".interest")
    .querySelector(".interests_active")
    .querySelectorAll(".interest");

  for (let i = 0; i < secondtBlock.length; i++) {
    let elements = secondtBlock[i].querySelectorAll(".interest__check");
    elements[0].checked = true;
  }
};








/*
for (let i=0;i<boxOfInterests.length;i++){
   
  if(boxOfInterests[i].closest(".iresntets_active")==null){

    let thingsOfSelect = Array.from(boxOfInterests[i].closest(".interest").querySelectorAll(".interest__check"));
    
    boxOfInterests[i].onclick = function () {
      let firstBlock = mainCheckOne
        .closest(".interest")
        .querySelector(".interests_active")
        .querySelectorAll(".interest");

      for (let i = 0; i < firstBlock.length; i++) {
        let elements = firstBlock[i].querySelectorAll(".interest__check");
        elements[0].checked = true;
      }
    };
  }
}

 /*thingsOfSelect.forEach((el) => {
       if (el.checked == false) {
         el.checked = "true";
       } else if (el.checked == "true") {
         console.log(333);
         el.removeAttribute("checked");
         el.checked = "false";
       }
     });*/

// boxOfInterests[i].onclick = function (){
// let thingsOfSelect = boxOfInterests[i].closest(".interest").querySelectorAll(".interest__check");*/
