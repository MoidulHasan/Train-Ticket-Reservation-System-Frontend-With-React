/**
 * Title: Page Navigator
 * Description: This module provide page navigation related functionalities
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';
import './pageNavigatorStyles.css'


const PageNavigator = ({ step, nextClickHandler, backClickHandler }) => {
    return (
        <div className={`d-flex ${step > 1 ? 'justify-content-between' : 'justify-content-end'} navigator`}>
            {step > 1 && <button type="button" class="btn btn-secondary" onClick={() => backClickHandler(step)}>Back</button>}
            <button type="button" class="btn btn-primary" onClick={() => nextClickHandler(step)}>Next</button>
        </div>
    );
};

export default PageNavigator;