import TriStateCheckbox from "./TriStateCheckbox";
import { IListEntryProps } from "../utils/interfaces";
import Status from "./Status";

const ListEntry: React.FC<IListEntryProps> = ({data, selected, updateSelection}) => {

    return (
        <div className="listEntry">
            <label className="listEntry__label">
                <TriStateCheckbox 
                    id={data.name}
                    name={data.name}
                    checked={selected}
                    onChange={updateSelection}
                />
            </label>
            <p className="listEntry__name">{data.name}</p>
            <p className="listEntry__device">{data.device}</p>
            <p className="listEntry__path">{data.path}</p>
            <Status status={data.status} />
        </div>
    )
}

export default ListEntry;