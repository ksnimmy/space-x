import React from "react";
import { MissionCardStyle } from "../styles/MissionCard.style";

export default (props) => {
    const { missionName, missionIDs, imgSrc, flightNumber, launchYear, launchSuccess, landingSuccess } = props;
    const renderMissionIDs = () => {
        return (
            missionIDs.length ?
                <ul className="mission-list">
                    {missionIDs.map(missionId =>
                        <li key={missionId}>{missionId}</li>)
                    }
                </ul>
                : "-"
        );
    };
    return (
        <MissionCardStyle >
            <div className="program-card">
                <p className="image-box">
                    <img src={imgSrc} alt={missionName} />
                </p>
                <p className="title">
                   <strong>{`${missionName} ${flightNumber}`}</strong>
                </p>
                <div className="description">
                    <div className="line-item">
                        <strong>Mission IDs :</strong>
                        {renderMissionIDs()}
                    </div>
                    <p>
                        <strong>Launch Year :</strong>
                        <label>{launchYear}</label>
                    </p>
                    <p>
                        <strong>Successful Launch :</strong>
                        <label>{launchSuccess ? launchSuccess.toString().toUpperCase() : "-"}</label>
                    </p>
                    <p>
                        <strong>Successful Landing :</strong>
                        <label>{landingSuccess ? landingSuccess.toString().toUpperCase() : "-"}</label>
                    </p>
                </div>
            </div>
        </MissionCardStyle>
    );

};