import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tweetHeaderNames: {
        flexDirection: 'row'
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    username: {
        marginHorizontal: 5,
        color: 'gray',
    },
    createdAt: {
        marginHorizontal: 5,
        color: 'gray',
    },
    dotIcon: {
        alignSelf: 'flex-end'
    },
    content: {
        lineHeight: 19,
    },
    image: {
        marginVertical: 10,
        width: '100%',
        height: '200',
        resizeMode: 'contain',
        borderRadius: 15,
        overflow: 'hidden'
    }
})

export default styles;