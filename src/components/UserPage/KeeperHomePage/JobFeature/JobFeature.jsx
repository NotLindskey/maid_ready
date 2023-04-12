/* 
------------------------------------------------------
this is re-usable component to show jobs in a slide 
show 

- able to scroll through jobs (if overflow is true)
b clicking button 
- allow jobs to be put into component (dynamic job)

to use: 
- import to into your component 
- takes an array of jobs as a prop
- job will have follow the format of the job item
------------------------------------------------------
*/
import "./JobFeature.css";
import JobItem from "../../../JobItem/JobItem";

function JobFeature() {
  return (
    <div className="job-carousel-body">
      {/* <button className="job-carousel-left-button">left</button> */}
      <div className="job-carousel-job-listing-container">
        <div className="job-carousel-job-listing-container-sub">
            <JobItem width={20}/>
            <JobItem width={20}/>
            <JobItem width={20}/>
            <JobItem width={20}/>
            <JobItem width={20}/>
            <JobItem width={20}/>
            <JobItem width={20}/>
            <JobItem width={20}/>
            <JobItem width={20}/>
        </div>
      </div>
      {/* <button className="job-carousel-right-button">right</button> */}
    </div>
  );
}

export default JobFeature;
