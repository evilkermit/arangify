window.onload = function() {
	var list = document.getElementsByTagName( '*' );
	for( var idx in list ) {
		var item = list[ idx ];

		if( item.children.length === 0 && item.innerHTML !== '' ) {
			item.innerHTML = item.innerHTML + '-arang';
		}
	}
}
