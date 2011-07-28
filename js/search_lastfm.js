/* 
// http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=b25b959554ed76058ac220b7b2e0a026&format=json&limit=2
// method = album.search & album = believe

{"results":{
	"opensearch:Query":{
		"#text":"",
		"role":"request",
		"searchTerms":"believe",
		"startPage":"1"},
	"opensearch:totalResults":"1840",
	"opensearch:startIndex":"0",
	"opensearch:itemsPerPage":"2",
	"albummatches":{
		"album":[
			{	"name":"Believe",
				"artist":"Disturbed",
				"id":"1418894",
				"url":"http:\/\/www.last.fm\/music\/Disturbed\/Believe",
				"image":[
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34s\/53553281.png","size":"small"},
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64s\/53553281.png","size":"medium"},
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/53553281.png","size":"large"},
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/300x300\/53553281.png","size":"extralarge"}
				],
				"streamable":"0",
				"mbid":"ed32813a-cd20-4bb3-b3fd-bca6161deb17"
			},
			{	"name":"Make Believe",
				"artist":"Weezer",
				"id":"2025180",
				"url":"http:\/\/www.last.fm\/music\/Weezer\/Make+Believe",
				"image":[
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34s\/53692665.png","size":"small"},
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64s\/53692665.png","size":"medium"},
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/53692665.png","size":"large"},
					{"#text":"http:\/\/userserve-ak.last.fm\/serve\/300x300\/53692665.png","size":"extralarge"}
					],
				"streamable":"1",
				"mbid":"73ed0637-14bb-4cad-8d65-6acd1e513a9e"
			}
		]
	},
	"@attr":{"for":"believe"}
}}

//method = artist.getTopAlbums & artist = LFO

{"topalbums":{
	"album":[
			{
			"name":"Frequencies",
			"playcount":"28115",
			"mbid":"ef00ee26-44db-4cc3-8dbc-eb938229ac0c",
			"url":"http:\/\/www.last.fm\/music\/LFO\/Frequencies",
			"artist":{
				"name":"LFO",
				"mbid":"e6d0179f-b899-4563-b6c6-88715aaae0b8",
				"url":"http:\/\/www.last.fm\/music\/LFO"},
			"image":[
				{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34s\/30705691.jpg",
					"size":"small"},
				{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64s\/30705691.jpg",
					"size":"medium"},
				{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/30705691.jpg",
					"size":"large"},
				{"#text":"http:\/\/userserve-ak.last.fm\/serve\/300x300\/30705691.jpg",
					"size":"extralarge"}],
			"@attr":{"rank":"1"}, 
			
			{...}
			]
			
	},
	"@attr":{"artist":"LFO","page":"1","perPage":"1","totalPages":"75","total":"75"}}}


// method = artist.getTopTracks & artist = LFO

{"toptracks":
	{"track":[{"name":"LFO",
				"duration":"206",
				"playcount":"8130",
				"listeners":"4737",
				"mbid":"",
				"url":"http:\/\/www.last.fm\/music\/LFO\/_\/LFO",
				"streamable":{"#text":"1","fulltrack":"0"},
				"artist":{"name":"LFO",
			  				"mbid":"e6d0179f-b899-4563-b6c6-88715aaae0b8",
			  				"url":"http:\/\/www.last.fm\/music\/LFO"},
			  				"image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34s\/30705691.jpg","size":"small"},
			  						 {"#text":"http:\/\/userserve-ak.last.fm\/serve\/64s\/30705691.jpg","size":"medium"},
			  						 {"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/30705691.jpg","size":"large"},
			  						 {"#text":"http:\/\/userserve-ak.last.fm\/serve\/300x300\/30705691.jpg","size":"extralarge"}],
			  				"@attr":{"rank":"1"}
			 			 },
				{...}
			]

// method = artist.getInfo & artist = LFO 

{"artist":
	{"name":"LFO","mbid":"e6d0179f-b899-4563-b6c6-88715aaae0b8",
	 "url":"http:\/\/www.last.fm\/music\/LFO",
	 "image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/52570.jpg","size":"small"},
			  {"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/52570.jpg","size":"medium"},
	 		  {"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/52570.jpg","size":"large"},
	 		  {"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/52570.jpg","size":"extralarge"},
	 		  {"#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/52570\/LFO.jpg","size":"mega"}],
	 "streamable":"1",
	 "stats":{"listeners":"198604","playcount":"1699631"},
	 "similar":{
	 	"artist":[{"name":"Sweet Exorcist","url":"http:\/\/www.last.fm\/music\/Sweet+Exorcist","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/2507308.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/2507308.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/2507308.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/2507308.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/2507308\/Sweet+Exorcist+A819001.jpg","size":"mega"}]},
	 			  {"name":"Autechre","url":"http:\/\/www.last.fm\/music\/Autechre","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/42856251.png","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/42856251.png","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/42856251.png","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/42856251.png","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/42856251\/Autechre.png","size":"mega"}]},
	 			  {"name":"B12","url":"http:\/\/www.last.fm\/music\/B12","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/8984857.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/8984857.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/8984857.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/8984857.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/500\/8984857\/B12+live.jpg","size":"mega"}]},
	 			  {"name":"Polygon Window","url":"http:\/\/www.last.fm\/music\/Polygon+Window","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/27384565.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/27384565.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/27384565.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/27384565.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/27384565\/Polygon+Window+aphex++polygon++quothCover.jpg","size":"mega"}]},
	 			  {"name":"808 State","url":"http:\/\/www.last.fm\/music\/808+State","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/380930.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/380930.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/380930.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/380930.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/380930\/808+State.jpg","size":"mega"}]}
	 			]},
	 "tags":{
	 	"tag":[{"name":"electronic","url":"http:\/\/www.last.fm\/tag\/electronic"},
	 			{"name":"techno","url":"http:\/\/www.last.fm\/tag\/techno"},
	 			{"name":"idm","url":"http:\/\/www.last.fm\/tag\/idm"},
	 			{"name":"electronica","url":"http:\/\/www.last.fm\/tag\/electronica"},
	 			{"name":"warp","url":"http:\/\/www.last.fm\/tag\/warp"}
	 		   ]},
	 "bio":{"published":"Mon, 11 Oct 2010 18:50:41 +0000","summary":"There are 2 bands under the name LFO.   1)  English band LFO were one of the pioneers of the harsh techno of the early 1990s. Originally comprising Gez Varley (also known as Jez Varley) and Mark Bell, they met while studying at Leeds and gave their first track, the eponymous \u201cLFO\u201d, to Nightmares On Wax. The demo\u2019s popularity in clubs lead to the track being released by Warp in 1990, where it made it into the Top Twenty. The name \u201cLFO\u201d comes from the term low frequency oscillator, a component used to alter sounds in synthesizers, samplers etc. ","content":"There are 2 bands under the name LFO. \n \n 1)  English band LFO were one of the pioneers of the harsh techno of the early 1990s. Originally comprising Gez Varley (also known as Jez Varley) and Mark Bell, they met while studying at Leeds and gave their first track, the eponymous \u201cLFO\u201d, to Nightmares On Wax. The demo\u2019s popularity in clubs lead to the track being released by Warp in 1990, where it made it into the Top Twenty. The name \u201cLFO\u201d comes from the term low frequency oscillator, a component used to alter sounds in synthesizers, samplers etc.\n \n Gez Varley left the duo in 1996, and continues to have a solo career. Mark Bell continues to record under his own name and that of LFO, as well as producing albums for Bj\u00f6rk and Depeche Mode.\n \n LFO\u2019s album \u2019Frequencies\u2019 (containing the previously mentioned \u201cLFO\u201d and its follow-up single, \u201cWe Are Back\u201d) was a popular album for Warp Records and undoubtedly helped establish them as a successful global independent electronic label, along with label-mates Nightmares On Wax and Sweet Exorcist. It was originally released with a warning sticker stating that the record company was not responsible for the potential damage to speakers due to the the extremely loud, low frequency bass signals contained within the music.\n \n \u2018Frequencies\u2019 was followed by the less commercially successful \u2019Advance\u2019 and, in 2003, by \u2019Sheath\u2019 which saw a return to the earlier minimal techno sound of LFO\u2019s debut.\n \n 2) Lyte Funky Ones (LFO) was an American &quot;boy band&quot; pop group consisting of Rich Cronin, Devin Lima (born Harold Lima), and Brad Fischetti. Before Devin Lima joined the group in 1999, the third member was Brian Gillis, known as \u201cBrizz\u201d, who was with the group from its start in 1995. Rich Cronin was diagnosed with Leukemia in 2005. He founded The Rich Cronin Hope Foundation. Cronin lost his battle on September 9th 2010.\n \n \n \n    \nUser-contributed text is available under the Creative Commons By-SA License and may also be available under the GNU FDL."}
	}
}
*/

