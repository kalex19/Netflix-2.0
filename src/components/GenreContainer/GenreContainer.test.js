import {
  GalleryContainer,
  mapStateToProps,
  mapDispatchToProps
} from './GenreContainer';
import {
  shallow
} from 'enzyme';
import React from 'react';

describe('GalleryContainer', () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow( < GalleryContainer / > );
    instance = wrapper.instance()
  });

  describe('component', () => {
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('CDM', () => {
    it('should invoke findGenres', () => {
      instance.componentDidMount();
      expect(findGenres).toHaveBeenCalled()
    });
    it('should set state to genres', async () => {
      await instance.componentDidMount()
      expect(wrapper.state('genres')).toEqual(['romance'])
    });
  });
});

//test populate genres