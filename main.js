//Create application object for name spacing
const portfolioApp={};



portfolioApp.InitialSlideAnimation = () =>{
    const textSlide = document.querySelector('.textSlide');
    const buttonContainer = document.querySelector('.buttonContainer');
    textSlide.classList.add('After');
    setTimeout(() => {
        buttonContainer.classList.add('After')
        
    }, 2000);
}


portfolioApp.init = () =>{
    portfolioApp.InitialSlideAnimation();
}


portfolioApp.init();