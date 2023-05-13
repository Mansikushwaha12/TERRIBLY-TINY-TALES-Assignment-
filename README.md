### Functional Component:
    Histogram: The main functional component that renders the histogram and handles data fetching and exporting.
### fetchData Function:
    fetchData: An asynchronous function that fetches data from the URL .
### exportToCSV Function:
    exportToCSV:  exportToCSV function that generates a CSV file from the histogramData and converts the data to a CSV string,
    creates a download link, and triggers the file download..
 ### State:
    histogramData: histogramData Stores the data for the histogram .
    loading : Indicates whether the data is being loaded or not.
 #### Buttons:
      THERE is a submit <button> element with an onClick event handler that triggers the fetchData function. 
      It is disabled when the loading state is true. And there is one more button...which name is export button
      The export button triggers the exportToCSV function when clicked.
     
### Libraries:-
    useState: useState is a React hook used to manage state within functional components.
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer: These Components from the recharts library, which provides a responsive chart components for         React.
    
    
 ## Netlify Link:-
    https://capable-kitsune-ed2b04.netlify.app
