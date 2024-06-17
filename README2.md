# How to setup for testing using parcel.

    1. Install React Testing library
        - npm i -D @testing-library/react
    2. Installed jest
        - npm i -D jest
    3. Install babel dependencies
        - npm install --save-dev babel-jest @babel/core @babel/preset-env
    4. Configure Babel
        - create babel.config.js and paste code from jest website.
    5. Configure Parcel config file to disable default babel transpilation.
    6. npx jest --init
    7. Install jest library
        - npm install --save-dev jest-environment -jsdom
    
    
