import { useState } from "react";
import {
  Settings as SettingsIcon,
  Building2,
  GraduationCap,
  FileText,
  Bell,
  ShieldCheck,
  Database,
  Save,
  RotateCcw,
} from "lucide-react";

function Settings() {
  const [activeSection, setActiveSection] = useState("general");

  const [settings, setSettings] = useState({
    collegeName: "Burla College of Engineering",
    collegeCode: "BCE",
    university: "DBATU",
    email: "admin@burla.edu.in",
    phone: "+91 9876543210",
    address: "Burla, Maharashtra, India",

    academicYear: "2026-27",
    semester: "Odd Semester",
    workingDays: "180",
    attendancePercentage: "75",

    admissionStatus: true,
    applicationStart: "2026-06-01",
    applicationEnd: "2026-09-30",
    documentVerification: true,

    emailNotifications: true,
    smsNotifications: false,
    admissionAlerts: true,

    twoFactor: false,
    sessionTimeout: "30",
    loginAlerts: true,

    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  const handleReset = () => {
    window.location.reload();
  };

  const sections = [
    {
      id: "general",
      name: "General Settings",
      icon: Building2,
    },
    {
      id: "academic",
      name: "Academic Settings",
      icon: GraduationCap,
    },
    {
      id: "admission",
      name: "Admission Settings",
      icon: FileText,
    },
    {
      id: "notifications",
      name: "Notifications",
      icon: Bell,
    },
    {
      id: "security",
      name: "Security",
      icon: ShieldCheck,
    },
    {
      id: "system",
      name: "System",
      icon: Database,
    },
  ];

  return (
    <div className="p-6 ">

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">

          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <SettingsIcon size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Settings
            </h1>

            <p className="text-sm text-gray-500">
              Manage college ERP configuration and system preferences.
            </p>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Settings Navigation */}
        <div className="bg-white border rounded-xl shadow-sm p-3 h-fit">

          <h2 className="text-sm font-semibold text-gray-500 px-3 py-2">
            SETTINGS
          </h2>

          <div className="space-y-1">

            {sections.map((section) => {
              const Icon = section.icon;
              const active = activeSection === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3
                    rounded-lg text-sm font-medium transition
                    ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <Icon size={18} />
                  {section.name}
                </button>
              );
            })}

          </div>

        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">

          {/* GENERAL */}
          {activeSection === "general" && (
            <SettingsCard
              title="General Settings"
              description="Basic information about the college."
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <Input
                  label="College Name"
                  name="collegeName"
                  value={settings.collegeName}
                  onChange={handleChange}
                />

                <Input
                  label="College Code"
                  name="collegeCode"
                  value={settings.collegeCode}
                  onChange={handleChange}
                />

                <Input
                  label="University"
                  name="university"
                  value={settings.university}
                  onChange={handleChange}
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={settings.email}
                  onChange={handleChange}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                />

                <Input
                  label="College Address"
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                />

              </div>

              <SaveButtons
                onSave={handleSave}
                onReset={handleReset}
              />

            </SettingsCard>
          )}

          {/* ACADEMIC */}
          {activeSection === "academic" && (
            <SettingsCard
              title="Academic Settings"
              description="Configure academic year and attendance rules."
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <Select
                  label="Current Academic Year"
                  name="academicYear"
                  value={settings.academicYear}
                  onChange={handleChange}
                  options={[
                    "2026-27",
                    "2025-26",
                    "2024-25",
                  ]}
                />

                <Select
                  label="Current Semester"
                  name="semester"
                  value={settings.semester}
                  onChange={handleChange}
                  options={[
                    "Odd Semester",
                    "Even Semester",
                  ]}
                />

                <Input
                  label="Working Days"
                  name="workingDays"
                  type="number"
                  value={settings.workingDays}
                  onChange={handleChange}
                />

                <Input
                  label="Minimum Attendance (%)"
                  name="attendancePercentage"
                  type="number"
                  value={settings.attendancePercentage}
                  onChange={handleChange}
                />

              </div>

              <SaveButtons
                onSave={handleSave}
                onReset={handleReset}
              />

            </SettingsCard>
          )}

          {/* ADMISSION */}
          {activeSection === "admission" && (
            <SettingsCard
              title="Admission Settings"
              description="Manage application and document verification settings."
            >

              <div className="space-y-5">

                <Toggle
                  label="Admission Applications"
                  description="Allow students to submit new applications."
                  name="admissionStatus"
                  checked={settings.admissionStatus}
                  onChange={handleChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <Input
                    label="Application Start Date"
                    name="applicationStart"
                    type="date"
                    value={settings.applicationStart}
                    onChange={handleChange}
                  />

                  <Input
                    label="Application End Date"
                    name="applicationEnd"
                    type="date"
                    value={settings.applicationEnd}
                    onChange={handleChange}
                  />

                </div>

                <Toggle
                  label="Document Verification"
                  description="Require document verification before approval."
                  name="documentVerification"
                  checked={settings.documentVerification}
                  onChange={handleChange}
                />

              </div>

              <SaveButtons
                onSave={handleSave}
                onReset={handleReset}
              />

            </SettingsCard>
          )}

          {/* NOTIFICATIONS */}
          {activeSection === "notifications" && (
            <SettingsCard
              title="Notification Settings"
              description="Configure system notifications."
            >

              <div className="space-y-4">

                <Toggle
                  label="Email Notifications"
                  description="Send important ERP notifications through email."
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                />

                <Toggle
                  label="SMS Notifications"
                  description="Send notifications through SMS."
                  name="smsNotifications"
                  checked={settings.smsNotifications}
                  onChange={handleChange}
                />

                <Toggle
                  label="Admission Alerts"
                  description="Notify administrators about new applications."
                  name="admissionAlerts"
                  checked={settings.admissionAlerts}
                  onChange={handleChange}
                />

              </div>

              <SaveButtons
                onSave={handleSave}
                onReset={handleReset}
              />

            </SettingsCard>
          )}

          {/* SECURITY */}
          {activeSection === "security" && (
            <SettingsCard
              title="Security Settings"
              description="Manage administrator account security."
            >

              <div className="space-y-5">

                <Toggle
                  label="Two-Factor Authentication"
                  description="Require an additional verification step during login."
                  name="twoFactor"
                  checked={settings.twoFactor}
                  onChange={handleChange}
                />

                <Select
                  label="Session Timeout"
                  name="sessionTimeout"
                  value={settings.sessionTimeout}
                  onChange={handleChange}
                  options={[
                    "15",
                    "30",
                    "60",
                    "120",
                  ]}
                  suffix=" minutes"
                />

                <Toggle
                  label="Login Alerts"
                  description="Notify administrators about new login activity."
                  name="loginAlerts"
                  checked={settings.loginAlerts}
                  onChange={handleChange}
                />

              </div>

              <SaveButtons
                onSave={handleSave}
                onReset={handleReset}
              />

            </SettingsCard>
          )}

          {/* SYSTEM */}
          {activeSection === "system" && (
            <SettingsCard
              title="System Settings"
              description="Manage system maintenance and backups."
            >

              <div className="space-y-5">

                <Toggle
                  label="Maintenance Mode"
                  description="Temporarily disable access for regular users."
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                />

                <div className="border rounded-xl p-4">

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="font-medium text-gray-800">
                        Database Backup
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Create a backup of important ERP data.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        alert("Backup process started!")
                      }
                      className="flex items-center gap-2 px-4 py-2
                                 bg-blue-600 text-white rounded-lg
                                 hover:bg-blue-700"
                    >
                      <Database size={17} />
                      Backup Now
                    </button>

                  </div>

                </div>

              </div>

              <SaveButtons
                onSave={handleSave}
                onReset={handleReset}
              />

            </SettingsCard>
          )}

        </div>

      </div>
    </div>
  );
}

