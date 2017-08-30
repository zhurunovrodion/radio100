function addMainMenuButtonHandlers(){
	$('.navigationMenu__menuLine__menu__mainMenu').on('click', onMainMenuButtonClick)
}



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

