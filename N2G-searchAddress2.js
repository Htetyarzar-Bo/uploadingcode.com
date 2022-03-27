const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const Icon = document.querySelector(".icon");

 let suggestions =[
    'kaneru',     'かねる',
    'kanenai',    'かねない',
    'tsukonai',   'っこない',
    'nagaramo',    'ながらも',
    'gachi',      'がち',
    'gimi',       'ぎみ',
    'gatai',      'がたい',
    'zaruwoenai',   'ざるをえない',
    'nisuginai',    'にすぎない',
    'kotonaku',     'ことなく',
    'ageku',        'あげく',
    'darake',       'だらけ',
    'dakemashida',  'だけましだ',
    'dakeatte',     'だけあって',
    'motoduite',    'もとづいて',
    'nioujite',     'におうじて',
    'niwatatte',    'にわたって',
    'totomoni',     'とともに',
    'dokoroka',     'どころか',
    'mononara',     'ものなら',
    'kuseshite',    'くせして',
    'mokamawazu',   'もかまわず',
    'kotokara',     'ことから',
    'sue',          'すえ',
    'karatoitte',   'からといって',
    'nikotaete',    'にこたえて',
    'irai',         'いらい',
    'kiru',         'きる',
    'nuku',         'ぬく',
    'karaniha',     'からには',
    'madashimo',    'まだしも',
    'monono',       'ものの',
    'hokanai',      'ほかない',
    'hokanaranai',  'ほかならない',
    'motode',       'もとで',
    'sai',          'さい',
    'nitsuki',      "につき",
    'motoyori',     'もとより',
    'ueha',         'うえは',
    'shidaide',     'しだいで',
    'shidai',       'しだい',
    'ueni',         'うえに',
    'toka',         'とか',
    'megutte',      'めぐって',
    'karaiuto',     'からいうと',
    'monodehanai',  'ものではない',
    'sakidatte'     ,'さきだって',
    'amari'         ,'あまり',
    'nokotodakara'  ,'のことだから',
    'nikagiri'      ,'にかぎり',
    "kagiri"        , "かぎり",
    'tohakagiranai' ,'とはかぎらない',
    "nikagiru"  　　, "にかぎる"　  , 
    "もとにして"　　, "motonishite" ,
    "にしたら"　  　, "nishitara" ,
    "はんめん"　    , "hanmen" ,
    "ばかりに"　    , "bakarini" ,
    "むけだ"　    　, "mukeda" ,
    "にかけては"　  , "nikaketeha" ,
    "ことに"　  　  , "kotoni" ,
    "にはんして"　  , "nihanshite" ,
    "をとわず"　  　, "wotowazu"　,
    "をとする"　  　       , "wotosuru" ,
    "かとおもったら"       ,　"katoomottara" ,
    "てばかりはいられない"　, "tebakarihairarenai" ,
    "てこそ"　             , "tekoso" ,
    "ぬきで"　          　 , "nukide" ,
    "てはならない"　      　, "tehanaranai" ,
    "はともかく"　      　　, "hatomokaku" ,
    "ないではいられない"　  , "naidehairarenai" ,
    "ずにはいられない"　    , "zunihairarenai" ,
    "てまで"　             , "temade" ,
    "ねばならない"　        , "nebanaranai" ,
    "ないこともない"　      , "naikotomonai" ,
    "か ~ ないかのうちに"　 , "ka-naikanouchini" ,
    "てはいられない"　      ,　"tehairarenai" ,
    "かいがある"　          , "kaigaaru" ,
    "かいがない"　        　, "kaiganai" ,
    "いっぽう（で）"　      , "ippoude" ,
    "いっぽうだ"　          , "ippouda" ,
    "うえでは"　            , "uedeha" ,
    "そうにない/そうもない"　, "souninai" ,
    "おそれがある"　        , "osoregaaru" ,
    "にあたり/にあたって"　  , "niatari" ,
    "にかかわらず"　        , "nikakawarazu" ,
    "にもかかわらず"　      , "nimokakawarazu" ,
    "てからでないと"　      , "tekaradenai" ,
    "からして"　            , "karashite" ,
    "のみならず"　          , "nominarazu",
    "うえで"　              , "uede" ,
    "にきまっている／にちがいにない"　, "nikimatteiru" ,
    "からすると"　          , "karasuruto" ,
    "える"　                , "eru" , 
    "にて"　                , "nite" ,
    "つつある"　            , "tsutsuaru" ,
    "おりに（は）"　        , "oriniha" ,
    "にそって"　            , "nisotte" ,
    "にとまなって"　        , "nitomonatte" ,
    "につれて"　            , "nitsurete" ,
    "にしたがって"　        , "nishitagatte" ,
    "やら…やら"　         　, "yara-yara" ,
    "につけ…につけ"　       , "nitsuke-nitsuke" ,
    "ものだから"　          , "monodakara" ,
    "としたら/とすれば"     , "toshitara/tosureba",
    "どころではない/どころじゃだい"　, "dokorodehanai" ,
    "つつ"　                , "tsutsu" ,
    "というものでもない/といらものではない"　, "toiumonodehanai" ,
    "において"　            , "nioite" ,
    "をはじめ"　            , "wohajime" ,
    "ちゅうしんに"　         , "chuushinni" ,
    "ことになっている"　     , "kotoninatteiru" ,
    "まい"　                 , "mai" ,
    "ようか～まいか"　        , "youka~maika" ,
    "たよりに"　             , "tayorini",
    "きっかけに"　           , "kikkakeni" ,
    "ないことには ~ ない"　   , "naikotoniha-nai" ,
    "どうぜんだ"　            , "douzenda",
    "からみると"　            , "karamiruto" ,
    "ものか"　                , "monoka" ,
    "ではないか/じゃないか"　  , "dehanaika/janaika" ,
    "も~ば~も"　              , "mobamo" ,
    "にしろ～（にしろ）/にせよ～（にせよ）"　, "nishiro/niseyo" ,
    "かのようだ"　            , "kanoyouda" ,
    "ようがない"　            , "youganai" ,
    "から～にかけて "　       , "kara~nikakete" ,
    "にさいして"　            , "nisaishite" ,
    "をつうじて／をとおじて"　 , "tuujite/tooshite" ,
    "からこそ"　              , "karakoso" ,
    "とうぜんだ"　            , "touzenda" ,
    "しだいです"　            , "shidaidesu" ,
    "かける"　                , "kakeru" ,
    "ものがある"　            , "monogaaru" ,
    "わけだ"　                , "wakeda" ,
    'わけではない'            , 'wakedehanai', 
    "わけがない"　            , "wakeganai" ,
    "わけにはいかない"　       , "wakenihaikanai" ,
    "もっともだ"　            , "motomoda" ,
    "かかわって"　            , "kakawatte" ,
    "それでも"　              , "soredemo" ,
    "それなのに"　            , "sorenanoni" ,
    "それなら"　              , "sorenara" ,
    "それで "　              , "sorede" ,
    "げ"　                  , "ge" ,
    "たまらない"　           , "tamaranai" ,
    "すなわち"　             , "sunawachi",
    "あるいは"　             , "aruiha" ,
    "だが"　                 , "daga" ,
    "だって"　               , "datte" ,
    "とおり"　               , "toori" ,
    "かなわない"　            , "kanawanai" ,
    "ということは"　          , "toiukotoha" ,
    "というのは"　            , "toiunoha" ,
    "したがって"　            , "shitagatte" ,
    "ただし"　                , "tadashi" ,
    "しかたがない/しょうがない", "shikataganai/shouganai" ,
    "ならない"　              , "naranai" ,
    "もっとも"　              , "mottomo" ,
    "なお"　                  , "nao" ,
    "さて"　                  , "sate" ,
    "すると"　                , "suruto" ,
    "まま（に）"　             , "mamani" ,
    "っぱなし"　               , "ppanashi" ,
    "ようするに"　             , "yousuruni" ,
    "しかも"　                 , "shikamo" ,
    "おまけに"　               , "omakeni" ,
    "ちなみに"　               , "chinamini" ,
    "っぽい"　                 , "ppoi" ,
    "きり/っきり"　            , "kiri/kkiri" ,
    "それが"　                 , "sorega" ,
    "そこで"　                 , "sokode" ,
    "そういえば"　             , "souieba" ,
    "それはそうと"　           , "sorehasouto" ,
    "ものだ"　                 , "monoda" ,
    "というものだ"　            , "toiumonoda" ,
    "ないものだろうか"　        , "naimonodarouka" ,
    "ところ（を）"　            , "tokorowo" ,
    "たところ"　               , "tatokoro" ,
    "ばかりだ"　               , "bakarida" ,
    "としても/にしても"　       , "toshitemo/nishitemo" ,
    "により"　                 , "niyori" ,
    "はさておき"　             , "hasateoki" ,
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

        for (var i = 0; i < GramSearch.length; i++){

          if(data == GramSearch[i].address){

          return data = '<li>' + "<a href=" + "#" + GramSearch[i].address+ " + >"
          + "(" + (i+1) + ") " +GramSearch[i].title + "</a>" + '</li>';
        }
          if(data == GramSearch[i].title){

          return data = '<li>' + "<a href=" + "#" + GramSearch[i].address+ " + >"
          + "(" + (i+1) + ") " + GramSearch[i].title + "</a>" + '</li>';
          }

      }
      });
     // console.log(emptyArray);

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

// -------cancel cross sign ကို စာရေး မှ ပေါ်လာအောင် -----------


document.body.addEventListener('keypress',KeyPress);  // စာရိုက်မှ cross ပေါ်ဖို့ 

function KeyPress(){

  if( inputBox.value!== " " ){    // " " မှသာ click တစ်ချက်တည်းနဲ့ ပေါ် နိုင်  //"" ဆို ၂ချက်နှိုပ် မှ ပေါ် 
    Icon.classList.add('active');
  }else{
    Icon.classList.remove('active');
  }
}

Icon.onclick =()=>{
    Icon.classList.remove('active');
    inputBox.value="";
    searchWrapper.classList.remove('active');  // 'x' icon ကို ဖျက်တာနဲ့ list တွေအကုန်ပျောက်အောင် 
}

const SidebarHide =  document.querySelector('.nav-section');
/*const Address =  document.querySelector('.address');

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
}*/