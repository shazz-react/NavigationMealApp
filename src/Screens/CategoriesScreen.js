import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [4, 5];

  //1
  const arr3 = arr1.filter((number) => arr2.some((num) => num === number));

  //2
  const flag = arr2.some((num) => arr1.includes(num));

  //3
  const total = arr1.reduce((accu, num) => accu + num);

  //4
  const arr4 = arr1.map((number) => number * 2);

  //5
  const arr5 = [];
  arr1.forEach((number) => arr5.push(number * 3));

  //6
  const arr6 = arr1.slice(1, 3);

  //7
  const arr7 = arr1.splice(2, 2, 11, 12);

  //8
  let arrA = ["one", "two", "three", "four", "five", "six", "seventy"];

  var current = "";
  arrA.forEach((name) => {
    current = name.length > current.length ? name : current;
  });

  console.log(current);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id },
          });
        }}
      ></CategoryGridTile>
    );
  };

  return (
    <FlatList
      style={styles.screen}
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default CategoriesScreen;
