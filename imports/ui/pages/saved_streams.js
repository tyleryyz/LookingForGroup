import './saved_streams.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import "../components/saved_buttons.js"

Template.saved_streams.onCreated(() => {
  return Meteor.user() ? FlowRouter.go('/saved_streams') : FlowRouter.go('/');
})
