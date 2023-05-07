import React, { useState } from 'react';
import picUploadLogo from '../../assets/images/dribbble_1.gif';
import { IoIosAdd } from 'react-icons/io';


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
// ====================================================================


// ============ Products Size wise Quantity adding feature ============
const [sizeWiseQuantityInput, setSizeWiseQuantityInput] = useState({
    size: '',
    quantity: 0
})
const [sizeWiseQuantity, setSizeWiseQuantity] = useState([]);
const handleAddSizeWiseQuantity =()=>{
    if(sizeWiseQuantityInput.size.length === 0){
        alert('PLease select size and add quantity..')
    }else{
        setSizeWiseQuantity((prev)=>{
            return [
                ...prev,
                sizeWiseQuantityInput
            ]
        })
    }
}
console.log(sizeWiseQuantityInput, sizeWiseQuantity);





// ================= Handle Form Data ==================
    const [data, setData] = useState({
        model: "",
        name: "",
        rating: 0,
        review: [],
        type: "",
        image: "",
        size: size,
        price: 0,
        stockItem: 0,
        category: "",
        categoryId: "",
        details: "",
        composition: "",
        style: "",
        properties: "",
        sizeWiseQuantity: []
    })

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


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder="Product Composition" className="input w-full" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder="Quantity" className="input w-full" />
                    <input type="text" placeholder="Style" className="input sm:ml-1 w-full my-1" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder="Composition" className="input w-full" />
                    <input type="text" placeholder="Category Id" className="input sm:ml-1 w-full my-1" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <textarea className="textarea w-full" placeholder="Product Detail"></textarea>
                </div>
                

                <div className=' w-full rounded flex items-center justify-center'>
                    <input type="text" placeholder={size.length === 0 ? `Product Size` : size.map(x => x)} disabled className="input rounded-r-none w-[60%] disabled:bg-yellow-100 disabled:font-semibold  disabled:placeholder-[#002828] disabled:border-2 disabled:border-amber-500" />

                    <input type="text" onChange={getData} name='productSize' placeholder="Add size" value={sizeInput} className="input rounded-none w-[30%] my-1 focus:outline-none" />

                    <div onClick={handleAddSize} className='bg-amber-500 input rounded-l-none w-[10%] p-2 text-white text-3xl font-bold'><IoIosAdd></IoIosAdd></div>
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder={sizeWiseQuantity.length === 0 ? `Product Size: Quantity` : sizeWiseQuantity.map(x => `${x.size}:${x.quantity}`)} disabled className="input  w-full disabled:bg-yellow-100 disabled:font-semibold  disabled:placeholder-[#002828] disabled:border-2 disabled:border-amber-500" />
                </div>


                <div className=' w-full rounded sm:flex items-center justify-center'>
                    <select 
                    onChange={(e)=>setSizeWiseQuantityInput((prev)=>{
                        return{
                            ...prev,
                            size: e.target.value
                        }
                    })} 
                    className="select  w-full sm:w-[40%]"
                    >
                        {
                            size.length === 0 ? <option disabled selected>Add sizes firstly</option> : <option disabled selected>Select Size</option>
                        }
                        {
                            size.map(s => <option>{s}</option>)
                        }
                    </select>

                    <input
                        onChange={(e) => setSizeWiseQuantityInput((prev) => {
                            return {
                                ...prev,
                                quantity: e.target.value
                            }
                        })}
                    type="number"
                    placeholder={`Quantity of ${sizeWiseQuantityInput.size} size`}
                    className="input w-full my-1 ml-1 sm:w-[40%]  rounded-r-none" />

                    <div onClick={handleAddSizeWiseQuantity} className='bg-amber-500 input rounded-l-none w-[20%] p-2 text-white text-3xl font-bold flex text-center justify-center'><IoIosAdd></IoIosAdd></div>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;