

// CALCULATION LOGIC
    // Display
    function display(e) {
        document.getElementById('result').value += e
    }

    // Solve Logic
    function solve() {
        let x= document.getElementById('result').value;
        let y= eval(x);
        document.getElementById('result').value =y;
    }

    // Clear Logic
    function clearScreen() {
        document.getElementById('result').value = ''
    }
// ___________________________

function themeSelector() {
    let theme = document.getElementById("body")
    theme.classList.toggle("dark-theme")

}
