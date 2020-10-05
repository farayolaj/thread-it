import { Flex, Text } from '@chakra-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

export default function Thread({ date }) {
  const svgHeight = '6rem';
  return (
    <Flex pl="10%" w="80vw" alignItems="center">
      {date ?
        <MidLoopedLineSVG height={svgHeight} /> :
        <LineSVG height={svgHeight} />
      }
      {date ? <Text ml="5%" fontSize="sm">{date.toLocaleString(DateTime.DATE_FULL)}</Text> : null}
    </Flex>
  );
}

// eslint-disable-next-line react/prop-types
function MidLoopedLineSVG({ height }) {
  return (
    <svg viewBox="0 0 10 108" height={height}>
      <g>
        <line x1="5" y1="0" x2="5" y2="50" style={{ stroke: '#000000', strokeWidth: 1 }} />
        <circle
          style={{ fill: 'none', stroke: '#000000', strokeWidth: 1 }}
          cx="5"
          cy="54"
          r="4"
        />
        <line x1="5" y1="58" x2="5" y2="108" style={{ stroke: '#000000', strokeWidth: 1 }} />
      </g>
    </svg>
  );
}

// eslint-disable-next-line react/prop-types
function LineSVG({ height }) {
  return (
    <svg viewBox="0 0 10 108" height={height}>
      <line x1="5" y1="0" x2="5" y2="108" style={{ stroke: '#000000', strokeWidth: 1 }} />
    </svg>
  );
}

Thread.propTypes = {
  date: PropTypes.instanceOf(DateTime)
};