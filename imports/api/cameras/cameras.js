import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true

export const Camera = new Mongo.Collection('camera')

Camera.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Camera.schema = new SimpleSchema({
  displayname: {
    type: String,
    optional: false,
  },
  favoritegame: {
    type: String,
    optional: false,
  },
  categories: {
    type: String,
    optional: true,
  },
  favorite: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  userID: {
    type: String,
    optional: false,
    autoValue: function() {
      return this.userId
    }
  }
})

Camera.attachSchema(Camera.schema)
