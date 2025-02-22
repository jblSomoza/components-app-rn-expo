import { useThemeColor } from "@/hooks/useThemeColor";
import FadeInImage from "@/presentation/images/FadeInImage";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";

const InfiniteScrollScreen = () => {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const primaryColor = useThemeColor({}, "primary");

  const loadMore = () => {
    const newArray = Array.from(
      { length: 10 },
      (_, i) => i + number.length + 1
    );

    setTimeout(() => {
      setNumber([...number, ...newArray]);
    }, 300);
  };

  return (
    <ThemedView>
      <FlatList
        data={number}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View
            style={{
              padding: 20,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Carregando...</Text>
            <ActivityIndicator size="large" color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        width: "100%",
        height: 400,
      }}
    />
    // <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
    //   <ThemedText type={'link'}>{number}</ThemedText>
    //   <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{ width: 200, height: 300 }}
    // />
    // </View>
  );
};
