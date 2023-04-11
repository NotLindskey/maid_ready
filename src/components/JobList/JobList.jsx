import './JobList.css';
import JobItem from '../JobItem/JobItem';
function JobList(){
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
