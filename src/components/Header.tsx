import TriStateCheckbox from "./TriStateCheckbox";
import DownloadButton from "./DownloadButton";
import { IHeaderProps } from "../utils/interfaces";


const Header: React.FC<IHeaderProps> = ({ checkedEntries,checkboxValue, toggleAllCheckboxes, toggleDisplayDownloads}) => {

    const display = checkedEntries.length === 0 ? "None Selected" : `Selected ${checkedEntries.length}`;
    
    return (
        <div className="header">
            <TriStateCheckbox 
                id="selectAll"
                name="selectAll"
                checked={checkboxValue === "All"}
                indeterminate={checkboxValue === "Some"}
                onChange={toggleAllCheckboxes}
            />
            <p className="header__selection">{display}</p>
            <DownloadButton 
                toggleDisplayDownloads={toggleDisplayDownloads}
                checkboxValue={checkboxValue}
            />
        </div>
    )
}

export default Header;