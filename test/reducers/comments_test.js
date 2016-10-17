import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/Comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comment Reducers', () => {
  it('should handle action with unknown type', () => {
    // expect(commentReducer()).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('should handle action of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment'
    };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
