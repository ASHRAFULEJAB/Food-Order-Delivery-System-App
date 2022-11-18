import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from '../ResturantCard/ResturantCard'

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='cyan'></ArrowRightIcon>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Resturants card... */}
        <ResturantCard
          id={123}
          imgUrl='https://c4.wallpaperflare.com/wallpaper/39/1005/99/sushi-rolls-sushi-food-wallpaper-preview.jpg'
          title='Yo!Susi'
          rating={4.8}
          address='Austin USA'
          short_description='This is a test Card descripton'
          dishes={[]}
          long={20}
          lat={4}
          genere='Japanese'
        ></ResturantCard>
        <ResturantCard
          id={123}
          imgUrl='https://c4.wallpaperflare.com/wallpaper/39/1005/99/sushi-rolls-sushi-food-wallpaper-preview.jpg'
          title='Yo!Susi'
          rating={4.8}
          address='Austin USA'
          short_description='This is a test Card descripton'
          dishes={[]}
          long={20}
          lat={4}
          genere='Japanese'
        ></ResturantCard>
        <ResturantCard
          id={123}
          imgUrl='https://c4.wallpaperflare.com/wallpaper/39/1005/99/sushi-rolls-sushi-food-wallpaper-preview.jpg'
          title='Yo!Susi'
          rating={4.8}
          address='Austin USA'
          short_description='This is a test Card descripton'
          dishes={[]}
          long={20}
          lat={4}
          genere='Japanese'
        ></ResturantCard>
        <ResturantCard
          id={123}
          imgUrl='https://c4.wallpaperflare.com/wallpaper/39/1005/99/sushi-rolls-sushi-food-wallpaper-preview.jpg'
          title='Yo!Susi'
          rating={4.8}
          address='Austin USA'
          short_description='This is a test Card descripton'
          dishes={[]}
          long={20}
          lat={4}
          genere='Japanese'
        ></ResturantCard>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
