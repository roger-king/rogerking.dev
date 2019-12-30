import { deepMerge } from 'grommet/utils';
import { base, ThemeType } from 'grommet/themes';

export const theme: ThemeType = deepMerge(base, {
    global: {
        colors: {
            brand: 'red',
        },
    },
});
