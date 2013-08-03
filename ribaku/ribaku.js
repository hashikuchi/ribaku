$(function(){
    function explosion(){
	var exploseElm = $('#'+ this.parentNode.parentNode.firstChild.getAttribute('id'));
	var explosionGifURL = chrome.extension.getURL('explosion.gif');
	var explosionGif = $('<img>').attr('src',explosionGifURL);
	explosionGif.css('position','relative').css('height','70%').css('width','70%').css('z-index',1).css('top','-450px');

	var explosionSoundURL = chrome.extension.getURL('bomb.mp3');
	var explosionSound = $('<audio>').attr('src',explosionSoundURL).attr('autoplay',true);

	exploseElm.append(explosionGif).append(explosionSound);
	setTimeout(
	    exploseElm.slideUp('slow'),
	    800
	);
    }

    var imgURL = chrome.extension.getURL('btn.gif');
    var ribakuA = $('<a>').click(explosion);
    var ribakuBtn = $('<img>').attr('src',imgURL).css('z-index',1);
    $('.highlightSelectorButton').after(ribakuA.append(ribakuBtn));
    $('.mainWrapper').attr('id',function(index){
	return 'mainWrapperId_' + index; 
    })
});
