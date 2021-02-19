import React, {useState} from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/Colors";
import ProfilePicture from '../components/ProfilePicture';

export default function NewTweetScreen() {

  const [tweet, settweet] = useState("");
  const [imageUrl, setImageUrl] = useState("")


  const onPostTweet = () => {
    console.log(`posting the tweet: ${tweet} Image: ${imageUrl}`)
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <AntDesign name="close" color={colors.light.tint} size={30}/>
          <TouchableOpacity 
            style={styles.botton}
            onPress={onPostTweet}>
            <Text style={styles.bottonText}>Tweet</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newTweetContainer}>
          <ProfilePicture image={'https://pbs.twimg.com/profile_images/668318645995614208/ShW6NOx-_normal.jpg'}></ProfilePicture>
          <View style={styles.inputContainer}>
            <TextInput
              value={tweet}
              onChangeText={(value) => settweet(value)}
              multiline={true}
              numberOfLines={3} 
              style={styles.tweetInput}
              placeholder={"Whats happening?"}/>
            <TextInput
              value={imageUrl}
              onChangeText={(value) => setImageUrl(value)}
              style={styles.imageInput}
              placeholder={'Image url (optional)'}
            />
          </View>
        </View>
      </SafeAreaView>
    )
    

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    // padding: 15,
  },
  botton: {
    backgroundColor: colors.light.tint,
    borderRadius: 14,
  },
  bottonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,

  },
  imageInput: {

  }
});
