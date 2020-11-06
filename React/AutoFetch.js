import React, { useEffect, useState } from 'react';

const getPosts = async setPosts => {
  try {
    const userPosts = await fetch('https://jsonplaceholder.typicode.com/posts');

    setPosts(userPosts.data);
  } catch (err) {
    console.error(err.message);
  }
};

const AutoFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);

    const interval = setInterval(() => getPosts(setPosts), 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>useEffect</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default AutoFetch;
