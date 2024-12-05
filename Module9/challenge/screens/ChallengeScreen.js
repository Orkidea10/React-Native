import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ChallengeScreen = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button has been clicked`);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.header}>App</Text>
      <View style={styles.profile}>
        <View style={styles.avatarpic}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Replace with a placeholder
            }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>JOHN DOE</Text>
        <Text style={styles.role}>UI/UX Designer</Text>
        <Text style={styles.description}>
          We're passionate about creating beautiful designs for startups & leading brands
        </Text>
        <TouchableOpacity
          style={styles.hireBtn}
          onPress={() => handleButtonClick('Hire Him')}
        >
          <Text style={styles.hireBtnText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.projectsSection}>
        <Text style={styles.Title}>PROJECTS</Text>
        <TouchableOpacity onPress={() => handleButtonClick('View All')}>
          <Text style={styles.viewAllBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.projectsPics}>
        <Image
          source={{
            uri: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp',
          }}
          style={styles.projectImg}
        />
        <Image
          source={{
            uri: 'https://img.freepik.com/free-psd/travel-insurance-template-psd-with-editable-text_53876-140328.jpg',
          }}
          style={styles.projectImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profile: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  avatarpic: {
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  hireBtn: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  hireBtnText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  projectsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAllBtn: {
    fontSize: 14,
    color: '#007BFF',
  },
  projectsPics: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  projectImg: {
    width: 150, 
    height: 100, 
    borderRadius: 10,
  },
});

export default ChallengeScreen;
