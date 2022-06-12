import React,{useState, useEffect} from 'react'
import { GiFactory } from "react-icons/gi";
import { Link, useNavigate  } from 'react-router-dom';
import { getBrands, deleteBrands } from '../../axios/brandAxios';
import LoadingBar from '../../helpers/LoadingBar'; 



const ListBrands = () => {

    const [brands, setBrands] = useState([])

    const navigation = useNavigate()

    useEffect(() => {

        getBrands(result => setBrands(result))
    }, [])
    
const deleteHandler = (id) => {
    deleteBrands(id, () => {
        window.location.reload();
        <LoadingBar>LoadingBar</LoadingBar> 
    })
    navigation('/brands')
}

  return (
    <>
            <div className='row my-3 text-center'>
            <div className='col-5 mx-auto'>
                <Link to="/brands/create" className='btn btn-sm btn-primary my-2'>
                Add Brand
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
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brands.length > 0 ?
                                brands.map( brand => {
                                    const {id,name} = brand
                                    return(
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>
                                            <Link to={`/brands/edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
                                                <button onClick={ () => deleteHandler(+id) } className='btn btn-sm btn-danger'>Delete </button>
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

export default ListBrands