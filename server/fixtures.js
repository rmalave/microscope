if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  //create two users
  var tomId = Meteor.users.insert({
    profile: {
      name: 'Tome Coleman'
    }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: {
      name: 'Scha Greif'
    }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Introducing project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 36000 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    author: tom.profile.name,
    userId: tom._id,
    submitted: new Date(now - 10 * 36000 * 1000)
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 12 * 36000 * 1000)
  });
}
