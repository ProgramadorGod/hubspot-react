import React from 'react';

const SecretCard = ({ number, title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-[#006aff] mb-2 text-center">
          SECRET #{number}
        </h3>
        <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          {title}
        </h4>
        <img
          src={imageSrc}
          alt={`Secret ${number} - ${title}`}
          className="w-full max-w-[300px] h-auto mb-6"
        />
        <p className="text-gray-700 text-lg text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

const SecretsSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">After 20+ Years Online,</h2>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">I'm Finally Ready To Reveal To You</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#006aff]">THE LAST SECRET</h2>
          </div>

          <div className="mb-10">
            <p className="mb-6"><strong>From:</strong> Russell Brunson<br />Boise, Idaho</p>

            <p className="mb-4">I've been doing this a LONG time now... <strong>over 20+ years I've been helping entrepreneurs to start and grow their companies online.</strong></p>

            <p className="mb-4">I've become kinda 'famous' as the guy who reveals the actual <strong>SECRETS</strong> to having success online.</p>

            <p className="mb-8">In fact, here are a few of the <strong>BIGGEST SECRETS</strong> that I've revealed over the last decade:</p>
          </div>

          {/* Secret #1 */}
          <div className="mb-16">
            <div className="bg-[#021131] text-white py-4 px-6 rounded-t-lg">
              <h3 className="text-xl md:text-2xl font-bold text-center">SECRET #1</h3>
              <h4 className="text-xl md:text-2xl font-bold text-center">Sales Funnels</h4>
            </div>

            <div className="bg-white p-6 rounded-b-lg shadow-md">
              <p className="mb-4">
                My first book is called <strong>DotComSecrets</strong> that taught people the fundamentals on
                <strong> how to use sales funnels to quickly scale their companies online</strong> About that same
                time we launched my core company called <strong>ClickFunnels</strong> that made building and launching
                funnels SIMPLE.
              </p>

              <p className="mb-6">
                From this first secret alone, <strong>we've helped over 2,500+ people to win a Two Comma Club award</strong>
                (you've probably seen the social proof online from thousands of our members!)
              </p>

              <img
                src="https://images.clickf3unnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Yjxavr/image/6702015/file/111aa30cf4bc963b9e926373656ba4d1.png"
                alt="DotComSecrets Book"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Secret #2 */}
          <div className="mb-16">
            <div className="bg-[#021131] text-white py-4 px-6 rounded-t-lg">
              <h3 className="text-xl md:text-2xl font-bold text-center">SECRET #2</h3>
              <h4 className="text-xl md:text-2xl font-bold text-center">Story Selling</h4>
            </div>

            <div className="bg-white p-6 rounded-b-lg shadow-md">
              <p className="mb-4">
                My second book is called <strong>Expert Secrets</strong> and helped people to learn how to tell
                their stories inside of their funnels in a way that turned their online visitors into lifelong customers!
              </p>

              <p className="mb-6">
                <strong>This secret was the KEY</strong> to getting your funnels to actually convert, as well as getting
                your customers to keep buying from you over and over again!
              </p>

              <img
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Yjxavr/image/6702016/file/6522eef4ab80acc82ab60f63f73a95b1.png"
                alt="Expert Secrets Book"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Secret #3 */}
          <div className="mb-10">
            <div className="bg-[#021131] text-white py-4 px-6 rounded-t-lg">
              <h3 className="text-xl md:text-2xl font-bold text-center">SECRET #3</h3>
              <h4 className="text-xl md:text-2xl font-bold text-center">Traffic Secrets</h4>
            </div>

            <div className="bg-white p-6 rounded-b-lg shadow-md">
              <p className="mb-4">
                My third and last book in the Secrets series is called <strong>Traffic Secrets</strong> and reveals
                how to find your DREAM customers, and get them to come to your websites and funnels with their credit
                cards in hand!
              </p>

              <p className="mb-6">
                <strong>These 3 core secrets have helped our members have so much success over the past decade</strong>
              </p>

              <img
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Yjxavr/image/6702017/file/9340b8fc880980b6198db81021be6e76.png"
                alt="Traffic Secrets Book"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretsSection;
