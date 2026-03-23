import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = ({
  character,
  onSave,
}) => {
  return (
    <Formik
      initialValues={character}
      enableReinitialize
      validate={formValidation.validateForm}
      onSubmit={onSave}
    >
      {() => (
        <Form className={classes.root}>
          <div className={classes.header}>
            <div className={classes.imageWrapper}>
              <img src={character.image} alt={character.name} className={classes.image} />
            </div>

            <TextFieldComponent name="name" label="Name" disabled />
          </div>

          <TextFieldComponent name="status" label="Status" disabled />
          <TextFieldComponent name="species" label="Species" disabled />
          <TextFieldComponent name="gender" label="Gender" disabled />
          <TextFieldComponent name="origin" label="Origin" disabled />
          <TextFieldComponent name="location" label="Location" disabled />

          <TextFieldComponent
            name="bestSentence"
            label="Best sentence"
            multiline
            rows={4}
          />

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};