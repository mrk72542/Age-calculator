const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate-age-button');
const resultElement = document.getElementById('age-result');

const mask = 'YYYY-MM-DD';

function calculateAge() {
  const birthdateString = birthdateInput.value;

  // Check for valid birthdate
  if (!birthdateString) {
    alert('Please enter your birthdate.');
    return;
  }

  // Calculate age in milliseconds
  const birthdate = new Date(birthdateString);
  const today = new Date();
  const ageInMilliseconds = today - birthdate;

  // Convert milliseconds to years and months
  const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.416)
  );

  displayAge(years, months);
}

function displayAge(years, months) {
  let currentAge = 0;
  const interval = setInterval(() => {
    if (currentAge >= years) {
      const ageText = `You are ${years} years and ${months} months old!`;

      if (years < 18) {
        resultElement.textContent = `${ageText} You are young and full of potential!`;
      } else if (years >= 18 && years < 30) {
        resultElement.textContent = `${ageText} You are in your prime, ready to conquer the world!`;
      } else {
        resultElement.textContent = `${ageText} You are experienced and wise, with a life full of stories!`;
      }

      clearInterval(interval);
      return;
    }
    resultElement.textContent = `You are ${currentAge} years and ${months} months old!`;
    currentAge += 0.1; // Adjust speed as desired
  }, 10); // Adjust animation interval
}

calculateButton.addEventListener('click', calculateAge);

birthdateInput.addEventListener('keyup', function (e) {
  let tempValue = birthdateInput.value;
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] !== '-' && tempValue.length < mask.length) {
      tempValue += e.key;
    }
  }
  birthdateInput.value = tempValue.slice(0, mask.length);
});
