import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ItemList = ({navigation}) => {
  const items = [
    {
      Title: 'It Starts With Us',
      Author: 'Colleen Hoover',
      Price: 350,
      Pages: 352,
      Rating: 4.5,
      Language: 'English',
      Description:
        'It Starts with Us is a captivating and thought-provoking book that delves into the power of individual actions and their impact on the world around us. Through compelling storytelling and relatable characters, the book explores themes of personal responsibility, empathy, and the ripple effect that small acts of kindness and courage can have on society. With its inspiring message and engaging narrative, It Starts with Us reminds readers of their capacity to make a difference and encourages them to embrace their role in creating a better future for all.',
      Genre: 'Contemporary Fiction',
      ImagePath: require('../Images/books_png/ItStartsWithUs.png'),
    },
    {
      Title: 'All Your Perfects',
      Author: 'Colleen Hoover',
      Price: 300,
      Pages: 320,
      Rating: 4.6,
      Language: 'English',
      Description:
        'All Your Perfects is a heart-wrenching novel that explores the complexities of love and the challenges that can strain even the strongest relationships. Colleen Hoover masterfully portrays the raw emotions and the fragile balance between perfection and imperfection. With its honest and poignant narrative, this book will deeply resonate with readers and leave a lasting impact.',
      Genre: 'Romance',
      ImagePath: require('../Images/books_png/AllYourPerfects.png'),
    },
    {
      Title: 'Atomic Habits',
      Author: 'James Clear',
      Price: 400,
      Pages: 320,
      Rating: 4.8,
      Language: 'English',
      Description:
        'Atomic Habits is a groundbreaking book that provides practical strategies for building good habits, breaking bad ones, and making meaningful changes in your life. James Clear presents a clear and actionable framework backed by scientific research. Whether you want to improve your personal or professional life, this book offers valuable insights and techniques to transform your habits and achieve remarkable results.',
      Genre: 'Self-Help',
      ImagePath: require('../Images/books_png/AtomicHabits.png'),
    },
    {
      Title: 'Dune',
      Author: 'Frank Herbert',
      Price: 450,
      Pages: 688,
      Rating: 4.3,
      Language: 'English',
      Description:
        'Dune is a science fiction masterpiece that transports readers to a distant future where interstellar travel, political intrigue, and mystical powers shape the destiny of humanity. Frank Herbert weaves a rich and complex narrative, exploring themes of power, ecology, and the human potential. With its epic scope and imaginative world-building, Dune has captivated generations of readers.',
      Genre: 'Science Fiction',
      ImagePath: require('../Images/books_png/Dune.png'),
    },
    {
      Title: 'Harry Potter',
      Author: 'J.K. Rowling',
      Price: 500,
      Pages: 416,
      Rating: 4.7,
      Language: 'English',
      Description:
        "Harry Potter is a beloved fantasy series that follows the magical journey of Harry Potter and his friends at Hogwarts School of Witchcraft and Wizardry. J.K. Rowling's enchanting storytelling, vivid characters, and immersive world have captured the hearts of millions worldwide. With themes of friendship, bravery, and the battle between good and evil, Harry Potter continues to inspire readers of all ages.",
      Genre: 'Fantasy',
      ImagePath: require('../Images/books_png/HarryPotter.png'),
    },
    {
      Title: 'Ikigai',
      Author: 'Héctor García and Francesc Miralles',
      Price: 320,
      Pages: 208,
      Rating: 4.2,
      Language: 'English',
      Description:
        'Ikigai is a thought-provoking book that explores the Japanese concept of finding purpose and meaning in life. Héctor García and Francesc Miralles delve into the secrets of longevity and happiness, providing practical insights on how to discover and cultivate your own ikigai. With a blend of personal stories and research, this book offers valuable lessons and inspiration for leading a fulfilling and purpose-driven life.',
      Genre: 'Personal Development',
      Genre: 'Personal Development',
      ImagePath: require('../Images/books_png/Ikigai.png'),
    },
    {
      Title: 'It Ends With Us',
      Author: 'Colleen Hoover',
      Price: 350,
      Pages: 384,
      Rating: 4.7,
      Language: 'English',
      Description:
        'It Ends With Us is a powerful and emotionally charged novel that tackles sensitive topics with grace and authenticity. Colleen Hoover masterfully weaves a story of love, resilience, and self-discovery, exploring the complexities of relationships and the strength it takes to break the cycle of abuse. This thought-provoking book will leave a lasting impact and inspire readers to examine their own perceptions of love and boundaries.',
      Genre: 'Contemporary Fiction',
      Genre: 'Contemporary Fiction',
      ImagePath: require('../Images/books_png/ItEndsWithUs.png'),
    },
    {
      Title: 'November 9',
      Author: 'Colleen Hoover',
      Price: 320,
      Pages: 320,
      Rating: 4.5,
      Language: 'English',
      Description:
        'November 9 is a captivating love story that unfolds on the same date each year. Colleen Hoover crafts a beautifully written and emotionally charged novel, exploring the complexities of relationships, forgiveness, and second chances. With its compelling characters and unexpected twists, November 9 will keep readers hooked until the very last page.',
      Genre: 'Romance',
      ImagePath: require('../Images/books_png/November9.png'),
    },
    {
      Title: 'One Day Life Will Change',
      Author: 'Saranya Umakanthan',
      Price: 250,
      Pages: 232,
      Rating: 4.4,
      Language: 'English',
      Description:
        "One Day Life Will Change is an inspiring and uplifting book that chronicles the author's personal journey and the valuable life lessons she learned along the way. Saranya Umakanthan shares her experiences, triumphs, and challenges, offering wisdom and guidance to readers seeking transformation and personal growth. With its heartfelt storytelling and motivational messages, this book encourages readers to embrace change and discover their true potential.",
      Genre: 'Fiction',
      ImagePath: require('../Images/books_png/OneDayLifeWillChange.png'),
    },
    {
      Title: 'Reminders of Him',
      Author: 'Bhavya Choudhary',
      Price: 280,
      Pages: 258,
      Rating: 4.6,
      Language: 'English',
      Description:
        'Reminders of Him is a poignant and deeply moving novel that explores love, loss, and the power of memories. Deborah Winters crafts a beautiful story of healing and self-discovery, as the protagonist navigates through heartbreak and learns to find solace in the reminders of her loved one. With its evocative prose and heartfelt emotions, this book will resonate with readers and remind them of the enduring power of love.',
      Genre: 'Fiction',
      ImagePath: require('../Images/books_png/RemindersOfHim.png'),
    },
    {
      Title: 'The Psychology of Money',
      Author: 'Morgan Housel',
      Price: 380,
      Pages: 256,
      Rating: 4.8,
      Language: 'English',
      Description:
        'The Psychology of Money offers a fascinating exploration of the behavioral aspects of personal finance. Morgan Housel combines storytelling and research to uncover the hidden drivers behind our financial decisions. With insightful anecdotes and thought-provoking lessons, this book challenges conventional wisdom and provides valuable insights to help readers develop a healthier relationship with money.',
      Genre: 'Finance',
      ImagePath: require('../Images/books_png/ThePsychologyOfMoney.png'),
    },
    {
      Title: 'Twisted Love',
      Author: 'R. Linda',
      Price: 300,
      Pages: 298,
      Rating: 4.3,
      Language: 'English',
      Description:
        'Twisted Love is a gripping psychological thriller that explores the dark depths of obsession, manipulation, and the complexities of human relationships. Siddhi Pawar masterfully weaves a suspenseful narrative, keeping readers on the edge of their seats. With its twists and turns, this book will challenge your perceptions and leave you questioning the true nature of love.',
      Genre: 'Mystery',
      ImagePath: require('../Images/books_png/TwistedLove.png'),
    },
    {
      Title: 'Ugly Love',
      Author: 'Colleen Hoover',
      Price: 340,
      Pages: 336,
      Rating: 4.5,
      Language: 'English',
      Description:
        'Ugly Love is an emotionally charged and deeply poignant novel that explores the complexities of love, loss, and forgiveness. Colleen Hoover crafts a heart-wrenching story, delving into the raw emotions and vulnerabilities of the characters. With its evocative prose and powerful themes, Ugly Love will take you on an unforgettable journey of love and redemption.',
      Genre: 'Romance',
      ImagePath: require('../Images/books_png/UglyLove.png'),
    },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = item => {
    setSelectedItem(item);
    navigation.navigate('Product', {item});
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleItemPress(item)}>
            <View style={styles.tbookw}>
              <Image source={item.ImagePath} style={styles.bookpng} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 6,
                }}>
                <View style={styles.IconW}>
                  <Image
                    source={require('../Images/pages.png')}
                    style={styles.Icons}
                  />
                  <View>
                    <Text style={{marginTop: 9, marginLeft: 5}}>
                      {item.Pages}
                    </Text>
                  </View>
                </View>
                <View style={styles.IconW}>
                  <Image
                    source={require('../Images/Star.png')}
                    style={styles.Icons}
                  />
                  <View>
                    <Text style={{marginTop: 9, marginLeft: 5}}>
                      {item.Rating}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bookpng: {
    height: 175,
    width: 112,
  },
  tbookw: {
    margin: 12,
    elevation: 20,
  },
  Icons: {
    height: 15,
    width: 15,
    marginTop: 10,
  },
  IconW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ItemList;
