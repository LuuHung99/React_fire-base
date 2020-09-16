import React, { Component } from 'react';
import { storage } from '../../fire-base/config';

var storageRef = storage.ref();
class ListFile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     url: ''
  //   }
  // }
  render() {
    async function pageTokenExample(){
      // Create a reference under which you want to list
      var listRef = storageRef.child('images');
      // Fetch the first page of 100.
      var firstPage = await listRef.list({ maxResults: 100});
      // Use the result.
      // processItems(firstPage.items)
      // processPrefixes(firstPage.prefixes)
      // Fetch the second page if there are more elements.
      if (firstPage.nextPageToken) {
        var secondPage = await listRef.list({
          maxResults: 100,
          pageToken: firstPage.nextPageToken,
        });
        console.log(secondPage);
        // processItems(secondPage.items)
        // processPrefixes(secondPage.prefixes)
      }
    }
    const ListAllFile = () => {
      //Tạo một tham chiếu muốn liêt kê
      var listRef = storageRef.child('images');
      // var i = 0;

      // Tìm tất cả các tiền tố và mục
      listRef.listAll().then(function(res) {
        res.prefixes.forEach(function(folderRef) {
          console.log(folderRef);
          // i++;
          // displayImage(i, folderRef);
          //Tất cả các tiền tố trong listRef
        });
        res.items.forEach(function(itemRef) {
          console.log(itemRef);
          // Tất cả các mục trong listRef
        });
      }).catch(function(error) {
        console.log(error);
        //Error
      });
    }
    //  const displayImage = (row, images) => {
    //   images.getDownloadURL().then(function(url) {
    //     console.log(url);
    //     this.setState({ url });
    //   });
    // }
    return (
      <div>
        <button onClick={ListAllFile}>ListAllFile</button>
        <br />
        <br />
        <button onClick={pageTokenExample}>ListAllFile</button>
        {/* <img src={this.state.url}></img> */}
      </div>
    );
  }
}

export default ListFile;