import React, { useState } from 'react';
import picUploadLogo from '../../assets/images/dribbble_1.gif';
import { IoIosAdd } from 'react-icons/io';


const AddProduct = () => {

    // ================= Handle Form Data ==================
    const [data, setData] = useState({
        model: "",
        name: "",
        rating: 0,
        review: [],
        type: "",
        image: "",
        size: [],
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
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
// =================================================================

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
            // setData((prev)=>{
            //     return {
            //         ...prev,
            //         [size]: (prev)=>  [...prev, sizeInput]
                    
            //     }
            // })
            data.size.push(sizeInput)
            setSizeInput('')
            console.log(data.size);
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
        data.sizeWiseQuantity.push(sizeWiseQuantityInput)
    }
}
// =========================================================


// =================== Handle Form  ========================
const handleFormSubmit = (e) =>{
    e.preventDefault()
    console.log(data);
    console.log('asd');
}
// =========================================================


    // console.log(data);

    return (
        <div className='min-h-screen text-center '>
            <h1 className='text-amber-400  mt-10 mb-4 font-bold text-2xl'>Upload New Product</h1>

            <form onSubmit={handleFormSubmit} className='text-gray-400 px-4 pb-40' action="">
                

                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input name='name' value={data.name} onChange={handleOnChange} required type="text" placeholder="Product Name" className="input w-full my-1 sm:w-3/5" />

                    <select name='category' value={data.category} onChange={handleOnChange} required className="select sm:ml-1 w-full sm:w-2/5">
                        <option disabled selected>Select Category</option>
                        <option>Shirt</option>
                        <option>T-Shirt</option>
                        <option>Jeans</option>
                        <option>Shoe</option>
                    </select>
                </div>


                <label htmlFor="productImage" className=' my-1 w-full bg-white rounded flex items-center justify-center relative hover:opacity-90  hover:font-bold '>
                    {/* <label htmlFor="productImage"> */}
                        <img className='w-[180px]' src={picUploadLogo} alt="" />
                        <div className='absolute top-[60%] left-[38%]'>
                            <p className=''>Uppload Image</p>
                        </div>
                        <input type="file" className='hidden' name="productImage" id="productImage" required />
                    {/* </label> */}
                    {/* <BsCloudUpload></BsCloudUpload> */}
                    
                </label>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input name='price' value={data.price} onChange={handleOnChange} required type="text" placeholder="Product Price" className="input w-full" />

                    <input name='model' value={data.model} onChange={handleOnChange} required type="text" placeholder="Product model" className="input sm:ml-1 w-full my-1" />
                </div>


                <div className=' mb-2 w-full rounded sm:flex items-center justify-center'>
                    <select name='type' value={data.type} onChange={handleOnChange} required className="select  w-full sm:w-2/5">
                        <option disabled selected>Select Type</option>
                        <option>Formal</option>
                        <option>Casual</option>
                    </select>

                    <input name='composition' value={data.composition} onChange={handleOnChange} type="text" placeholder="Product Composition" required className="input w-full sm:ml-1" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input name='quantity' value={data.quantity} onChange={handleOnChange} type="text" placeholder="Quantity" required className="input w-full" />
                    <input name='style' value={data.style} onChange={handleOnChange} type="text" placeholder="Style" required className="input sm:ml-1 w-full" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input name='properties' value={data.properties} onChange={handleOnChange} type="text" placeholder="Properties" required className="input w-full" />
                    <input name='categoryId' value={data.categoryId} onChange={handleOnChange} type="text"  placeholder="Category Id" required className="input sm:ml-1 w-full my-1" />
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <textarea name='details' required value={data.details} onChange={handleOnChange} className="textarea w-full" placeholder="Product Detail"></textarea>
                </div>
                

                <div className=' w-full rounded flex items-center justify-center'>
                    <input type="text" placeholder={size.length === 0 ? `Product Size` : size.map(x => x)} disabled className="input rounded-r-none w-[60%] disabled:bg-yellow-100   disabled:placeholder-[#002828] disabled:border-2 disabled:border-amber-500" required />

                    <input type="text" onChange={getData} name='productSize' placeholder="Add size" value={sizeInput} className="input rounded-none w-[30%] my-1 focus:outline-none" />

                    <div onClick={handleAddSize} className='bg-amber-500 input rounded-l-none w-[10%] p-2 text-white text-3xl font-bold'><IoIosAdd></IoIosAdd></div>
                </div>


                <div className=' my-1 w-full rounded sm:flex items-center justify-center'>
                    <input type="text" placeholder={sizeWiseQuantity.length === 0 ? `Product size name : Quantity of that size` : sizeWiseQuantity.map(x => `${x.size}:${x.quantity}`)} disabled className="input  w-full disabled:bg-yellow-100   disabled:placeholder-[#002828] disabled:border-2 disabled:border-amber-500" />
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
                    className="input w-full my-1 sm:ml-1 sm:w-[40%]  sm:rounded-r-none" />

                    <div onClick={handleAddSizeWiseQuantity} className='bg-amber-500 input sm:rounded-l-none sm:w-[20%] p-2 text-white text-3xl font-bold flex text-center justify-center'><IoIosAdd></IoIosAdd></div>
                </div>


                <div className=' my-4 w-full rounded sm:flex items-center justify-center'>
                    <button className='bg-amber-500 text-white font-bold w-[60%] p-2 rounded-full hover:border-2 hover:border-amber-500 hover:text-amber-400 hover:bg-[#002828]' type="submit">Upload Product</button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;