import React,{useState, useEffect} from 'react'
import { GiFactory } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { getItems, deleteItems } from '../../axios/itemAxios';
import LoadingBar from '../../helpers/LoadingBar'; 

const ListItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {

        getItems(result => setItems(result))
    }, [])
    
const deleteHandler = (id) => {
    deleteItems(id)
    getItems(result => setItems(result))
}

  return (
    <>
            <div className='row my-3 text-center'>
            <div className='col-5 mx-auto'>
                <Link to="/items/create" className='btn btn-sm btn-primary my-2'>
                Add Item
                <span>
                <GiFactory></GiFactory>
                </span>              
                </Link>
                <div className='w-100'>
                    <table  className='table table-borderd'>
                        <thead>
                            <tr> 
                                <th>Id</th>
                                <th>name</th>
                                <th>image</th>
                                <th>price</th>
                                <th>brand</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.length > 0 ?
                                items.map( item => {
                                    const {id,name,image,price,brand} = item
                                    return(
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>
                            <img className src={image} alt="" />
                          </td>
                                            <td>Rp. {price}</td>
                                            <td>{brand.name}</td>
                                            <td>
                                            <Link to={`/items/edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
                                            <button onClick={() => deleteHandler(+id)} className='btn btn-sm btn-danger'>DELETE</button>
                                            </td>
                                        </tr>
                                    )
                                }) : <LoadingBar>LoadingBar</LoadingBar>
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </>
  )
}

export default ListItems