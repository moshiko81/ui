import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Baby, Heart, Activity, Bell, Medal, Book, Calendar } from 'lucide-react';

const PediatricMobileApp = () => {
  // State management remains the same
  const [children, setChildren] = useState([
    { id: 1, name: 'Emma', age: '5', avatar: '/api/placeholder/80/80', lastCheck: '98.6°F' },
    { id: 2, name: 'Noah', age: '3', avatar: '/api/placeholder/80/80', lastCheck: '98.2°F' },
    { id: 3, name: 'Olivia', age: '7', avatar: '/api/placeholder/80/80', lastCheck: '98.4°F' }
  ]);

  const [activeChild, setActiveChild] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  const [recentMetrics, setRecentMetrics] = useState([
    { id: 1, type: 'Temperature', value: '98.6°F', time: '2h ago' },
    { id: 2, type: 'Weight', value: '40 lbs', time: '1d ago' },
    { id: 3, type: 'Height', value: '42 in', time: '1d ago' }
  ]);

  return (
    <div className="h-screen flex flex-col bg-blue-50">
      {/* Fixed Header */}
      <div className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Baby className="w-8 h-8 text-pink-500" />
            <h1 className="text-2xl font-bold text-pink-500">KidsHealth</h1>
          </div>
          <Bell className="w-6 h-6 text-gray-500" />
        </div>

        {/* Child Profile Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {children.map(child => (
            <div
              key={child.id}
              className={`flex-shrink-0 text-center ${
                activeChild === child.id ? 'scale-110 transition-transform' : ''
              }`}
              onClick={() => setActiveChild(child.id)}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-4 border-pink-200">
                <img
                  src={child.avatar}
                  alt={child.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium">{child.name}</p>
              <p className="text-xs text-gray-500">{child.lastCheck}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-white mt-2">
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-24 border-2 border-blue-200 rounded-xl"
          >
            <Heart className="w-8 h-8 text-pink-500 mb-2" />
            <span className="text-xs text-center">Check Health</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-24 border-2 border-blue-200 rounded-xl"
          >
            <Activity className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-xs text-center">Track Growth</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-24 border-2 border-blue-200 rounded-xl"
          >
            <Calendar className="w-8 h-8 text-purple-500 mb-2" />
            <span className="text-xs text-center">Appointments</span>
          </Button>
        </div>

        {/* Recent Metrics */}
        <div className="p-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Health Checks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMetrics.map(metric => (
                  <div key={metric.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">{metric.type}</p>
                      <p className="text-sm text-gray-500">{metric.time}</p>
                    </div>
                    <p className="text-lg font-bold text-blue-600">{metric.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Cards */}
        <div className="p-4">
          <div className="flex gap-4 overflow-x-auto">
            <Card className="flex-shrink-0 w-48">
              <CardContent className="pt-4">
                <div className="flex flex-col items-center">
                  <Medal className="w-12 h-12 text-yellow-500 mb-2" />
                  <p className="font-medium text-center">Perfect Week</p>
                  <p className="text-sm text-gray-500 text-center">All checks completed!</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 w-48">
              <CardContent className="pt-4">
                <div className="flex flex-col items-center">
                  <Book className="w-12 h-12 text-purple-500 mb-2" />
                  <p className="font-medium text-center">Health Expert</p>
                  <p className="text-sm text-gray-500 text-center">Learned 5 health facts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="bg-white border-t flex justify-around p-2">
        <Button
          variant="ghost"
          className={`flex flex-col items-center ${activeTab === 'home' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('home')}
        >
          <Baby className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex flex-col items-center ${activeTab === 'health' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('health')}
        >
          <Heart className="w-6 h-6" />
          <span className="text-xs">Health</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex flex-col items-center ${activeTab === 'growth' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('growth')}
        >
          <Activity className="w-6 h-6" />
          <span className="text-xs">Growth</span>
        </Button>
        <Button
          variant="ghost"
          className={`flex flex-col items-center ${activeTab === 'rewards' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('rewards')}
        >
          <Medal className="w-6 h-6" />
          <span className="text-xs">Rewards</span>
        </Button>
      </div>
    </div>
  );
};

export default PediatricMobileApp;
