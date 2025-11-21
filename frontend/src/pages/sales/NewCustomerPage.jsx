import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlusIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const NewCustomerPage = () => {
    const [activeTab, setActiveTab] = useState('other');
    const [formData, setFormData] = useState({
        customerType: 'business',
        salutation: 'Mr.',
        firstName: '',
        lastName: '',
        companyName: '',
        displayName: '',
        email: '',
        workPhone: '',
        mobilePhone: '',
        language: 'English',
        pan: '',
        currency: 'INR',
        openingBalance: '',
        paymentTerms: 'Due on Receipt',
        enablePortal: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-gray-200 pb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-0 flex items-center space-x-3">
                    <UserPlusIcon className="w-8 h-8 text-blue-600" />
                    <span>New Customer</span>
                </h1>
                <div className="flex space-x-3">
                    <Link
                        to="/sales/customers"
                        className="py-2 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition shadow-sm"
                    >
                        Cancel
                    </Link>
                    <button className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Save Customer
                    </button>
                </div>
            </div>

            {/* Main Form Container */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 sm:p-8 space-y-6">
                    
                    {/* Customer Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <label className="sm:col-span-3 text-sm font-medium text-gray-700">Customer Type</label>
                        <div className="sm:col-span-9 flex items-center space-x-6">
                            <label className="flex items-center cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="customerType" 
                                    value="business"
                                    checked={formData.customerType === 'business'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-900">Business</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="customerType" 
                                    value="individual"
                                    checked={formData.customerType === 'individual'}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-900">Individual</span>
                            </label>
                        </div>
                    </div>

                    {/* Primary Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                        <label className="sm:col-span-3 text-sm font-medium text-gray-700 pt-2">
                            Primary Contact <span className="text-red-500">*</span>
                        </label>
                        <div className="sm:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <select 
                                name="salutation"
                                value={formData.salutation}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            >
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Ms.</option>
                                <option>Dr.</option>
                            </select>
                            <input 
                                type="text" 
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            />
                            <input 
                                type="text" 
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            />
                        </div>
                    </div>

                    {/* Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <label className="sm:col-span-3 text-sm font-medium text-gray-700">Company Name</label>
                        <div className="sm:col-span-9">
                            <input 
                                type="text" 
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            />
                        </div>
                    </div>

                    {/* Display Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <label className="sm:col-span-3 text-sm font-medium text-red-500">Display Name *</label>
                        <div className="sm:col-span-9">
                            <input 
                                type="text" 
                                name="displayName"
                                placeholder="Select or type to add"
                                value={formData.displayName}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <label className="sm:col-span-3 text-sm font-medium text-gray-700">Email Address</label>
                        <div className="sm:col-span-9">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <label className="sm:col-span-3 text-sm font-medium text-gray-700">Phone</label>
                        <div className="sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input 
                                type="text" 
                                name="workPhone"
                                placeholder="Work Phone"
                                value={formData.workPhone}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            />
                            <input 
                                type="text" 
                                name="mobilePhone"
                                placeholder="Mobile"
                                value={formData.mobilePhone}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            />
                        </div>
                    </div>

                    {/* Customer Language */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                        <label className="sm:col-span-3 text-sm font-medium text-gray-700">Customer Language</label>
                        <div className="sm:col-span-9">
                            <select 
                                name="language"
                                value={formData.language}
                                onChange={handleInputChange}
                                className="block w-full sm:w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                            >
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="border-b border-gray-200 mt-4 px-6 sm:px-8">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                        {['Other Details', 'Address', 'Contact Persons', 'Custom Fields', 'Reporting Tags', 'Remarks'].map((tab) => {
                            const tabKey = tab.toLowerCase().replace(' ', '');
                            const isActive = activeTab === (tabKey === 'otherdetails' ? 'other' : tabKey);
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tabKey === 'otherdetails' ? 'other' : tabKey)}
                                    className={`
                                        whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-150
                                        ${isActive 
                                            ? 'border-blue-500 text-blue-600' 
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                                    `}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="p-6 sm:p-8 min-h-[400px]">
                    {activeTab === 'other' && (
                        <div className="space-y-6 max-w-3xl">
                            {/* PAN */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <label className="sm:col-span-4 text-sm font-medium text-gray-700">PAN</label>
                                <div className="sm:col-span-8">
                                    <input 
                                        type="text" 
                                        name="pan"
                                        value={formData.pan}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                                    />
                                </div>
                            </div>

                            {/* Currency */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <label className="sm:col-span-4 text-sm font-medium text-gray-700">Currency</label>
                                <div className="sm:col-span-8">
                                    <select 
                                        name="currency"
                                        value={formData.currency}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                                    >
                                        <option value="INR">INR - Indian Rupee</option>
                                        <option value="USD">USD - US Dollar</option>
                                        <option value="EUR">EUR - Euro</option>
                                    </select>
                                </div>
                            </div>

                            {/* Accounts Receivable */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <label className="sm:col-span-4 text-sm font-medium text-gray-700">Accounts Receivable</label>
                                <div className="sm:col-span-8">
                                    <select 
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 text-gray-500"
                                    >
                                        <option>Select an account</option>
                                    </select>
                                </div>
                            </div>

                            {/* Opening Balance */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <label className="sm:col-span-4 text-sm font-medium text-gray-700">Opening Balance</label>
                                <div className="sm:col-span-8 flex">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        {formData.currency}
                                    </span>
                                    <input 
                                        type="number" 
                                        name="openingBalance"
                                        value={formData.openingBalance}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-none rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                                    />
                                </div>
                            </div>

                            {/* Payment Terms */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <label className="sm:col-span-4 text-sm font-medium text-gray-700">Payment Terms</label>
                                <div className="sm:col-span-8">
                                    <select 
                                        name="paymentTerms"
                                        value={formData.paymentTerms}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"
                                    >
                                        <option>Due on Receipt</option>
                                        <option>Net 15</option>
                                        <option>Net 30</option>
                                        <option>Net 60</option>
                                    </select>
                                </div>
                            </div>

                            {/* Enable Portal */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                <label className="sm:col-span-4 text-sm font-medium text-gray-700">Enable Portal?</label>
                                <div className="sm:col-span-8">
                                    <label className="flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            name="enablePortal"
                                            checked={formData.enablePortal}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-sm text-gray-900">Allow portal access for this customer</span>
                                    </label>
                                </div>
                            </div>

                            {/* Documents */}
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start pt-4">
                                <label className="sm:col-span-4 text-sm font-medium text-gray-700">Documents</label>
                                <div className="sm:col-span-8">
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition cursor-pointer">
                                        <ArrowUpTrayIcon className="w-8 h-8 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-600 font-medium">Upload File</p>
                                        <p className="text-xs text-gray-400 mt-1">Maximum 10 files, 10MB each</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab !== 'other' && (
                        <div className="flex items-center justify-center h-40 text-gray-400">
                            <p>Content for {activeTab} tab coming soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewCustomerPage;