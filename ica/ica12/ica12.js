const newBtn = document.querySelector('#js-new-quote'). addEventListener('click', getQuote);
// const questionTxt = document.querySelector('#js-quote-text');
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', testFunction);
let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote () { 
    // console.lag('Test');

    try { 
        const response = await fetch(endpoint);
        if (!response.ok) { 
            throw Error(response.statusTest); 
        }
        const json = await response.json();
        // console.log(json); 
        answerTxt.textContent
        displayQuote(json['question']); 

    }
    catch(err) { 
        console.log(err); 
        alert('Failed to Feth fetch new quote');
    }

}

function displayQuote(question) { 
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question; 
}

function displayQuote() { 
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = ''; 
}

function testFunction() { 
    console.log("Answer button clicked");
}