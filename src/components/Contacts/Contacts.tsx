import { Field, Form, Formik, useField } from 'formik'
import React from 'react'

type MyFormValues = {
  name: string
  email: string
  text: string
}

const Contacts = () => {
  const initialValues: MyFormValues = {
    name: '',
    email: '',
    text: '',
  };

  const MyTextArea = ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    return (
      <>
        <textarea className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  const sendDataToEmailApi = (values: MyFormValues) => {
    alert(JSON.stringify(values, null, 2));
    return true;
  };

  const handleSubmit = (values: MyFormValues, { setSubmitting, resetForm }: any) => {
    const emailWasSent = sendDataToEmailApi(values);
    if (emailWasSent) {
      resetForm();
      setSubmitting(false);
    }
  };
  return (
    <div className="contacts">
      <div className="block-title">- CONTACTS</div>
      <div className="in">
        <div className="left">
          <div className="block-subtitle">Get in touch</div>
          <div className="text-in">
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me.</p>
            <h6><a href="mailto:ksushaa19@gmail.com">ksushaa19@gmail.com</a></h6>
            <h6>Kiev, Ukraine</h6>
          </div>
        </div>
        <div className="right">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form className='form-style'>
              <div className="f-item">
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="f-item">
                <Field
                  id="email"
                  name="email"
                  placeholder="Your email"
                  type="email"
                />
              </div>
              <div className="f-item">
                <MyTextArea
                  name="text"
                  rows="6"
                  placeholder="Write something.."
                />
              </div>
              <div className="f-item">
                <button type="submit" className="styled-btn styled-btn-1">Send</button>
              </div>
            </Form>

          </Formik>
        </div>




        {/* <form className="right form-style">
          <div className="f-item">
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="f-item">
            <input type="text" name="email" placeholder="Your email" />
          </div>
          <div className="f-item">
            <textarea name="text" placeholder="Write something.."></textarea>
          </div>
          <div className="f-item">
            <button className="styled-btn styled-btn-1">Send</button>
          </div>
        </form> */}


        
      </div>
    </div>
  )
}

export default Contacts