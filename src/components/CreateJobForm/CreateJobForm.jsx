import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function CreateJobForm(props) {
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Create A Job');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default CreateJobForm;