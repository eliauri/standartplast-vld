if (document.getElementById("map")) {
	// Карта
	ymaps.ready(init);
	function init() {
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты
			center: [43.079753369295915,44.600034471577644],
			// Масштаб карты
			zoom: 14,
      controls: [],
			// Выключаем все управление картой
			// controls: []
		});
		var myGeoObjects = [];
		// Указываем координаты метки
		myGeoObjects = new ymaps.Placemark([43.079753369295915,44.600034471577644], {
			balloonContentBody: 'Стандартпласт Владикавказ',
		}, {
			iconLayout: 'default#image',
			// Путь до нашей картинки
			iconImageHref: 'https://stp-vld.ru/wp-content/uploads/2022/02/logo.png',
			// Размеры иконки
			iconImageSize: [42, 50],
			// Смещение верхнего угла относительно основания иконки
			iconImageOffset: [-32, -30]
		});
		var clusterer = new ymaps.Clusterer({
			// clusterDisableClickZoom: false,
			clusterOpenBalloonOnClick: false,
		});
		clusterer.add(myGeoObjects);
		myMap.geoObjects.add(clusterer);
		// Отключим zoom
		// myMap.behaviors.disable('scrollZoom');
	}

}
