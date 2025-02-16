export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white min-h-screen">
      <p className="text-black">⭐⭐⭐⭐⭐ Loved by 1,000,000+ creators</p>
      <h1 className="text-4xl font-bold text-center text-black">
        Fund your creative work
      </h1>
      <p className="text-blach text-lg text-center mt-2 text-black">
        Accept support. Start a membership. Setup a shop. It's easier than you
        think.
      </p>
      <button className="mt-5 bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500">
        Start my page
      </button>
      <p className="text-gray-500 mt-2 text-black">
        It's free and takes less than a minute!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <p className="font-semibold text-black">
            Cara is building a new platform for artists
          </p>
          <p className="text-gray-500">❤️ 8,780 supporters</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <p className="font-semibold text-black">
            Kaleigh Cohen is creating indoor cycling and strength workouts on
            YouTube!
          </p>
          <p className="text-gray-500">❤️ 4,488 supporters</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <p className="font-semibold text-black">
            Teacher Stefano is creating YouTube videos and Podcast
          </p>
          <p className="text-gray-500">❤️ 641 supporters</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <p className="font-semibold text-black">
            The Thrill Of The Thrift is creating thrifting videos
          </p>
          <p className="text-gray-500">❤️ 112 supporters</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <p className="font-semibold text-black">
            Beach Talk Radio is a Dinky Little Podcast
          </p>
          <p className="text-gray-500">❤️ 1,805 supporters</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg">
          <p className="font-semibold text-black">
            Simple Politics is helping people have better conversations about
            politics
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center min-h-screen p-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-[1000px] h-[700px] text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          SUPPORT
        </p>
        <h1 className="text-3xl font-bold mt-2 text-black">
          Give your audience <br /> an easy way to say thanks.
        </h1>
        <p className="text-gray-600 mt-4">
          Buy Me a Coffee makes supporting fun and easy. In just a couple of
          taps, your fans can make the payment (buy you a coffee) and leave a
          message.
        </p>

        
        <div className="relative mt-8 bg-white p-6 rounded-xl shadow-lg w-[500px] h-[300px] left-[230px]">
          <h2 className="text-lg font-semibold text-black">Buy Juliet a coffee</h2>

          <div className="flex items-center justify-center space-x-2 mt-4">
            <button className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full font-bold">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full font-bold">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full font-bold">
              5
            </button>
            <input
              type="number"
              className="w-16 h-10 border rounded-md text-center"
              placeholder="1"
            />
          </div>

          <input
            type="text"
            className="w-full mt-4 border p-3 rounded-md"
            placeholder="Say something nice..."
          />
          <button className="w-full bg-red-500 text-white py-3 rounded-lg mt-4 font-semibold">
            Support $3
          </button>
        </div>

        {/* Support Messages */}
        <div className="relative mt-6 space-y-3">
         

          <div className="absolute -left-24 bottom-0 bg-white p-3 shadow-md rounded-lg flex items-center space-x-2">
            <span className="bg-green-200 p-2 rounded-full">☕</span>
            <p className="text-sm font-medium text-black">
              Cathy G bought a coffee. <br />
              <span className="text-gray-500">Thanks Cathy! ❤️</span>
            </p>
          </div>

 <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-md rounded-lg flex items-center space-x-2">
            <span className="bg-yellow-200 p-2 rounded-full">☕</span>
            <p className="text-sm font-medium  text-black">Anie bought 10 coffees</p>
          </div>

          <div className="absolute -right-20 top-1/4 bg-white p-3 shadow-md rounded-lg flex items-center space-x-2">
            <span className="bg-yellow-200 p-2 rounded-full ">☕</span>
            <p className="text-sm font-medium text-black">Alex bought 25 coffees <br/> <span className="text-gray-500">Thanks Cathy! ❤️</span></p>
          </div>

          <div className="w-[250px] absolute -right-24 bottom-0 bg-white p-3 shadow-md rounded-lg">
            <p className="text-sm font-medium  text-black">
              <strong>Tony Steel bought 3 coffees.</strong>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Absolutely love the show! I'm already waiting for next week's
              episode, lol. Thank you and keep doing what you're doing.
            </p>
          </div>
        </div>
      </div>
    </div>

