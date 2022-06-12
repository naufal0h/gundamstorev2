import React, { useState } from 'react'
import { addBrands } from '../../axios/brandAxios'
import { useNavigate } from 'react-router-dom'

const CreateBrand = () => {

    const [form, setForm] = useState({
        name: " ",
        Image: "http://via.placeholder.com/100"
    })

    const navigation = useNavigate()

    const submitHandler = () => {
        addBrands(form)
        navigation('/brands')
    }

  return (
    <div className="row my-3">
        <div className="w-100">
            <h5> Create Brand</h5>
        </div>
        <div className="w-100">
            <div className="mb-3">
                <label>Name: </label>
                <input 
                onChange={(e) => setForm({ ...form, name: e.target.value})}
                type="text" 
                className="form-control"></input>
            </div>
            <div className="mb-3">
                <button onClick={() => submitHandler()} className=" btn btn-block btn-primary">
                Submit
                </button>  
            </div>
        </div>
    </div>
  )
}

export default CreateBrand