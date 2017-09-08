function addMainMenuButtonHandlers(){
	$('.navigationMenu__menuLine__menu__mainMenu').on('click', onMainMenuButtonClick)
}

/*function deleteNewsTitleOnHover(){
	$('.news_newsGrid_newsblock').hover(function(e){
		var $newsBlock = $(e.currentTarget);
	$newsBlock_text=$newsBlock.find('.news_newsGrid_newsblock_title')
	$newsBlock_text.hide();
	})
}*/

function deleteNewsTitleOnHover(){
$('.news_newsGrid_newsblock').hover (
function(){$(this).children('.news_newsGrid_newsblock_title').fadeOut(100);},
function(){$(this).children('.news_newsGrid_newsblock_title').fadeIn(100)}
);
}
/*
function onMainNewsGridNewsBlockHover(e){

	var $newsBlock = $(e.currentTarget);
	$newsBlock.find('.news_newsGrid_newsblock_title').hide();
	
}*/

function sleep(ms)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < ms);
}
function onMainMenuButtonClick(e){
	var $menuButton = $(e.currentTarget);
	var $menuElement = $('.navigationMenu__menuLine__menu__mainMenu__content');	

	if($menuButton.is('.state-closed')){
		$menuButton.removeClass('state-closed');
		$menuButton.addClass('state-opened');
		$menuButton.addClass('active');
		
		$menuElement.removeClass('state-closed');
		$menuElement.addClass('state-opened');
	}else{
		$menuButton.addClass('state-closed');
		$menuButton.removeClass('state-opened');
		$menuButton.removeClass('active');

		$menuElement.addClass('state-closed');
		$menuElement.removeClass('state-opened');
	}
}




function addPlayListMenuButtonHandlers(){
	$('.navigationMenu__menuLine__centralPanel__playListMenu__title').on('click', onPlayListMenuButtonClick)
}

function onPlayListMenuButtonClick(e){
	var $menuButton = $(e.currentTarget);
	var $menuElement = $('.navigationMenu__menuLine__centralPanel__playListMenu_content');	
	var menuButtonWidth = $menuButton.width();

	if($menuButton.is('.state-closed')){
		
		$menuButton.removeClass('state-closed');
		$menuElement.find('.navigationMenu__menuLine__centralPanel__playListMenu__title__text').fadeOut(1000);
	 	$menuButton.animate({width: 40}, 300, function(){	 
	 		$menuButton.addClass('cmn-toggle-switch cmn-toggle-switch__htx active')
					   .addClass('state-opened')
					   .addClass('animated zoomInzoomIn')
	 				   .html('<span></span>');
	 	});

		
		
	
		
		

		$menuElement.removeClass('state-closed');
		//$menuElement.addClass('animated fadeInUp');
		$menuElement.addClass('state-opened');
		
	

		
	}else{
		$menuButton.addClass('state-closed');
		$menuButton.removeClass('state-opened');
		$menuButton.removeClass('animated zoomIn');
		$menuButton.removeClass(' cmn-toggle-switch cmn-toggle-switch__htx active');
		$menuElement.find('.navigationMenu__menuLine__centralPanel__playListMenu__title__text').fadeIn(200);
		$menuButton.animate({width: "100%"},400);
		//$menuElement.removeClass('animated fadeInUp');

		
		$menuElement.addClass('state-closed');
		
		$menuButton.html('посмотреть плейлист эфира');
		$menuElement.removeClass('state-opened');


	}
}


function addPlayListMenuButtonHandlersNews(){
	$('.navigationMenu__menuLine__centralPanel__playListMenu__title-news').on('click', onPlayListMenuButtonClickNews)
}

function onPlayListMenuButtonClickNews(e){
	var $menuButton = $(e.currentTarget);
	var $menuElement = $('.navigationMenu__menuLine__centralPanel__playListMenu_content');	
	var menuButtonWidth = $menuButton.width();

	if($menuButton.is('.state-closed')){
		
		$menuButton.removeClass('state-closed');
		$menuElement.find('.navigationMenu__menuLine__centralPanel__playListMenu__title__text').fadeOut(1000);
	 	$menuButton.animate({width: 40}, 300, function(){	 
	 		$menuButton.addClass('cmn-toggle-switch cmn-toggle-switch__htx active')
	 				   .addClass('red_border')
					   .addClass('state-opened')
					   .addClass('animated zoomInzoomIn')
	 				   .html('<span></span>');
	 	});

		
		
	
		
		

		$menuElement.removeClass('state-closed');
		//$menuElement.addClass('animated fadeInUp');
		$menuElement.addClass('state-opened');
		
	

		
	}else{
		$menuButton.addClass('state-closed');
		$menuButton.removeClass('state-opened');
		$menuButton.removeClass('animated zoomIn');
		$menuButton.removeClass('red_border');
		$menuButton.removeClass(' cmn-toggle-switch cmn-toggle-switch__htx active');
		$menuElement.find('.navigationMenu__menuLine__centralPanel__playListMenu__title__text').fadeIn(200);
		$menuButton.animate({width: "100%"},400);
		//$menuElement.removeClass('animated fadeInUp');

		
		$menuElement.addClass('state-closed');
		
		$menuButton.html('посмотреть плейлист эфира');
		$menuElement.removeClass('state-opened');


	}
}



function addPlayListMenuButtonHandlersFooter(){
	$('.playListFooter__playListMenu').on('click', onPlayListMenuButtonClickFooter)
}

function onPlayListMenuButtonClickFooter(e){
	
	var $menuButton = $(e.currentTarget);
	var $parent_menuElement = $('.playListFooter');	
	var $menuElement_content = $('.playListFooter__playListMenu_content');
	var $menuButton_content = $('.playListFooter__playListMenu__title');

	if($parent_menuElement.is('.playListFooter-closed')){
		
		$('.navigationMenu__menuLine__menu__mainMenu__content').removeClass('state-opened');
			$('.navigationMenu__menuLine__menu__mainMenu__content').addClass('state-closed');
		
	 	$('.navigationMenu__menuLine__menu__mainMenu').removeClass('state-opened');
			$('.navigationMenu__menuLine__menu__mainMenu').addClass('state-closed');
			$('.navigationMenu__menuLine__menu__mainMenu').removeClass('active');
		
		 $menuElement_content.removeClass('bounceOut');
		$parent_menuElement.removeClass('playListFooter-closed');
		 $menuElement_content.removeClass('playListFooter__playListMenu_content-hiden');
		  $menuElement_content.addClass('animated');
		    $menuElement_content.addClass('fadeInUp');
		 $menuButton.find('.playListFooter__playListMenu__title__text').fadeOut(200, function() {$menuButton_content.html('<div class="navigationMenu__menuLine__menu__mainMenu state-opened animated flipInX active cmn-toggle-switch cmn-toggle-switch__htx"> <span></span> </div>');
	 });
			 
	 		
		
	

		
	}else{
			 
			
			 $menuElement_content.removeClass('fadeInUp');
		  $menuElement_content.addClass('bounceOut');
		$parent_menuElement.addClass('playListFooter-closed');
		$menuElement_content.addClass('playListFooter__playListMenu_content-hiden');

		$menuButton_content.fadeIn(5000, function(){
			$menuButton_content.html('<span class="playListFooter__playListMenu__title__text">посмотреть плейлист эфира</span');
		});
		/*$menuButton.find('.playListFooter__playListMenu__title__text').fadeOut(1000);*/
		
		
	 		
	 


	}
}

/*
fuction doStickMenu(){
	$stickElement=$('.navigationMenu__menuLine__menu__mainMenu');
	$win_w = $(window).width();
	if ($win_w < 1000 ){
		$stickElement.addClass('sticker');
	}
}*/