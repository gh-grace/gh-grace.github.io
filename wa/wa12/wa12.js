const btn = document.querySelector("#js-new-fact");
btn.addEventListener('click', getFact);
const block = document.querySelector(".fact");


function getFact () { 
    const dogFact = fetch("https://dogapi.dog/api/v2/facts", {
        headers: {
          "Accept": "application/json"
        }
    })
    .then ((response) => {return response.json()})
    .then ((jsonData) => {
        console.log(jsonData['data'][0]['attributes']['body'])
        block.textContent = jsonData['data'][0]['attributes']['body'];
        buildImage(jsonData["fact"]);
        setColor();
        const dogAnswer = document.querySelector('body');
    })
    // block.setAttribute("id", 'block${tick}')
    //block.innerHTML = jsonData["fact"];
} 

// def buildImage
function buildImage(fact) {}

var count = 1;
    function setColor() {
        var property = document.getElementById('js-new-fact');
        if (count == 0) {
            property.style.backgroundColor = "#000000"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#808080"
            count = 0;
        }
    }

// we run getFact once when the script first loads to populate a fact
// when the page is loading
getFact();

setColor();