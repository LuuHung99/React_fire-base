import React, { Component } from 'react';
import { storage } from '../../fire-base/config';

var storageRef = storage.ref();
class Update extends Component {
  render() {
    const UpdateFile = () => {
      var forestRef = storageRef.child('images/hello.jpg');

      // Create file metadata to update
      var deleteMetadata = {
        // cacheControl: 'public,max-age=300',
        // contentType: 'images/updateImage'
        contentType: null
      }
      // Update metadata properties
      forestRef.updateMetadata(deleteMetadata).then(function(metadata) {
        console.log(metadata);
        // Updated metadata for 'images/forest.jpg' is returned in the Promise

      }).catch(function(error) {
        console.log(error);
        // Uh-oh, an error occurred!
      });
    }
    return (
      <div>
        <button onClick={UpdateFile}>UpDate</button>
      </div>
    );
  }
}

export default Update;

