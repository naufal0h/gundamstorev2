import React, { useState, useEffect } from 'react'
import { addItems } from '../../axios/itemAxios'
import { getBrands } from '../../axios/brandAxios'
import { useNavigate } from 'react-router-dom'
import LoadingBar from '../../helpers/LoadingBar'

const CreateItem = () => {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        getBrands(result => setBrands(result))
    }, [])
    

    const [form, setForm] = useState({
        name: " ",
        price: 0,
        Image: "http://via.placeholder.com/100",
        brandId: 0
    })

    const navigation = useNavigate()

    function selectBrand(event){
        setForm({...form, brandId: event.target.value})
    }

    const submitHandler = () => {
        addItems(form)
        navigation('/items')
    }

  return (
    <div className="row my-3">
        <div className="w-100">
            <h5> Create item</h5>
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
                <label>Price: </label>
                <input 
                onChange={(e) => setForm({ ...form, price: e.target.value})}
                type="text" 
                className="form-control"></input>
            </div>
            <div className="mb-3">
                <label>Image: </label>
                <input 
                onChange={(e) => setForm({ ...form, image: e.target.value})}
                type="text" 
                className="form-control"></input>
            </div>
            <div className="mb-3">
                <label>Brand: </label>
                <select class="form-select" id="brandId" name="brandId" 
                         onChange={selectBrand} >
                    <option value={0} selected>Select Brand</option>
                    {
                        brands.length > 0 ?
                        brands.map(brand => {
                            const { id, name } = brand;
                            return (
                                <option value={id}>{name}</option>
                            )
                        }) : <LoadingBar />
                    }
                    </select>
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

export default CreateItem