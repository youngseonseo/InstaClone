window.addEventListener('load', function (){
    function onClick() {
        let svg = document.querySelector('.heart_empty');
        svg.removeChild(svg.firstChild);
        let use = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        use.classList.add("button");
        use.setAttribute("src","../img/heart_full.svg")
        svg.appendChild(use);
    }
    document.querySelector('.heart_empty').addEventListener('click', onClick);
});