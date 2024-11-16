/* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0C0953;  /* Dark blue background */
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    position: relative;
}

/* Spaceship Design */
.spaceship {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 150px;
    background-color: #8B8B8B;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    z-index: -1;
}

.spaceship:before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 40px;
    background-color: #6C6C6C;
    border-radius: 50%;
}

.spaceship .window {
    position: absolute;
    top: 30px;
    left: 100px;
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 50%;
}

/* Calculator Container */
.calculator-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
}

/* Calculator Styling */
.calculator {
    //background: rgba(0, 0, 0, 0.7);
    //padding: 30px;
    //border-radius: 10px;
    //box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
    width: 480px;
    position: relative;
    z-index: 1;
}

.display {
    background: #222;
    color: #fff;
    text-align: right;
    padding: 20px;
    font-size: 2em;
    margin-bottom: 20px;
    border-radius: 10px;
    min-height: 50px;
    line-height: 50px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

.button {
    background: #0D47A1;
    color: white;
    font-size: 1em;
    border: none;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); /* Star shape */
    width: 75px;  /* Adjust button size */
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.button:hover {
    background-color: #444;
    transform: scale(1.1);
}

.button:active {
    background-color: #555;
}

button:focus {
    outline: none;
}
