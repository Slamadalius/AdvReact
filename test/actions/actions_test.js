import { expect } from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions/index';

describe('actions', () => {
  describe('saveComment', () => {
    it('should have the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('should have the correct payload', () => {
      const action = saveComment('New comment');
      expect(action.payload).to.equal('New comment');
    });
  });
});
