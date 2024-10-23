import React, { useState } from 'react';
import { Search, MapPin, BookOpen, Scale, Users, Shield, CheckCircle, AlertCircle, Upload } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ProBonoLegalApp = () => {
  const [activeTab, setActiveTab] = useState('find');
  const [searchQuery, setSearchQuery] = useState('');
  const [registrationStep, setRegistrationStep] = useState(1);
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    barNumber: '',
    specialty: '',
    location: '',
    languages: '',
    yearsOfPractice: '',
    university: '',
    graduationYear: '',
  });

  // Sample verification statuses for demo
  const verificationStatuses = {
    barStatus: 'verified',
    backgroundCheck: 'pending',
    identityVerification: 'verified',
  };

  const sampleLawyers = [
    {
      name: "Sarah Chen",
      specialty: "Human Rights Law",
      location: "Singapore",
      languages: ["English", "Mandarin"],
      cases: 15,
      available: true,
      verificationStatus: "verified"
    },
    {
      name: "Michael Okonjo",
      specialty: "Immigration Law",
      location: "Nigeria",
      languages: ["English", "Yoruba"],
      cases: 23,
      available: true,
      verificationStatus: "verified"
    },
    {
      name: "Elena Rodriguez",
      specialty: "Family Law",
      location: "Spain",
      languages: ["Spanish", "English", "Portuguese"],
      cases: 31,
      available: false,
      verificationStatus: "pending"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registrationStep < 3) {
      setRegistrationStep(registrationStep + 1);
    } else {
      // Submit final form and start verification process
      setVerificationStatus('in_progress');
      // In a real app, this would trigger the verification API calls
    }
  };

  const filteredLawyers = sampleLawyers.filter(lawyer =>
    lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lawyer.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lawyer.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const VerificationStatus = () => (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="text-blue-600" />
          Verification Status
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>Bar Association Verification</span>
            {verificationStatuses.barStatus === 'verified' ? (
              <CheckCircle className="text-green-600" />
            ) : (
              <AlertCircle className="text-yellow-600" />
            )}
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>Background Check</span>
            {verificationStatuses.backgroundCheck === 'verified' ? (
              <CheckCircle className="text-green-600" />
            ) : (
              <AlertCircle className="text-yellow-600" />
            )}
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span>Identity Verification</span>
            {verificationStatuses.identityVerification === 'verified' ? (
              <CheckCircle className="text-green-600" />
            ) : (
              <AlertCircle className="text-yellow-600" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const RegistrationForm = () => (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Register as a Pro Bono Lawyer</h2>
        
        {registrationStep === 1 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-medium">Step 1: Personal Information</h3>
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Next Step
            </button>
          </form>
        )}

        {registrationStep === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-medium">Step 2: Professional Information</h3>
            <div>
              <label className="block mb-2">Bar Association Number</label>
              <input
                type="text"
                name="barNumber"
                value={formData.barNumber}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Legal Specialty</label>
              <input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Years of Practice</label>
              <input
                type="number"
                name="yearsOfPractice"
                value={formData.yearsOfPractice}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Next Step
            </button>
          </form>
        )}

        {registrationStep === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-medium">Step 3: Document Verification</h3>
            <Alert className="mb-4">
              <AlertDescription>
                Please provide clear, high-resolution copies of the following documents for verification:
              </AlertDescription>
            </Alert>
            
            <div className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-4">
                <label className="block text-center cursor-pointer">
                  <Upload className="mx-auto mb-2" />
                  <span className="block mb-2">Bar Association License</span>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  <span className="text-sm text-gray-500">PDF, JPG, or PNG</span>
                </label>
              </div>

              <div className="border-2 border-dashed rounded-lg p-4">
                <label className="block text-center cursor-pointer">
                  <Upload className="mx-auto mb-2" />
                  <span className="block mb-2">Government-issued ID</span>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  <span className="text-sm text-gray-500">PDF, JPG, or PNG</span>
                </label>
              </div>

              <div className="border-2 border-dashed rounded-lg p-4">
                <label className="block text-center cursor-pointer">
                  <Upload className="mx-auto mb-2" />
                  <span className="block mb-2">Professional Liability Insurance</span>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" required />
                  <span className="text-sm text-gray-500">PDF, JPG, or PNG</span>
                </label>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit for Verification
            </button>
          </form>
        )}

        {verificationStatus === 'in_progress' && (
          <div className="mt-6">
            <Alert>
              <AlertDescription>
                Your application is being processed. We will verify your credentials and conduct necessary background checks. This process typically takes 3-5 business days.
              </AlertDescription>
            </Alert>
            <VerificationStatus />
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Global Pro Bono Legal Services</h1>
        <p className="text-gray-600">Connecting those in need with verified legal professionals worldwide</p>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === 'find' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setActiveTab('find')}
        >
          <Search size={20} />
          Find Legal Help
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            activeTab === 'offer' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setActiveTab('offer')}
        >
          <Scale size={20} />
          Offer Pro Bono Services
        </button>
      </div>

      {activeTab === 'find' && (
        <div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by legal specialty, location, or language..."
                className="w-full p-4 pl-12 rounded-lg border border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-4 text-gray-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLawyers.map((lawyer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{lawyer.name}</span>
                    <div className="flex flex-col items-end">
                      <span className={`text-sm px-2 py-1 rounded ${
                        lawyer.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {lawyer.available ? 'Available' : 'Unavailable'}
                      </span>
                      {lawyer.verificationStatus === 'verified' && (
                        <span className="flex items-center text-sm text-blue-600 mt-1">
                          <Shield size={14} className="mr-1" />
                          Verified
                        </span>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-gray-500" />
                      <span>{lawyer.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-gray-500" />
                      <span>{lawyer.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-500" />
                      <span>{lawyer.cases} Pro Bono Cases Completed</span>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm mb-2">Languages:</div>
                      <div className="flex flex-wrap gap-2">
                        {lawyer.languages.map((lang, i) => (
                          <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Request Consultation
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'offer' && <RegistrationForm />}
    </div>
  );
};

export default ProBonoLegalApp;