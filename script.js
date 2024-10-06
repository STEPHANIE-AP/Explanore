const exoplanets = [
    {
        name: "Proxima Centauri b",
        description: "Proxima Centauri b is an Earth-sized exoplanet located in the habitable zone of its star.",
        image: "https://example.com/proxima_centauri_b.jpg"
    },
    {
        name: "TRAPPIST-1e",
        description: "TRAPPIST-1e is one of the seven Earth-sized planets orbiting the TRAPPIST-1 star, located about 40 light years away.",
        image: "https://example.com/trappist_1e.jpg"
    },
    {
        name: "Kepler-186f",
        description: "Kepler-186f is the first Earth-sized planet discovered in the habitable zone of another star.",
        image: "https://example.com/kepler_186f.jpg"
    },
    // Add more exoplanets as needed
];

document.addEventListener("DOMContentLoaded", () => {
    const exoplanetList = document.getElementById('exoplanet-list');
    
    exoplanets.forEach(exoplanet => {
        const exoplanetDiv = document.createElement('div');
        exoplanetDiv.classList.add('exoplanet');
        
        exoplanetDiv.innerHTML = `
            <h3>${exoplanet.name}</h3>
            <img src="${exoplanet.image}" alt="${exoplanet.name}">
            <p>${exoplanet.description}</p>
        `;
        
        exoplanetList.appendChild(exoplanetDiv);
    });
});

// Quiz functionality
function checkAnswer() {
    const answer = document.getElementById('quiz-answer').value.toLowerCase();
    const result = document.getElementById('quiz-result');
    if (answer === "a planet outside our solar system") {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Incorrect. Try again!";
    }
}

// Enhanced quiz functionality
function checkMultipleChoiceAnswer() {
    const answers = document.getElementsByName('quiz-answer');
    let selectedAnswer;
    for (const answer of answers) {
        if (answer.checked) {
            selectedAnswer = answer.value;
            break;
        }
    }
    
    const result = document.getElementById('quiz-result');
    if (selectedAnswer === "correct") {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Incorrect. Try again!";
    }
}

// Search functionality
function filterExoplanets() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const exoplanetList = document.getElementById('exoplanet-list');
    const exoplanetDivs = exoplanetList.getElementsByClassName('exoplanet');
    
    for (const exoplanetDiv of exoplanetDivs) {
        const title = exoplanetDiv.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (title.includes(input)) {
            exoplanetDiv.style.display = "";
        } else {
            exoplanetDiv.style.display = "none";
        }
    }
}

// Fun facts functionality
const facts = [
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "The first exoplanet discovered orbiting a sun-like star was 51 Pegasi b in 1995.",
    "Some exoplanets have extreme weather, like glass rain or temperatures exceeding 2000°C!",
    "Exoplanets can be found by different methods including transit, radial velocity, and direct imaging.",
    "The largest exoplanet discovered to date is HD 100546 b, which is about six times the size of Jupiter.",
    "The closest known exoplanet, Proxima Centauri b, is about 4.24 light-years away.",
    "More than 5,000 exoplanets have been confirmed as of 2024, with thousands more waiting to be validated.",
    "Some exoplanets are classified as 'hot Jupiters', gas giants that orbit very close to their stars.",
    "The discovery of exoplanets has opened up new possibilities for finding life beyond Earth.",
    "Many exoplanets have been found in systems with multiple planets, such as the TRAPPIST-1 system."
];


function showRandomFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