var apiKey = "19c7f5e44e3b254a7184ab0324768a2a";
var d = document;
var result = d.getElementById("content")
var head = d.getElementById("a-head");
var col_left = d.getElementById("a-left");
var col_center = d.getElementById("a-center");
var col_right = d.getElementById("a-right");	


function displayArtist(artist) {
	//	alert(JSON.stringify(artist.image));
	
	var i; // counters
	
	//result.innerHTML = "<h2>"+ artist.name + "</h2><img src='"+artist.image[1]['#text']+"'/>";
	
	// name
	var artistName_h2 = d.createElement("h2");
	var artistName = d.createTextNode(artist.name);
	artistName_h2.appendChild(artistName);
	
	// image


	var artist_img = d.createElement("img");
	var img_div = d.createElement("div");
	img_div.setAttribute("class","artist-img");
	artist_img.src = artist.image[3]["#text"];
	
	head.appendChild(artistName_h2);
	
	img_div.appendChild(artist_img);
	col_left.appendChild(img_div);
	
	var artist_sum = artist.bio.summary;
	var artist_p = d.createElement('p');
	var sum_div = d.createElement("div");
	sum_div.setAttribute("class", "summary")
	
	artist_p.innerHTML = artist_sum;
	sum_div.appendChild(artist_p);
	col_left.appendChild(sum_div);
	// similar artist (image / name)
	var sa_img;
	var sa_a;
	var sa;
	var sa_h3;
	var sa_div;
	var similarArtists = d.createElement("div");
	var h = d.createElement('h2');
	h.innerHTML = "Similar Artists";
	similarArtists.appendChild(h);
	similarArtists.setAttribute("id", "similar-artists");
	var tbl = d.createElement("table");
	var td1, td2, tr1, tr2;	
	for(i=0;i<artist.similar.artist.length; i++) {
		sa = d.createTextNode(artist.similar.artist[i].name);
		
		sa_a = d.createElement('a');
		sa_a.href = artist.similar.artist[i].url;
		
		sa_h3 = d.createElement('h3')
		sa_h3.appendChild(sa);
		sa_img = d.createElement('img');
		sa_img.src = artist.similar.artist[i].image[1]["#text"];
		sa_a.appendChild(sa_img);
		sa_a.appendChild(sa_h3);
		td1 = d.createElement("td");
		td2 = d.createElement("td");
		td1.setAttribute("class","similar-img");
		td2.setAttribute("class","similar-name");
		td1.appendChild(sa_img);
		td2.appendChild(sa_a);
		if(i % 3 == 0) {
			tr1 = d.createElement("tr");
			tr2 = d.createElement("tr");
			tbl.appendChild(tr1);
			tbl.appendChild(tr2);
		}
		tr1.appendChild(td1);
		tr2.appendChild(td2);
	}
	similarArtists.appendChild(tbl);
	col_left.appendChild(similarArtists);
}

