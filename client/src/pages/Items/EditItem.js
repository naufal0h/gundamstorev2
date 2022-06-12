import React, { useState, useEffect } from 'react'
import { infoItems, editItems } from '../../axios/itemAxios'
import { useNavigate, useParams  } from 'react-router-dom'
import { getBrands } from '../../axios/brandAxios'
import LoadingBar from '../../helpers/LoadingBar'

const EditItem = () => {

  const [brands, setBrands] = useState([])

  useEffect( () => {
    getBrands(result => setBrands(result))
}, [])

    const [form, setForm] = useState({
        name: " ",
        price: 0,
        Image: "http://via.placeholder.com/100",
        brandId: 0
    })

    const navigation = useNavigate()
    const params=useParams()

    const getIteminfo = () => {
        const {id} = params
        infoItems(+id, result => {
            setForm({
                name: result.name,
                price: result.price,
                image: result.image,
                brandId: result.brandId

            })
            console.log(result)
        })

    }

    useEffect(() => {
        getIteminfo()
    }, [])

    function handleSelectBrandsChange(event) {
      setForm({ ...form, brandId: event.target.value })
  }
    

    const submitHandler = () => {
        editItems(+params.id,form)
        navigation('/items')
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
                <label>price: </label>
                <input 
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value})}
                type="text" 
                className="form-control"></input>
            </div>
            <div className="mb-3">
                <label>image: </label>
                <input 
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value})}
                type="text" 
                className="form-control"></input>
            </div>
            <div className="mb-3">
                    <label>Brand: </label>
                    <select class="form-select" id="brandId" name="brandId"
                         onChange={handleSelectBrandsChange} >

                    <option value={0} selected>{form.brandId}</option>
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

export default EditItem