import appleImage from './img/apples.jpg';

export function showContent() {
    let content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    let header = document.createElement('h1');
    header.textContent = 'Welcome to Alister\'s Apple Haven!!!';

    let imageNode = document.createElement('img');
    imageNode.src = appleImage;
    imageNode.width = '700';

    let paragraph = document.createElement('p');
    paragraph.textContent = `We have all of your apple needs here. If you like apple in your pie, we have it!
                If you like apple in your food, we have it! We even have apple-scented bathrooms!
                If you love apples, then you'll love this restaurant!!!`;

    content.appendChild(header);
    content.appendChild(imageNode);
    content.appendChild(paragraph);
}