import {  useState, useEffect, ChangeEvent } from "react";
import List from './components/List';
import {sample} from './data/mockData';
import {IFile } from "./utils/interfaces";
import { SELECT_ALL_STATE } from "./utils/enums";
import './App.css'
import './sass/styles.scss'
import Alert from "./components/Alert";
import { toggleTickAll, updateCheckbox, updateSelectAllState, determineStateByLength } from "./utils/helperFunctions";


function App() {
  const [selectAll, setSelectAll] = useState(SELECT_ALL_STATE.None);
  const [allEntries, setAllEntries] = useState<IFile[]>([]);
  const [showDownloads, setShowDownload] = useState(false);

  useEffect(() => {
    setAllEntries(sample.map(entry => ({...entry, ticked: false})))
}, [sample]);

const toggleAllCheckboxes = () => {
  const updateAll = updateSelectAllState(selectAll);

  if (updateAll) {
    const updateList =  toggleTickAll(allEntries, true);
    setSelectAll(SELECT_ALL_STATE.All);
    setAllEntries(updateList);
  } else {
    const updateList =  toggleTickAll(allEntries, false);
    setSelectAll(SELECT_ALL_STATE.None);
    setAllEntries(updateList);
  }
}

const toggleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
  const { id, checked } = event.target;

  const updatedEntries = updateCheckbox(allEntries, id, checked);
  setAllEntries(updatedEntries);

  const newState = determineStateByLength(updatedEntries.filter(x => x.ticked), allEntries);
  setSelectAll(newState);
};

  return (
    <>
      <List 
        selectAll={selectAll}
        allEntries={allEntries}
        toggleAllCheckboxes={toggleAllCheckboxes} 
        toggleCheckbox={toggleCheckbox}
        toggleDisplayDownloads={setShowDownload}
      />
      <Alert 
        displayDownloads={showDownloads}
        toggleDisplayDownloads={setShowDownload}
        files={allEntries}
      />
    </>
  )
}

export default App
//https://codesandbox.io/p/sandbox/indeterminate-checkbox-dh0m5?file=%2Fsrc%2FApp.tsx


//https://medium.com/indigoag-eng/indeterminate-checkboxes-are-weird-704b246c0f19
