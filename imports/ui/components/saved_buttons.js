import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './saved_buttons.html';

Template.saved_buttons.events({
  'click .saved_images' (event) {
    Session.set("image", true);
  },
  'click .saved_video' (event) {
    Session.set("video", true);
  }
})
