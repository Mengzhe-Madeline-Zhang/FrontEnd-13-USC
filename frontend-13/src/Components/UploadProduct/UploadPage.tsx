import React, {useState, useEffect} from 'react';
import { addProduct, Product } from '../../Redux/product.slice';
import { useAppDispatch } from '../../Redux/store.hook';

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
    const [imageURL, setImageURL] = useState("")
    const handleChange = ({target:{name,value}}: React.ChangeEvent<HTMLInputElement>) => setProduct(
        prev => {
            (prev as any)[name] = value;
            const newValue = {...prev}
            return newValue;
        }
    )

    const imageUploadHandler = (e: any) => {
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
        dispatch(addProduct(product));
    }

    const {id, name, price, description, image} = product;

    return (
    <div className='product-upload-container'>
        <h2> Add Products  </h2>
        <form className='product-upload-form' onSubmit={handleSubmit}>
            <input type="number" placeholder="id" name="id" value={id} onChange={handleChange}/>
            <input type="text" placeholder="product name"  name="name" value={name} onChange={handleChange}/>
            <input type="number" placeholder="price" name="price" value={price} onChange={handleChange}/>
            <input type="text" placeholder="description" name="description" value={description} onChange={handleChange}/>
            <div className='upload-picture-container'>
                <p>Upload  Picture</p>
                <input type="file" accept="image/*" placeholder="image" name="image" onChange={e => imageUploadHandler(e)}/>
            </div>
            <button className='upload-product-btn' type='submit'>Upload Products</button>
        </form>
    </div>
    )


}

export default UploadPage;