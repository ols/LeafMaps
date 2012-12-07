var LM = LM || {};

LM.LoadMapWithZones = (function () {
	var map = new L.Map('map', { center: new L.LatLng(59.319813, 17.986615), zoom: 9 });
	var googleLayer = new L.Google('SATELLITE');
	map.addLayer(googleLayer);

	$.ajax({
		type: "GET",
		url: "zzz.xml",
		dataType: "xml",
		success: function (xml) {
			$(xml).find('zone').each(function () {
				var points = new Array();
				$(this).find('point').each(function () {
					var latitude = $(this).attr('lat');
					var longitude = $(this).attr('long');
					points.push(new L.LatLng(latitude, longitude));
				});
				L.polygon(points).addTo(map);
			});
		}
	});
})({});