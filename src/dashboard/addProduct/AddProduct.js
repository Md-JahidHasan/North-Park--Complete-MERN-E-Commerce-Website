import React, { useState } from 'react';
import picUploadLogo from '../../assets/images/dribbble_1.gif';


const AddProduct = () => {
    

// ================= Products all Size adding feature ================== 
    const [sizeInput, setSizeInput] = useState('')
    const getData =(size) =>{
        setSizeInput(size.target.value)
    }
    
    const [size, setSize] = useState([]);
    const handleAddSize = (size) => {
        if(sizeInput===''){
            alert('Please enter size!')
        }else{
            setSize((prev) => {
                return [...prev, sizeInput]
            })
            setSizeInput('')
        }
        
    }

    return (
        <div className='min-h-screen text-center'>
            <h1 className='text-yellow-200  m-4 text-2xl'>Upload New Product</h1>

            <form className='text-gray-400 px-4' action="">
                

                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder="Product Name" className="input w-full my-1 sm:w-3/5" />

                    <select className="select sm:ml-1 w-full sm:w-2/5">
                        <option disabled selected>Select Category</option>
                        <option>Shirt</option>
                        <option>T-Shirt</option>
                        <option>Jeans</option>
                        <option>Shoe</option>
                    </select>
                </div>


                <div className=' my-1 w-full bg-white rounded flex items-center justify-center'>
                    {/* <BsCloudUpload></BsCloudUpload> */}
                    <img className='w-[180px]' src={picUploadLogo} alt="" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder="Product Price" className="input w-full" />
                    <input type="text" placeholder="Product model" className="input sm:ml-1 w-full my-1" />
                </div>

                <div className=' w-full rounded flex items-center justify-center'>
                    <input type="text" placeholder={size.length === 0 ? `Product Size` : size.map(x => x)} disabled className="input rounded-r-none w-[60%] disabled:bg-yellow-100 disabled:font-semibold  disabled:placeholder-[#002828] disabled:border-2 disabled:border-amber-500" />
                    
                    <input type="text" onChange={getData} name='productSize' placeholder="Add size" value={sizeInput} className="input rounded-none w-[30%] my-1 focus:outline-none" />

                    <div onClick={handleAddSize} className='bg-amber-500 input rounded-l-none w-[10%] p-3 text-white'>ADD</div>
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder="Product Composition" className="input w-full" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder="Quantity" className="input w-full" />
                    <input type="text" placeholder="Style" className="input sm:ml-1 w-full my-1" />
                </div>
                

            </form>
        </div>
    );
};

export default AddProduct;