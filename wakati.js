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
 // Add code for timeline
             $(document).ready(function() {
               var mySource;
                createStoryJS({
                    type:       'timeline',
                    width:      '1100',
                    height:     '650',
                    source:     {
    "timeline":
    {
        "headline":"The Main Timeline Headline Goes here",
        "type":"default",
        "text":"<p>Intro body text goes here, some HTML is ok</p>",
        "asset": {
            "media":"http://yourdomain_or_socialmedialink_goes_here.jpg",
            "credit":"Credit Name Goes Here",
            "caption":"Caption text goes here"
        },
        "date": [
            {
                "startDate":"2011,12,10",
                "endDate":"2011,12,11",
                "headline":"Headline Goes Here",
                "text":"<p>Body text goes here, some HTML is OK</p>",
                "tag":"This is Optional",
                "classname":"optionaluniqueclassnamecanbeaddedhere",
                "asset": {
                    "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
                    "thumbnail":"optional-32x32px.jpg",
                    "credit":"Credit Name Goes Here",
                    "caption":"Caption text goes here"
                }
            }
        ],
        "era": [
            {
                "startDate":"2011,12,10",
                "endDate":"2011,12,11",
                "headline":"Headline Goes Here",
                "text":"<p>Body text goes here, some HTML is OK</p>",
                "tag":"This is Optional"
            }

        ]
    }
},
                    embed_id:   'showWakati'
                });
               // Add sample data
               mySource = {
    "timeline":
    {
        "headline":"The Main Timeline Headline Goes here",
        "type":"default",
        "text":"<p>Intro body text goes here, some HTML is ok</p>",
        "asset": {
            "media":"http://yourdomain_or_socialmedialink_goes_here.jpg",
            "credit":"Credit Name Goes Here",
            "caption":"Caption text goes here"
        },
        "date": [
            {
                "startDate":"2011,12,10",
                "endDate":"2011,12,11",
                "headline":"Headline Goes Here",
                "text":"<p>Body text goes here, some HTML is OK</p>",
                "tag":"This is Optional",
                "classname":"optionaluniqueclassnamecanbeaddedhere",
                "asset": {
                    "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
                    "thumbnail":"optional-32x32px.jpg",
                    "credit":"Credit Name Goes Here",
                    "caption":"Caption text goes here"
                }
            }
        ],
        "era": [
            {
                "startDate":"2011,12,10",
                "endDate":"2011,12,11",
                "headline":"Headline Goes Here",
                "text":"<p>Body text goes here, some HTML is OK</p>",
                "tag":"This is Optional"
            }

        ]
    }
}
            }); 
  // End of code for timeline
  
  Template.displayRow.helpers({
    afunction: function () {
      // add functions
    }
  });
  Template.dataRow.helpers({
    wakati: function () {
      // add functions
      return myWakati.find({}, {limit: 1});
      // return myWakati.findOne("qwgPEa9GodAShLWDZ");
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
