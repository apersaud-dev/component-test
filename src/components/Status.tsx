import { IStatusProps } from "../utils/interfaces";

const Status: React.FC<IStatusProps> = ({status}) => {
    
    const statusText = status === "available" ? "Available" : "Scheduled";

    return (
        <div className="status">
            <div className={`status__${status}`}></div>
            <p className="status__text">{statusText}</p>
        </div>
    )
}

export default Status;