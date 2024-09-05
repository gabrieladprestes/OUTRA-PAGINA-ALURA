const botao = document.getElementById("botao");
const divPai = document.getElementById("divPai");

botao.addEventListener("click", () => {
    const link = document.createElement("a");

    link.textContent = "Clique aqui, e escute algo incrível";
    link.setAttribute("id", "link");
    link.setAttribute("href", "https://www.youtube.com/playlist?list=PLN5VwsN71WKMaSAqecOfIZ1pbn57J_5lY");
    link.setAttribute("target", "_blank");

    divPai.innerHTML= "";
    divPai.appendChild(link);
});