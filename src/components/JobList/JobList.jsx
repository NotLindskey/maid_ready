import './JobList.css';
import JobItem from '../JobItem/JobItem';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
function JobList(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type: "FETCH_JOBS"})
    },[])
    return(
        <div className='job-list-body'>
            <div className='job-list-container'>
            <JobItem/>
            <JobItem/>
            <JobItem/>
            <JobItem/>
            <JobItem/>
            <JobItem/>
            <JobItem/>
            <JobItem/>
            <JobItem/>
            </div>

        </div>
    )
}

export default JobList;
