import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";

const ProductScreen = (props) => {
  const fruit = props.route.params;
  const navigation = useNavigation();
  return (
    <View className="flex-1" style={{ backgroundColor: fruit.color }}>
      <SafeAreaView>
        <View className="flex-row justify-start mx-5">
          <Pressable
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            className="border border-gray-50 rounded-xl"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={30} color="white" />
          </Pressable>
        </View>
        <View
          className="flex-row justify-center mt-5 pb-10"
          style={{
            shadowColor: fruit.shadow,
            shadowRadius: 50,
            shadowOffset: { width: 0, height: 50 },
            shadowOpacity: 0.7,
          }}
        >
          <Image
            source={fruit.image}
            style={{ width: 290, height: 290, objectFit: "contain" }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 45, borderTopRightRadius: 45 }}
        className="bg-orange-50 flex-1 px-6 space-y-2"
      >
        <Text className="mt-8 text-2xl font-bold text-gray-600">
          {fruit.name}
        </Text>
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
          <Text className="text-gray-500 font-semibold">
            Sold <Text className="text-gray-800 font-extrabold">250</Text>
          </Text>
        </View>
        <StarRating
          disabled
          starSize={18}
          containerStyle={{ width: 120 }}
          maxStars={5}
          rating={fruit.stars}
          emptyStarColor="lightgray"
          fullStar={require("../assets/images/fullStar.png")}
        />
        <View style={{ height: 165 }}>
          <Text className="tracking-wider py-3 text-gray-600">
            New Work SE, Am Strandkai 1, 20﻿45﻿7 Hamburg, Deutschland, Tel.:
            ‍+‍49 40 419 131-0, Email: info@xing.com | Local Court HRB
            14﻿80﻿78 | Executive Board: Petra von Strombeck (CEO), Ingo Chu,
            Frank Hassler | Chair of the Supervisory Board: Martin Weiss
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-3xl">$ {fruit.price}</Text>
          <Pressable
            className="text-3xl p-3 ml-6 flex-1 rounded-xl"
            style={{
              backgroundColor: fruit.shadow,
              opacity: 0.6,
              shadowColor: fruit.shadow,
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 15 },
              shadowOpacity: 0.5,
            }}
            onPress={() => navigation.navigate("Cart")}
          >
            <Text className="text-xl text-center text-white font-bold">
              Add to Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
