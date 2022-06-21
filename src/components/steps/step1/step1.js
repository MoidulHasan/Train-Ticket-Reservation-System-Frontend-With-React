/**
 * Title: Multipart Form Step 1
 * Description: This module provide the multipart form's step one's content
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';

const Step1 = () => {
    return (
        <div className='mt-5'>
            <div className='row d-flex justify-content-center'>
                <div class="col-8 form-group">
                    <label>Name</label>
                    <input type="text" class="form-control shadow-none" />
                </div>
            </div>
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-8 form-group">
                    <label>Gender</label>
                    <div className='ms-5'>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                            <label class="form-check-label" for="gridRadios1">
                                First radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">
                                Second radio
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Step1;