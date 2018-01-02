/**
 * Created by ibm on 2017/9/4.
 */
/*document.getElementsByTagName('html')[0].style.fontSize=window.innerWidth/3.75+'px';*/
function pgScale(){
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
pgScale();
window.onresize=function(){pgScale();};