import React from 'react';
import { Accordion, Panel } from "baseui/accordion";
import { useStyletron } from 'baseui';
import { ResponsiveContainer } from 'recharts';
import { Figures } from '..';
import { DailyGrowthCharts } from '../DailyGrowth/DailyGrowth'
import { StyledWrapper, StyledBody } from 'baseui/card';

export default function DataAccordion() {
    let accordionOpened = true;
    return (
        <Accordion
            onChange={({ expanded }) => accordionOpened = expanded && expanded.length > 0}
            overrides={{
                Header: {
                    style: ({ $theme }) => {
                        return {
                            backgroundColor: accordionOpened ? $theme.colors.backgroundSecondary : $theme.colors.backgroundPrimary,
                            borderColor: $theme.colors.backgroundTertiary
                        };
                    }
                },
                Content: {
                    style: ({ $theme }) => {
                        return {
                            backgroundColor: $theme.colors.backgroundPrimary,
                            borderColor: $theme.colors.backgroundTertiary,
                            borderRadius: $theme.borders.radius200,
                            borderColor: $theme.colors.backgroundTertiary,
                            transitionDuration: $theme.animation.timing500
                        };
                    }
                },
                Root: {
                    style: ({ $theme }) => {
                        return {
                            width: '320px',
                            borderRadius: $theme.borders.radius200,
                            borderColor: $theme.colors.backgroundTertiary,
                            boxShadow: $theme.lighting.shadow500,
                            transitionDuration: $theme.animation.timing500,
                            [$theme.mediaQuery.medium]: {
                                maxHeight: 'calc(100vh - 80px)',
                                overflow: 'auto',
                            },
                            [$theme.mediaQuery.large]: {
                                width: '320px',
                            }
                        };
                    }
                }
            }}
        >

            <Panel title="Koronawirus w liczbach">
                <Figures />
            </Panel>
            <Panel title="Wykresy">
                <DailyGrowthCharts />
            </Panel>
        </Accordion>
    );
}