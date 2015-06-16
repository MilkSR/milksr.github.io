// Fall v2.1 By MaxxBlade - http://www.maxxblade.co.uk/fall

var fallObjects=new Array();
function newObject(url,height,width) {
	fallObjects[fallObjects.length] = new Array(url,height,width);
}

///////////// EDIT THIS SECTION //////////////
var numObjs=300, waft=50, fallSpeed=15, wind=0;
newObject("http://cdn.frankerfacez.com/emoticon/29450/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28898/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28476/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28479/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28477/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28477/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28478/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28480/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28475/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29451/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28899/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29447/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29446/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29449/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29452/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29454/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29448/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29453/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28897/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29457/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28896/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29456/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28900/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/28895/1",28,25);
newObject("http://cdn.frankerfacez.com/emoticon/29455/1",28,25);




//////////////////////////////////////////////
window.dogsHtml = "";
function winSize(){winWidth=(moz)?window.innerWidth:document.body.clientWidth;winHeight=(moz)?window.innerHeight:document.body.clientHeight;}
function winOfy(){winOffset=(moz)?window.pageYOffset:document.body.scrollTop;}
function fallObject(num,vari,nu){
	objects[num] = new Array(parseInt(Math.random()*(winWidth-waft)),-30,(parseInt(Math.random()*waft))*((Math.random()>0.5)?1:-1),0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),vari,fallObjects[vari][1],fallObjects[vari][2]);
	if (nu==1) {
		window.dogsHtml += '<img id="fO' + i + '" style="position:absolute;" src="'+fallObjects[vari][0]+'">';
	}
}
function fall(){
	for(i=0;i<numObjs;i++){
		var fallingObject=document.getElementById('fO'+i);
		if((objects[i][1]>(winHeight-(objects[i][5]+objects[i][7])))||(objects[i][0]>(winWidth-(objects[i][2]+objects[i][8])))){fallObject(i,objects[i][6],0);}
		objects[i][0]+=wind;objects[i][1]+=objects[i][5];objects[i][4]+=objects[i][3];
		with(fallingObject.style){ top=objects[i][1]+winOffset+"px";left=objects[i][0]+(objects[i][2]*Math.cos(objects[i][4]))+"px";}
	}
	setTimeout("fall()",31);
}

var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;

function rain() {
	winSize();
	for (i=0;i<numObjs;i++) {
		fallObject(i,parseInt(Math.random()*fallObjects.length),1);
	}
	window.onscroll = winOfy;
	window.onresize = winSize;
	document.getElementById('dogs').innerHTML = window.dogsHtml;
	fall();
}

function dogKILL() {
	document.getElementById('dogs').innerHTML = "";
}