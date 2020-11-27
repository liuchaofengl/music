function resize(){
    var clientwidth = document.documentElement.clientWidth || window.innerWidth;
    if(clientwidth >=750){
        clientwidth = 750
    }
    if(clientwidth <= 320){
        clientwidth = 320
    }
    console.log(clientwidth)
    document.documentElement.style.fontSize = (clientwidth / 7.5) + 'px'
    document.querySelector("body").style.fontSize = 0.3+"rem"

        
    
}
resize();
window.onresize = function(){
    resize()
}