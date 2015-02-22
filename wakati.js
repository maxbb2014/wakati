if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.displayRow.helpers({
    counter: function () {
      // add functions
      return ;
    }
  });
  Template.dataRow.helpers({
    counter: function () {
      // add functions
      return ;
    }
  });
  Template.displayRow.events({
    'click button': function () {
      // add functions
    }
  });
  Template.dataRow.events({
    'click button': function () {
      // add functions
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
