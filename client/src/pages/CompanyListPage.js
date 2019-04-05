import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../actions';
import { Link } from '@reach/router';

const CourseListPage = ({ loading, companies, dispatch }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyTicker, setCompanyTicker] = useState('');
  const [companyExchange, setCompanyExchange] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCompany(companyName, companyTicker, companyExchange));
  };

  return companies.length === 0 ? (
    <div className="CreateCompany">
      <form onSubmit={handleSubmit}>
        <label>
          Enter name:
          <input
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
          />
        </label>
        <label>
          Enter Ticker:
          <input
            value={companyTicker}
            onChange={e => setCompanyTicker(e.target.value)}
          />
        </label>
        <label>
          Enter Exchange:
          <input
            value={companyExchange}
            onChange={e => setCompanyExchange(e.target.value)}
          />
          <button type="submit">Create Company</button>
        </label>
      </form>
    </div>
  ) : (
    <div>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
           <Link to={`/companies/${company.id}`}>
             {company.companyname}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  companies: state.companies.list,
  loading: state.companies.loading
});
export default connect(mapState)(CourseListPage);