const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const Icon = document.querySelector(".icon");

 let suggestions =[
    'kaneru',
    'kanenai',
    'tsukonai',
    'nagaramo',
    'gachi',
    'gimi',
    'gatai',
    'zaruwoenai',
    'nisuginai',
    'kotonaku',
    'ageku',
    'darake',
    'dakemashida',
    'dakeatte',
    'motoduite',
    'nioujite',
    'niwatatte',
    'totomoni',
    'dokoroka',
    'mononara',
    'kuseshite',
    'mokamawazu',
    'kotokara',
    'sue',
    'karatoitte',
    'nikotaete',
    'irai',
    'kiru',
    'nuku',
    'karaniha',
    'madashimo',
    'monono',
    'hokanai',
    'hokanaranai',
    'motode',
    'sai',
    


]

//if user press any key and release

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
   
    if(userData){
        
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
    
      //  console.log(emptyArray);
      emptyArray = emptyArray.map((data) =>{
          return data = '<li>' + data + '</li>';
      });
      console.log(emptyArray);

      searchWrapper.classList.add('active');

      showSuggestions(emptyArray);

      let allList = suggBox.querySelectorAll('li');
      for (let i = 0; i < allList.length; i++){
         // adding onclick attribute in all li tag 
         allList[i].setAttribute("onclick","select(this)");
      }
        
    }else{
        searchWrapper.classList.remove('active');
    
    }
}


function select(element){
    let selectUserData = element.textContent;
   // console.log(selectUserData);
   inputBox.value = selectUserData; // passing the user selected list item data in text 
   searchWrapper.classList.remove('active');
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }else{
        listData = list.join('');
    }
   suggBox.innerHTML = listData;
  
}
const Address =  document.querySelector('.address');
const SidebarHide =  document.querySelector('.nav-section');
Icon.addEventListener('click',SearchAddress);
  
function SearchAddress(){
    
    if(inputBox.value !== ""){
        Address.classList.add('active');
        SidebarHide.classList.add('hide');
    }else{
        Address.classList.remove('active');
        SidebarHide.classList.remove('hide');
    }
   
    for (var i = 0; i < GramSearch.length; i++){
        if(inputBox.value.toLocaleLowerCase() == GramSearch[i].address ){
        Address.innerHTML="<a href=" + "#" + GramSearch[i].address+ " + >"+ GramSearch[i].title + "</a>";
        }
        if(inputBox.value.toLocaleLowerCase() == GramSearch[i].title ){
        Address.innerHTML="<a href=" + "#" + GramSearch[i].address+ " + >"+ GramSearch[i].title + "</a>";
        } 
    }
    inputBox.value="";
}