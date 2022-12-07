import React, {useState, useEffect} from 'react';
import { addProduct, Product } from '../../Redux/product.slice';
import { useAppDispatch } from '../../Redux/store.hook';
import { Typography, Link, Container,Box, TextField, Button, Grid } from "@mui/material";

const UploadPage: React.FC=()=>{
    const dispatch = useAppDispatch();


    const [product, setProduct] = useState<Product>({
            id: 0,
            name: '',
            price: 0,
            description: '',
            image: ''
    })
    const [productImage, setProductImage] = useState(null);
    const [imageURL, setImageURL] = useState(""); 


    const handleChange = ({target:{name,value}}: React.ChangeEvent<HTMLInputElement>) => setProduct(
        prev => {
            (prev as any)[name] = value;
            const newValue = {...prev};
            return newValue;
        }
    )

    const imageUploadHandler = (e: any) => {
        e.preventDefault();
        if (e.target.files) {
            setProductImage(e.target.files[0]);
        }
    }

    useEffect(() => {
        if (productImage) {
            setImageURL(URL.createObjectURL(productImage));
        }
    },[productImage])

    const handleSubmit =(e: React.FormEvent)=>{
        e.preventDefault();
        product.image=imageURL;
        
        // dispatch(addProduct(product));
        dispatch(addProduct({...product}));

    }

   

    const {id, name, price, description, image} = product;

    return (
    <div className='product-upload-container'>
       
       <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Trending Products</Typography>
            </Box>
            <Box> 
        <form className='product-upload-form' onSubmit={handleSubmit}>
           
        <div>
            <div>Product ID:  </div> <input type="number" placeholder="id" name="id" value={id} onChange={handleChange}/> </div>
           <div><div>Product Name: </div> <input  type="text" placeholder="product name"  name="name" value={name} onChange={handleChange}/></div>
           <div><div>Product Price: </div> <input type="number" placeholder="price" name="price" value={price} onChange={handleChange}/></div>
           <div><div>Description: </div> <input type="text" placeholder="description" name="description" value={description} onChange={handleChange}/></div>
            <div className='upload-picture-container'>
            <div>Upload Picture:</div>
                <input type="file" accept="image/*" placeholder="image" name="image" onChange={e => imageUploadHandler(e)}/>

            <button className='upload-product-btn' type='submit'>Upload Products</button>
           </div>
        </form>
        </Box>
    </div>
    
    )


}

export default UploadPage;