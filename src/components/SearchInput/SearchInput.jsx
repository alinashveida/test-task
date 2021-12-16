import styled from './SearchInput.module.scss'
import PropTypes from 'prop-types'

export default function SearchInput({ value, setValue }) {
  const changeSearch = (e) => {
    setValue(e.target.value)
    console.log(value)
  }
  return (
    <>
      <label className={styled.label}>
        <input
          className={styled.searchInput}
          type="search"
          value={value}
          placeholder="Search a Project with Name, Task, User..."
          onChange={changeSearch}
        ></input>
      </label>
    </>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
}
