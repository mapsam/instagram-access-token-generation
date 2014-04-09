function init() {
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/[USER_ID]/media/recent/?client_id=[CLIENT_ID]",
        success: function(data) {
            // set the space you'll be working with in your index.html file
        	var feed = document.getElementById('instagram-feed');
        	// setting a count variable to limit the number of photos
            // you could also use the count parameter in the URL
            var count = 0;
        	for(var mug=0;mug<10;mug++) {
                // create <li> element and append to the #instagram-feed
                // then for each object element, add the appropriate content
        		var image = feed.appendChild(document.createElement('li'));
                image.className = 'insta';
        		var insta = data.data[mug];
        		image.innerHTML = '<a href="' + insta.link + '" target="_blank"><img src="' + insta.images.thumbnail.url + '"></a>';
        	}
        },
        error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status, thrownError);
        }
    });
}

window.onLoad = init();