import './schedule.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Saved_camera } from '../../api/saved_cameras/saved_cameras.js'

Template.schedule.onCreated(() =>{
  Meteor.subscribe("mySavedCameras", Meteor.userId());
})
Template.schedule.helpers({
  cameraHelper() {
    return Saved_camera
  },
  categoryHelper() {
    return [
      { label: "PC", value: "PC" },
      { label: "XBOX", value: "XBOX"},
      { label: "PLAYSTATION", value: "PLAYSTATION"}
    ]
  }
})


Template.schedule.events({
  'click .submitButton'(event){
		Materialize.toast('Group ad posted\nNew ad posted for your group!', 4000)
    //console.log("you did the thing!");
  }
})
