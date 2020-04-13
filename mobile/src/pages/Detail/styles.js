import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 15,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident:{
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 20,
    },

    incidentProperty: {
        fontSize: 18,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 15,
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 16,
        color: '#737380',
    },

    contactBox: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#13131a',
        lineHeight: 16,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 12,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});