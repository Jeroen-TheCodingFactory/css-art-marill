const checkbox = document.getElementsByClassName("marill__checkbox")[0];
checkbox.checked = false;

const label = document.getElementsByClassName("marill__label")[0];
const audio = document.getElementsByClassName("marill__audio")[0];

label.onclick = event => {
    if(!checkbox.checked){
        audio.play();
    }
}