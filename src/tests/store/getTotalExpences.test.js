import expences from '../data';
import getTotalExpences from '../../store/getTotalExpences';

test('should correctly show total expences amount',()=>{
    const totalAmount = getTotalExpences(expences);
    expect(totalAmount).toBe(1080);
});

test('should return 0 if no expences available',()=>{
    const totalAmount = getTotalExpences([]);
    expect(totalAmount).toBe(0);
});

test('if one expences available',()=>{
    const totalAmount = getTotalExpences([expences[1]]);
    expect(totalAmount).toBe(890);
});