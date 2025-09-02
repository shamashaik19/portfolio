import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      level: 'Professional',
      issuer: 'Amazon Web Services',
      year: '2023',
      badge: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'Active'
    },
    {
      title: 'Certified Kubernetes Administrator',
      level: 'CKA',
      issuer: 'Cloud Native Computing Foundation',
      year: '2023',
      badge: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'Active'
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      level: 'Associate',
      issuer: 'HashiCorp',
      year: '2022',
      badge: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'Active'
    },
    {
      title: 'Microsoft Azure DevOps Engineer Expert',
      level: 'Expert',
      issuer: 'Microsoft',
      year: '2022',
      badge: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'Active'
    },
    {
      title: 'Docker Certified Associate',
      level: 'Associate',
      issuer: 'Docker',
      year: '2021',
      badge: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'Active'
    },
    {
      title: 'Google Cloud Professional DevOps Engineer',
      level: 'Professional',
      issuer: 'Google Cloud',
      year: '2021',
      badge: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'Active'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating expertise in cloud platforms and DevOps technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-600">{cert.status}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{cert.title}</h3>
                  <div className="space-y-1">
                    <p className="text-blue-600 font-semibold">{cert.level}</p>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">Issued: {cert.year}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify Credential
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full">
              <CheckCircle className="mr-2 h-5 w-5" />
              <span className="font-medium">All certifications are current and verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;