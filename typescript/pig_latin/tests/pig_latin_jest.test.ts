import {pig_latin} from '../functions_ts/pig_latin';
import 'jest';

test('Consonant start', ()=>{
    expect(pig_latin({body:'{"sentence":"test"}'},null,null)).toBe('esttay');
})