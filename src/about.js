export function showAbout() {
    let about = document.querySelector('#content');
    
    while (about.firstChild) {
        about.removeChild(about.firstChild);
    }

    let header = document.createElement('h1');
    header.textContent = 'About This Restaurant';

    let paragraph = document.createElement('p');
    paragraph.textContent = 'This restaurant is made by an apple lover, for apple lovers. I hope you enjoy everything on offer!'

    about.appendChild(header);
    about.appendChild(paragraph);
}