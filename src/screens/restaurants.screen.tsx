// @ts-nocheck
import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../features/restaurants/components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${({ theme }: any) => theme.space[3]};
`;

const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" value="search" />
      </SearchContainer>
      <RestaurantListContainer
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer side="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        // eslint-disable-next-line prettier/prettier
        keyExtractor={item => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
