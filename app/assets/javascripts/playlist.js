// $(document).on('page:load', function() {

//   PlayList = {
//     changeVideo: function(video_li) {
//       var video_id = video_li.data('id');

//           currentVideo = video_li;
//           PlayList.highlightCurrentSong();

//       player.loadVideoById(video_id);

//     },
//     addVideoToPlaylist: function(video_li, video_name, video_thumb, video_id) {

//       $.ajax({
//         type: 'POST',
//         url: '/playlists/'+ playlist_id +'/videos',
//         data: {
//           video: {
//             name:      video_name,
//             image_url: video_thumb,
//             unique_id: video_id,
//           },
//         },
//         success: function(response) {

//           video_li.addClass('added-to-list');
//           video_li.find('small.text-muted').html('Added to playlist');

//         }
//       });

//       playlist.append([
//         '<li class="list-group-item playlist-video" data-id="'+ video_id +'">',
//           '<div class="pull-right m-l">',
//             '<a href="#" class="remove-icon"><i class="icon-close btn-add-remove"></i></a>',
//           '</div>',
//           '<span class="jp-play-me m-r-sm pull-left">',
//             '<img src="'+ video_thumb +'" class="thumb-xs">',
//           '</span>',
//           '<div class="clear text-ellipsis">',
//             '<span>'+ video_name +'</span>',
//           '</div>',
//         '</li>',
//       ].join("\n"));

//     },
//     removeVideoFromPlaylist: function(video_li, video_id) {
//       $.ajax({
//         type: 'DELETE',
//         url: '/playlists/'+ playlist_id +'/videos/'+ video_id,
//         success: function() {

//           video_li.fadeOut(600).remove();

//         }
//       });
//     },
//     getVideos: function(query) {
//       $.getJSON('/videos.json', {q: query}, function(response){

//         PlayList.updateSearchResult(response.videos);

//       });
//     },
//     updateSearchResult: function(new_videos) {
//       var items = $('#search-results li'),
//           video_li;

//       $.each(items, function(index, item) {
//         item.remove();
//       });

//       $.each(new_videos, function(index, video){

//         search_results.append([
//           '<li class="list-group-item clearfix result-item" data-id="'+ video.unique_id +'">',
//             '<a href="#" class="jp-play-me pull-right m-t-sm m-l text-md add-to-playlist">',
//               '<i class="fa fa-plus-circle text btn-add-remove"></i>',
//             '</a>',
//             '<a href="#" class="pull-left thumb-md m-r">',
//               '<img src="'+ video.thumbnails[2].url +'" class="playlist-video-image" />',
//             '</a>',
//             '<span class="clear">',
//               '<span class="block text-ellipsis playlist-video-title">'+ video.title +'</span>',
//               '<small class="text-muted">Add to playlist</small>',
//             '</span>',
//           '</li>',
//         ].join("\n"));

//       });
//     },
//     highlightCurrentSong: function() {
//       $.each(playlist_video_li, function(index, element){

//         if($(element).hasClass('now-playing')){
//           $(element).removeClass('now-playing');
//         }

//       });

//       currentVideo.addClass('now-playing');
//     }
//   }

//   // video search form
//   var video_search_form = $('#video-search-form'), query;

//   video_search_form.on('submit', function(ev){
//     ev.preventDefault();

//     query = $(this).find('#video-query').val();

//     PlayList.getVideos(query);
//   });


//   // change now playing video
//   playlist.on('click', '.playlist-video', function(ev){
//     ev.preventDefault();

//     var video_li = $(this);
//     PlayList.changeVideo(video_li);

//   });


//   // add video to playlist
//   search_results.on('click', '.result-item', function(ev){
//     ev.preventDefault();

//     var video_li    = $(this),
//         video_id    = video_li.data('id'),
//         video_name  = video_li.find('.playlist-video-title').html(),
//         video_thumb = video_li.find('.playlist-video-image').attr('src');

//         console.log('Go');
//     PlayList.addVideoToPlaylist(video_li, video_name, video_thumb, video_id);
//   });


//   // remove video from playlist
//   playlist.on('click', '.remove-icon', function(ev){
//     ev.preventDefault();

//     var video_li = $(this).closest('.playlist-video'),
//         video_id = video_li.data('id');

//     PlayList.removeVideoFromPlaylist(video_li, video_id);
//     return false;
//   });


// });