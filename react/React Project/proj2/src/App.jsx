import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {

  const Base_URL="http://localhost:4000";
  const GetAllUsers= async(id)=>{
    // debugger
      let result=await axios.get(`${Base_URL}/users`);
      console.log(result.data);
  };

  // useEffect(()=>{
  //   GetAllUsers(1);
  // },[]);


  // const PostToUsers=async(addpost)=>{
  //     let result=await axios.post(`${Base_URL}/users`,addpost);
  //     console.log(result.data);
  //     let resul=await axios.get(`${Base_URL}/users`);
  //     console.log(resul.data);
  // };

  // useEffect(()=>{
  //     let post={
  //         "id": 11,
  //         "name": "Kit Harington",
  //         "username": "Akif",
  //         "email": "Sincere@april.biz",
  //         "address": {
  //           "street": "nerimanov",
  //           "suite": "kucede",
  //           "city": "London",
  //           "zipcode": "2535",
  //           "geo": {
  //             "lat": "-37.3159",
  //             "lng": "81.1496"
  //           }
  //         },
  //         "phone": "1-770-736-8031 x56442",
  //         "website": "hildegard.org",
  //         "company": {
  //           "name": "Romaguera-Crona",
  //           "catchPhrase": "Multi-layered client-server neural-net",
  //           "bs": "harness real-time e-markets"
  //         }
  //       };
  //     PostToUsers(post);
  // },[]);
  const DelUser =async(id)=>{
      let deluser = await axios.delete(`${Base_URL}/${id}`);
      console.log(deluser.data);
  };
useEffect(()=>{
  DelUser(1);
},[]);

  return (
    <>
      
    </>
  )
}

export default App
