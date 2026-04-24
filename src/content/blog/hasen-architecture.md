---
title: 'Hasen: Initial Setup and Architecture'
excerpt: Setting up the foundational architecture for Hasen multiplayer card game using Domain-Driven Design with a shared domain layer.
publishDate: 'Jan 15 2025'
tags:
  - Architecture
  - Socket.IO
  - Vue 3
seo:
  image:
    src: '../../assets/images/hasen.png'
    alt: Hasen architecture setup
---

![Hasen architecture](../../assets/images/hasen.png)

Setting up the foundational architecture for Hasen, a real-time multiplayer card game. This post covers the initial technical decisions and implementation approach.

## Architecture Overview

The game uses a Domain-Driven Design approach with a shared domain layer consumed by both the Vue 3 frontend and Node.js backend. This ensures consistency in game rules and state management across the entire stack.

### Key Components

- **WebSocket Communication:** Using Socket.IO for real-time event handling
- **Lobby System:** Matchmaking and room management
- **Turn Management:** Synchronized game state across clients
- **Scoring System:** Real-time score updates and validation

## Technical Stack

- **Frontend:** Vue 3 with Composition API, Pinia for state management
- **Backend:** Node.js with Express
- **Database:** MongoDB for persistent data
- **Real-time:** Socket.IO for WebSocket communication
- **Styling:** TailwindCSS for responsive UI

## Domain-Driven Design Implementation

The shared domain layer includes card definitions, game rules, and event schemas that are used by both frontend and backend, ensuring type safety and consistency.

### Benefits of DDD in This Context

1. **Consistency:** Game rules are identical across client and server
2. **Type Safety:** Shared TypeScript types prevent mismatches
3. **Maintainability:** Business logic is centralized and testable
4. **Scalability:** Easy to add new game features without breaking existing code

## Initial Challenges

Setting up the shared domain layer required careful consideration of:
- How to serialize domain events for WebSocket transmission
- State synchronization strategies
- Conflict resolution when multiple clients act simultaneously
- Performance optimization for real-time updates

## Next Steps

Future development will focus on:
- Additional game modes and card types
- Enhanced UI animations
- Tournament system
- Player statistics and analytics
