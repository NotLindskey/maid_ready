import JobItem from "../../JobItem/JobItem";

function ActivitySection({ title, jobs }) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        {jobs.map((job) => (
          <JobItem
            // defeault value
            key={job.id}
            // display option
            id={job.id}
            owner={job.username}
            street={job.street}
            city={job.city}
            state={job.state}
            zip={job.zipcode}
            price={job.price}
            date={job.date_completed_by}
            // button
            claimed={job.claimed}
            status={job.status}
            keeper_id={job.keeper_id}
            width={60}
          />
        ))}
        {/* {jobs ? (=
          jobs.length > 0 ?
          {
            jobs.map((jobs)=>{return()})
          } : (
            <p>no jobs found</p>
          )
        ) : (
          <p>no jobs found</p>
        )} */}
      </div>
    </div>
  );
}

export default ActivitySection;
