'use client';

import { Formik, Form, Field } from 'formik';
import React from 'react';
import Button from './Button';
import checkValidation from '@/lib/validation';
import TextInput from './TextInput';
import TextArea from './TextArea';
import clsx from 'clsx';

type Props = {};

const CustomForm = ({ buttonStyle, fields, formMethod, wrapperClass, ...rest }: Props) => {
  const formProps = {};

  if (formMethod) {
    formProps.method = formMethod;
  }

  return (
    <Formik {...rest}>
      {({ isSubmitting }) => (
        <Form className={clsx('form relative', {
          [wrapperClass || '']: !!wrapperClass,
        })} {...formMethod}>
          {fields.map(
            ({
              id,
              component,
              __component,
              field_id,
              initialvalue,
              validation,
              ...rest
            }) => {
              const fieldProps = Object.keys(rest).reduce((acc, key) => {
                if (rest[key]) {
                  return {
                    ...acc,
                    [key]: rest[key],
                  };
                }
                return acc
              }, {});

              if (component === 'TextArea') {
                return (
                  <Field
                    key={id}
                    id={field_id}
                    component={TextArea}
                    {...fieldProps}
                  />
                );
              } else {
                return (
                  <Field
                    key={id}
                    id={field_id}
                    component={TextInput}
                    validate={(value) => {
                      let message = '';
                      for (let i = 0; i < validation.length; i++) {
                        const { validationType, ...rest } = validation[i];
                        const res = checkValidation[validationType]({
                          value,
                          ...rest,
                        });
                        if (res) {
                          message = res;
                          break;
                        }
                      }
                      return message;
                    }}
                    {...fieldProps}
                  />
                );
              }
            },
          )}
          <Button className={clsx({
            [buttonStyle || '']: !!buttonStyle,
          })} variant="primary" as="button" type="submit">
            {isSubmitting ? 'Please wait...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
