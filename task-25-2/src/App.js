import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

const App = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let api = "https://jsonplaceholder.typicode.com/posts/1";
        const res = await axios.get(api);
        console.log(res);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, []); 
  return (
    <div className="App">
      {post ? (
        <pre style={{ textAlign: 'left', margin: '20px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {JSON.stringify({
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body
          }, null, 2)}
        </pre>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
};

export default App;