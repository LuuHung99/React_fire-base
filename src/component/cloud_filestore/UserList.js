// import React, { Component } from "react";
// import firebase from "../fire-base/config";

// var db = firebase.firestore();

// class UsersList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       inputName: "",
//       inputAge: "",
//       inputAddress: "",
//     };
//   }

//   componentDidMount() {
//     db.collection("users").onSnapshot((querySnapshot) => {
//       const users = [];
//       querySnapshot.forEach((doc) => {
//         var data = doc.data();
//         data.id = doc.id;
//         users.push(data);
//       });
//       this.setState({ users });
//     });
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.id]: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     db.collection("users").add({
//         name: this.state.inputName,
//         age: this.state.inputAge,
//         address: this.state.inputAddress
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });

//     db.collection("users").doc("FcaDLwrd4tb9taGm953u").get().then(function(doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function(error) {
//         console.log("Error getting document:", error);
//     });;
//   }

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="left">
//             <h2>Add user</h2>
//             <form action="#"  onSubmit={(event)=>this.handleSubmit(event)}>
//               <label htmlFor="inputName">Name </label>
//               <input
//                 type="text"
//                 className="name"
//                 id="inputName"
//                 onChange={(event) => this.handleChange(event)}
//               />
//               <br />
//               <br />
//               <label htmlFor="inputAge">Age </label>
//               <input
//                 type="text"
//                 className="name"
//                 id="inputAge"
//                 onChange={(event) => this.handleChange(event)}
//               />
//               <br />
//               <br />
//               <label htmlFor="inputAge">Adress </label>
//               <input
//                 type="text"
//                 className="name"
//                 id="inputAge"
//                 onChange={(event) => this.handleChange(event)}
//               />
//               <br />
//               <br />
//               <button>Add</button>
//             </form>
//           </div>
//           <div className="right">
//             <h2>User List</h2>
//             {this.state.users &&
//               this.state.users.map((item, index) => {
//                 return (
//                     <div>
//                         <span key={index}>{item.name}</span>
//                         <button>X</button>
//                     </div>
//                 );
//               })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// export default UsersList;

// Trước tiên tạo 