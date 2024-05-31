import Header from "./Header";
import ListEntry from "./ListEntry";
import { IListProps, IFile } from "../utils/interfaces";

const List: React.FC<IListProps> = ({ selectAll, allEntries, toggleAllCheckboxes, toggleCheckbox, toggleDisplayDownloads}) => {

    const checkedEntries = allEntries.filter(entry => entry.ticked);

    return (
        <div className="list">
            <Header 
                checkedEntries={checkedEntries}       
                checkboxValue={selectAll}
                toggleAllCheckboxes={toggleAllCheckboxes} 
                toggleDisplayDownloads={toggleDisplayDownloads}
            />
            <div className="categories">
                <p className="categories__name">Name</p>
                <p className="categories__device">Device</p>
                <p className="categories__path">Path</p>
                <p className="categories__status">Status</p>
            </div>
            {allEntries?.map((entry: IFile, i: number) => {
                return (
                    <ListEntry 
                        key={`${i}-${entry.name}`}
                        data={entry}
                        selected={entry.ticked}
                        updateSelection={toggleCheckbox}
                    />
                )
            })}
        </div>
    )
}

export default List;