import styled from './ButtonSearch.module.scss'

import { AiOutlineSearch } from 'react-icons/ai'

export default function ButtonSearch() {
  return (
    <button className={styled.button}>
      <AiOutlineSearch className={styled.icon} />
    </button>
  )
}
