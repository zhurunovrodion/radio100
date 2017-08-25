$(document).ready(initialize);

function initialize(){
	initializeMap();

	addMainMenuButtonHandlers();
	//('navigationMenu__menuLine__menu__mainMenu__content')
}

function addMainMenuButtonHandlers(){
	$('.navigationMenu__menuLine__menu__mainMenu').on('click', onMainMenuButtonClick)
}

function onMainMenuButtonClick(e){
	var $menuButton = $(e.currentTarget);
	var $menuElement = $('.navigationMenu__menuLine__menu__mainMenu__content');	

	if($menuButton.is('.state-closed')){
		$menuButton.removeClass('state-closed');
		$menuButton.addClass('state-opened');
		
		$menuElement.removeClass('state-closed');
		$menuElement.addClass('state-opened');
	}else{
		$menuButton.addClass('state-closed');
		$menuButton.removeClass('state-opened');

		$menuElement.addClass('state-closed');
		$menuElement.removeClass('state-opened');
	}
}