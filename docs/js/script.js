let center=[59.93863094299924,30.322875048984045];function init(){let e=new ymaps.Map("map",{center:center,zoom:[17]}),o=new ymaps.Placemark(center,{},{iconLayout:"default#image",iconImageHref:"./img/map-pin.png",iconImageSize:[113,106],iconImageOffset:[-40,-100]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.geoObjects.add(o)}ymaps.ready(init),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".main-header__burger-menu"),o=document.querySelector(".site-list--open");e.addEventListener("click",(function(){o.classList.toggle("site-list--close")}))}));const toggleButton=document.getElementById("toggleButton"),openIcon=document.querySelector(".main-header__svg--open"),closeIcon=document.querySelector(".main-header__svg--close");let isOpen=!1;toggleButton.addEventListener("click",(function(){isOpen?(openIcon.style.opacity=1,closeIcon.style.opacity=0):(openIcon.style.opacity=0,closeIcon.style.opacity=1),isOpen=!isOpen})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".main-header__burger-menu");const e=document.querySelector(".site-list--nojs");e&&e.classList.remove("site-list--nojs")})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".main-header__svg-two--nojs"),o=document.querySelector(".main-header__svg-one--nojs");e&&e.classList.remove("main-header__svg-two--nojs"),o&&o.classList.remove("main-header__svg-one--nojs")}));