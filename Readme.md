# Find Homes nearby

The project is created using expo. I have added most of the task functionalities.

## Usage

-   navigate to directory, and run the following command as per the OS

```
npm run android
npm run ios
```

To run on physical device, you will get a qr code after running the above commands that you can scan to run the app on a device

## Functionalities Covered

-   Homes List with basic information
-   Home Details Page with unlock button
-   Mocked HomeList Api with simple promise
-   Mocked unlock Api with simple implementation
-   Implemented Notifications with expo-notifications
-   Added dummy loader

## Few Points to note

-   Types support hasn't been added everywhere but mostly covered.
-   I have fetched the current location but used a dummy data to show or hide the unlock button as we have mocked the data as well as current location is also not predefined.
-   I have added the comments to perform the above operation in the code itself.
-   Notifications permission logic has been added to HomeDetails page for now, for a production app, it would have been on the mounting of the app.
-   api has also been kept simple, for a production, We might be using an api layer that would have interceptors, default handlers, we might use react query.
-   avoided any complex state management as it wasn't required here.
