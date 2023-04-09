import './JobItem.css';

function JobItem(){
    return(
        <div className='job-item-body'>
            <div className='job-item-name-address'></div>
            <div className='job-item-distance'></div>
            <div className='job-item-due-date'></div>
            <button className='job-item-accept-button'>Accept</button>
        </div>
    )
}

export default JobItem
