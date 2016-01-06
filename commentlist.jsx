import React from 'react';
var Comment = require('./comment.jsx')

module.exports = React.createClass({
  render: function() {

  	/*build an array of <Comment> components */
  	var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});