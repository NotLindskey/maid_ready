import React from 'react';
import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';

function OwnerActiveRequestList() {
  console.log('in the OwnerActiveRequestPage');

  return (
    <div>
      <p>Active Requests:</p>
      <OwnerActiveRequest />
    </div>
  );
}

export default OwnerActiveRequestList;