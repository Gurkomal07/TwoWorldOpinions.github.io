/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/discover.js":
/*!*************************!*\
  !*** ./src/discover.js ***!
  \*************************/
/***/ (() => {

eval("// // import { getFirestore  } from 'firebase/firestore';\r\n// // import { getAuth } from \"firebase/auth\";\r\n// import firebase, { initializeApp } from \"firebase/app\";\r\n// import  {\r\n//   getFirestore, collection, getDocs, addDoc, \r\n//   deleteDoc, doc, onSnapshot, query, where, getDoc, setDoc,runTransaction\r\n// } from 'firebase/firestore';\r\n\r\n// import { signOut } from \"firebase/auth\";\r\n\r\n\r\n// // import firebase from 'firebase/compat/app';\r\n// //import { collection, getFirestore } from 'firebase/firestore';\r\n// import { getAuth } from 'firebase/auth';\r\n\r\n// import { getDownloadURL, getStorage, ref, uploadBytesResumable, userCredential } from \"firebase/storage\";\r\n\r\n\r\n\r\n// const firebaseConfig = {\r\n//   // Your Firebase configuration object here\r\n//   // Your web app's Firebase configuration\r\n\r\n//   apiKey: \"AIzaSyBxzRkwIxW8qEZFubLc_qVIY4IshFS9HCQ\",\r\n//   authDomain: \"the-world-s-opinion-e6dac.firebaseapp.com\",\r\n//   databaseURL: \"https://the-world-s-opinion-e6dac-default-rtdb.firebaseio.com\",\r\n//   projectId: \"the-world-s-opinion-e6dac\",\r\n//   storageBucket: \"the-world-s-opinion-e6dac.appspot.com\",\r\n//   messagingSenderId: \"514208223527\",\r\n//   appId: \"1:514208223527:web:4fe7598ef068908f73d902\",\r\n//   storageBucket: \"the-world-s-opinion-e6dac.appspot.com\"\r\n\r\n// };\r\n\r\n// // if (typeof firebase !== 'undefined') {\r\n// //   console.log('hey surprise')\r\n// //   //const app = firebase.initializeApp(firebaseConfig);\r\n  \r\n// // } else {\r\n// //   console.log('Firebase SDK is not loaded');\r\n// // }\r\n\r\n// // if (firebase && firebase.auth()) {\r\n// //   console.log('here')\r\n// // } else {\r\n// //   console.log('Firebase Auth is not initialized');\r\n// // }\r\n\r\n// initializeApp(firebaseConfig);\r\n\r\n// // Initialize authorization\r\n// const auth = getAuth();\r\n\r\n// // Get the Firestore database\r\n// const db = getFirestore();\r\n\r\n// const imagesRef =collection(db, \"ImageLinks\")\r\n\r\n// function GetImagesFromFirestore() {\r\n//   return new Promise(async function(resolve, reject) {\r\n//     try {\r\n//     var imageUrls = [];\r\n//     var postIds = [];\r\n//     const querySnapshot = await getDocs((imagesRef));\r\n//     querySnapshot.forEach((doc) => {\r\n//       if (doc.exists()) {\r\n//       imageUrls.push(doc.data().ImageUrl);\r\n//       postIds.push(doc.id)\r\n      \r\n//       // console.log(doc.id)\r\n//       // console.log(doc.data().ImageUrl)\t\r\n//       }\r\n//     });\r\n//     // const imageUrl = querySnapshot.docs[0].data().ImageUrl;\r\n//     // console.log(imageUrl)\r\n//     const imageList = document.querySelector(\".d-show-posts\")\r\n//     imageList.addEventListener(\"click\", (e)=>{\r\n//      // e.preventDefault();\r\n//       //console.log(e)\r\n//       //console.log(e.target.src)\r\n//       const imageSrc = e.target.src;\r\n//       console.log(imageSrc);\r\n//       // const querySnapshot1 =  getDocs(query(imagesRef,where('ImageUrl', '==', imageSrc)));\r\n//       // querySnapshot1.then((g) => {\r\n//       //   console.log(g)\r\n//       //   const data2=g.docs.map(d=>({id:d.id, ...d.data()}))\r\n//       //   console.log(data2)\r\n//       //   data2.map((fr) => {\r\n//       //     //console.log(fr.id)\r\n//       //     const imageId = fr.id;\r\n//       //     console.log(\"imageid\")\r\n//       //     console.log(imageId);\r\n//       //   })    \r\n//       //})\r\n//       const buttons = document.querySelectorAll(\".d-svg-like\");\r\n//       buttons.forEach((button) => {\r\n//         button.addEventListener(\"click\", (g) => {\r\n//           const postId = g.currentTarget.getAttribute('value');\r\n//           console.log(postId); \r\n//         });\r\n//       })\r\n//       // docId.addEventListener(\"click\", async (event) => {\r\n//       //   //console.log(event)\r\n//       //     console.log(event.target)\r\n//       //     const postUrl = imageSrc;\r\n//       //     const querySnapshot =  getDocs(\r\n//       //       query(imagesRef, where('ImageUrl', '==', postUrl))\r\n//       //     );\r\n//       //     const docId1 = querySnapshot.docs[0].data().id;\r\n//       //     console.log(docId1)\r\n//       //     const docRef =  doc(imagesRef, docId1);\r\n//       //     const docSnap = await getDoc(docRef);\r\n//       //     if (docSnap.exists()) {\r\n//       //       const data = docSnap.data();\r\n//       //       if (data.like_count == 0) {\r\n//       //         await updateDoc(docRef, {\r\n//       //           like: true,\r\n//       //           dislike: false,\r\n//       //           like_count: 1,\r\n//       //           dislike_count: 0\r\n//       //         });\r\n//       //       } else {\r\n//       //         await updateDoc(docRef, {\r\n//       //           like: false,\r\n//       //           dislike: false,\r\n//       //           like_count: 0,\r\n//       //           dislike_count: 0\r\n//       //         });\r\n//       //       }\t\r\n//       //      updateButton(data);\r\n//       //     }\r\n//       // }); \r\n//     })\r\n//     imageList.innerHTML =\r\n//       `<div class=\"d-display-on-post\">` +\r\n//       imageUrls.map(function(imageUrl) {  \r\n//         const index = imageUrls.indexOf(imageUrl);\r\n//         const postId = postIds[index]\r\n//         console.log(imageUrl)\r\n//       return `\r\n//         <ul class=\"d-li-img\">\r\n//         <li><img src=\"${imageUrl}\"></li>\r\n//         </ul>\r\n\r\n//         <div class=\"d-reaction-icons\">\r\n//         <ul class=\"d-reaction-list\">\r\n//           <li class=\"d-svg-share\"><button class=\"post-button-share\"><i class=\"fa-solid fa-share\"></i></button></li>\r\n//           <li class=\"d-svg-trash\"><button class=\"post-button-delete\"><i class=\"fa-solid fa-trash\"></i></button></li>\r\n//           <li class=\"d-svg-like\"><button class=\"post-button-like\" value=\"${postId}\"><i class=\"fa-solid fa-thumbs-up\"></i></button></li>\r\n//           <li class=\"d-svg-dislike\"><button class=\"post-button-dislike\"><i class=\"fa-solid fa-thumbs-down\"></i></button></li>\r\n\r\n//         </ul>\r\n//         </div>\r\n//         <div class=\"d-userPosted\">\r\n//         <ul>\r\n//           <li>\r\n//           <button>\r\n//             <a href=\"../Designing/profile.html\"><img src=\"img/wallpaperflare.com_wallpaper (6).jpg\" alt=\"profile-picture\"></a>\r\n//           </button>\r\n//           </li>\r\n//           <li>\r\n//           <button>\r\n//             <p>UserName</p>\r\n//           </button>\r\n//           </li>\r\n//           <li>\r\n//           <button>\r\n//             <p>Date</p>\r\n//           </button>\r\n//           </li>\r\n//         </ul>\r\n//         </div>`\r\n//       }).join('') +\r\n//       `</div>`;\r\n//     resolve(imageUrls);\r\n//     } catch (error) {\r\n//     reject(error);\r\n//     }\r\n//   });\r\n//   }\r\n//   GetImagesFromFirestore();\r\n\r\n\r\n\n\n//# sourceURL=webpack://firebase_login/./src/discover.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/discover.js"]();
/******/ 	
/******/ })()
;