import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Saved_camera } from "../../api/saved_cameras/saved_cameras.js"
import "./saved_video_cards.html";
import { jquery } from 'meteor/jquery'

Template.saved_video_cards.onCreated(() => {
  Meteor.subscribe('mySavedCameras', Meteor.userId());
})

Template.saved_video_cards.helpers({
  cameraHelper() {
    console.log("cameraHelper Here!");
    return Saved_camera;
  },
  Cameras_retrieval() {
    let category_sess = Session.get("category");
    let favorites_sess = Session.get("favorites");
    let user = Meteor.userId()
    let video_sess = Session.get("video");
    console.log("here!");
    console.log(category_sess);
    console.log(favorites_sess);
    console.log(String(user));
    if (Session.get("favorites")==true){
      console.log(Saved_camera.find({userID:user, categories:category_sess, favorite:favorites_sess, video:video_sess}).fetch());
      return Saved_camera.find({userID:user, categories:category_sess, favorite:favorites_sess, video:video_sess})
    }
    else {
        console.log(Saved_camera.find({userID:user, categories:category_sess, video:video_sess}).fetch());
        return Saved_camera.find({userID:user, categories:category_sess, video:video_sess});
    }
    console.log(Saved_camera.find({userID:user, categories:category_sess, favorite:favorites_sess}).fetch())
    //return Camera.find({userID:String(user), categories:category_sess,favorite:favorites_sess});
  }
})
