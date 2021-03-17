import React, { Component } from 'react';
import { storage } from '../../fire-base/config';

var storageRef = storage.ref();
class ListFile extends Component {
  render() {
    const ListAllFile = () => {
      //Tạo một tham chiếu muốn liêt kê
      const listRef = storageRef.child('images/');
      // Tìm tất cả các tiền tố và mục
      listRef
        .listAll()
        .then(function (res) {
          res.prefixes.forEach(function (folderRef) {
            // console.log(folderRef);
          });
          res.items.forEach(function (itemRef) {
            console.log(itemRef.location.path);
            // Tất cả các mục trong listRef
          });
        })
        .catch(function (error) {
          console.log(error);
          //Error
        });
    };
    return (
      <div>
        <button onClick={ListAllFile}>ListAllFile</button>
        <div id="list"></div>
      </div>
    );
  }
}

export default ListFile;
