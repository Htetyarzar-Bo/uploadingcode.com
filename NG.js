const NavMenu = document.getElementById('nav-menu');
const OCBtn = document.getElementById('hide-menu');
const GrammerGroup = document.querySelector('.Grammer-Group')
const navbarOption2 = document.querySelector('.navbar-option2')
const Furigana = document.querySelector('.furigana');
const FuriShow = document.getElementById('furi-show');
const FuriHide = document.getElementById('furi-hide');
const FuriOptions = document.querySelector('.furi-options')
const FuriganaShow = document.getElementById('furiganaShow');

const NavToggle = document.querySelector('.nav_toggle');
const FontCon = document.querySelector('.fontChange-container');


OCBtn.onclick=()=>{   // sidebar menu open /close
    NavMenu.classList.toggle("active");
    SidebarHide.classList.remove('hide');
    inputBox.value ="";
}

GrammerGroup.onclick= ()=>{
    NavMenu.classList.remove("active");
    FontCon.classList.remove("show");
    SidebarHide.classList.remove('hide');
    Icon.classList.remove('active');
    searchWrapper.classList.remove('active');  
}


// themes change
    document.getElementById("toggle").addEventListener("click", function(){
   
    if( document.getElementsByTagName('body')[0].classList.toggle("dark-theme")){
        document.querySelector('.Day-mode').textContent="Night Mode";
    }
    else{
        document.querySelector('.Day-mode').textContent="Day Mode";
    }
    
});
   
/*===== MENU SHOW =====*/ 


NavToggle.addEventListener('click', () => {
	FontCon.classList.toggle('show');
});


