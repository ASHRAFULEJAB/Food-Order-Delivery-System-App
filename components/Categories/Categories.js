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
        imgUrl='https://w0.peakpx.com/wallpaper/908/450/HD-wallpaper-sushi-philadelphia-rolls-japanese-food.jpg'
        title='testing-1'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://w0.peakpx.com/wallpaper/908/450/HD-wallpaper-sushi-philadelphia-rolls-japanese-food.jpg'
        title='testing-2'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://w0.peakpx.com/wallpaper/908/450/HD-wallpaper-sushi-philadelphia-rolls-japanese-food.jpg'
        title='testing-3'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://w0.peakpx.com/wallpaper/908/450/HD-wallpaper-sushi-philadelphia-rolls-japanese-food.jpg'
        title='testing-3'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://w0.peakpx.com/wallpaper/908/450/HD-wallpaper-sushi-philadelphia-rolls-japanese-food.jpg'
        title='testing-3'
      ></CategoryCard>
      <CategoryCard
        imgUrl='https://w0.peakpx.com/wallpaper/908/450/HD-wallpaper-sushi-philadelphia-rolls-japanese-food.jpg'
        title='testing-3'
      ></CategoryCard>
    </ScrollView>
  )
}

export default Categories
