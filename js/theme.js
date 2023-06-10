const THEME_PROPERTIES = [
    '--font-color',
    '--bg',
    '--bg-tint',
    '--bg-hover-button'
]

const THEME = {
    light: 'light',
    dark: 'dark',
}

let theme = THEME.light

setTheme = (_theme) => {
    const { style } = document.body;

    THEME_PROPERTIES.forEach((property) => {
        style.setProperty(property, `var(${property}-${_theme})`);
    });
    localStorage.setItem('theme', _theme);
    theme = _theme;
};

const btnWhiteTheme=document.querySelector('#action__theme-white')
const btnDarkTheme=document.querySelector('#action__theme-dark')

btnWhiteTheme.onclick =() =>{
    setTheme(THEME.light)
}

btnDarkTheme.onclick =() =>{
    setTheme(THEME.dark)
}