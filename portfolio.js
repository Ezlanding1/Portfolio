var scroll = 0;

var certificates = document.getElementsByClassName("certificates")[0].getElementsByClassName("gallery")[0].getElementsByTagName("img");
console.log(certificates);

var fillableCircles = document.getElementsByClassName("circles")[0].getElementsByTagName("img");
console.log(fillableCircles);

if (fillableCircles.length != certificates.length){
    console.error("Size of cicles does not match size of certificates");
}

function scrollNext() {

    fillableCircles[scroll].src = "unfilled-circle.png";
    if (scroll < certificates.length-1)
        scroll++;

    document.querySelector(".gallery").scrollLeft = certificates[scroll].width * scroll;
    fillableCircles[scroll].src = "filled-circle.png";
}

function scrollPrevious() {

    fillableCircles[scroll].src = "unfilled-circle.png";
    if (scroll > 0)
        scroll--;
    document.querySelector(".gallery").scrollLeft = certificates[scroll].width * scroll;
    fillableCircles[scroll].src = "filled-circle.png";
}