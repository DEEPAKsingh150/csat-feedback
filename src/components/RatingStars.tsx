import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  rating: number;
  onChange: (value: number) => void;
}

export default function RatingStars({ rating, onChange }: Props) {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => onChange(star)}>
          <Ionicons
            name={star <= rating ? 'star' : 'star-outline'}
            size={32}
            color={star <= rating ? '#FFA500' : '#ccc'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
