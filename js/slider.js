'use strict'

function Factory() {
   this.arrayOfBtns = null;
   this.showingImg = null;
   this.imgSwap = null;
   this.currentIndex = 0; //Почему здесь нужно писать эти пустые значения? Вспоминаем определение свойств и методов объекта. Свойства - это исходные значения объекта. Методы - это действия, которые меняют значения свойств. То есть, в методы мы не можем сразу изменять или создавать свойства, мы можем их только менять. 

   this.init = function (elClass, arrayOfImgs) {
      let el = document.querySelector(elClass);
      this.arrayOfBtns = el.querySelectorAll('button');
      this.showingImg = arrayOfImgs;
      this.imgSwap = el.querySelector('.car-img');
      for (let i = 0; i < this.arrayOfBtns.length; i++) {
         this.arrayOfBtns[i].addEventListener('click', this.showImage.bind(this));
      }
      this.arrayOfBtns[0].setAttribute('disabled', '');
   }
   this.showImage = function (event) {
      let btnInnerHTML = event.currentTarget.innerHTML;
      switch (btnInnerHTML) {
         case 'Next':
            this.currentIndex++;
            this.imgSwap.setAttribute('src', this.showingImg[this.currentIndex]);
            break;
         case 'Previous':
            this.currentIndex--;
            this.imgSwap.setAttribute('src', this.showingImg[this.currentIndex]);
            break;
      }
      if (this.currentIndex === this.showingImg.length - 1) {
         this.arrayOfBtns[1].setAttribute('disabled', '');
         this.arrayOfBtns[0].removeAttribute('disabled');
      } else if (this.currentIndex === 0) {
         this.arrayOfBtns[0].setAttribute('disabled', '');
         this.arrayOfBtns[1].removeAttribute('disabled');
      } else {
         this.arrayOfBtns[1].removeAttribute('disabled');
         this.arrayOfBtns[0].removeAttribute('disabled');
      }
   }
}

console.log('Hello world');