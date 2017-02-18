tinymce.PluginManager.add('video_link', function(editor, url) {
  // Add a button that opens a window
  editor.addButton('click', {
    image: url + '/logo.png',
    icon: false,
    onclick: function() {
      // Open window
      editor.windowManager.open({
        title: 'Enter link',
        body: [
          {type: 'textbox', name: 'title', label: 'Title'}
        ],
        onsubmit: function(e) {
			var url = e.data.title;
			// Check if it is a Dailymotion link
			if(url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/) ){
				url = "<iframe class = 'embed'" + "src="+"'"+url +"'"+ 'frameborder="0"'+ 'allowfullscreen="allowfullscreen">';
				// Make sure the link is has embed
				url = url.replace(".com/video/",".com/embed/video/");
				// Insert the video from Dailymotion
				editor.insertContent( url);
			}
			// Check if its a Youtube link
			if(url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/) ){
				url = "<iframe class = 'embed'" + "src="+"'"+url +"'"+ 'frameborder="0"'+ 'allowfullscreen="allowfullscreen">';
				// Make sure the link is has embed
				url = url.replace("/watch?v=","/embed/");
				// Insert the video from Youtube
				editor.insertContent( url);
			}
          
        }
      });
    }
  });
    
    
} )();