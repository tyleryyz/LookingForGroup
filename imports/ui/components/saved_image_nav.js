import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';


import './saved_image_nav.html';

Template.saved_image_nav.events({
  'click .Home' (event) {
    $('li.home_tab').addClass('active');
    $('li.misc_tab').removeClass('active');
    $('li.weather_tab').removeClass('active');

    Session.set("category", "Home");

  },
  'click .Weather' (event) {
    $('li.weather_tab').addClass('active');
    $('li.home_tab').removeClass('active');
    $('li.misc_tab').removeClass('active');
    Session.set("category", "Weather");

  },
  'click .Misc' (event) {
    $('li.misc_tab').addClass('active');
    $('li.weather_tab').removeClass('active');
    $('li.home_tab').removeClass('active');
    Session.set("category", "Misc");
  },
  'click .Favorites' (event) {

    if (Session.get("favorites")==true){
      Session.set("favorites", false);
      $('li.favorites_tab').removeClass('active');
    }
    else {
      Session.set("favorites", true);
      $('li.favorites_tab').addClass('active');
    }
    //Session.set("home", false);
    //Session.set("weather", false);
    //Session.set("misc", false);

  }
})
