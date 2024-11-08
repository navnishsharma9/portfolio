'use client';

import { FormContainer } from '@/components';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Field, ErrorMessage } from 'formik';
import { Textarea } from '@/components/ui/textarea';
import { Typography } from '@/components';
import { raleway } from '@/app/fonts/fonts';
import { MdOutlineWifiCalling3, MdOutlineAttachEmail } from "react-icons/md";

export default function ContactUsForm() {
    let initialValues = { name: '', organisation: "", email: "", phone: "", description: "" };

    let validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        organisation: Yup.string().required("Organisation is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        phone: Yup.string().matches(/^[0-9]+$/, "Phone number is not valid").required("Phone number is required"),
        description: Yup.string(),
    })

    const handleSubmit = ({ values, props }) => {
        console.log(values, props);
    }

    return (
        <div className='bg-[#f5f9fc] my-10 py-7'>
            <section
                id="contact Us"
                className=" space-y-12 lg:max-w-screen-xl p-7 py-16 rounded-sm mx-auto "
            >
                <Typography as="h1" className={`mx-auto`}>Get in Touch with Us</Typography>
                <Typography as="h5" className={`${raleway.className} text-center mx-auto`}>{'We’d love to hear from you! Whether you’re interested in our services, have a project idea, or just want to say hello, our team is here to help. Let us know how we can bring your vision to life.'}</Typography>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3`}>
                    <section className='flex flex-col h-full gap-2'>
                        <div className={`text-center bg-white p-4 rounded-md shadow flex-grow flex flex-col justify-center gap-0`} >
                            <div className="relative z-10 w-fit mx-auto p-3 mb-5 rounded-full bg-[#0c146fa2] tw-after"><MdOutlineAttachEmail className='w-10 h-10 mx-auto fill-white' /></div>
                            <Typography as={'h5'}>info@example.com</Typography>
                            <Typography as={'h5'} >contact@example.com</Typography>
                        </div>
                        <div className={`text-center bg-white p-4 rounded-md shadow flex-grow flex flex-col justify-center gap-0`}>
                        <div className="relative z-10 w-fit mx-auto p-3 mb-6 rounded-full bg-[#0c146fa2] tw-after"><MdOutlineWifiCalling3 className='w-10 h-10 mx-auto fill-white' />  </div>
                            <Typography as={'h5'}>+1 5589 55488 55</Typography>
                            <Typography as={'h5'}>+1 6678 254445 41</Typography>
                        </div>
                    </section>

                    <section>
                        <FormContainer
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                            className={`grid grid-cols-1 lg:grid-cols-1 gap-2 lg:p-9 bg-white rounded-md shadow `}
                        >
                            {( formikProps ) => {
                                console.log("formik=>", formikProps)
                                return (
                                    < >
                                        <div className='space-y-1'>
                                            <Label htmlFor="name" className={`text-lg tracking-wide`}></Label>
                                            <Field as={Input} name="name" placeholder={'Enter Name'} className={`px-2 py-5 text-base focus-visible::outline-none focus-visible:ring-0`} {...formikProps} />
                                            <ErrorMessage name="name" />
                                        </div>
                                        <div className='space-y-1'>
                                            <Label htmlFor="organisation" className={`text-lg tracking-wide`}></Label>
                                            <Field as={Input} name="organisation" placeholder={'Enter Orgnisation'} className={`p-2 rounded-md text-lg focus-visible::outline-none focus-visible:ring-0`}  {...formikProps} />
                                            <ErrorMessage name="organisation" />
                                        </div>
                                        <div className='space-y-1'>
                                            <Label htmlFor="email" className={`text-lg tracking-wide`}></Label>
                                            <Field as={Input} name="email" placeholder={'Enter Email'} className={`p-2 text-lg focus-visible::outline-none focus-visible:ring-0`}  {...formikProps} />
                                            <ErrorMessage name="email" />
                                        </div>
                                        <div className='space-y-1'>
                                            <Label htmlFor="phone" className={`text-lg tracking-wide`}></Label>
                                            <Field as={Input} name="phone" placeholder={'Enter Phone Number'} className={`p-2 text-lg focus-visible::outline-none focus-visible:ring-0`}  {...formikProps} />
                                            <ErrorMessage name="phone" />
                                        </div>
                                        <div className='space-y-1'>
                                            <Label htmlFor="description" className={`text-lg tracking-wide`}></Label>
                                            <Field as={Textarea} name="description" placeholder={'Enter Project Description'} className={`p-2 text-lg focus-visible::outline-none focus-visible:ring-0`}  {...formikProps} />
                                            <ErrorMessage name="description" />
                                        </div>
                                    </>
                                )
                            }}
                        </FormContainer>
                    </section>

                </div>
            </section>
        </div>

    )
}
