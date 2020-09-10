import React, { Component } from 'react';
import firebase from '../fire-base/config';

var db = firebase.firestore();

class User extends Component {
  render() {
    // Thêm một document mới (user01) vào collection (users)
    // db.collection("users").doc("user01").set({
    //   name: "Duy",
    //   age: 22,
    //   address: "Tam dao"
    // })
    // .then(function() {
    //     console.log("Ghi du lieu thanh cong");
    // })
    // .catch(function(error) {
    //     console.error("Ghi du lieu that bai: ", error);
    // });

    // Thêm một document mới (user01) vào collection (users)
    // db.collection("users").add({
    //   name: "Duy",
    //   age: 22,
    //   address: "Ha Noi"
    // })
    // .then(function(doc) {
    //     console.log("Ghi du lieu thanh cong voi id: ", doc.id);
    // })
    // .catch(function(error) {
    //     console.error("Ghi du lieu that bai: ", error);
    // });

    // Lấy dữ liệu document "user01"
    // db.collection("user_list").doc("tk").get()
    // .then(function(doc) {
    //     if (doc.exists) {
    //         console.log("Lay du lieu thanh cong:", doc.data());
    //     } else {
    //         console.log("Khong tim thay document!");
    //     }
    // })
    // .catch(function(error) {
    //     console.error("Lay du lieu that bai: ", error);
    // });

    // Lấy tất cả document từ collection users
    // db.collection("user_list").get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.error("Lay du lieu that bai: ", error);
    // });

    // const [image, setImage] = useState(null);

    const handleChange = (e) => {
      // if (e.target.files[0]) {
      //   setImage(e.target.files[0]);
      // }
    };

    const handleUpload = () => {
      
    };

    // console.log('image', image);
    return (
      <div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
  }
}

export default User;
