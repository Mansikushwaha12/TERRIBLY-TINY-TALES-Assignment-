# TERRIBLY-TINY-TALES-Assignment-


## Component
 ### Histogram: 
      The main functional component that renders the histogram and handles data fetching and exporting.
 
### fetchData Function: 
    A function that fetches data from the given URL. 
### exportToCSV Function:
    exportToCSV: A function that generates a CSV file from the histogramData and convert data to a string,creates a download link, 
    and triggers the file download.
 ### State:
    there is two state-  
    histogramData: Stores the data for the histogram.And next one is 
    loading: Indicates whether the data is being loaded or not.
    
## Libraries:-
#### useState
    useState is React hook used to manage state within functional components.
#### BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer: 
    These Components from the recharts library, which provides a responsive  chart components for React.
### Buttons:-
    There is a submit <button> element with an onClick event handler that triggers the fetchData function.
    It is disabled when the loading state is true.
    There is one more  export button triggers the exportToCSV function when clicked.
  
  ## Netlify Link:
      https://capable-kitsune-ed2b04.netlify.app
      
    
    
