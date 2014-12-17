
<!-------兼容-------->
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
		}else{
			return getComputedStyle(obj,false)[name];
			}
	};
<!-------运动框架-------->	
function startMove(obj,json,fnEnd){
	
	clearInterval(obj.timer)
		
	obj.timer=setInterval(function(){
		  var bStop=true;    //假设所有的目值标都到齐了
	for(var arr in json)
	{
		var cur=0;
	  if(arr=='opacity'){
		cur=Math.round(parseFloat(getStyle(obj,arr))*100);//Math.round()解决半透明的值，表示
		}else{
		cur=parseInt(getStyle(obj,arr));
		}
		var speed=(json[arr]-cur)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		 if(cur!=json[arr])
			   bStop=false;
			if(arr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else
			{
			obj.style[arr]=cur+speed+'px';
			
	    	}
		}
		if(bStop){
			  clearInterval(obj.timer);
	          if(fnEnd)fnEnd();
			 }
		},30);
};