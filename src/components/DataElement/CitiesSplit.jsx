import React from 'react';
import { Label3 } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useStyletron } from 'baseui';
import Loader from "./Loader"
import { DataContext } from '../../contexts/DataContext';
import find from 'lodash.find';

export default function CitiesSplit({ isLoading, data }) {
  const [, theme] = useStyletron();
  const ZOOM_LEVEL = 9;

  return (
    <>
      <Label3>Podział na miasta</Label3>
      <Block
        $style={{
          height: '196px',
          overflow: 'auto',
          margin: '12px 0 20px'
        }}
      >
        {isLoading && <Loader />}
        {data &&
          <DataContext.Consumer>{({ setPosition, setZoom }) => (
            <ResponsiveContainer height={data.length * 32} width={'99%'}>
              <BarChart
                data={data}
                layout="vertical"
              >
                <YAxis
                  dataKey="city"
                  type="category"
                  tick={{ fill: theme.colors.contentPrimary }}
                  width={100}
                  onClick={({ value }) => {
                    setPosition(find(data, { city: value }).location);
                    setZoom(ZOOM_LEVEL);
                  }}
                />
                <XAxis type="number" hide />
                <Tooltip
                  formatter={value => [value, 'Liczba']}
                />
                <Bar dataKey="count" fill={theme.colors.accent} />
              </BarChart>
            </ResponsiveContainer>
          )}
          </DataContext.Consumer>}
      </Block>
    </>
  );
}
