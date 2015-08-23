var ARCHIVE=new Array;
var POSITION=0;

var xhr=new XMLHttpRequest();
xhr.open("GET","https://script.google.com/macros/s/AKfycbwTJUprgXJAntxVZ00rCL-YA1tcdxpc8VqK2QDdvMCIXVRW2UyE/exec");
//xhr.open("GET","frases.xml");
xhr.addEventListener("load",function(){
	var doc=xhr.responseXML;
	var entries=doc.getElementsByTagName("content");
	for(var i=0;i<entries.length;i++){
		ARCHIVE.push(entries[i].textContent);
	}
	document.getElementById("quote").textContent=ARCHIVE[POSITION];
});
xhr.send();


var more=document.getElementById("more");
more.addEventListener("click",function(){
	POSITION++;
	if(ARCHIVE.length === POSITION)
		POSITION=0;
	document.getElementById("quote").textContent=ARCHIVE[POSITION];
});

var ad=Inneractive.createAd({
	TYPE: "Banner",
	REFRESH_RATE: 30,
	APP_ID: "Divel_Frases_Y_Citas_NexCono_other"
});
ad.addTo(document.body);
ad.placement("bottom","center");

// Share Image http://dummyimage.com/600x400/000/fff.png&text=encodeURIComponent(text)

/*var share=document.getElementById("share");
share.addEventListener("click",function(){
	
	
	var sharing=new MozActivity({
		name: "share",
		data: {
			type: "url",
			url: "http://dummyimage.com/600x400/000/fff.png&text="+encodeURIComponent(ARCHIVE[POSITION])
		}
	});
});*/
