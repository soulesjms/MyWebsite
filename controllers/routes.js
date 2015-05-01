module.exports = function(app) {
  
  /* Optionally include this to use this alternative template when wanting to create your own header and footer
  app.set("view options", {
    layout: "layout/layout-skills"
  });
  layout is referenced in this file!
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

  app.get('/sample', function(req, res){
    res.render('sample');
  });

  app.get('/', function(req, res){
    res.render("index", {layout: "layout/layout-skills"});
  });
  app.get('/cool', function(req, res){
    var coolness = Math.floor(Math.random() * 2);
    res.render("cool", {theCool:coolness, layout: "layout/layout-skills"});
  });
}