/*
 * Copyright 2013, Bruce Ingalls for Play Sports Live. All rights reserved
 * global Meteor,
 */

Template.playClockForm.events({
  'click #playReset': function(e) {
    console.log('test');
    //e.preventDefault();
    var playSetTime = {
      minutes: $(e.target).find('#playSetMinutes').val(),
      seconds: $(e.target).find('#playSetSeconds').val()
    };
    Session.set('playClockLeft', (playSetTime.minutes * 60) + playSetTime.seconds);
  }
});
