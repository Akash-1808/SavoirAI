'use client';

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Briefcase, TrendingUp, Settings, LogOut, Search, Filter, Plus, Edit2, Trash2, Eye, Download, Target } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);

  // Mock data
  const dashboardStats = {
    totalUsers: 1247,
    totalInternships: 89,
    activeAllocations: 432,
    matchRate: 87.5
  };

  const allocationData = [
    { month: 'Jan', allocations: 45, successful: 39 },
    { month: 'Feb', allocations: 52, successful: 47 },
    { month: 'Mar', allocations: 61, successful: 53 },
    { month: 'Apr', allocations: 58, successful: 51 },
    { month: 'May', allocations: 73, successful: 65 },
    { month: 'Jun', allocations: 68, successful: 61 }
  ];

  const skillGapData = [
    { skill: 'React', required: 85, current: 62 },
    { skill: 'Python', required: 78, current: 71 },
    { skill: 'Machine Learning', required: 65, current: 41 },
    { skill: 'Node.js', required: 72, current: 58 },
    { skill: 'SQL', required: 80, current: 73 }
  ];

  const departmentData = [
    { name: 'Engineering', value: 45, color: '#3b82f6' },
    { name: 'Design', value: 20, color: '#8b5cf6' },
    { name: 'Marketing', value: 18, color: '#ec4899' },
    { name: 'Data Science', value: 17, color: '#10b981' }
  ];

  const users = [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@email.com', skills: 'React, TypeScript, Node.js', matchScore: 92, status: 'Active' },
    { id: 2, name: 'Michael Rodriguez', email: 'm.rodriguez@email.com', skills: 'Python, ML, TensorFlow', matchScore: 88, status: 'Active' },
    { id: 3, name: 'Emily Watson', email: 'emily.w@email.com', skills: 'UI/UX, Figma, CSS', matchScore: 85, status: 'Pending' },
    { id: 4, name: 'James Kim', email: 'james.kim@email.com', skills: 'Java, Spring Boot, AWS', matchScore: 79, status: 'Active' },
    { id: 5, name: 'Lisa Anderson', email: 'l.anderson@email.com', skills: 'Data Analysis, SQL, Tableau', matchScore: 91, status: 'Active' }
  ];

  const internships = [
    { id: 1, title: 'Frontend Developer Intern', company: 'TechCorp', duration: '3 months', slots: 5, filled: 3, status: 'Active' },
    { id: 2, title: 'ML Engineer Intern', company: 'AI Solutions', duration: '6 months', slots: 3, filled: 2, status: 'Active' },
    { id: 3, title: 'UX Design Intern', company: 'DesignHub', duration: '4 months', slots: 4, filled: 4, status: 'Filled' },
    { id: 4, title: 'Data Analyst Intern', company: 'DataCo', duration: '3 months', slots: 6, filled: 4, status: 'Active' },
    { id: 5, title: 'Backend Developer Intern', company: 'ServerSide Inc', duration: '5 months', slots: 4, filled: 1, status: 'Active' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Users</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalUsers}</p>
              <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Internships</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalInternships}</p>
              <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Briefcase className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Active Allocations</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.activeAllocations}</p>
              <p className="text-xs text-green-600 mt-2">↑ 15% from last month</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Match Rate</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.matchRate}%</p>
              <p className="text-xs text-green-600 mt-2">↑ 3% from last month</p>
            </div>
            <div className="bg-pink-50 p-3 rounded-lg">
              <TrendingUp className="w-8 h-8 text-pink-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Allocation Trends */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Allocation Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={allocationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="allocations" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="successful" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderSkillGap = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Skill Gap Analysis</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
        
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={skillGapData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="skill" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Legend />
            <Bar dataKey="required" fill="#3b82f6" name="Required Level" />
            <Bar dataKey="current" fill="#10b981" name="Current Level" />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="text-sm text-red-600 font-medium mb-1">Critical Gap</p>
            <p className="text-2xl font-bold text-red-700">Machine Learning</p>
            <p className="text-xs text-red-600 mt-1">24 point gap</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <p className="text-sm text-yellow-600 font-medium mb-1">Moderate Gap</p>
            <p className="text-2xl font-bold text-yellow-700">React</p>
            <p className="text-xs text-yellow-600 mt-1">23 point gap</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <p className="text-sm text-green-600 font-medium mb-1">Low Gap</p>
            <p className="text-2xl font-bold text-green-700">Python</p>
            <p className="text-xs text-green-600 mt-1">7 point gap</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Add User
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Email</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Skills</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Match Score</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-900">{user.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{user.email}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{user.skills}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${user.matchScore}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{user.matchScore}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-blue-50 rounded transition-colors" title="View">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-1 hover:bg-green-50 rounded transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4 text-green-600" />
                      </button>
                      <button className="p-1 hover:bg-red-50 rounded transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderInternships = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Internship Management</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search internships..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Add Internship
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {internships.map((internship) => (
            <div key={internship.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{internship.title}</h4>
                  <p className="text-sm text-gray-600">{internship.company}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  internship.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {internship.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">{internship.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Slots:</span>
                  <span className="font-medium text-gray-900">{internship.filled}/{internship.slots}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Filled</span>
                  <span>{Math.round((internship.filled / internship.slots) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{ width: `${(internship.filled / internship.slots) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  View Details
                </button>
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Savoir AI</h1>
          <p className="text-sm text-gray-500">Admin Dashboard</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'users' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Users</span>
          </button>

          <button
            onClick={() => setActiveTab('internships')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'internships' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Internships</span>
          </button>

          <button
            onClick={() => setActiveTab('skillgap')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'skillgap' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Target className="w-5 h-5" />
            <span className="font-medium">Skill Gap</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {activeTab === 'overview' && 'Dashboard Overview'}
            {activeTab === 'users' && 'User Management'}
            {activeTab === 'internships' && 'Internship Management'}
            {activeTab === 'skillgap' && 'Skill Gap Analysis'}
          </h2>
          <p className="text-gray-600">
            {activeTab === 'overview' && 'Monitor your internship allocation platform performance'}
            {activeTab === 'users' && 'Manage and track all registered users'}
            {activeTab === 'internships' && 'Create and manage internship opportunities'}
            {activeTab === 'skillgap' && 'Analyze skill gaps and training needs'}
          </p>
        </div>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'internships' && renderInternships()}
        {activeTab === 'skillgap' && renderSkillGap()}
      </div>
    </div>
  );
}