$( '.menu a' ).on( 'click', function () {
	$( '.menu' ).find( 'li.active-menu' ).removeClass( 'active-menu' );
	$( this ).parent( 'li' ).addClass( 'active-menu' );
});