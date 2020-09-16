import React, { Component } from 'react';
import { storage } from '../../fire-base/config';

class UpLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      url: ''
    };
  }
  render() {
    // Tạo dữ liệu 
    const handleChange = (e) => {
      if (e.target.files[0]) {
        this.setState({
          image: e.target.files[0]
        });
      }
      console.log(storage);
    };

    const handleUpload = () => {
      const upLoadTask = storage.ref(`images/${this.state.image.name}`)
                                .put(this.state.image);

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
              this.setState({ url });
            });
        },
      );
    };
    
    console.log('image', this.state.image);

    return (
      <div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
        <img src={this.state.url}></img>
      </div>
    );
  }
}

export default UpLoad;
