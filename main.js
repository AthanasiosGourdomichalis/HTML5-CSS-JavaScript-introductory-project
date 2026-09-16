// 1) Display a welcome message with date in index.html

if (window.location.pathname.endsWith('index.html')) {
    //Function to get the appropriate greeting based on the time
    function getGreeting() {
        const now = new Date(); //Date
        const hours = now.getHours(); //Hour

        if (hours < 12) {
            return 'Good Morning!';
        } else if (hours < 22) {
            return 'Good Evening!';
        } else {
            return 'Good Night!';
        }
    }

    //Function to get the current date in DD/MM/YYYY format
    function getCurrentDate() {
        const now = new Date(); //current date 
        const day = String(now.getDate()).padStart(2,'0'); //only with 2 digits
        const month = String(now.getMonth() + 1).padStart(2, '0'); //only with 2 digits
        const year = now.getFullYear(); //current year

        return `${day}/${month}/${year}`; //return the full current date
    }

    //Function to display the welcoming message
    function initHomePage() {
        const currentDate = getCurrentDate(); //we get the current date
        const greeting = getGreeting(); //we take the appropriate greeting 
        //Display
        alert(`${greeting} Today is ${currentDate}. Welcome to the Home Page of ✳Visit Buenos Aires! Browse through the pages, gain new knowledge, and play the Quiz!`);
    }
    //We call initHomePage for when the page loads
    window.onload = initHomePage;
}

// 2) Open email in contact.html

if (window.location.pathname.endsWith('contact.html')) {
    //Function that redirects to a mailto link to send an email
    function openMail(email) {
        window.location.href = `mailto:${email}`;
    }
}

// 3) Change background color in history.html

if (window.location.pathname.endsWith('history.html')) {
    //Function to change the color of a paragraph with a specific ID
    function changeBackgroundColor(color) {
        const paragraph = document.getElementById("myparagraph"); //we select the paragraph
        paragraph.style.backgroundColor = color; //color change
    }
}

// 4) Functions: myFunction(), to display the message upon Quiz submission 
    // and result(), to calculate the score and display the message
function myFunction(message) { //function "myFunction()" takes as an argument a welocming message, to display the appropriate greeting
    // the myFunction function gets the user's name from the userInput field
    var name = document.getElementById("userInput").value;
    // message display
    document.getElementById("demo").innerHTML = "<div class='msg'> Welcome <b>" + name + "</b>, " + message + "!</div>";
}

function result(){
    var score=0; //score variable initialization
    if(document.getElementById('correct1').checked) //check if the correct answer for Question 1 is checked, i.e., the circle has been clicked 
    {
        score++;
    }
    if(document.getElementById('correct2').checked) //check if the correct answer for Question 2 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }
    if(document.getElementById('correct3').checked) //check if the correct answer for Question 3 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }
    if(document.getElementById('correct4').checked) //check if the correct answer for Question 4 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }
    if(document.getElementById('correct5').checked) //check if the correct answer for Question 5 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }
    if(document.getElementById('correct6').checked) //check if the correct answer for Question 6 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }
    if(document.getElementById('correct7').checked) //check if the correct answer for Question 7 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }
    if(document.getElementById('correct8').checked) //check if the correct answer for Question 8 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }
    if(document.getElementById('correct9').checked) //check if the correct answer for Question 9 is checked, i.e., the circle has been clicked
    { 
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    } 
    if(document.getElementById('correct10').checked) // Check if the correct answer for Question 10 is checked, i.e., the circle has been clicked
    {
        score++; //increment the score variable if the condition is TRUE, i.e., if the user's answer matches the correct one, i.e., if the correct answer is checked
    }

    //The function gets the user's name from the userInput field as entered at the start of the Quiz
    var name = document.getElementById("userInput").value;
    //Message displayed in an alert box with the score along with the user's name
    alert("Dear " +name+", your total score is: " +score +"/10 .")
    
   
    

}