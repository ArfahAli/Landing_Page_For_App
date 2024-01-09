import React from 'react';
import { MdUpdate, MdColorLens, MdSupport, MdWeb } from 'react-icons/md';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex items-start mb-8 shadow-sm p-4 rounded-lg bg-white">
      <div className="text-[#883d53] text-2xl mr-4">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AppDesignFeatures = () => {
  return (
    <div className="bg-gray-100 text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 flex-col items-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-5">App Features</h2>
        <div className="w-32 h-2 bg-[#883d53] mb-12 mx-auto"></div>

        <div className="flex flex-wrap justify-center items-start">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            {/* Replace src with your image path */}
            <img className="object-cover object-center rounded shadow-lg" alt="hero" src="phone-image.png" />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <Feature
              icon={<MdWeb size="1.5em" />}
              title="Responsive Web Design"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
            />
            <Feature
              icon={<MdColorLens size="1.5em" />}
              title="Infinite Color"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
            />
            <Feature
              icon={<MdUpdate size="1.5em" />}
              title="Free Updates Forever"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
            />
            <Feature
              icon={<MdSupport size="1.5em" />}
              title="Online Support"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
            />
            <Feature
              icon={<MdSupport size="1.5em" />}
              title="Online Support"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDesignFeatures;
