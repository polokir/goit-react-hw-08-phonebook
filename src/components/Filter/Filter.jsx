import { useDispatch, useSelector } from 'react-redux';
import { Label, Form, InputName, TextFilter } from './Filter.styled';

import { setFilter } from 'redux/filterSlice';
import { filterValue } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);
  return (
    <Form>
      <Label>
        <TextFilter>Find contacts by name</TextFilter>
        <InputName
          type="text"
          name="filter"
          title="find some contact"
          required
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </Label>
    </Form>
  );
};
