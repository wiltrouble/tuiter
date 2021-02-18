import React from "react";
import { View, Text, Image } from "react-native";
import { TweetType } from "../../../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";

import styles from "./styles";
import FooterContainer from "./footer";
import tweets from "../../../data/tweets";

export type MainContainerProps = {
    tweet: TweetType;
}

const MainContainer = ({tweet}: MainContainerProps) => (
    <View style={styles.container}>
        <View style={styles.tweetHeaderContainer}>
            <View style={styles.tweetHeaderNames}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.username}>{tweet.user.username}</Text>
                <Text style={styles.createdAt}>{moment(tweet.createAt).fromNow()}</Text>
            </View>
            
            <MaterialCommunityIcons style={styles.dotIcon} 
                name="dots-horizontal" 
                size={25} 
                color={'gray'}/>    
        </View>
        <View>
            <Text style={styles.content}>{tweet.content}</Text>
            {!!tweet.image  && <Image style={styles.image} source={{uri: tweet.image}}/>}
        </View>

        <FooterContainer tweet={tweet}/>
        
    </View>
)

export default MainContainer;
