import { Flex, Text, useTheme } from '@chakra-ui/core';
import React from 'react';
import { DateTime } from 'luxon';

export default function Thread({ date }: IThreadProps): JSX.Element {
  const theme = useTheme();
  const stroke = theme.colors.primary;

  return (
    <Flex
      pl="10%"
      w="80vw"
      alignItems="center"
    >
      {date ?
        <DatedThreadSVG height={'6rem'} stroke={stroke} /> :
        <ThreadSVG height={'3rem'} stroke={stroke} />
      }
      {date ? <Text ml="5%" fontSize="sm" color="primary">
        {DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)}
      </Text> : null}
    </Flex>
  );
}

interface IThreadSVGProps {
  height: string;
  stroke: string
}

function DatedThreadSVG({ height, stroke }: IThreadSVGProps) {
  return (
    <svg viewBox="0 0 10 108" style={{ height }}>
      <g style={{ fill: 'none', stroke: stroke, strokeWidth: 2 }}>
        <line x1="5" y1="0" x2="5" y2="50" />
        <circle
          cx="5"
          cy="54"
          r="4"
        />
        <line x1="5" y1="58" x2="5" y2="108" />
      </g>
    </svg>
  );
}

function ThreadSVG({ height, stroke }: IThreadSVGProps) {
  return (
    <svg viewBox="0 0 10 108" style={{ height }}>
      <line x1="5" y1="0" x2="5" y2="108" style={{ stroke: stroke, strokeWidth: 2 }} />
    </svg>
  );
}

export interface IThreadProps {
  date?: string;
}