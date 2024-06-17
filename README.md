# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File watching Algorithm
- Image Optimization
- Minification
- Budling
- Compressng
- Consistent Hashing

# Food App

/\*
Header

- logo
- Nav Items
  Body
- Search
- RestaurantContainer - RestaurantCard - Img - Name of Res, Star Rating, Cuisines, delivery time
  Footer
- Copyright
- Links
- Address
- Contact
  \*/

Components are js function that return JSX(HTML like syntaxed code that is later converted to Js by Parcel - Babble ).

\* Hooks are also special Js functions that is given by react to us.

- States are also hooks which in the end are functions.

/\* The problem is here that when we click filter button the data is changed inside console
but the UI is not affected by it.
We have restaurantData which has 5 restaurant, and map() render this 5 cards on screen.
but by filter button now on 2 restaurant with 4.7 rating stay in restaurantData.
after this map() should render these 2 restaurant but this don't happen.

        BECAUSE OF THE HOOKS AND STATES IN REACT.

\*/

# Routing Steps

- npm install react-router-dom
- import createBrowserRouter
- const appRouter = createBrowserRouter([{path: "", element: "< />"},{path: "", element: ""}])
- root.render(< RouterProvider router = {appRouter}/>)

/\* useEffect to fetch API, and because of [], we do it once.

1. useEffect( () => {
   fetchMenu();
   } ); API fetched every time component re render

2. useEffect( () => {
   fetchMenu();
   }, [] ); API fetch only once and don't matter how many time comp re render

3. useEffect( () => {
   fetchMenu();
   }, [something] ); API fetch everytime, something changes.
   \*/
