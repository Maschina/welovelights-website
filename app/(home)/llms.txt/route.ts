import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# We Love Lights

> The easiest yet most powerful macOS app for controlling Philips Hue lights and Zigbee devices.

We Love Lights is a premium native macOS application that provides comprehensive control over Philips Hue and Zigbee smart lighting ecosystems. It offers two distinct user interfaces: a menu bar integration for quick daily access and a Studio window for advanced management. Built with Swift and SwiftUI, it is optimized for Apple Silicon and supports macOS 12.0 (Monterey) or later. Available on the Mac App Store for a one-time purchase of $6.99.

## Key Features

### Dual Interface System
- Menu Bar App: Quick access from the macOS menu bar for instant light control, brightness adjustments, and scene activation
- Studio Window: Full-featured window application with advanced controls for device management, automation, and configuration

### Device & Bridge Management
- Multi-Bridge Support: Simultaneous control of multiple Philips Hue bridges and Phoscon deCONZ bridges (e.g., ConBee)
- Remote Access: Control bridges when away from home via Philips Hue cloud integration
- Automatic and manual device discovery

### Smart Lighting Control
- Groups & Zones: Room and zone-based control
- Individual Device Control: Granular light and device management
- Color Management: Temperature, hue/saturation, RGB, and CIE 1931 color space pickers
- Brightness Control: Dimming with visual feedback
- Scene Management: Create, overwrite, and recall lighting scenes

### Advanced Device Types
- Lights: Full color and brightness control
- Smart Plugs: On/off control for connected devices
- Motion Sensors: Rules and automation configuration
- Switches: Customizable button actions and cycling patterns
- Status Sensors: Environmental monitoring and display

### Automation & Rules Engine
- Motion Sensor Rules: Time-based and generic patterns with a configuration wizard
- Switch Rules: Scene-cycle patterns, generic patterns, and auto-configuration for supported models
- Visual rule editor for building powerful automations without coding

### Integration & Automation
- Global Hotkeys: System-wide keyboard shortcuts to control lights from anywhere in macOS
- Apple Shortcuts Integration: Control lights as part of larger automation workflows, trigger from Siri
- Launch at Login: Automatic startup capability

### User Experience
- Search & Filter across all device types
- Drag & Drop reordering of devices and groups
- Favorites system for quick access
- Multi-selection for batch operations
- Copy/Paste color and brightness values
- Dark Mode support, full keyboard navigation, Retina display support

## Technical Details
- Built natively with Swift and SwiftUI
- Universal Binary: Intel and Apple Silicon support
- MVVM architecture pattern
- Requires WiFi or Ethernet for bridge communication

## User Personas
- Casual Home Users: Simple light control and scene activation via the menu bar
- Smart Home Enthusiasts: Advanced automation, custom scenes, and multi-bridge setups via Studio
- Professional Integrators: Bulk device management, complex automation, and Shortcuts integration

## Links
- Homepage: https://welovelights.app
- Documentation: https://welovelights.app/docs
- Changelog: https://welovelights.app/changelog
- Mac App Store: https://apps.apple.com/app/apple-store/id1479422551
- Privacy Policy: https://welovelights.app/privacy
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
