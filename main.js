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

portfolioApp.setProjectListeners = () =>{
    let x=0;
    let xPercent=0;
    let isDrag = false;
    const projectSection = document.querySelector('.projects');
    const projectDisplay = document.querySelector('.projectDisplay');
    const currentBar = document.querySelector('.currentBar');
    projectDisplay.addEventListener('mousedown', (event)=>{
        event.preventDefault;
        isDrag =true;        
    });

    projectSection.addEventListener('mousemove', (event)=>{
        if (isDrag){
           if (x<=0 || x >= -3000 +document.documentElement.clientWidth *.9){
                x= x+event.movementX;
                xPercent= (x/(-3000 +document.documentElement.clientWidth *.9))*90;
                projectDisplay.style.left=`${x}px`;
                currentBar.style.left=`${xPercent}%`
                console.log(x);
           }
        }
        
    });
    projectSection.addEventListener('mouseup', (event)=>{
        isDrag=false;
        if (x>0){
            x=0;
            projectDisplay.style.left=`${x}px`;
            currentBar.style.left='0%'
        } else if (x<-3000 +document.documentElement.clientWidth *.9){
            x=-3000 +document.documentElement.clientWidth *.9;
            projectDisplay.style.left=`${x}px`;
            currentBar.style.left='90%'
        }       
    });  
    console.log (-3000 +document.documentElement.clientWidth *.9)
    

    
}




portfolioApp.init = () =>{
    portfolioApp.InitialSlideAnimation();
    portfolioApp.setProjectListeners();
}

    portfolioApp.init();
