if (Posts.find().count() === 0) {
	var postsData = 
[
	{
		title: 'Intro Telescope',
		author: "Tom Coleman",
		url: 'http://sachagreif.com/introduction-telescope/'
	},
	{
		title: 'Meteor',
		author: "Jeremy Wood",
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	}
];
postsData.forEach(function (post) {
	Posts.insert(post);
});

}