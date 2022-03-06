import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import MyTextInput from '../components/MyTextInput';
import Mybutton from '../components/MyButton';
// import { openDatabase } from 'react-native-sqlite-storage';

// var db = openDatabase({ name: 'dictionary.db' });

const ViewWord = () => {
    let [inputUserId, setInputUserId] = useState('');
    let [userData, setUserData] = useState({});

    let searchUser = () => {
        //     console.log(inputUserId);
        //     setUserData({});
        //     db.transaction((tx) => {
        //       tx.executeSql(
        //         'SELECT * FROM test where word_id = ?',
        //         [inputWordId],
        //         (tx, results) => {
        //           var len = results.rows.length;
        //           console.log('len', len);
        //           if (len > 0) {
        //             setUserData(results.rows.item(0));
        //           } else {
        //             alert('No words found');
        //           }
        //         }
        //       );
        //     });
        //   };

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flex: 1 }}>
                        {/* <Mytextinput
            placeholder="Enter Word id"
            onChangeText={
              (inputWordrId) => setInputWordId(inputWordId)
            }
            style={{ padding: 10 }}
          /> */}
                        <Mybutton title="Search User" customClick={searchUser} />
                        <View
                            style={{
                                marginLeft: 35,
                                marginRight: 35,
                                marginTop: 10
                            }}>
                            <Text>Word: {userData.word}</Text>
                            <Text>Translation: {userData.translation}</Text>
                            <Text>Comments: {userData.Description}</Text>
                            <Text>Word Type: {userData.word_type}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    };

    export default ViewWord;
