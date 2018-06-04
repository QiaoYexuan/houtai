let block = document.getElementById('block');
let navpage = document.getElementById('navpage');
let content = document.getElementById('content');
let linechart = document.getElementById('line-chart');
let ink = true;
block.onclick = function(){
    if(ink){
        navpage.style.left = '-260px';
        navpage.style.transition = '1s';
        block.style.left = '0'
        block.style.transition = '1s'
        ink = !ink
    }else{
        navpage.style.left = '-0';
        block.style.left = '260px'
        ink = !ink
    }
}