function artist_getTopAlbums_response(json) {
	var top = json.topalbums;

	// album-name-text, counter, album-img, 
	// albums-div, album-div, title-h3, 
	// image div, title div
	var txt, i, img, 
		div, album_div, h3, 
		img_div, title_div;
	
	div = d.createElement("div");
	div.setAttribute("id", "top-albums");
		
	for (i=0; i < top.album.length; i++) {
		txt = d.createTextNode(top.album[i].name);
		album_div = d.createElement("div");
		album_div.setAttribute("class", "top-album");
		img = d.createElement("img");
		img.src = top.album[i].image[1]["#text"];
		img.setAttribute("width", 64);
		img.setAttribute("height", 64);
		img_div = d.createElement("div");
		title_div = d.createElement("div");
		img_div.setAttribute("class", "image");
		title_div.setAttribute("class", "name");
		h3 = d.createElement("h3");
		h3.appendChild(txt);
		
		img_div.appendChild(img);
		title_div.appendChild(h3);
		album_div.appendChild(img_div);
		album_div.appendChild(title_div);
		div.appendChild(album_div);
	}
	col_center.appendChild(div);
}

function album_getTopTracks_response(json) {
	var top = json.toptracks;
	var r,c,txt,i = 0, tlen;
	var div = d.createElement("div");
	var tbl = d.createElement("table");
	
	div.setAttribute("id", "top-tracks");
	
	for(i=0, tlen=top.track.length; i < tlen; i++) {
	
		r = tbl.insertRow(i);

		c = r.insertCell(0);
		c.innerHTML = i+1; 
		c.setAttribute("class","rank");
		txt = d.createTextNode(top.track[i].name);
		c = r.insertCell(1);
		c.setAttribute("class","title");
		c.appendChild(txt);
	}
	//alert(tbl.innerHTML);
	var clear = d.createElement("div");
	clear.setAttribute("class", "sp");
	col_center.appendChild(clear);
	col_center.appendChild(tbl);	
}

/*
function processLastFMResult(xmlHttp) {
	if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		alert('xmlHttp = '+xmlHttp+ '\nreadystate = '
			+xmlHttp.readyState+'\nstatus = '
			+xmlHttp.status+'\nresponseText = '
			+xmlHttp.responseText
		);
		d.getElementById("result").innerHTML=xmlHttp.responseText;
	}
	alert('xmlHttp is ' + xmlHttp);
}
*/

