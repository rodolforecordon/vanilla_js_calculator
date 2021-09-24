function Calculator() {
  const display = document.querySelector('#display');

  this.start = () => clickButtons();
  
  const clickButtons = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) btnToDisplay(el.innerText);
      if (el.classList.contains('btn-clear')) clearDisplay();
      if (el.classList.contains('btn-del')) deleteLast();
      if (el.classList.contains('btn-eql')) equal();
    });

    document.addEventListener('keydown', e => {
      if (/([0-9])|([+-/()\*.])/.test(e.key)) btnToDisplay(e.key);
      if (e.key === 'Delete') clearDisplay();
      if (e.key === 'Backspace') deleteLast();
      if (e.key === '=' || e.key === 'Enter') equal();
    });
  };

  const btnToDisplay = value => display.value += value;
  const clearDisplay = () => display.value = '';
  const deleteLast = () => display.value = display.value.slice(0, -1);

  const equal = () => {
    let conta = display.value;
    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta inválida');
        return;
      }
      display.value = conta;
    } catch(e) {
      alert('Conta inválida');
    }
  };
};

const calculadora = new Calculator();
calculadora.start();