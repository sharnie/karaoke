$(document).on('page:change', function(){
  var playlist              = $('#playlist'),
      playlist_id           = playlist.data('playlist-id'),
      playlist_video_li     = $('.playlist-video'),
      now_playing_container = $('#now-playing'),
      now_playing_video     = $('#now-playing-video'),
      search_results        = $('#search-results');

  var YouTube = {
    changeVideo: function(video_id) {

        now_playing_container.html('');

        var video = $("<object />", {
            id: "now-playing-video",
            class: "embed-responsive-item",
        }).append($('<params />', {
              name: "movie",
              value: '//www.youtube.com/v/'+ video_id +'?hl=en_US&amp;version=3&amp;rel=0&autoplay=1',
        })).append($('<params />', {
              name: "allowFullScreen",
              value: "true",
        })).append($('<params />', {
              name: "allowscriptaccess",
              value: "always",
        })).append($('<embed />', {
              name: "movie",
              type: "application/x-shockwave-flash",
              src: '//www.youtube.com/v/'+ video_id +'?hl=en_US&amp;version=3&amp;rel=0&autoplay=1',
              allowscriptaccess: "always",
              allowfullscreen: "true",
        })).appendTo(now_playing_container);

    },
    addVideoToPlaylist: function(video_li, video_name, video_thumb, video_id) {

      $.ajax({
        type: 'POST',
        url: '/playlists/'+ playlist_id +'/videos',
        data: {
          video: {
            name:      video_name,
            image_url: video_thumb,
            unique_id: video_id,
          },
        },
        success: function(response) {

          video_li.addClass('added-to-list');
          video_li.find('small.text-muted').html('Added to playlist');

        }
      });

      playlist.append([
        '<li class="list-group-item playlist-video" data-id="'+ video_id +'">',
          '<div class="pull-right m-l">',
            '<a href="#" class="remove-icon"><i class="icon-close btn-add-remove"></i></a>',
          '</div>',
          '<span class="jp-play-me m-r-sm pull-left">',
            '<img src="'+ video_thumb +'" class="thumb-xs">',
          '</span>',
          '<div class="clear text-ellipsis">',
            '<span>'+ video_name +'</span>',
          '</div>',
        '</li>',
      ].join("\n"));

    },
    removeVideoFromPlaylist: function(video_li, video_id) {
      $.ajax({
        type: 'DELETE',
        url: '/playlists/'+ playlist_id +'/videos/'+ video_id,
        success: function() {

          video_li.fadeOut(600).remove();

        }
      });
    },
    getVideos: function(query) {
      $.getJSON('/videos.json', {q: query}, function(response){
        YouTube.updateSearchResult(response.videos);
      });
    },
    updateSearchResult: function(new_videos) {
      var items = $('#search-results li'),
          video_li;

      $.each(items, function(index, item) {
        item.remove();
      });

      $.each(new_videos, function(index, video){

        search_results.append([
          '<li class="list-group-item clearfix result-item" data-id="'+ video.unique_id +'">',
            '<a href="#" class="jp-play-me pull-right m-t-sm m-l text-md add-to-playlist">',
              '<i class="fa fa-plus-circle text btn-add-remove"></i>',
            '</a>',
            '<a href="#" class="pull-left thumb-md m-r">',
              '<img src="'+ video.thumbnails[2].url +'" class="playlist-video-image" />',
            '</a>',
            '<span class="clear">',
              '<span class="block text-ellipsis playlist-video-title">'+ video.title +'</span>',
              '<small class="text-muted">Add to playlist</small>',
            '</span>',
          '</li>',
        ].join("\n"));

      });
    }
  }

  // video search form
  var video_search_form = $('#video-search-form'), query;

  video_search_form.on('submit', function(ev){
    ev.preventDefault();

    query = $(this).find('#video-query').val();

    YouTube.getVideos(query);
  });


  // change now playing video
  playlist.on('click', '.playlist-video', function(ev){
    ev.preventDefault();

    var _this     = $(this),
        video_id  = _this.data('id');

    YouTube.changeVideo(video_id);
  });


  // add video to playlist
  search_results.on('click', '.result-item', function(ev){
    ev.preventDefault();

    var video_li    = $(this),
        video_id    = video_li.data('id'),
        video_name  = video_li.find('.playlist-video-title').html(),
        video_thumb = video_li.find('.playlist-video-image').attr('src');

    YouTube.addVideoToPlaylist(video_li, video_name, video_thumb, video_id);
  });


  // remove video from playlist
  playlist.on('click', '.remove-icon', function(ev){
    ev.preventDefault();

    var video_li = $(this).closest('.playlist-video'),
        video_id = video_li.data('id');

    YouTube.removeVideoFromPlaylist(video_li, video_id);
    return false;
  });


});