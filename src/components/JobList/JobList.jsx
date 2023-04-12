import './JobList.css';
import JobItem from '../JobItem/JobItem';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function JobList(){
    const dispatch = useDispatch();
    const jobs = useSelector(store=>store.job.jobs);

    useEffect(()=>{
        dispatch({type: "FETCH_JOBS"})
    },[])
    return(
        <div className='job-list-body'>
            <div className='job-list-container'>
                {
                    jobs.map((job)=>(
                        <JobItem
                        key={job.id}
                        owner={job.username}
                        street={job.street}
                        city={job.city}
                        state={job.state}
                        zip={job.zip}
                        price={job.price}
                        date={job.date_completed_by}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default JobList;
