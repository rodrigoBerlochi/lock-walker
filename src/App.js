import { connect } from 'react-redux';
import { css } from 'glamor';
import React from 'react';

import fontFamily from './util/fontFamily';

import Logo from './ui/Logo';
import UploadPackageJSON from './ui/UploadPackageJSON';
import Visualizer from './ui/Visualizer';

css.global('html', {
  display: 'flex',
  fontFamily: fontFamily('Arial', 'sans-serif'),
  height: '100%'
});

css.global('body', {
  margin: 10
});

css.global('body, #root', {
  display: 'flex',
  flex: 1
});

const ROOT_CSS = css({
  display: 'flex',
  flex: 1
});

export default connect(
  ({ packageJSON }, ownProps) => ({
    loaded: !!packageJSON
  })
)(props =>
  <div className={ ROOT_CSS }>
    <Logo />
    {
      props.loaded ?
        <Visualizer />
      :
        <UploadPackageJSON />
    }
  </div>
);
