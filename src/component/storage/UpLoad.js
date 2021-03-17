import React, { Component } from 'react';
import { storage } from '../../fire-base/config';

var storageRef = storage.ref();

class UpLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      url: '',
    };
  }
  render() {
    // Tạo dữ liệu
    const handleChange = (e) => {
      if (e.target.files[0]) {
        this.setState({
          image: e.target.files[0],
        });
      }
      console.log(storage);
    };

    const handleUpload = () => {
      const upLoadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);

      upLoadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          console.log(this.state.image.name);
          storage
            .ref(`images/${this.state.image.name}`)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              // this.setState({ url });
            });
        },
      );
    };

    const ListAllFile = () => {
      //Tạo một tham chiếu muốn liêt kê
      const listRef = storageRef.child('images/');
      // Tìm tất cả các tiền tố và mục
      listRef
        .listAll()
        .then((res, url) => {
          res.prefixes.forEach(function (folderRef) {
            // console.log(folderRef);
          });
          for(let i = 0; i < res.url; i++) {
            this.setState({ url })
          }
          res.items.forEach(function (itemRef) {
            console.log(itemRef);
            // url = itemRef.location.path;
            // this.setState({ url });
            // Tất cả các mục trong listRef
          });
          // console.log(url);
        })
        .catch(function (error) {
          console.log(error);
          //Error
        });

    };

    console.log('image', this.state.image);

    return (
      <div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <button onClick={ListAllFile}>ListFile</button>
        <img src={this.state.url}></img>
      </div>
    );
  }
}

export default UpLoad;
