import React from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, Form} from 'native-base';
import FormTextInput from '../components/FormTextInput';


const Upload = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Form>
          <FormTextInput />
        </Form>
      </Content>
    </Container>
  );
};


Upload.propTypes = {
  navigation: PropTypes.object,
};


export default Upload;
