
    var menuElem = document.getElementById('sweeties');
    var titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };

	var menu2Elem = document.getElementById('sweeties2');
    var title2Elem = menu2Elem.querySelector('.title');

    title2Elem.onclick = function() {
      menu2Elem.classList.toggle('open');
    };
