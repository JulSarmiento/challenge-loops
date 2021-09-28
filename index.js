const BTN = document.getElementById('start');
const RESULT = document.getElementById('result');

/**
 * This event start a do while loop for asking words to make a sentence. The lopp ends when the user writes "ESC"
 */
BTN.addEventListener('click', () => {
  let text;
  let result = '';

  do{
    text = prompt('Por favor ingrese una palabra. Para finalizar escriba "ESC".');

    if(text !== 'ESC') {
      result = result.concat(' ', text);
    }

  }while(text !== "ESC");

  RESULT.innerHTML = `Su frase fue: "${result}".`;
  console.log(result)

})