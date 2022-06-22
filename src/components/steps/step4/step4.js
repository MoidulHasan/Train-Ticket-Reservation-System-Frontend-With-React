/**
 * Title: Multipart Form Step 4
 * Description: This module provide the multipart form's step 3's content
 * Author: Moidul Hasan Khan
 * Date: 23/06/2022
 */

// Dependencies
import React from 'react';

const Step4 = ({ register, formData, setFormData, watch }) => {

    if (!formData.Price) {
        let newFormData = formData;

        let price = Math.floor(Math.random() * 10000000000);
        price = price / 100;

        newFormData.Price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if (newFormData.Price.split('.')[1].length === 1) {
            console.log(newFormData.Price);
            newFormData.Price += '1';
            console.log(newFormData.Price);
        }
        console.log(newFormData);
        setFormData(() => newFormData);
    }



    return (
        <div className='mt-5'>
            <div className='row d-flex justify-content-center'>
                <div class="col-6 border border-1 d-flex justify-content-between">
                    <span>৳</span>
                    <span>{formData.Price}</span>
                    <input className='d-none' name="Price"  {...register("Price", { value: formData.Price })} />
                </div>
            </div>
        </div >
    );
};

export default Step4;