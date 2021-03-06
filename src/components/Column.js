import React, {Component, PropTypes} from 'react';
import {screenSize} from '../lib/ScreenSize';
import {isHidden, getColumnWidth, getColumnOffset} from '../lib/helpers';
import {View} from 'react-native';

const Column = (props) => {
    const {
      size,
      offset,
      sm,
      smOffset,
      smHidden,
      md,
      mdOffset,
      mdHidden,
      lg,
      lgOffset,
      lgHidden,
      rightAlign,
      leftAlign,
      colPercent,
      rtl,
      ...rest
    } = props;

    const gridProps = {
      size,
      offset,
      sm,
      smOffset,
      smHidden,
      md,
      mdOffset,
      mdHidden,
      lg,
      lgOffset,
      lgHidden,
      rightAlign,
      leftAlign,
      colPercent,
      rtl
    };

    const justifyContent = (props.alignVertical === 'top' ? 'flex-start' : (props.alignVertical === 'bottom' ? 'flex-end' : (props.alignVertical === 'space' ? 'space-between' : (props.alignVertical === 'distribute' ? 'space-around' : 'center' ))))

    if (isHidden(screenSize, gridProps)){
      return null;
    } else {
      return (
        <View
        {...rest}
        style={[
          props.style, {
            width: getColumnWidth(screenSize, gridProps),
            flexDirection: 'column',
            marginLeft: gridProps.rtl ? 0 : getColumnOffset(screenSize, gridProps),
            marginRight: gridProps.rtl ? getColumnOffset(screenSize, gridProps) : 0,
            justifyContent: justifyContent,
            alignItems: (gridProps.rightAlign || (gridProps.rtl && !gridProps.leftAlign)) ? 'flex-end' : 'flex-start'
          }]}>
          {rest.children}
        </View>
      );
    }
};

Column.propTypes = {
  sm: PropTypes.number,
  smOffset: PropTypes.number,
  smHidden: PropTypes.bool,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
  mdHidden: PropTypes.bool,
  lg: PropTypes.number,
  lgOffset: PropTypes.number,
  lgHidden: PropTypes.bool,
  size: PropTypes.number,
  offset: PropTypes.number,
  rightAlign: PropTypes.bool
};

export default Column;
