document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    const autoRotateInterval = 3000;

    // Criação dinâmica dos indicadores (dots)
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        if (i === 0) dot.classList.add('active');
        indicatorsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    // Atualiza o carrossel para o índice atual
    function updateCarousel(index) {
        const translateX = -index * 100;
        carouselImages.style.transform = `translateX(${translateX}%)`;
        
        // Atualizar os indicadores (dots)
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel(currentIndex);
    }

    // Imagem anterior
    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel(currentIndex);
    }

    // Clique nos botões de navegação
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Clique nos indicadores
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateCarousel(currentIndex);
        });
    });

    // Rotação automática
    let autoRotate = setInterval(nextImage, autoRotateInterval);

    // Pausar rotação automática ao interagir com os controles
    [nextButton, prevButton, ...dots].forEach(control => {
        control.addEventListener('mouseenter', () => clearInterval(autoRotate));
        control.addEventListener('mouseleave', () => {
            autoRotate = setInterval(nextImage, autoRotateInterval);
        });
    });
});


/** Chatbot Bloco */

const chatButton = document.getElementById('chatButton');  
const sustoImage = document.getElementById('susitoImage');  
const chatDialog = document.getElementById('chatDialog');  
let dialogTimeout;  

chatButton.addEventListener('mouseover', () => {  
    chatButton.style.opacity = '0';  
    sustoImage.style.display = 'block';  
    sustoImage.style.transform = 'scale(1.05)';  

    setTimeout(() => {  
        sustoImage.style.opacity = '1';  
        
        setTimeout(() => {  
            chatDialog.classList.remove('hidden');  
            resetDialogTimeout();  
        }, 3);  
    }, 300);  
});  

function closeDialog() {  
    chatDialog.classList.add('hidden');  

    setTimeout(() => {  
        sustoImage.style.opacity = '0';  
        sustoImage.style.transform = 'scale(1)';  
        
        setTimeout(() => {  
            sustoImage.style.display = 'none';  
            chatButton.style.opacity = '1';  
        }, 300);  
    }, 300);  
}  

function resetDialogTimeout() {  
    clearTimeout(dialogTimeout);  
    dialogTimeout = setTimeout(() => {  
        closeDialog();  
    }, 10000);  
}  

sustoImage.addEventListener('mouseout', (event) => {  
    if (!chatDialog.contains(event.relatedTarget)) {  
        closeDialog();  
    }  
});  

document.addEventListener('click', (event) => {  
    if (!chatButton.contains(event.target) &&   
        !sustoImage.contains(event.target) &&   
        !chatDialog.contains(event.target)) {  
        closeDialog();  
    }  
});  

const buttons = chatDialog.querySelectorAll('.option-button'); 
buttons.forEach(button => {  
    button.addEventListener('click', () => {  
        closeDialog();  
    });  
});  

function redirectTo(url) {  
    window.location.href = url;  
}  

chatDialog.addEventListener('mouseleave', closeDialog);

//CORPO - SOU USUÁRIO 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.botaoClicavel');

    images.forEach((image) => {
        const textBox = image.nextElementSibling;

        textBox.style.opacity = '0';
        textBox.style.display = 'none';

        image.addEventListener('click', () => {
            if (textBox.style.display === 'none') {
                textBox.style.display = 'block';
                setTimeout(() => {
                    textBox.style.opacity = '1';
                }, 0);
            } else {
                textBox.style.opacity = '0';
                setTimeout(() => {
                    textBox.style.display = 'none';
                }, 600);
            }
        });
    });
});

/* Bloco Sou Profissional    Jeremias Silva 31/01/2025 */ 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.corpo9E .botaoClicavel');

    images.forEach((image) => {
        const textBox = image.nextElementSibling;

        textBox.style.opacity = '0';
        textBox.style.display = 'none';

        image.addEventListener('click', () => {
            if (textBox.style.display === 'none') {
                textBox.style.display = 'block';
                setTimeout(() => {
                    textBox.style.opacity = '1';
                }, 0);
            } else {
                textBox.style.opacity = '0';
                setTimeout(() => {
                    textBox.style.display = 'none';
                }, 60000);
            }
        });
    });
});

//* Contador dos Indicadores*/
function animateCounter(element, start, end, duration, isPercentage = false) {
    let count = start;
    let increment = (end - start) / (duration / 20);
    
    let interval = setInterval(() => {
        count += increment;
        if (count >= end) {
            count = end;
            clearInterval(interval);
        }
        element.innerText = isPercentage ? `${count.toFixed(1)}%` : (count / 1000).toFixed(3);
    }, 20);
}

// Criar um Observer para detectar quando as divs entram na tela de forma centralizada
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.75) { // Ativa quando 75% do elemento está visível (mais centralizado)
            let counterElement = entry.target;
            
            // Reinicia o contador ao entrar novamente na tela
            if (counterElement.id === "contagemC11D1") {
                animateCounter(counterElement, 0, 6312, 2000); 
            } else if (counterElement.id === "contagemC11D2") {
                animateCounter(counterElement, 0, 85, 2000, true); 
            } else if (counterElement.id === "contagemC11D3") {
                animateCounter(counterElement, 0, 97, 2000, true); 
            }
        }
    });
}, { threshold: 0.75 }); // O contador só inicia quando 75% do elemento estiver visível

// Observar os elementos com IDs
["contagemC11D1", "contagemC11D2", "contagemC11D3"].forEach(id => {
    let element = document.getElementById(id);
    if (element) {
        observer.observe(element);
    }
});


// FLIP DO SOU GESTOR - Critérios //
document.addEventListener("DOMContentLoaded", function () {
    const flipper = document.querySelector(".flipper");

    flipper.addEventListener("click", function () {
        flipper.classList.toggle("flipped");
    });
});
/** Corpo 7E Sou Gestor  */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#Corpo7 .imgCorpo7');

    images.forEach((image) => {
        let textBox = image.nextElementSibling;

        textBox.style.opacity = '0';
        textBox.style.display = 'none';

        image.addEventListener('click', () => {
            if (textBox.style.display === 'none') {
                textBox.style.display = 'block';
                setTimeout(() => {
                    textBox.style.opacity = '1';
                }, 0);
            } else {
                textBox.style.opacity = '0';
                setTimeout(() => {
                    textBox.style.display = 'none';
                }, 600);
            }
        });
    });
});

// SOM AO INICIAR //
    document.addEventListener("DOMContentLoaded", function() {
        let audio = document.getElementById("siteAudio");

        // Aguarda um pequeno tempo para iniciar o som com a logo
        setTimeout(() => {
            audio.play().catch(error => console.log("Reprodução automática bloqueada pelo navegador:", error));
        }, 500); // Ajuste o tempo conforme necessário para sincronizar com a logo
    });

 