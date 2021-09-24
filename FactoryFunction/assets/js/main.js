function createCalculator() {
  return {
    display: document.querySelector('#display'),

    start() {
      this.clickButtons();
    },
    
    clickButtons() {
      document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
        if (el.classList.contains('btn-clear')) this.clearDisplay();
        if (el.classList.contains('btn-del')) this.deleteLast();
        if (el.classList.contains('btn-eql')) this.equal();
      });

      document.addEventListener('keydown', e => {
        if (/([0-9])|([+-/()\*.])/.test(e.key)) this.btnToDisplay(e.key);
        if (e.key === 'Delete') this.clearDisplay();
        if (e.key === 'Backspace') this.deleteLast();
        if (e.key === '=' || e.key === 'Enter') this.equal();
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteLast() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equal() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
      }
    }
  };
};

const calculadora = createCalculator();
calculadora.start();