import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  Building2,
  CalendarDays,
  MapPin,
  Camera,
  Lock,
  Save,
  KeyRound,
  Activity,
} from "lucide-react";

function AdminProfile() {
  const [profile, setProfile] = useState({
    firstName: "Sakshi",
    lastName: "Dombale",
    email: "admin@burla.edu.in",
    phone: "+91 9876543210",
    designation: "System Administrator",
    department: "Administration",
    employeeId: "ADM-001",
    joiningDate: "2024-07-01",
    location: "Burla, Maharashtra",
    bio: "Administrator responsible for managing college ERP operations, students, faculty, admissions and academic activities.",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    alert("Profile updated successfully!");
  };

  const updatePassword = () => {
    if (!password.current || !password.newPassword) {
      alert("Please fill all password fields.");
      return;
    }

    if (password.newPassword !== password.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    alert("Password updated successfully!");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  return (
    <div className="p-6 space-y-6">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Profile
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your personal information, account details and security.
        </p>
      </div>

      {/* PROFILE HEADER */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">

        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600" />

        <div className="px-6 pb-6">

          <div className="flex flex-col md:flex-row md:items-end
                          justify-between gap-4">

            <div className="flex items-end gap-4 -mt-14">

              {/* Profile Image */}
              <div className="relative">

                <div className="w-28 h-28 rounded-full bg-white
                                border-4 border-white shadow-md
                                flex items-center justify-center
                                text-blue-600 text-4xl font-bold">

                  SD

                </div>

                <button
                  className="absolute bottom-1 right-1
                             p-2 bg-blue-600 text-white rounded-full
                             hover:bg-blue-700"
                  title="Change profile photo"
                >
                  <Camera size={16} />
                </button>

              </div>

              <div className="pb-2">

                <h2 className="text-xl font-bold text-gray-800">
                  {profile.firstName} {profile.lastName}
                </h2>

                <p className="text-sm text-gray-500">
                  {profile.designation}
                </p>

              </div>

            </div>

            {/* Account Status */}
            <div className="flex items-center gap-2 px-4 py-2
                            bg-green-50 text-green-700
                            rounded-lg text-sm font-medium">

              <span className="w-2 h-2 bg-green-500 rounded-full" />

              Active Account

            </div>

          </div>

        </div>
      </div>

      {/* PROFILE INFORMATION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* PERSONAL INFORMATION */}
        <div className="lg:col-span-2 bg-white border rounded-xl shadow-sm">

          <div className="p-5 border-b">

            <div className="flex items-center gap-2">

              <User size={20} className="text-blue-600" />

              <div>
                <h2 className="font-semibold text-gray-800">
                  Personal Information
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Update your personal and contact information.
                </p>
              </div>

            </div>

          </div>

          <div className="p-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <Input
                label="First Name"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
              />

              <Input
                label="Last Name"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleProfileChange}
              />

              <Input
                label="Phone Number"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
              />

              <Input
                label="Designation"
                name="designation"
                value={profile.designation}
                onChange={handleProfileChange}
              />

              <Input
                label="Department"
                name="department"
                value={profile.department}
                onChange={handleProfileChange}
              />

              <Input
                label="Employee ID"
                name="employeeId"
                value={profile.employeeId}
                onChange={handleProfileChange}
              />

              <Input
                label="Joining Date"
                name="joiningDate"
                type="date"
                value={profile.joiningDate}
                onChange={handleProfileChange}
              />

            </div>

            {/* Address */}
            <div className="mt-5">

              <label className="block text-sm font-medium
                                text-gray-700 mb-2">
                Location
              </label>

              <div className="relative">

                <MapPin
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />

                <input
                  name="location"
                  value={profile.location}
                  onChange={handleProfileChange}
                  className="w-full border rounded-lg
                             pl-10 pr-3 py-2.5
                             focus:ring-2 focus:ring-blue-500
                             outline-none"
                />

              </div>

            </div>

            {/* Bio */}
            <div className="mt-5">

              <label className="block text-sm font-medium
                                text-gray-700 mb-2">
                About
              </label>

              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleProfileChange}
                rows={4}
                className="w-full border rounded-lg px-3 py-2.5
                           focus:ring-2 focus:ring-blue-500
                           outline-none resize-none"
              />

            </div>

            {/* Save */}
            <div className="flex justify-end mt-5">

              <button
                onClick={saveProfile}
                className="flex items-center gap-2
                           bg-blue-600 text-white
                           px-5 py-2.5 rounded-lg
                           hover:bg-blue-700"
              >
                <Save size={17} />
                Save Changes
              </button>

            </div>

          </div>
        </div>

        {/* ACCOUNT INFORMATION */}
        <div className="space-y-6">

          <div className="bg-white border rounded-xl shadow-sm p-5">

            <div className="flex items-center gap-2 mb-5">

              <ShieldCheck
                size={20}
                className="text-blue-600"
              />

              <h2 className="font-semibold text-gray-800">
                Account Information
              </h2>

            </div>

            <div className="space-y-4">

              <InfoItem
                icon={<ShieldCheck size={17} />}
                label="Role"
                value="Super Administrator"
              />

              <InfoItem
                icon={<Building2 size={17} />}
                label="Department"
                value="Administration"
              />

              <InfoItem
                icon={<User size={17} />}
                label="Employee ID"
                value={profile.employeeId}
              />

              <InfoItem
                icon={<CalendarDays size={17} />}
                label="Joining Date"
                value={profile.joiningDate}
              />

              <InfoItem
                icon={<Activity size={17} />}
                label="Account Status"
                value="Active"
                green
              />

            </div>

          </div>

          {/* CONTACT */}
          <div className="bg-white border rounded-xl shadow-sm p-5">

            <h2 className="font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>

            <div className="space-y-4">

              <InfoItem
                icon={<Mail size={17} />}
                label="Email"
                value={profile.email}
              />

              <InfoItem
                icon={<Phone size={17} />}
                label="Phone"
                value={profile.phone}
              />

              <InfoItem
                icon={<MapPin size={17} />}
                label="Location"
                value={profile.location}
              />

            </div>

          </div>

        </div>

      </div>

      {/* SECURITY */}
      <div className="bg-white border rounded-xl shadow-sm">

        <div className="p-5 border-b">

          <div className="flex items-center gap-2">

            <Lock size={20} className="text-blue-600" />

            <div>

              <h2 className="font-semibold text-gray-800">
                Account Security
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Change your password and manage account security.
              </p>

            </div>

          </div>

        </div>

        <div className="p-5">

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="flex items-center gap-2 text-blue-600
                       font-medium text-sm mb-5"
          >
            <KeyRound size={17} />

            {showPassword
              ? "Hide Password Settings"
              : "Change Password"}
          </button>

          {showPassword && (
            <div className="max-w-2xl">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <Input
                  label="Current Password"
                  name="current"
                  type="password"
                  value={password.current}
                  onChange={handlePasswordChange}
                />

                <div />

                <Input
                  label="New Password"
                  name="newPassword"
                  type="password"
                  value={password.newPassword}
                  onChange={handlePasswordChange}
                />

                <Input
                  label="Confirm New Password"
                  name="confirm"
                  type="password"
                  value={password.confirm}
                  onChange={handlePasswordChange}
                />

              </div>

              <button
                onClick={updatePassword}
                className="mt-5 flex items-center gap-2
                           bg-blue-600 text-white
                           px-5 py-2.5 rounded-lg
                           hover:bg-blue-700"
              >
                <Lock size={17} />
                Update Password
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

/* ============================= */
/* INPUT COMPONENT */
/* ============================= */

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>

      <label className="block text-sm font-medium
                        text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300
                   rounded-lg px-3 py-2.5
                   outline-none
                   focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500"
      />

    </div>
  );
}

/* ============================= */
/* INFO ITEM */
/* ============================= */

function InfoItem({
  icon,
  label,
  value,
  green = false,
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs text-gray-500">
          {label}
        </p>

        <p
          className={`text-sm font-medium truncate ${
            green ? "text-green-600" : "text-gray-800"
          }`}
        >
          {value}
        </p>

      </div>

    </div>
  );
}

export default AdminProfile;