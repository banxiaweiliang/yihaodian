window.onload=function(){
  
//文本框
   var text=$("#wenbk");
   var lsjz=$(".lsjz")[0]
    text.onfocus=function(){//表单获得焦点事件
     if(text.value=="圣诞节跨年幸福购 5折抢福袋"){//当框里有默认值时，点击后为空
      text.value="";
        } 
      }
     text.onblur=function(){
         lsjz.style.display="none";
        //表单失去焦点事件
   if(text.value){//框里有其他值时，不做操做

    }else{
   text.value="圣诞节跨年幸福购 5折抢福袋";//当框里没有值时，点击外部赋值框为默认值
    }
    }
  text.onclick=function(){
    lsjz.style.display="block";
  }



//轮播

var zhongdatu=getClass("zhongdatu");
 var bannerbox=$(".bannerbox")[0];
 var yanse=["#cb0004","#fa4f0a","#da4115","#d11a0c","#ffffff","#c62e54","#14a8ee","#f92c64"];
     var yeshu1=getClass("yeshu1");
     var t=setInterval(move,2000);
     for(var i=0;i<yeshu1.length;i++){
             yeshu1[i].index=i;
          yeshu1[i].onmouseover=function(){
                clearInterval(t);
                for(var j=0;j<zhongdatu.length;j++){
                    zhongdatu[j].style.zIndex=4;
                    yeshu1[j].style.background="#ccc";
                };
                zhongdatu[this.index].style.zIndex=5;
                yeshu1[this.index].style.background="#ff3c3c";
                bannerbox.style.background=yanse[this.index];
          };
            yeshu1[i].onmouseout=function(){
               t=setInterval(move,2000);
              num=this.index+1;
            };
      }

var zdazz=$(".zdazz")[0];
var btnleft=getClass("btnleft")[0];
var btnright=getClass("btnright")[0];
zdazz.onmouseover=function(){
  btnleft.style.opacity=0.8;
   btnright.style.opacity=0.8;
       
  }
zdazz.onmouseout=function(){
  btnleft.style.opacity=0;
   btnright.style.opacity=0;
     
      btnleft.onmouseover=function(){
        btnleft.style.opacity=0.8;
    clearInterval(t);
       }
       btnleft.onmouseout=function(){
        btnleft.style.opacity=0;
    t=setInterval(move,2000);
       }

       btnright.onmouseover=function(){
           btnright.style.opacity=0.8;
        clearInterval(t);
           } 
           btnright.onmouseout=function(){
        btnright.style.opacity=0;
    t=setInterval(move,2000);
       }
  }

var numz=0;
 function funL(){ 

        numz--;
       for(var i=0;i<zhongdatu.length;i++){
        zhongdatu[i].style.zIndex=6;
       // animate(zhongdatu[i],{opacity:0})
        yeshu1[i].style.background="#ccc";
       }

      
      if(numz<0){
        numz=7;
       }
          zhongdatu[numz].style.zIndex=7;
          
       //animate(zhongdatu[numz],{opacity:1})
       yeshu1[numz].style.background="#ff3c3c";
       
    }
     var num=0;
     function move(){ 
       num++;
         for(var i=0;i<zhongdatu.length;i++){
            zhongdatu[i].style.zIndex=6;
            yeshu1[i].style.background="#ccc"
           }
          if(num==8){
           num=0;
           }
           zhongdatu[num].style.zIndex=7;
           yeshu1[num].style.background="#ff3c3c";
           bannerbox.style.background=yanse[num];
        
      }
btnleft.onclick=function(){
     funL();
};  
btnright.onclick=function(){
     move();
}



//下拉框




var yiji=$(".yijikuang")[0];
    var erji=$(".erji")[0];
     var erji1=$(".erji1")[0];
     var h=erji1.offsetHeight;
   yiji.onmouseover=function(){
     erji.style.height=h+"px"
   } 
   yiji.onmouseout=function(){
    erji.style.height=0;
   }
   

var xuankuang=$("#xuankuang");
    var erjiqwe123=$(".erjiqwe123")[0];
     
          
   xuankuang.onmouseover=function(){
    erjiqwe123.style.display="block"
     
   } 
   xuankuang.onmouseout=function(){
    erjiqwe123.style.display="none";
   }

      

var yijiqwe=$(".yijikuang1");
    var erjiqwe=$(".erjia");
      for(var i=0;i<yijiqwe.length;i++){
           yijiqwe[i].index=i;
           hover(yijiqwe[i],function(){
            var lis=$("li",erjiqwe[this.index]);
            var h=lis[1].offsetHeight;
            erjiqwe[this.index].style.height=0+"px";
            animate(erjiqwe[this.index],{height:lis.length*h},600,Tween.Linear);
          },function(){
            var lis=$("li",erjiqwe[this.index]);
             var h=lis[1].offsetHeight;
            erjiqwe[this.index].style.height=0+"px";
            animate(erjiqwe[this.index],{height:0},600,Tween.Linear);
          })
      }


//侧划匡
function  ares(a){
    var shengxian=$(".shengxian")[a];
    var yishc=$(".yishc")[0];
    shengxian.onmouseover=function(){
      yishc.style.display="block";
    yishc.onmouseover=function(){
       yishc.style.display="block"
     }
    }

    shengxian.onmouseout=function(){
        yishc.style.display="none"
        }
     
      
      
       yishc.onmouseout=function(){
        yishc.style.display="none";
           }
       
    

  }
  ares(0);
  ares(1);
  ares(2);
  ares(3);
  ares(4);
  ares(5);
  ares(6);
  ares(7);
  ares(8);
  ares(9);
  ares(10);
  ares(11);
  





//这是加的楼层小轮播****************************



    function aa(z,u){
               var bigbox11=$(".yldatuz")[z];
               var fan=$(".anniu")[z];
               var tupians=$("img",bigbox11);
               var floormiddlefan=$(".anniu")[z];
               var smallbtn=$("li",fan);
               var numss=1;
               var nn=0; 
               var smallbtnding=$("div",floormiddlefan);
               animate(smallbtnding[nn],{width:50},u,Tween.Linear);
               
               /*
               var  annius1=$(".f-1-father-left-2-1")[z];
               var  annius2=$(".f-1-father-left-2-3")[z];*/

               
               function moveleft()
               {
                nn++;
                if(nn>2)
                {
                    nn=0;
                }
                if(nn>=0&&nn<=2)
                {   
                    for(var i=0;i<smallbtnding.length;i++)
                    {
                        smallbtnding[i].style.width="0px";
                        smallbtnding[i].style.display="none";
                    }
                    smallbtnding[nn].style.display="block";
                     animate(smallbtnding[nn],{width:50},u);
                }
                if(numss>2)
                {
                    numss=0;
                    animate(bigbox11,{left:0},500,Tween.Linear);
                }
                if(numss>=0&&numss<=2)
                {
                    animate(bigbox11,{left:-330*numss},500,Tween.Linear);
                }
                numss++;   
               }
               var t=setInterval(moveleft,u);
               for(var i=0;i<tupians.length;i++)
               {
                tupians[i].index=i;
                hover(tupians[i],function()
                {
                    clearInterval(t);
                    for(var j=0;j<smallbtnding.length;j++)
                    {
                        smallbtnding[j].style.display="none";
                        smallbtnding[j].style.width="0px";
                    }

                    smallbtn[this.index].style.backgroundColor="#E84312";
                },function()
                {
                    t=setInterval(moveleft,u);
                    numss=this.index+1;
                    smallbtn[this.index].style.backgroundColor="#fff";
                    smallbtnding[this.index].style.display="block";
                    animate(smallbtnding[this.index],{width:50},u,Tween.Linear);
                })
               }



               //指向小按钮然后图片不动
               
                for(var i=0;i<smallbtn.length;i++)
                {
                    smallbtn[i].index=i;
                    smallbtn[i].onmouseover=function()
                   {
                    clearInterval(t);
                   
                    for(var j=0;j<smallbtn.length;j++)
                    {
                        smallbtnding[j].style.width="0px";
                        smallbtnding[j].style.display="none"; 
                    }
                     smallbtnding[this.index].style.width="30px";
                     smallbtnding[this.index].style.display="block";
                      animate(bigbox11,{left:-330*this.index},500,Tween.Linear);
                   }
                   smallbtn[i].onmouseout=function()
                   { 
                      nn=this.index;
                      t=setInterval(moveleft,u);

                   }
               }
             

   }
    aa(0,3000);
    aa(1,2700);
    aa(2,2500);
    aa(3,3500);
    aa(4,3000);
    aa(5,2900);
    aa(6,3500);
    aa(7,2800);




//选项卡


// var xiaotu=getClass('xiaotu');
// var xin=getClass('xin');
// for(var i=0;i<xiaotu.length;i++){
//   xiaotu[i].index=i;
//   xiaotu[i].onmouseover=function(){
//         xin[this.index].style.display="block";
//   }
//   xiaotu[i].onmouseout=function(){
//         xin[this.index].style.display="none";
//   }
// }

var c=setInterval(mooo,2000);
   var xzdp=getClass('xzdp');
    var meiycj=getClass('meiycj');
     for(var i=0;i<xzdp.length;i++){
      xzdp[i].index=i;//把对应的那两个下标的值变得一样了.用的是  对象.属性=另一个对象
      xzdp[i].onmouseover=function(){
        clearInterval(c);
        for(var j=0;j<meiycj.length;j++){
    meiycj[j].style.zIndex=1;//display=none不显示
    // xzdp[j].style.fontWeight="normal";
    // xzdp[j].style.textDecoration="none";
    };
    meiycj[this.index].style.zIndex=2;
    // xzdp[this.index].style.fontWeight="bold";
    // xzdp[this.index].style.textDecoration="underline";
    i++;
    };
    xzdp[i].onmouseout=function(){
   c=setInterval(mooo,2000);
   xzdp[j].style.fontWeight="normal";
    xzdp[j].style.textDecoration="none";
 }
     }



var meiycj=getClass('meiycj');

var nam=0;

function mooo(){
for(var i=0;i<meiycj.length;i++){
  //meiycj[i].index=i;
  meiycj[i].style.zIndex=1;
}
meiycj[nam].style.zIndex=2;
nam++;
if(nam>=3){
  nam=0
}

}

for(var j=0;j<meiycj.length;j++){

  meiycj[j].onmouseover=function(){
  clearInterval(c);
  
}
meiycj[j].onmouseout=function(){
  c=setInterval(mooo,2000);
}

}



//侧导航栏与顶部隐藏导航栏
      var flag=true;
      var flag1=true;//0--440  440-3000
        var floors=$(".meiyilou");
        
      var jump=$(".jumpqwe")[0];
        var btn123=$(".jumpli",jump);
         var oumei=$(".oumei");


    //按钮控制滚动条
        for(var i=0;i<btn123.length;i++){
          btn123[i].index=i;
          btn123[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].offsetTop})//当前按钮的对应楼层的top赋值给滚动条
          }
        }

      window.onscroll=function(){
        // 搜索框的显示与隐藏
         var scrollT1=getScrollT();
      


        //楼层跳转

          if(scrollT1>=960){

            jump.style.display="block";
          }else{
            jump.style.display="none";
          }
    //滚动条控制按钮
            for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;//
              if(floors[i].t-150<scrollT1){//如果scrollTop大于当前楼层的top
                
                for(var j=0;j<oumei.length;j++){
                  oumei[j].style.display="none"

                }
                
                oumei[i].style.display="block"
              }
              
            }
}
 
var jumpppp=$(".jumpppp")[0];

jumpppp.onclick=function(){
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  animate(obj,{scrollTop:0})
}





}