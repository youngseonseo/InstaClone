window.addEventListener('load', function (){

    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
        document.querySelector('body').style.overflow = 'hidden';
    }
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
        document.querySelector('body').style.overflow = 'scroll';
    }

    document.querySelectorAll('.modal_btn').forEach(modal_btn=>{modal_btn.addEventListener('click', onClick)});
    document.querySelector('.black_bg').addEventListener('click', offClick);
    document.querySelector('#cancel').addEventListener('click', offClick);
});
