function createButtons() {
  const buttonsDiv = document.querySelector('#calc-buttons');

  function createEl(elName, elText, elId, ...elClass) {
    const el = document.createElement(elName);
    const text = document.createTextNode(elText);
    el.appendChild(text);
    if(elId) el.setAttribute('id', elId);
    if(elClass) el.setAttribute('class', elClass.join(' '));
    buttonsDiv.appendChild(el);
  }

  createEl('span', 'C', 'clear', 'btn', 'btn-clear');
  createEl('span', '(', '(', 'btn', 'btn-num');
  createEl('span', ')', ')', 'btn', 'btn-num');
  createEl('span', '/', '/', 'btn', 'btn-num');
  createEl('span', '7', '7', 'btn', 'btn-num');
  createEl('span', '8', '8', 'btn', 'btn-num');
  createEl('span', '9', '9', 'btn', 'btn-num');
  createEl('span', '*', '*', 'btn', 'btn-num');
  createEl('span', '4', '4', 'btn', 'btn-num');
  createEl('span', '5', '5', 'btn', 'btn-num');
  createEl('span', '6', '6', 'btn', 'btn-num');
  createEl('span', '+', '+', 'btn', 'btn-num');
  createEl('span', '1', '1', 'btn', 'btn-num');
  createEl('span', '2', '2', 'btn', 'btn-num');
  createEl('span', '3', '3', 'btn', 'btn-num');
  createEl('span', '-', '-', 'btn', 'btn-num');
  createEl('span', '.', '.', 'btn', 'btn-num');
  createEl('span', '0', '0', 'btn', 'btn-num');
  createEl('span', '<<', '<<', 'btn', 'btn-del');
  createEl('span', '=', '=', 'btn', 'btn-eql');
}

createButtons();