import React from 'react';
import PropTypes from 'prop-types';
import { View, Label, Item, Input } from 'native-base';

const FormTextInput = ({ style, error, ...otherProps }) => {
  return (
    <View>
      <Item>
        <Input
          {...otherProps}
        />
      </Item>
      {error !== '' && <Label>{error}</Label>}
    </View>
  );
};

FormTextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.string,
};

export default FormTextInput;
