import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('Comment Box', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('should have className of comment-box', () => {
    expect(component.find('textarea')).to.exist;
  });
  it('should have a text area', () => {
    expect(component.find('textarea')).to.exist;
  });
  it('should have a button', () => {
    expect(component.find('button')).to.exist;
  });
  describe('Entering text', () => {
    beforeEach(()=>{
      component.find('textarea').simulate('change', 'new comment');
    });

    it('should show text that is entered', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });
    it('should clear the input when submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
