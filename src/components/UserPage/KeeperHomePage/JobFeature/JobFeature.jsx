import './JobFeature.css';
import JobCarousel from "../JobCarousel/JobCarousel";

function JobFeature(){
    return(
        <div className="keeper-job-feature">
        <div className="keeper-header-link">
          <p className="keeper-home-link-title">Pervious Jobs</p>
          <div className="keeper-home-active-navigate">
            <div className="arrow-right"></div>
            <p>view</p>
          </div>
        </div>

        <JobCarousel />
      </div>
    )
}

export default JobFeature;