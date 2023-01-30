import { useEffect, useState } from "react";

function App() {
  const [post,setPost]=useState([])


  const getPost = async() =>{
   console.log("hello")
  try {
    const apipost  = await fetch("https://jsonplaceholder.typicode.com/posts")
    const postfromapi = await apipost.json();
    setPost(postfromapi[0])
    console.log(postfromapi);
  }catch(error){

  }finally{

  }  
}
  return (
    <div className="App">
    <p>{post.title}</p>
    {/* {post.map((item) =>(
      <p>{item.title}</p>
    ) )
      
    } */}
    <button onClick={getPost}>Click to see post one</button>      
    </div>
  );
}

export default App;
