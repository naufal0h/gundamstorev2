import React from 'react'
import{
    Routes,
    Route
} from 'react-router-dom'
import{
    HomePage, 
    Item, ListItems, CreateItem,EditItem,
    Brand, CreateBrand, ListBrands, EditBrand
} from '../pages'

function MainContent() {
  return (
    <div className='container p-3'>
        <h3>DASHBOARD GUNDAM</h3> 
 
        <Routes>
            <Route path="/" element={
                <HomePage></HomePage>
            }></Route>

            <Route path="items" element={<Item></Item>}>
            <Route path="" element={<ListItems></ListItems>}></Route>
            <Route path="create" element={<CreateItem></CreateItem>}></Route>

            <Route path="edit">
                    <Route path=":id" element={(<EditItem></EditItem>)}></Route>
                    </Route></Route>

            <Route path="brands" element={<Brand></Brand>}>
                <Route path="" element={<ListBrands></ListBrands>}></Route>
                <Route path="create" element={<CreateBrand></CreateBrand>}></Route>
                <Route path="edit">
                    <Route path=":id" element={(<EditBrand></EditBrand>)}></Route>
                    </Route>           
            </Route>
        </Routes>

    </div>
  )
}

export default MainContent