$(document).on('page:change', function(){

  var YouTube = {
    search: function(query) {
      $.getJSON('/videos.json', {q: query}, function(data){
        console.log(data);
        YouTube.displayThumbs(data.videos);
      });
    },
    displayThumbs: function(videos) {
      var template;

      $.each(videos, function(index, video){
        template =  '<div class="col-xs-12 col-sm-3">',
                      '<a href="#" class="thumbnail" id="gallery">',
                        '<img src="'+video.thumbnails[1].url+'">',
                        '<h3>'+ video.title +'</h3>',
                      '</a>',
                    '</div>';

        $('#result').append(template);
      });
    }
  }

  $('#youtube_form').submit(function(ev){
    ev.preventDefault();
    var keyCode    = ev.keyCode || ev.which,
        queryInput = $('#query');
    
    YouTube.search(queryInput.val());
    
  });

});