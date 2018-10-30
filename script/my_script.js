// var ads = new Array(
//     {img:"/img/1.gif", name: "Avocado", profile:"/img/ads/koffie1.png"},
//     {img:"/img/2.gif", name: "Aarde"},
//     {img:"/img/1.gif", name: "Avocado"},
//     {img:"/img/2.gif", name: "Aarde"},
//     {img:"/img/1.gif", name: "Avocado"},
//     {img:"/img/2.gif", name: "Aarde"}
// )

var ads = new Array(
    {img:"img/animated/apples_anim.gif", name: "Amsterdam Apples",
    profile:"img/profile_img/apples.jpg", desc: "Onze appels bevatten van nature weinig caloriën en zitten bovendien boordevol vezels, wat zorgt voor een voldaan gevoel. Het perfecte tussendoortje!"},
    {img:"img/animated/coffee_anim.gif", name: "Het KoffieBedrijf",
    profile:"img/profile_img/coffee.jpg", desc: "Hee student! Toe aan een break? Kom langs bij een van onze vestigingen voor wat vloeibare concentratie."},
    {img:"img/animated/schoonmaak_anim.gif", name: "Huur een Hulp",
    profile:"img/profile_img/schoonmaak.png", desc: "Feestje gegeven, komen je ouders over de vloer of gewoon toe aan een geheel fris huis? Naast de wekelijkse schoonmaakdienst bieden wij vanaf nu ook een eenmalige 'Grote schoonmaak' aan!"},
    {img:"img/animated/tanden_anim.gif", name: "Tanden Witten Thuis",
    profile:"img/profile_img/tanden.jpg", desc: "Tanden witten thuis is de webshop om makkelijk en voordelig uw tanden thuis te witten. Je Tanden Witten Thuis is nog nooit zo makkelijk geweest"},
    {img:"img/animated/water_anim.gif", name: "Botteled.",
    profile:"img/profile_img/water.jpg", desc: "Gemiddeld moet een mens 1,5 tot 2 liter water per dag drinken om goed te functioneren. Met de nieuwe 2L Bottles. is het nog makkelijker om gehydrateerd te blijven!"}
)

var adsStatic = new Array(
    {img:"img/static/apples_static.jpg", name: "Amsterdam Apples",
    profile:"img/profile_img/apples.jpg", desc: "Onze appels bevatten van nature weinig caloriën en zitten bovendien boordevol vezels, wat zorgt voor een voldaan gevoel. Het perfecte tussendoortje!"},
    {img:"img/static/coffee_static.jpg", name: "Het KoffieBedrijf",
    profile:"img/profile_img/coffee.jpg", desc: "Hee student! Toe aan een break? Kom langs bij een van onze vestigingen voor wat vloeibare concentratie."},
    {img:"img/static/schoonmaak_static.jpg", name: "Huur een Hulp",
    profile:"img/profile_img/schoonmaak.png", desc: "Feestje gegeven, komen je ouders over de vloer of gewoon toe aan een helemaal fris huis? Naast de wekelijkse schoonmaakdienst bieden wij vanaf nu ook een eenmalige 'Grote schoonmaak' aan!"},
    {img:"img/static/tanden_static.jpg", name: "Tanden Witten Thuis",
    profile:"img/profile_img/tanden.jpg", desc: "Tanden witten thuis is de webshop om makkelijk en voordelig uw tanden thuis te witten. Je Tanden Witten Thuis is nog nooit zo makkelijk geweest"},
    {img:"img/static/water_static.jpg", name: "Botteled.",
    profile:"img/profile_img/water.jpg", desc: "Gemiddeld moet een mens 1,5 tot 2 liter water per dag drinken om goed te functioneren. Met de nieuwe 2L Bottles. is het nog makkelijker om gehydrateerd te blijven!"}
)

var times = [
    "1h", "2h", "4h", "1d", "6h", "3h"
]

function randomize(a, b) {
    return Math.random() - 0.5;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


$(document).ready(function(){

    var randomInt = getRandomInt(0, 5);

    adsStatic.sort(randomize);

	$("div.ad").each(function(i){
        $(this).append('<img src="'+adsStatic[i].img+'" width="100%">');
	});

    $("p.adDescription").each(function(j){
        $(this).html("<span class = 'adDescName'>"+ adsStatic[j].name + "</span>" + adsStatic[j].desc);
    });

    $("div.time").each(function(j){
        $(this).html(times[getRandomInt(0, 4)]);
    });

    $("div.adName").each(function(k){
        $(this).html(adsStatic[k].name);
    });

    $("div.adProfileImg").each(function(l){
        $(this).append('<img class="adProfileContent" src="'+adsStatic[l].profile+'"/>');
    });


    // ---------------- //

//     $("div.ad").each(function(i){
//         $(this).append('<img src="'+adsStatic[i].img+'" width="100%">');
//     });
    
//     $("p.adDescription").each(function(j){
//         $(this).html("<span class = 'adDescName'>"+ adsStatic[j].name + "</span>" + ads[j].desc);
//     });
    
    
//     $("div.time").each(function(j){
//         $(this).html(times[getRandomInt(0, 4)]);
//     });
    
//     $("div.adName").each(function(k){
//         $(this).html(adsStatic[k].name);
//     });
    
//     $("div.adProfileImg").each(function(l){
//         $(this).append('<img class="adProfileContent" src="'+adsStatic[l].profile+'"/>');
//     });


});
