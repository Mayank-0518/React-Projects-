import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null); // Set initial state to null

  useEffect(() => {
    fetch('https://api.github.com/users/Mayank-0518')
      .then(response => response.json()) 
      .then(incomingData => {
        setData(incomingData);
        console.log(incomingData);
      })
      
  }, []);

  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: { data.followers } 
      </div>
    </>
  );
}

export default Github;
