import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ThankYouScreen({ route, navigation }: any) {
  const { rating } = route.params;

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      {rating >= 4 ? (
        <Text style={{ fontSize: 22 }}>🎉 Thank you for your feedback!</Text>
      ) : (
        <Text style={{ fontSize: 22 }}>😔 We’re sorry. We’ll improve.</Text>
      )}

      <Button title="Done" onPress={() => navigation.popToTop()} />
    </View>
  );
}