/* ============================= */
/* SETTINGS CARD */
/* ============================= */

function SettingsCard({ title, description, children }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">

      <div className="p-6 border-b">

        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {description}
        </p>

      </div>

      <div className="p-6">
        {children}
      </div>

    </div>
  );
}

/* ============================= */
/* INPUT */
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
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5
                   outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500"
      />
    </div>
  );
}

/* ============================= */
/* SELECT */
/* ============================= */

function Select({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5
                   outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ============================= */
/* TOGGLE */
/* ============================= */

function Toggle({
  label,
  description,
  name,
  checked,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between border
                    rounded-xl p-4">

      <div className="pr-4">

        <h3 className="font-medium text-gray-800">
          {label}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {description}
        </p>

      </div>

      <label className="relative inline-flex items-center cursor-pointer">

        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />

        <div className="w-11 h-6 bg-gray-300 rounded-full
                        peer peer-checked:bg-blue-600
                        after:content-[''] after:absolute
                        after:top-[2px] after:left-[2px]
                        after:bg-white after:rounded-full
                        after:h-5 after:w-5 after:transition-all
                        peer-checked:after:translate-x-full">
        </div>

      </label>

    </div>
  );
}

/* ============================= */
/* SAVE BUTTONS */
/* ============================= */

function SaveButtons({ onSave, onReset }) {
  return (
    <div className="flex justify-end gap-3 mt-6 pt-5 border-t">

      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2.5
                   border rounded-lg hover:bg-gray-50"
      >
        <RotateCcw size={17} />
        Reset
      </button>

      <button
        onClick={onSave}
        className="flex items-center gap-2 px-5 py-2.5
                   bg-blue-600 text-white rounded-lg
                   hover:bg-blue-700"
      >
        <Save size={17} />
        Save Changes
      </button>

    </div>
  );
}

export default Settings;