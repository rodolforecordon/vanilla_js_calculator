(function createButtons() {
  const buttonsDiv = document.querySelector('#calc-buttons');

  function createEl(elName, elText, elId, ...elClass) {
    const el = document.createElement(elName);
    const text = document.createTextNode(elText);
    el.appendChild(text);
    if(elId) el.setAttribute('id', elId);
    if(elClass) el.setAttribute('class', elClass.join(' '));
    buttonsDiv.appendChild(el);
  }

  createEl('span', 'C', 'clear', 'btn', 'clear');
  createEl('span', '(', '(', 'btn', '(');
  createEl('span', ')', ')', 'btn', ')');
  createEl('span', '/', '/', 'btn', '/');
  createEl('span', '7', '7', 'btn', '7');
  createEl('span', '8', '8', 'btn', '8');
  createEl('span', '9', '9', 'btn', '9');
  createEl('span', '*', '*', 'btn', '*');
  createEl('span', '4', '4', 'btn', '4');
  createEl('span', '5', '5', 'btn', '5');
  createEl('span', '6', '6', 'btn', '6');
  createEl('span', '+', '+', 'btn', '+');
  createEl('span', '1', '1', 'btn', '1');
  createEl('span', '2', '2', 'btn', '2');
  createEl('span', '3', '3', 'btn', '3');
  createEl('span', '-', '-', 'btn', '-');
  createEl('span', '.', '.', 'btn', '.');
  createEl('span', '0', '0', 'btn', '0');
  createEl('span', '<<', '<<', 'btn', '<<');
  createEl('span', '=', '=', 'btn', '=');
})();

(function main() {
  document.addEventListener('click', (e) => {
    const elClass = e.target.classList.value;
    if (elClass.contains('')) ;
  })

  function factoryFunction() {
    return {
      get isNumber(num) {
        return typeof(num) === 'number';
      }
    }
  }

})();