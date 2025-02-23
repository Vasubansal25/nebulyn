import { ChevronRight } from "lucide-react";
import Nav from './Nav';
import Footer from './Footer';

const Services = () => {
  return (
    <div className="w-full font-sans">
      {/* Header Section */}
      <div>
        <Nav/>
      </div>
      
      {/* Hero Section */}
      <div className="py-16 px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold">OUR SERVICES</h2>
          <p className="text-base mt-4 text-gray-600">We Deliver Innovative Solutions To Help Businesses Thrive In The Digital Age</p>
          <button className="mt-6 bg-blue-900 hover:bg-blue-700 text-white max-w-xs  px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
  EXPLORE SERVICES
</button>


        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/images/top.png" alt="illus" className="rounded-lg max-w-full h-72 object-contain" />
        </div>
      </div>
      <br></br>
      
      {/* Development Services Section */}
      <div className="py-16 text-center">
  <h2 className="text-3xl font-semibold">End-To-End Development Services</h2>
  <p className="text-base mt-2 text-gray-600">
    Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.
  </p>
  <div className="flex justify-center mt-6">
    <img src="/images/service.png" alt="Development Services" className="max-w-xl" />
  </div>
</div>
      
      {/* What We Offer Section */}
      
      <div className="py-16 text-center">
        <h2 className="text-3xl font-semibold">What We Offer</h2>
        <p className="text-base mt-2 text-gray-600">Comprehensive digital solutions tailored to your business needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-8">
          {[ 
            { img: "/images/SVG.png", title: "Web Development", desc: "Create web solutions built with cutting-edge technologies to enhance exceptional digital experiences." },
            { img: "/images/Vector.png", title: "App Development", desc: "Native and cross-platform mobile applications that provide excellent user experience." },
            { img: "/images/SD.png", title: "Software Development", desc: "Tailored software solutions to streamline your business processes and boost efficiency." },
            { img: "/images/SRM.png", title: "CRM Solutions", desc: "Customer relationship management systems to enhance your business relationships and sales." },
            { img: "/images/LAST.png", title: "ERP Systems", desc: "Enterprise resource planning solutions to integrate all aspects of your business operations." }
          ].map((service, index) => (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative text-center hover:shadow-xl transition duration-300 w-48 h-48 flex flex-col justify-center items-center" key={index}>
              <img src={service.img} alt={service.title} className="mx-auto mb-2 h-12" />
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-sm text-center px-2">{service.desc}</p>
              <ChevronRight className="absolute top-4 right-4 text-blue-500" />
            </div>
          ))}
        </div>
      </div>
      <br></br>
      
      {/* Our Process Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="flex flex-col gap-12 md:gap-16 items-center">
          {[ 
            { img: "/images/webde.png", title: "DESIGNER", desc: "The Designer is the translator of aesthetics and functional needs..." },
            { img: "/images/dev.png", title: "DEVELOPER", desc: "The Developer often faces problems or projects that require specific solutions..." },
            { img: "/images/analyst.png", title: "ANALYST", desc: "The Functional Analyst is responsible for success, opportunity, development, and collaboration..." }
          ].map((member, index) => (
            <div className={`flex items-center gap-6 max-w-2xl mx-auto ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} key={index}>
              <img src={member.img} alt={member.title} className="w-36 h-36 rounded-lg" />
              <div>
                <h2 className="text-xl font-semibold text-blue-500">{member.title}</h2>
                <p className="text-gray-700">{member.desc}</p>
              </div>
            </div>
      
          ))}
        </div>
      </div>
      
      {/* Meet Our Team Section */}
      <br></br>
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold">Our Process</h2>
     
        <p className="text-base text-gray-600">A streamlined approach to deliver exceptional results</p>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 px-8">
          {[ 
            { number: "01", title: "Discovery", desc: "We analyze your requirements and plan the perfect solution." },
            { number: "02", title: "Design", desc: "Creating the blueprint and visual aspects of your solution." },
            { number: "03", title: "Development", desc: "Building your solution with quality code and best practices." },
            { number: "04", title: "Delivery", desc: "Testing, deployment and ongoing support for your project." }
          ].map((step, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white text-lg font-bold rounded-full">{step.number}</div>
              <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
            </div>
            
     
          ))}
        </div>
      </div>
      <br></br>
      <section className="flex flex-col items-center text-black-center py-16 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Ready to Transform Your Business?
      </h2>
      <p className="text-gray-600 text-base mt-2">
        Let's discuss how our services can help you achieve your business goals
      </p>
      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white max-w-xs px-6 py-3 rounded-lg shadow-lg text-sm font-medium">
        Contact Us Today
      </button>
    </section>
      <br></br>
      <br></br>
      <div> <Footer/></div>
    </div>
    
  );
};

export default Services;
