
const secoes = document.querySelectorAll(".conteudo");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

            observador.unobserve(entrada.target);
        }

    });

}, {
    threshold: 0.15
});


secoes.forEach((secao) => {

    secao.style.opacity = "0";
    secao.style.transform = "translateY(25px)";
    secao.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observador.observe(secao);

});
