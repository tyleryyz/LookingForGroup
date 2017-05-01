import './add_feed_page.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import "../components/add_feed_form.js"

Template.add_feed_page.onRendered(() => {
  return Meteor.user() ? FlowRouter.go('/main_page') : FlowRouter.go('/');
})

Template.add_feed_page.helpers({
  isUser() {
    return Meteor.user();
  }
})
