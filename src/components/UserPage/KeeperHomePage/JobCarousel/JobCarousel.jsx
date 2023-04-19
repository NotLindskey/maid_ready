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
import "./JobCarousel.css";
import JobItem from "../../../JobItem/JobItem";


function JobCarousel({ jobs }) {
  return (
    <div className="job-carousel-body">
      {/* <button className="job-carousel-left-button">left</button> */}
      <div className="job-carousel-job-listing-container">
        <div className="job-carousel-job-listing-container-sub">
          {jobs ? (
            jobs.map((job) => (
              <JobItem
                width={20}
                key={job.id}
                id={job.id}
                owner={job.username}
                street={job.street}
                city={job.city}
                state={job.state}
                zip={job.zipcode}
                price={job.price}
                date={job.date_completed_by}
              />
            ))
          ) : (
            <p> no jobs </p>
          )}
        </div>
      </div>
      {/* <button className="job-carousel-right-button">right</button> */}
    </div>
  );
}

export default JobCarousel;
