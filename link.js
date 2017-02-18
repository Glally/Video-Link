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
			var urls = e.data.title;
			// Check if it is a Dailymotion link
			if(urls.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/) ){
				urls2 = "<iframe class = 'embed'" + "src="+"'"+urls +"'"+ 'frameborder="0"'+ 'allowfullscreen="allowfullscreen">';
				// Make sure the link is has embed
				urls2 = urls2.replace("http://www.dailymotion.com/video/","http://www.dailymotion.com/embed/video/");
				// Insert the video from Dailymotion
				editor.insertContent( urls2);
				
			}
			// Check if its a Youtube link
			if(urls.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/) ){
				urls = "<iframe class = 'embed'" + "src="+"'"+urls +"'"+ 'frameborder="0"'+ 'allowfullscreen="allowfullscreen">';
				// Make sure the link is has embed
				urls = urls.replace("/watch?v=","/embed/");
				// Insert the video from Youtube
				editor.insertContent( urls);
			}
          	
        }
      });
    }
  });
    
    
} )();