import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TAGS = ['Support', 'Quality', 'Delivery', 'Pricing', 'Service'];

interface Props {
  selected: string[];
  onChange: (tags: string[]) => void;
}

export default function TagChips({ selected, onChange }: Props) {
  const toggle = (tag: string) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else if (selected.length < 3) {
      onChange([...selected, tag]);
    }
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
      {TAGS.map((tag) => (
        <TouchableOpacity
          key={tag}
          onPress={() => toggle(tag)}
          style={{
            padding: 8,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: selected.includes(tag) ? '#00b359' : '#ccc',
            margin: 4,
          }}
        >
          <Text>{tag}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
