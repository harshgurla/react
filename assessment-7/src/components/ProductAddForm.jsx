import { useMutation,  useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import { useQueryClient } from "@tanstack/react-query";


const addItem = async (data) => {
    try {
        const response   = await apiClient.post("/products", data)
        console.log("product added successfully", response.data)
    } catch  ( error ){
        console.log("error occured", error)
    }
}
const ProductAddForm = () => {

    const { mutate } = useMutation({
        mutationFn: addItem
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData('name'),
            img: formData('img'),
            price: formData('price')
        }
         mutate(data)
    }
      

    const queryClient = useQueryClient({
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
        }
    });
        

  return (
    <div>
        <form onSubmit={ handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="img">Image URl</label>
                <input type="text" name='img' id='img' />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="Number" id='price' name="price" />
            </div>
            <button type="submit"> Add product</button>
        </form>
        
    </div>
  )
}

export default ProductAddForm