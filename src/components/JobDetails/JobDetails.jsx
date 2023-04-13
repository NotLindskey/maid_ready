import './JobDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function JobDetails(){
    const params = useParams();
    const jobId = params.id;

    const dispatch = useDispatch();
    const details = useSelector(store=>store.job.job_detail);

    useEffect(()=>{

    },[])

    return(
        <div>job details page</div>
    )
}

export default JobDetails;
