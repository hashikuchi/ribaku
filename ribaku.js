$(function(){
    function explosion(){
	var exploseElm = $('#'+ this.parentNode.parentNode.firstChild.getAttribute('id'));
	var explosionURL = chrome.extension.getURL('explosion.gif');
	var explosionGif = $('<img>').attr('src',explosionURL);
	explosionGif.css('position','relative').css('height','70%').css('width','70%').css('z-index',1).css('top','-450px');
	exploseElm.append(explosionGif);
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
