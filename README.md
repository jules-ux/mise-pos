# mise.pos Expo Go app

The active app is now a React Native/Expo Go implementation with two deliberately separate interfaces in one testable project:

- **iPhone · Table**: portrait handheld/table-side ordering view based on the supplied phone reference.
- **iPad · Main Hub**: landscape main POS view with order column, category column, product grid, course selector, and send/pay actions.

The app automatically selects the interface from the device width, and the top switch lets you preview either interface while testing.

## Run with Expo Go

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go on an iPhone or iPad. For a simulator:

```bash
npm run ios
```

The previous Vite browser demo is no longer the active entry point. The old source files remain in the repository history, but `App.tsx` and the Expo configuration are now used by the app.

This commit focuses on the interface and device separation. Backend sync, authentication, payment terminals, fiscal certification, and persistent order storage still need to be connected.
