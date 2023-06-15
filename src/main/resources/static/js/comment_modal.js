window.addEventListener('load', function (){
    
    function onClick() {
        document.querySelector('.comment_modal').style.display ='flex';
        document.querySelector('.black_bg').style.display ='block';
        document.querySelector('body').style.overflow = 'hidden';
    }
    function offClick() {
        document.querySelector('.comment_modal').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
        document.querySelector('body').style.overflow = 'scroll';
    }

    document.querySelectorAll('.reply').forEach(modal_btn=>{modal_btn.addEventListener('click', onClick)});
    document.querySelector('.black_bg').addEventListener('click', offClick);
});

