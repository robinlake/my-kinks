import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import RadioButtons from './RadioButtons'
import FormGroup from './FormGroup'
enum Options {
Option1,
Option2,
Option3,
}
  
function KinkForm() {

    const radioOptions = [
        { key: 'Not Entered', value: 'NotEntered' },
        { key: 'Favourite', value: 'Favourite' },
        { key: 'Like', value: 'Like' },
        { key: 'Okay', value: 'Okay' },
        { key: 'Maybe', value: 'Maybe' },
        { key: 'No', value: 'No' },
      ]
    return (
        <div>
            <Formik
                initialValues={{
                    selectedOption: Options.Option1.toString()
                }}
                onSubmit={() => {}}
                >
                {({ values, setFieldValue }) => (
                    <Form>
                        <FormGroup title="Bodies" column1="General">
                            <RadioButtons
                            label='Skinny'
                            name='Skinny'
                            options={radioOptions}
                            />
                            <RadioButtons
                            label='Chubby'
                            name='Chubby'
                            options={radioOptions}
                            />
                        </FormGroup>
                        {/* <FormGroup title="Bodies">
                            <RadioButtons
                            label='Skinny'
                            name='Skinny'
                            options={radioOptions}
                            />
                            <RadioButtons
                            label='Chubby'
                            name='Chubby'
                            options={radioOptions}
                            />
                        </FormGroup> */}
                        <FormGroup title="Clothing">
                            <RadioButtons
                            label='Radio topic'
                            name='radioOption'
                            options={radioOptions}
                            />
                        </FormGroup>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default KinkForm
