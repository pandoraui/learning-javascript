
//seajs 示例2

define(function(require,exports,module){
    
    var oInput = document.getElementById('input1');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');
    
    require('./drag.js').drag(oDiv3);
    
    oInput.onclick = function(){
    
        oDiv1.style.display = 'block';
        
        //同步加载
        //require('./scale.js').scale(oDiv1,oDiv2);
        
        //异步加载，按需载入
        require.async('./scale.js',function(ex){
            ex.scale(oDiv1,oDiv2);
        });
    
    }
    
    
})