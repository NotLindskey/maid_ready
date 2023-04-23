import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import '../App/App.css';

// component displaying MR cleaning standards
// user arrives on this page after clicking link in LandingPage.jsx
function CleaningStandards() {
    const history = useHistory();

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Maid Ready Cleaning Standards'

  const [heading, setHeading] = useState('Maid Ready Cleaning Standards');

  const goBack = () => {
    history.push('/');      
}

  return (
    <div>
        <div>
            <h2>{heading}</h2>
            <ol>
                <li>Strip the beds, start load of sheets, if multiple sheets are provided make the bed with the second set that is provided.</li>
                <li>Wash the comforter and shams (if requested by owner) will be extra charge.</li>
                <li>Wipe down nightstands, dresser and if needed tv.</li>
                <li>Clean bathroom: wipe down counters, sink, toilet (don't forget the base of toilet and neck), tub, mirror, stock paper products, remove any trash. (Repeat if multiple bathrooms)</li>
                <li> Check supply of hand soap and lotion, fill if necessary.</li>
                <li>Check supply of hand soap and lotion, fill if necessary.</li>
                <li>Clean kitchen: wipe down counters, appliances (stove top, fridge front) dishwasher, check inside fridge for any food left behind, remove any trash.</li>
                <li>Check all drawers and cabinets for dishes, utensils, pots and pans (inventory)</li>
                <li>Check supply of soap</li>
                <li>Clean the living room: wipe down tv stand, tv, side tables, coffee tables, lamps.</li>
                <li>Wipe windowsills</li>
                <li>Sweep/dust mop/vacuum the whole house/apartment</li>
                <li>If balcony or porch is on property may sure to dust/sweep for cob webs.</li>
            </ol>
      </div>
      <div>
        <h2>**Make sure to wipe down all doorknobs, handles and light switches**</h2>
        <ul>
            <li>Windex</li>
            <li>Clorox</li>
            <li>Toilet Paper</li>
            <li>Paper Towels</li>
            <li>Liquid Handsoap</li>
            <li>Broom Dustpan</li>
            <li>Dust Mop</li>
            <li>Cleaning Rags</li>
        </ul>
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <p style={{textAlign:'center'}}>Become A Keeper!</p>
        {/* line to break table to the next row */}
        <div className="break"></div>
        <button className='btn' style={{alignSelf:'center'}} onClick={goBack}>Back</button>
      </div>

    </div>
  );
}

export default CleaningStandards;
