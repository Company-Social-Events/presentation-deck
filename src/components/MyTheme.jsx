//docs:
//https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md

const MyTheme = {
    googleFont: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap",
    fonts: {
        body: "IBM Plex Sans"
    },
    styles: {
 
    },
    text :{
        heading: {
            fontSize: '48px',
            fontWeight: 'bold',
        }
    }
}



const ThemeStyles = {
    CenteredFlex:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        width: '100%',
        height: '100%',
    },
    ParagraphStyle:{
        fontSize: '32px'
    },
    MarginTop180:{ marginTop: '180px' },
    ListItemStyle: {
        paddingLeft: '10px',
    },
    MarginTop110: { marginTop: '110px' },
    JustifyBetween: { justifyContent: 'space-between' },
}

export { MyTheme, ThemeStyles }