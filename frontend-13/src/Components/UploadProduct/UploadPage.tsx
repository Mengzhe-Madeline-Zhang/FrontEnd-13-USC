import React, {useState} from 'react';
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
    const handleChange = ({target:{name,value}}: React.ChangeEvent<HTMLInputElement>) => setProduct(
        prev => {
            (prev as any)[name] = value;
            const newValue = {...prev}
            return newValue;
        }
    )

    const handleSubmit =(e: React.FormEvent)=>{
        e.preventDefault();
        dispatch(addProduct(product));
    }

    const {id, name, price, description, image} = product;

    return (<>
        <h2> Add Products  </h2>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="id" name="id" value={id} onChange={handleChange}/>
            <input type="text" placeholder="product name"  name="name" value={name} onChange={handleChange}/>
            <input type="number" placeholder="price" name="price" value={price} onChange={handleChange}/>
            <input type="text" placeholder="description" name="description" value={description} onChange={handleChange}/>
            <input type="text" placeholder="img url" name="image" value={image} onChange={handleChange}/>
            <button type='submit'>Upload Products</button>


        </form>
        </>
    )


}

export default UploadPage;