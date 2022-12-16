import React from 'react'
import Card from '../components/Card';
import { data } from '../components/helper/data';

const Teams = () => {
  return (
    <div className='d-flex justify-content-center gap-5 flex-wrap'  >
      {data.map((item)=>{
        return(
          <Card item={item} />
        )
      })}      
    </div>
  )
}

export default Teams