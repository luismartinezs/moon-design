import React from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Stack from '../stack/Stack';

type BalanceType = {
  currency: string;
  value: string;
  unit: string;
  unitTitle?: string;
};

type CardBalanceProps = {
  from: BalanceType;
  badge?: JSX.Element;
};

/**
 * Styles
 */
const Unit = styled.abbr({
  cursor: 'help',
  textDecoration: 'none',
  fontSize: rem(16),
  lineHeight: rem(24),
});

const Title = styled.p({
  margin: 0,
  fontSize: rem(32),
  lineHeight: rem(40),
});

const Text = styled.p(({ theme: { colorNew } }) => ({
  margin: 0,
  color: colorNew.trunks,
  fontSize: rem(16),
  lineHeight: rem(24),
}));

const Balance: React.FC<{ from: BalanceType }> = ({ from }) => (
  <Stack as="section" space={0}>
    <Text>{from.currency}</Text>

    <Title>
      {`${from.value} `}
      <Unit title={from.unitTitle || from.currency}>{from.unit}</Unit>
    </Title>
  </Stack>
);

/**
 * Component
 */
const CardBalance: React.FC<CardBalanceProps> = ({ from, badge }) =>
  badge ? (
    <Stack>
      {badge && <span>{badge}</span>}

      <Balance from={from} />
    </Stack>
  ) : (
    <Balance from={from} />
  );

export type { CardBalanceProps };

export default CardBalance;
