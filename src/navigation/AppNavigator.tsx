import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedbackScreen from '../screens/FeedbackScreen';
import ThankYouScreen from '../screens/ThankYouScreen';

export type RootStackParamList = {
  Feedback: undefined;
  ThankYou: { rating: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
    </Stack.Navigator>
  );
}
