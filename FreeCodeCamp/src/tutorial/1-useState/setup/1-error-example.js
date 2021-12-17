import React, {useState} from 'react';






const ErrorExample = () => {
    let title = 'Random Title';


  const handleClick = () => {
      title = 'Changed Title';
      console.log(title);
  }


  return <>
            <h2>{title}</h2>
            <button type='button' className='btn' 
              onClick={handleClick}>
                Change Title
            </button>
         </>;

};

export default ErrorExample;
