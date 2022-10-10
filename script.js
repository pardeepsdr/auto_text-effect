const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.!";
let index = 1;
let speed = 300 / speedElement.value;

const writeText = () => {
    textElement.innerText = text.slice(0, index);
    index++;
    if (index > text.length) index = 1;
    setTimeout(writeText, speed);
};

writeText();

speedElement.addEventListener("input", (e) => (speed = 300 / e.target.value));