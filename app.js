/**
 * Module dependencies
 */
var woodruff = require("woodruff")
  , themeEngage = require("theme-engage");

var experiments = [
  { 
  	"name": "something", 
  	"description": "this experiment does something",
  	"default": false
  }
];

/**
 * Expose the app
 */
var app = module.exports = woodruff(__dirname, themeEngage, { experiments: experiments });
