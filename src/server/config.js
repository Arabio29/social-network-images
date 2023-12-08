module.exports = app =>{
    
    //setings
    app.set('port', process.env.PORT || 3009);
    
    return app;
}