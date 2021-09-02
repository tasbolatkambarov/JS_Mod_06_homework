// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function inputNumber(N) {
    let check = true;
    for (let i = 4; i < N; i++) {
      if (N % i === 0) {
        alert('Not simple number');
        check = false;
        
        break;
      }
    }
    if (check) alert('Simple number');
  }
  
  const N = prompt('Input number under 1000');
  if (N > 1000) {
    alert('Wrong. From 1 to 1000');
  } else if (N < 0){
    alert('Not a simple number');
  } else {
    inputNumber(N);
  }