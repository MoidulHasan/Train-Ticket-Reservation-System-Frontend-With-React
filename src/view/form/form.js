/**
 * Title: Multipart Form
 * Description: This module provide the multipart form
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import FormContent from '../../components/FormContent/FormContent';
import Header from '../../components/header/header';
import './formStyles.css';
import { useForm } from "react-hook-form";
import PageNavigator from '../../components/pageNavigator/pageNavigator';
import Spinner from '../../components/spinner/spinner';
import utils from '../../utils/utils';



const Form = () => {
    // declare states
    const [step, setStep] = useState(1);
    const [stepChange, setStepChange] = useState(false);
    const [formData, setFormData] = useState({});


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const formSubmitHandler = data => console.log(data);

    // get current step based on step number
    const { currentStep, decrypt } = utils;
    const stepNow = currentStep(step, register, formData, setFormData, watch);



    // change stepChange state value
    const changeStepStatus = () => {
        setStepChange(true);
    }

    // call stepChangeStatus for making stepChange true on step change for render loader
    useEffect(changeStepStatus, [step]);

    // change stepChange state to false for removing loader and render current step after 1 second
    setTimeout(() => {
        setStepChange(false);
    }, 1000);

    // console.log(step);

    // console.log("Form Data: ", formData)



    // get form data from local storage if it is saved and set it to formData state
    useEffect(() => {
        const formData = JSON.parse(decrypt(localStorage.getItem('formData')));
        // console.log("local form data1: ", formData);
        if (formData) {
            setFormData(formData);
        }
    }, []);


    return (
        <div className='form'>
            <Header />
            <FormContent handleSubmit={handleSubmit} formSubmitHandler={formSubmitHandler} >
                {stepChange ? <Spinner /> : stepNow}
                <PageNavigator step={step} setStep={setStep} watch={watch} formData={formData} setFormData={setFormData} />
            </FormContent>
        </div>
    );
};

export default Form;