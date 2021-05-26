

var breakPoint      =       1280; // mobile < 1280 <= pc

/******************************/
(function(_this){
    var _view = {
        init : function(){

        },
        platform : function(){
            if( $(window).outerWidth() > breakPoint ){
                return "pc"
            }else{
                return "mobile"
            }
        }
    };

    var _layout = {
        init        : function(){
            _layout.gnb();
            _layout.lnb();
            _layout.dim();
            _layout.popup();
        },

        update      : function(){},
        gnb         : function(){},
        lnb         : function(){},
        dim         : function(){},
        popup       : function(){},
        overflow    : function(){},
    };

    var _ui = {
        init        : function(){
            _ui.input();
            _ui.select();
            _ui.table();
            _ui.tab();
            _ui.switch();
            _ui.accordion();
            _ui.tree();
            _ui.tooltip();
            _ui.floating();
            _ui.sticky();
        },
        update      : function(param){
            if( param == undefined ){
                _ui.innit();
            }else{
                // 개별업데이트기능 추가예정
            }
        },

        /* component */
        input       : function(){},
        select      : function(){},
        table       : function(){},

        /* interface */
        tab         : function(){},
        switch      : function(){},
        accordion   : function(){},
        tree        : function(){},
        tooltip     : function(){},
        floating    : function(){},
        sticky      : function(){},
    };

    _this._view     =   _view;
    _this._layout   =   _layout;
    _this.ui        =   _ui;
})(this)




// pollyfill
// IE9 이상 closest method 실행
if( !Element.prototype.matches ){
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
if( !Element.prototype.closest ){
    Element.prototype.closest = function(s){
        var el = this;

        do{
            if( el.matches(s) ) return el;
            el = el.parentElement || el.parentNode;
        }while( el !== null || el.nodeType === 1 ){
            return null;
        };
    };
};