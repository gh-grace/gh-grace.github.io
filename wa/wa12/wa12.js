function getQuote () { 
    const block = document.createElement("h2");
    const dogFact = fetch("https://dogapi.dog/api/v2/facts", {
        headers: {
          "Accept": "application/json"
        }
    })
    .then ((response)) => {return response.json()}    
    .then ((jsonData)) => {    } 

    // block.setAttribute("id", 'block${tick}')
    //block.ineerHTML = jsonData["joke"];

    console.log(jsonData);



      

    // try -> tries something; if it returns an error, it puts us into the catch block
    try { 
        const response = await fetch(endpoint);
        // if !response.ok is "if the response ISN'T okay (status code 200)"
        if (!response.ok) { 
            throw Error(response.statusTest); 
        }
        const json = await response.json();
        
        // console.log(json); 

        // JSON is a dictionary, which is like a list; we call specific pieces of information out based on the 'key' associated with that value
        displayQuote(json['question']); 
        answer = json['answer'];
        answerTxt.textContent = '';
    }
    catch(err) { 
        console.log(err); 
        alert('Failed to Feth fetch new quote');
    }
}

// this function shows the question
function displayQuote(question) {
    questionTxt.textContent = question;
}

// this function shows the answer
function displayAnswer() {
    answerTxt.textContent = answer;
}

// we run getQuote once when the script first loads to populate a question
// when the page is loading
getQuote();