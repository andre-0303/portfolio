function enviarWhatsApp(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = "5588992622611";   

    const texto = `Olá! Sou o ${nome}, ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url, '_blank');

}

document.addEventListener("DOMContentLoaded", () => {
    const btnHamburguer = document.querySelector(".hamburguer");
    const menu          = document.querySelector(".menu");
  
    btnHamburguer.addEventListener("click", () => {
      menu.classList.toggle("menu--aberto");
    });
  
    /* fecha o menu quando um link é clicado */
    document.querySelectorAll(".menu-link").forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("menu--aberto"));
    });
  });
  

const txtEfeito = document.querySelector(".txtEfeito");
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervalo =     null;

if (txtEfeito) {
    txtEfeito.addEventListener("mouseover", (e) => {
        let contador = 0;
        clearInterval(intervalo);

        intervalo = setInterval(() => {
            e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    return index < contador
                        ? e.target.dataset.value[index]
                        : alfabeto[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (contador >= e.target.dataset.value.length) {
                clearInterval(intervalo);
            }

            contador += 1 / 3;
        }, 30);
    });
}
