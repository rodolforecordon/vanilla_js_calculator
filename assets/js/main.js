(function createButtons() {
  const buttonsDiv = document.querySelector('#calc-buttons');

  function createEl(elName, elText, elId, elClass) {
    const el = document.createElement(elName);
    const text = document.createTextNode(elText);
    el.appendChild(text);
    if(elId) el.setAttribute('id', elId);
    if(elClass) el.setAttribute('class', elClass);
    buttonsDiv.appendChild(el);
  }

  createEl('span', 'C', 'clear', 'btn');
  createEl('span', '(', '(', 'btn');
  createEl('span', ')', ')', 'btn');
  createEl('span', '/', '/', 'btn');
  createEl('span', '7', '7', 'btn');
  createEl('span', '8', '8', 'btn');
  createEl('span', '9', '9', 'btn');
  createEl('span', '*', '*', 'btn');
  createEl('span', '4', '4', 'btn');
  createEl('span', '5', '5', 'btn');
  createEl('span', '6', '6', 'btn');
  createEl('span', '+', '+', 'btn');
  createEl('span', '1', '1', 'btn');
  createEl('span', '2', '2', 'btn');
  createEl('span', '3', '3', 'btn');
  createEl('span', '-', '-', 'btn');
  createEl('span', '.', '.', 'btn');
  createEl('span', '0', '0', 'btn');
  createEl('span', '<<', '<<', 'btn');
  createEl('span', '=', '=', 'btn');
})();