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

      <div className="mt-16 p-10 bg-gray-50 rounded-3xl shadow-lg max-w-3xl">
        <p className="text-gray-500 uppercase text-center">Support</p>
        <h2 className="text-3xl font-bold text-center text-black">
          Give your audience an easy way to say thanks.
        </h2>
        <p className="text-black text-center mt-2">
          Buy Me a Coffee makes supporting fun and easy. In just a couple of
          taps, your fans can make the payment (buy you a coffee) and leave a
          message.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="font-semibold text-lg text-black">
            Buy Juliet a coffee
          </h3>
          <div className="flex items-center mt-2 space-x-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded-full">
              1
            </button>
            <button className="bg-red-300 text-white px-3 py-1 rounded-full">
              3
            </button>
            <button className="bg-red-200 text-white px-3 py-1 rounded-full">
              5
            </button>
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              1
            </button>
          </div>
          <input
            type="text"
            placeholder="Say something nice..."
            className="w-full mt-3 p-2 border rounded-lg"
          />
          <button className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg font-semibold">
            Support $3
          </button>
        </div>
        <div className="mt-6 space-y-3">
          <div className="bg-white p-3 rounded-lg shadow text-sm text-black">
            Anie bought 10 coffees ☕
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-sm text-black">
            Cathy G bought a coffee. ❤️
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-sm text-black">
            Alex bought 25 coffees Thanks Alex!
          </div>
          <div className="bg-white p-3 rounded-lg shadow text-sm text-black">
            Tony Steel bought 3 coffees. "Absolutely love the show! I'm already
            waiting for next week's episode, lol. Thank you, and keep doing what
            you're doing." ❤️
          </div>
        </div>
      </div>

      <div className="mt-16 p-10 bg-gray-50 rounded-3xl shadow-lg max-w-3xl">
        <p className="text-gray-500 uppercase text-center">Memberships</p>
        <h2 className="text-3xl font-bold text-center">
          Start a membership for your biggest fans.
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Earn a recurring income by accepting monthly or yearly subscriptions.
          Share exclusive content, or just give them a way to support your work
          on an ongoing basis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold">Basic membership</h3>
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
            <h3 className="font-semibold">Pro membership</h3>
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
            <h3 className="font-semibold">Advanced membership</h3>
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
      </div>
    </div>
  );
}
