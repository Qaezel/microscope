Comments = new Mongo.Collection('comments');

Meteor.methods({
	commentInsert: function(commentAttributes) {
		check(this.userId, String);
		check(commentAttributes, {
			postId: String,
			body: String
		});
		var user = Meteor.user();
		var post = Posts.findOne(commentAttributes.postId);
		if (!post)
			throw new Meteor.Error('invalide-comment', 'You must comment on a post.');
		comment = _.extend(commentAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});
		Posts.update(comment.postId, {$inc: {commentCounts: 1}});

		//create the comment, save the id
		comment._id = Comments.insert(comment);
		//create a notificiation, informing the user the there's been a comment
		createCommentNotification(comment);

		//Comments.remove({selector}, callback);
		return comment._id;
	}
});