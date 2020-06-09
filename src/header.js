const createHeader = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.setAttribute('class', 'header');

    const headerImg = document.createElement('img');
    headerImg.setAttribute('src', '');
    content.appendChild(header);


}
export {createHeader};