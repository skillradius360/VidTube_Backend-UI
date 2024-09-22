import { useEffect, useState } from 'react'

import './App.css'
import axios from "axios"

function App() {
  const [count, setCount] = useState([])



  useEffect(() => {

    axios.get('videos/getAllVideo/v1?userId=66b8abf7dd400b636464c3d1&sortBy=yesterday&sortType=ascending')
      .then(function (response) {
        setCount(response.data.data)
        // handle success
        console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })



  }, [setCount])

  return (
    <>
      {
        count.map((data) =>
          < img src={data.videosAll.thumbnail} alt="" key={data.videosAll.createdAt} />

        )
      }
    </>
  )
}

export default App


//   axios.post('/users/login', {
//     username: "rajd",
//     password: "rajd",
//     email: "adaraj@ggggd"
// },
// { withCredentials: true})
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });