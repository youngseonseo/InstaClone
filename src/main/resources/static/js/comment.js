window.addEventListener('load', function (){
    let commentInput=document.getElementsByClassName("reply_content")[0];
    function onClick() {
        const box=document.getElementsByClassName("comment_box")[0];

        const image=document.createElement("img");

        const comment=document.createElement("div");
        const comment_image=document.createElement("div");
        const comment_content=document.createElement("div");
        const id=document.createElement("span");
        const content=document.createElement("span");
        const date=document.createElement("div");

        comment.classList.add("comment");
        comment_image.classList.add("comment_image");
        image.classList.add("id_img");
        comment_content.classList.add("comment_content");
        id.classList.add("insta_id");
        content.classList.add("contents");
        date.classList.add("insta_date");

        image.setAttribute("src","../img/krong.png")

        id.innerHTML=" krong ";
        content.innerText= commentInput.value;
        date.innerHTML="지금";

        comment_image.appendChild(image);
        comment_content.appendChild(id);
        comment_content.appendChild(content);
        comment_content.appendChild(date);

        comment.appendChild(comment_image);
        comment.appendChild(comment_content);

        box.appendChild(comment);
        document.querySelector('.comment_modal').style.display ='flex';
        document.querySelector('.black_bg').style.display ='block';
        document.querySelector('body').style.overflow = 'hidden';
    }

    document.querySelector('.comment_submit').addEventListener('click', (event)=>{
        onClick();
        commentInput.value="";
    });

    commentInput.addEventListener('keydown',(event)=>{
        if(event.code==='ENTER'){
            onClick();
            commentInput.value="";
        }
    });
});
