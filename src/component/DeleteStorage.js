import React, { Component ,storageRef } from 'react';
import storage from '../fire-base/config';

// Create a reference to the file to delete
var desertRef = storageRef.child('images/hello.jpg');

class DeleteStorage extends Component {
  render() {
    desertRef.delete().then(function() {
      // File deleted successfully
    }).catch(function(error) {
      // Uh-oh, an error occurred!
    });
    return (
      <div>
        
      </div>
    );
  }
}

export default DeleteStorage;