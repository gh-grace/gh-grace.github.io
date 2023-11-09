const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ["images/download1.jpg",
                "images/download2.jpg",
                "images/download3.jpg",
                "images/download4.jpg",
                "images/download5.jpg",];

const altText = { 
    "image1" : "Mountains",
    "image2" : "Waterfall",
    "image3" : "Ocean",
    "image4" : "Forest",
    "image5" : "Lake with moutains in the back"};

// console.log(altText["image4"]);

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText["image" + (i+1)]);
    thumbBar.appendChild(newImage);

function displayImage(){ 
    displayedImage.setAttribute('src', images[i]);
    displayedmage.setAttribute('alt', altText["image" + (i+1)]);
}
    newImage.addEventListener("click", displayImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else if (btn.getAttribute("class") == "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})