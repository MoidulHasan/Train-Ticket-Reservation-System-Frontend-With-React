/**
 * Title: Multipart Form Step 1
 * Description: This module provide the multipart form's step 2's content
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
                    <label>From</label>
                    <select class="form-select" {...register("From")}>
                        {formData.From === "東京" ? <option selected value={'東京'}>東京</option> : <option value={'東京'}>東京</option>}
                        {formData.From === "横浜" ? <option selected value={'横浜'}>横浜</option> : <option value={'横浜'}>横浜</option>}
                        {formData.From === "名古屋" ? <option selected value={'名古屋'}>名古屋</option> : <option value={'名古屋'}>名古屋</option>}
                        {formData.From === "大阪" ? <option selected value={'大阪'}>大阪</option> : <option value={'大阪'}>大阪</option>}

                    </select>
                </div>
            </div>
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-8 form-group">
                    <label>To</label>
                    <select class="form-select" {...register("To")}>
                        {formData.To === "東京" ? <option selected value={'東京'}>東京</option> : <option value={'東京'}>東京</option>}
                        {formData.To === "横浜" ? <option selected value={'横浜'}>横浜</option> : <option value={'横浜'}>横浜</option>}
                        {formData.To === "名古屋" ? <option selected value={'名古屋'}>名古屋</option> : <option value={'名古屋'}>名古屋</option>}
                        {formData.To === "大阪" ? <option selected value={'大阪'}>大阪</option> : <option value={'大阪'}>大阪</option>}
                    </select>
                </div>
            </div>
        </div >
    );
};

export default Step2;