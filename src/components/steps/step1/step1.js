/**
 * Title: Multipart Form Step 1
 * Description: This module provide the multipart form's step one's content
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';

const Step1 = ({ register, formData }) => {

    console.log("From Data form step 1: ", formData)

    const Male = formData.Gender === 'Male' ? true : false;
    return (
        <div className='mt-5'>
            <div className='row d-flex justify-content-center'>
                <div class="col-8 form-group">
                    <label>Name</label>
                    <input type="text" class="form-control shadow-none" autocomplete="off" name='Name' {...register("Name", { required: true })} value={formData.Name !== '' ? formData.Name : ''} />
                </div>
            </div>
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-8 form-group">
                    <label>Gender</label>
                    <div className='ms-5'>
                        <div class="form-check">
                            {Male && <input class="form-check-input" type="radio" checked name="Gender" value="Male" {...register("Gender")}
                            />}

                            {!Male && <input class="form-check-input" type="radio" name="Gender" value="Male" {...register("Gender")}
                            />}

                            <label class="form-check-label" >
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            {!Male && <input class="form-check-input" type="radio" checked name="Gender" value="Female" {...register("Gender")} />}
                            {Male && <input class="form-check-input" type="radio" name="Gender" value="Female" {...register("Gender")} />}

                            <label class="form-check-label" >
                                Female
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Step1;