import { makeStyles } from '@material-ui/core'
import { Theme } from './Theme';
export const useStyles = makeStyles(() => ({
    HeaderWraper: {
        width: '100%',
        minHeight: "90vh",
        height:"auto",
        background: 'linear-gradient(to bottom right,#04303140,#00696473)',
        backgroundImage: "url('https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
        backgroundSize: 'cover',
        backgroundRepeat:"no-repeat",
     },
    navbar:{
        backgroundColor:Theme.colors.base1,
        color:Theme.colors.base2,
    },
    toolBar:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:"space-between",
    },
}));
