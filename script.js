const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv= document.getElementById("result");

const checkPalindrome = () => {
    const input = userInput.value.trim(); 
    if (input === '') {
        alert("Please input a value");
        return;
    }

    const lowerCaseInput = input.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
    const reversedInput = lowerCaseInput.split('').reverse().join('');
    let resultMessage = `<strong>${userInput.value}</strong> ${lowerCaseInput === reversedInput ? 'is' : 'is not'} a palindrome.`;
    resultDiv.innerHTML = resultMessage;
};

checkButton.addEventListener("click", checkPalindrome);

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkPalindrome(userInput.value);
      userInput.value = '';
    }
  });