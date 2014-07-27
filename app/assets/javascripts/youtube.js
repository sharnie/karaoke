$(document).on('page:change', function(){

  // function PlayerState() { 
  //   var sStatus = document.getElementById("video").getPlayerState(); 
  //   if (sStatus == -1) alert ("Video has not started."); 
  //   else if (sStatus == 0) alert ("Video has ended."); 
  //   else if (sStatus == 1) alert ("Video is playing."); 
  //   else if (sStatus == 2) alert ("Video is paused."); 
  //   else if (sStatus == 3) alert ("Video is buffering."); 
  //   else if (sStatus == 5) alert ("Video is cued."); 
  // } 


//   swfobject.embedSWF(
//     "http://www.youtube.com/v/gLCFnKZLoUY?enablejsapi=1&playerapiid=ytplayer&version=3",
//     "ytapiplayer",
//     "425", "356",
//     "8",
//     null, null,
//     { allowFullscreen: "true", allowScriptAccess: "always" },
//     { id: "video" }
//   );

//   // var ytplayer = $("#video");
//   //     ytplayer.playVideo();


// function callPlayer(frame_id, func, args) {
//     if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
//     var iframe = document.getElementById(frame_id);
//     if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
//         iframe = iframe.getElementsByTagName('iframe')[0];
//     }
//     if (iframe) {
//         // Frame exists, 
//         iframe.contentWindow.postMessage(JSON.stringify({
//             "event": "command",
//             "func": func,
//             "args": args || [],
//             "id": frame_id
//         }), "*");
//     }
// }

});