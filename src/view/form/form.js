/**
 * Title: Multipart Form
 * Description: This module provide the multipart form
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';
import FormContent from '../../components/FormContent/FormContent';
import Header from '../../components/header/header';
import './formStyles.css';
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='form'>
            <Header />
            <FormContent >

            </FormContent>
        </div>
    );
};

export default Form;