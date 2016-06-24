'use strict';

var { Dimensions } = React;
var topBarColor: React.styles.variables.medBlueGrey;
var submenuColor = React.styles.variables.blueGrey;
var highlightColor = React.styles.variables.lightGreen;
var stdPadding = 8;
var topBarHeight = 56;
var cardButtonHeight = 24 + stdPadding * 2;

var styles = {
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: React.styles.variables.stdtextColor,
        fontSize: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    url: {
        color: React.styles.variables.highlightColor,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: React.styles.variables.uiBorders,
    },
    label: {
        fontSize: 12,
        color: React.styles.variables.greyText,
    },
    actionButton: {
        width: Dimensions && Dimensions.get('window').width / 6,
        height: Dimensions && Dimensions.get('window').width / 6,
        borderRadius: Dimensions && Dimensions.get('window').width / 12,
        flex: 0,
        backgroundColor: highlightColor,
        elevation: 8,
    },
    actionButtonPosition: {
        position: 'absolute',
        right: Dimensions && Dimensions.get('window').width / 10,
        bottom: Dimensions && Dimensions.get('window').width / 10,
    },
    cardBackground: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: React.styles.variables.notQuiteWhiteBg,
        height: Dimensions && Dimensions.get('window').height - (topBarHeight + stdPadding),
    },
    card: {
        backgroundColor: 'white',
        elevation: 2,
        flex: 0,
        marginVertical: stdPadding/2,
        padding: stdPadding,
    },
    cardButton: {
        height: cardButtonHeight,
    },
    listView: {
        top: 0,
        flex: 1,
        flexDirection: 'column',
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: stdPadding,
    },
    avatarImage: {
        flex: 0,
        marginRight: stdPadding,
    },
    topBar: {
        backgroundColor: React.styles.variables.medBlueGrey,
        height: topBarHeight,
        flex: 0,
        flexDirection: 'row',
    },
    topGlyph: {
        fontSize: 24,
        paddingBottom: 12,
    },
    topBarButton: {
        height: topBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        width: topBarHeight,
    },
    topBarSubpage: {
        backgroundColor: 'white',
    },
    subMenu: {
        backgroundColor: submenuColor,
        height: 40,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    subMenuIcon: {
        height: 28,
        width: 35,
        paddingTop: 10,
        paddingBottom: 2
    },
    subMenuInactive: {
        opacity: 0.7,
    },
    subMenuActive: {
        opacity: 1,
    },
    subMenuBarHolder: {
        height: 3,
        width: Dimensions && Dimensions.get('window').width,
        backgroundColor: submenuColor,
        flex: 0,
    },
    subMenuBar: {
        flex: 0,
        height: 3,
        width: 10,
        backgroundColor: highlightColor,
    },
    snippet: {
        color: React.styles.variables.greyText,
        overflow: 'hidden',
        flexWrap: 'nowrap',
        height: 20, // regular text line height
    },
    presenceIcon: {
        marginRight: 6,
        marginLeft: 6,
        marginTop: 2,
        position: 'relative',
        height: stdPadding,
        width: stdPadding,
        borderRadius: 4,
    },
    unreadCount: {
        marginRight: 4,
        backgroundColor: React.styles.variables.lightBlue,
        borderRadius: 2,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 4,
        paddingLeft: 4,
        height: 16,
        width: 16,
    },
    messages: {
        height: Dimensions && Dimensions.get('window').height - 56,
        backgroundColor: 'white',
    },
    messageDay: {
        backgroundColor: React.styles.variables.notQuiteWhiteBg,
    },
    messageDayText: {
        color: React.styles.variables.lightBlue,
        textAlign: 'center',
        flex: 0,
    },
    monologue: {
        alignItems: 'flex-start',
    },
    error: {
        backgroundColor: React.styles.variables.importantColor,
        padding: stdPadding/2,
    },
    errorText: {
        color: 'black',
        opacity: 0.8,
    },
    composer: {
        backgroundColor: React.styles.variables.notQuiteWhiteBg,
        padding: stdPadding/2,
    },
    memberBlock: {
        flex: 1,
        flexDirection: 'row',
        padding: stdPadding,
    },
    memberInline: {
        flex: 0,
        flexDirection: 'row',
        padding: stdPadding,
        marginRight: stdPadding/2,
        marginBottom: stdPadding/2,
        backgroundColor: highlightColor,
        borderRadius: 4,
    },
    close: {
        color: 'black',
        opacity: 0.4,
        marginRight: stdPadding/2,
    },
    memberText: {
        flex: 1,
        fontSize: 12,
    },
    memberInlineContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
};


module.exports = styles;
