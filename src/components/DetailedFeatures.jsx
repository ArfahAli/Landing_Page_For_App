import React from 'react';
import { MdSchedule, MdFeedback, MdUpdate, MdBuild, MdDashboard, MdSecurity } from 'react-icons/md';

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
        <div class="flex justify-center items-center md:w-1/2 w-full md:mb-0 mb-10">
  <img class="w-full md:w-[25rem] h-auto relative z-10" alt="hero" src="screen_4.png" />
</div>


          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
           
            <Feature
              icon={<MdSchedule size="1.5em" />}
              title="Smart Scheduling"
              description="Effortlessly plan your laundry with our scheduling system. This feature allows users to set up laundry services based on their preferences, ensuring convenience and efficient time management."
            />
            <Feature
              icon={<MdFeedback size="1.5em" />}
              title="Seamless Feedback Loop"
              description="Facilitate effective communication between users and laundry services by streamlining the feedback process on both the User and Admin Boards."
            />
            <Feature
              icon={<MdUpdate size="1.5em" />}
              title="Instant Order Updates"
              description="Users stay informed with instant updates on the status of their laundry orders, enhancing transparency and reducing uncertainty"
            />
            <Feature
              icon={<MdBuild size="1.5em" />}
              title="Effortless Service Management"
              description="Simplify service administration with a user-friendly interface on the Admin Board, enabling easy addition, editing, and deletion of laundry services."
            />
             <Feature
              icon={<MdDashboard size="1.5em" />}
              title="Centralized Order Tracking Dashboard"
              description="Gain operational control with a centralized dashboard on the Admin Board, providing real-time insights into customer orders and statuses."
            />
              <Feature
              icon={<MdSecurity size="1.5em" />}
              title="Proactive User Account Monitoring"
              description="Ensure security and compliance by actively monitoring user accounts on the Admin Board, promptly addressing any irregularities or suspicious activities."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDesignFeatures;
