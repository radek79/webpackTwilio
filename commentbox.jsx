import React from 'react';
var CommentList = require('./commentlist.jsx')
var CommentForm = require('./commentform.jsx')

 
module.exports = React.createClass({
	render: function() {
	return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <br />
        <br />
        <CommentForm />
      </div>
    );
	}
});