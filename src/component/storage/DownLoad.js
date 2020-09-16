import React, { Component } from 'react';
import { storage } from '../../fire-base/config';

//Tạo một tham chiếu gốc
var storageRef = storage.ref();
class DownLoad extends Component {
  render() {
    const ShowFileUrl = () => {
      storageRef.child('images/hello.jpg').getDownloadURL().then(function(url) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
        var blob = xhr.response;
        console.log(blob);
      };
      xhr.open('GET', url);
      xhr.send();

      }).catch(function(error) {
        console.log(error);
      });
      // console.log(downLoadTask);
    }
    return (
      <div>
        <button onClick={ShowFileUrl}>DownLoad</button>
      </div>
    );
  }
}

export default DownLoad;

