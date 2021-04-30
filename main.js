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
    let isDrag = false;
    const projectDisplay = document.querySelector('.projectDisplay');
    projectDisplay.addEventListener('mousedown', (event)=>{
        isDrag =true;        
    });

    projectDisplay.addEventListener('mousemove', (event)=>{
        if (isDrag){
           if (x<=0 || x >= -3000 +document.documentElement.clientWidth *.9){
                x= x+event.movementX;
                projectDisplay.style.left=`${x}px`;
                console.log(x);
           }
            // if (x>0){
            //     x= 0;
            //     projectDisplay.style.left=`${x}px`;
            // } else if (x<= -2000){
            //     x= -2000;
            //     projectDisplay.style.left=`${x}px`;
            // }else {
            //     x= x+event.movementX;
            //     projectDisplay.style.left=`${x}px`;
            //     console.log(x);
            // }
        }
        
    });
    projectDisplay.addEventListener('mouseup', (event)=>{
        isDrag=false;
        if (x>0){
            x=0;
            projectDisplay.style.left=`${x}px`;
        } else if (x<-3000 +document.documentElement.clientWidth *.9){
            x=-3000 +document.documentElement.clientWidth *.9;
            projectDisplay.style.left=`${x}px`;
        }       
    });  
    console.log (-3000 +document.documentElement.clientWidth *.9)
    

    
}




portfolioApp.init = () =>{
    portfolioApp.InitialSlideAnimation();
    portfolioApp.setProjectListeners();
}

    portfolioApp.init();
