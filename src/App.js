import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, setCurrentPage } from './action/index';
import './App.css';


const App = () => {

  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(10);

  const dispatch = useDispatch();
  const { data, loading, error, currentPage, itemsPerPage } = useSelector(state => state.data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching the data', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="title">Responsive Api data</h1>
      <div className="item-list">
        {currentItems.map(item => (
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.username}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
          </div>
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default App;
