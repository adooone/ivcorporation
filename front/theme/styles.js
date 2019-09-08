import { createMuiTheme } from '@material-ui/core/styles';

// Тут нужно будет повытаскивать с макета цвет и вставить по логике вещей
const colors = {
    default: '#232323', // самый используемый
    primary: '#DD2222', // цвет акцента
    secondary: '#C99A41',
    text: '#FBF9EA',
};

export const theme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        useNextVariants: true,
        fontFamily: [
            '"Josefin Sans"',
            // '"Poiret One"',
            // '"Comfortaa"',
        ].join(','),
        fontSize: 17,
        fontWeight: 100,
    },
    palette: {
        type: 'dark',
        default: { main: colors.default },
        primary: { main: colors.primary },
        secondary: { main: colors.secondary },
    },
    overrides: {
        MuiButton: {
            root: {
                margin: 8,
                borderRadius: 0,
            },
        },
    },
});
