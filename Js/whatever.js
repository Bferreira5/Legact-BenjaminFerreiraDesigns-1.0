// JavaScript Document

//Hook up the tweet display

$(document).ready(function() {
	$(".tweet").tweet({
		username: "bencito2",
		count: 3,
		loading_text: "loading tweets..."
	});
});

//Hook up flickr feed

$(function(){
 $('div.flickr').flickrush({
    id: '79259716@N07',  // the ID of your flickr username
    limit: 6,            // the number of photos to display
    random: true         // randomly select photos to be displayed
 });
});

