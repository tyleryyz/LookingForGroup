import { Meteor } from 'meteor/meteor';
import { Saved_camera } from '../saved_cameras.js';

Meteor.publish('mySavedCameras', function(thisuserid) {
  return Saved_camera.find({ userID: thisuserid });
})
