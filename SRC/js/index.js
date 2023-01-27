const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const fecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alterarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alterarModal();
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click",() => {
    alterarModal();
    video.setAttribute("src", "")
})





