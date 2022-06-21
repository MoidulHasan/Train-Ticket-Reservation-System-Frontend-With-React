/**
 * Title: Page Navigator
 * Description: This module provide page navigation related functionalities
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';
import './pageNavigatorStyles.css'


const PageNavigator = () => {
    return (
        <div className='d-flex justify-content-between navigator'>
            <button type="button" class="btn btn-secondary">Back</button>

            <button type="button" class="btn btn-primary">Next</button>

        </div>
    );
};

export default PageNavigator;