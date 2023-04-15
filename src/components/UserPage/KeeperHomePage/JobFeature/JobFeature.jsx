import './JobFeature.css';
import JobCarousel from "../JobCarousel/JobCarousel";
import { useHistory } from 'react-router-dom';
function JobFeature({title, link, jobs}){
  const history = useHistory();

    return(
        <div className="keeper-job-feature">
        <div className="keeper-header-link">
          <p className="keeper-home-link-title">{title}</p>
          <div className="keeper-home-active-navigate">
            <div className="arrow-right"></div>
            <button onClick={()=>{history.push(`${link}`)}}>view</button>
          </div>
        </div>

        <JobCarousel jobs={jobs}/>
      </div>
    )
}

export default JobFeature;