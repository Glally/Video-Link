tinymce.PluginManager.add('video_link', function(editor, url) {
  // Add a button that opens a window
  editor.addButton('click', {
    image: url + '/logo.png',
    icon: false,
    onclick: function() {
      // Open  a window to submit text
      editor.windowManager.open({
        title: 'Copy video links from Youtube or Dailymotion',
        body: [
          {type: 'textbox', name: 'title', label: 'Enter link'},  {type: 'textbox', name: 'Link', label: 'Link Name'},
		  {type: 'checkbox',name:'ch1',text:"large",value:"embed"},
		  {type: 'checkbox',name:'ch2', text:"medium",value:"medium"},
		  {type: 'checkbox',name:'ch3',text:"small",value:"small"}
        ],
		 
        onsubmit: function(e) {
			
			var urls = e.data.title;
			 // Define size variable
			var	size = '';
			var length = '';

        // Check first checkbox
        if(e.data.ch1 === true) {

            size = "embed";
			length = 'width="800" height="450"';
        }
        // Check second checkbox
        if(e.data.ch2 === true) {

            size = "medium";
			length='width="500" height="315"';
        }
		// Check third checkbox
        if(e.data.ch3 === true) {

            size = "small";
			length='width="300" height="200"';
        }

			var linkName = e.data.Link;
			var linkName = '<a class = "nounderline" href="'+urls+'"'+'>'+linkName+'</a>';
			// Check if it is a Dailymotion link
			if(urls.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/) ){
				urls2 = "<iframe class ="+"'"+size+"'" + "src="+"'"+urls +"'"+length+ 'scrolling="no"'+ 'frameborder="0"'+ 'allowfullscreen="allowfullscreen">';
				// Make sure the link is has embed
				urls2 = urls2.replace("dailymotion.com/video/","dailymotion.com/embed/video/");
				// Insert the video from Dailymotion
				editor.insertContent( urls2);
				
			}
			// Check if its a Youtube link
			if(urls.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/) ){
				//Get rid of &amp;t= from link
				 urls=urls.split(/[&]/)[0];
				urls = "<iframe class ="+"'"+size+"'" + "src="+"'"+urls +"'"+length+ 'scrolling="no"'+ 'frameborder="0"'+ 'allowfullscreen="allowfullscreen">';
				// Make sure the link is has embed
				urls = urls.replace("/watch?v=","/embed/");
				// Insert the video from Youtube
				editor.insertContent( urls);
			}
          	
			if(! urls.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/) && ! urls.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/) ){
				editor.insertContent( linkName);
			}
        }
      });
    }
  });
    
    
} )();