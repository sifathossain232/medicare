import { departmentsData } from '@/Components/DepartmentsData';
import { useParams } from 'next/navigation';
import React from 'react';

const Modal = ({itemsShow}) => {
// // console.log(itemsShow)
let {id} = useParams()
// // console.log(id)
// const filter = id.find()


const data = itemsShow.map((item)=>item) ;
console.log(data)
const filter = data.find((items)=>items.id !== id);
console.log(filter)

// let {id} = useParams()
// const data =  commentData.map((item)=>item)
// const newItem = data.find((items) =>items.id ==id)
// console.log(newItem)
    
    
    // const filter   =  allData.find((singleData)=> singleData.id == id) 
    return (
        <div>
  
  <div  className="bg-red-500 h-96 text-white flex flex-col items-center justify-center"> <p>{filter?.id}</p>  </div> 


      
        </div>
    );
};

export default Modal;