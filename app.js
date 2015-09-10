var app = exports;
app.journey = function( request, response ) {
    response.impress( '/templates/index.htm', {
        dynamic : 'my text here'
    } );
};
