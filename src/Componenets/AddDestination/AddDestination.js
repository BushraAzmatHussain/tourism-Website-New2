import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
        console.log(data);
        axios.post('https://grim-spell-21442.herokuapp.com/destinations',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added successfully!');
                reset();
            }
        })

    } 
    return (
        <div id="addDestination" className="add-destination p-5 m-5">
            <h2>Add a New Destination</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="Description" />
      <textarea {...register("details")} placeholder="More Details" />
      <input type="number" {...register("price")} placeholder=" Total Amount for visiting per person"  />
      <input {...register("img")} placeholder="img url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddDestination;