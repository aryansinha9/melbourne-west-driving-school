import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allReviews = [
  { 
    name: "Finn Knowles", 
    text: "Waseem was incredibly helpful, made my confidence so much higher and was so helpful through his knowledge of the areas I was to be tested in. Would absolutely recommend to anyone going for their license!",
    date: "6 May"
  },
  { 
    name: "Ganesh Tavva", 
    text: "Passed because of Waseem Bhai and his instructions. Though I was very nervous before taking classes, he made me feel comfortable and professionally taught everything... Would definitely recommend this place",
    date: "25 March"
  },
  { 
    name: "Noorain Irfanna", 
    text: "I took 2 classes and test with instructor for converting my Indian international license into victorian driving license. I had my test for a 3:20 pm wed slot. Waseem Sir has all the qualities of a very good teacher. He gives you clear instructions, helps u understand and rectify the mistakes you have been making. Definitely I am a better and a safer driver after learning from him. He instills confidence in you, coz no matter for how long you have been driving you tend to become nervous before the exam. Thanks a lot, I highly recommend others to learn from him. Especially beginners!",
    date: "27 May"
  },
  { 
    name: "Muhammad Imran Sharfuddin", 
    text: "Highly recommended instructor. He has plenty of experience to guide people from beginner level to an experience once to pass the test.",
    date: "30 April"
  },
  { 
    name: "Angie Carcallas", 
    text: "Waseem was incredibly helpful in building my confidence before my test. He is very skilled and will set you up for success. Passed the test first try all because of him! Would highly recommend as he is extremely skilled, knowledgeable, and patient with you. Thanks Waseem",
    date: "2 August"
  },
  { 
    name: "Lamea Zannat", 
    text: "I had changed four instructors in Tarneit west, all top ones. I felt they were too focussed on how many lessons am i going to take and not coaching me as per my needs. My friend recommended Wasim and on day 1 he earned my complete trust. Few lessons, then the test, I passed it one go!!! I am thankful and grateful to Wasim for being so observant, patient and for customizing our lessons based on my strength and weakness of my driving. Amazing instructor, most importantly a good human being who genuinely cares about success of his students. I would blindly recommend him as best instructor in entire melbourne for sure. THANKS WASIM!!!",
    date: "21 May"
  },
  { 
    name: "Rekha Behera", 
    text: "Waseem is a very patient and knowledgeable driving instructor and an amazing person. He has the ability to gauge the learner's current driving skill level and provide required training/ instructions accordingly. His tips on which aspects to focus on to (a) drive safely and (b) clear the drive test, were very helpful. And above all, he has loads of patience. Highly recommended!",
    date: "18 March"
  },
  { 
    name: "Sid Hen", 
    text: "I got my overseas license converted by passing my driving test in one go. My instructor Waseem was really helpful in giving me the right guidance and road rules to pass the test. I had a few issues with following vicroads rules and avoiding critical errors. I got it all sorted in just 2 classes at Melbourne West Driving School. I would highly recommend them specially those who are giving their test in Western Suburbs.",
    date: "30 June"
  },
  { 
    name: "Saru K Siwach", 
    text: "Thank you so much Waseem. Sometimes all you need is a good motivation. I just took one lesson from Waseem and I was good to go, all thanks to him. He is not after money and would not ask anyone to take more sessions to make money out of learner. He would believe in you and prepare you for the test. I got his reference from my brother who also passed after getting trained by him. I am so glad Waseem was available for my test. Also, his car(i 30) is super easy to drive. 😊😊😊",
    date: "28 November 2019"
  },
  { 
    name: "Lola Knowles", 
    text: "I would recommend Waseem and Melbourne West Driving school to anyone wanting to pass their driving test first try. Waseem was very friendly and patient and offered very clear and easy to understand feedback that was easy to implement in the test. Thank you so much Waseem, I couldn't have done it without you!!",
    date: "19 March"
  },
  { 
    name: "Farheen Ali", 
    text: "Alhamdullilah! Thanks a lot to Mr Waseem for training me from scratch to achieve my license. Mr Waseem is a great mentor. Within a short period of time he taught me every minute detail very patiently and with continued support and boosting my morale. Mr Waseem you are a great person and a perfect guide. Learning with you was a really great experience for me. THANK YOU Mr WASEEM",
    date: "19 February"
  },
  { 
    name: "Ranadheee Reddy Sama", 
    text: "I learned a lot during the driving lessons hopefully I get the license due to Waseem bhai. He is so patient and humble. Actually I'll recommend my friends to Waseem bhai about the Victorian driving lesson. We can get easily by going to the Melbourne west driving school. Waseem bhai 😊",
    date: "11 March"
  },
];

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* Header with Stars */}
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-16 h-16 mx-2">
                <Star className="w-full h-full text-yellow-400 fill-current" />
              </div>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Reviews</h1>
          <div className="w-20 h-1 bg-red-600 mt-3 mx-auto"></div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-red-500 opacity-20 mb-2" />
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 text-sm mb-4 italic">"{review.text}"</p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-bold text-black text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">recommends Melbourne West Driving School</p>
                  </div>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* And Many Others Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">And Many Others!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank You everyone for your great support. If you want to check out more of our reviews then head over to our facebook page.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-4 text-lg font-semibold">
            <a href="https://www.facebook.com/meldrivingschool" target="_blank" rel="noopener noreferrer">
              Visit our Facebook Page
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Become Our Next Success Story?</h2>
          <p className="mt-4 text-xl opacity-90 max-w-3xl mx-auto">
            Book your lesson and join hundreds of happy drivers who passed with Melbourne West Driving School.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-200 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              <a href="tel:0430474492">Book Your First Lesson Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}