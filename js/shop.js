const ItemCtrl =(() => {
   
})();

const UICtrl = (() => {
    const menu = document.querySelector('#main-nav .menu');
    

    return{
        setMenu : () => {
            let state = false;
            menu.addEventListener('click', () => {
                if(!state){
                    menu.classList.add('open');
                    state = true;
                }else{
                    menu.classList.remove('open');
                    state = false;
                }
            })
        }
    }

})()

const App = ((ItemCtrl,UICtrl) => {
    
    return {
        init : function(){
            UICtrl.setMenu();
        }
    }
})(ItemCtrl,UICtrl);

App.init();
