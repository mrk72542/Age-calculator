
function calculateAge() {
    // Get the birthdate from the input field
    const birthdate = document.getElementById("birthdate").value;

    // Check if birthdate is valid
    if (!birthdate) {
        alert("Please enter your birthdate.");
        return;
    }

    // Calculate current date
    const today = new Date();

    // Calculate age in milliseconds
    const ageInMilliseconds = today - new Date(birthdate);

    // Convert milliseconds to years and months
    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.416));

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You are ${years} years and ${months} months old!`;
}
