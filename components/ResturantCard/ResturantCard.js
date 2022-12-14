import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  address,
  short_description,
  dishes,
  long,
  lat,
  genere,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 drop-shadow-lg rounded'>
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-64 rounded'
      ></Image>
      <View className="m-2">
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon color='green' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-600'>{rating}</Text> . {genere}
          </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                  <MapPinIcon color='gray' opacity={0.4} size={22} />
                  <Text className="text-xs text-gray-500"> NearBy . { address}</Text>
              </View>
      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard
