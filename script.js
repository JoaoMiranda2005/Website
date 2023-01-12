let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

// Get the current date
var currentDate = new Date();

// Define the date you want to compare (May 27, 2005)
var birthDate = new Date(2005, 4, 27); // month is zero-indexed, so 4 is May

// Calculate the difference in milliseconds
var diff = currentDate - birthDate;

// Convert milliseconds to years
var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

// Get the paragraph element with the id and class
var ageElement = document.getElementById("mirandexage");

// Update the text content of the element to show the age
ageElement.textContent = "Age : "+ years + " Years old";
