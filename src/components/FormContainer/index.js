'use client';

import { Formik, Form } from "formik";
import { Button } from "../ui/button";
export default function FormContainer({ children, initialValues, validationSchema, onSubmit, className }) {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form className={className}>
                    {children(formik)}
                    <Button type="submit">Submit</Button>
                </Form>
            )}

        </Formik>
    )
}