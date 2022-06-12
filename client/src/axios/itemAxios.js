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
        console.log(result.data)
    } catch (e) {
        console.log(e)
    }

    
}

const editItems = () => {
    
}

const deleteItems = async (id) => {
    try {
        let result = await axios({
            method: 'DELETE',
            url: URL + '/delete/' + id
        })

        console.log(result)
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