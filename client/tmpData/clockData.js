/*
 * Copyright 2013, Bruce Ingalls for Play Sports Live. All rights reserved
 * global Template,
 * FIXME replace with data from MongoDB
 */

var gameClockData = {
  period: 1, //aka quarter
  minutes: 30,
  seconds: 00
};

Template.gameClockBox.helpers({
  gameClock: gameClockData
});

Template.gameQuarterBox.helpers({
  gameClock: gameClockData
});

var playClockData = {
  seconds: 12
};

Template.playClockBox.helpers({
  playClock: playClockData
});
