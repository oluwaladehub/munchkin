import { BarChart3, Users, Laptop, HeartHandshake } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Utilizing advanced analytics to provide actionable insights that inform decision-making and strategy.'
  },
  {
    icon: HeartHandshake,
    title: 'Consulting Services',
    description: 'Offering expert guidance to help organizations identify opportunities for improvement and innovation.'
  },
  {
    icon: Laptop,
    title: 'Technology Integration',
    description: 'Seamlessly integrating technology solutions to optimize organizational performance.'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Designing and implementing systems that enhance customer engagement and satisfaction.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help businesses thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}