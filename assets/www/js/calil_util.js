const API_KEY = '049fd88d765305f925724e9aa3d71df2';

const CALIL_API_LIBRARY = 'https://api.calil.jp/library';

var calilUtil = {

    getLibraries: function(longitude, latitude, callback) {
    	var url = CALIL_API_LIBRARY + '?apikey=' + API_KEY + '&geocode=' + longitude + ',' + latitude;
        var xmlHttp = new XMLHttpRequest();
        
        xmlHttp.onreadystatechange = function () {
        	if (xmlHttp.readyState == 4) {
        		switch (xmlHttp.status) {
	        		case 200:
	        			console.log(xmlHttp.responseText);
	        			callback(xmlHttp.responseText);
	        			break;
	        		default:
	        			console.log(xmlHttp.responseState);
	        		    break;
        		}
        	}
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    },
};