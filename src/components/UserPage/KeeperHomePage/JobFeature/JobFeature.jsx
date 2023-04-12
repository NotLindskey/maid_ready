import './JobFeature.css';
import JobCarousel from "../JobCarousel/JobCarousel";

function JobFeature({title, link}){
    return(
        <div className="keeper-job-feature">
        <div className="keeper-header-link">
          <p className="keeper-home-link-title">{title}</p>
          <div className="keeper-home-active-navigate">
            <div className="arrow-right"></div>
            <button>view</button>
          </div>
        </div>

        <JobCarousel jobs={[]}/>
      </div>
    )
}

export default JobFeature;