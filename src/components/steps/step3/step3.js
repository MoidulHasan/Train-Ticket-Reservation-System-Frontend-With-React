/**
 * Title: Multipart Form Step 3
 * Description: This module provide the multipart form's step 3's content
 * Author: Moidul Hasan Khan
 * Date: 22/06/2022
 */

// Dependencies
import React from 'react';

const Step2 = ({ register, formData }) => {

    return (
        <div className='mt-5'>
            <div className='row d-flex justify-content-center'>
                <div class="col-8 form-group">
                    <label>Date</label>
                    <br />
                    <input className='form-control' type={"date"} name="Date" value={formData.Date} {...register("Date")} />
                </div>
            </div>
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-8 form-group">
                    <label>Time</label>
                    <br />
                    <input className='form-control' name="Time" type="text" value={formData.Time} {...register("Time")} />
                </div>
            </div>
        </div >
    );
};

export default Step2;