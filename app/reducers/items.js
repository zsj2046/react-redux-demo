/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/5.
 */
import actionType from '../constants/actionType';

const itemsReducer = (state = [], action) => {

  switch (action.type) {
    case actionType.GETSUCCESS:
      return action.data;

    case actionType.EMPTYDATA:
      return [];

    default:
      return state;
  }
};

export default itemsReducer;