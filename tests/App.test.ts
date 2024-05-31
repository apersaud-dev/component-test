import { SELECT_ALL_STATE } from "../src/utils/enums";
import { determineStateByLength, updateCheckbox, updateSelectAllState } from "../src/utils/helperFunctions";
import { sample } from "../src/data/mockData";
import { IFile } from "../src/utils/interfaces";

const mockData = sample.map(entry => ({...entry, ticked: false}));


describe('Determine select-all checkbox state for all potential options', () => {
  test('Test SELECT_ALL_STATE.All', () => {
    const resultState = updateSelectAllState(SELECT_ALL_STATE.All);

    expect(resultState).toBe(false);
  });

  test('Test SELECT_ALL_STATE.None', () => {
    const resultState = updateSelectAllState(SELECT_ALL_STATE.None);

    expect(resultState).toBe(true);
  });

  test('Test SELECT_ALL_STATE.Some', () => {
    const resultState = updateSelectAllState(SELECT_ALL_STATE.Some);

    expect(resultState).toBe(true);
  });
});

describe('Determine if checkbox value has changed', () => {
  test('Array of one item updating to false', () => {
    const configuredData = mockData.slice(0,1);
    configuredData[0].ticked = true;

    const resultList = updateCheckbox(configuredData, configuredData[0].name, false);

    expect(resultList[0].ticked).toBe(false);
  });

  test('Array of one item updating to true', () => {
    const configuredData = mockData.slice(0,1);
    configuredData[0].ticked = false;

    const resultList = updateCheckbox(configuredData, configuredData[0].name, true);

    expect(resultList[0].ticked).toBe(true);

  });
});

describe('Determine select-all state based on changes to child checkboxes', () => {
  test('Array of 3 items with only checked should return a state of some', () => {
    const selectedDataSet =  mockData.slice(0,3);
    const resultState = determineStateByLength(selectedDataSet, mockData);

    expect(resultState).toBe(SELECT_ALL_STATE.Some);
  });

  test('Empty array signifying no selected items should return a state of none', () => {
    const selectedDataSet: IFile[] =  [];
    const resultState = determineStateByLength(selectedDataSet, mockData);    

    expect(resultState).toBe(SELECT_ALL_STATE.None);
  })

  test('Array of same length as the full list of datta should return a state of all', () => {
    const selectedDataSet = JSON.parse(JSON.stringify(mockData));
    const resultState = determineStateByLength(selectedDataSet, mockData);

    expect(resultState).toBe(SELECT_ALL_STATE.All);

  })

});