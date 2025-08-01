const email=document.getElementsByName('email')
const password=document.getElementsByName('password')
const login =document.querySelector('input[type="submit"]')


login.addEventListener('click',async(e)=>{
    e.preventDefault()
    try {
        const response=await fetch('https://quingo-76.vercel.app/api/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'karunyareddy1418@gmail.com',
                password: 'karunya',
            }),
        })
        console.table(response)
    } catch (error) {
        console.error("error undhi",error)
    }
})  

const posts =[
  {
    "user": "688aefb1665f1ea00a377705",
    "content": "Massive respect to our #MegastarChiranjeevi 💪🔥 Blockbuster loading with #Vishwambhara! Who's excited? 🥳 #TollywoodKing",
    "likes": ["688b266d3d61578a18b81fc9", "688b2ce2e0b38cf98e63ad83"],
    "comments": [
      {
        "user": "688b2ce2e0b38cf98e63ad84",
        "content": "Bro, can't wait for the trailer! 💥 #ChiruRules",
        "createdAt": "2025-07-30T10:15:00Z"
      }
    ],
    "media": "https://example.com/images/chiru_poster.jpg",
    "createdAt": "2025-07-30T09:00:00Z",
    "updatedAt": "2025-07-30T09:00:00Z"
  },
  {
    "user": "688b266d3d61578a18b81fc9",
    "content": "Only #PawanKalyan can pull off such swag 😎 #OG glimpse is 🔥🔥 Anna fans, where you at? 🙌 #PowerStar",
    "likes": ["688b2ce2e0b38cf98e63ad82", "688b2ce3e0b38cf98e63ad8c"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-30T11:30:00Z",
    "updatedAt": "2025-07-30T11:30:00Z"
  },
  {
    "user": "688b2ce2e0b38cf98e63ad83",
    "content": "#MaheshBabu is the king of box office! 💰 #GunturKaaram rewatched again, what a vibe 😍 #SSMBFans",
    "likes": ["688b2ce3e0b38cf98e63ad8f", "688b2ce4e0b38cf98e63ad95"],
    "comments": [
      {
        "user": "688b2ce4e0b38cf98e63ad98",
        "content": "Superstar for a reason! 🌟 #MaheshMania",
        "createdAt": "2025-07-30T12:45:00Z"
      }
    ],
    "media": "https://example.com/images/guntur_kaaram.jpg",
    "createdAt": "2025-07-30T12:00:00Z",
    "updatedAt": "2025-07-30T12:00:00Z"
  },
  {
    "user": "688b2ce2e0b38cf98e63ad84",
    "content": "Why compare #NTR with others? He’s in a league of his own! 🦁 #War2 update when? 😤 #TarakFans",
    "likes": ["688b2ce5e0b38cf98e63ada4", "688b2ce6e0b38cf98e63adba"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-30T13:15:00Z",
    "updatedAt": "2025-07-30T13:15:00Z"
  },
  {
    "user": "688b2ce2e0b38cf98e63ad82",
    "content": "#AlluArjun fans, let’s make #Pushpa2 trend worldwide! 🌍🔥 Bunny’s rule begins! 🐰 #AAFans",
    "likes": ["688b2ce7e0b38cf98e63adc6", "688b2ce8e0b38cf98e63addc"],
    "comments": [
      {
        "user": "688b2ce9e0b38cf98e63adeb",
        "content": "Bunny swag unmatched! 😎 #PushpaTheRule",
        "createdAt": "2025-07-30T14:30:00Z"
      }
    ],
    "media": "https://example.com/images/pushpa2_poster.jpg",
    "createdAt": "2025-07-30T14:00:00Z",
    "updatedAt": "2025-07-30T14:00:00Z"
  },
  {
    "user": "688b2ce3e0b38cf98e63ad8c",
    "content": "Haters gonna hate, but #Prabhas is unstoppable! 💥 #Salaar2 will break all records! 🙏 #DarlingFans",
    "likes": ["688b2ceae0b38cf98e63adff", "688b2cebe0b38cf98e63ae0e"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-30T15:00:00Z",
    "updatedAt": "2025-07-30T15:00:00Z"
  },
  {
    "user": "688b2ce3e0b38cf98e63ad8f",
    "content": "#VijayDeverakonda is the youth icon! 😍 #VD12 will be a game-changer! 🔥 #RowdyFans",
    "likes": ["688b2cede0b38cf98e63ae2b", "688b2ceee0b38cf98e63ae36"],
    "comments": [
      {
        "user": "688b2cefe0b38cf98e63ae42",
        "content": "Rowdy for life! 💪 #VijayDeverakonda",
        "createdAt": "2025-07-30T16:15:00Z"
      }
    ],
    "media": "https://example.com/images/vd12_teaser.jpg",
    "createdAt": "2025-07-30T16:00:00Z",
    "updatedAt": "2025-07-30T16:00:00Z"
  },
  {
    "user": "688b2ce3e0b38cf98e63ad92",
    "content": "Chill bro, #RamCharan is coming with #GameChanger! 🎮🔥 No one can touch his class! 😎 #RCFans",
    "likes": ["688b2cf0e0b38cf98e63ae56", "688b2cf1e0b38cf98e63ae64"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-30T17:00:00Z",
    "updatedAt": "2025-07-30T17:00:00Z"
  },
  {
    "user": "688b2ce4e0b38cf98e63ad95",
    "content": "#Balayya fans, let’s roar! 🦁 #NBK109 is gonna be a mass blast! 💣 #JaiBalayya",
    "likes": ["688b2cf2e0b38cf98e63ae73", "688b2cf3e0b38cf98e63ae82"],
    "comments": [
      {
        "user": "688b2cf4e0b38cf98e63ae91",
        "content": "Balayya Babu mass! 🔥 #NBKFans",
        "createdAt": "2025-07-30T18:15:00Z"
      }
    ],
    "media": "https://example.com/images/nbk109_poster.jpg",
    "createdAt": "2025-07-30T18:00:00Z",
    "updatedAt": "2025-07-30T18:00:00Z"
  },
  {
    "user": "688b2ce4e0b38cf98e63ad98",
    "content": "Why no hype for #Nagarjuna? 😤 #NaaSaamiRanga was a gem! 💎 #NagFans",
    "likes": ["688b2cf5e0b38cf98e63ae9f", "688b2cf6e0b38cf98e63aeac"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-30T19:00:00Z",
    "updatedAt": "2025-07-30T19:00:00Z"
  },
  {
    "user": "688b2ce4e0b38cf98e63ad9e",
    "content": "#Chiranjeevi vs #PawanKalyan? No way, both are legends! 🙏 Let’s support #Tollywood! 💖",
    "likes": ["688b2cf7e0b38cf98e63aebe", "688b2cf8e0b38cf98e63aec5"],
    "comments": [
      {
        "user": "688b2d43e0b38cf98e63aedc",
        "content": "United we stand! 💪 #TollywoodPride",
        "createdAt": "2025-07-30T20:15:00Z"
      }
    ],
    "media": "https://example.com/images/tollywood_unity.jpg",
    "createdAt": "2025-07-30T20:00:00Z",
    "updatedAt": "2025-07-30T20:00:00Z"
  },
  {
    "user": "688b2ce4e0b38cf98e63ad9f",
    "content": "Just saw #Pushpa2 trailer! 😱 #AlluArjun is on another level! 🔥 #BunnyFans",
    "likes": ["688b2d44e0b38cf98e63aedf", "688b2d45e0b38cf98e63aef6"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-30T21:00:00Z",
    "updatedAt": "2025-07-30T21:00:00Z"
  },
  {
    "user": "688b2ce5e0b38cf98e63ada4",
    "content": "#MaheshBabu’s #SSMB29 will be a global hit! 🌍🔥 Hollywood level stuff! 😎 #SuperstarFans",
    "likes": ["688b2d46e0b38cf98e63af05", "688b2d47e0b38cf98e63af14"],
    "comments": [
      {
        "user": "688b2d48e0b38cf98e63af1a",
        "content": "Rajamouli + Mahesh = 🔥 #SSMB29",
        "createdAt": "2025-07-30T22:15:00Z"
      }
    ],
    "media": "https://example.com/images/ssmb29_poster.jpg",
    "createdAt": "2025-07-30T22:00:00Z",
    "updatedAt": "2025-07-30T22:00:00Z"
  },
  {
    "user": "688b2ce5e0b38cf98e63ada8",
    "content": "#NTR’s #War2 look is insane! 🦁 Bollywood better watch out! 😤 #TarakTornado",
    "likes": ["688b2d49e0b38cf98e63af29", "688b2dcce0b38cf98e63af32"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-30T23:00:00Z",
    "updatedAt": "2025-07-30T23:00:00Z"
  },
  {
    "user": "688b2ce5e0b38cf98e63adae",
    "content": "#PawanKalyan’s #OG is the most awaited film! 💥 Anna’s fans, let’s make some noise! 🙌 #PSPKFans",
    "likes": ["688b2dcde0b38cf98e63af35", "688b2dcde0b38cf98e63af3d"],
    "comments": [
      {
        "user": "688b2dcde0b38cf98e63af40",
        "content": "Jana Senani rocks! 🔥 #PowerStar",
        "createdAt": "2025-07-31T00:15:00Z"
      }
    ],
    "media": "https://example.com/images/og_teaser.jpg",
    "createdAt": "2025-07-31T00:00:00Z",
    "updatedAt": "2025-07-31T00:00:00Z"
  },
  {
    "user": "688b2ce5e0b38cf98e63adaf",
    "content": "Enough of these fan wars! 😑 Let’s enjoy #Tollywood movies together! 🍿💖 #CinemaLove",
    "likes": ["688b2dcde0b38cf98e63af43", "688b2dcde0b38cf98e63af46"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T01:00:00Z",
    "updatedAt": "2025-07-31T01:00:00Z"
  },
  {
    "user": "688b2ce6e0b38cf98e63adba",
    "content": "#Prabhas’s #Spirit will be a pan-India storm! 🌪️🔥 Darling fans, ready? 😎 #BaahubaliStar",
    "likes": ["688b2dcde0b38cf98e63af49", "688b2dcee0b38cf98e63af4c"],
    "comments": [
      {
        "user": "688b2dcee0b38cf98e63af4f",
        "content": "Prabhas = Box office king! 💰 #Spirit",
        "createdAt": "2025-07-31T02:15:00Z"
      }
    ],
    "media": "https://example.com/images/spirit_poster.jpg",
    "createdAt": "2025-07-31T02:00:00Z",
    "updatedAt": "2025-07-31T02:00:00Z"
  },
  {
    "user": "688b2ce6e0b38cf98e63adbb",
    "content": "#RamCharan’s #RC16 is gonna be epic! 🎬🔥 Charan fans, let’s hype it up! 😍 #GlobalStar",
    "likes": ["688b2dcee0b38cf98e63af52", "688b2dcee0b38cf98e63af55"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T03:00:00Z",
    "updatedAt": "2025-07-31T03:00:00Z"
  },
  {
    "user": "688b2ce6e0b38cf98e63adbc",
    "content": "#AlluArjun’s dance in #Pushpa2 will break the internet! 💃🔥 #BunnySwag",
    "likes": ["688b2dcfe0b38cf98e63af5b", "688b2dcfe0b38cf98e63af5e"],
    "comments": [
      {
        "user": "688b2dcfe0b38cf98e63af61",
        "content": "Icon Star for a reason! 🌟 #Pushpa2",
        "createdAt": "2025-07-31T04:15:00Z"
      }
    ],
    "media": "https://example.com/images/pushpa2_dance.jpg",
    "createdAt": "2025-07-31T04:00:00Z",
    "updatedAt": "2025-07-31T04:00:00Z"
  },
  {
    "user": "688b2ce6e0b38cf98e63adc1",
    "content": "#Chiranjeevi’s #Vishwambhara first look is mind-blowing! 😱🔥 Megastar forever! 💪 #ChiruFans",
    "likes": ["688b2dcfe0b38cf98e63af64", "688b2dcfe0b38cf98e63af67"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T05:00:00Z",
    "updatedAt": "2025-07-31T05:00:00Z"
  },
  {
    "user": "688b2ce6e0b38cf98e63adc3",
    "content": "#MaheshBabu’s style in #GunturKaaram is unmatched! 😎🔥 #SSMBFans let’s trend! 🌟",
    "likes": ["688b2dd0e0b38cf98e63af6a", "688b2dd0e0b38cf98e63af6d"],
    "comments": [
      {
        "user": "688b2dd0e0b38cf98e63af70",
        "content": "Superstar swag! 😍 #MaheshBabu",
        "createdAt": "2025-07-31T06:15:00Z"
      }
    ],
    "media": "https://example.com/images/guntur_kaaram_style.jpg",
    "createdAt": "2025-07-31T06:00:00Z",
    "updatedAt": "2025-07-31T06:00:00Z"
  },
  {
    "user": "688b2ce7e0b38cf98e63adc6",
    "content": "#NTR’s #War2 will redefine action! 🦁🔥 Tarak fans, let’s roar! 😤 #JrNTR",
    "likes": ["688b2dd0e0b38cf98e63af73", "688b2dd0e0b38cf98e63af76"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T07:00:00Z",
    "updatedAt": "2025-07-31T07:00:00Z"
  },
  {
    "user": "688b2ce7e0b38cf98e63adc8",
    "content": "#PawanKalyan’s #OG glimpse gave me goosebumps! 😱🔥 Anna is back! 💪 #PSPKFans",
    "likes": ["688b2dd1e0b38cf98e63af79", "688b2dd1e0b38cf98e63af7c"],
    "comments": [
      {
        "user": "688b2dd1e0b38cf98e63af7f",
        "content": "Power Star power! 🔥 #OG",
        "createdAt": "2025-07-31T08:15:00Z"
      }
    ],
    "media": "https://example.com/images/og_glimpse.jpg",
    "createdAt": "2025-07-31T08:00:00Z",
    "updatedAt": "2025-07-31T08:00:00Z"
  },
  {
    "user": "688b2ce7e0b38cf98e63add0",
    "content": "#AlluArjun’s #Pushpa2 will be a game-changer! 🌍🔥 Bunny fans, let’s go! 🐰 #AAFans",
    "likes": ["688ca0209f8094d8d8267b57", "688b2ce2e0b38cf98e63ad83"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T09:00:00Z",
    "updatedAt": "2025-07-31T09:00:00Z"
  },
  {
    "user": "688b2ce7e0b38cf98e63add3",
    "content": "#Prabhas’s #Salaar2 is gonna be massive! 💥🔥 Darling fans, ready? 😎 #PrabhasFans",
    "likes": ["688b2ce2e0b38cf98e63ad84", "688b2ce2e0b38cf98e63ad82"],
    "comments": [
      {
        "user": "688b2ce3e0b38cf98e63ad8c",
        "content": "Rebel Star rocks! 🌟 #Salaar2",
        "createdAt": "2025-07-31T10:15:00Z"
      }
    ],
    "media": "https://example.com/images/salaar2_poster.jpg",
    "createdAt": "2025-07-31T10:00:00Z",
    "updatedAt": "2025-07-31T10:00:00Z"
  },
  {
    "user": "688b2ce7e0b38cf98e63add8",
    "content": "#VijayDeverakonda’s #VD12 will set screens on fire! 🔥😍 Rowdy fans, let’s trend! 💪 #VDFans",
    "likes": ["688b2ce3e0b38cf98e63ad8f", "688b2ce3e0b38cf98e63ad92"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T11:00:00Z",
    "updatedAt": "2025-07-31T11:00:00Z"
  },
  {
    "user": "688b2ce7e0b38cf98e63add9",
    "content": "#RamCharan’s #GameChanger is the next big thing! 🎮🔥 Charan fans, let’s hype it! 😎 #RCFans",
    "likes": ["688b2ce4e0b38cf98e63ad95", "688b2ce4e0b38cf98e63ad98"],
    "comments": [
      {
        "user": "688b2ce4e0b38cf98e63ad9e",
        "content": "Global Star swag! 🌟 #GameChanger",
        "createdAt": "2025-07-31T12:15:00Z"
      }
    ],
    "media": "https://example.com/images/gamechanger_poster.jpg",
    "createdAt": "2025-07-31T12:00:00Z",
    "updatedAt": "2025-07-31T12:00:00Z"
  },
  {
    "user": "688b2ce8e0b38cf98e63addc",
    "content": "#Balayya’s #NBK109 will be a mass masala! 💣🔥 Jai Balayya! 🦁 #NBKFans",
    "likes": ["688b2ce4e0b38cf98e63ad9f", "688b2ce5e0b38cf98e63ada4"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T13:00:00Z",
    "updatedAt": "2025-07-31T13:00:00Z"
  },
  {
    "user": "688b2ce8e0b38cf98e63ade0",
    "content": "#Nagarjuna’s next film will be a classic! 😍🔥 Nag fans, where you at? 🙌 #NagFans",
    "likes": ["688b2ce5e0b38cf98e63ada8", "688b2ce5e0b38cf98e63adae"],
    "comments": [
      {
        "user": "688b2ce5e0b38cf98e63adaf",
        "content": "King Nag always delivers! 🌟 #Nagarjuna",
        "createdAt": "2025-07-31T14:15:00Z"
      }
    ],
    "media": "https://example.com/images/nag_poster.jpg",
    "createdAt": "2025-07-31T14:00:00Z",
    "updatedAt": "2025-07-31T14:00:00Z"
  },
  {
    "user": "688b2ce8e0b38cf98e63ade4",
    "content": "#Chiranjeevi’s #Vishwambhara will be a visual feast! 😱🔥 Megastar fans, let’s go! 💪 #ChiruFans",
    "likes": ["688b2ce6e0b38cf98e63adba", "688b2ce6e0b38cf98e63adbb"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T15:00:00Z",
    "updatedAt": "2025-07-31T15:00:00Z"
  },
  {
    "user": "688b2ce8e0b38cf98e63ade5",
    "content": "#MaheshBabu’s #SSMB29 will rule 2026! 🌍🔥 Superstar fans, ready? 😎 #SSMBFans",
    "likes": ["688b2ce6e0b38cf98e63adbc", "688b2ce6e0b38cf98e63adc1"],
    "comments": [
      {
        "user": "688b2ce6e0b38cf98e63adc3",
        "content": "Mahesh + Rajamouli = Epic! 🔥 #SSMB29",
        "createdAt": "2025-07-31T16:15:00Z"
      }
    ],
    "media": "https://example.com/images/ssmb29_teaser.jpg",
    "createdAt": "2025-07-31T16:00:00Z",
    "updatedAt": "2025-07-31T16:00:00Z"
  },
  {
    "user": "688b2ce9e0b38cf98e63adeb",
    "content": "#NTR’s #War2 will be a pan-India hit! 🦁🔥 Tarak fans, let’s trend! 😤 #JrNTR",
    "likes": ["688b2ce7e0b38cf98e63adc6", "688b2ce7e0b38cf98e63adc8"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T17:00:00Z",
    "updatedAt": "2025-07-31T17:00:00Z"
  },
  {
    "user": "688b2ce9e0b38cf98e63adec",
    "content": "#PawanKalyan’s #OG will break all records! 💥🔥 Anna fans, let’s make noise! 🙌 #PSPKFans",
    "likes": ["688b2ce7e0b38cf98e63add0", "688b2ce7e0b38cf98e63add3"],
    "comments": [
      {
        "user": "688b2ce7e0b38cf98e63add8",
        "content": "Power Star is back! 🌟 #OG",
        "createdAt": "2025-07-31T18:15:00Z"
      }
    ],
    "media": "https://example.com/images/og_poster.jpg",
    "createdAt": "2025-07-31T18:00:00Z",
    "updatedAt": "2025-07-31T18:00:00Z"
  },
  {
    "user": "688b2ce9e0b38cf98e63adee",
    "content": "#AlluArjun’s #Pushpa2 will be iconic! 🌍🔥 Bunny fans, let’s go crazy! 🐰 #AAFans",
    "likes": ["688b2ce7e0b38cf98e63add9", "688b2ce8e0b38cf98e63addc"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T19:00:00Z",
    "updatedAt": "2025-07-31T19:00:00Z"
  },
  {
    "user": "688b2ce9e0b38cf98e63adf2",
    "content": "#Prabhas’s #Spirit will be a global hit! 🌪️🔥 Darling fans, ready? 😎 #PrabhasFans",
    "likes": ["688b2ce8e0b38cf98e63ade0", "688b2ce8e0b38cf98e63ade4"],
    "comments": [
      {
        "user": "688b2ce8e0b38cf98e63ade5",
        "content": "Rebel Star rules! 🌟 #Spirit",
        "createdAt": "2025-07-31T20:15:00Z"
      }
    ],
    "media": "https://example.com/images/spirit_teaser.jpg",
    "createdAt": "2025-07-31T20:00:00Z",
    "updatedAt": "2025-07-31T20:00:00Z"
  },
  {
    "user": "688b2ce9e0b38cf98e63adf6",
    "content": "#VijayDeverakonda’s #VD12 will be a youth anthem! 🔥😍 Rowdy fans, let’s trend! 💪 #VDFans",
    "likes": ["688b2ce9e0b38cf98e63adeb", "688b2ce9e0b38cf98e63adec"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T21:00:00Z",
    "updatedAt": "2025-07-31T21:00:00Z"
  },
  {
    "user": "688b2ce9e0b38cf98e63adf8",
    "content": "#RamCharan’s #RC16 will be a masterpiece! 🎬🔥 Charan fans, let’s hype it! 😎 #RCFans",
    "likes": ["688b2ce9e0b38cf98e63adee", "688b2ce9e0b38cf98e63adf2"],
    "comments": [
      {
        "user": "688b2ce9e0b38cf98e63adf6",
        "content": "Global Star for a reason! 🌟 #RC16",
        "createdAt": "2025-07-31T22:15:00Z"
      }
    ],
    "media": "https://example.com/images/rc16_poster.jpg",
    "createdAt": "2025-07-31T22:00:00Z",
    "updatedAt": "2025-07-31T22:00:00Z"
  },
  {
    "user": "688b2ceae0b38cf98e63adfa",
    "content": "#Balayya’s #NBK109 will be a mass storm! 💣🔥 Jai Balayya! 🦁 #NBKFans",
    "likes": ["688b2ce9e0b38cf98e63adf8", "688b2ceae0b38cf98e63adff"],
    "comments": [],
    "media": "",
    "createdAt": "2025-07-31T23:00:00Z",
    "updatedAt": "2025-07-31T23:00:00Z"
  },
  {
    "user": "688b2ceae0b38cf98e63adff",
    "content": "#Nagarjuna’s next will be a classic! 😍🔥 Nag fans, let’s make some noise! 🙌 #NagFans",
    "likes": ["688b2ceae0b38cf98e63ae02", "688b2ceae0b38cf98e63ae07"],
    "comments": [
      {
        "user": "688b2ceae0b38cf98e63ae08",
        "content": "King Nag always rocks! 🌟 #Nagarjuna",
        "createdAt": "2025-08-01T00:15:00Z"
      }
    ],
    "media": "https://example.com/images/nag_teaser.jpg",
    "createdAt": "2025-08-01T00:00:00Z",
    "updatedAt": "2025-08-01T00:00:00Z"
  },
  {
    "user": "688b2ceae0b38cf98e63ae02",
    "content": "#Chiranjeevi’s #Vishwambhara will be epic! 😱🔥 Megastar fans, let’s trend! 💪 #ChiruFans",
    "likes": ["688b2ceae0b38cf98e63ae09", "688b2cebe0b38cf98e63ae0e"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T01:00:00Z",
    "updatedAt": "2025-08-01T01:00:00Z"
  },
  {
    "user": "688b2ceae0b38cf98e63ae07",
    "content": "#MaheshBabu’s #SSMB29 will be a global hit! 🌍🔥 Superstar fans, ready? 😎 #SSMBFans",
    "likes": ["688b2cebe0b38cf98e63ae11", "688b2cebe0b38cf98e63ae13"],
    "comments": [
      {
        "user": "688b2cebe0b38cf98e63ae15",
        "content": "Mahesh mania! 🔥 #SSMB29",
        "createdAt": "2025-08-01T02:15:00Z"
      }
    ],
    "media": "https://example.com/images/ssmb29_poster.jpg",
    "createdAt": "2025-08-01T02:00:00Z",
    "updatedAt": "2025-08-01T02:00:00Z"
  },
  {
    "user": "688b2ceae0b38cf98e63ae08",
    "content": "#NTR’s #War2 will be a game-changer! 🦁🔥 Tarak fans, let’s roar! 😤 #JrNTR",
    "likes": ["688b2cece0b38cf98e63ae19", "688b2cece0b38cf98e63ae20"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T03:00:00Z",
    "updatedAt": "2025-08-01T03:00:00Z"
  },
  {
    "user": "688b2ceae0b38cf98e63ae09",
    "content": "#PawanKalyan’s #OG will be massive! 💥🔥 Anna fans, let’s make some noise! 🙌 #PSPKFans",
    "likes": ["688b2cece0b38cf98e63ae22", "688b2cece0b38cf98e63ae1f"],
    "comments": [
      {
        "user": "688b2cece0b38cf98e63ae23",
        "content": "Power Star rocks! 🌟 #OG",
        "createdAt": "2025-08-01T04:15:00Z"
      }
    ],
    "media": "https://example.com/images/og_teaser.jpg",
    "createdAt": "2025-08-01T04:00:00Z",
    "updatedAt": "2025-08-01T04:00:00Z"
  },
  {
    "user": "688b2cebe0b38cf98e63ae0e",
    "content": "#AlluArjun’s #Pushpa2 will rule! 🌍🔥 Bunny fans, let’s go crazy! 🐰 #AAFans",
    "likes": ["688b2cede0b38cf98e63ae2b", "688b2cede0b38cf98e63ae2d"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T05:00:00Z",
    "updatedAt": "2025-08-01T05:00:00Z"
  },
  {
    "user": "688b2cebe0b38cf98e63ae11",
    "content": "#Prabhas’s #Spirit will be a global storm! 🌪️🔥 Darling fans, ready? 😎 #PrabhasFans",
    "likes": ["688b2cede0b38cf98e63ae2e", "688b2cede0b38cf98e63ae2f"],
    "comments": [
      {
        "user": "688b2ceee0b38cf98e63ae36",
        "content": "Rebel Star is back! 🌟 #Spirit",
        "createdAt": "2025-08-01T06:15:00Z"
      }
    ],
    "media": "https://example.com/images/spirit_poster.jpg",
    "createdAt": "2025-08-01T06:00:00Z",
    "updatedAt": "2025-08-01T06:00:00Z"
  },
  {
    "user": "688b2cebe0b38cf98e63ae13",
    "content": "#VijayDeverakonda’s #VD12 will be iconic! 🔥😍 Rowdy fans, let’s trend! 💪 #VDFans",
    "likes": ["688b2ceee0b38cf98e63ae38", "688b2ceee0b38cf98e63ae39"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T07:00:00Z",
    "updatedAt": "2025-08-01T07:00:00Z"
  },
  {
    "user": "688b2cebe0b38cf98e63ae15",
    "content": "#RamCharan’s #GameChanger will be epic! 🎮🔥 Charan fans, let’s hype it! 😎 #RCFans",
    "likes": ["688b2ceee0b38cf98e63ae3d", "688b2ceee0b38cf98e63ae40"],
    "comments": [
      {
        "user": "688b2cefe0b38cf98e63ae42",
        "content": "Global Star swag! 🌟 #GameChanger",
        "createdAt": "2025-08-01T08:15:00Z"
      }
    ],
    "media": "https://example.com/images/gamechanger_teaser.jpg",
    "createdAt": "2025-08-01T08:00:00Z",
    "updatedAt": "2025-08-01T08:00:00Z"
  },
  {
    "user": "688b2cece0b38cf98e63ae19",
    "content": "#Balayya’s #NBK109 will be a mass blast! 💣🔥 Jai Balayya! 🦁 #NBKFans",
    "likes": ["688b2cefe0b38cf98e63ae45", "688b2cefe0b38cf98e63ae49"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T09:00:00Z",
    "updatedAt": "2025-08-01T09:00:00Z"
  },
  {
    "user": "688b2cece0b38cf98e63ae20",
    "content": "#Nagarjuna’s next will be a gem! 😍🔥 Nag fans, let’s make some noise! 🙌 #NagFans",
    "likes": ["688b2cefe0b38cf98e63ae4c", "688b2cefe0b38cf98e63ae4e"],
    "comments": [
      {
        "user": "688b2cefe0b38cf98e63ae51",
        "content": "King Nag always delivers! 🌟 #Nagarjuna",
        "createdAt": "2025-08-01T10:15:00Z"
      }
    ],
    "media": "https://example.com/images/nag_poster.jpg",
    "createdAt": "2025-08-01T10:00:00Z",
    "updatedAt": "2025-08-01T10:00:00Z"
  },
  {
    "user": "688b2cece0b38cf98e63ae22",
    "content": "#Chiranjeevi’s #Vishwambhara will be a visual feast! 😱🔥 Megastar fans, let’s go! 💪 #ChiruFans",
    "likes": ["688b2cf0e0b38cf98e63ae56", "688b2cf0e0b38cf98e63ae58"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T11:00:00Z",
    "updatedAt": "2025-08-01T11:00:00Z"
  },
  {
    "user": "688b2cece0b38cf98e63ae1f",
    "content": "#MaheshBabu’s #SSMB29 will rule! 🌍🔥 Superstar fans, ready? 😎 #SSMBFans",
    "likes": ["688b2cf0e0b38cf98e63ae5b", "688b2cf0e0b38cf98e63ae5e"],
    "comments": [
      {
        "user": "688b2cf0e0b38cf98e63ae61",
        "content": "Mahesh + Rajamouli = 🔥 #SSMB29",
        "createdAt": "2025-08-01T12:15:00Z"
      }
    ],
    "media": "https://example.com/images/ssmb29_teaser.jpg",
    "createdAt": "2025-08-01T12:00:00Z",
    "updatedAt": "2025-08-01T12:00:00Z"
  },
  {
    "user": "688b2cece0b38cf98e63ae23",
    "content": "#NTR’s #War2 will be a pan-India hit! 🦁🔥 Tarak fans, let’s trend! 😤 #JrNTR",
    "likes": ["688b2cf1e0b38cf98e63ae64", "688b2cf1e0b38cf98e63ae67"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T13:00:00Z",
    "updatedAt": "2025-08-01T13:00:00Z"
  },
  {
    "user": "688b2cede0b38cf98e63ae2b",
    "content": "#PawanKalyan’s #OG will be massive! 💥🔥 Anna fans, let’s make noise! 🙌 #PSPKFans",
    "likes": ["688b2cf1e0b38cf98e63ae6a", "688b2cf1e0b38cf98e63ae6d"],
    "comments": [
      {
        "user": "688b2cf1e0b38cf98e63ae70",
        "content": "Power Star is back! 🌟 #OG",
        "createdAt": "2025-08-01T14:15:00Z"
      }
    ],
    "media": "https://example.com/images/og_poster.jpg",
    "createdAt": "2025-08-01T14:00:00Z",
    "updatedAt": "2025-08-01T14:00:00Z"
  },
  {
    "user": "688b2cede0b38cf98e63ae2d",
    "content": "#AlluArjun’s #Pushpa2 will rule! 🌍🔥 Bunny fans, let’s go crazy! 🐰 #AAFans",
    "likes": ["688b2cf2e0b38cf98e63ae73", "688b2cf2e0b38cf98e63ae76"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T15:00:00Z",
    "updatedAt": "2025-08-01T15:00:00Z"
  },
  {
    "user": "688b2cede0b38cf98e63ae2e",
    "content": "#Prabhas’s #Spirit will be a global storm! 🌪️🔥 Darling fans, ready? 😎 #PrabhasFans",
    "likes": ["688b2cf2e0b38cf98e63ae79", "688b2cf2e0b38cf98e63ae7d"],
    "comments": [
      {
        "user": "688b2cf2e0b38cf98e63ae80",
        "content": "Rebel Star rules! 🌟 #Spirit",
        "createdAt": "2025-08-01T16:15:00Z"
      }
    ],
    "media": "https://example.com/images/spirit_teaser.jpg",
    "createdAt": "2025-08-01T16:00:00Z",
    "updatedAt": "2025-08-01T16:00:00Z"
  },
  {
    "user": "688b2cede0b38cf98e63ae2f",
    "content": "#VijayDeverakonda’s #VD12 will be iconic! 🔥😍 Rowdy fans, let’s trend! 💪 #VDFans",
    "likes": ["688b2cf3e0b38cf98e63ae82", "688b2cf3e0b38cf98e63ae85"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T17:00:00Z",
    "updatedAt": "2025-08-01T17:00:00Z"
  },
  {
    "user": "688b2ceee0b38cf98e63ae36",
    "content": "#RamCharan’s #GameChanger will be epic! 🎮🔥 Charan fans, let’s hype it! 😎 #RCFans",
    "likes": ["688b2cf3e0b38cf98e63ae88", "688b2cf3e0b38cf98e63ae8e"],
    "comments": [
      {
        "user": "688b2cf3e0b38cf98e63ae8f",
        "content": "Global Star swag! 🌟 #GameChanger",
        "createdAt": "2025-08-01T18:15:00Z"
      }
    ],
    "media": "https://example.com/images/gamechanger_poster.jpg",
    "createdAt": "2025-08-01T18:00:00Z",
    "updatedAt": "2025-08-01T18:00:00Z"
  },
  {
    "user": "688b2ceee0b38cf98e63ae38",
    "content": "#Balayya’s #NBK109 will be a mass blast! 💣🔥 Jai Balayya! 🦁 #NBKFans",
    "likes": ["688b2cf4e0b38cf98e63ae91", "688b2cf4e0b38cf98e63ae95"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T19:00:00Z",
    "updatedAt": "2025-08-01T19:00:00Z"
  },
  {
    "user": "688b2ceee0b38cf98e63ae39",
    "content": "#Nagarjuna’s next will be a gem! 😍🔥 Nag fans, let’s make some noise! 🙌 #NagFans",
    "likes": ["688b2cf4e0b38cf98e63ae98", "688b2cf4e0b38cf98e63ae9c"],
    "comments": [
      {
        "user": "688b2cf4e0b38cf98e63ae9e",
        "content": "King Nag always delivers! 🌟 #Nagarjuna",
        "createdAt": "2025-08-01T20:15:00Z"
      }
    ],
    "media": "https://example.com/images/nag_teaser.jpg",
    "createdAt": "2025-08-01T20:00:00Z",
    "updatedAt": "2025-08-01T20:00:00Z"
  },
  {
    "user": "688b2ceee0b38cf98e63ae3d",
    "content": "#Chiranjeevi’s #Vishwambhara will be epic! 😱🔥 Megastar fans, let’s trend! 💪 #ChiruFans",
    "likes": ["688b2cf5e0b38cf98e63ae9f", "688b2cf5e0b38cf98e63aea5"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T21:00:00Z",
    "updatedAt": "2025-08-01T21:00:00Z"
  },
  {
    "user": "688b2ceee0b38cf98e63ae40",
    "content": "#MaheshBabu’s #SSMB29 will rule! 🌍🔥 Superstar fans, ready? 😎 #SSMBFans",
    "likes": ["688b2cf5e0b38cf98e63aea6", "688b2cf5e0b38cf98e63aeab"],
    "comments": [
      {
        "user": "688b2cf6e0b38cf98e63aeac",
        "content": "Mahesh mania! 🔥 #SSMB29",
        "createdAt": "2025-08-01T22:15:00Z"
      }
    ],
    "media": "https://example.com/images/ssmb29_poster.jpg",
    "createdAt": "2025-08-01T22:00:00Z",
    "updatedAt": "2025-08-01T22:00:00Z"
  },
  {
    "user": "688b2cefe0b38cf98e63ae42",
    "content": "#NTR’s #War2 will be a pan-India hit! 🦁🔥 Tarak fans, let’s trend! 😤 #JrNTR",
    "likes": ["688b2cf6e0b38cf98e63aeb0", "688b2cf6e0b38cf98e63aeb1"],
    "comments": [],
    "media": "",
    "createdAt": "2025-08-01T23:00:00Z",
    "updatedAt": "2025-08-01T23:00:00Z"
  }
]

document.getElementById('test').addEventListener('click', async () => {
    try {
        const responses = await Promise.all(
            posts.map(post =>
                fetch('http://localhost:5000/api/test/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post)
                })
            )
        );

        const results = await Promise.all(responses.map(res => res.json()));
        console.log('All posts uploaded:', results);
    } catch (error) {
        console.error('Error uploading posts:', error);
    }
});
