import React from 'react';

const Item = (props) => {
  const { icon, title, content } = props;
  return (
    <div className='card-container'>
      <div className='icon-container'>{icon}</div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Item;
