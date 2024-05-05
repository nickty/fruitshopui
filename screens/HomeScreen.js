import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { categories, featuredFruits } from "../constants";
import FruitCard from "../components/FruitCard";
import FruitCardSales from "../components/FruitCardSales";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Orange");
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <View className="mx-5 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size={30} color="black" />
        <Pressable
          className="p-2 rounded-xl bg-orange-100"
          onPress={() => navigation.navigate("Cart")}
        >
          <ShoppingCartIcon size="25" color="orange" />
        </Pressable>
      </View>
      <View className="mt-4">
        <Text className="text-gray-600 font-semibold ml-5">Seasonal</Text>
        <Text className="text-3xl text-gray-700 font-semibold ml-5">
          Fruits and Vegetables
        </Text>
        <ScrollView
          horizontal
          className="mt-8 px-5"
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((cat, index) => {
            let isActive = cat == activeCategory;
            let textClass = `text-xl ${isActive ? "font-bold" : ""}`;
            return (
              <Pressable
                className="mr-8 relative"
                key={index}
                onPress={() => setActiveCategory(cat)}
              >
                <Text className={textClass}>{cat}</Text>
                {isActive ? (
                  <Text className="font-extrabold text-orange-400 -mt-2 ml-2">
                    -- -
                  </Text>
                ) : null}
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <View className="mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => (
            <FruitCard fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>
      {/* hot sales */}
      <View className="mt-8 pl-5 space-y-1">
        <Text className={{ color: "#333" }}>Hot Sales</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ overflow: "visible" }}
        >
          {[...featuredFruits].reverse().map((fruit, index) => (
            <FruitCardSales fruit={fruit} index={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
