import React from 'react/addons';
import { expect } from 'chai';
import { Test } from 'legit-tests';
import { SetState, Find } from 'legit-tests/lib/middleware';
import sinon from 'sinon';

let { TestUtils } = React.addons,
    shallowRenderer = TestUtils.createRenderer();

let createShallowComponent = (component, props) => {
  shallowRenderer.render(React.createElement(component, props));
  return shallowRenderer.getRenderOutput();
}

export {
  React,
  expect,
  TestUtils,
  createShallowComponent,
  Test,
  SetState,
  Find
}
