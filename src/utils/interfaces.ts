import {
    DetailedHTMLProps,
    InputHTMLAttributes,
    ChangeEvent,
    Dispatch
  } from "react";
import { SELECT_ALL_STATE } from "./enums";
  
export interface ICheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  checked?: boolean;
  indeterminate?: boolean;
  type?: never;
}

export interface IFile {
  name: string;
  device: string;
  path: string;
  status: string;
  ticked?: boolean;
}

export interface IListEntryProps {
  data: IFile;
  selected?: boolean;
  updateSelection?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IDownloadProps {
  toggleDisplayDownloads: Dispatch<React.SetStateAction<boolean>>;  checkboxValue: string;
}

export interface IHeaderProps {
  checkedEntries: IFile[];
  checkboxValue: string;
  toggleAllCheckboxes: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleDisplayDownloads: Dispatch<React.SetStateAction<boolean>>;

}

export interface IListProps {
  selectAll: SELECT_ALL_STATE;
  allEntries: IFile[];
  toggleAllCheckboxes: () => void;
  toggleCheckbox: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleDisplayDownloads: Dispatch<React.SetStateAction<boolean>>;
}

export interface IStatusProps {
  status: string;
}

export interface IAlertProps {
  displayDownloads: boolean;
  toggleDisplayDownloads: Dispatch<React.SetStateAction<boolean>>;
  files: IFile[];
}

export interface IAlertDataProps {
  alertData: IFile;
}

export type File = {
  name: string;
  device: string;
  path: string;
  status: string;
  ticked?: boolean;
}

export type Accumulator = {
  availableFiles: File[];
  unavailableFiles: File[];
}
