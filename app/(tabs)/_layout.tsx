import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

interface Props {
  focused: any,
  icon: any,
  name: string,
}

const TabIcon = ({ focused, icon, name }: Props) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
      >
        <Image source={icon} tintColor='#151312' className="size-5" />
        <Text className='text-secondary text-base font-semibold ml-2'>{name}</Text>
      </ImageBackground>
    )
  }

  return (
    <View className='size-full items-center justify-center mt-4 rounded-full'>
      <Image source={icon} tintColor='#A8B6DB' className='size-5' />
    </View>
  )
}

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderColor: "#0F0D23",
          borderWidth: 1
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} name={'Home'} />
          )
        }}
      />

      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} name={'Search'} />
          )
        }} />

      <Tabs.Screen
        name='saved'
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} name={'Saved'} />
          )
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} name={'Profile'} />
          )
        }} />
    </Tabs>
  )
}

export default _Layout