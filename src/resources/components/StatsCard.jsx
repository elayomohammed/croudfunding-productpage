import '../stylesheets/statscard.css';

const StatsCard = () => {
    return(
        <div id='stats-card'>
            <div id='data'>
                <div id='capped&raisedAmount'>
                    <p class='stats-title'>$89,914</p>
                    <small class='stats-details'>of $100,000 backed</small>
                </div><hr />
                <div id='backers'>
                    <p class='stats-title'>5,007</p>
                    <small class='stats-details'>total backers</small>
                </div><hr />
                <div id='timeline'>
                    <p class='stats-title'>56</p>
                    <small class='stats-details'>days left</small>
                </div>
            </div>
            <div id='scale&calibrator'>
                <li id='scale'><li id='calibrator'></li></li>
            </div>
        </div>
    );
};

export default StatsCard;