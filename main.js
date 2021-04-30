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
    let isDragImages = false;
    let isDragBar=false;
    const projectSection = document.querySelector('.projects');
    const projectDisplay = document.querySelector('.projectDisplay');
    const currentBar = document.querySelector('.currentBar');

    projectDisplay.addEventListener('mousedown', (event)=>{
        event.preventDefault;
        isDragImages =true;        
    });

    projectSection.addEventListener('mousemove', (event)=>{
        if (isDragImages){
           if (x<=0 || x >= -3000 +document.documentElement.clientWidth *.9){
                x= x+event.movementX;
                projectDisplay.style.left=`${x}px`;
                xPercent= (x/(-3000 +document.documentElement.clientWidth *.9))*90;
                if (xPercent>0 && xPercent<90){
                currentBar.style.left=`${xPercent}%`;
                } else if (xPercent<0){
                    currentBar.style.left='0%'
                }
                else {
                    currentBar.style.left='90%'
                }
           }
        }
        if (isDragBar){
            if (xPercent>0){
                
            }
        }
        
    });
    projectSection.addEventListener('mouseup', (event)=>{
        isDragImages=false;
        isDragBar=false;
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

    currentBar.addEventListener('mousedown', (event)=>{
        event.preventDefault;
        isDragBar=true;      
    });



    

    

    
}




portfolioApp.init = () =>{
    portfolioApp.InitialSlideAnimation();
    portfolioApp.setProjectListeners();
}

    portfolioApp.init();
