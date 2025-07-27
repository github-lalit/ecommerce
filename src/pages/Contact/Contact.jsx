import React, { useEffect, useState } from 'react'

const Contact = () => {
    const initialValue = {
        userName: "",
        email: "",
        phone: "",
    }
    const [formValues, setFormValues] = useState(initialValue);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect((formErrors) => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const nameRegex = new RegExp(`/^[a-zA-Z0-9._]+$/`);
        const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const phoneRegex = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);
        // const regex = '/^([a-z0-9]{5,})$/';
        if(!values.userName) {
            errors.userName = 'Username is required'
        } else if (!nameRegex.test(values.userName)) {
            errors.userName = 'Username is invalid'
        }
        if(!values.email) {
            errors.email = 'email is required'
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'email is invalid'
        }
        if(!values.phone) {
            errors.phone = 'phone is required'
        } else if (!phoneRegex.test(values.phone)) {
            errors.phone = 'phone is invalid'
        }
        return errors;
    }


  return (
    <>
        <div className="max-w-[1000px] m-auto my-5 grid md:grid-cols-2 sm:justify-center gap-3 md:justify-between items-baseline p-3">
            <div className="grid gap-5 p-5">
                <div className="grid justify-start items-center sm:text-5sm md:text-xl md:gap-1">
                    <span className="font-bold text-gray-700">Email: </span>
                    <span className="font-normal text-gray-800">lalitk724@gmail.com, test@test.com</span>
                </div>
                <div className="grid justify-start items-center sm:text-5sm md:text-xl md:gap-1">
                    <span className="font-bold text-gray-700">Phone: </span>
                    <span className="font-normal text-gray-800">9716366508, 9999111333</span>
                </div>
                <div className="grid justify-start items-center sm:text-5sm md:text-xl md:gap-1">
                    <span className="font-bold text-gray-700">Address: </span>
                    <span className="font-normal text-gray-800">Uttam Nagar, New Delhi, Pin - 110059</span>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="sm:w-[400px] grid gap-3 bg-gray-100 p-5 rounded">
                <div className="w-full grid text-1xl text-gray-700">
                    <label className="pb-1">Name</label>
                    <input type="text" name="userName" onChange={handleChange} value={formValues.userName} className="border rounded border-orange-100 outline-none px-3 py-2" />
                    <small className="text-red-500">{formErrors.userName}</small>
                </div>
                <div className="w-full grid text-1xl text-gray-700">
                    <label className="pb-1">Email</label>
                    <input type="text" name="email" onChange={handleChange} value={formValues.email} className="border rounded border-orange-100 outline-none px-3 py-2" />
                    <small className="text-red-500">{formErrors.email}</small>
                </div>
                <div className="w-full grid text-1xl text-gray-700">
                    <label className="pb-1">Phone</label>
                    <input type="text" name="phone" onChange={handleChange} value={formValues.phone} className="border rounded border-orange-100 outline-none px-3 py-2" />
                    <small className="text-red-500">{formErrors.phone}</small>
                </div>
                <div className="w-full grid text-1xl text-gray-700">
                    <label className="pb-1">Message</label>
                    <textarea type="text" className="border rounded border-orange-100 outline-none px-3 py-2"></textarea>
                </div>
                <div className="w-full grid text-1xl text-gray-700">
                    <button type="submit" className="bg-gray-800 text-gray-50 w-[200px] m-auto py-3 rounded text-1xl hover:bg-gray-600 hover:text-gray-100">Send</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Contact