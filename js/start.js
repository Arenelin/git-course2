// const slider1 = slidersFactory.createNewSlider();
// const slider2 = slidersFactory.createNewSlider();
// const slider3 = slidersFactory.createNewSlider();

// slider1.init('.slider');
// slider2.init('.slider2');
// slider3.init('.slider3');

let arrayOfImgsCrypto = ['/img/04.jpg', '/img/05.jpg', '/img/06.jpg', '/img/07.jpg'];
let arrayOfImgsCars = ['/img/car1.jpg', '/img/car2.jpg', '/img/car3.jpg'];

const slider1 = new Factory(); //Мы создаем пустой шаблон объекта
slider1.init('.slider', arrayOfImgsCrypto); // Мы изменяем свойства объекта, обращаясь к методу

const slider2 = new Factory();
slider2.init('.slider2', arrayOfImgsCars);

const slider3 = new Factory();
slider3.init('.slider3', arrayOfImgsCrypto);


