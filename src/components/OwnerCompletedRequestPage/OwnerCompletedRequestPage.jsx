import React from 'react';
import OwnerActiveRequest from '../OwnerActiveRequest/OwnerActiveRequest';
import OwnerCompletedRequest from '../OwnerCompletedRequest/OwnerCompletedRequest';

function OwnerCompletedRequestPage() {
  console.log('in the OwnerCompletedRequestPage');

  return (
    <div>
      <p>Completed Requests:</p>
      <OwnerCompletedRequest />
    </div>
  );
}

export default OwnerCompletedRequestPage;
