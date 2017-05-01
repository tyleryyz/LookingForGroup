import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';


import './live_feeds_nav.html';

Template.live_feeds_nav.events({
  'click .pc' (event) {
    $('li.pc_tab').addClass('active');
    $('li.playstation_tab').removeClass('active');
    $('li.xbox_tab').removeClass('active');

    Session.set("category", "PC");

  },
  'click .xbox' (event) {
    $('li.xbox_tab').addClass('active');
    $('li.pc_tab').removeClass('active');
    $('li.playstation_tab').removeClass('active');
    Session.set("category", "XBOX");

  },
  'click .playstation' (event) {
    $('li.playstation_tab').addClass('active');
    $('li.xbox_tab').removeClass('active');
    $('li.pc_tab').removeClass('active');
    Session.set("category", "PLAYSTATION");
  },
})
