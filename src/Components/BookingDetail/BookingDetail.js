import React from 'react';
import { useParams } from 'react-router-dom';

const BookingDetail = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default BookingDetail;