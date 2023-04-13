import './JobItem.css';

function JobItem({width, owner, street, city, state, zip, price, date}){
    return(
        <div className='job-item-body' style={width?{width: `${width}rem`}:{}}>
            <div className='job-item-name-address'>
                <p>{owner ? owner : "John Smith"}</p>
            </div>
            <div>
                <p>{street} <br/>{city}, {state} {zip}</p>
            </div>
            <div className='job-item-distance'>
                <p>3.1 miles away</p>
            </div>
            <div className='job-item-due-date'>
                <p>March 23 - March 28</p>
            </div>
            <div className='job-item-price'>
                <p>${price}</p>
            </div>
            <button className='job-item-accept-button'><p>view</p></button>
        </div>
    )
}

export default JobItem