function artist_getShouts_response(json) {
	var div = d.createElement("div");
	div.setAttribute("id", "artist-shouts");
	
	var s_div, s_p, shout_txt, shout_author, i, shouts = json.shouts;
	if(!json.error) {
		for(i=0; i< shouts.shout.length; i++) {
			s_div = d.createElement("div");
			s_div.setAttribute("class", "shout");
			shout_txt = d.createTextNode(shouts.shout[i].body);
			s_p = d.createElement("p");
			shout_author = d.createElement("p");
			shout_author.innerHTML = "<small>via <i class='shout_author'>"+shouts.shout[i].author+"</i></small>";
			s_p.appendChild(shout_txt);
			s_div.appendChild(s_p);
			s_div.appendChild(shout_author);
			div.appendChild(s_div);
		}
		
		col_right.appendChild(div);
		
		
		
	} else {
		alert("shouts error #"+json.error+"\n"+json.message);
		if(json.error == 6) { // artist not found
		}
	}
}

function artist_getInfo_response(json) {
	if(!json.error) {	
		displayArtist(json.artist);		
		getTopAlbums(json.artist.name, 8);
		getTopTracks(json.artist.name, 15);
		getArtistShouts(json.artist.name,10);

	} else {
		alert("error #"+json.error+"\n"+json.message);
		if(json.error == 6) { // artist not found
		}	
	}
}

function album_getInfo_response(json) {
	var summary, albums;
	summary = d.createElement("div");
	summary.setAttribute("id", "summary");
	albums = d.createElement("div");
	albums.setAttribute("id", "albums");
	
	if(!json.error) {
	
	col_center.appendChild(summary);
	col_center.appendChild(albums);
	displayAlbum(json.album);
	} else {
		alert("error #"+json.error+"\n"+json.message);
		
	}
}

function addScript(url) {
	var script = d.createElement('script');
	script.type="text/javascript";
	script.src=url;
	d.getElementsByTagName('head')[0].appendChild(script);
}

function getArtistShouts(artist, limit) {
	var params = "method=artist.getshouts&artist="+artist
				+"&limit="+limit+"&api_key="+apiKey
				+"&format=json&callback=artist_getShouts_response";
	addScript(lastfm_url + "?" + params);
}

function getTopAlbums(artist,limit) {
	var params = "method=artist.gettopalbums&artist="+artist
				+"&limit="+limit+"&api_key="+apiKey
				+ "&format=json&callback=artist_getTopAlbums_response";
	addScript(lastfm_url + "?" + params);
	
}

function getTopTracks(artist,limit) {
	var params = "method=artist.gettoptracks&artist="+artist
				+"&limit="+limit+"&api_key="+apiKey
				+ "&format=json&callback=album_getTopTracks_response";
	addScript(lastfm_url + "?" + params);
	var tt_div = d.createElement("div");
	tt_div.setAttribute("id", "top-tracks");
	col_center.appendChild(tt_div);
}

function search(form) {
	var params = "";
	//var type = form.searchType.value;
	var searchtxt = form.searchField.value;
	
	//if(form.searchType[0].checked) {
	
	params = "method=artist.getInfo&artist="+searchtxt+"&autocorrect=1&api_key="+apiKey;
	addScript(lastfm_url+"?"+params+"&format=json&callback=artist_getInfo_response");

	/*} else if (form.searchType[1].checked) {
		params = "method=album.getInfo&album="+ searchtxt +"&api_key="+apiKey;
		addScript(lastfm_url+"?"+params+"&format=json&callback=album_getInfo_response");
	} else if (form.searchType[2].checked) {
		params = "method=tag.getInfo&tag="+ searchtxt +"&api_key="+apiKey;
		addScript(lastfm_url+"?"+params+"&format=json&callback=tag_getInfo_response");
	}*/

}
/*
function searchLastFM(form) {
	
	var lastfm_url = "http://ws.audioscrobbler.com/2.0/",
		params = "",
		type = form.searchType.value,
		searchtxt = form.searchField.value,
		xmlHttp;
	
	if(window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(form.searchType[0].checked) {
		params = "method=artist.getInfo&artist="+searchtxt+"&api_key="+apiKey;
		lastfm_url += "?" + params + "&format=json&callback=processLastFMResult";
	} else if (form.searchType[1].checked) {
		params = "method=album.getInfo&album="+ searchtxt +"&api_key="+apiKey;
		lastfm_url += "?" + params + "&format=json&callback=album_getInfo_result";
	} else if (form.searchType[2].checked) {
		params = "method=tag.getInfo&tag="+ searchtxt +"&api_key="+apiKey;
		lastfm_url +="?" + params + "&format=json&callback=tag_getInfo_result";
	}
		xmlHttp.open('GET', lastfm_url, true);
		
	xmlHttp.send(null)
}
*/
var lastfm_url = "http://ws.audioscrobbler.com/2.0/";
	

var formSubmitButton = d.forms[0].button;
formSubmitButton.onclick = function () { search(formSubmitButton.form) };