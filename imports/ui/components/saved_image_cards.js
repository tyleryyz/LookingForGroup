import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Saved_camera } from "../../api/saved_cameras/saved_cameras.js"
import "./saved_image_cards.html";
import { jquery } from 'meteor/jquery'

Template.saved_image_cards.onCreated(() => {
  Meteor.subscribe('mySavedCameras', Meteor.userId());
})

Template.saved_image_cards.helpers({
  cameraHelper() {
    console.log("cameraHelper Here!");
    return Saved_camera;
  },
  Cameras_retrieval() {
    let category_sess = Session.get("category");
    let favorites_sess = Session.get("favorites");
    let user = Meteor.userId()
    let image_sess = Session.get("image");
    console.log("here!");
    console.log(category_sess);
    console.log(favorites_sess);
    console.log("image_sess");
    console.log(image_sess);
    console.log(String(user));
    console.log(Saved_camera.find({userID:user, categories:category_sess, favorite:favorites_sess, image:image_sess}).fetch());

    if (Session.get("favorites")==true){
      console.log(Saved_camera.find({userID:user, categories:category_sess, favorite:favorites_sess, image:image_sess}).fetch());
      return Saved_camera.find({userID:user, categories:category_sess, favorite:favorites_sess, image:image_sess})
    }
    else {
        console.log(Saved_camera.find({userID:user, categories:category_sess, image:image_sess}).fetch());
        return Saved_camera.find({userID:user, categories:category_sess, image:image_sess});
    }
    console.log(Saved_camera.find({userID:user, categories:category_sess, favorite:favorites_sess}).fetch())
    //return Camera.find({userID:String(user), categories:category_sess,favorite:favorites_sess});
  }
})
