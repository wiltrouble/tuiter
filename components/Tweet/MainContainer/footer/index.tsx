import React from "react";
import { View, Text } from "react-native";
import { TweetType } from "../../../../types";
import { Feather, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";
import Tweet from "../..";


export type FooterContainerProps = {
    tweet: TweetType;
}

const FooterContainer = ({tweet}: FooterContainerProps) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Feather name={"message-circle"} size={20} color={'gray'}/>
            <Text style={styles.number}>{tweet.numberOfComments}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"retweet"} size={28} color={'gray'}/>
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"star"} size={28} color={'gray'}/>
            <Text style={styles.number}>{tweet.numberOfLikes}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name={"share-apple"} size={28} color={'gray'}/>
        </View>
    </View>
)

export default FooterContainer;
