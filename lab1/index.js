window.onload = () => {
  const starting = document.getElementById('start-block');
  const navHeight = document.getElementById('nav-block').offsetHeight;
  starting.style.height = `${(starting.offsetHeight - navHeight)}px`;

  const itemsTable = document.getElementById('items-table');

  fetch('./items.json').then((res) => res.json()).then((jsonData) => {
    jsonData.forEach((el) => {
      const tRow = document.createElement('tr');
      const itemIconTd = document.createElement('td');
      const itemDescrTd = document.createElement('td');
      const itemIcon = document.createElement('img');
      itemIcon.src = el.img;
      itemIcon.classList.add('item-icon');
      itemIconTd.appendChild(itemIcon);

      const splited = el.description.split('@');
      if (splited.length > 1) {
        splited.forEach((lex) => {
          if (lex.includes('img/')) {
            const inlineIcon = document.createElement('img');
            inlineIcon.src = lex;
            inlineIcon.classList.add('inline-icon');
            itemDescrTd.appendChild(inlineIcon);
          } else {
            const descrPart = document.createElement('span');
            descrPart.textContent = lex;
            itemDescrTd.appendChild(descrPart);
          }
        });
      } else {
        const itemDescr = document.createElement('span');
        itemDescr.textContent = el.description;
        itemDescrTd.appendChild(itemDescr);
      }

      tRow.appendChild(itemIconTd);
      tRow.appendChild(itemDescrTd);
      itemsTable.appendChild(tRow);
    });
  });
};
