
function click(e) {
  chrome.tabs.executeScript(null,
      {code:`(() => {
        if(window.location.href !== "https://tinder.com/") {
          alert("Go to tinder.com first!");
        }
        const likeButton = document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) End(15px) Scale(1.1):h");
		const dislikeButton = document.getElementsByClassName("button Lts($ls-s) Z(0) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) recsGamepad__button D(b) Bgc(#fff) Wc($transform) Start(15px) Scale(1.1):h");
		
//		const myprofile = document.getElementsByClassName("Pos(a) D(f) Ai(c) C(#fff) Trsdu($normal) T(50%) Fz($m) Fz($responsiveLarge)--m Fz($ml)--l Whs(nw) Translate(0,-50%) Start(25px)--l Start(20px)--m");
//		const manageSubscription = document.getElementsByClassName("productButton__button D(if) Ai(c) Ov(h) W(100%) P(16px) Bdrs(8px) Bxsh($bxsh-btn) Cur(p) Ta(c) Fld(c) Bgc(#fff)");
//		const openLocation = document.getElementsByClassName("Fw($semibold) C($c-pink):h Fl(end)");
//		const searchBox = document.getElementsByClassName("passport__search__input passport__search__input--desktop W(100%) Fw($semibold) Op(.7) Pend(60px)");
//		const searchGlass = document.getElementsByClassName("Scale(1.6) Op(.4)");
//		const selectLocation = document.getElementsByClassName("passport__locationMarker__confirm CenterAlign Cur(p) Px(8px) Trsdu($fast) Bgc($c-blue):h Bdrstend(4px) Bdrsbend(4px)");

//		myprofile[0].click();
//		manageSubscription[1].click();
//		openLocation[0].click();

//		var input = searchBox[0];
//////////////////////////////////////////////////////////		
//		input.focus(); // you can also use input.focus()
//		input.value="";
//		var text = "Wroclaw";
//		var l=text.length;
//		var current = 0;
//		var time = 1000;
//		var write_text = function() {
//			input.value+=text[current];
//			if(current < l-1) {
//				current++;
//				setTimeout(function(){write_text()},time);
//			} else {
//				input.setAttribute('value',input.value);
//			}
//		}
//		setTimeout(function(){write_text()},time);
/////////////////////////////////////////////////////////
	
//		searchGlass[0].focus();
//		searchGlass[0].click();
//		selectLocation[0].click();
		
		var factor =  5;
		var counter = 0;
        setInterval(() => {
		  
		  if(counter == Math.floor(Math.random() * factor)){
			dislikeButton[0].click();
		  }
		  else{
			likeButton[0].click();
		  }
		  counter += 1;
		  if(counter > factor){
			counter = 0;
		  }
        }, 2000);
      })()`});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('a');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});

