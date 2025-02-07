import React, { useState } from 'react';
import Header from '../Header/Header';


const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
     
    </div>
  );
};

export default Home;
