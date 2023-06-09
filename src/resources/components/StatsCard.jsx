import '../stylesheets/statscard.css';

const StatsCard = () => {
    return(
        <div id='stats-card'>
            <div id='data'>
                <div id='capped&raisedAmount'>
                    <p className='stats-title'>$89,914</p>
                    <small className='stats-details'>of $100,000 backed</small><hr className='mobile-stats-hr' />
                </div><hr className='desktop-stats-hr' />
                <div id='backers'>
                    <p className='stats-title'>5,007</p>
                    <small className='stats-details'>total backers</small><hr className='mobile-stats-hr' />
                </div><hr className='desktop-stats-hr' />
                <div id='timeline'>
                    <p className='stats-title'>56</p>
                    <small className='stats-details'>days left</small><hr className='mobile-stats-hr' />
                </div>
            </div>
            <div id='scale-and-calibrator'>
                <p id='scale'><li id='calibrator'></li></p>
            </div>
        </div>
    );
};

export default StatsCard;