import './JobItem.css';

function JobItem(){
    return(
        <div className='job-item-body'>
            <div className='job-item-name-address'>
                <p>John Smith</p>
                <p>1234 North 10th St.</p>
            </div>
            <div className='job-item-distance'>
                <p>3.1 miles away</p>
            </div>
            <div className='job-item-due-date'>
                <p>March 23 - March 28</p>
            </div>
            <div className='job-item-price'>
                <p>$400</p>
            </div>
            <button className='job-item-accept-button'><p>Accept</p></button>
        </div>
    )
}

export default JobItem
