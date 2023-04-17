import React from 'react';
import Form from '../../components/form';
import {Wrapper} from './styles';

interface Props {
  navigation: any;
}

function AddTask({navigation}: Props) {
  return (
    <Wrapper>
      <Form navigation={navigation} />
    </Wrapper>
  );
}

export default AddTask;
