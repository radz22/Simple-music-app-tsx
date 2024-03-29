
/* songs */
import statue from '../musicPlaylist/statue.mp3'
import eli from '../musicPlaylist/24 7 365.mp3'
import fearles from '../musicPlaylist/fearless.mp3'
import sparkfly from '../musicPlaylist/SparksFly.mp3'
import RightWhereYouBelong from '../musicPlaylist/RightWhereYouBelong.mp3'
import THEWAYILOVEDYOU from '../musicPlaylist/THEWAYILOVEDYOU.mp3'
/*picture */

import LilEddie from '../assets/lilEddie.jpg'
import taylorSwiftSparkfly from '../assets/taylorswift.jpg'
import Elijahwoods from '../assets/elijahwoods.jpg'
import taylorswiftfearless from '../assets/taylorswift-fearless.png'
import julieann from '../assets/julieann.jpg'
import THEWAYILOVEDYOUtaylor from '../assets/THEWAYILOVEDYOUtaylor.jpg'

export interface Musicdatas {
    id:string;
     title:string,
     src:any,
     singer:string
     image:any,
     publish:string,
     lyrics?:string,
    
     label?:string,
  }

export  const sounds : Musicdatas[] = ([
    {
      id:"1",
      title:"STATUE",
      src:statue,
      singer: "Lil' Eddie",
      image:LilEddie,
      publish: "2009",
     lyrics:("Oh yeah, oh yeah  Yeah, ooh, yeah  When a day is said and done In the middle of the night, and you're fast asleep, my love  Stay awake looking at your beauty Telling myself I'm the luckiest man alive 'Cause so many times I was certain You was gonna walk out of my life, life Why you take such a hold of me, girl   When I'm still trying to get my act right?  What is the reason when you really could have any man you want?  I don't see what I have to offer I should've been a season  Guess you could see I had potential  Do you know you're my miracle? (Oh yeah)   I'm like a statue  Stuck staring right at you  Got me frozen in my tracks  So amazed how you take me back  Each and every time our love collapsed Statue Stuck staring right at you So when I'm lost for wordsEvery time I disappoint you It's just 'cause I can't believe That you're so beautiful (Stuck like a statue) Don't wanna lose you, no  (Stuck like a statue)  Ask myself why are you even with me After all the shit I put you through? Why did you make it hard so with me? It's like you're living in an igloo But baby your love is so warm it makes my shield melt down, down And every time we're both at war you make me come around What is the reason when you really could have any man you want? I don't see what I have to offer I should've been a season Guess you could see I had potential  Do you know you're my miracle?  I'm like a statue   Stuck staring right at you  Got me frozen in my tracks  So amazed how you take me back   Each and every time our love collapsed  Statue Stuck staring right at you  So when I'm lost for words  Every time I disappoint you It's just 'cause I can't believe  That you're so beautiful  (Stuck like a statue)  Don't wanna lose you, no   (Stuck like a statue)   And you're so beautiful   (Stuck like a statue) Don't wanna lose you never   (Stuck like a statue)   Oh, no  Every single day of my life, I thank my lucky stars  God really had to spend extra time when he sculpted your heart 'Cause there's no explanation  Can't solve the equation  It's like you love me more than I love myself   I'm like a statue   Stuck staring right at you   Got me frozen in my tracks  So amazed how you take me back  Each and every time our love collapsed  Statue   Stuck staring right at you So when I'm lost for words (Statue) Every time I disappoint you Baby, it's 'cause I can't believe ('Cause you're my statue)  That you're so beautiful (Girl, you are the reason) Stuck like a statue (The reason for living) Don't wanna lose you, no (The reason for breathing Stuck like a statue (You're so beautiful) And you're so beautiful (And I want you to feel it)Stuck like a statue ('Cause so bad I mean it)Don't wanna lose you, no (You're the reason for breathing) Stuck like a statue (You're so beautiful) Whoa, whoa, whoa, whoa, yeah yeah yeah yeah  When the day is said and done In the middle of the night, and you're fast asleep, my love I'm the luckiest man alive"),
    
     label:"Lil' Eddie"
    },
    {
      id:"2",
      title:"THE WAY I LOVED YOU",
      src:THEWAYILOVEDYOU,
      singer:"Taylor Swift",
      image:THEWAYILOVEDYOUtaylor,
      publish:"2008 ",
      lyrics:"He is sensible and so incredible And all my single friends are jealous He says everything I need to hear, and it's like  I couldn't ask for anything better He opens up my door and I get into his car And he says, You look beautiful tonight And I feel perfectly fine But I miss screaming and fighting and kissing in the rain And it's 2 a.m. and I'm cursing your name So in love that you act insane And that's the way I loved you Breaking down and coming undone It's a roller coaster kind of rush And I never knew I could feel that much And that's the way I loved you He respects my space And never makes me wait And he calls exactly when he says he will He's close to my mother Talks business with my father He's charming and endearing And I'm comfortable But I miss screaming and fighting and kissing in the rain And It's 2 a.m. and I'm cursing your name You're so in love that you act insane And that's the way I loved you Breaking down and coming undone It's a roller coaster kind of rush And I never knew I could feel that much And that's the way I loved you  He can't see the smile I'm faking And my heart's not breaking 'Cause I'm not feeling anything at all  And you were wild and crazy  Just so frustrating, intoxicating, complicated  Got away by some mistake and now  I miss screaming and fighting and kissing in the rain  It's 2 a.m. and I'm cursing your name  I'm so in love that I acted insane  And that's the way I loved you  Breaking down and coming undone  It's a roller coaster kind of rush  And I never knew I could feel that much And that's the way I loved you Whoa-whoa-oh-oh, oh And that's the way I loved youOh-oh-oh-oh, oh-oh-oh-ohNever knew I could feel that muchAnd that's the way I loved you",
      label:"Taylor Swift"
    },
    {
        id:"3",
        title:"SPARKFLY",
        src:sparkfly,
        singer:"Taylor Swift",
        image:taylorSwiftSparkfly,
        publish:"2010",
        lyrics:"The way you move is like a full on rainstorm And I'm a house of cards You're the kind of reckless that should send me running But I kinda know that I won't get far And you stood there in front of me just Close enough to touch  Close enough to hope you couldn't see What I was thinking of     Drop everything now   Meet me in the pouring rain   Kiss me on the sidewalk   Take away the pain 'Cause I see sparks fly, whenever you smile  Get me with those green eyes, baby  As the lights go down Gimme something that'll haunt me when you're not around  'Cause I see sparks fly, whenever you smile  My mind forgets to remind me you're a bad idea  You touch me once and it's really something  You find I'm even better than you imagined I would be  I'm on my guard for the rest of the world  But with you, I know it's no good    And I could wait patiently    But I really wish you would  Drop everything now  Meet me in the pouring rain  Kiss me on the sidewalk   Take away the pain  'Cause I see sparks fly, whenever you smile  Get me with those green eyes, baby   As the lights go down  Gimme something that'll haunt me when you're not around  'Cause I see sparks fly, whenever you smile  I run my fingers through your hair  And watch the lights go wild   Just keep on keeping your eyes on me It's just wrong enough to make it feel right  And lead me up the staircase   Won't you whisper soft and slow  I'm captivated by you, baby  Like a fireworks show Drop everything now  Meet me in the pouring rain  Kiss me on the sidewalk   Take away the pain  'Cause I see sparks fly whenever you smile  Get me with those green eyes, baby   As the lights go down   Gimme something that'll haunt me when you're not around   'Cause I see sparks fly, whenever you smile   And the sparks fly, oh, baby, smile And the sparks fly",
        label:"Taylor Swift"
      },
      {
        id:"4",
        title:"FEARLESS",
        src:fearles,
        singer:"Taylor Swift",
        image:taylorswiftfearless,
        publish:"2008",
        lyrics:"There's somethin' bout the way  The street looks when it's just rained  There's a glow off the pavement  You walk me to the car And you know I wanna ask you to dance right there   In the middle of the parking lot  Yeah   Oh, yeah  We're drivin' down the road  I wonder if you know I'm tryin' so hard not to get caught up nowBut you're just so cool Run your hands through your hair Absent mindedly makin' me want you  And I don't know how it gets better than this  You take my hand and drag me head first  Fearless  And I don't know why  But with you I'd dance in a storm   In my best dress  Fearless  So baby drive slow  'Til we run out of road in this one horse townI wanna stay right here in this passenger seat  You put your eyes on me  In this moment now capture it, remember it   'Cause I don't know how it gets better than this  You take my hand and drag me head first  Fearless   And I don't know why  But with you I'd dance in a storm  In my best dressFearless  Oh, oh  Well you stood there with me in the doorway   My hands shake  I'm not usually this way but  You pull me in and I'm a little more brave   It's the first kiss, it's flawless, really something, it's fearless  Oh, yeah   'Cause I don't know how it gets better than this   You take my hand and drag me head first  Fearless  And I don't know why  But with you I'd dance in a storm    In my best dress  Fearless    'Cause I don't know how it gets better than this   You take my hand and drag me head first   Fearless   And I don't know why   But with you I'd dance in a storm   In my best dress  FearlessOh, oh, oh yeah",
  
        label:"Taylor Swift"
   },
    {
      id:"5",
      title:"24/7/365",
      src:eli,
      singer: "Elijah Woods",
      image:Elijahwoods,
      publish:"2023",
      lyrics:"It's been three years and six whole months  Since I saw your face that night  It took five seconds to fall in love  And two more to make you mine  Now it's four in the morning, suns set and  Seven minutes with you and it's heaven  Ain't an hour that rolls by I love you 24-7, 3-6-5  Give you my name, if you wanted to   Key to my heart, if you want it too  And I hope and pray that you'll stay right here  'Til we're old and gray in our last few years  I'm on a knee, I just need a yes  A couple kids and a picket fence  Share the memories like an open book Every page I read, it still got me hooked  And I'm fine spending my whole life on everything you like   Is it obvious that all of this is right?   'Cause it's been three years and six whole months   Since I saw your face that night  It took five seconds to fall in love  And two more to make you mine  Now it's four in the morning, suns set and  Seven minutes with you and it's heaven  Ain't an hour that rolls by  I love you 24-7, 3-6-5  I'll share the last bite of every meal  I'll wipe your tears when you're in your feels  And I'll hold you close through a thunderstorm  When it's cold at night, I'll keep you warm  'Cause I'm fine spending my whole life on everything you like  Is it obvious that all of this is right?  'Cause it's been three years and six whole months  Since I saw your face that night  It took five seconds to fall in love  And two more to make you mine Now it's four in the morning, suns set and  Seven minutes with you and it's heaven Ain't an hour that rolls by  I love you 24-7, 3-6-5  I love you 24-7, 3-6-5 Now it's four in the morning, suns set and  Seven minutes with you and it's heaven   Ain't an hour that rolls byI love you 24-7, 3-6-5" ,
      label:"Elijah Woods"
     
    },
  
 {
  id:"6",
  title:"RIGHT WHERE YOU BELONG",
  src:RightWhereYouBelong,
  singer:"Julie Anne San Jose",
  image:julieann,
  publish:"2014",
  lyrics:"Wondering where you are tonight Maybe you're that distant star How I want you right here by my side Now I see your face above Could you take me where you are?Unafraid no matter what may comeWaiting for the hour of those many nightsWhen you wake up in the stormTrees will all be standing tallI come to you, you'll never be aloneWhen your hopes fall apartNight is cold, day is dark  I give my heart, it's right where you belong Right where you belongRight where you belong And we'll meet across the skySo together we will fly You're so near to me, you'll never be afarWanting every hour of those many nightsWhen you wake up in the stormTrees will all be standing tallI come to you, you'll never be aloneWhen your hopes fall apartNight is cold, day is darkI give my heart, it's right where you belongRight where you belongRight where you belongLoving every hour of those many nightsWhen you wake up in the storm Trees will all be standing tall I come to you, you'll never be alone (come to you, oh, you'll never be alone) When your hopes fall apart (fall apart)Night is cold, day is dark (night is cold, day is dark)I give my heart, it's right where you belong Right where you belongRight where you belong",

  label:"Julie Anne San Jose"
},


    
  ])
  