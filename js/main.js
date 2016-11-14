/*
window.onload=function(){
	var boxs = document.getElementsByClassName("box");
	var lis = document.getElementById("circle").children;
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=(function(num){
			return function(){
				//将当前按钮设置为current
				for(var j=0;j<lis.length;j++){
					lis[j].removeAttribute("class");
				}
				this.setAttribute("class","changeLt");
				//将内容区对应的li置为current
				for(var k=0;k<boxs.length;k++){
					boxs[k].removeAttribute("class");
				}
				boxs[num].setAttribute("class","show");
			};
		})(i);
	}
};
*/
/*
$(function(){
	$("#circle").on("click","li",function(event){
			if(!$(this).hasClass("changeLt")){
				//改变当前元素样式
				$(this)
					.addClass("changeLt")
					.siblings()
					.removeClass("changeLt");
				if(!$(".box").hasClass("changeLt")){
					//改变当前元素样式
					$(".box")
						.addClass("show")
						.siblings()
						.removeClass("show");
				}
			}
		});
});
*/