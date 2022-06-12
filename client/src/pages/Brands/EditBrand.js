import React, { useState, useEffect } from 'react'
import { infoBrands, editBrands } from '../../axios/brandAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBrand = () => {

    const [form, setForm] = useState({
        name: " ",
        Image: "http://via.placeholder.com/100"
    })

    const navigation = useNavigate()
    const params=useParams()

    const getBrandsinfo = () => {
        const {id} = params
        infoBrands(+id, result => {
            setForm({
                name: result.name,
                image: result.image
            })
            console.log(result)
        })

    }

    useEffect(() => {
        getBrandsinfo()
    }, [])
    

    const submitHandler = () => {
        editBrands(+params.id,form)
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
                value={form.name}
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

export default EditBrand