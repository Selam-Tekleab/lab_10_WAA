import React, { useEffect, useState } from 'react';
import { useDataContext } from './context';

const Posts: React.FC = () => {
  const { setUserData } = useDataContext(); 
  const [posts, setPosts] = useState<any[]>([]); 

 useEffect(() => {
  fetch('./db.json')
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched data:', data);  
      setPosts(data.posts || []);  
      setUserData({ name: data.name, age: data.age, city: data.city });
    })
    .catch((error) => console.error('Error fetching posts:', error));
}, []);


  return (
	<div>
	  <h2>Posts</h2>
	  {posts.length > 0 ? (
		<ul>
		  {posts.map((post) => (
			<li key={post.id}>
			  <strong>{post.title}</strong>: {post.content}
			</li>
		  ))}
		</ul>
	  ) : (
		<p>No posts available.</p>  
	  )}
	</div>
  );
  
};

export default Posts;
