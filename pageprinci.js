
var hauteurheader=document.querySelector('header').offsetHeight;
var nav=document.querySelector('nav');
nav.style.top=hauteurheader+'px';
var hautNav=nav.offsetHeight;

var contenu=document.querySelector('#contenu');
var conT=hauteurheader+hautNav;
contenu.style.top=conT+"px";

var text=document.querySelectorAll('.text');
text[0].style.top='0px';
var htxt=text[0].offsetHeight;
var photos=document.querySelector('#photo');
photos.style.top=htxt+'px';
var hfot=photos.offsetHeight;
var txt2T=htxt+hfot;
text[1].style.top=txt2T+'px';


var footT=hauteurheader+hautNav+text[0].offsetHeight+photos.offsetHeight+text[1].offsetHeight+5;

contenu.style.height=(text[0].offsetHeight+photos.offsetHeight+text[1].offsetHeight)+'px';
var foot=document.querySelector('#foot');
foot.style.top=footT+"px";



var ismenus=document.querySelectorAll('.ismenu');
var smenus=document.querySelectorAll('.smenu');
for(var i=0, c=smenus.length; i<c; i++)
{
	(function(){
		var a=i;
		smenus[a].addEventListener('click', function(e){
			ismenus[a].style.display='block';

			var haut=ismenus[a].offsetHeight;
			var ftt=footT+haut;
			var top=haut+conT;
			contenu.style.top=top+'px';
			foot.style.top=ftt+'px';
			e.preventDefault();

			for(var j=0; j<ismenus.length; j++)
			{
				if(j!=a)
				{
					ismenus[j].style.display="none";
				}
			}
		})


	})();
}

//les paragraphes defilants
//fonction bouger
function bouger(element, valeurInitial)
{

	hauteurInitial=parseInt(valeurInitial[element.id]);
	hauteurInitial-=1;
	valeurInitial[element.id]=hauteurInitial;
	//element.parentNode.style.position='absolute';
	element.style.position='absolute';
	element.style.top=hauteurInitial+'px';

	if(hauteurInitial<=-50)
	{
		valeurInitial[element.id]=400;
	}

	//console.log(element);
}

var recents=document.querySelectorAll('.recent');
valeurInitial={};
for(var i=0, c=recents.length; i<c; i++)
{
	valeurInitial[recents[i].id]=400;
	recents[i].style.top='400px';
}

for(var i=0, c=recents.length; i<c; i++)
{
	(function(){
		var a=i;
		var temps=a*3000;
	setTimeout(function(){
		setInterval(function(){
			bouger(recents[a], valeurInitial);

		}, 60);

	}, temps);})();
}

var photocentre=document.querySelector('#photos');

var sources=[];
for(var i=0; i<11; i++)
{
	var t='photos/medecine'+i+'.jpg'
	sources.push(t);
}

var numero=0;
setInterval(function(){
	var src=sources[numero];
	numero+=1;

	if(numero>10)
	{
		numero=0;
	}
	photocentre.src=src;
	photocentre.style.maxHeigt='320px';


}, 5000);


var lis=document.querySelectorAll('li');
for(var i=0, c=lis.length; i<c; i++)
{
	(function(){
		var a=i;
		lis[a].addEventListener('click', function(e){

			var finT=hauteurheader+hautNav+contenu.offsetHeight;
			e.preventDefault();

		})
	})();
}

