import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { HeartIcon } from "react-native-heroicons/solid";

const FruitCard = ({ fruit }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View
      style={{ width: 270, borderRadius: 40, backgroundColor: fruit.color(1) }}
      className="mx-5"
    >
      <View className="flex-row justify-end">
        <Pressable
          className="p-3 rounded-full mr-4 mt-4"
          style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon size={25} color={isFavorite ? fruit.shadow : "white"} />
        </Pressable>
      </View>
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: fruit.shadow,
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 50 },
          shadowOpacity: 0.6,
        }}
      >
        <Image
          source={fruit.image}
          style={{ width: 210, height: 210, objectFit: "contain" }}
        />
      </View>
      <View className="ml-4 my-4">
        <Text className="font-bold text-xl text-white shadow">
          {fruit.name}
        </Text>
        <Text className="font-bold text-lg text-white shadow tracking-wide">
          $ {fruit.price}
        </Text>
      </View>
    </View>
  );
};

export default FruitCard;

const styles = StyleSheet.create({});
