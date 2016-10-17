import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/App';

describe('App' , () => {
  let component;

  beforeEach(()=>{
    component = renderComponent(App);
  });

  it('should show a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('should have a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
