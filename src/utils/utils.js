/**
 * Title: Error Handler
 * Description: This module provide form fields error handlers
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
// import CryptoJS from "crypto-js";
import Step1 from "../components/steps/step1/step1";
import CryptoJS from "crypto-js";




// module scafolding
const utils = {};

// Return error based on step and fileds
utils.errorHandler = (step, watch) => {
    let error;

    // vaidate fileds for step 1
    if (step === 1 && watch("Name") === '') {
        error = <h5 className='text-danger text-center'> <i class="fa-solid fa-triangle-exclamation" />  <span>Name is required</span> </h5>;
    }
    else {
        error = "";
    }
    return error;
};


// find current step content based on step number
utils.currentStep = (step, register, formData) => {
    let currentStep;
    switch (step) {
        case 1:
            currentStep = <Step1 register={register} formData={formData} />;
            break;

        default:
    }

    return currentStep;
}

// set formData state based on step number
utils.updateData = (watch, step, formData) => {
    let updatedFormData = formData;

    switch (step) {
        case 1:
            updatedFormData.Name = watch("Name");
            updatedFormData.Gender = watch("Gender") ? watch("Gender") : "";
            break;
        default:
            updatedFormData = formData;
    }

    return updatedFormData;
};


// encrypt string
utils.encrypt = (string) => {
    // encrypting String //
    return CryptoJS.AES.encrypt(string, 'guygfsduyghfsduygh').toString();
};

// decrypt string
utils.decrypt = (string) => {
    // const bytes = CryptoJS.AES.decrypt(string, 'guygfsduyghfsduygh');
    const decrypted = CryptoJS.AES.decrypt(string, "guygfsduyghfsduygh");

    return decrypted.toString(CryptoJS.enc.Utf8);
};

// save form data to local storage on change
utils.saveData = (formData) => {
    localStorage.setItem('formData', utils.encrypt(JSON.stringify(formData)));
}

// get data from local storage
utils.getData = () => {
    const formData = JSON.parse(utils.decrypt(localStorage.getItem('formData')));
    return typeof formData === 'object' ? formData : null;
}



export default utils;