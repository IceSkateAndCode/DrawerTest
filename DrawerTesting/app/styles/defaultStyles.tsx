import { StyleSheet } from 'react-native'
import colors from './colors'

const defaultStyles = StyleSheet.create({
    contanier: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    itemContainer: {
        width : "100%",
        color: colors.textColor,
        fontFamily: 'tahoma',
        backgroundColor: colors.secondaryContainer,
    },
    button: {
        height: 40,
        width: "50%",
        backgroundColor: colors.secondaryContainer,
    },
    text: {
        color: colors.textColor,
        fontFamily: 'tahoma',
        fontSize: 20,
    }
})

export default defaultStyles
