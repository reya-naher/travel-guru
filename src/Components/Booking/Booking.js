import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = (params) => {
  const { name } = useParams()
  const data = params.data.find(item => item.name === name)
  console.log(data)
  return (
    <div>
 
    </div>
  );
};

export default Booking;