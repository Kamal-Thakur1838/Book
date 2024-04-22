import React from 'react'
import Cards from './Cards';
import list from '../../public/list.json';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <>
       <div className=' max-w-screen-2xl container mt-0 md:px-20 px-4' >
         <div className='items-center justify-center text-center ' >
          <h1 className=' pt-28 text-2xl font-samibold md:text-4xl ' > Lorem ipsum dolor, sit amet <span className=' text-red-500 ' > nesciunt. </span> </h1>

          <p className='mt-5' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi suscipit voluptatem, quos ratione pariatur tempora facere dolor fugit ducimus. A quia illum, officiis rerum aliquid ex unde odio autem. </p>

         <Link to="/">
         <button className='mt-5 mb-5 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300 ' >
             Check Out
          </button>
         </Link>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-3 ' >
          { 
             list.map((item)=>(
              <Cards key={item.id} item ={item} />
             ))

          }
         </div>
       </div>
    </>
  )
}

export default Course