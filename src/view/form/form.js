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
import Step1 from '../../components/steps/step1/step1';
import PageNavigator from '../../components/pageNavigator/pageNavigator';
import Spinner from '../../components/spinner/spinner';
const Form = () => {
    // declare state
    const [step, setStep] = useState(1);
    const [stepChange, setStepChange] = useState(false);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // page navigation next button click handler
    const nextClickHandler = (step) => {
        if (step < 5)
            setStep((step) => step + 1);
        console.log(step);
    }

    // page navigation Back button click handler
    const backClickHandler = (step) => {
        if (step > 1)
            setStep((step) => step - 1);
        console.log(step);
    }

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


    // determine current step based on step state
    let currentStep;
    switch (step) {
        case 1:
            currentStep = <Step1 />;
            break;

        default:
    }

    return (
        <div className='form'>
            <Header />
            <FormContent >
                {stepChange ? <Spinner /> : currentStep}
                <PageNavigator step={step} nextClickHandler={nextClickHandler} backClickHandler={backClickHandler} />
            </FormContent>
        </div>
    );
};

export default Form;