document.getElementById("all").onclick = function() {allPics()};
document.getElementById("nature").onclick = function() {splitNaturePics()};
document.getElementById("animals").onclick = function() {splitAnimalPics()};
document.getElementById("flowres").onclick = function() {splitFlowerPics()};
const natures=document.getElementsByClassName("nature");
const animals=document.getElementsByClassName("animals");
const flowres=document.getElementsByClassName("flowres");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var span = document.getElementsByClassName("close")[0];


function allPics() {
    console.log("a");
    $( function() {
        $( ".nature" ).show();
        $( ".animals" ).show();
        $( ".flowres" ).show();
      } );
}

function splitNaturePics() {
    $( function() {
        $( ".nature" ).show();
        $( ".animals" ).hide();
        $( ".flowres" ).hide();
      } );
}

function splitAnimalPics() {
    $( function() {
        $( ".nature" ).hide();
        $( ".animals" ).show();
        $( ".flowres" ).hide();
      } );
}

function splitFlowerPics() {
    $( function() {
        $( ".nature" ).hide();
        $( ".animals" ).hide();
        $( ".flowres" ).show();
      } );
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
function onClick(element) {
    modalImg.src = element.src;
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}