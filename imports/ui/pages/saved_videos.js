import './saved_videos.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

//import "../components/live_buttons.js";
//import "../components/add_feed_button.js";
import "../components/saved_video_nav.js";
import "../components/saved_video_cards.js";
import "../../api/saved_cameras/saved_cameras.js";

Template.saved_videos.onCreated(() => {
  Session.set("home", false);
  Session.set("weather", false);
  Session.set("favorites", false);
  Session.set("misc", false);
})
