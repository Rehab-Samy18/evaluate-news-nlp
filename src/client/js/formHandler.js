//import { checkForName } from './nameChecker';
import { checkForURL } from './checkURL';

function handleSubmit(event) {
    
    event.preventDefault()
    const postData = async (url = '', data = {}) => {  //post function initialization
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        try {
            const newData = await response.json();
            return newData;
        } catch (error) {
            console.log('error', error);
        }
    }
    // check what text was put into the form field
    let formText = document.getElementById('url').value

    if(Client.checkForURL(formText)){   //If the url is correct 

    console.log("::: Form Submitted :::")
    postData('http://localhost:8081/meaningCloud', {url: formText})   //post function to send me the data 
    .then(function(res) {
        document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
    })
    
    } else {    //If the url is invaid
        alert('invalid URL, Try again');
    } 
}
export { handleSubmit }
