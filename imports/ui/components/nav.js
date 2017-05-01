import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './nav.html';

Template.nav.events({
  'click .logout' (event) {
    //console.log("LogOUT")
    Meteor.logout();
    FlowRouter.go('/');
  },

  'click .profile' (event) {
    FlowRouter.go('/add_feed_page');
  }
})
