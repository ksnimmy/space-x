import React from "react";
import { Helmet } from "react-helmet";
import { fetchMissions, updateLaunchYear } from "../../actions";
import { PageContainer } from "../../common/PageContainer";
import { HomeStyle } from "../../styles/Home.style";
import Filter from "../Filter";
import MissionList from "../MissionList";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applyFilter: this.props.location.search? true: false
        };
    }
    applyFilter(isApplied) {
        this.setState({
            applyFilter: isApplied
        });
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>SpaceX Launch Programs</title>
                    <meta property="og:title" content="SpaceX Launch Programs" />
                </Helmet>
                <PageContainer>
                    <HomeStyle>
                        <div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h1>SpaceX Launch Programs</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                    <Filter onFilterApply={(isApplied) => this.applyFilter(isApplied)} />
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-6 col-xs-12 program-container">
                                    <MissionList filterApplied={this.state.applyFilter} />
                                </div>
                            </div>
                        </div>
                    </HomeStyle>
                </PageContainer>
            </div>
        );
    }
}

const loadData = (store, criteria) => {
    if (criteria) {
        store.dispatch(updateLaunchYear(criteria));
        const { land_success, launch_success, launch_year } = criteria;
        return store.dispatch(
            fetchMissions({
                landing: land_success,
                launch: launch_success,
                launchYear: launch_year
            }));
    }
    else {
        return store.dispatch(fetchMissions());
    }
};
export { loadData };

export default Home;