import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Saved_camera } from "../../api/saved_cameras/saved_cameras.js"
import "./live_cards.html";
import { jquery } from 'meteor/jquery'

Template.live_cards.onCreated(() => {
  Meteor.subscribe('mySavedCameras', Meteor.userId());
})

Template.live_cards.helpers({
  cameraHelper() {
    console.log("cameraHelper Here!");
    return Saved_camera;
  },
  Cameras_retrieval() {
    let category_sess = Session.get("category");
    let user = Meteor.userId()
    console.log(Saved_camera.find({userID:user, categories:category_sess}).fetch());
    return Saved_camera.find({categories:category_sess});

    //return Camera.find({userID:String(user), categories:category_sess,favorite:favorites_sess});
  }
})
