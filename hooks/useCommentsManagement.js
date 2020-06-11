import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const useCommentsManagement = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';

    const response = await fetch(url);

    const data = await response.json();

    setComments(data);
  };

  return { comments, fetchComments };
};

export default useCommentsManagement;
