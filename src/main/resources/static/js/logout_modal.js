window.addEventListener('load', function (){
    function onClick() {
        document.querySelector('.logout_modal').style.display ='flex';
        document.querySelector('.black_bg').style.display ='block';
        document.querySelector('body').style.overflow = 'hidden';
    }
    function offClick() {
        document.querySelector('.logout_modal').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
        document.querySelector('body').style.overflow = 'scroll';
    }

    document.querySelector('.left_banner3').addEventListener('click', onClick);
    document.querySelector('.black_bg').addEventListener('click', offClick);
});