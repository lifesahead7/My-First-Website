// Function to calculate weight on different celestial bodies
function calculateWeight() {
    const weight = document.getElementById('weight').value;
    const body = document.getElementById('body').value;
    const resultBox = document.getElementById('result');

    const gravity = {
        sun: 27.9,
        moon: 0.166,
        mars: 0.377,
        jupiter: 2.36,
        blackhole: 10 ** 100 // Arbitrary theoretical value
    };

    resultBox.textContent = ''; // Clear previous result

    if (weight && body) {
        const result = (weight * gravity[body]).toFixed(2);
        resultBox.textContent = `${body.charAt(0).toUpperCase() + body.slice(1)} weight: ${result} kg.`;
    } else {
        resultBox.textContent = 'Please enter your weight and select a celestial body.';
    }
}

// Function to calculate light travel time
function calculateLightTravelTime() {
    const distance = document.getElementById('distance').value;
    const resultBox = document.getElementById('light-result');

    resultBox.textContent = ''; // Clear previous result

    if (distance) {
        const time = (distance * 365.25).toFixed(2); // Light-years to days
        resultBox.textContent = `Light would take approximately ${time} days to travel ${distance} light-years.`;
    } else {
        resultBox.textContent = 'Please enter a valid distance.';
    }
}

// Function to calculate escape velocity
function calculateEscapeVelocity() {
    const mass = document.getElementById('mass').value;
    const radius = document.getElementById('radius').value;
    const resultBox = document.getElementById('escape-result');

    resultBox.textContent = ''; // Clear previous result

    if (mass && radius) {
        const G = 6.67430e-11; // Gravitational constant
        const velocity = Math.sqrt((2 * G * mass) / radius).toFixed(2);
        resultBox.textContent = `The escape velocity is ${velocity} m/s.`;
    } else {
        resultBox.textContent = 'Please enter a valid mass and radius.';
    }
}

// Function to calculate orbital period
function calculateOrbitalPeriod() {
    const semiMajorAxis = document.getElementById('semi-major-axis').value;
    const resultBox = document.getElementById('orbit-result');

    resultBox.textContent = ''; // Clear previous result

    if (semiMajorAxis) {
        const period = Math.sqrt(Math.pow(semiMajorAxis, 3)).toFixed(2); // Kepler's Third Law
        resultBox.textContent = `The orbital period is approximately ${period} Earth years.`;
    } else {
        resultBox.textContent = 'Please enter a valid semi-major axis.';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-section");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

