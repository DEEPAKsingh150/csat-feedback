import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import RatingStars from '../components/RatingStars';
import FeedbackOptions from '../components/FeedbackOptions';
import TagChips from '../components/TagChips';

export default function FeedbackScreen({ navigation }: any) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const submit = () => {
    navigation.navigate('ThankYou', { rating });
  };

  // Dynamic background based on rating
  const getBackgroundColor = () => {
    if (rating === 0) return '#f5f5f5'; // default gray
    if (rating <= 3) return '#ffcccc'; // red/pink for low rating
    if (rating === 4) return '#fff0b3'; // yellow for medium
    if (rating === 5) return '#ccffcc'; // green for high rating
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: getBackgroundColor() },
      ]}
    >
      <Animatable.Text animation="fadeInDown" duration={800} style={styles.heading}>
        Rate your experience
      </Animatable.Text>

      <Animatable.View animation="bounceIn" duration={1000} style={styles.ratingContainer}>
        <RatingStars rating={rating} onChange={setRating} />
      </Animatable.View>

      {rating > 0 && rating <= 3 && (
        <Animatable.View animation="fadeIn" duration={800} style={styles.feedbackContainer}>
          <FeedbackOptions value={feedback} onSelect={setFeedback} />
        </Animatable.View>
      )}

      <Animatable.View animation="fadeInUp" duration={800} style={styles.tagsContainer}>
        <TagChips
          selected={tags}
          onChange={setTags}
          style={{
            backgroundColor: tags.length > 0 ? '#e0f7fa' : '#fff',
          }}
        />
      </Animatable.View>

      <TouchableOpacity
        style={[styles.submitButton, rating === 0 && { backgroundColor: '#ccc' }]}
        disabled={rating === 0}
        onPress={submit}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  ratingContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  feedbackContainer: {
    marginVertical: 15,
  },
  tagsContainer: {
    marginVertical: 15,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
