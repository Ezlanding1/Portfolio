var expImages = [
    ["https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png", "width: 10%; height: 3%;"],
    ["https://preview.redd.it/tu3gt6ysfxq71.png?auto=webp&s=10ab55d9dc09e7ed6ea59bd5916800a5272d5969", "width: 11.5%; height: 5%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",  "width: 10%; height: 3%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",  "margin-left: 1%; width: 10%; height: 3%;"],
    ["https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png", "width: 12.5%; height: 5.5%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png", "width: 18%; height: 6%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "margin-left: 1%; margin-bottom: 1%; width: 10%; height: 3%;"],
    ["https://www.programiz.com/sites/tutorial2program/files/minheap_0.png", "width: 16%; height: 4%;"],
    ["https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png", "margin-left: -5%; width: 20%; height: 6%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", "margin-left: -5%; width: 16%; height: 5%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HTTP_logo_-_2014.svg/290px-HTTP_logo_-_2014.svg.png", "margin-bottom: 1%; width: 12%; height: 4%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bash_Logo_black_and_white_icon_only.svg/640px-Bash_Logo_black_and_white_icon_only.svg.png", "margin-left: 1%; width: 8%; height: 3%;"],
    ["https://cdn-icons-png.flaticon.com/512/3234/3234207.png",  "margin-left: 1%; margin-bottom: 1%; width: 10%; height: 3%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png",  "margin-left: 1%; margin-bottom: 1%; width: 10%; height: 3%;"],
    ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png",  "margin-left: 1%; margin-bottom: 2.5%; width: 10%; height: 3%;"],
    ["https://global-uploads.webflow.com/6047a9e35e5dc54ac86ddd90/63064c5652d40eda2eb7a838_33ac2334.png",  "margin-left: 1%; margin-bottom: 2.5%; width: 10%; height: 3%;"],
]
var expDOMImgs = []
var fadeInPlayed = false;
initialize();

var cScroll = 0;
var pScroll = 0;

const UNFILLED_CIRCLE = "Portfolio/unfilled-circle.png";
const FILLED_CIRCLE = "Portfolio/filled-circle.png";

var certificates = document.getElementsByClassName("certificates")[0].getElementsByClassName("gallery")[0].getElementsByTagName("img");
console.log(certificates);

var certFillableCircles = document.getElementsByClassName("circles")[0].getElementsByTagName("img");
console.log(certFillableCircles);

var projects = document.getElementsByClassName("projects")[0].getElementsByClassName("gallery")[0].getElementsByClassName("project");
console.log(certificates);

var projFillableCircles = document.getElementsByClassName("circles")[1].getElementsByTagName("img");
console.log(projFillableCircles);

if (certFillableCircles.length != certificates.length){
    console.error("Size of circles does not match size of certificates");
}

if (projFillableCircles.length != projects.length){
    console.log(projFillableCircles.length, projects.length);
    console.error("Size of circles does not match size of projects");
}

function scrollNext() {

    certFillableCircles[cScroll].src = UNFILLED_CIRCLE;
    if (cScroll < certificates.length-1)
        cScroll++;

    document.getElementsByClassName("certificates")[0].getElementsByClassName("gallery")[0].scrollLeft = certificates[cScroll].width * cScroll;
    certFillableCircles[cScroll].src = FILLED_CIRCLE;
}

function scrollPrevious() {

    certFillableCircles[cScroll].src = UNFILLED_CIRCLE;
    if (cScroll > 0)
        cScroll--;
    let gallery = document.getElementsByClassName("certificates")[0].getElementsByClassName("gallery")[0];
    gallery.scrollLeft = certificates[cScroll].width * cScroll;
    certFillableCircles[cScroll].src = FILLED_CIRCLE;
}

function pScrollNext() {

    projFillableCircles[pScroll].src = UNFILLED_CIRCLE;
    if (pScroll < projects.length-1)
        pScroll++;

    let gallery = document.getElementsByClassName("projects")[0].querySelector(".gallery");
    gallery.scrollLeft = projects[pScroll].clientWidth * pScroll;
    projFillableCircles[pScroll].src = FILLED_CIRCLE;
}

function pScrollPrevious() {

    projFillableCircles[pScroll].src = UNFILLED_CIRCLE;
    if (pScroll > 0)
        pScroll--;
    let gallery = document.getElementsByClassName("projects")[0].querySelector(".gallery");
    gallery.scrollLeft = projects[pScroll].clientWidth * pScroll;
    projFillableCircles[pScroll].src = FILLED_CIRCLE;
}

function initialize(){
    initExperience();
}

function initExperience(){

    expImages.forEach(url => {
        
        let img = document.createElement("img");
        img.src = url[0];
        img.style = url[1];
        expDOMImgs.push(img);
    });

    var observer = new IntersectionObserver(function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting === true) {
            if (fadeInPlayed === false){
                
                playFadeIn(document.getElementById("experience"), 0);
                fadeInPlayed = true;
            }
        }
    }, { threshold: [0] });
    
    observer.observe(document.querySelector("#experience"));
    
}

function playFadeIn(exp, i)
{
    if (i >= expImages.length){
        return;
    }

    expDOMImgs[i].classList.add("fadeIn");
    exp.appendChild(expDOMImgs[i]);
    setTimeout(function() { playFadeIn(exp, i+1) }, 1000);
}