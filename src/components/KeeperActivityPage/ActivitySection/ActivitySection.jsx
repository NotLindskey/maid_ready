function ActivitySection({ title, jobs }) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        {jobs ? (
          jobs.length > 0 ? (
            {
                // jobs.map((job)=>(

                // ))
            }
          ) : (
            <p>no jobs found</p>
          )
        ) : (
          <p>no jobs found</p>
        )}
      </div>
    </div>
  );
}

export default ActivitySection;
