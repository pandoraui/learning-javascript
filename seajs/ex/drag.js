
//B技术开发

define(function(require,exports,module){
    
    function drag(obj){
        var disX = 0;
        var disY = 0;
        
        obj.onmousedown = function(ev){
            var ev = ev || window.event;
            disX = ev.clientX - obj.offsetLeft;
            disY = ev.clientY - obj.offsetTop;
            
            document.onmousemove = function(ev){
                var ev = ev || window.event;
                
                //var L = require('./range.js').range(ev.clientX - disX,document.documentElement.clientWidth - obj.offsetWidth,0);
                
                //var T = require('./range.js').range(ev.clientY - disY,document.documentElement.clientHeight - obj.offsetHeight,0);
                
                var L = ev.clientX - disX;
                var T = ev.clientY - disY;
                
                //obj.style.left = ev.clientX - disX + 'px';
                //obj.style.top = ev.clientY - disY + 'px';
                
                obj.style.left = L + 'px';
                obj.style.top = T + 'px';
                
            };  
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            };
            
        };
    }
    
    exports.drag = drag;
    
})