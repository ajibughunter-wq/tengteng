"use client"

import { useState, useEffect } from "react"

export default function Page() {
  const [domain, setDomain] = useState("")
  const [bug, setBug] = useState("")
  const [engine, setEngine] = useState("google")
  const [copied, setCopied] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDark)
  }, [])

  const bugs: Record<string, string[]> = {
    "Injection Attacks": [
      "SQL Injection (SQLi)",
      "Blind SQL Injection",
      "Time-Based SQL Injection",
      "Boolean-Based SQL Injection",
      "Error-Based SQL Injection",
      "NoSQL Injection",
      "LDAP Injection",
      "XPath Injection",
      "XML External Entity (XXE) Injection",
      "Server-Side Template Injection (SSTI)",
      "Command Injection",
      "Remote Code Execution (RCE)",
      "Object Injection",
      "Expression Language Injection",
      "CRLF Injection",
      "Host Header Injection",
      "SMTP Header Injection",
      "IMAP/POP3 Command Injection",
    ],
    "Cross-Site Scripting (XSS)": [
      "Stored XSS",
      "Reflected XSS",
      "DOM-Based XSS",
      "Self-XSS",
      "Blind XSS",
      "Polyglot XSS",
      "AngularJS Sandbox Escape",
    ],
    "Cross-Site Request Forgery (CSRF)": [
      "Classic CSRF",
      "Login CSRF",
      "Logout CSRF",
      "OAuth CSRF",
      "Referer-Based CSRF",
      "Same-Site Bypass CSRF",
    ],
    "Authentication & Authorization Issues": [
      "Broken Authentication",
      "Session Fixation",
      "Insecure Session Management",
      "Brute Force Attack",
      "Credential Stuffing",
      "API Key Exposure",
      "Hardcoded Credentials",
      "Weak Password Policy",
      "JWT Attack",
      "OAuth Misconfiguration",
      "IDOR",
      "Privilege Escalation",
      "Session Hijacking",
    ],
    "Server-Side Vulnerabilities": [
      "SSRF",
      "Blind SSRF",
      "HTTP Request Smuggling",
      "Insecure Deserialization",
      "Web Cache Poisoning",
      "Subdomain Takeover",
      "DNS Rebinding",
    ],
    "Client-Side Vulnerabilities": [
      "Clickjacking",
      "Tabnabbing",
      "Open Redirect",
      "Cookie Poisoning",
      "DOM Clobbering",
      "Prototype Pollution",
      "Referrer Leakage",
      "CSS Injection",
      "CORS Misconfiguration",
      "Weak Same-Origin Policy (SOP)",
    ],
    "Network & Infrastructure Attacks": [
      "Man-in-the-Middle (MITM)",
      "ARP Spoofing",
      "DNS Spoofing",
      "DHCP Spoofing",
      "SSL/TLS Downgrade Attack",
      "BEAST Attack",
      "POODLE Attack",
      "BREACH Attack",
      "CRIME Attack",
      "Heartbleed",
      "ROBOT Attack",
      "BlueKeep",
      "EternalBlue",
      "SMB Relay Attack",
      "WPA2 KRACK Attack",
    ],
    "Cryptographic Issues": [
      "Insecure Randomness",
      "Weak Encryption Algorithm",
      "Weak Hashing Algorithm (MD5, SHA1)",
      "Improper Key Management",
      "Predictable Token Generation",
      "Padding Oracle Attack",
      "ECB Mode Usage",
      "CBC Mode Padding Attack",
      "Side-Channel Attack",
      "Timing Attack",
    ],
    "Web Application Misconfigurations": [
      "Security Misconfiguration",
      "Default Credentials Still Active",
      "Exposed Debug Information",
      "Sensitive Data Exposure",
      "Publicly Accessible S3 Buckets",
      "Unrestricted Admin Panel Access",
      "Hardcoded API Keys in Frontend",
      "Hardcoded Database Credentials",
      "Misconfigured AWS IAM Policies",
      "Open MongoDB Database",
      "Exposed .git Directory",
      "Exposed .env File",
    ],
    "Mobile Security Issues": [
      "Insecure Data Storage (iOS/Android)",
      "Insecure Intent Handling",
      "Weak Biometric Authentication Bypass",
      "Debug Mode Enabled",
      "Jailbreak/Root Detection Bypass",
      "Insecure Clipboard Usage",
      "Reverse Engineering Attack",
      "Hardcoded API Keys in Mobile App",
      "Improper Certificate Pinning",
      "Exposed Android Content Providers",
    ],
    "API & Cloud Security": [
      "Improper Rate Limiting",
      "API Key Leakage",
      "Broken Function Level Authorization (BFLA)",
      "Excessive Data Exposure",
      "Mass Assignment",
      "API Injection (GraphQL, SOAP)",
      "Improper CORS Config in API",
      "Weak JWT Implementation",
      "Serverless Function Exploits",
      "SSRF in Cloud Services",
      "Google Dorking for Sensitive Files",
      "AWS S3 Bucket Misconfiguration",
      "Misconfigured Firebase Database",
      "Open Elasticsearch Database",
      "API Endpoint Enumeration",
    ],
    "Hardware & IoT Vulnerabilities": [
      "Hardcoded Credentials in Firmware",
      "Buffer Overflow in Embedded Devices",
      "Insecure Device Pairing",
      "Weak Bluetooth Encryption",
      "Unpatched Firmware Vulnerabilities",
      "Lack of Secure Boot Implementation",
      "USB Exploits",
      "Side-Channel Attacks on IoT Devices",
    ],
    "Social Engineering & Human Factor Exploits": [
      "Phishing Attack",
      "Spear Phishing",
      "Credential Harvesting",
      "Business Email Compromise (BEC)",
      "Social Engineering via Customer Support",
      "Voice Phishing (Vishing)",
      "SMS Phishing (Smishing)",
      "Shoulder Surfing Attack",
      "Tailgating Attack",
      "Fake Tech Support Scams",
    ],
    "Denial of Service (DoS) Attacks": [
      "Application Layer DoS",
      "Slowloris Attack",
      "SYN Flood Attack",
      "DNS Amplification Attack",
      "HTTP Flood Attack",
      "Resource Exhaustion via File Upload",
      "Infinite Loop Execution in API",
      "Algorithmic Complexity Attack",
    ],
    "Miscellaneous Attacks": [
      "Account Takeover (ATO)",
      "CAPTCHA Bypass",
      "Brute Force on 2FA",
      "Timing Attack on Login",
      "Improper Logout Mechanism",
      "Insecure OAuth Redirects",
      "Information Leakage in HTTP Headers",
      "Password Reset Poisoning",
      "Login Enumeration",
      "Secret Leakage via Error Messages",
      "SSRF to Internal Services",
      "Reverse Tabnabbing",
      "IDOR in API Endpoints",
      "Forced Browsing",
      "Improper Referrer Validation",
      "WebSockets Security Issues",
      "WebRTC Privacy Leak",
      "Unvalidated JSON Parsing",
      "Cache Injection",
      "ClickJacking on OAuth Flows",
      "Exposure of API Schema",
      "CORS Exploitation via DNS Rebinding",
      "Exploiting Weak Password Reset Mechanisms",
      "Fake Account Creation for Abuse",
      "Payment Manipulation",
      "Virtual Machine Escape",
      "Privilege Escalation via Kernel Exploit",
      "Weak SSH Key Authentication",
      "Credential Harvesting via Open Wi-Fi",
      "Reverse Proxy Misconfiguration",
      "OAuth Token Leakage",
      "Exploiting Misconfigured CDN Caching",
    ],
    "Advanced Vulnerabilities": [
      "Cross-Site WebSocket Hijacking",
      "Deserialization Vulnerabilities in APIs",
      "Directory Traversal",
      "XML Injection",
      "Resource Exhaustion",
      "Malicious Redirects",
      "Unauthorized File Access in Cloud Storage",
      "Insecure API Authentication Mechanisms",
      "Cache Poisoning",
      "Improper Resource Management",
      "Cryptojacking",
      "Insecure Deserialization in Cloud Functions",
      "SSRF with Internal Network Access",
      "SSI Injection",
      "Over-Privileged Cloud IAM Roles",
      "Cache Side-Channel Attacks",
      "Command Injection in Cloud Services",
      "Code Injection via CI/CD Pipeline",
      "Insecure Dependency Management",
      "Memory Corruption Attacks",
      "Weak Cryptographic Key Storage",
      "CORS Misconfiguration Leading to Unauthorized Data Access",
      "Improperly Configured WebSockets for Authenticated Communication",
      "Subdomain Takeover via Unused Cloud Subdomains",
      "Application Logic Flaws",
      "Broken Encryption via Weak TLS/SSL Configurations",
      "Misconfigured API Gateway",
      "Local File Inclusion (LFI) via Upload Mechanisms",
      "Lack of Multi-Factor Authentication (MFA)",
      "Malicious Software in Shared Hosting",
      "Race Conditions in Cloud Functions",
    ],
  }

  const handleSearch = () => {
    if (!domain.trim() || !bug) {
      alert("Masukkan domain dan pilih jenis bug!")
      return
    }
    const searchUrl = `https://www.google.com/search?q=site:${encodeURIComponent(domain.trim())} ${encodeURIComponent(bug)}`
    window.open(searchUrl, "_blank")
  }

  const handleCopy = () => {
    const query = `site:${domain.trim()} ${bug}`
    navigator.clipboard.writeText(query)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      <header
        className={`border-b ${darkMode ? "border-gray-800 bg-gray-800" : "border-gray-200 bg-white"} p-4 safe-area-inset-top`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h1 className="text-base sm:text-lg font-bold truncate">SecuDork</h1>
          </div>

          <div className="flex items-center gap-2">
            {/* Download APK Button */}
            <button
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/api/download-apk"
                link.download = "secdork-app.apk"
                link.click()
              }}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 transition-colors flex items-center justify-center"
              aria-label="Download APK"
              title="Download APK"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors flex items-center justify-center ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v6m0 6v6M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24M2 12h6m6 0h6M4.22 19.78l4.24-4.24m3.08-3.08l4.24-4.24" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 safe-area-inset-bottom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Domain Input */}
            <div>
              <label htmlFor="domain" className="text-sm font-medium mb-2 block">
                Domain
              </label>
              <input
                id="domain"
                type="text"
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value.toLowerCase())}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className={`w-full px-4 py-3 text-base border rounded-lg outline-none transition-colors focus:ring-2 ring-blue-500 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
              />
            </div>

            {/* Bug Type Select */}
            <div>
              <label htmlFor="bug-type" className="text-sm font-medium mb-2 block">
                Bug Type
              </label>
              <select
                id="bug-type"
                value={bug}
                onChange={(e) => setBug(e.target.value)}
                className={`w-full px-4 py-3 text-base border rounded-lg outline-none transition-colors focus:ring-2 ring-blue-500 ${
                  darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="">All Bugs</option>
                {Object.keys(bugs).map((category) => (
                  <optgroup key={category} label={category}>
                    {bugs[category].map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Search Engine Select */}
            <div>
              <label htmlFor="engine" className="text-sm font-medium mb-2 block">
                Search Engine
              </label>
              <select
                id="engine"
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
                className={`w-full px-4 py-3 text-base border rounded-lg outline-none transition-colors focus:ring-2 ring-blue-500 ${
                  darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="google">Google</option>
                <option value="bing">Bing</option>
                <option value="duckduckgo">DuckDuckGo</option>
                <option value="yandex">Yandex</option>
                <option value="brave">Brave Search</option>
                <option value="yahoo">Yahoo</option>
                <option value="startpage">Startpage</option>
                <option value="searx">SearX</option>
                <option value="qwant">Qwant</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="w-full mb-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
          >
            Search Vulnerabilities
          </button>

          {/* Result Display */}
          {domain && (
            <div
              className={`p-6 rounded-lg border ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold">Search Query</h2>
                  <p className="text-sm text-gray-500 mt-1">{bug ? `${domain} ${bug}` : domain}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    copied
                      ? "bg-green-600 text-white"
                      : darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  }`}
                >
                  {copied ? "Copied!" : "Copy Query"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`border-t ${darkMode ? "border-gray-800 bg-gray-800" : "border-gray-200 bg-gray-100"} p-4 safe-area-inset-bottom`}
      >
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>SecuDork - Search Vulnerabilities Find security issues across search engines</p>
          <p className="mt-2">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/fazriansyahmuh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Muhammad Fazriansyah
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
