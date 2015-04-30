module.exports = function(app) {
  
  /* Optionally include this to use this alternative template when wanting to create your own header and footer
  app.set("view options", {
    layout: "layout/layout-skills"
  });
  */
  
  app.get('/something', function(req, res){
    var something = false;
    if(req.feature('something')) {
      something = true;
    }
    res.render('something', {
      "title": "Hello World"
    });
  });
  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });

  app.get('/', function(req, res){
    res.render("index", {});
  });
}
