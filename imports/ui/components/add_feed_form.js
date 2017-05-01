import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { AutoForm } from 'meteor/aldeed:autoform';

import { Camera } from '../../api/cameras/cameras.js';

import './add_feed_form.html';

Template.add_feed_form.onCreated(() =>{
  Meteor.subscribe("myCameras", Meteor.userId());
})
Template.add_feed_form.helpers({
  cameraHelper() {
    return Camera
  },
  categoryHelper() {
    return [
      { label: "PC", value: "pc" },
      { label: "XBOX", value: "xbox"},
      { label: "PLAYSTATION", value: "playstation"}
    ]
  }
})

Template.add_feed_form.events({
  'click .submitButton'(event){
		Materialize.toast('Account Updated!', 3000);
    //console.log("you did the thing!");
  }
})
