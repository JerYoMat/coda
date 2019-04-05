import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { loadFins } from '../actions';


const CompanyDetailPage = ({ companyId, company, loading, loadFins, financials }) => {
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!company) {
    return <div>Not Found</div>;
  }

 if (company) {
  useEffect(() => {
    // dispatch an action
    loadFins(company.primarysymbol);
  }, [company]);
 }
  return (
    <div>
      placeholder {companyId}
      {financials.map(period => (
          <li key={period.id}>
            {period.fiscalyear}
          </li>
        ))}
    </div>
  )
}

const mapState = (state, ownProps) => {
  const companyId = parseInt(ownProps.companyId, 10);
  return {
    loading: state.companies.loading,
    company: state.companies.list.find(
      c => c.id === companyId
    ),
    financials: state.financials.periods
   
  }
}

export default connect(mapState, { loadFins })(CompanyDetailPage);