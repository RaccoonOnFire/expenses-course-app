

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

  function changedFilterYear (event) {
    props.onDataChanged(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Wybierz rok</label>
        <select value={props.selected} onChange={changedFilterYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