<div className="relative mt-6 space-y-3">
      <div className="mt-16 p-10 bg-white rounded-3xl shadow-lg max-w-3xl">
        <p className="text-gray-500 uppercase text-center">Memberships</p>
        <h2 className="text-3xl font-bold text-center  text-black">
          Start a membership for your biggest fans.
        </h2>
        <p className=" text-black text-center mt-2">
          Earn a recurring income by accepting monthly or yearly subscriptions.
          Share exclusive content, or just give them a way to support your work
          on an ongoing basis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold  text-black">Basic membership</h3>
            <p className="text-gray-500">$5/month</p>
            <ul className="text-left text-gray-600 list-disc pl-5">
              <li>33% OFF all my eBooks & courses</li>
              <li>Access to members-only content</li>
              <li>Exclusive posts and messages</li>
            </ul>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold">
              Join
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold  text-black">Pro membership</h3>
            <p className="text-gray-500">$15/month</p>
            <ul className="text-left text-gray-600 list-disc pl-5">
              <li>Support me on a monthly basis</li>
              <li>Email alert for new posts</li>
              <li>Exclusive posts and messages</li>
            </ul>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold">
              Join
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold  text-black">Advanced membership</h3>
            <p className="text-gray-500">$25/month</p>
            <ul className="text-left text-gray-600 list-disc pl-5">
              <li>Highly printable journal pages</li>
              <li>Email alert for new posts</li>
              <li>Work in progress updates</li>
            </ul>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold">
              Join
            </button>
          </div>
        </div>
      </div></div>
      <div className="flex flex-col items-center bg-[#fdfbf6] min-h-screen p-6">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold uppercase text-gray-500">Shop</h2>
        <h1 className="text-3xl font-bold">Introducing Shop, the creative way to sell.</h1>
        <p className="text-gray-600 mt-2 max-w-xl">
          The things you’d like to sell probably do not belong in a Shopify store. Shop is
          designed from the ground up with creators in mind. Whether it’s a 1-1 Zoom call, art
          commissions, or an ebook, Shop is for you.
        </p>
      </div>

      {/* Card Section */}
      <div className="w-80 p-4 bg-white rounded-2xl shadow-lg">
        <div className="bg-yellow-300 p-6 rounded-lg relative">
          <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-md font-semibold">
            .PDF
          </span>
          <div className="flex justify-center">
            <img src="/book-icon.svg" alt="Ebook" className="h-16" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Design E-book</h3>
          <p className="text-gray-700 font-semibold">$200</p>
          <p className="text-green-600 text-sm flex items-center gap-1">⭐ 4.9 (36)</p>
          <button className="w-full bg-yellow-400 text-black mt-4 p-2 rounded-md font-semibold">
            Buy
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex mt-6 gap-4 text-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">One-tap checkout</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">753</p>
          <p className="text-sm text-gray-500">Sales</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">$244</p>
          <p className="text-sm text-gray-500">Earnings</p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-4 text-center">
        <p className="text-sm text-gray-500">Liked it? Give rating</p>
        <div className="flex justify-center gap-1 mt-1">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-yellow-400">⭐</span>
          ))}
          <span className="text-gray-300">⭐</span>
        </div>
      </div>
    </div>

    <div className="bg-[#FAF8F2] min-h-screen flex flex-col items-center p-8">
      {/* Title Section */}
      <div className="text-center max-w-2xl">
        <h3 className="text-gray-500 uppercase tracking-widest font-semibold text-sm">
          Posts, Audio & Email
        </h3>
        <h1 className="text-4xl font-bold mt-2">Publish your best work</h1>
        <p className="text-gray-600 mt-4">
          Buy Me a Coffee makes it easy to publish free and exclusive content. Try different formats such as audio, and make it members-only to drive more memberships.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 items-start">
        {/* Video Card */}
        <div className="col-span-2 bg-white shadow-md rounded-xl overflow-hidden relative">
          <img src="/video-thumbnail.jpg" alt="Video" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-3 rounded-full shadow-lg">▶️</button>
          </div>
          <div className="p-4 flex justify-between text-sm text-gray-500">
            <span>0:00</span>
            <span>55:08</span>
          </div>
        </div>

        {/* Image Stack */}
        <div className="relative">
          <div className="absolute top-2 left-2 w-full h-full bg-yellow-300 rounded-lg transform translate-x-2 translate-y-2"></div>
          <div className="absolute top-4 left-4 w-full h-full bg-green-300 rounded-lg transform translate-x-2 translate-y-2"></div>
          <div className="relative bg-white shadow-md rounded-xl overflow-hidden">
            <img src="/colorful-art.jpg" alt="Art" className="w-full" />
            <div className="p-3">
              <h3 className="font-bold">Senak peaks 👀</h3>
              <p className="text-sm text-gray-500 flex justify-between">
                <span>❤️ 24</span> <span>💬 33</span>
              </p>
            </div>
          </div>
        </div>

        {/* Early Access */}
        <div className="bg-white shadow-md p-4 rounded-xl">
          <h3 className="font-bold">Early access</h3>
          <p className="text-gray-500 text-sm">
            Check out this week’s episode a full 24 hours before the rest of the world!
          </p>
          <p className="text-gray-500 text-sm flex justify-between mt-2">
            <span>❤️ 24</span> <span>💬 33</span>
          </p>
        </div>

        {/* Locked Content */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-md">
          🔒 Locked
        </div>

        {/* Audio Player */}
        <div className="bg-green-500 text-white p-4 rounded-xl shadow-md flex flex-col">
          <h3 className="font-bold">Eleanor Pe</h3>
          <div className="flex items-center justify-between mt-2">
            <button>⏪ 15</button>
            <button className="text-3xl">▶️</button>
            <button>15 ⏩</button>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>0:00</span>
            <span>55:08</span>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
