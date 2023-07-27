function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Cannot divide by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // Test the calculator function
  const number1 = 12;
  const number2 = 4;
  const operation = '-';
  const result = calculator(number1, number2, operation);
  
  console.log(`Result of ${number1} ${operation} ${number2} is:`, result);
  