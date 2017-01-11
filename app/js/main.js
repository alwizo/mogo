console.log('This is the Main.js file. It should be the 3rd and final file');

$(document).ready(function() {
    $( '.portfolio__list' ).masonry( {
        itemSelector: '.portfolio__item'
    } );
});