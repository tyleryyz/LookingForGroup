import './joingroup.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.joingroup.events({
  'click .button'(event){
		Materialize.toast('Message Sent!\nCheck your notifications for a group invite!', 4000)
  }
})
