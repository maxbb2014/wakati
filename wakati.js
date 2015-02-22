// Wakati Collection
myWakati = new Mongo.Collection('wakatis');

if (Meteor.isClient) {
/*  // Added some data
  // data#1
  myWakati.insert({
    startDate: new Date(),
    endDate: new Date(),
    eventInfo: "World's most-wanted drug kingpin is captured in Mexico",
    notes: "On this day in 2014, one of the world’s most-wanted criminals, Joaquin “El Chapo” (“Shorty”) Guzman Loera, head of the Sinaloa cartel, the world’s biggest drug trafficking organization, is arrested in a joint U.S.-Mexican operation in Mazatlán, Mexico, after outrunning law enforcement for more than a decade",
    createdBy: "Max"
  });
  // data#2
  myWakati.insert({
    startDate: new Date(),
    endDate: new Date(),
    eventInfo: "Mussolini wounded by mortar bomb",
    notes: "On February 22, 1917, Sergeant Benito Mussolini is wounded by the accidental explosion of a mortar bomb on the Isonzo section of the Italian Front in World War I.",
    createdBy: "Max"
  });
  // data#3
  myWakati.insert({
    startDate: new Date(),
    endDate: new Date(),
    eventInfo: "Montana passes law against sedition",
    notes: "Swept along by hysterical fears of treacherous German spies and domestic labor violence, the Montana legislature passes a Sedition Law that severely restricts freedom of speech and assembly. Three months later, Congress adopted a federal Sedition Act modeled on the Montana law",
    createdBy: "Max"
  });

    // data#4
  myWakati.insert({
    startDate: new Date(),
    endDate: new Date(),
    eventInfo: "Milli Vanilli win the Best New Artist Grammy",
    notes: "With the benefit of hindsight, there might be Grammy awards that members of the National Academy of Recording Arts and Sciences wish they could take back, but there is only one that they actually did: the Best New Artist Grammy that was awarded to the famously fraudulent dance act Milli Vanilli on February 22, 1990.",
    createdBy: "Max"
  });
  console.log('Added Data')
  // End of adding data
*/
  Template.displayRow.helpers({
    afunction: function () {
      // add functions
    }
  });
  Template.dataRow.helpers({
    wakati: function () {
      // add functions
      return myWakati.find().fetch();
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
