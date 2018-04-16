import React from 'react'
import FilterLink from './FilterLink'
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../../constants/ActionTypes'


const FILL_TITLE = {
  [SHOW_ALL]: 'all',
  [SHOW_ACTIVE]: 'active',
  [SHOW_COMPLETED]: 'completed'
}
const Footer = (props) => {
  const {completedCount, activeCount, onClearCompleted} = props
  let itemWord = activeCount === 1 ? 'Item' : 'Items'

  return(
    <footer>
      <span>
        <strong>
          { activeCount || 'No' }
        </strong>
        { itemWord }left
      </span>
      <ul className={'selected'}>
        { Object.keys(FILL_TITLE).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              { FILL_TITLE[filter] }
            </FilterLink>
          </li>
        )}
      </ul>
      {
        !! completedCount &&
          <button onClick={onClearCompleted}>clear compelted</button>
      }
    </footer>
  )
}

export default Footer;