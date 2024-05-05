import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-between bg-orange-50">
      <View>
        <Pressable onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={30} color="gray" />
        </Pressable>
      </View>
      <View>
        <Text>
          Your <Text>cart</Text>
        </Text>
        <View>{cart}</View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
