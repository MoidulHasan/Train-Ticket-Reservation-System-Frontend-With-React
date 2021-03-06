/**
 * Title: Error Handler
 * Description: This module provide form fields error handlers
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import CryptoJS from "crypto-js";
import Step1 from "../components/steps/step1/step1";
import Step2 from "../components/steps/step2/step2";
import Step3 from "../components/steps/step3/step3";
import Step4 from "../components/steps/step4/step4";
import Step5 from "../components/steps/step5/step5";
import Step6 from "../components/steps/step6/step6";




// module scafolding
const utils = {};

// return error message based on step number
const errorMessage = (step, watch) => {
    let error;

    if (step === 1 && watch("Name") === '') {
        error = ' Name is required';
    }
    else if (step === 2) {
        if (watch("From") === watch("To"))
            error = ' Both stations can not be identical.';
        else if (watch("From") === '' || watch("To") === '')
            error = ' Both stations can not be identical.';
    }
    else if (step === 3 && (watch("Date") === "" || watch("Time") === "")) {
        error = ' Date and time is required.';
    }
    else if (step === 5 && watch("Note") === '') {
        error = ' Note is required.';
    }
    else {
        error = null;
    }
    return error;
}

// Return error based on step and fileds
utils.errorHandler = (step, watch) => {
    let error = errorMessage(step, watch) !== null ? <h5 className='text-danger text-center'> <i class="fa-solid fa-triangle-exclamation" />  <span>{errorMessage(step, watch)}</span> </h5> : "";
    return error;
};


// find current step content based on step number
utils.currentStep = (step, register, formData, setFormData, watch) => {
    let currentStep;
    switch (step) {
        case 1:
            currentStep = <Step1 register={register} formData={formData} />;
            break;
        case 2:
            currentStep = <Step2 register={register} formData={formData} watch={watch} />;
            break;
        case 3:
            currentStep = <Step3 register={register} formData={formData} watch={watch} />;
            break;
        case 4:
            currentStep = <Step4 register={register} formData={formData} watch={watch} setFormData={setFormData} />;
            break;
        case 5:
            currentStep = <Step5 register={register} formData={formData} watch={watch} setFormData={setFormData} />;
            break;
        case 6:
            currentStep = <Step6 formData={formData} />;
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
        case 2:
            updatedFormData.From = watch("From");
            updatedFormData.To = watch("To");
            break;
        case 3:
            updatedFormData.Date = watch("Date");
            updatedFormData.Time = watch("Time");
            break;
        case 4:
            updatedFormData.Price = watch("Price");
            break;
        case 5:
            updatedFormData.Note = watch("Note");
            break;
        default:
            updatedFormData = formData;
    }

    console.log("Updated Data: ", updatedFormData)

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


//  8 digit random number generator
utils.randomNumber = () => {
    let price = Math.floor(Math.random() * 10000000000);
    price = price / 100;
    if (price.toString().split('.')[1].length === 1) {
        price += '1';
    }
    return price;
}

// comma separator
utils.commaSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default utils;