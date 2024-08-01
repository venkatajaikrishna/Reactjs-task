import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const api = "https://jsonplaceholder.typicode.com/posts/";
    
    axios
      .get(api)
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.posts.length > 0 ? (
          this.state.posts.map((post) => (
            <div key={post.id}>
              <pre>{JSON.stringify(post, null, 2)}</pre>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    );
  }
}

export default App;
