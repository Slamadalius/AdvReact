import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('Comment List', () => {
  let component;

  beforeEach(() => {
    const props =  {comments: ['New comment', 'Other comment']};
    component = renderComponent(CommentList, null, props);
  });

  it('should show an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('should show each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('Other comment');
  });
});
