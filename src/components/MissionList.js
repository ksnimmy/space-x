import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { fetchMissions } from '../actions';
import MissionTile from './MissionTile';

class MissionList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { land_success, launch_success, launch_year } = queryString.parse(window.location.search);
        if (land_success || launch_success || launch_year) {
            const criteria = {
                landing: land_success,
                launch: launch_success,
                launchYear: launch_year
            };
            this.props.fetchMissions(criteria);
        }
        else{
            this.props.fetchMissions();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.filterApplied !== prevProps.filterApplied) {
            if (!this.props.filterApplied)
                this.props.fetchMissions();
        }
    }
    renderMissionList() {
        return this.props.missions.map((program, index) => {
            return (
                <MissionTile
                    key={index}
                    missionName={program.mission_name}
                    flightNumber={program.flight_number}
                    missionIDs={program.mission_id}
                    launchSuccess={program.launch_success}
                    landingSuccess={program.launch_landing}
                    launchYear={program.launch_year}
                    imgSrc={program.links.mission_patch_small}
                />
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderMissionList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        missions: state.missions
    }
}

export default connect(mapStateToProps, { fetchMissions })(MissionList);