import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from '../CategoryCard.js/CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='testing-1'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='testing-2'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='testing-3'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='testing-3'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='testing-3'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://links.papareact.com/gn7'
        title='testing-3'
      ></CategoryCard>
    </ScrollView>
  )
}

export default Categories
