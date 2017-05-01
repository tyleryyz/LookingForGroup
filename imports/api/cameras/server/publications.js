import { Meteor } from 'meteor/meteor';

import { Camera } from '../cameras.js';



Meteor.publish('myCameras', function(thisuserid) {
  return Camera.find({ userID: thisuserid });
})
