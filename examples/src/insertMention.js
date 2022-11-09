/**
 *
 * @author tangzehua
 * @sine 2020-07-07 20:21
 */

// @flow
import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

const mentions = [
    'james',
    'michael',
    'robert',
    'john',
    'david',
    'william',
    'richard',
    'thomas',
    'mark',
    'charles',
    'steven',
    'gary',
    'joseph',
    'donald',
    'ronald',
    'kenneth',
    'paul',
    'larry',
    'daniel',
    'stephen',
    'dennis',
    'timothy',
    'edward',
    'jeffrey',
    'george',
    'gregory',
    'kevin',
    'douglas',
    'terry',
    'anthony',
    'jerry',
    'bruce',
    'randy',
    'brian',
    'frank',
    'scott',
    'roger',
    'raymond',
    'peter',
    'patrick',
    'keith',
    'lawrence',
    'wayne',
    'danny',
    'alan',
    'gerald',
    'ricky',
    'carl',
    'christopher',
    'dale',
    'walter',
    'craig',
    'willie',
    'johnny',
    'arthur',
    'steve',
    'joe',
    'randall',
    'russell',
    'jack',
    'henry',
    'harold',
    'roy',
    'andrew',
    'philip',
    'ralph',
    'billy',
    'glenn',
    'stanley',
    'jimmy',
    'rodney',
    'barry',
    'samuel',
    'eric',
    'bobby',
    'albert',
    'phillip',
    'ronnie',
    'martin',
    'mike',
    'eugene',
    'louis',
    'howard',
    'allen',
    'curtis',
    'jeffery',
    'frederick',
    'leonard',
    'harry',
    'micheal',
    'tony',
    'ernest',
    'eddie',
    'fred',
    'darrell',
    'jay',
    'melvin',
    'lee',
    'matthew',
    'vincent',
    'tommy',
    'francis',
    'marvin',
    'dean',
    'rick',
    'victor',
    'norman',
    'earl',
    'jose',
    'calvin',
    'ray',
    'clifford',
    'alfred',
    'jerome',
    'bradley',
    'clarence',
    'don',
    'theodore',
    'jon',
    'rickey',
    'joel',
    'jesse',
    'jim',
    'edwin',
    'dan',
    'chris',
    'bernard',
    'jonathan',
    'gordon',
    'glen',
    'jeff',
    'warren',
    'leroy',
    'herbert',
    'duane',
    'bill',
    'benjamin',
    'tom',
    'alvin',
    'nicholas',
    'tim',
    'mitchell',
    'marc',
    'leslie',
    'leon',
    'kim',
    'dwight',
    'bryan',
    'lloyd',
    'vernon',
    'gene',
    'reginald',
    'lonnie',
    'guy',
    'gilbert',
    'garry',
    'juan',
    'karl',
    'kent',
    'kurt',
    'todd',
    'jackie',
    'greg',
    'lewis',
    'wesley',
    'clyde',
    'floyd',
    'neil',
    'allan',
    'donnie',
    'perry',
    'franklin',
    'lester',
    'brad',
    'manuel',
    'kirk',
    'carlos',
    'leo',
    'jimmie',
    'randolph',
    'charlie',
    'robin',
    'dana',
    'darryl',
    'dave',
    'ted',
    'milton',
    'daryl',
    'kerry',
    'freddie',
    'brent',
    'harvey',
    'gerard',
    'stuart',
    'johnnie',
    'herman',
    'lynn',
    'rex',
    'arnold',
    'kelly',
];

export class InsertMentionModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            filteredMentions: mentions,
        };
        this.onDone = ::this.onDone;
    }

    setModalVisible(visible) {
        this.setState({isModalVisible: visible});
    }

    setMention(mention) {
        this.mention = mention;

        const _mentions = mentions.filter(item => item.toLowerCase().includes(mention?.trim()?.toLowerCase()));

        if (_mentions?.length > 0) {
            this.setState({filteredMentions: _mentions});
        } else {
            this.setState({filteredMentions: []});
        }
    }

    onDone(selectedMention) {
        this.setModalVisible(false);
        this.props?.onDone({mention: selectedMention});
    }

    render() {
        const {isModalVisible, filteredMentions} = this.state;
        const {color, placeholderColor, backgroundColor} = this.props;
        return (
            <Modal
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                coverScreen={false}
                isVisible={isModalVisible}
                backdropColor={color}
                backdropOpacity={0.4}
                onBackdropPress={() => this.setModalVisible(false)}>
                <View style={[styles.dialog, {backgroundColor}]}>
                    <FlatList
                        keyboardShouldPersistTaps="handled"
                        data={filteredMentions}
                        height={300}
                        renderItem={({item, index}) => (
                            <TouchableOpacity key={`${index}:${item}`} onPress={() => this.onDone(item)}>
                                <Text style={styles.text}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        ListHeaderComponent={
                            <TextInput
                                style={[styles.input, {color}]}
                                placeholderTextColor={placeholderColor}
                                placeholder={'Search...'}
                                onChangeText={text => this.setMention(text)}
                                autoFocus={true}
                            />
                        }
                    />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
    },
    linkTitle: {
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#b3b3b3',
    },
    dialog: {
        borderRadius: 8,
        marginHorizontal: 30,
        paddingHorizontal: 10,
    },
    text: {
        color: '#286ab2',
        paddingVertical: 4,
    },
});
