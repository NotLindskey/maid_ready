import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PropertiesPage.css';


function PropertiesPage(props) {
  //const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Properties');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({type: 'FETCH_PROPERTIES'});
    }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <button className='btn'>Add A Property</button>
        <div className='properties-section'>
            <p>1234 Nicollet Ave Minneapolis, MN 55419</p>
            <button>Select</button>
        </div>
    </div>
  );
}

export default PropertiesPage;