Template.postSubmit.events({
	'submit form': function (evn) {
		e.preventDefault();

		var post = {
			url: $(evn.target).find('[name=url]'.val()),
			title: $(evn.target).find('[name=title]').val()
		};

		post_id = Post.insert(post);
		Router.go('postPage', post);
	}
});