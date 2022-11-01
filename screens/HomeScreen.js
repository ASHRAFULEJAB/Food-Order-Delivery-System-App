import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories/Categories'
import FeaturedRow from '../components/FeaturedRow/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-gray-700 pt-3 my-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-9 w-9 bg-gray-700 p-5 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold  text-gray-900 text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='cyan' />
          </Text>
        </View>
        <UserIcon size={35} color='cyan' />
      </View>
      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className=' flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon size={20} color='red' />
          <TextInput
            placeholder='Resturant and Cusines'
            keyboardType='default'
          ></TextInput>
        </View>
        <AdjustmentsVerticalIcon color='cyan' />
      </View>

      {/* Body */}
      <ScrollView
        className='bg-gray-400'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories></Categories>

        {/* Featured Rows */}
        <FeaturedRow
          id='123'
          title='Features'
          description='Paid Placement from our partners'
          // featuredCategory='featured'
        />
        {/* Tasty Discounts  */}
        <FeaturedRow
          id='1234'
          title='Tasty Discounts'
          description='Everyone been  enjoyng these juciy discount'
          // featuredCategory='discounts'
        />
        {/* Offers near you */}
        <FeaturedRow
          id='12345'
          title='offers near you!'
          description='Why not support your local resturant tonight!!'
          // featuredCategory='offers'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
