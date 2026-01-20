import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OPTIONS = [
  'Poor customer service',
  'Late delivery',
  'Product quality issues',
];

interface Props {
  value: string | null;
  onSelect: (val: string) => void;
}

export default function FeedbackOptions({ value, onSelect }: Props) {
  return (
    <View>
      <Text style={{ fontWeight: '600', marginBottom: 10 }}>
        What went wrong?
      </Text>
      {OPTIONS.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => onSelect(item)}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: value === item ? 'red' : '#ccc',
            marginBottom: 8,
            borderRadius: 8,
          }}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
