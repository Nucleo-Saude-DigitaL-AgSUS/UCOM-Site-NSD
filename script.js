document.addEventListener("DOMContentLoaded", function () {
  /** ========== 1. CARROSSEL ========== */
  const carouselImages = document.querySelector(".carousel-images");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const indicatorsContainer = document.querySelector(".carousel-indicators");

  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;
  const autoRotateInterval = 3000;

  for (let i = 0; i < totalImages; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    if (i === 0) dot.classList.add("active");
    indicatorsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");

  function updateCarousel(index) {
    const translateX = -index * 100;
    carouselImages.style.transform = `translateX(${translateX}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel(currentIndex);
  }

  nextButton?.addEventListener("click", nextImage);
  prevButton?.addEventListener("click", prevImage);

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-index"));
      updateCarousel(currentIndex);
    });
  });

  let autoRotate = setInterval(nextImage, autoRotateInterval);
  [nextButton, prevButton, ...dots].forEach((control) => {
    control?.addEventListener("mouseenter", () => clearInterval(autoRotate));
    control?.addEventListener("mouseleave", () => {
      autoRotate = setInterval(nextImage, autoRotateInterval);
    });
  });

  /** ========== 2. CHATBOT ========== */
  const chatButton = document.getElementById("chatButton");
  const sustoImage = document.getElementById("susitoImage");
  const chatDialog = document.getElementById("chatDialog");
  let dialogTimeout;

  if (chatButton && sustoImage && chatDialog) {
    chatButton.addEventListener("mouseover", () => {
      chatButton.style.opacity = "0";
      sustoImage.style.display = "block";
      sustoImage.style.transform = "scale(1.05)";

      setTimeout(() => {
        sustoImage.style.opacity = "1";
        setTimeout(() => {
          chatDialog.classList.remove("hidden");
          resetDialogTimeout();
        }, 3);
      }, 300);
    });

    sustoImage.addEventListener("mouseout", (event) => {
      if (!chatDialog.contains(event.relatedTarget)) {
        closeDialog();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !chatButton.contains(event.target) &&
        !sustoImage.contains(event.target) &&
        !chatDialog.contains(event.target)
      ) {
        closeDialog();
      }
    });

    const buttons = chatDialog.querySelectorAll(".option-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        closeDialog();
      });
    });

    chatDialog.addEventListener("mouseleave", closeDialog);
  }

  function closeDialog() {
    chatDialog.classList.add("hidden");
    setTimeout(() => {
      sustoImage.style.opacity = "0";
      sustoImage.style.transform = "scale(1)";
      setTimeout(() => {
        sustoImage.style.display = "none";
        chatButton.style.opacity = "1";
      }, 300);
    }, 300);
  }

  function resetDialogTimeout() {
    clearTimeout(dialogTimeout);
    dialogTimeout = setTimeout(() => {
      closeDialog();
    }, 10000);
  }

  /** ========== 3. BOTÕES CLICÁVEIS ========== */
  const allBotaoClicavel = document.querySelectorAll(
    ".botaoClicavel, .corpo9E .botaoClicavel, #Corpo7 .imgCorpo7"
  );

  allBotaoClicavel.forEach((image) => {
    const textBox = image.nextElementSibling;
    if (textBox) {
      textBox.style.opacity = "0";
      textBox.style.display = "none";

      image.addEventListener("click", () => {
        const isHidden = textBox.style.display === "none";
        textBox.style.display = isHidden ? "block" : "none";
        setTimeout(() => {
          textBox.style.opacity = isHidden ? "1" : "0";
        }, 0);
      });
    }
  });

  /** ========== 4. FLIP - SOU GESTOR ========== */
  const flipper = document.querySelector(".flipper");
  flipper?.addEventListener("click", () => {
    flipper.classList.toggle("flipped");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbarNav");
    const toggle = document.querySelector(".navbar-toggler");

    document.addEventListener("click", function (event) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnToggle = toggle.contains(event.target);

      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav);

      if (
        !isClickInsideNav &&
        !isClickOnToggle &&
        nav.classList.contains("show")
      ) {
        bsCollapse.hide();
      }
    });
  });

  /** ========== 6. CONTADORES - COMUNIDADE ========== */
  function animateCounter(element, start, end, duration, isPercentage = false) {
    let count = start;
    let increment = (end - start) / (duration / 20);

    let interval = setInterval(() => {
      count += increment;
      if (count >= end) {
        count = end;
        clearInterval(interval);
      }
      element.innerText = isPercentage
        ? `${count.toFixed(1)}%`
        : (count / 1000).toFixed(3);
    }, 20);
  }

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.75) {
          let el = entry.target;
          if (el.id === "contagemC11D1") animateCounter(el, 0, 6312, 2000);
          if (el.id === "contagemC11D2") animateCounter(el, 0, 85, 2000, true);
          if (el.id === "contagemC11D3") animateCounter(el, 0, 97, 2000, true);
        }
      });
    },
    { threshold: 0.75 }
  );

  ["contagemC11D1", "contagemC11D2", "contagemC11D3"].forEach((id) => {
    let element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }
  });
});
