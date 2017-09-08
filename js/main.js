$(document).ready(initialize);

function initialize(){
	initializeMap();

	addMainMenuButtonHandlers();
	//('navigationMenu__menuLine__menu__mainMenu__content')

	addPlayListMenuButtonHandlers();
	addPlayListMenuButtonHandlersNews();
	deleteNewsTitleOnHover();
	addPlayListMenuButtonHandlersFooter()
	/*doStickMenu();*/
	
}

