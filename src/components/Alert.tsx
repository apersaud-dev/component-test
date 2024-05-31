import { IAlertProps, File, Accumulator } from "../utils/interfaces";
import AlertEntry from "./AlertEntry";

const Alert: React.FC<IAlertProps> = ({displayDownloads, toggleDisplayDownloads, files}) => {

    if (!displayDownloads) {
        return null;
    }

    const availableFiles = files.filter(file => file.status === "available").sort((a, b) => (a.device > b.device) ? 1 : -1);
    const unavailableFiles = files.filter(file => file.status !== "available").sort((a, b) => (a.device > b.device) ? 1 : -1);

    return(
        <div className="alert__overlay">
            <div className="alert">
                <h2>Downloaded Files</h2>
                <div className="alert__close">
                    <button 
                        type="button"
                        aria-label="Close downloaded files modal"
                        className="alert__closeButton"
                        onClick={() => toggleDisplayDownloads(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z" />
                        </svg>
                    </button>
            </div>
            {availableFiles.length === 0 ? 
                null
                :
                <div className="alert__available">
                    <h4 className="alert__availableInfo">The following selected items are available for download:</h4>
                    {availableFiles.map((entry, i) => {
                        return (
                            <AlertEntry 
                                key={`${i}-${entry.device}-${entry.name}`} 
                                alertData={entry} 
                            />
                        )
                    })}
                </div>
            }
            {unavailableFiles.length === 0 ? 
                null
                :
                <div className="alert__unavailable">
                    <h4 className="alert__unavailableInfo">The following selected items are still processing and unavailable for download:</h4>
                    {unavailableFiles.map((entry, i) => {
                        return (
                            <AlertEntry 
                                key={`${i}-${entry.device}-${entry.name}`} 
                                alertData={entry} 
                            />
                        )
                    })}
                </div>
            }
            </div>
        </div>
    )
}

export default Alert;