import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, Home, Heart, AlertTriangle, Navigation, Search, 
  Check, Building2, UserCheck, Map, ShieldCheck, Users,
  AlertCircle, FileCheck, Bookmark
} from 'lucide-react';

const DisasterReliefApp = () => {
  const [location, setLocation] = useState('');
  const [disasterType, setDisasterType] = useState('');
  const [activeAreas, setActiveAreas] = useState([]);

  const EmergencyServices = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-red-50">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <Phone className="h-8 w-8 text-red-600" />
            <h3 className="font-semibold">Medical Emergency</h3>
            <div className="space-y-2 w-full">
              <Button className="w-full bg-red-600 hover:bg-red-700">Ambulance</Button>
              <Button className="w-full bg-red-600 hover:bg-red-700">First Aid</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <AlertTriangle className="h-8 w-8 text-blue-600" />
            <h3 className="font-semibold">Rescue Services</h3>
            <div className="space-y-2 w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Fire Brigade</Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Search & Rescue</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <Navigation className="h-8 w-8 text-green-600" />
            <h3 className="font-semibold">Relief Centers</h3>
            <div className="space-y-2 w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700">Food & Water</Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">Medical Supplies</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const DisasterTracker = () => (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Select onValueChange={setDisasterType}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Disaster Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flood">Flood</SelectItem>
                <SelectItem value="earthquake">Earthquake</SelectItem>
                <SelectItem value="hurricane">Hurricane</SelectItem>
                <SelectItem value="wildfire">Wildfire</SelectItem>
                <SelectItem value="tsunami">Tsunami</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              placeholder="Add affected area..."
              className="flex-1"
            />
            <Button>Add Area</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {['New York', 'New Jersey', 'Connecticut'].map(area => (
              <Badge key={area} variant="outline" className="px-3 py-1">
                {area}
                <button className="ml-2 text-xs">×</button>
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const NGOSection = () => (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <h3 className="font-semibold">NGO Registration</h3>
              </div>
              <Input placeholder="Organization Name" />
              <Input placeholder="Registration Number" />
              <Input placeholder="Contact Email" />
              <Button className="w-full">Submit for Verification</Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FileCheck className="h-5 w-5" />
                <h3 className="font-semibold">Request Donations</h3>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Request Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplies">Emergency Supplies</SelectItem>
                  <SelectItem value="medical">Medical Equipment</SelectItem>
                  <SelectItem value="food">Food & Water</SelectItem>
                  <SelectItem value="shelter">Shelter Materials</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Required Amount/Quantity" />
              <Input placeholder="Delivery Location" />
              <Button variant="outline" className="w-full">Submit Request</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const VolunteerSection = () => (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5" />
                <h3 className="font-semibold">Essential Worker Registration</h3>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medical">Medical Professional</SelectItem>
                  <SelectItem value="rescue">Search & Rescue</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="mental">Mental Health</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Professional ID/License" />
              <Input placeholder="Years of Experience" />
              <Button className="w-full">Register as Volunteer</Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="font-semibold">Verification Status</h3>
              </div>
              <Card className="bg-yellow-50 p-4">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Verification in Progress</span>
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-center space-x-2">
            <Heart className="h-6 w-6 text-red-600" />
            <span>Disaster Relief Support</span>
          </CardTitle>
        </CardHeader>
      </Card>

      <DisasterTracker />

      <Tabs defaultValue="emergency" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
          <TabsTrigger value="ngo">NGOs</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="shelter">Shelter</TabsTrigger>
        </TabsList>

        <TabsContent value="emergency">
          <EmergencyServices />
        </TabsContent>

        <TabsContent value="ngo">
          <NGOSection />
        </TabsContent>

        <TabsContent value="volunteer">
          <VolunteerSection />
        </TabsContent>

        <TabsContent value="shelter">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Home className="h-5 w-5" />
                      <h3 className="font-semibold">Register Shelter</h3>
                    </div>
                    <Input placeholder="Address" />
                    <Input placeholder="Capacity" type="number" />
                    <Input placeholder="Facilities Available" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Accessibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheelchair">Wheelchair Accessible</SelectItem>
                        <SelectItem value="elderly">Elderly Friendly</SelectItem>
                        <SelectItem value="family">Family Friendly</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="w-full">Submit for Verification</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Search className="h-5 w-5" />
                      <h3 className="font-semibold">Find Shelter</h3>
                    </div>
                    <Input 
                      placeholder="Search by location..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Required Facilities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical">Medical Support</SelectItem>
                        <SelectItem value="food">Food Service</SelectItem>
                        <SelectItem value="accessibility">Accessibility Features</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" className="w-full">Search</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DisasterReliefApp;