---
title: 'Hasen: Real-Time Multiplayer Card Game'
description: Full-stack multiplayer card game with real-time WebSocket event architecture, lobby system, turn management, and scoring using Domain-Driven Design.
publishDate: 'Jan 15 2025'
isFeatured: true
image:
  # src: '/hasen.png'
  alt: Hasen - Real-Time Multiplayer Card Game
video: '80lyAojG9Vw'
seo:
  image:
    src: '../../assets/images/hasen.png'
    alt: Hasen - Real-Time Multiplayer Card Game
---

<!-- ![Hasen preview](../../assets/images/hasen.png) -->

**Project Overview:**
Hasen is a full-stack multiplayer card game featuring real-time WebSocket event architecture. The project applies Domain-Driven Design principles with a shared domain layer consumed by both the Vue 3 frontend and Node.js backend, ensuring consistency in game rules and state management.

## Objectives

1. Build a real-time multiplayer card game with WebSocket communication
2. Implement Domain-Driven Design with shared domain layer
3. Create a scalable architecture supporting multiple game modes
4. Provide smooth user experience with real-time updates

## Features

1. **Real-Time WebSocket Communication:**

- Using Socket.IO for real-time event handling
- Lobby system for matchmaking and room management
- Turn management with synchronized game state across clients
- Real-time score updates and validation

2. **Domain-Driven Design Architecture:**

- Shared domain layer (cards, rules, events) consumed by both frontend and backend
- Type-safe game logic across the entire stack
- Consistent state management and business rules

3. **User Experience:**

- Responsive UI with TailwindCSS
- Smooth animations and transitions
- Mobile-first responsive layout

<img src="/deck.jpg" alt="Hasen preview" width="600" />

## Technology Stack

<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">Vue 3</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">Composition API</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">Pinia</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">Node.js</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">Express</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">MongoDB</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">Socket.IO</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">WebSockets</span>
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200 border border-gray-300 dark:border-gray-500 mr-1 mb-2">TailwindCSS</span>

## Live Demo

[Play Hasen](https://hasen-game.onrender.com)

## Source Code

[GitHub Repository](https://github.com/christiankarldelhey/Hasen)

## Development Journey

This project serves as an exploration into real-time architecture and Domain-Driven Design principles. The shared domain layer ensures that game rules are consistent across both client and server, reducing bugs and improving maintainability.

## Future Enhancements

- Additional game modes and card types
- Tournament system
- Enhanced analytics and player statistics
- Mobile app version
