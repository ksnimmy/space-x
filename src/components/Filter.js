import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { Button } from '../common/Button'
import { FilterStyle } from '../styles/Filter.style';
import { fetchMissions } from '../actions';
import { CONSTANTS } from '../helpers/constants';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launchYear: '',
            launch: '',
            landing: ''
        };
    }
    componentDidMount() {
        if (Object.keys(this.props.filter).length) {
            const { launch_year, launch_success, land_success } = this.props.filter;
            this.setState({
                launchYear: launch_year,
                launch: launch_success,
                landing: land_success
            });
        }
    }
    filterProgramsByLaunchYear(criteria) {
        this.setState({ launchYear: criteria }, () => {
            this.filterPrograms();
        });
    }
    filterProgramsByLaunch(criteria) {
        this.setState({ launch: criteria }, () => {
            this.filterPrograms();
        });
    }
    filterProgramsByLanding(criteria) {
        this.setState({ landing: criteria }, () => {
            this.filterPrograms();
        });
    }
    filterPrograms() {
        const { launchYear, launch, landing } = this.state;
        this.props.fetchMissions({ launchYear, launch, landing });
        this.props.onFilterApply(true);
        this.props.history.push({
            pathname: '/',
            search: `?launch_year=${launchYear}&launch_success=${launch}&land_success=${landing}`
        });
    }
    onResetFilter() {
        this.props.onFilterApply(false)
        this.setState({
            launchYear: '',
            launch: '',
            landing: ''
        }, () => {
            this.props.history.push({
                pathname: '/',
                search: `?`
            });
        });
    }
    renderLaunchYear() {
        return CONSTANTS.LAUNCH_YEAR_FILTER.map(item => {
            return (
                <Button key={item} className={item === this.state.launchYear ? 'active' : ''} type="buttton" onClick={() => this.filterProgramsByLaunchYear(item)} >{item}</Button>
            );
        });
    }
    render() {
        const { launch, landing } = this.state;
        const launchClass = launch === '' ? '' : launch ? 'active' : '';
        return (
            <FilterStyle>
                <h3 className="title">Filters</h3>
                <div className="criteria">
                    <h4>Launch Year</h4>
                    <div>
                        {this.renderLaunchYear()}
                    </div>
                </div>
                <div className="criteria">
                    <h4>Successfull Launch</h4>
                    <div>
                        <Button type="buttton"
                            className={launch === '' ? '' : launch ? 'active' : ''}
                            onClick={() => this.filterProgramsByLaunch(true)} >
                            True
                        </Button>
                        <Button type="buttton"
                            className={launch === '' ? '' : !launch ? 'active' : ''}
                            onClick={() => this.filterProgramsByLaunch(false)} >
                            False
                        </Button>
                    </div>
                </div>
                <div className="criteria">
                    <h4>Successfull Landing</h4>
                    <div>
                        <Button type="buttton"
                            className={landing === '' ? '' : landing ? 'active' : ''}
                            onClick={() => this.filterProgramsByLanding(true)}>
                            True
                        </Button>
                        <Button type="buttton"
                            className={landing === '' ? '' : !landing ? 'active' : ''}
                            onClick={() => this.filterProgramsByLanding(false)}>
                            False
                        </Button>
                    </div>
                    <a className="btn btn-link btn-reset-filter" onClick={() => this.onResetFilter()}>Reset filter</a>
                </div>
            </FilterStyle>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps, {
    fetchMissions
})(withRouter(Filter));