import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-gray-700 pt-3'>
      <Text className=' text-red-500  text-2xl my-10'>
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-9 w-9 bg-gray-700 p-5 rounded-full'
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver Now!
            </Text>
            <Text className='font-bold  text-gray-900 text-xl'>
              Current Location
              <ChevronDownIcon size={20} color='cyan' />
            </Text>
          </View>
          <UserIcon size={35} color='cyan' />
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen
