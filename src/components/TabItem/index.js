import {Component} from 'react'

import './index.css'

class TabItem extends Component {
  render() {
    const {tabItemList, onClickCategoryItem, isActive} = this.props
    const {tabId, displayText} = tabItemList
    const onClickCategory = () => {
      onClickCategoryItem(tabId)
    }
    const onActiveClassName = isActive ? 'onClickButton' : 'button'

    return (
      <li className="list-items ">
        <button
          className={onActiveClassName}
          onClick={onClickCategory}
          type="button"
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
