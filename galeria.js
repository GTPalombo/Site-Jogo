// Seleciona todas as imagens da galeria
let imagensDaGaleria = document.querySelectorAll(".galeria-item img");

// Cria o overlay do lightbox
let lightbox = document.createElement("div");
lightbox.id = "lightboxOverlay";
lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,0.9)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "1000";
document.body.appendChild(lightbox);

// Cria a imagem grande dentro do lightbox
let imagemGrande = document.createElement("img");
imagemGrande.id = "lightboxImage";
imagemGrande.style.maxWidth = "90%";
imagemGrande.style.maxHeight = "90%";
imagemGrande.style.borderRadius = "15px";
lightbox.appendChild(imagemGrande);

// Cria o botão de fechar
let botaoFechar = document.createElement("span");
botaoFechar.innerHTML = "&times;";
botaoFechar.style.position = "absolute";
botaoFechar.style.top = "20px";
botaoFechar.style.right = "30px";
botaoFechar.style.fontSize = "50px";
botaoFechar.style.color = "#ffffff";
botaoFechar.style.cursor = "pointer";
lightbox.appendChild(botaoFechar);

// Adiciona clique em cada imagem da galeria
imagensDaGaleria.forEach(function(img){
    img.addEventListener("click", function(){
        imagemGrande.src = img.src; // usa a própria imagem
        lightbox.style.display = "flex";
    });
});

// Fecha o lightbox ao clicar no botão
botaoFechar.addEventListener("click", function(){
    lightbox.style.display = "none";
});

// Fecha o lightbox ao clicar fora da imagem
lightbox.addEventListener("click", function(e){
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});
