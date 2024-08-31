export function showMenu() {
    let menu = document.querySelector('#content');
    
    while (menu.firstChild) {
        menu.removeChild(menu.firstChild);
    }

    let header = document.createElement('h1');
    header.textContent = 'Here are the great items on our menu!'

    let list = document.createElement('ul');
    let item1 = document.createElement('li');
    item1.textContent = 'Apple Pie - $2';
    list.appendChild(item1);
    let item2 = document.createElement('li');
    item2.textContent = 'Apple Tart - $1.50';
    list.appendChild(item2);
    let item3 = document.createElement('li');
    item3.textContent = 'Just an Apple - $0.50';
    list.appendChild(item3);
    let item4 = document.createElement('li');
    item4.textContent = 'Apple Smoothie - $1';
    list.appendChild(item4);
    let item5 = document.createElement('li');
    item5.textContent = 'Apple Fries - $0.75';
    list.appendChild(item5);

    menu.appendChild(header);
    menu.appendChild(list);
}