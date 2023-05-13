import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./Histogram.css"

const Histogram = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.toLowerCase().match(/\b\w+\b/g);

    const wordCount = {};
    words.forEach((word) => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    const top20Words = sortedWords.slice(0, 20).map(([word, count]) => ({
      word,
      count,
    }));

    setHistogramData(top20Words);
    setLoading(false);
  };

  const exportToCSV = () => {
    const csvContent = `data:text/csv;charset=utf-8,${histogramData
      .map((row) => `${row.word},${row.count}`)
      .join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div >
      <button onClick={fetchData} disabled={loading} className='btn'>
        Submit
      </button>
      {loading && <p className='load'>Loading...</p>}
      {histogramData.length > 0 && (
        <div >
          
          <div className='barChart'>
          <h2>Histogram</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={histogramData}>
              <XAxis dataKey="word" />
              <YAxis dataKey="count" />
              <Tooltip />
              <Bar dataKey="count" fill="#D14D72" />
            </BarChart>
          </ResponsiveContainer>
          </div>
          <button onClick={exportToCSV} className='btn'>Export</button>
        </div>
        
      )}
      
    </div>
  );
};

export default Histogram;
