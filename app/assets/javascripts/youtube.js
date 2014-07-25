$(document).on('page:change', function(){
  var playlist              = $('#playlist'),
      playlist_video_li     = $('.playlist-video'),
      now_playing_container = $('#now-playing'),
      now_playing_video     = $('#now-playing-video'),
      search_results        = $('#search-results');

  var YouTube = {
    changeVideo: function(unique_id) {

      now_playing_video.fadeOut(400, function() {
        now_playing_container.html('');

        $('<iframe>', {
           src: 'https://www.youtube.com/v/'+ unique_id +'?version=3&f=videos&autoplay=1&iv_load_policy=3',
           id:  'now-playing-video',
           frameborder: 0,
           scrolling: 'no'
        }).appendTo(now_playing_container);
      });

    },
    addVideoToPlaylist: function(title, image_url, video_id) {
      var li = [
        '<li class="list-group-item playlist-video" data-id="'+ video_id +'">',
          '<div class="pull-right m-l">',
            '<a href="#" class="remove-icon"><i class="icon-close"></i></a>',
          '</div>',
          '<span class="jp-play-me m-r-sm pull-left">',
            '<img src="'+ image_url +'" class="thumb-xs">',
          '</span>',
          '<div class="clear text-ellipsis">',
            '<span>'+ title +'</span>',
          '</div>',
        '</li>',
      ];

      playlist.append(li.join("\n"));
    }
  }

  // change now playing video
  playlist.on('click', '.playlist-video', function(ev){
    ev.preventDefault();

    var _this     = $(this),
        video_id  = _this.data('id');

    YouTube.changeVideo(video_id);
  });

  // add video to playlist
  search_results.on('click', '.add-to-playlist', function(ev){
    ev.preventDefault();

    // send request to server to add video

    var video_li = $(this).closest('li'),
        video_id = video_li.data('id'),
        title    = video_li.find('.playlist-video-title').html(),
        image_url= video_li.find('.playlist-video-image').attr('src');

    YouTube.addVideoToPlaylist(title, image_url, video_id);
  });

  // remove video from playlist
  playlist.on('click', '.remove-icon', function(ev){
    ev.preventDefault();

    // send request to server to remove video

    $(this).closest('.playlist-video').fadeOut(600).remove();
    return false;
  });
});