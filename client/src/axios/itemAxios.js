import axios from 'axios'
import swal from 'sweetalert2'

const URL = 'http://localhost:3000/api/items'

const getItems = async (cb) => {
    try {
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        cb(brands.data)
        console.log(brands) 
    } catch(e){
        console.log(e)
    }

}

const addItems =  async (item) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + "/create",
            data: item
        })

        swal.fire(
            'Add Items',
            'Items has been added',
            'success'
        )
        console.log(result.data)
    } catch (e) {
        console.log(e)
    }

    
}

const editItems = async (id, item) => {
    try {
        let result = await axios ({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data: item
        })

        swal.fire(
            'Edit Brands' +id,
            'Brand ' +id+ 'has been added',
            'success'
        )
        
    } catch (e) {
        console.log(e)
    }
    
}
const deleteItems = async (id) => {
    try {
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios({
                    method: 'DELETE',
                    url: URL + '/delete/' + id
                })
                window.location.reload();
              swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    } catch (e) {
        console.log(e)
    }
    
}

const infoItems = async (id,cb) => {
    try {
        let result= await axios({
            method: "GET",
            url: URL + '/info/' + id
        })
        cb(result.data)
    } catch (e) {
        console.log(e)
    }

    
}

export { getItems, addItems, editItems, deleteItems, infoItems }