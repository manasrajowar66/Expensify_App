/* eslint-disable import/no-anonymous-default-export */
import moment from 'moment';
export default [
    {
        id:'1',
        describtion:'ren',
        note:'',
        amount:167,
        createdAt:0
    },
    {
        id:'2',
        describtion:'water',
        note:'',
        amount:890,
        createdAt:moment(0).subtract(4,'days').valueOf()
    },
    {
        id:'3',
        describtion:'tv',
        note:'',
        amount:23,
        createdAt:moment(0).add(4,'days').valueOf()
    }
];