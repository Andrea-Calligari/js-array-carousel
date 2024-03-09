//Recuper l'elemento item-container.
//Inserisco nell' item-container le immagini.
//Sfrutto il ciclo FOR per iterare le immagini nell'arrayimage.
//Creo una struttura  per ogni immagine da appendere all'HTML.
//Appendo all'item-container la struttura creata.
const imageArray = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];
const itemsContainerDOMElement = document.querySelector('.items-container');
// console.log(nextItemDOMElement)

for (let i = 0; i < imageArray.length; i++) {
    console.log(imageArray[i])
    const imgPath = imageArray[i];

    const itemSliderHTML = `
    <div class="item">
            <img src="${imgPath}" alt="">
     </div>

    `;
    // console.log(itemsContainerDOMElement, imgPath)

    itemsContainerDOMElement.innerHTML += itemSliderHTML;

}


const divItemList = document.getElementsByClassName('item');

let activeItemI = 0;
const firstItem = divItemList[activeItemI];
firstItem.classList.add('active');

const nextDOMElement = document.querySelector('.next');


// console.log(divItemList)

nextDOMElement.addEventListener('click', function () {


    divItemList[activeItemI].classList.remove('active');

    activeItemI++

    divItemList[activeItemI].classList.add('active');


    console.log(activeItemI)


})






