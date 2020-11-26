/* eslint-disable import/no-anonymous-default-export */
const moment = jest.requireActual('moment');

export default (timeStamp=0) => {
   return moment(timeStamp);
}