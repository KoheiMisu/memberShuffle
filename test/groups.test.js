import {filterMembers} from '../src/redux/reducers/groups';


const mockMembers = [
    {
        name: 'misu',
        present: false
    },
    {
        name: 'planet',
        present: true
    }
];

describe('groups Reducer', function() {
    describe('filterMembers()', () => {
        test('filterMembers()', () => {
            let result = filterMembers(mockMembers);
            expect(result.length).toBe(1);
        });
    })
});