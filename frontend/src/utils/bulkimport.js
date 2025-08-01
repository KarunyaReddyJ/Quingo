// dummySignup.js
import { faker } from '@faker-js/faker';
import { userSignup } from '../services/authServices.js' // adjust this import

export const createDummyUsers = async (count = 25) => {
  const dummyUsers = [];

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const email = faker.internet.email({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] });
    const password = 'password123';

    const user = {
      name,
      email,
      password,
    };

    try {
      const data = await userSignup(user);
      console.log(`✅ Created user: ${data.name} (${data.email})`);
      dummyUsers.push(data);
    } catch (err) {
      console.error(`❌ Failed for ${user.email}:`, err?.response?.data || err.message);
    }
  }

  return dummyUsers;
};

// createDummyUsers().then((users) => {
//   console.log(`\n🎉 Finished creating ${users.length} users.`);
// });
const posts =[
  {
    "user": "688aefb1665f1ea00a377705",
    "content": "Just updated to Grok 3.5! It's amazing how much smarter it is. #AI #technology",
    "likes": ["688b2ce2e0b38cf98e63ad83", "688b2ce2e0b38cf98e63ad84"],
    "commentCount": 15,
    "media": null
  },
  {
    "user": "688b266d3d61578a18b81fc9",
    "content": "Watched the new Marvel movie last night. The special effects were out of this world! #movies #2025",
    "likes": ["688b2ce3e0b38cf98e63ad8c", "688b2ce3e0b38cf98e63ad8f"],
    "commentCount": 23,
    "media": null
  },
  {
    "user": "688b2ce2e0b38cf98e63ad83",
    "content": "Voted today in the local elections. Hope for a better future! #elections #democracy",
    "likes": ["688b2ce4e0b38cf98e63ad95", "688b2ce4e0b38cf98e63ad98"],
    "commentCount": 37,
    "media": null
  },
  {
    "user": "688b2ce2e0b38cf98e63ad84",
    "content": "Saw a beautiful rainbow after the storm. Nature is amazing. #photography",
    "likes": ["688b2ce5e0b38cf98e63ada4", "688b2ce5e0b38cf98e63ada8"],
    "commentCount": 45,
    "media": null
  },
  {
    "user": "688b2ce2e0b38cf98e63ad82",
    "content": "Tesla's new model is finally here! Can't wait to test drive it. #electriccars #Tesla",
    "likes": ["688b2ce6e0b38cf98e63adba", "688b2ce6e0b38cf98e63adbb"],
    "commentCount": 50,
    "media": "https://example.com/tesla.jpg"
  },
  {
    "user": "688b2ce3e0b38cf98e63ad8c",
    "content": "Climate change is real. We need to act now. #environment #sustainability",
    "likes": ["688b2ce7e0b38cf98e63adc6", "688b2ce7e0b38cf98e63adc8"],
    "commentCount": 62,
    "media": null
  },
  {
    "user": "688b2ce3e0b38cf98e63ad8f",
    "content": "Just finished reading 'The Future of AI'. Highly recommend it! #books #AI",
    "likes": ["688b2ce8e0b38cf98e63ade0", "688b2ce8e0b38cf98e63ade4"],
    "commentCount": 7,
    "media": null
  },
  {
    "user": "688b2ce3e0b38cf98e63ad92",
    "content": "My cat did the cutest thing today. #pets #cats",
    "likes": ["688b2ce9e0b38cf98e63adeb", "688b2ce9e0b38cf98e63adec"],
    "commentCount": 12,
    "media": null
  },
  {
    "user": "688b2ce4e0b38cf98e63ad95",
    "content": "Stock market is crazy today. Anyone else feeling the volatility? #finance #stocks",
    "likes": ["688b2ceae0b38cf98e63adfa", "688b2ceae0b38cf98e63adff"],
    "commentCount": 89,
    "media": null
  },
  {
    "user": "688b2ce4e0b38cf98e63ad98",
    "content": "New restaurant opened in town. Tried their pasta, delicious! #foodie #newrestaurant",
    "likes": ["688b2cebe0b38cf98e63ae0e", "688b2cebe0b38cf98e63ae11"],
    "commentCount": 15,
    "media": "https://example.com/pasta.jpg"
  },
  {
    "user": "688b2ce4e0b38cf98e63ad9e",
    "content": "SpaceX launched another rocket today. When will we colonize Mars? #space #exploration",
    "likes": ["688b2cece0b38cf98e63ae19", "688b2cece0b38cf98e63ae20"],
    "commentCount": 33,
    "media": null
  },
  {
    "user": "688b2ce4e0b38cf98e63ad9f",
    "content": "Attended a protest for climate action. The energy was incredible. #activism #climate",
    "likes": ["688b2cede0b38cf98e63ae2b", "688b2cede0b38cf98e63ae2d"],
    "commentCount": 47,
    "media": null
  },
  {
    "user": "688b2ce5e0b38cf98e63ada4",
    "content": "My garden is blooming beautifully this season. #gardening #nature",
    "likes": ["688b2ceee0b38cf98e63ae36", "688b2ceee0b38cf98e63ae38"],
    "commentCount": 21,
    "media": null
  },
  {
    "user": "688b2ce5e0b38cf98e63ada8",
    "content": "Apple announced their new iPhone with holographic display. Mind-blowing! #tech #Apple",
    "likes": ["688b2cefe0b38cf98e63ae42", "688b2cefe0b38cf98e63ae45"],
    "commentCount": 55,
    "media": null
  },
  {
    "user": "688b2ce5e0b38cf98e63adae",
    "content": "Using Whisper for transcribing my lectures. Saves so much time! #AI #productivity",
    "likes": ["688b2cf0e0b38cf98e63ae56", "688b2cf0e0b38cf98e63ae58"],
    "commentCount": 68,
    "media": "https://example.com/whisper.jpg"
  },
  {
    "user": "688b2ce5e0b38cf98e63adaf",
    "content": "The debate last night was intense. What did you think? #politics #debate",
    "likes": ["688b2cf0e0b38cf98e63ae5b", "688b2cf0e0b38cf98e63ae5e"],
    "commentCount": 102,
    "media": null
  },
  {
    "user": "688b2ce6e0b38cf98e63adba",
    "content": "Just booked my ticket for the concert next month. So excited! #music #concert",
    "likes": ["688b2cf1e0b38cf98e63ae64", "688b2cf1e0b38cf98e63ae67"],
    "commentCount": 17,
    "media": null
  },
  {
    "user": "688b2ce6e0b38cf98e63adbb",
    "content": "My kid's first day of school. Time flies! #backtoschool #parents",
    "likes": ["688b2cf1e0b38cf98e63ae6a", "688b2cf1e0b38cf98e63ae6d"],
    "commentCount": 29,
    "media": null
  },
  {
    "user": "688b2ce6e0b38cf98e63adbc",
    "content": "Netflix's new series is a must-watch. Binge-watching all weekend! #TV #Netflix",
    "likes": ["688b2cf2e0b38cf98e63ae73", "688b2cf2e0b38cf98e63ae76"],
    "commentCount": 35,
    "media": null
  },
  {
    "user": "688b2ce6e0b38cf98e63adc1",
    "content": "Tried CBG Gummies for the first time. Feeling relaxed and focused. #wellness #CBD",
    "likes": ["688b2cf2e0b38cf98e63ae79", "688b2cf2e0b38cf98e63ae7d"],
    "commentCount": 41,
    "media": "https://example.com/cbg.jpg"
  },
  {
    "user": "688b2ce6e0b38cf98e63adc3",
    "content": "Learned about quantum computing today. My brain hurts, but it's fascinating. #science #quantum",
    "likes": ["688b2cf3e0b38cf98e63ae82", "688b2cf3e0b38cf98e63ae85"],
    "commentCount": 53,
    "media": null
  },
  {
    "user": "688b2ce7e0b38cf98e63adc6",
    "content": "Local farmer's market had the best strawberries. Support local businesses! #farmersmarket #local",
    "likes": ["688b2cf3e0b38cf98e63ae88", "688b2cf3e0b38cf98e63ae8e"],
    "commentCount": 6,
    "media": null
  },
  {
    "user": "688b2ce7e0b38cf98e63adc8",
    "content": "My startup just got funded! Dreams do come true. #entrepreneur #startup",
    "likes": ["688b2cf4e0b38cf98e63ae91", "688b2cf4e0b38cf98e63ae95"],
    "commentCount": 77,
    "media": null
  },
  {
    "user": "688b2ce7e0b38cf98e63add0",
    "content": "The ocean is so peaceful. Needed this break. #beach #relaxation",
    "likes": ["688b2cf4e0b38cf98e63ae98", "688b2cf4e0b38cf98e63ae9c"],
    "commentCount": 19,
    "media": null
  },
  {
    "user": "688b2ce7e0b38cf98e63add3",
    "content": "Cryptocurrency prices are soaring again. Time to invest? #crypto #bitcoin",
    "likes": [],
    "commentCount": 120,
    "media": "https://example.com/crypto.jpg"
  },
  {
    "user": "688b2ce7e0b38cf98e63add8",
    "content": "Volunteered at the animal shelter today. So many cute dogs! #volunteer #animals",
    "likes": ["688b2cf5e0b38cf98e63ae9f", "688b2cf5e0b38cf98e63aea5"],
    "commentCount": 25,
    "media": null
  },
  {
    "user": "688b2ce7e0b38cf98e63add9",
    "content": "The new art exhibit is stunning. Art really speaks to the soul. #art #museum",
    "likes": ["688b2cf5e0b38cf98e63aeab", "688b2cf6e0b38cf98e63aeac"],
    "commentCount": 31,
    "media": null
  },
  {
    "user": "688b2ce8e0b38cf98e63addc",
    "content": "My fitness journey is paying off. Down 10 pounds! #fitness #health",
    "likes": ["688b2cf6e0b38cf98e63aeb0", "688b2cf6e0b38cf98e63aeb1"],
    "commentCount": 43,
    "media": null
  },
  {
    "user": "688b2ce8e0b38cf98e63ade0",
    "content": "Just saw a shooting star. Made a wish! #nightsky #astronomy",
    "likes": ["688b2cf6e0b38cf98e63aeb7", "688b2cf6e0b38cf98e63aeb8"],
    "commentCount": 5,
    "media": null
  },
  {
    "user": "688b2ce8e0b38cf98e63ade4",
    "content": "Just got a Boucle Bed. It's so comfortable and stylish! #home #decor",
    "likes": ["688b2cf7e0b38cf98e63aebe", "688b2cf7e0b38cf98e63aec2"],
    "commentCount": 59,
    "media": "https://example.com/bouclebed.jpg"
  },
  {
    "user": "688b2ce8e0b38cf98e63ade5",
    "content": "My favorite band released a new album today. Listening on repeat. #music #newmusic",
    "likes": ["688b2cf8e0b38cf98e63aec5", "688b2cf8e0b38cf98e63aec8"],
    "commentCount": 65,
    "media": null
  },
  {
    "user": "688b2ce9e0b38cf98e63adeb",
    "content": "Cooked a gourmet meal at home. Chef skills leveling up! #cooking #food",
    "likes": ["688b2cf8e0b38cf98e63aecb", "688b2cf8e0b38cf98e63aece"],
    "commentCount": 71,
    "media": null
  },
  {
    "user": "688b2ce9e0b38cf98e63adec",
    "content": "The city council meeting was eye-opening. We need more transparency. #localgovernment #politics",
    "likes": ["688b2cf9e0b38cf98e63aed1", "688b2d43e0b38cf98e63aedc"],
    "commentCount": 83,
    "media": null
  },
  {
    "user": "688b2ce9e0b38cf98e63adee",
    "content": "My grandma turned 90 today! Happy birthday! #family #birthday",
    "likes": ["688b2d44e0b38cf98e63aedf", "688b2d44e0b38cf98e63aeea"],
    "commentCount": 9,
    "media": "https://example.com/birthday.jpg"
  },
  {
    "user": "688b2ce9e0b38cf98e63adf2",
    "content": "The tech conference was inspiring. So many innovators in one place. #tech #innovation",
    "likes": ["688b2d44e0b38cf98e63aef0", "688b2d44e0b38cf98e63aef3"],
    "commentCount": 95,
    "media": null
  },
  {
    "user": "688b2ce9e0b38cf98e63adf6",
    "content": "Just adopted a rescue dog. Best decision ever! #pets #adoption",
    "likes": ["688b2d45e0b38cf98e63aef6", "688b2d45e0b38cf98e63aef9"],
    "commentCount": 107,
    "media": null
  },
  {
    "user": "688b2ce9e0b38cf98e63adf8",
    "content": "The new VR headset is revolutionary. Gaming will never be the same. #VR #gaming",
    "likes": ["688b2d45e0b38cf98e63aefc", "688b2d45e0b38cf98e63aeff"],
    "commentCount": 113,
    "media": null
  },
  {
    "user": "688b2ceae0b38cf98e63adfa",
    "content": "Protesting for workers' rights. Fair wages for all! #labor #rights",
    "likes": ["688b2d45e0b38cf98e63af02", "688b2d46e0b38cf98e63af05"],
    "commentCount": 125,
    "media": "https://example.com/protest.jpg"
  },
  {
    "user": "688b2ceae0b38cf98e63adff",
    "content": "My YouTube channel hit 10k subscribers. Thank you all! #YouTube #creator",
    "likes": ["688b2d46e0b38cf98e63af08", "688b2d46e0b38cf98e63af0b"],
    "commentCount": 137,
    "media": null
  },
  {
    "user": "688b2ceae0b38cf98e63ae02",
    "content": "The solar eclipse was breathtaking. Once in a lifetime event. #eclipse #astronomy",
    "likes": ["688b2d46e0b38cf98e63af0e", "688b2d46e0b38cf98e63af11"],
    "commentCount": 149,
    "media": null
  },
  {
    "user": "688b2ceae0b38cf98e63ae07",
    "content": "Investing in renewable energy stocks. The future is green. #investing #renewable",
    "likes": ["688b2d47e0b38cf98e63af14", "688b2d47e0b38cf98e63af17"],
    "commentCount": 161,
    "media": null
  },
  {
    "user": "688b2ceae0b38cf98e63ae08",
    "content": "Just finished a marathon. Exhausted but happy! #running #marathon",
    "likes": ["688b2d47e0b38cf98e63af1a", "688b2d47e0b38cf98e63af1d"],
    "commentCount": 173,
    "media": null
  },
  {
    "user": "688b2ceae0b38cf98e63ae09",
    "content": "The new smartphone has a foldable screen. Technology is wild. #tech #smartphone",
    "likes": ["688b2d48e0b38cf98e63af20", "688b2d48e0b38cf98e63af23"],
    "commentCount": 185,
    "media": "https://example.com/smartphone.jpg"
  },
  {
    "user": "688b2cebe0b38cf98e63ae0e",
    "content": "Attended a workshop on mindfulness. Feeling centered. #mentalhealth #mindfulness",
    "likes": ["688b2d49e0b38cf98e63af26", "688b2d49e0b38cf98e63af29"],
    "commentCount": 197,
    "media": null
  },
  {
    "user": "688b2cebe0b38cf98e63ae11",
    "content": "My garden party was a success. Great food, great friends. #party #friends",
    "likes": ["688b2d49e0b38cf98e63af2c", "688b2d49e0b38cf98e63af2f"],
    "commentCount": 200,
    "media": null
  },
  {
    "user": "688b2cebe0b38cf98e63ae13",
    "content": "The stock market crashed today. Stay calm, everyone. #finance #market",
    "likes": ["688b2dcce0b38cf98e63af32", "688b2dcce0b38cf98e63af35"],
    "commentCount": 15,
    "media": null
  },
  {
    "user": "688b2cebe0b38cf98e63ae15",
    "content": "Just saw 'Dune: Part Three'. Epic as always! #movies #sci-fi",
    "likes": ["688b2dcde0b38cf98e63af3d", "688b2dcde0b38cf98e63af40"],
    "commentCount": 27,
    "media": null
  },
  {
    "user": "688b2cece0b38cf98e63ae19",
    "content": "My child's science fair project won first place. So proud! #parenting #education",
    "likes": ["688b2dcde0b38cf98e63af43", "688b2dcde0b38cf98e63af46"],
    "commentCount": 39,
    "media": null
  },
  {
    "user": "688b2cece0b38cf98e63ae20",
    "content": "The new electric plane took its first flight. The future of travel. #aviation #electric",
    "likes": ["688b2dcde0b38cf98e63af49", "688b2dcee0b38cf98e63af4c"],
    "commentCount": 51,
    "media": "https://example.com/plane.jpg"
  },
  {
    "user": "688b2cece0b38cf98e63ae22",
    "content": "Celebrating International Women's Day. Empowering women everywhere! #IWD #women",
    "likes": ["688b2dcee0b38cf98e63af4f", "688b2dcee0b38cf98e63af52"],
    "commentCount": 63,
    "media": null
  }
]
export const fakePosts = async () => {
    try {
        const responses = await Promise.all(
            posts.map(post =>
                fetch('http://localhost:5000/api/test/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...post,commentCount:0})
                })
            )
        );

        const results = await Promise.all(responses.map(res => res.json()));
        console.log('All posts uploaded:', results);
    } catch (error) {
        console.error('Error uploading posts:', error);
    }
}