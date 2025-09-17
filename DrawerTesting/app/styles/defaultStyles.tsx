import { StyleSheet } from 'react-native'
import colors from './colors'

const defaultStyles = StyleSheet.create({
    itemContainer: {
        width : "100%",
        color: colors.textColor,
        fontFamily: 'tahoma',
        backgroundColor: colors.secondaryContainer,
    }
})

export default defaultStyles
