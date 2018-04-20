document.addEventListener("keydown", function(e){
  e = e || window.event;
  if (e.shiftKey && e.keyCode == 65) {

        var currentLocation = window.location.host;

        function getFacebookUrl(){
         var x = window.location.href;
         location.href = x.replace(/www/,"m");
       };

       function geFacebookSrc(){
         var bl = document.querySelector('._53mw');
         var atr = bl.dataset.store;
         atr = JSON.parse(atr);
         location.href=atr.src; 
       };

       function googlePlus(){

        var iframe = document.querySelector('iframe');
        if(!iframe){
          var url = document.querySelector('img').src;
          var fL = url.search( /\/w\d{3}/ );

          var shurl = url.substring(fL);

          var lL = shurl.indexOf("w\/");
          var c = url.substring((lL+1)+fL);
          var a = url.substring(0,fL);

          location.href  = a + c;
        } else {
          var block =document.querySelector('content');
          var blocks = block.getElementsByTagName('*');
          for(var i = 0; i < blocks.length; i++){
            if(blocks[i].hasAttribute('data-dlu')){
              var src = blocks[i].getAttribute('data-dlu');
              window.location.href = src;
            }   
          }
        }  
      };


      function getSrcInst(){

        var src = document.querySelector('video');
        if(!src){
         var div = document.getElementsByTagName('div');
         for( var i = 0; i < div.length; i++ ){
          if(div[i].hasAttribute('role') && div[i].getAttribute('role') == 'dialog'){
            var block = div[i];
          } 
        }
    // For photos opened in own tabs
    if(block == null) {
     block= document.querySelector('._4rbun');
     var urlInst = block.querySelector('img').src;
     window.open(urlInst);
    }

    var elements = block.getElementsByTagName('img');
    var source = elements[1].src;
    window.open(source);
    } else {
      var src = document.querySelector('video').src;
      window.open(src);
    }
    };


    function twitterMedia(){
      var el = document.querySelector(".Gallery-media");
      if(el.innerHTML == ""){
       var url = window.location.href;
       var fl = url.indexOf("twitter");

       var a = url.substring(0,fl);
       var hrefTw = a + 'mobile.' + url.substring(fl);

       window.open(hrefTw);
       

     } else {
      var srcImg = el.querySelector('img').src;
      var lastLetter = srcImg.indexOf(':large');
      var url = srcImg.substring(0, lastLetter);
      window.open(url);

    }
    };

    function twitterMob(){
      var bl = document.getElementById('react-root')
      var src = bl.querySelector('source').src;
      window.location.href = src;
      };
      

    switch(currentLocation){

      case 'lh3.googleusercontent.com':
      case 'plus.google.com':  
      googlePlus();
      break;
      case 'www.instagram.com':
      getSrcInst();
      break;
      case 'www.facebook.com':
      getFacebookUrl();
      break;
      case 'm.facebook.com':
      geFacebookSrc(); 
      break;
      case 'twitter.com':
      twitterMedia(); 
      break;
      case 'mobile.twitter.com':
      twitterMob(); 
      break;       
      default:
      console.log("Sorry,it does not work here!");
    }
}
return true;
});