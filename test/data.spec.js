import {athletA, mockData, athletN}from'./dataMock.js'
import { sorter, filterByTeam, filterBySport, filterByMedal } from '../src/data.js';

describe('this block tests the filter by country', () => {
  it('is a funcion', () => {
    expect(typeof filterByTeam).toBe('function');
  });
  it('Should an athlete from Great Britain return', () => {
    expect(filterByTeam(mockData,'Great Britain')).toHaveLength(1);
  });
  it('Should an athlete from Russia return', () => {
    expect(filterByTeam(mockData,'Russia')).toHaveLength(2);
  });
  it('Should an athlete from Canada return',()=>{
    expect(filterByTeam(mockData,'Canada')).toEqual(athletA);
  });
});

describe('this block tests the filter by medal', () => {
  it('is a funcion', () => {
    expect(typeof filterByMedal).toBe('function');
  });
  it('should return according to the medal', () => {
    expect(filterByMedal(mockData,'Gold')).toHaveLength(1);
  });
  it('should return athletes with bronze medal',()=>{
    expect(filterByMedal(mockData,'Bronze')).toEqual(athletA);
  });
});

describe('this block tests the filter by sport', () => {
  it('is a funcion', () => {
    expect(typeof filterBySport).toBe('function');
  });
  it('should return athletes who participated in Boxing', () => {
    expect(filterBySport(mockData,'Boxing')).toHaveLength(1);
  });
  it('should return athletes who participated in athleticss',()=>{
    expect(filterBySport(mockData,'Athletics')).toEqual(athletA);
  });
});

describe('This block tests the ordered function', () =>{
  it ('should return athletes sort by A-Z', () => {
    const sortAthletes = sorter (mockData,'De A-Z');
    expect(mockData).toHaveLength(4);
    expect(sortAthletes[3]).toEqual(athletN[0]);
  });
  it ("should return athletes sort by A-Z", () => {
    const sortAthletes = sorter (mockData,'De A-Z');
    expect(sortAthletes[0]).toEqual(athletA[0]);
    expect(sortAthletes[3]).toEqual(mockData[3]);
  });
  it('should return athletes sort by Z-A', ()=>{
    const sortAthletes = sorter (mockData,'De Z-A');
    expect(mockData).toHaveLength(4);
    expect(sortAthletes[0]).toEqual(athletN[0]);
  });
  
  it('should return athletes sort by Z-A', ()=>{
    const sortAthletes = sorter (mockData,'De Z-A');
    expect(sortAthletes[3]).toEqual(athletA[0]);
  });
});