import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const certifications = [
  {
    title: 'DevOps Engineer',
    provider: 'Star Agile',
    link: 'https://drive.google.com/file/d/1TGiT5LRGGX8V-sovi-OwaBPGrNGteIwJ/view?usp=sharing',
    image: 'https://img.icons8.com/color/48/000000/devops.png'
  },
  {
    title: 'Kubernetes',
    provider: 'IBM',
    link: 'https://drive.google.com/file/d/1c-7qY1M5k8aXa6rDTVPCEoS8JSjMv0-K/view?usp=sharing',
    image: 'https://img.icons8.com/color/48/000000/kubernetes.png'
  },
  {
    title: 'Docker',
    provider: 'IBM',
    link: 'https://drive.google.com/file/d/1MnYevmRNCmVsQd51jg164-Wn9RZ8fpFi/view?usp=sharing',
    image: 'https://img.icons8.com/color/48/000000/docker.png'
  },
  {
    title: 'DevOps Certificate',
    provider: 'IBM',
    link: 'https://drive.google.com/file/d/1-gb0jrrm_Dr_oQtV1tLRDJXkRZbQHCVo/view?usp=sharing',
    image: 'https://img.icons8.com/color/48/000000/certificate.png'
  },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mt-2"></div>
          <p className="text-gray-600 mt-4">
            Professional certifications that validate my expertise in DevOps, Cloud, and Containerization.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            {open ? 'Hide Certifications' : 'View Certifications'}
            {open ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
              >
                <img src={cert.image} alt={cert.title} className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                  <p className="text-gray-500">{cert.provider}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
