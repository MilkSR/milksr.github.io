// Fall v2.1 By MaxxBlade - http://www.maxxblade.co.uk/fall

var fallObjects=new Array();function newObject(url,height,width){fallObjects[fallObjects.length]=new Array(url,height,width);}

///////////// EDIT THIS SECTION //////////////
var numObjs=300, waft=50, fallSpeed=15, wind=0;
newObject("https://static-cdn.jtvnw.net/emoticons/v1/35325/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/52063/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/14235/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/20748/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/4039/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/29849/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/7695/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/5682/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/4154/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/12843/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/4212/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/33445/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/22992/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/21655/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/49650/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/29086/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/1883/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/24446/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/12570/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/48907/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/48755/1.0",28,25);
newObject("https://static-cdn.jtvnw.net/emoticons/v1/32108/1.0",28,25);




//////////////////////////////////////////////

function winSize(){winWidth=(moz)?window.innerWidth:document.body.clientWidth;winHeight=(moz)?window.innerHeight:document.body.clientHeight;}
function winOfy(){winOffset=(moz)?window.pageYOffset:document.body.scrollTop;}
function fallObject(num,vari,nu){
	objects[num]=new Array(parseInt(Math.random()*(winWidth-waft)),-30,(parseInt(Math.random()*waft))*((Math.random()>0.5)?1:-1),0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),vari,fallObjects[vari][1],fallObjects[vari][2]);
	if(nu==1){document.write('<img id="fO'+i+'" style="position:absolute;" src="'+fallObjects[vari][0]+'">'); }
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
var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;winSize();
for (i=0;i<numObjs;i++){fallObject(i,parseInt(Math.random()*fallObjects.length),1);}
window.onscroll=winOfy;window.onresize=winSize;fall();