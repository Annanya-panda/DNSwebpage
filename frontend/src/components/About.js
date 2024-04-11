import React, { useEffect } from 'react';
import axios from 'axios';

const About = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts'); 
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">About Page</h1>
      <p className="lead">This is the about page content.</p>
    </div>
  );
};

export default About;
