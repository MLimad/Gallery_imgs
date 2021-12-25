
var box = document.querySelectorAll(".box");
var mainBox = document.getElementById('mainBox');



//Reset MainBox
var firstImgOnMainBox = "./imgs/" + box[0].getAttribute("imgValue") + ".jpg";
var nameFirstImg = box[0].getAttribute("nameValue");
var dateFirstImg = box[0].getAttribute("dateValue");
mainBox.firstElementChild.setAttribute('src', firstImgOnMainBox);
mainBox.firstElementChild.nextElementSibling.innerHTML = nameFirstImg;
mainBox.lastElementChild.innerHTML = dateFirstImg;





//Loop Over Boxes And Click on it
for (var i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function() {


    var valueImg = "./imgs/" + this.getAttribute("imgValue") + '.jpg';
    var valueName = this.getAttribute('nameValue');
    var valueDate = this.getAttribute('dateValue');

    mainBox.firstElementChild.setAttribute('src', valueImg);
    mainBox.firstElementChild.nextElementSibling.innerHTML = valueName;
    mainBox.lastElementChild.innerHTML = valueDate;

  });
}

