/*
 * Copyright 2013, Bruce Ingalls for Play Sports Live. All rights reserved
 * global 
 */

comments = new Meteor.Collection("Jon");

Template.commonForm.events({"click #send": function(e){
  console.log("Hi Jon");
}});
