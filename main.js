
const portfolioApp={};

portfolioApp.projectsArray = [
    {projectNumber: 1,
    title:'WhatDoYouNo',
    skills: 'REACT / FIREBASE / RESTFUL API / COLLABORATIVE WORK /',
    description: 'An interactive literary game based on a client brief. Players are shown a definition and two homophones, and they are tasked to pick the correct homophone that matches the definition. Answer 10 questions as fast as possible and submit your highscore!',
    live: 'https://boring-jackson-ea7019.netlify.app/',
    github: 'https://github.com/whatDoYouNo/whatDoYouNo',
    imageSrc: 'assets/projectWhatDoUNo.PNG',
    imageAlt: 'Project whatDoYouNo preview image'
    },
    {projectNumber: 2,
    title:'AniWho',
    skills: 'REACT / RESTFUL API',
    description: 'A guessing quiz game built in react. Players try to guess or name as many anime characters as they can within a time limit. A functional on-screen word bank limits user input and allows for play using taps and clicks.',
    live: 'https://vigilant-hopper-997c29.netlify.app',
    github: 'https://github.com/justint-7/aniWho',
    imageSrc: 'assets/projectAniWho.PNG',
    imageAlt: 'Project AniWho preview image'
    },
    {projectNumber: 3,
        title:'SuperHero Universe',
        skills: 'Javascript(ES6+)/API/HTML5/CSS3/Paired Programming',
        description: 'An application to interact and browse the SuperHero API. The highlight feature of this app is the auto-completing drop down menu! You can also favourite heroes and add them to your team using the heart icon.',
        live: 'https://github.com/superHeroProject/superHeroProject',
        github: 'https://superheroproject.github.io/superHeroProject/',
        imageSrc: 'assets/projectSuperHeroUniverse.PNG',
        imageAlt: 'Project SuperHero Universe preview image'
    },
    {projectNumber: 3,
        title:'Delicious',
        skills: 'HTML5/CSS3',
        description: 'A  responsive website design reproduction based on a client brief.',
        live: 'https://justint-7.github.io/justin__tseng__project__one/blog.html',
        github: 'https://github.com/justint-7/justin__tseng__project__one',
        imageSrc: 'assets/projectDelicious.PNG',
        imageAlt: 'Project Delicious preview image'
    },
    {projectNumber: 4,
        title:'Minesweeper',
        skills: 'Javascript/JQuery',
        description: 'A simple minesweeper application. My first javascript project!',
        live: 'https://loving-varahamihira-c8ef09.netlify.app',
        github: 'https://github.com/justint-7/mineSweeper',
        imageSrc: 'assets/projectMineSweeper.PNG',
        imageAlt: 'Project MineSweeper preview image'
    }    

];

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
    const projectElementArray = document.querySelectorAll('.projectDisplay > li');
    console.log (projectElementArray);
 

    const maxDisplayLength= projectDisplay.scrollWidth;
    const maxLeftPosition=  -maxDisplayLength + document.documentElement.clientWidth *.90;
    const numOfProjects= projectDisplay.childElementCount;

    projectDisplay.addEventListener('mousedown', (event)=>{
        isDragImages =true;  
    });

    projectSection.addEventListener('mousemove', (event)=>{
        if (isDragImages){
           if (x<=0 || x >= maxLeftPosition){
                x= x+event.movementX;
        
                projectDisplay.style.left=`${x}px`;
                xPercent= (x/(maxLeftPosition) *90);
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
            if (xPercent>=0 && xPercent <=90){
                xPercent = xPercent + (event.movementX / (currentBar.clientWidth*10)*100);
                currentBar.style.left=`${xPercent}%`;
                x= (maxLeftPosition) * (xPercent/90);
                projectDisplay.style.left=`${x}px`; 
                        
            }else if (xPercent<0) {
                currentBar.style.left='0%'
                x=0;
                projectDisplay.style.left=`${x}px`;
            }else{
                currentBar.style.left='90%'
                x=maxLeftPosition;
                projectDisplay.style.left=`${x}px`;
            }
            
        }
    });
    projectSection.addEventListener('mouseup', (event)=>{
        isDragImages=false;
        isDragBar=false;
        if (x>0 || xPercent<=0){
            x=0;
            projectDisplay.style.left=`${x}px`;
            xPercent=0;
            currentBar.style.left=`${xPercent}%`;
            projectDisplay.classList.add('transitionOOB');
            setTimeout(() => {
                projectDisplay.classList.remove('transitionOOB');
            }, 500);
        } else if (x<maxLeftPosition || xPercent >90){
            x=maxLeftPosition;
            projectDisplay.style.left=`${x}px`;
            xPercent=90;
            currentBar.style.left=`${xPercent}%`;
            projectDisplay.classList.add('transitionOOB');
            setTimeout(() => {
                projectDisplay.classList.remove('transitionOOB');
            }, 250);
        }       
    });  

    currentBar.addEventListener('mousedown', (event)=>{
        event.preventDefault;
        isDragBar=true;      
    }); 

projectElementArray.forEach(projectElement => {
    projectElement.addEventListener('click', e =>{
        if (e.target.id){
            console.log(e.target);
            const projectTitle = document.querySelector('.projectTitle')
            const projectSkills = document.querySelector('.highlightSkills')
            const projectDescription = document.querySelector('.projectDescription')
            const projectImage = document.querySelector('.currentImage')
            const projectGit = document.querySelector('.projectGit')
            const projectLive = document.querySelector('.projectLive')

            projectImage.src=portfolioApp.projectsArray[e.target.id].imageSrc;
            projectImage.alt=portfolioApp.projectsArray[e.target.id].imageAlt;
            projectTitle.textContent=portfolioApp.projectsArray[e.target.id].title;
            projectSkills.textContent=portfolioApp.projectsArray[e.target.id].skills;
            projectDescription.textContent=portfolioApp.projectsArray[e.target.id].description;
            projectGit.href=portfolioApp.projectsArray[e.target.id].github;
            projectLive.href=portfolioApp.projectsArray[e.target.id].live;
            
        }
    })
})

}




portfolioApp.init = () =>{
    portfolioApp.InitialSlideAnimation();
    portfolioApp.setProjectListeners();
}

    portfolioApp.init();
