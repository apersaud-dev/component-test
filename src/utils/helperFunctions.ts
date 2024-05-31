import { SELECT_ALL_STATE } from "./enums"
import { IFile } from "./interfaces";

export const updateSelectAllState = (currState: SELECT_ALL_STATE) => {
    let selectAll: boolean;
    
    // If all items are selected, they must be deselected
    if (currState === SELECT_ALL_STATE.All) {
        selectAll = false;
    } 
    // If some or none are selected, all items must be selected
    else {
        selectAll = true;
    }

    return selectAll;

}

export const determineStateByLength = (a:IFile[], b: IFile[]) => {
    let state: SELECT_ALL_STATE;
    
    if (a.length === 0) {
        state = SELECT_ALL_STATE.None;
    } else if (a.length === b.length) {
        state = SELECT_ALL_STATE.All;
    } else {
        state = SELECT_ALL_STATE.Some;
    }

    return state;
}

export const updateCheckbox = (list: IFile[], id: string, checked: boolean) => {
    const updatedList = list.map(item => {
        if (item.name === id) {
            item.ticked = checked;
        }
        return item;
    })
    return updatedList;
}

export const toggleTickAll = (list: IFile[], tick: boolean): IFile[] => {
    const toggledList = list.map(entry => {
        if (tick) {
            entry.ticked = true;
        } else  {
            entry.ticked = false;
        }
        return entry;
    })
    return toggledList;
}