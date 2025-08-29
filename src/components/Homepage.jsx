import React from 'react';
import iconOne from '../assets/icons/iconone.png';
import iconTwo from '../assets/icons/icontwo.png';
import iconThree from '../assets/icons/iconethree.png';
import iconFour from '../assets/icons/iconfour.png';
import dogfoodImg from '../assets/images/dogfood.png'
import dogMilk from '../assets/images/dogmilk.png'
import twoDogs from '../assets/images/dog.png'
import brownFood from '../assets/images/brown.png'
import shieldCheck from '../assets/images/shield-check.png';
import gpay from '../assets/images/gpay.png';
import master from '../assets/images/master.png';
import paypal from '../assets/images/paypal.png';
import visa from '../assets/images/visa.png';

// Reusable Badge Component
const Badge = ({ icon: Icon, text, color = "green" }) => {
  const colorClasses = {
    green: "bg-green-50 text-green-700 border-green-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200"
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-full border ${colorClasses[color]}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-[24px]">
  <div className={`flex items-center justify-center rounded-full flex-shrink-0 w-12 h-12 sm:w-[60px] sm:h-[60px]`} style={{ background: bgColor }}>
        <img src={icon} alt="feature icon" className="w-9 h-9 object-contain" />
      </div>
  <div className="text-left flex flex-col gap-2 sm:gap-[8px]">
  <h4 className="font-semibold text-gray-900 leading-tight text-base sm:text-lg">{title}</h4>
  <p className="text-base text-gray-600 leading-tight">{description}</p>
      </div>
    </div>
  );
};

// Reusable Button Component
const Button = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-[#EE6F4B] text-white",
    secondary: "bg-gray-100 text-gray-900"
  };

  return (
    <button className={`px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// Reusable Stat Component
const Stat = ({ percentage, description }) => (
  <div className="flex items-start align-center gap-4 pt-2">
  <div className="text-3xl font-bold text-orange-500 flex-shrink-0 min-w-[4rem]">{percentage}</div>
  <p className="text-base text-gray-600 text-justify leading-tight">{description}</p>
</div>
);

// Main Component
const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="lg:max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              What makes us different
            </h1>
            <h1 className="text-3xl font-bold text-gray-900">makes them stronger</h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
         
            {/* Left Features */}
            <div className="flex flex-col gap-8 flex-1 max-w-xs w-full">
              <FeatureCard
                icon={iconOne}
                title="Real Food"
                description="Wholesome recipes for dogs with real meat and veggies."
                bgColor="#DCF9CA"
              />
              <FeatureCard
                icon={iconTwo}
                title="Made Fresh"
                description="We prioritize maintaining the integrity of whole foods and nutrition."
                bgColor="#F8F0D6"
              />
            </div>

            {/* Center Image */}
            <div className="flex justify-center flex-shrink-0">
              <div className="relative">
                <img
                  src={dogfoodImg}
                  alt="Dog food bowl"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="flex flex-col gap-8 flex-1 max-w-xs w-full">
              <FeatureCard
                icon={iconThree}
                title="Premium Ingredient"
                description="Elevating pet care with unmatched safety and quality."
                bgColor="#C8F2E7"
              />
              <FeatureCard
                icon={iconFour}
                title="Vet Developed"
                description="We raise the bar for dog nutrition, surpassing industry expectations."
                bgColor="#F7CABD"
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 w-full">
            <div className="flex flex-col items-center w-fit max-w-full">
              <Button className="w-full flex justify-center">Get your dog's healthy meal today!</Button>
              <div className="flex items-center justify-center gap-2 mt-4 w-full">
                <div className="flex items-center gap-2">
                  <img src={shieldCheck} alt="30-day money back guarantee" className="w-4 h-4" />
                  <span className="text-[1rem] lg:text-[13px] font-medium text-[#424153]">30-day money back guarantee</span>
                </div>
                <div className="flex items-center gap-3 mt-1 px-3 py-2">
                  <img src={gpay} alt="Google Pay" className="h-[24px] w-auto rounded-none" />
                  <img src={master} alt="Mastercard" className="h-[24px] w-auto rounded-none" />
                  <img src={paypal} alt="PayPal" className="h-[24px] w-auto rounded-none" />
                  <img src={visa} alt="Visa" className="h-[24px] w-auto rounded-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Benefits Section */}
      <section className="bg-[#F8F8F8] py-16">
        <div className="w-full lg:max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col lg:w-[538px] lg:h-[570px] justify-between">
              <h2 className="text-[40px] font-semibold mb-2 text-justify text-[#161723]">
                Nutrition is the foundation for longer,healthier lives in dogs.
              </h2>
              <p className="text-base text-gray-600 mb-8 text-justify">
               Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality,
                energy, and the joy of a longer, healthier life.
              </p>

              <div className="">
                  <h3 className="font-semibold text-gray-900 mb-2 text-left text-[#161723] text-[19px]">Key Points:</h3>
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="py-2">
                    <Stat
                      percentage="97%"
                      description="Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor."
                    />
                  </div>
                  <div className="py-2">
                    <Stat
                      percentage="84%"
                      description="Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption."
                    />
                  </div>
                  <div className="py-2">
                    <Stat
                      percentage="92%"
                      description="Our dog food's high protein and fat digestibility contribute to ideal stool quality."
                    />
                  </div>
                </div>
              </div>
              <Button>Give your furry friend the gift of wholesome nutrition</Button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={dogMilk}
                  alt="Happy dog with food package"
                  className="w-[570px] h-[570px] rounded-2xl object-cover shadow-lg"
                />
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digestive Health Section */}
      <section className="bg-white py-16 px-4">
        <div className="lg:max-w-6xl mx-auto">
        
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img
                src={twoDogs}
                alt="Dogs eating healthy food"
                className="w-[570px] h-[480px] rounded-2xl object-cover shadow-lg"
              />
            </div>

            <div className='lg:w-[538px]'>
              <h2 className="text-[40px] text-left font-semibold mb-4 text-[#161723]">
               Improve overall gastrointestinal health for better nutrient absorption
              </h2>
              <p className="text-base text-gray-600 mb-8 text-justify">
               Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
              </p>
            </div>
          </div>

          {/* Probiotics Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className='lg:w-[538px]'>
              <h2 className="text-[40px] text-left font-semibold mb-2 text-[#161723]">
               Prebiotics nourish the beneficial gut bacteria, supporting digestive health
              </h2>
              <p className="text-base text-gray-600 text-left mb-8">
               Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
              </p>
            </div>

            <div className="flex justify-center">
              <img
               src={brownFood}
                alt="Premium dog kibble"
                className="w-[570px] h-[480px] rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;