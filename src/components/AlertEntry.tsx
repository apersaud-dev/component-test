import { IAlertDataProps } from "../utils/interfaces";

const AlertEntry: React.FC<IAlertDataProps> = ({alertData}) => {
    return (
        <ul>
            <li className="alert__entry">
                <p className="alert__data">Device: {alertData.device}, Path: {alertData.path}</p>
            </li>
        </ul>
    )
}

export default AlertEntry;