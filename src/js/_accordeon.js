if(window.innerWidth < 767) {
 let productAccordions  = document.getElementsByClassName('product__characteristic');

 for (let i = 0; i < productAccordions.length; i++) {
  productAccordions[i].classList.add("accordion");
 }
}


// Аккордеон
var accordion = document.getElementsByClassName('accordion');
if (accordion) {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
      let content = accordion[i].querySelector('[accordion-content]');
      if (accordion[i].classList.contains('select')) {
        hideAll();
      } else {
        accordion[i].classList.add('select');
        showText(content);
      }
    });
    function hideAll() {
      let content = accordion[i].querySelector('[accordion-content]');
      content.style.maxHeight = '0';
      accordion[i].classList.remove('select');
    }
    function showText(el) {
      el.style.maxHeight = el.scrollHeight + 'px';
    }
  }
}



if(window.innerWidth < 767) {
// Появления подменю навигационного меню
let acc = document.getElementsByClassName("menu-item-has-children");

for (let i = 0; i < acc.length; i++) {
  let p = acc[i].querySelector('a');
  p.onclick = function (event) {
    event.preventDefault();
  }
  // Раскрытие меню
  acc[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
    var panel = acc[i].getElementsByClassName("sub-menu")[0];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
}
