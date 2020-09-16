import React, { Component } from 'react';
import {storage} from '../../fire-base/config';

// Create a reference to the file to delete
var storageRef = storage.ref();

class Delete extends Component {
  render() {
    const DeleteFile = () => {
      // Create a reference to the file to delete
      var desertRef = storageRef.child('images/hello.jpg');
      // Delete the file
      desertRef.delete().then(function() {
        // File deleted successfully
      }).catch(function(error) {
        console.log(error);
        // Uh-oh, an error occurred!
      });
    }
    return (
      <div>
        <button onClick={DeleteFile}>DeleteFile</button>
      </div>
    );
  }
}

export default Delete;