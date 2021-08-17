import {athletA, mockData, athletN}from'./dataMock.js'
import { sorter, filterByTeam, filterBySport, filterByMedal } from '../src/data.js';
const athletes= mockData

describe('this block tests the filter by country', () => {
  it('is a funcion', () => {
    expect(typeof filterByTeam).toBe('function');
  });
  it('Should an athlete from Great Britain return', () => {
    expect(filterByTeam(athletes,'Great Britain')).toHaveLength(1);
  });
  it('Should an athlete from Russia return', () => {
    expect(filterByTeam(athletes,'Russia')).toHaveLength(2);
  });
  it('Should an athlete from Canada return',()=>{
    expect(filterByTeam(athletes,'Canada')).toEqual(athletA);
  });
});

describe('this block tests the filter by medal', () => {
  it('is a funcion', () => {
    expect(typeof filterByMedal).toBe('function');
  });
  it('should return according to the medal', () => {
    expect(filterByMedal(athletes,'Gold')).toHaveLength(1);
  });
  it('should return athletes with bronze medal',()=>{
    expect(filterByMedal(athletes,'Bronze')).toEqual(athletA);
  });
});

describe('this block tests the filter by sport', () => {
  it('is a funcion', () => {
    expect(typeof filterBySport).toBe('function');
  });
  it('should return athletes who participated in Boxing', () => {
    expect(filterBySport(athletes,'Boxing')).toHaveLength(1);
  });
  it('should return athletes who participated in athleticss',()=>{
    expect(filterBySport(athletes,'Athletics')).toEqual(athletA);
  });
});

describe('This block tests the ordered function', () =>{
  it ('should return athletes sort by A-Z', () => {
    const sortAthletes = sorter (athletes,'De A-Z');
    expect(mockData).toHaveLength(4);
    expect(sortAthletes[3]).toEqual(athletN[0]);
  });
  it ("should return athletes sort by A-Z", () => {
    const sortAthletes = sorter (athletes,'De A-Z');
    expect(sortAthletes[0]).toEqual(athletA[0]);
    expect(sortAthletes[3]).toEqual(mockData[3]);
  });
  it('should return athletes sort by Z-A', ()=>{
    const sortAthletes = sorter (athletes,'De Z-A');
    expect(mockData).toHaveLength(4);
    expect(sortAthletes[0]).toEqual(athletN[0]);
  });
  
  it('should return athletes sort by Z-A', ()=>{
    const sortAthletes = sorter (athletes,'De Z-A');
    expect(sortAthletes[3]).toEqual(athletA[0]);
  });
});