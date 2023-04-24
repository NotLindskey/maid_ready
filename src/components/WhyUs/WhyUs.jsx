import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function AboutPage() {

  const history = useHistory();

  return (
    <div className="container">
      <div>
       <h2>WHY US</h2>
      </div>
      <div>
        <h3>Short Term Rental Owners</h3>
        <p>
          At Maid!Ready!, we understand the challenges that come with owning a short term rental property. Finding reliable and trustworthy cleaning services can be a hassle, especially when you're dealing with different cleaning schedules and standards. That's why we've created a two-sided marketplace app that connects property owners with qualified gig-workers who can clean their properties.

Think of Maid!Ready! as your one-stop shop for all your cleaning needs. Our platform works like "DoorDash" for cleaning services, where owners can post a job with details such as pay rate, address, and a task list that is available to "keepers". Keepers can then log in to Maid!Ready! and choose jobs based on their distance preferences, making it easy to find work that fits their lifestyle.

But we don't just connect owners with keepers. We also ensure the safety and security of everyone involved. Each keeper is background checked before being allowed to access the job board, so you can rest easy knowing that your property is in good hands.

Maid!Ready! is the perfect solution for short term rental owners who want to access cleaning services without having to search for employees on their own. And it's also great for gig-workers who want to find work that fits their lifestyle. So whether you're an owner or a keeper, Maid!Ready! has got you covered.
        </p>
      </div>
      <div>
        <h3>Want to Be Your Own Boss?</h3>
        <p>
          Sure, here's an updated version of the text block with a section on why someone would become a "keeper" on Maid!Ready!:

At Maid!Ready!, we're not just here to help short term rental owners find reliable cleaning services. We're also here to support gig-workers who want to find work that fits their lifestyle. That's why we've created a platform that allows you to become a "keeper" and select jobs posted by property owners.

Becoming a "keeper" on Maid!Ready! has many benefits. First and foremost, you get to choose when and where you work. You have the flexibility to accept or decline jobs based on your preferences and availability, so you can maintain a healthy work-life balance. Plus, you can earn money on the side or make it your full-time job, depending on your needs.

But being a "keeper" on Maid!Ready! isn't just about flexibility and income. It's also about being part of a community of like-minded individuals who share your passion for cleanliness and hospitality. Our platform allows you to connect with other keepers and property owners, exchange tips and best practices, and build your network in the short term rental industry.

So whether you're looking for a side hustle or a new career path, Maid!Ready! is the perfect platform for you. With our easy-to-use app, reliable payment system, and friendly support team, you can start your journey as a "keeper" today and take control of your work and your life.
        </p>
      </div>
      <div>  
      <button onClick={() => {history.goBack()}} value="Cancel">Go Back</button>
      </div>
    </div>
  );
}

export default AboutPage;
