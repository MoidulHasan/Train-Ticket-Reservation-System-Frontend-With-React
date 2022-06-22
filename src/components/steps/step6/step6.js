/**
 * Title: Multipart Form Step 4
 * Description: This module provide the multipart form's step 3's content
 * Author: Moidul Hasan Khan
 * Date: 23/06/2022
 */

// Dependencies
import React from 'react';
import utils from '../../../utils/utils';

const Step6 = ({ formData }) => {

    const { commaSeparator } = utils;


    const { Name, Gender, From, To, Date, Time, Price, Note } = formData;

    return (
        <div className='mt-5'>
            <div className='row ps-5'>
                <h6>Name: {Name}</h6>
                <h6>Gender: {Gender}</h6>
                <h6>From: {From}</h6>
                <h6>To: {To}</h6>
                <h6>Date: {Date}</h6>
                <h6>Time: {Time}</h6>
                <h6>Amount: {commaSeparator(parseInt(Price) * 1.47)}</h6>
            </div>
            <div class="col-6 ms-5">
                <textarea className='form-control shadow-none position-relative' value={Note} rows={10} readonly="readonly" />
            </div>
            {/* <div className='row d-flex justify-content-center'>
                <div class="col-6  d-flex justify-content-between">
                    <textarea className='form-control shadow-none position-relative' rows={10} />
                </div>
            </div> */}
        </div >
    );
};

export default Step6;