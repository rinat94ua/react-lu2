import React, { Component } from 'react'

import { Portal, absolute } from 'Utilities';
import { Transition } from 'react-spring';

import Icon from './Icon';
import { Card } from './Card';

import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    const { on, toggle, children } = this.props;

    return (
      <Portal>
        <Transition
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {on && (styles => (
            <ModalWrapper style={{...styles}}>
              <ModalCard>
                <CloseButton onClick={toggle}>
                  <Icon name='close' />
                </CloseButton>
                <div>{children}</div>
              </ModalCard>
              <Background onClick={toggle} />
            </ModalWrapper>
          ))}
        </Transition>
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCard = Card.extend`
  position: relative;
  z-index: 10;
  min-width: 320px;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  ${absolute({
    x: 'right'
  })};
  border: none;
  background-color: transparent;
  padding: 10px; 
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
`;