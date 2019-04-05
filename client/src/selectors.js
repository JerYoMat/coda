import { createSelector } from 'reselect';

const getCompany = state => state.companies.list;
const parseCompanyId = (state, props) =>
  parseInt(props.companyId, 10);

export const getCompanyDetails = createSelector(
  getCompany,
  parseCompanyId,
  (companies, companyId) =>
    companies.filter(company => company.companyId === companyId)
);